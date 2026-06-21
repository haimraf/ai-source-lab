import { describe, expect, it } from "vitest";

import { allClaimTags, claimRecords, homeFeaturedClaimSlug } from "../claims-db";
import {
  getAllClaimContent,
  getAllClaimTags,
  getClaimContentByCluster,
  getClaimContentByPath,
  getClaimContentBySlug,
  getFeaturedClaimContent,
  getPublishedClaimContent,
} from "./claim-loader";

describe("claim content loader", () => {
  it("returns all current claims through the content index shape", () => {
    expect(getAllClaimContent().map((claim) => claim.slug)).toEqual(claimRecords.map((claim) => claim.slug));
  });

  it("filters out claim content that is not published", () => {
    const published = getAllClaimContent()[0];
    const draft = {
      ...published,
      slug: "draft-claim",
      path: "/claims/draft-claim" as const,
      status: "draft" as const,
    };

    expect(getPublishedClaimContent([published, draft]).map((claim) => claim.slug)).toEqual([claimRecords[0].slug]);
  });

  it("finds claim content by slug", () => {
    expect({
      found: getClaimContentBySlug(claimRecords[1].slug)?.path,
      missing: getClaimContentBySlug("missing-claim"),
    }).toEqual({ found: claimRecords[1].path, missing: undefined });
  });

  it("finds claim content by path", () => {
    expect({
      found: getClaimContentByPath(claimRecords[2].path)?.slug,
      missing: getClaimContentByPath("/claims/missing-claim"),
    }).toEqual({ found: claimRecords[2].slug, missing: undefined });
  });

  it("returns the claims assigned to a cluster", () => {
    const expectedSlugs = claimRecords
      .filter((claim) => claim.cluster === "sky-climate")
      .map((claim) => claim.slug);

    expect(getClaimContentByCluster("sky-climate").map((claim) => claim.slug)).toEqual(expectedSlugs);
  });

  it("returns a stable, unique list of all claim tags", () => {
    expect({ first: getAllClaimTags(), second: getAllClaimTags() }).toEqual({
      first: allClaimTags,
      second: allClaimTags,
    });
  });

  it("returns the claim currently featured on the homepage", () => {
    expect(getFeaturedClaimContent()?.slug).toBe(homeFeaturedClaimSlug);
  });
});
