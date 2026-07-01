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
    const dynamicClaimPageFiles = new Set(
      claimContentRecords.map((claim) => `app/(public)${claim.path}/page.tsx`),
    );

    const issues = findContentIntegrityIssues({
      claimPaths: claimRecords.map((claim) => claim.path),
      topicPaths: topicClusters.map((topic) => topic.path),
      sitemapPaths,
      fileExists: (path) =>
        existsSync(path) ||
        (dynamicClaimPageFiles.has(path) && existsSync("app/(public)/claims/[slug]/page.tsx")) ||
        (path.startsWith("app/(public)/topics/") && existsSync("app/(public)/topics/[slug]/page.tsx")),
    });

    const workflowIssues = claimContentRecords.flatMap(findClaimWorkflowIntegrityIssues);

    expect([...issues, ...workflowIssues]).toEqual([]);
  });
});
