import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import LegacyChemtrailsPage, { metadata as legacyMetadata } from "../../app/(public)/claims/chemtrails-aluminum/legacy-page.fixture";
import LegacyChemtrailsLayout, { metadata as legacyLayoutMetadata } from "../../app/(public)/claims/chemtrails-aluminum/layout";
import DynamicClaimPage, { generateMetadata } from "../../app/(public)/claims/[slug]/page";
import { chemtrailsAluminumClaimContent as chemtrails } from "../../content/claims/chemtrails-aluminum";
import { siteUrl } from "../site";

const params = Promise.resolve({ slug: chemtrails.slug });

interface JsonLdDocument { "@type": string; [key: string]: unknown }

function extractJsonLd(html: string): JsonLdDocument[] {
  return Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g), (match) => JSON.parse(match[1]) as JsonLdDocument);
}

describe("chemtrails-aluminum dynamic route cutover", () => {
  it("renders the enriched record through ClaimBodyRenderer", async () => {
    const html = renderToStaticMarkup(await DynamicClaimPage({ params }));
    expect(html).toContain(`<h1>${chemtrails.title}</h1>`);
    expect(html).toContain(chemtrails.lead);
    expect(html).toContain(chemtrails.shortAnswer);
    expect(html).toContain(chemtrails.bottomLine);
    expect(html).toContain('class="copy-box"');
  });

  it("preserves metadata and social-image intent", async () => {
    const metadata = await generateMetadata({ params });
    expect(metadata).toMatchObject({
      title: legacyMetadata.title,
      description: legacyMetadata.description,
      alternates: legacyMetadata.alternates,
      openGraph: { ...legacyLayoutMetadata.openGraph, images: [{ url: `${chemtrails.path}/opengraph-image?version=og-v11`, alt: chemtrails.ogAlt }] },
      twitter: { ...legacyLayoutMetadata.twitter, images: [{ url: `${chemtrails.path}/opengraph-image?version=og-v11`, alt: chemtrails.ogAlt }] },
    });
  });

  it("preserves the existing page Article and layout FAQPage JSON-LD", async () => {
    const dynamicHtml = renderToStaticMarkup(await DynamicClaimPage({ params }));
    const legacyHtml = renderToStaticMarkup(<LegacyChemtrailsLayout><LegacyChemtrailsPage /></LegacyChemtrailsLayout>);
    expect(extractJsonLd(dynamicHtml)).toEqual(extractJsonLd(legacyHtml));
    const faq = extractJsonLd(dynamicHtml).find((document) => document["@type"] === "FAQPage");
    expect(faq?.mainEntityOfPage).toBe(`${siteUrl}${chemtrails.path}`);
  });
});
