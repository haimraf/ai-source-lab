import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import LegacyGatewayPage, { metadata as legacyMetadata } from "../../app/claims/gateway-process-out-of-body/legacy-page.fixture";
import DynamicClaimPage, { generateMetadata } from "../../app/claims/[slug]/page";
import { gatewayProcessOutOfBodyClaimContent as gatewayClaim } from "../../content/claims/gateway-process-out-of-body";

const params = Promise.resolve({ slug: gatewayClaim.slug });

interface JsonLdDocument {
  "@type": string;
  [key: string]: unknown;
}

function extractJsonLdDocuments(html: string): JsonLdDocument[] {
  return Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g), (match) => (
    JSON.parse(match[1]) as JsonLdDocument
  ));
}

describe("gateway-process-out-of-body dynamic route cutover", () => {
  it("renders Gateway through ClaimBodyRenderer content", async () => {
    const html = renderToStaticMarkup(await DynamicClaimPage({ params }));

    expect(html).toContain(`<h1>${gatewayClaim.title}</h1>`);
    expect(html).toContain(gatewayClaim.lead);
    expect(html).toContain(gatewayClaim.shortAnswer);
    expect(html).toContain(gatewayClaim.bottomLine);
    expect(html).toContain('class="copy-box"');
  });

  it("preserves Gateway metadata and social-image intent", async () => {
    const metadata = await generateMetadata({ params });

    expect(metadata).toMatchObject({
      title: legacyMetadata.title,
      description: legacyMetadata.description,
      alternates: legacyMetadata.alternates,
      openGraph: {
        title: legacyMetadata.title,
        description: legacyMetadata.description,
        images: [{ url: `${gatewayClaim.path}/opengraph-image`, alt: gatewayClaim.ogAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: legacyMetadata.title,
        description: legacyMetadata.description,
        images: [{ url: `${gatewayClaim.path}/opengraph-image`, alt: gatewayClaim.ogAlt }],
      },
    });
  });

  it("preserves Article JSON-LD without adding FAQPage JSON-LD", async () => {
    const dynamicDocuments = extractJsonLdDocuments(
      renderToStaticMarkup(await DynamicClaimPage({ params })),
    );
    const legacyArticle = extractJsonLdDocuments(renderToStaticMarkup(<LegacyGatewayPage />))[0];

    expect(dynamicDocuments.find((document) => document["@type"] === "Article")).toEqual(legacyArticle);
    expect(dynamicDocuments.some((document) => document["@type"] === "FAQPage")).toBe(false);
  });
});
