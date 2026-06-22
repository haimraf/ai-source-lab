# Stage 2 Dashboard Admin Shell Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Deliver a private, Hebrew-first, read-only dashboard for one allowlisted owner, backed by Supabase Auth plus minimal audit and rate-limit operations, while Git remains the only source of truth for public content.

**Architecture:** Keep the root Next.js layout minimal, isolate the existing public chrome and Vercel telemetry in a `(public)` route group, and place all dashboard/internal UI in a telemetry-free `(dashboard)` route group. Supabase is accessed only from server code: request-scoped SSR clients manage cookies, while a lazy service-role client calls narrowly granted Postgres functions for audit, rate limiting and health. Every protected page and action calls `requireDashboardUser()`; proxy refresh is convenience only.

**Tech Stack:** Next.js 16.2 App Router, React 19.2, TypeScript, Vitest, Supabase Auth/Postgres, `@supabase/ssr`, `@supabase/supabase-js`, Vercel.

---

## Delivery boundaries

Implement this plan as four reviewable PRs after the security prerequisite below. Do not combine them with claims, content, OG, workflow, sitemap content, topic or page-design work.

1. **PR A - route-group isolation:** public/dashboard layout boundaries and route parity only.
2. **PR B - operational foundation:** dependencies, environment contract, Supabase migration, typed server adapters and unit tests.
3. **PR C - authentication shell:** Magic Link, callback, session refresh, authoritative guard, login/logout and minimal protected shell.
4. **PR D - read-only operations:** content status, health, audit, overview, `/internal` protection, operational documentation and production gate.

Stage 2 remains `in progress` throughout PRs A-D. Mark it complete only after all four PRs are merged, the recovery drill succeeds and production verification is recorded.

### Security prerequisite outside Stage 2

The repository currently pins `react` and `react-dom` at `19.2.0`; the registry reports `19.2.7` as current on 2026-06-22. Before introducing authentication secrets, open a separate security-only PR that runs `npm install react@19.2.7 react-dom@19.2.7`, then executes the full test/typecheck/build gate. Do not mix that dependency patch into PR A or any dashboard/content change.

## Locked file structure

### Public shell

- `app/layout.tsx`: document-wide HTML/body, fonts and global CSS only.
- `app/(public)/layout.tsx`: public metadata, schema, chrome, reading-time injector, Web Analytics and Speed Insights.
- `components/PublicSiteShell.tsx`: existing public header, navigation, footer and telemetry composition.
- `app/(public)/**`: existing public UI routes, preserving their current URLs.
- `app/api/**` and `app/llms.txt/route.ts`: remain outside UI route groups.

### Dashboard application

- `app/(dashboard)/layout.tsx`: private metadata and telemetry-free dashboard document shell.
- `app/(dashboard)/dashboard/login/page.tsx`: generic Magic Link request UI.
- `app/(dashboard)/dashboard/auth/callback/route.ts`: server callback and session establishment.
- `app/(dashboard)/dashboard/actions.ts`: login and logout server actions.
- `app/(dashboard)/dashboard/{page,content,health,audit}/page.tsx`: protected read-only pages.
- `app/(dashboard)/internal/content-status/page.tsx`: protected compatibility redirect.
- `components/dashboard/**`: presentational, read-only dashboard components.

### Server-only dashboard modules

- `lib/dashboard/config.ts`: validated lazy environment access.
- `lib/dashboard/identity.ts`: email normalization, timing-safe allowlist and HMAC identifiers.
- `lib/dashboard/request-integrity.ts`: same-origin and trusted-network parsing.
- `lib/dashboard/supabase/server.ts`: request-scoped SSR auth client.
- `lib/dashboard/supabase/service.ts`: lazy service-role operational client.
- `lib/dashboard/session.ts`: `requireDashboardUser()` and minimal principal.
- `lib/dashboard/audit.ts`: sanitized append/list adapter.
- `lib/dashboard/rate-limit.ts`: durable atomic limit adapter.
- `lib/dashboard/health.ts`: independent bounded read-only health checks.
- `lib/dashboard/content-status.ts`: dashboard aggregate derived from existing Git records.

### Database and operations

- `supabase/config.toml`: local non-production Supabase configuration.
- `supabase/migrations/<generated>_dashboard_stage_2.sql`: private tables and service-only functions.
- `.env.example`: variable names and safe comments only.
- `docs/dashboard-operations.md`: provisioning, callbacks, retention, export, restore and production verification.
- `scripts/dashboard/export-operational-data.ts`: UTF-8 JSONL export.
- `scripts/dashboard/verify-operational-export.ts`: schema/order/integrity verification.

