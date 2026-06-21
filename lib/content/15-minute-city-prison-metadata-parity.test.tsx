import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import StaticPage, { metadata as pageMetadata } from "../../app/claims/15-minute-city-prison/legacy-page.fixture";
import { fifteenMinuteCityPrisonClaimContent as claim } from "../../content/claims/15-minute-city-prison";

function extractArticleJsonLd() {
  const html = renderToStaticMarkup(<StaticPage />);
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  expect(match).not.toBeNull();
  return JSON.parse(match![1]) as Record<string, unknown>;
}

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

  it("models the existing page-level Article JSON-LD only", () => {
    const article = extractArticleJsonLd();
    expect(article["@type"]).toBe("Article");
    expect(claim.structuredData).toEqual({
      mode: "configured",
      entries: [{
        type: "article",
        placement: "page",
        headline: article.headline,
        description: article.description,
        datePublished: article.datePublished,
        dateModified: article.dateModified,
        inLanguage: article.inLanguage,
      }],
    });
  });
});
