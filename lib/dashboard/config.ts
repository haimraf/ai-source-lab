import "server-only";

import { normalizeDashboardEmail } from "./identity";

export const dashboardEnvKeys = [
  "SUPABASE_URL",
  "SUPABASE_PUBLISHABLE_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "DASHBOARD_ADMIN_EMAIL",
  "DASHBOARD_RATE_LIMIT_HMAC_SECRET",
  "DASHBOARD_BASE_URL",
  "DASHBOARD_ALLOWED_CALLBACK_URLS",
  "GITHUB_REPOSITORY",
  "GITHUB_DEFAULT_BRANCH",
  "GITHUB_READ_TOKEN",
] as const;

export type DashboardEnvKey = (typeof dashboardEnvKeys)[number];

export interface DashboardConfig {
  supabaseUrl: string;
  supabasePublishableKey: string;
  supabaseServiceRoleKey: string;
  adminEmail: string;
  rateLimitHmacSecret: string;
  baseUrl: string;
  allowedCallbackUrls: readonly string[];
  githubRepository: string;
  githubDefaultBranch: string;
  githubReadToken: string | undefined;
}

type DashboardEnv = Partial<Record<DashboardEnvKey, string | undefined>>;

function requireEnv(env: DashboardEnv, key: DashboardEnvKey): string {
  const value = env[key]?.trim();
  if (!value) throw new Error(`Missing required dashboard environment variable: ${key}`);
  return value;
}

function optionalEnv(env: DashboardEnv, key: DashboardEnvKey): string | undefined {
  const value = env[key]?.trim();
  return value || undefined;
}

function requireUrl(value: string, key: DashboardEnvKey): string {
  try {
    return new URL(value).toString();
  } catch {
    throw new Error(`Invalid dashboard URL in ${key}`);
  }
}

function parseAllowedCallbackUrls(value: string): readonly string[] {
  const urls = value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean)
    .map((entry) => requireUrl(entry, "DASHBOARD_ALLOWED_CALLBACK_URLS"));

  if (urls.length === 0) {
    throw new Error("Missing required dashboard environment variable: DASHBOARD_ALLOWED_CALLBACK_URLS");
  }

  return urls;
}

export function readDashboardConfig(env?: DashboardEnv): DashboardConfig {
  const source = env ?? (process.env as DashboardEnv);
  const supabaseUrl = requireUrl(requireEnv(source, "SUPABASE_URL"), "SUPABASE_URL");
  const baseUrl = requireUrl(requireEnv(source, "DASHBOARD_BASE_URL"), "DASHBOARD_BASE_URL");

  return {
    supabaseUrl,
    supabasePublishableKey: requireEnv(source, "SUPABASE_PUBLISHABLE_KEY"),
    supabaseServiceRoleKey: requireEnv(source, "SUPABASE_SERVICE_ROLE_KEY"),
    adminEmail: normalizeDashboardEmail(requireEnv(source, "DASHBOARD_ADMIN_EMAIL")),
    rateLimitHmacSecret: requireEnv(source, "DASHBOARD_RATE_LIMIT_HMAC_SECRET"),
    baseUrl,
    allowedCallbackUrls: parseAllowedCallbackUrls(requireEnv(source, "DASHBOARD_ALLOWED_CALLBACK_URLS")),
    githubRepository: requireEnv(source, "GITHUB_REPOSITORY"),
    githubDefaultBranch: requireEnv(source, "GITHUB_DEFAULT_BRANCH"),
    githubReadToken: optionalEnv(source, "GITHUB_READ_TOKEN"),
  };
}
