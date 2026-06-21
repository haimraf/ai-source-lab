import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import ChemtrailsPage, { metadata as chemtrailsMetadata } from "../../app/claims/chemtrails-aluminum/legacy-page.fixture";
import XrpPage, { metadata as xrpMetadata } from "../../app/claims/xrp-global-currency/page";
import { chemtrailsAluminumClaimContent as chemtrails } from "../../content/claims/chemtrails-aluminum";
import { xrpGlobalCurrencyClaimContent as xrp } from "../../content/claims/xrp-global-currency";

function extractJsonLd(Page: () => React.ReactNode) {
  const html = renderToStaticMarkup(<Page />);
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  expect(match).not.toBeNull();
  return JSON.parse(match![1]);
}

describe("chemtrails and XRP metadata parity", () => {
  it("models Chemtrails metadata and Article JSON-LD", () => {
    const article = extractJsonLd(ChemtrailsPage);
    expect(chemtrails.metadataOverrides).toEqual({ title: chemtrailsMetadata.title, description: chemtrailsMetadata.description, canonical: chemtrailsMetadata.alternates.canonical });
    expect(chemtrails.structuredData).toEqual({ mode: "configured", entries: [{ type: "article", placement: "page", headline: article.headline, description: article.description, datePublished: article.datePublished, dateModified: article.dateModified, inLanguage: article.inLanguage }] });
    expect(article["@type"]).toBe("Article");
    expect(article.mainEntityOfPage).toMatch(new RegExp(`${chemtrails.path}$`));
  });

  it("models XRP metadata, graph container, Article and dedicated FAQ JSON-LD", () => {
    const graph = extractJsonLd(XrpPage);
    const article = graph["@graph"].find((item: { "@type": string }) => item["@type"] === "Article");
    const faq = graph["@graph"].find((item: { "@type": string }) => item["@type"] === "FAQPage");
    expect(xrp.metadataOverrides).toEqual({ title: xrpMetadata.title, description: xrpMetadata.description, canonical: xrpMetadata.alternates.canonical });
    expect(xrp.structuredData).toEqual({ mode: "configured", container: "graph", entries: [
      { type: "article", placement: "page", headline: article.headline, description: article.description, datePublished: article.datePublished, dateModified: article.dateModified, inLanguage: article.inLanguage },
      { type: "faq", placement: "page", items: faq.mainEntity.map((item: { name: string; acceptedAnswer: { text: string } }) => ({ question: item.name, answer: item.acceptedAnswer.text })) },
    ] });
    expect(graph["@context"]).toBe("https://schema.org");
  });
});
