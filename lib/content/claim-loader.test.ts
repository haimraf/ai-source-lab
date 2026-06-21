import { describe, expect, it } from "vitest";

import { claimContentRecords } from "../../content/claims";
import { aiAsSourcePyramidsClaimContent } from "../../content/claims/ai-as-source-pyramids";
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
    const claims = getAllClaimContent();

    expect(claims).toHaveLength(claimRecords.length);
    expect(claims.map((claim) => claim.slug)).toEqual(claimRecords.map((claim) => claim.slug));
  });

  it("prefers the migrated static content record for the pilot claim", () => {
    expect(getClaimContentBySlug(aiAsSourcePyramidsClaimContent.slug)).toBe(aiAsSourcePyramidsClaimContent);
  });

  it("registers one static content record for every existing claim", () => {
    expect({
      slugs: claimContentRecords.map((claim) => claim.slug),
      allPreferred: claimContentRecords.every((claim) => getClaimContentBySlug(claim.slug) === claim),
    }).toEqual({
      slugs: claimRecords.map((claim) => claim.slug),
      allPreferred: true,
    });
  });

  it("preserves every existing claim metadata record", () => {
    for (const claim of claimContentRecords) {
      expect(claim).toMatchObject(claimRecords.find((record) => record.slug === claim.slug)!);
    }
  });

  it("contains each claim slug exactly once", () => {
    const slugs = getAllClaimContent().map((claim) => claim.slug);

    expect(new Set(slugs).size).toBe(slugs.length);
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

  it("finds every existing claim by slug", () => {
    expect(claimRecords.map((claim) => getClaimContentBySlug(claim.slug)?.path)).toEqual(
      claimRecords.map((claim) => claim.path),
    );
    expect(getClaimContentBySlug("missing-claim")).toBeUndefined();
  });

  it("finds every existing claim by path", () => {
    expect(claimRecords.map((claim) => getClaimContentByPath(claim.path)?.slug)).toEqual(
      claimRecords.map((claim) => claim.slug),
    );
    expect(getClaimContentByPath("/claims/missing-claim")).toBeUndefined();
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