## PR A - Isolate the public shell

### Task 1: Add route-group parity tests before moving routes

**Files:**
- Create: `lib/dashboard/public-shell.repository.test.ts`
- Modify: `lib/content-integrity.repository.test.ts`
- Modify: direct `../../app/claims/...` imports under `lib/content/*.test.tsx`
- Modify: `lib/claims-db.test.ts`

- [ ] **Step 1: Write a failing repository test for the intended boundaries**

```ts
import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

describe("public and dashboard shell boundaries", () => {
  it("keeps public telemetry out of the root and dashboard layouts", () => {
    const root = readFileSync("app/layout.tsx", "utf8");
    const publicLayout = readFileSync("app/(public)/layout.tsx", "utf8");
    expect(root).not.toMatch(/Analytics|SpeedInsights|site-header|site-footer/);
    expect(publicLayout).toMatch(/PublicSiteShell/);
    expect(existsSync("app/(dashboard)/layout.tsx")).toBe(true);
  });
});
```

- [ ] **Step 2: Run the test and verify it fails because route-group layouts do not exist**

Run: `npx vitest run lib/dashboard/public-shell.repository.test.ts`

Expected: FAIL reading `app/(public)/layout.tsx`.

- [ ] **Step 3: Update all repository path assertions and imports to the future `(public)` paths**

Replace `app/claims` with `app/(public)/claims`, `app/topics` with `app/(public)/topics`, and `../app/llms.txt/route` with the unchanged `../app/llms.txt/route`. Do not change runtime URLs or claim records.

- [ ] **Step 4: Commit the failing tests**

```bash
git add lib
git commit -m "test: define dashboard shell boundaries"
```

### Task 2: Split the layouts and move public UI routes

**Files:**
- Modify: `app/layout.tsx`
- Create: `app/(public)/layout.tsx`
- Create: `app/(dashboard)/layout.tsx`
- Create: `components/PublicSiteShell.tsx`
- Move: `app/page.tsx`, `app/about`, `app/accessibility`, `app/claims`, `app/corrections`, `app/editorial-policy`, `app/how-to-cite`, `app/methodology`, `app/privacy`, `app/suggest-claim`, `app/topics` into `app/(public)/`
- Keep: `app/api`, `app/llms.txt`, `app/internal`

- [ ] **Step 1: Reduce the root layout to document-wide concerns**

```tsx
import "@fontsource-variable/heebo";
import "./design-tokens.css";
import "./globals.css";
import "./theme.css";
import "./components.css";
import "./polish.css";
import "./accessibility.css";
import "./editorial-system.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 2: Extract the current header/main/footer/telemetry markup without visual edits**

`PublicSiteShell` must render the existing skip link, header, `<main id="main-content" className="container">`, `ReadingTimeInjector`, mobile navigation, footer, `<Analytics />` and `<SpeedInsights />` in the same order as today.

Move the existing `siteTitle`, `siteDescription`, `metadataBase` and `createSiteSchema(siteUrl)` output into the public layout/shell unchanged. The root layout must not become the owner of public metadata or schema because dashboard routes inherit it.

- [ ] **Step 3: Create the public layout**

```tsx
import type { Metadata } from "next";
import { PublicSiteShell } from "@/components/PublicSiteShell";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <PublicSiteShell>{children}</PublicSiteShell>;
}
```

- [ ] **Step 4: Create an empty telemetry-free dashboard layout**

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return <main id="dashboard-content">{children}</main>;
}
```

- [ ] **Step 5: Move routes with `git mv`, update test imports, then run parity checks**

After each move, convert project-root relative imports inside moved route files to the existing `@/` alias (for example `../../../content/claims` becomes `@/content/claims`). Keep only same-directory CSS/component imports relative. This prevents the extra `(public)` filesystem segment from silently breaking claim pages or OG routes.

Run:

```bash
npm test
npm run check:content
npm run typecheck
npm run build
```

Expected: all tests pass; build lists the same public URLs, all 14 claim OG routes and both API OG routes; `/dashboard` does not exist yet.

- [ ] **Step 6: Commit PR A**

```bash
git add app components lib
git commit -m "Separate public and dashboard shells"
```

## PR B - Supabase operational foundation

### Task 3: Add pinned server dependencies and configuration contract

