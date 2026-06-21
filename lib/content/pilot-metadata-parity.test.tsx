import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import StaticClaimLayout from "../../app/claims/ai-as-source-pyramids/layout";
import StaticClaimPage, { metadata as staticMetadata } from "../../app/claims/ai-as-source-pyramids/page";
import { aiAsSourcePyramidsClaimContent as pilotClaim } from "../../content/claims/ai-as-source-pyramids";
import type { ClaimMetadataOverrides } from "./claim-schema";

interface JsonLdDocument {
  "@type": string;
  headline?: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  inLanguage?: string;
  mainEntityOfPage?: string;
  mainEntity?: readonly {
    name?: string;
    acceptedAnswer?: { text?: string };
  }[];
}

function extractJsonLd(html: string): JsonLdDocument {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  expect(match, "expected one JSON-LD script").not.toBeNull();
  return JSON.parse(match![1]) as JsonLdDocument;
}

function getStructuredDataEntries() {
  expect(pilotClaim.structuredData?.mode).toBe("configured");
  if (!pilotClaim.structuredData || pilotClaim.structuredData.mode !== "configured") {
    throw new Error("pilot structured data must be configured");
  }
  return pilotClaim.structuredData.entries;
}

describe("ai-as-source-pyramids metadata parity", () => {
  it("matches the static title, description and canonical path", () => {
    expect(pilotClaim.metadataOverrides).toMatchObject({
      title: staticMetadata.title,
      description: staticMetadata.description,
      canonical: staticMetadata.alternates.canonical,
    });
    expect(pilotClaim.path).toBe(staticMetadata.alternates.canonical);
    expect(pilotClaim.seo.title).toBe(staticMetadata.title);
    expect(pilotClaim.seo.description).toBe(staticMetadata.description);
  });

  it("matches the static Article JSON-LD intent and dates", () => {
    const staticArticle = extractJsonLd(renderToStaticMarkup(<StaticClaimPage />));
    const articleConfig = getStructuredDataEntries().find((entry) => entry.type === "article");

    expect(articleConfig).toMatchObject({
      type: "article",
      placement: "page",
      headline: staticArticle.headline,
      datePublished: staticArticle.datePublished,
      dateModified: staticArticle.dateModified,
      inLanguage: staticArticle.inLanguage,
    });
    expect(articleConfig?.description).toBe(staticMetadata.description);
    for (const intentMarker of ["בדיקה של הטענה", "AI", "קייס הפירמידות", "מקור שניתן לפתוח"]) {
      expect(staticArticle.description).toContain(intentMarker);
      expect(articleConfig?.description).toContain(intentMarker);
    }
    expect(staticArticle["@type"]).toBe("Article");
    expect(staticArticle.mainEntityOfPage).toMatch(new RegExp(`${pilotClaim.path}$`));
    expect(pilotClaim.workflow.publishedAt).toBe(staticArticle.datePublished);
    expect(pilotClaim.updated).toBe(staticArticle.dateModified);
  });

  it("matches the FAQPage JSON-LD intent currently provided by the layout", () => {
    const staticFaqPage = extractJsonLd(
      renderToStaticMarkup(<StaticClaimLayout><div /></StaticClaimLayout>),
    );
    const faqConfig = getStructuredDataEntries().find((entry) => entry.type === "faq");

    expect(faqConfig).toEqual({ type: "faq", placement: "layout" });
    expect(staticFaqPage["@type"]).toBe("FAQPage");
    expect(staticFaqPage.mainEntity?.map((item) => item.name)).toEqual(
      pilotClaim.faq.map((item) => item.question),
    );
    expect(staticFaqPage.mainEntity).toHaveLength(pilotClaim.faq.length);
  });

  it("does not introduce Open Graph or Twitter overrides absent from the static metadata", () => {
    const staticMetadataRecord = staticMetadata as Record<string, unknown>;
    const modeledOverrides = pilotClaim.metadataOverrides as ClaimMetadataOverrides;

    expect(modeledOverrides.openGraph).toBe(staticMetadataRecord.openGraph);
    expect(modeledOverrides.twitter).toBe(staticMetadataRecord.twitter);
  });
});
