import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import DynamicClaimPage from "../../app/(public)/claims/[slug]/page";
import { claimContentRecords } from "../../content/claims";
import { aiBciSyntheticSoulClaimContent as aiBci } from "../../content/claims/ai-bci-synthetic-soul";
import { chemtrailsAluminumClaimContent as chemtrails } from "../../content/claims/chemtrails-aluminum";
import { xrpGlobalCurrencyClaimContent as xrp } from "../../content/claims/xrp-global-currency";
import { siteUrl } from "../site";
import {
  createClaimStructuredData,
  type JsonLdDocument,
} from "./claim-structured-data";

function extractDocuments(html: string): JsonLdDocument[] {
  return Array.from(
    html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
    (match) => JSON.parse(match[1]) as JsonLdDocument,
  );
}

function extractSlots(html: string) {
  const articleIndex = html.indexOf("<article>");
  expect(articleIndex).toBeGreaterThanOrEqual(0);
  return {
    beforeArticle: extractDocuments(html.slice(0, articleIndex)),
    insideArticle: extractDocuments(html.slice(articleIndex)),
  };
}

function normalize(value: unknown) {
  return JSON.parse(JSON.stringify(value)) as unknown;
}

function getDocumentType(document: JsonLdDocument): unknown {
  return document["@type"];
}

describe("claim structured data", () => {
  it("matches the current dynamic-route slots and documents for every claim", async () => {
    for (const claim of claimContentRecords) {
      const routeSlug = claim.path.split("/").at(-1)!;
      const html = renderToStaticMarkup(
        await DynamicClaimPage({ params: Promise.resolve({ slug: routeSlug }) }),
      );

      expect(normalize(createClaimStructuredData(claim, siteUrl)), claim.path).toEqual(
        extractSlots(html),
      );
    }
  });

  it("preserves the explicit no-JSON-LD state for AI/BCI", () => {
    expect(createClaimStructuredData(aiBci, siteUrl)).toEqual({
      beforeArticle: [],
      insideArticle: [],
    });
  });

  it("keeps the Chemtrails FAQPage before the article and Article inside it", () => {
    const slots = createClaimStructuredData(chemtrails, siteUrl);

    expect(slots.beforeArticle.map(getDocumentType)).toEqual(["FAQPage"]);
    expect(slots.insideArticle.map(getDocumentType)).toEqual(["Article"]);
    expect(slots.beforeArticle[0].mainEntityOfPage).toBe(`${siteUrl}${chemtrails.path}`);
  });

  it("keeps XRP as one inside-article graph ordered Article then FAQPage", () => {
    const slots = createClaimStructuredData(xrp, siteUrl);

    expect(slots.beforeArticle).toEqual([]);
    expect(slots.insideArticle).toHaveLength(1);
    const graph = slots.insideArticle[0]["@graph"] as JsonLdDocument[];
    expect(graph.map(getDocumentType)).toEqual(["Article", "FAQPage"]);
  });

  it("never generates ClaimReview", () => {
    for (const claim of claimContentRecords) {
      expect(JSON.stringify(createClaimStructuredData(claim, siteUrl)), claim.path).not.toContain(
        '"@type":"ClaimReview"',
      );
    }
  });
});
