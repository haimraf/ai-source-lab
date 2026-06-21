import { existsSync, readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { claimRecords } from "./claims-db";
import { findContentIntegrityIssues } from "./content-integrity";
import { topicClusters } from "./topic-clusters";

describe("published content repository", () => {
  it("keeps claims, topics, sitemap pages, and social images synchronized", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    const sitemapPaths = new Set(Array.from(sitemap.matchAll(/<loc>https?:\/\/[^/]+([^<]*)<\/loc>/g), (match) => match[1] || "/"));

    const issues = findContentIntegrityIssues({
      claimPaths: claimRecords.map((claim) => claim.path),
      topicPaths: topicClusters.map((topic) => topic.path),
      sitemapPaths,
      fileExists: (path) => existsSync(path) || (path.startsWith("app/topics/") && existsSync("app/topics/[slug]/page.tsx")),
    });

    expect(issues).toEqual([]);
  });
});
