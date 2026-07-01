import { describe, expect, it } from "vitest";

import { metadata as pageMetadata } from "../../app/(public)/claims/15-minute-city-prison/legacy-page.fixture";
import { fifteenMinuteCityPrisonClaimContent as claim } from "../../content/claims/15-minute-city-prison";

describe("15-minute-city-prison metadata parity", () => {
  it("preserves the public path and complete page metadata", () => {
    expect(claim.slug).toBe("fifteen-minute-city-prison");
    expect(claim.path).toBe("/claims/15-minute-city-prison");
    expect(claim.metadataOverrides).toEqual({
      title: pageMetadata.title,
      description: pageMetadata.description,
      canonical: pageMetadata.alternates.canonical,
      openGraph: pageMetadata.openGraph,
      twitter: pageMetadata.twitter,
    });
  });

  it("keeps Article structured data aligned with the claim update date", () => {
    expect(claim.structuredData).toMatchObject({
      mode: "configured",
      entries: [{
        type: "article",
        placement: "page",
        headline: claim.title,
        description: claim.description,
        datePublished: "2026-06-20",
        dateModified: claim.updated,
        inLanguage: "he-IL",
      }],
    });
  });
});