**Files:**
- Modify: `package.json`, `package-lock.json`, `.env.example`
- Create: `lib/dashboard/config.ts`, `lib/dashboard/config.test.ts`
- Create: `lib/dashboard/identity.ts`, `lib/dashboard/identity.test.ts`
- Create: `lib/dashboard/request-integrity.ts`, `lib/dashboard/request-integrity.test.ts`

- [ ] **Step 1: Install only the required packages**

Run: `npm install @supabase/ssr @supabase/supabase-js server-only && npm install --save-dev supabase`

- [ ] **Step 2: Add server-only environment names without values**

```dotenv
SUPABASE_URL=
SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DASHBOARD_ADMIN_EMAIL=
DASHBOARD_RATE_LIMIT_HMAC_SECRET=
DASHBOARD_BASE_URL=
DASHBOARD_ALLOWED_CALLBACK_URLS=
GITHUB_REPOSITORY=haimraf/ai-source-lab
GITHUB_DEFAULT_BRANCH=main
GITHUB_READ_TOKEN=
```

No dashboard variable receives a `NEXT_PUBLIC_` prefix.

- [ ] **Step 3: Write failing tests for fail-closed config, normalization and HMAC output**

Test these exact contracts:

```ts
expect(normalizeDashboardEmail(" Owner@Example.COM ")).toBe("owner@example.com");
expect(isDashboardEmailAllowed("owner@example.com", "owner@example.com")).toBe(true);
expect(isDashboardEmailAllowed("other@example.com", "owner@example.com")).toBe(false);
expect(hashDashboardIdentifier("email", "owner@example.com", "secret")).toMatch(/^[a-f0-9]{64}$/);
expect(hashDashboardIdentifier("email", "owner@example.com", "secret"))
  .not.toContain("owner@example.com");
```

- [ ] **Step 4: Implement timing-safe comparison and scoped HMAC identifiers**

```ts
import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const normalizeDashboardEmail = (value: string) => value.trim().toLowerCase();

export function isDashboardEmailAllowed(supplied: string, configured: string): boolean {
  const left = createHash("sha256").update(normalizeDashboardEmail(supplied)).digest();
  const right = createHash("sha256").update(normalizeDashboardEmail(configured)).digest();
  return timingSafeEqual(left, right);
}

export function hashDashboardIdentifier(kind: "email" | "network", value: string, secret: string) {
  return createHmac("sha256", secret).update(`${kind}:${value}`).digest("hex");
}
```

- [ ] **Step 5: Implement pure same-origin and trusted-network helpers**

Only accept `x-forwarded-for` when `VERCEL === "1"`; hash the first normalized address immediately and never return or log the raw value. Login/logout reject missing or mismatched `Origin`/`Host` with a safe correlation ID.

- [ ] **Step 6: Run unit tests and commit**

Run: `npx vitest run lib/dashboard/config.test.ts lib/dashboard/identity.test.ts lib/dashboard/request-integrity.test.ts`

```bash
git add package.json package-lock.json .env.example lib/dashboard
git commit -m "Add dashboard server configuration"
```

### Task 4: Create the private operational schema

**Files:**
- Create: `supabase/config.toml`
- Create: `supabase/migrations/<CLI-generated>_dashboard_stage_2.sql`
- Create: `supabase/tests/dashboard_stage_2.sql`

- [ ] **Step 1: Initialize Supabase and create the migration through the CLI**

Run:

```bash
npx supabase init
npx supabase migration new dashboard_stage_2
```

- [ ] **Step 2: Define private tables and an exposed service-only API schema**

The migration must create:

```sql
create schema if not exists dashboard_private;
create schema if not exists dashboard_api;

create table dashboard_private.audit_events (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  action text not null check (action in (
    'auth.magic_link_requested', 'auth.login_succeeded',
    'auth.access_denied', 'auth.logout'
  )),
  result text not null check (result in ('success', 'denied', 'error')),
  actor_user_id uuid,
  subject_hash text check (subject_hash is null or subject_hash ~ '^[a-f0-9]{64}$'),
  correlation_id uuid not null,
  reason_code text,
  schema_version integer not null default 1 check (schema_version = 1)
);

create table dashboard_private.rate_limits (
  key_hash text not null check (key_hash ~ '^[a-f0-9]{64}$'),
  limit_type text not null check (limit_type in ('email', 'network')),
  window_start timestamptz not null,
  expires_at timestamptz not null,
  attempt_count integer not null check (attempt_count > 0),
  primary key (key_hash, limit_type, window_start)
);

alter table dashboard_private.audit_events enable row level security;
alter table dashboard_private.audit_events force row level security;
alter table dashboard_private.rate_limits enable row level security;
alter table dashboard_private.rate_limits force row level security;
```

