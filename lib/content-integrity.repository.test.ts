import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { claimContentRecords } from "../content/claims";
import { claimRecords } from "./claims-db";
import { findContentIntegrityIssues } from "./content-integrity";
import { updateClaimSitemapXml } from "./content/claim-sitemap";
import { findClaimWorkflowIntegrityIssues } from "./content/claim-workflow";
import { topicClusters } from "./topic-clusters";

describe("published content repository", () => {
  it("keeps claims, topics, sitemap pages, and social images synchronized", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    expect(updateClaimSitemapXml(sitemap)).toBe(sitemap);
    const sitemapPaths = new Set(Array.from(sitemap.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g), (match) => match[1] || "/"));
    const dynamicClaimPageFiles = new Set([
      "app/claims/ai-as-source-pyramids/page.tsx",
      "app/claims/gateway-process-out-of-body/page.tsx",
      "app/claims/project-blue-beam-nasa/page.tsx",
      "app/claims/cloud-seeding-chemtrails/page.tsx",
      "app/claims/chemtrails-aluminum/page.tsx",
      "app/claims/xrp-global-currency/page.tsx",
      "app/claims/ai-bci-synthetic-soul/page.tsx",
      "app/claims/agenda-2030-seven-steps/page.tsx",
      "app/claims/who-pandemic-agreement-sovereignty/page.tsx",
      "app/claims/15-minute-city-prison/page.tsx",
    ]);

    const issues = findContentIntegrityIssues({
      claimPaths: claimRecords.map((claim) => claim.path),
      topicPaths: topicClusters.map((topic) => topic.path),
      sitemapPaths,
      fileExists: (path) =>
        existsSync(path) ||
        (dynamicClaimPageFiles.has(path) && existsSync("app/claims/[slug]/page.tsx")) ||
        (path.startsWith("app/topics/") && existsSync("app/topics/[slug]/page.tsx")),
    });

    const workflowIssues = claimContentRecords.flatMap(findClaimWorkflowIntegrityIssues);

    expect([...issues, ...workflowIssues]).toEqual([]);
  });
});
