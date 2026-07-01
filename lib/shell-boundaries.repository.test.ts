import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

function readSource(path: string) {
  return readFileSync(path, "utf8");
}

function listFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  });
}

describe("App Router shell boundaries", () => {
  it("keeps the root layout limited to document-wide concerns", () => {
    const rootLayout = readSource("app/layout.tsx");

    expect(rootLayout).toContain("<html lang=\"he\" dir=\"rtl\">");
    expect(rootLayout).toContain("<body>{children}</body>");
    expect(rootLayout).not.toMatch(/@vercel\/analytics|@vercel\/speed-insights/);
    expect(rootLayout).not.toMatch(/site-header|site-footer|mobile-bottom-nav/);
    expect(rootLayout).not.toMatch(/ReadingTimeInjector|createSiteSchema|PublicSiteShell/);
  });

  it("keeps public chrome, schema, and telemetry in the public shell only", () => {
    const publicLayout = readSource("app/(public)/layout.tsx");
    const publicShell = readSource("components/PublicSiteShell.tsx");

    expect(publicLayout).toContain("PublicSiteShell");
    expect(publicLayout).toContain("metadataBase: new URL(siteUrl)");
    expect(publicLayout).toContain("robots: { index: true, follow: true }");
    expect(publicShell).toContain("createSiteSchema");
    expect(publicShell).toContain("ReadingTimeInjector");
    expect(publicShell).toMatch(/site-header|site-footer|mobile-bottom-nav/);
    expect(publicShell).toMatch(/<Analytics \/>|<SpeedInsights \/>/);
  });

  it("keeps the dashboard shell telemetry-free and route-placeholder-only", () => {
    const dashboardLayoutPath = "app/(dashboard)/layout.tsx";
    const dashboardLayout = readSource(dashboardLayoutPath);
    const dashboardFiles = listFiles("app/(dashboard)");

    expect(existsSync(dashboardLayoutPath)).toBe(true);
    expect(dashboardLayout).not.toMatch(/@vercel\/analytics|@vercel\/speed-insights/);
    expect(dashboardLayout).not.toMatch(/PublicSiteShell|site-header|site-footer|mobile-bottom-nav/);
    expect(dashboardLayout).not.toMatch(/ReadingTimeInjector|createSiteSchema/);
    expect(dashboardLayout).toContain("robots");
    expect(dashboardLayout).toContain("index: false");
    expect(dashboardLayout).toContain("follow: false");
    expect(dashboardLayout).toContain("nocache: true");
    expect(dashboardFiles.filter((path) => path.endsWith("page.tsx"))).toEqual([]);
  });
});