- [ ] **Step 3: Add security-invoker functions with explicit grants**

Create `dashboard_api.append_audit_event`, `list_audit_events`, `consume_rate_limit`, `healthcheck` and `delete_expired_rate_limits`. Functions use `security invoker`, a fixed `search_path`, bounded parameters and no dynamic SQL. Revoke schema/table/function access from `public`, `anon` and `authenticated`; explicitly grant `service_role` usage on both schemas, the minimum table privileges required by each function, and exact function execution. `dashboard_private` is never added to Data API exposed schemas; expose only `dashboard_api` for these RPC calls.

Use these exact SQL contracts (formatting may change, behavior may not):

```sql
create or replace function dashboard_api.append_audit_event(
  p_action text,
  p_result text,
  p_actor_user_id uuid,
  p_subject_hash text,
  p_correlation_id uuid,
  p_reason_code text default null
) returns uuid
language plpgsql
security invoker
set search_path = pg_catalog, dashboard_private
as $$
declare v_id uuid;
begin
  insert into dashboard_private.audit_events (
    action, result, actor_user_id, subject_hash, correlation_id, reason_code
  ) values (
    p_action, p_result, p_actor_user_id, p_subject_hash, p_correlation_id, p_reason_code
  ) returning id into v_id;
  return v_id;
end;
$$;

create or replace function dashboard_api.list_audit_events(p_limit integer default 50)
returns table (
  id uuid, created_at timestamptz, action text, result text,
  actor_user_id uuid, subject_hash text, correlation_id uuid,
  reason_code text, schema_version integer
)
language sql
security invoker
set search_path = pg_catalog, dashboard_private
as $$
  select a.id, a.created_at, a.action, a.result, a.actor_user_id,
         a.subject_hash, a.correlation_id, a.reason_code, a.schema_version
  from dashboard_private.audit_events a
  order by a.created_at desc, a.id desc
  limit least(greatest(p_limit, 1), 100);
$$;

create or replace function dashboard_api.consume_rate_limit(
  p_key_hash text,
  p_limit_type text,
  p_limit integer,
  p_window_seconds integer
) returns table (allowed boolean, remaining integer, expires_at timestamptz)
language plpgsql
security invoker
set search_path = pg_catalog, dashboard_private
as $$
declare
  v_window_start timestamptz;
  v_expires_at timestamptz;
  v_count integer;
begin
  if p_key_hash !~ '^[a-f0-9]{64}$'
     or p_limit_type not in ('email', 'network')
     or p_limit < 1 or p_window_seconds < 1 then
    raise exception 'invalid_rate_limit_input';
  end if;

  v_window_start := to_timestamp(
    floor(extract(epoch from clock_timestamp()) / p_window_seconds) * p_window_seconds
  );
  v_expires_at := v_window_start + make_interval(secs => p_window_seconds);

  insert into dashboard_private.rate_limits as r (
    key_hash, limit_type, window_start, expires_at, attempt_count
  ) values (
    p_key_hash, p_limit_type, v_window_start, v_expires_at, 1
  )
  on conflict (key_hash, limit_type, window_start)
  do update set attempt_count = r.attempt_count + 1,
                expires_at = excluded.expires_at
  where r.attempt_count < p_limit
  returning attempt_count into v_count;

  if v_count is null then
    select r.attempt_count, r.expires_at
      into v_count, v_expires_at
    from dashboard_private.rate_limits r
    where r.key_hash = p_key_hash
      and r.limit_type = p_limit_type
      and r.window_start = v_window_start;
    return query select false, 0, v_expires_at;
  else
    return query select true, greatest(p_limit - v_count, 0), v_expires_at;
  end if;
end;
$$;

create or replace function dashboard_api.healthcheck()
returns table (schema_version integer, database_time timestamptz)
language sql
security invoker
set search_path = pg_catalog
as $$ select 1, now(); $$;

create or replace function dashboard_api.delete_expired_rate_limits()
returns bigint
language sql
security invoker
set search_path = pg_catalog, dashboard_private
as $$
  with deleted as (
    delete from dashboard_private.rate_limits where expires_at < now() returning 1
  ) select count(*) from deleted;
$$;

revoke all on schema dashboard_private, dashboard_api from public, anon, authenticated;
revoke all on all tables in schema dashboard_private from public, anon, authenticated;
revoke execute on all functions in schema dashboard_api from public, anon, authenticated;
grant usage on schema dashboard_private, dashboard_api to service_role;
grant select, insert on dashboard_private.audit_events to service_role;
grant select, insert, update, delete on dashboard_private.rate_limits to service_role;
grant execute on function dashboard_api.append_audit_event(text,text,uuid,text,uuid,text) to service_role;
grant execute on function dashboard_api.list_audit_events(integer) to service_role;
grant execute on function dashboard_api.consume_rate_limit(text,text,integer,integer) to service_role;
grant execute on function dashboard_api.healthcheck() to service_role;
grant execute on function dashboard_api.delete_expired_rate_limits() to service_role;
```

