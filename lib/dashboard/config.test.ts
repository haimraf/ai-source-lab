import { describe, expect, it, vi } from "vitest";

vi.mock("server-only", () => ({}));

import { dashboardEnvKeys, readDashboardConfig } from "./config";

const completeEnv = {
  SUPABASE_URL: "https://project.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "publishable-key",
  SUPABASE_SERVICE_ROLE_KEY: "service-role-key",
  DASHBOARD_ADMIN_EMAIL: " Owner@Example.COM ",
  DASHBOARD_RATE_LIMIT_HMAC_SECRET: "rate-limit-secret",
  DASHBOARD_BASE_URL: "https://ai-source-lab.example",
  DASHBOARD_ALLOWED_CALLBACK_URLS: "https://ai-source-lab.example/dashboard/callback, https://preview.example/callback",
  GITHUB_REPOSITORY: "haimraf/ai-source-lab",
  GITHUB_DEFAULT_BRANCH: "main",
  GITHUB_READ_TOKEN: "github-read-token",
} as const;

describe("dashboard config", () => {
  it("does not use public environment variable names", () => {
    expect(dashboardEnvKeys.every((key) => !key.startsWith("NEXT_PUBLIC_"))).toBe(true);
  });

  it("loads config lazily from a supplied environment", () => {
    const config = readDashboardConfig(completeEnv);

    expect(config).toMatchObject({
      supabaseUrl: "https://project.supabase.co/",
      supabasePublishableKey: "publishable-key",
      supabaseServiceRoleKey: "service-role-key",
      adminEmail: "owner@example.com",
      rateLimitHmacSecret: "rate-limit-secret",
      baseUrl: "https://ai-source-lab.example/",
      githubRepository: "haimraf/ai-source-lab",
      githubDefaultBranch: "main",
      githubReadToken: "github-read-token",
    });
    expect(config.allowedCallbackUrls).toEqual([
      "https://ai-source-lab.example/dashboard/callback",
      "https://preview.example/callback",
    ]);
  });

  it("loads when the optional GitHub read token is missing or blank", () => {
    const { GITHUB_READ_TOKEN: _token, ...withoutToken } = completeEnv;

    expect(readDashboardConfig(withoutToken).githubReadToken).toBeUndefined();
    expect(readDashboardConfig({ ...completeEnv, GITHUB_READ_TOKEN: "   " }).githubReadToken).toBeUndefined();
  });

  it("fails closed when required production values are missing", () => {
    expect(() => readDashboardConfig({ ...completeEnv, SUPABASE_SERVICE_ROLE_KEY: "" })).toThrow(
      "SUPABASE_SERVICE_ROLE_KEY",
    );
    expect(() => readDashboardConfig({ ...completeEnv, DASHBOARD_ADMIN_EMAIL: "" })).toThrow("DASHBOARD_ADMIN_EMAIL");
    expect(() => readDashboardConfig({ ...completeEnv, DASHBOARD_RATE_LIMIT_HMAC_SECRET: "" })).toThrow(
      "DASHBOARD_RATE_LIMIT_HMAC_SECRET",
    );
    expect(() => readDashboardConfig({ ...completeEnv, DASHBOARD_ALLOWED_CALLBACK_URLS: "" })).toThrow(
      "DASHBOARD_ALLOWED_CALLBACK_URLS",
    );
  });

  it("validates URL-shaped environment values only when config is read", () => {
    expect(() => readDashboardConfig({ ...completeEnv, DASHBOARD_BASE_URL: "not a url" })).toThrow(
      "DASHBOARD_BASE_URL",
    );
  });
});
