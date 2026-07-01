import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import StaticGatewayPage, { metadata as staticMetadata } from "../../app/(public)/claims/gateway-process-out-of-body/legacy-page.fixture";
import { gatewayProcessOutOfBodyClaimContent as gatewayClaim } from "../../content/claims/gateway-process-out-of-body";

interface ArticleJsonLd {
  "@type": string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  inLanguage: string;
  mainEntityOfPage: string;
}

function extractArticleJsonLd(html: string): ArticleJsonLd {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  expect(match, "expected Article JSON-LD script").not.toBeNull();
  return JSON.parse(match![1]) as ArticleJsonLd;
}

describe("gateway-process-out-of-body metadata parity", () => {
  it("matches static title, description and canonical metadata", () => {
    expect(gatewayClaim.metadataOverrides).toEqual({
      title: staticMetadata.title,
      description: staticMetadata.description,
      canonical: staticMetadata.alternates.canonical,
    });
    expect(gatewayClaim.path).toBe(staticMetadata.alternates.canonical);
  });

  it("matches the static Article JSON-LD fields and dates", () => {
    const staticArticle = extractArticleJsonLd(renderToStaticMarkup(<StaticGatewayPage />));

    expect(gatewayClaim.structuredData).toEqual({
      mode: "configured",
      entries: [
        {
          type: "article",
          placement: "page",
          headline: staticArticle.headline,
          description: staticArticle.description,
          datePublished: staticArticle.datePublished,
          dateModified: staticArticle.dateModified,
          inLanguage: staticArticle.inLanguage,
        },
      ],
    });
    expect(staticArticle["@type"]).toBe("Article");
    expect(staticArticle.mainEntityOfPage).toMatch(new RegExp(`${gatewayClaim.path}$`));
    expect(gatewayClaim.workflow.publishedAt).toBe(staticArticle.datePublished);
    expect(gatewayClaim.updated).toBe(staticArticle.dateModified);
  });
});