`consume_rate_limit` performs one `INSERT ... ON CONFLICT DO UPDATE` transaction and returns `{ allowed, remaining, expires_at }`. It must never increment above the configured limit.

- [ ] **Step 4: Add SQL assertions**

The SQL test verifies:

- `anon` and `authenticated` cannot select either table or execute any dashboard function;
- `service_role` can append/list audit events;
- the fourth email attempt in a 15-minute window is denied;
- the eleventh network attempt is denied;
- no raw email or IP exists in either table;
- expired counters are deleted by `delete_expired_rate_limits`.

- [ ] **Step 5: Verify locally and commit**

Run:

```bash
npx supabase start
npx supabase db reset
npx supabase test db
npx supabase db lint
npx supabase stop
```

```bash
git add supabase
git commit -m "Add dashboard operational schema"
```

### Task 5: Add narrow server-only Supabase adapters

**Files:**
- Create: `lib/dashboard/supabase/server.ts`
- Create: `lib/dashboard/supabase/service.ts`
- Create: `lib/dashboard/audit.ts`, `lib/dashboard/audit.test.ts`
- Create: `lib/dashboard/rate-limit.ts`, `lib/dashboard/rate-limit.test.ts`

- [ ] **Step 1: Write failing tests with injected fake clients**

Tests assert exact RPC names and payloads, a maximum audit page size of 100, sanitization rejection for unknown fields, and fail-closed rate-limit errors.

- [ ] **Step 2: Implement lazy clients**

```ts
export async function createDashboardAuthClient() {
  const cookieStore = await cookies();
  const config = getDashboardConfig();
  return createServerClient(config.supabaseUrl, config.supabasePublishableKey, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (items) => items.forEach(({ name, value, options }) =>
        cookieStore.set(name, value, options)),
    },
  });
}
```

The service client is initialized lazily inside `getDashboardServiceClient()`, disables session persistence/refresh/detection, uses only the service-role key and defaults to `dashboard_api`.

- [ ] **Step 3: Implement typed audit and rate-limit wrappers**

`appendAuditEvent()` accepts only the approved enum fields. `listAuditEvents(limit)` clamps to `1..100`. `consumeNetworkLimit()` runs for every request; `consumeAllowedEmailLimit()` runs only after the address passes the allowlist check. Either wrapper throws a typed unavailable error on storage failure so callers send no Magic Link.

- [ ] **Step 4: Run tests and commit PR B**

Run: `npx vitest run lib/dashboard`

```bash
git add lib/dashboard
git commit -m "Add dashboard operational adapters"
```

## PR C - Authentication and protected shell

### Task 6: Implement the authoritative session guard

**Files:**
- Create: `lib/dashboard/session.ts`, `lib/dashboard/session.test.ts`
- Create: `lib/dashboard/supabase/proxy.ts`
- Create: `proxy.ts`, `lib/dashboard/proxy.test.ts`

- [ ] **Step 1: Write failing guard tests**

Cover: missing user redirects to `/dashboard/login`; allowlisted verified user returns exactly `{ userId, role: "admin" }`; nonallowlisted user triggers `signOut()` before denial; provider errors fail closed.

- [ ] **Step 2: Implement `requireDashboardUser()`**

```ts
export type DashboardPrincipal = Readonly<{ userId: string; role: "admin" }>;

export async function requireDashboardUser(): Promise<DashboardPrincipal> {
  const client = await createDashboardAuthClient();
  const { data, error } = await client.auth.getUser();
  if (error || !data.user?.email) redirect("/dashboard/login");
  if (!isDashboardEmailAllowed(data.user.email, getDashboardConfig().adminEmail)) {
    await client.auth.signOut();
    redirect("/dashboard/login");
  }
  return { userId: data.user.id, role: "admin" };
}
```

