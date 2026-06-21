import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import LegacyChemtrailsPage, { metadata as legacyMetadata } from "../../app/claims/chemtrails-aluminum/legacy-page.fixture";
import DynamicClaimPage, { generateMetadata } from "../../app/claims/[slug]/page";
import { chemtrailsAluminumClaimContent as chemtrails } from "../../content/claims/chemtrails-aluminum";

const params = Promise.resolve({ slug: chemtrails.slug });

interface JsonLdDocument { "@type": string; [key: string]: unknown }

function extractJsonLd(html: string): JsonLdDocument {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  expect(match).not.toBeNull();
  return JSON.parse(match![1]) as JsonLdDocument;
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
      openGraph: { images: [{ url: `${chemtrails.path}/opengraph-image`, alt: chemtrails.ogAlt }] },
      twitter: { images: [{ url: `${chemtrails.path}/opengraph-image`, alt: chemtrails.ogAlt }] },
    });
  });

  it("preserves Article JSON-LD without adding FAQPage JSON-LD", async () => {
    const dynamicHtml = renderToStaticMarkup(await DynamicClaimPage({ params }));
    expect(extractJsonLd(dynamicHtml)).toEqual(extractJsonLd(renderToStaticMarkup(<LegacyChemtrailsPage />)));
    expect(dynamicHtml).not.toContain('"@type":"FAQPage"');
  });
});
