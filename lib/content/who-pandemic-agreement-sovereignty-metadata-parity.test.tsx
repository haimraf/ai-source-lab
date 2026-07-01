import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import StaticPage, { metadata as pageMetadata } from "../../app/(public)/claims/who-pandemic-agreement-sovereignty/legacy-page.fixture";
import { whoPandemicAgreementSovereigntyClaimContent as claim } from "../../content/claims/who-pandemic-agreement-sovereignty";

function extractArticleJsonLd() {
  const html = renderToStaticMarkup(<StaticPage />);
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  expect(match).not.toBeNull();
  return JSON.parse(match![1]) as Record<string, unknown>;
}

describe("who-pandemic-agreement-sovereignty metadata parity", () => {
  it("models the complete existing page metadata", () => {
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