- [ ] **Step 3: Add proxy cookie refresh as a non-authoritative optimization**

`proxy.ts` matches `/dashboard/:path*` and `/internal/:path*`, delegates cookie refresh to `lib/dashboard/supabase/proxy.ts`, and performs no authorization decision. Tests assert that protected source files still call `requireDashboardUser()`.

- [ ] **Step 4: Run tests and commit**

```bash
npx vitest run lib/dashboard/session.test.ts lib/dashboard/proxy.test.ts
git add lib/dashboard proxy.ts
git commit -m "Add dashboard session guard"
```

### Task 7: Implement generic Magic Link and logout flows

**Files:**
- Create: `app/(dashboard)/dashboard/actions.ts`
- Create: `app/(dashboard)/dashboard/login/page.tsx`
- Create: `app/(dashboard)/dashboard/login/page.module.css`
- Create: `app/(dashboard)/dashboard/auth/callback/route.ts`
- Create: `lib/dashboard/auth-flow.ts`, `lib/dashboard/auth-flow.test.ts`

- [ ] **Step 1: Write failing orchestration tests**

Assert that the network limit runs before allowlist comparison, the email limit runs only for the allowlisted address, Supabase receives only that address, every login attempt returns the same public result, `shouldCreateUser` is false, callback rechecks the allowlist, audit failure revokes a newly established session, and logout always signs out even when audit fails.

- [ ] **Step 2: Implement login orchestration**

```ts
await consumeNetworkLimit(networkHash);
if (isDashboardEmailAllowed(email, config.adminEmail)) {
  await consumeAllowedEmailLimit(emailHash);
  await auth.auth.signInWithOtp({
    email: normalizeDashboardEmail(email),
    options: {
      shouldCreateUser: false,
      emailRedirectTo: `${config.baseUrl}/dashboard/auth/callback`,
    },
  });
  await appendAuditEvent({
    action: "auth.magic_link_requested",
    result: "success",
    subjectHash: emailHash,
    correlationId,
  });
}
return { message: "אם הכתובת מורשית, קישור התחברות נשלח אליה." };
```

The server action validates same-origin headers, generates a UUID correlation ID, never returns provider detail and never stores raw email/network values. Denied addresses may record `auth.access_denied` with the email HMAC and a safe reason code; audit failure never changes the generic browser response.

- [ ] **Step 3: Implement callback and logout**

The callback accepts only a single `code`, validates that its exact callback URL and origin appear in `DASHBOARD_ALLOWED_CALLBACK_URLS`, calls `exchangeCodeForSession(code)`, then `getUser()`, repeats the allowlist check, records `auth.login_succeeded`, and redirects to `/dashboard`. Any invalid/nonallowlisted session is signed out. Audit failure after authentication signs out and redirects to `/dashboard/login?error=unavailable&cid=<uuid>`.

Logout is a same-origin POST server action. It calls `requireDashboardUser()`, attempts `auth.logout` audit, always calls `signOut()` in `finally`, then redirects to login.

- [ ] **Step 4: Build the Hebrew generic login page**

Render one email input and submit button, no provider/allowlist detail, no public analytics and no active “coming soon” controls. Error output is a fixed Hebrew sentence plus validated UUID correlation ID only.

- [ ] **Step 5: Run tests and commit**

```bash
npx vitest run lib/dashboard/auth-flow.test.ts app/\(dashboard\)/dashboard/login
git add app/\(dashboard\)/dashboard lib/dashboard/auth-flow*
git commit -m "Add dashboard Magic Link authentication"
```

### Task 8: Add the minimal protected dashboard shell

**Files:**
- Modify: `app/(dashboard)/layout.tsx`
- Create: `app/(dashboard)/dashboard/layout.tsx`
- Create: `app/(dashboard)/dashboard/page.tsx`
- Create: `app/(dashboard)/dashboard/dashboard.module.css`
- Create: `components/dashboard/DashboardNav.tsx`
- Create: `app/(dashboard)/dashboard/dashboard-pages.test.tsx`

- [ ] **Step 1: Write failing source-contract tests**

Each protected `page.tsx`, the dashboard layout and logout action must contain or invoke `requireDashboardUser()`. The dashboard tree must not import `@vercel/analytics`, `@vercel/speed-insights`, `PublicSiteShell` or public navigation.

