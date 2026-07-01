import { describe, expect, it } from "vitest";

import { findContentIntegrityIssues } from "./content-integrity";

describe("content integrity", () => {
  it("reports missing sitemap and route artifacts", () => {
    expect(findContentIntegrityIssues({
      claimPaths: ["/claims/example"],
      topicPaths: ["/topics/example"],
      sitemapPaths: new Set(["/topics/example"]),
      fileExists: () => false,
    })).toEqual([
      "Missing sitemap URL: /claims/example",
      "Missing page file: app/(public)/claims/example/page.tsx",
      "Missing OG file: app/(public)/claims/example/opengraph-image.tsx",
      "Missing page file: app/(public)/topics/example/page.tsx",
    ]);
  });
});
