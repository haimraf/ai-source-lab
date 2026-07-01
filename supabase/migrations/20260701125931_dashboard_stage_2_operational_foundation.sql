create schema if not exists dashboard_private;

comment on schema dashboard_private is
  'Private dashboard operational data. Do not expose through browser roles or public APIs.';

create table dashboard_private.audit_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  action text not null check (
    action in (
      'auth.magic_link_requested',
      'auth.login_succeeded',
      'auth.access_denied',
      'auth.logout'
    )
  ),
  result text not null check (result in ('success', 'denied', 'error')),
  actor_user_id uuid,
  subject_hash text check (subject_hash ~ '^[a-f0-9]{64}$'),
  request_id text not null default gen_random_uuid()::text check (length(request_id) between 1 and 128),
  reason_code text check (reason_code ~ '^[a-z0-9_.:-]{1,80}$'),
  schema_version integer not null default 1 check (schema_version = 1)
);

comment on table dashboard_private.audit_events is
  'Append-only dashboard audit events with safe hashes and reason codes only.';

create function dashboard_private.prevent_audit_event_mutation()
returns trigger
language plpgsql
as $$
begin
  raise exception 'dashboard audit events are append-only';
end;
$$;

create trigger audit_events_append_only
before update or delete on dashboard_private.audit_events
for each row execute function dashboard_private.prevent_audit_event_mutation();

alter table dashboard_private.audit_events enable row level security;
alter table dashboard_private.audit_events force row level security;

create table dashboard_private.rate_limit_buckets (
  key_hash text not null check (key_hash ~ '^[a-f0-9]{64}$'),
  limit_type text not null check (limit_type in ('email', 'network')),
  window_start timestamptz not null,
  expires_at timestamptz not null check (expires_at > window_start),
  attempt_count integer not null default 0 check (attempt_count >= 0),
  updated_at timestamptz not null default now(),
  schema_version integer not null default 1 check (schema_version = 1),
  primary key (limit_type, key_hash, window_start)
);

comment on table dashboard_private.rate_limit_buckets is
  'Durable rate-limit buckets keyed by HMAC-derived hashes only.';

create index rate_limit_buckets_expires_at_idx
  on dashboard_private.rate_limit_buckets (expires_at);

alter table dashboard_private.rate_limit_buckets enable row level security;
alter table dashboard_private.rate_limit_buckets force row level security;

create function dashboard_private.append_audit_event(
  p_action text,
  p_result text,
  p_actor_user_id uuid default null,
  p_subject_hash text default null,
  p_request_id text default null,
  p_reason_code text default null
)
returns uuid
language plpgsql
security definer
set search_path = dashboard_private, pg_temp
as $$
declare
  inserted_id uuid;
begin
  insert into dashboard_private.audit_events (
    action,
    result,
    actor_user_id,
    subject_hash,
    request_id,
    reason_code
  )
  values (
    p_action,
    p_result,
    p_actor_user_id,
    nullif(btrim(p_subject_hash), ''),
    coalesce(nullif(btrim(p_request_id), ''), gen_random_uuid()::text),
    nullif(btrim(p_reason_code), '')
  )
  returning id into inserted_id;

  return inserted_id;
end;
$$;

create function dashboard_private.list_recent_audit_events(p_limit integer default 50)
returns table (
  id uuid,
  created_at timestamptz,
  action text,
  result text,
  actor_user_id uuid,
  subject_hash text,
  request_id text,
  reason_code text,
  schema_version integer
)
language sql
security definer
set search_path = dashboard_private, pg_temp
as $$
  select
    audit_events.id,
    audit_events.created_at,
    audit_events.action,
    audit_events.result,
    audit_events.actor_user_id,
    audit_events.subject_hash,
    audit_events.request_id,
    audit_events.reason_code,
    audit_events.schema_version
  from dashboard_private.audit_events
  order by audit_events.created_at desc
  limit least(greatest(coalesce(p_limit, 50), 1), 100);
$$;

create function dashboard_private.consume_rate_limit(
  p_limit_type text,
  p_key_hash text,
  p_window_start timestamptz,
  p_expires_at timestamptz,
  p_max_attempts integer
)
returns table (
  allowed boolean,
  attempt_count integer,
  retry_after_seconds integer
)
language sql
security definer
set search_path = dashboard_private, pg_temp
as $$
  with checked_input as (
    select
      p_limit_type as limit_type,
      p_key_hash as key_hash,
      p_window_start as window_start,
      p_expires_at as expires_at,
      p_max_attempts as max_attempts
    where p_limit_type in ('email', 'network')
      and p_key_hash ~ '^[a-f0-9]{64}$'
      and p_expires_at > p_window_start
      and p_max_attempts > 0
  ),
  bucket as (
    insert into dashboard_private.rate_limit_buckets (
      limit_type,
      key_hash,
      window_start,
      expires_at,
      attempt_count,
      updated_at
    )
    select
      checked_input.limit_type,
      checked_input.key_hash,
      checked_input.window_start,
      checked_input.expires_at,
      1,
      now()
    from checked_input
    on conflict (limit_type, key_hash, window_start)
    do update set
      attempt_count = dashboard_private.rate_limit_buckets.attempt_count + 1,
      expires_at = greatest(dashboard_private.rate_limit_buckets.expires_at, excluded.expires_at),
      updated_at = now()
    returning
      dashboard_private.rate_limit_buckets.attempt_count,
      dashboard_private.rate_limit_buckets.expires_at
  )
  select
    bucket.attempt_count <= p_max_attempts as allowed,
    bucket.attempt_count,
    greatest(0, ceil(extract(epoch from (bucket.expires_at - now())))::integer) as retry_after_seconds
  from bucket;
$$;

create function dashboard_private.cleanup_expired_rate_limit_buckets(p_now timestamptz default now())
returns integer
language plpgsql
security definer
set search_path = dashboard_private, pg_temp
as $$
declare
  deleted_count integer;
begin
  with deleted as (
    delete from dashboard_private.rate_limit_buckets
    where expires_at < p_now
    returning 1
  )
  select count(*) into deleted_count from deleted;

  return deleted_count;
end;
$$;

revoke all on schema dashboard_private from public, anon, authenticated;
revoke all on all tables in schema dashboard_private from public, anon, authenticated;
revoke all on all functions in schema dashboard_private from public, anon, authenticated;

grant usage on schema dashboard_private to service_role;
grant execute on function dashboard_private.append_audit_event(
  text,
  text,
  uuid,
  text,
  text,
  text
) to service_role;
grant execute on function dashboard_private.list_recent_audit_events(integer) to service_role;
grant execute on function dashboard_private.consume_rate_limit(
  text,
  text,
  timestamptz,
  timestamptz,
  integer
) to service_role;
grant execute on function dashboard_private.cleanup_expired_rate_limit_buckets(timestamptz) to service_role;