- [ ] **Step 2: Implement a Hebrew-first RTL shell**

The layout awaits `requireDashboardUser()` and renders only the authenticated shell, overview and POST logout form. Do not render links or controls for content/health/audit until their routes exist in PR D. The overview initially shows read-only status text labelled unavailable; these states are plain text, not buttons.

- [ ] **Step 3: Run tests and commit PR C**

```bash
npx vitest run lib/dashboard app/\(dashboard\)/dashboard
npm run typecheck
npm run build
git add app/\(dashboard\) components/dashboard
git commit -m "Add protected dashboard shell"
```

## PR D - Read-only operational views and production gate

### Task 9: Move the shared content report behind authorization

**Files:**
- Create: `lib/dashboard/content-status.ts`, `lib/dashboard/content-status.test.ts`
- Create: `app/(dashboard)/dashboard/content/page.tsx`
- Move: `app/internal/content-status/page.module.css` to `app/(dashboard)/dashboard/content/page.module.css`
- Replace: `app/internal/content-status/page.tsx` with `app/(dashboard)/internal/content-status/page.tsx`
- Move/update: `app/internal/content-status/page.test.tsx`

- [ ] **Step 1: Extract aggregate calculation without duplicating claim data**

`getDashboardContentStatus()` imports `claimContentRecords` and `getAllClaimsContentStatus()` and returns rows plus totals. It must not import Supabase and must not expose `workflow.updateReason`.

- [ ] **Step 2: Protect both routes**

```tsx
export default async function DashboardContentPage() {
  await requireDashboardUser();
  const report = getDashboardContentStatus();
  return <ContentStatusReport report={report} />;
}
```

```tsx
export default async function LegacyInternalContentStatusPage() {
  await requireDashboardUser();
  redirect("/dashboard/content");
}
```

- [ ] **Step 3: Verify Git remains canonical**

Tests assert all current claim slugs render, no Supabase table contains claim fields, `/internal/content-status` cannot render without the guard, and the dashboard remains form/input-free except logout.

### Task 10: Add bounded health and audit views

**Files:**
- Create: `lib/dashboard/health.ts`, `lib/dashboard/health.test.ts`
- Create: `app/(dashboard)/dashboard/health/page.tsx`
- Create: `app/(dashboard)/dashboard/audit/page.tsx`
- Create: `components/dashboard/HealthTable.tsx`
- Create: `components/dashboard/AuditTable.tsx`
- Modify: `app/(dashboard)/dashboard/page.tsx`

- [ ] **Step 1: Write failing health aggregation tests**

Use injected checks to prove: checks run independently with `Promise.allSettled`; each has a 3-second timeout; one failure produces `degraded` without hiding successful checks; output contains safe reason codes only; no response body, stack or credential is returned.

- [ ] **Step 2: Implement read-only checks**

Define:

```ts
type HealthState = "healthy" | "degraded" | "unavailable";
type HealthCheck = Readonly<{
  id: "supabase-auth" | "database" | "audit-read" | "github-main" | "deployment";
  state: HealthState;
  checkedAt: string;
  reasonCode?: string;
}>;
```

Checks call only `dashboard_api.healthcheck`, bounded audit list, GitHub `GET /repos/{owner}/{repo}/commits/{branch}`, and local `VERCEL_GIT_COMMIT_SHA`. GitHub fetch uses `AbortSignal.timeout(3000)` and an optional read-only server token. No health code exposes write methods.

- [ ] **Step 3: Implement protected pages**

Every page calls `requireDashboardUser()` directly. Audit shows at most 100 recent events and only approved fields. Overview composes content totals, aggregate health, deployed commit and five recent audit events. At this point add real navigation links to overview/content/health/audit because all four destinations now exist.

### Task 11: Enforce privacy, discovery and cache controls

**Files:**
- Modify: `next.config.ts`
- Modify: `public/robots.txt`
- Modify: `lib/security-headers.test.ts`
- Create: `lib/dashboard/discovery.repository.test.ts`
- Modify: `app/llms.txt/route.ts` tests only; generated output remains public-content-only

- [ ] **Step 1: Add failing header/discovery tests**

Assert both `/dashboard/:path*` and `/internal/:path*` receive `Cache-Control: private, no-store` and `X-Robots-Tag: noindex, nofollow, noarchive`; robots disallows `/dashboard/` and `/internal/`; sitemap and llms contain neither prefix; protected layouts contain no public telemetry imports.

