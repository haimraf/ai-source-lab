import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import LegacyBlueBeamPage, { metadata as legacyMetadata } from "../../app/claims/project-blue-beam-nasa/legacy-page.fixture";
import DynamicClaimPage, { generateMetadata } from "../../app/claims/[slug]/page";
import { projectBlueBeamNasaClaimContent as blueBeam } from "../../content/claims/project-blue-beam-nasa";

const params = Promise.resolve({ slug: blueBeam.slug });

interface JsonLdDocument {
  "@type": string;
  [key: string]: unknown;
}

function extractJsonLdDocuments(html: string): JsonLdDocument[] {
  return Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g), (match) => (
    JSON.parse(match[1]) as JsonLdDocument
  ));
}

describe("project-blue-beam-nasa dynamic route cutover", () => {
  it("renders Blue Beam through ClaimBodyRenderer content", async () => {
    const html = renderToStaticMarkup(await DynamicClaimPage({ params }));

    expect(html).toContain(`<h1>${blueBeam.title}</h1>`);
    expect(html).toContain(blueBeam.lead);
    expect(html).toContain(blueBeam.shortAnswer);
    expect(html).toContain(blueBeam.bottomLine);
    expect(html).toContain('class="copy-box"');
  });

  it("preserves metadata and social-image intent", async () => {
    const metadata = await generateMetadata({ params });
    expect(metadata).toMatchObject({
      title: legacyMetadata.title,
      description: legacyMetadata.description,
      alternates: legacyMetadata.alternates,
      openGraph: { images: [{ url: `${blueBeam.path}/opengraph-image?version=og-v11`, alt: blueBeam.ogAlt }] },
      twitter: { images: [{ url: `${blueBeam.path}/opengraph-image?version=og-v11`, alt: blueBeam.ogAlt }] },
    });
  });

  it("preserves Article JSON-LD without adding FAQPage JSON-LD", async () => {
    const dynamicDocuments = extractJsonLdDocuments(renderToStaticMarkup(await DynamicClaimPage({ params })));
    const legacyArticle = extractJsonLdDocuments(renderToStaticMarkup(<LegacyBlueBeamPage />))[0];
    expect(dynamicDocuments.find((document) => document["@type"] === "Article")).toEqual(legacyArticle);
    expect(dynamicDocuments.some((document) => document["@type"] === "FAQPage")).toBe(false);
  });
});
