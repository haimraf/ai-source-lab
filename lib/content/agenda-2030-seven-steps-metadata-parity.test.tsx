import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import StaticPage, { metadata as pageMetadata } from "../../app/(public)/claims/agenda-2030-seven-steps/legacy-page.fixture";
import { metadata as layoutMetadata } from "../../app/(public)/claims/agenda-2030-seven-steps/layout";
import { agenda2030SevenStepsClaimContent as claim } from "../../content/claims/agenda-2030-seven-steps";

function extractArticleJsonLd() {
  const html = renderToStaticMarkup(<StaticPage />);
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  expect(match).not.toBeNull();
  return JSON.parse(match![1]) as Record<string, unknown>;
}

describe("agenda-2030-seven-steps metadata parity", () => {
  it("models page metadata plus the existing social metadata", () => {
    expect(claim.metadataOverrides).toEqual({
      title: pageMetadata.title,
      description: pageMetadata.description,
      canonical: pageMetadata.alternates.canonical,
      openGraph: layoutMetadata.openGraph,
      twitter: layoutMetadata.twitter,
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