- [ ] **Step 2: Add explicit header rules before the global rule**

```ts
const privateHeaders = [
  { key: "Cache-Control", value: "private, no-store" },
  { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
];

return [
  { source: "/dashboard/:path*", headers: privateHeaders },
  { source: "/internal/:path*", headers: privateHeaders },
  { source: "/(.*)", headers: securityHeaders },
];
```

- [ ] **Step 3: Update robots without treating it as authorization**

Add `Disallow: /dashboard/` and `Disallow: /internal/` to each applicable user-agent group. Tests and documentation must state that `requireDashboardUser()` is the real security boundary.

### Task 12: Add export, restore and operating procedures

**Files:**
- Create: `scripts/dashboard/export-operational-data.ts`
- Create: `scripts/dashboard/verify-operational-export.ts`
- Create: `scripts/dashboard/export-operational-data.test.ts`
- Create: `docs/dashboard-operations.md`
- Modify: `package.json`
- Modify: `docs/editorial-roadmap.md`
- Modify: `docs/superpowers/plans/2026-06-22-editorial-dashboard-roadmap-design.md`

- [ ] **Step 1: Add deterministic UTF-8 export scripts**

Export only `audit_events`, active schema version and rate-limit metadata needed for expiry verification. Produce JSONL ordered by `(created_at, id)` plus a manifest containing export timestamp, row counts, schema version and SHA-256 checksums. Never export auth tokens, Magic Links, raw identifiers or environment values.

- [ ] **Step 2: Document exact operator setup**

The runbook covers:

- production and isolated non-production Supabase projects;
- disabled public sign-up and pre-provisioned owner identity;
- exact production/preview callback allowlists;
- Vercel server-only variables;
- exposing `dashboard_api` but not `dashboard_private` through the Data API;
- migration/RLS verification and database advisors;
- quarterly export, 24-month audit retention and expired rate-limit cleanup;
- restore into a clean non-production project and integrity checks;
- credential rotation and emergency access revocation;
- desktop and phone Magic Link verification;
- production checks for no-store, noindex, denied unauthorized access and safe degraded health.

- [ ] **Step 3: Run the non-production recovery gate**

Run:

```bash
npm run dashboard:export -- --output artifacts/dashboard-export
npm run dashboard:verify-export -- --input artifacts/dashboard-export
npx supabase db reset
npx supabase test db
```

Record only date, schema version, row counts, elapsed restore time and pass/fail in the PR; do not commit exported operational data.

- [ ] **Step 4: Run the complete verification gate**

```bash
npm ci
npm test
npm run check:content
npm run typecheck
npm run build
npm audit --omit=dev
npx supabase test db
npx supabase db lint
```

Expected: all commands exit 0; public route count/parity is preserved; dashboard/internal routes are dynamic, protected, no-store and absent from discovery; no public content record changes.

- [ ] **Step 5: Verify production before closing Stage 2**

Before production, verify a valid nonallowlisted session is revoked in the isolated non-production project. After PR D merges, verify the deployed commit, allowlisted Magic Link on desktop and phone, logout, denied unauthenticated access, one safe audit event, durable rate-limit behavior, content totals, degraded health rendering, private cache headers and telemetry absence. Only then update both roadmaps from 🟡 to ✅ and record the production verification date.

```bash
git add scripts/dashboard docs package.json package-lock.json
git commit -m "Document dashboard operations and recovery"
```

## Self-review checklist

- [ ] Every protected page and server action invokes `requireDashboardUser()` server-side.
- [ ] Proxy refresh is not described or tested as authorization.
- [ ] Login response is identical for allowed, denied and rate-limited addresses.
- [ ] Only the allowlisted normalized email reaches Supabase Auth.
- [ ] Audit/rate-limit storage contains no raw email, IP, token, link, credential, cookie, user-agent, stack or claim content.
- [ ] Rate limiting is atomic and serverless-safe.
- [ ] Service-role and optional GitHub tokens stay server-only.
- [ ] Git remains the only content source of truth and no dashboard mutation exists.
- [ ] Health checks use read-only requests and safe errors.
- [ ] Dashboard/internal are no-store, noindex/noarchive, disallowed by robots and absent from sitemap, llms and public telemetry.
- [ ] Preview cannot use production operational credentials.
- [ ] Restore succeeds before real operational audit data is accepted.
- [ ] Stage 2 remains `in progress` until merge, verification and recovery evidence are complete.
