import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import { claimRecords, getClaimBySlug } from "./claims-db";
import { getClaimsForTopicCluster, getTopicClusterBySlug } from "./topic-clusters";
import { GET as getLlmsText } from "../app/llms.txt/route";

const slug = "who-pandemic-agreement-sovereignty";
const path = `/claims/${slug}`;

describe("WHO pandemic agreement claim integration", () => {
  it("publishes the claim through the shared claim and topic registries", () => {
    const claim = getClaimBySlug(slug);
    const cluster = getTopicClusterBySlug("institutional-narratives");

    expect(claim).toMatchObject({
      slug,
      path,
      cluster: "institutional-narratives",
      updated: "2026-06-21",
    });
    expect(claimRecords).toContain(claim);
    expect(cluster?.claimSlugs).toContain(slug);
    expect(cluster && getClaimsForTopicCluster(cluster)).toContain(claim);
  });

  it("exposes the claim in llms.txt and the public sitemap", async () => {
    const llmsText = await (await getLlmsText()).text();
    const sitemap = readFileSync("public/sitemap.xml", "utf8");

    expect(llmsText).toContain(path);
    expect(sitemap).toContain(path);
  });
});
