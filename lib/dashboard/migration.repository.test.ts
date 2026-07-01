import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

import { describe, expect, it } from "vitest";

const migrationName = "dashboard_stage_2_operational_foundation.sql";
const migrationsDir = path.join(process.cwd(), "supabase", "migrations");
const migrationFile = readdirSync(migrationsDir).find((fileName) => fileName.endsWith(migrationName));

if (!migrationFile) {
  throw new Error(`Missing dashboard migration ending with ${migrationName}`);
}

const migrationSql = readFileSync(path.join(migrationsDir, migrationFile), "utf8");
const normalizedSql = migrationSql.toLowerCase();

describe("dashboard operational migration", () => {
  it("keeps dashboard operational schema private and server-only", () => {
    expect(migrationSql).not.toContain("NEXT_PUBLIC_");
    expect(normalizedSql).toContain("create schema if not exists dashboard_private");
    expect(normalizedSql).toContain("revoke all on all tables in schema dashboard_private from public, anon, authenticated");
    expect(normalizedSql).toContain("revoke all on all functions in schema dashboard_private from public, anon, authenticated");
    expect(normalizedSql).toContain("grant usage on schema dashboard_private to service_role");
    expect(normalizedSql).not.toMatch(
      /grant\s+(select|insert|update|delete|all)\s+on\s+(all\s+tables|table\s+dashboard_private\.)[\s\S]*\b(anon|authenticated|public)\b/,
    );
    expect(normalizedSql).not.toMatch(/grant\s+execute\s+on\s+function\s+dashboard_private\.[\s\S]*\bto\s+(anon|authenticated|public)\b/);
  });

  it("does not define raw identifier or secret storage columns", () => {
    expect(migrationSql).not.toMatch(/^\s*(email|ip|user_agent|magic_link|token|cookie)\s+[a-z]/gim);
    expect(normalizedSql).not.toContain("credentials");
    expect(normalizedSql).not.toContain("stack_trace");
    expect(normalizedSql).not.toContain("claim_content");
  });

  it("enables RLS on private operational tables", () => {
    expect(normalizedSql).toContain("alter table dashboard_private.audit_events enable row level security");
    expect(normalizedSql).toContain("alter table dashboard_private.audit_events force row level security");
    expect(normalizedSql).toContain("alter table dashboard_private.rate_limit_buckets enable row level security");
    expect(normalizedSql).toContain("alter table dashboard_private.rate_limit_buckets force row level security");
  });

  it("supports the required audit actions and results", () => {
    for (const action of [
      "auth.magic_link_requested",
      "auth.login_succeeded",
      "auth.access_denied",
      "auth.logout",
    ]) {
      expect(migrationSql).toContain(`'${action}'`);
    }

    for (const result of ["success", "denied", "error"]) {
      expect(migrationSql).toContain(`'${result}'`);
    }

    expect(normalizedSql).toContain("create trigger audit_events_append_only");
    expect(normalizedSql).toContain("create function dashboard_private.append_audit_event");
    expect(normalizedSql).toContain("create function dashboard_private.list_recent_audit_events");
    expect(normalizedSql).toContain("limit least(greatest(coalesce(p_limit, 50), 1), 100)");
  });

  it("stores durable rate limits by hashed key only with expiry cleanup", () => {
    expect(normalizedSql).toContain("create table dashboard_private.rate_limit_buckets");
    expect(normalizedSql).toContain("key_hash text not null check (key_hash ~ '^[a-f0-9]{64}$')");
    expect(normalizedSql).toContain("limit_type text not null check (limit_type in ('email', 'network'))");
    expect(normalizedSql).toContain("primary key (limit_type, key_hash, window_start)");
    expect(normalizedSql).toContain("create function dashboard_private.consume_rate_limit");
    expect(normalizedSql).toContain("on conflict (limit_type, key_hash, window_start)");
    expect(normalizedSql).toContain("attempt_count = dashboard_private.rate_limit_buckets.attempt_count + 1");
    expect(normalizedSql).toContain("create function dashboard_private.cleanup_expired_rate_limit_buckets");
    expect(normalizedSql).toContain("delete from dashboard_private.rate_limit_buckets");
    expect(normalizedSql).toContain("where expires_at < p_now");
  });
});
