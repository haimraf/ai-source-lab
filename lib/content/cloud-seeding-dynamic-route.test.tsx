import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import LegacyCloudPage, { metadata as legacyMetadata } from "../../app/claims/cloud-seeding-chemtrails/legacy-page.fixture";
import DynamicClaimPage, { generateMetadata } from "../../app/claims/[slug]/page";
import { cloudSeedingChemtrailsClaimContent as cloud } from "../../content/claims/cloud-seeding-chemtrails";

const params = Promise.resolve({ slug: cloud.slug });

interface JsonLdDocument {
  "@type": string;
  [key: string]: unknown;
}

function extractJsonLdDocuments(html: string): JsonLdDocument[] {
  return Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)).flatMap((match) => {
    const value = JSON.parse(match[1]) as JsonLdDocument | JsonLdDocument[];
    return Array.isArray(value) ? value : [value];
  });
}

describe("cloud-seeding-chemtrails dynamic route cutover", () => {
  it("renders visible claim content and visible FAQ through ClaimBodyRenderer", async () => {
    const html = renderToStaticMarkup(await DynamicClaimPage({ params }));
    expect(html).toContain(`<h1>${cloud.title}</h1>`);
    expect(html).toContain(cloud.lead);
    expect(html).toContain(cloud.shortAnswer);
    for (const item of cloud.faq) expect(html).toContain(item.question);
    expect(html).toContain('class="copy-box"');
  });

  it("preserves metadata and social-image intent", async () => {
    const metadata = await generateMetadata({ params });
    expect(metadata).toMatchObject({
      title: legacyMetadata.title,
      description: legacyMetadata.description,
      alternates: legacyMetadata.alternates,
      openGraph: { images: [{ url: `${cloud.path}/opengraph-image?version=og-v11`, alt: cloud.ogAlt }] },
      twitter: { images: [{ url: `${cloud.path}/opengraph-image?version=og-v11`, alt: cloud.ogAlt }] },
    });
  });

  it("preserves Article and the intentionally distinct FAQPage JSON-LD", async () => {
    const dynamicDocuments = extractJsonLdDocuments(renderToStaticMarkup(await DynamicClaimPage({ params })));
    const legacyDocuments = extractJsonLdDocuments(renderToStaticMarkup(<LegacyCloudPage />));
    expect(dynamicDocuments.find((document) => document["@type"] === "Article")).toEqual(
      legacyDocuments.find((document) => document["@type"] === "Article"),
    );
    expect(dynamicDocuments.find((document) => document["@type"] === "FAQPage")).toEqual(
      legacyDocuments.find((document) => document["@type"] === "FAQPage"),
    );
    const faqConfig = cloud.structuredData?.mode === "configured"
      ? cloud.structuredData.entries.find((entry) => entry.type === "faq")
      : undefined;
    expect(faqConfig?.items?.map((item) => item.question)).not.toEqual(cloud.faq.map((item) => item.question));
  });
});
