import { existsSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import StaticClaimLayout from "../../app/claims/ai-as-source-pyramids/layout";
import LegacyClaimPage, { metadata as legacyMetadata } from "../../app/claims/ai-as-source-pyramids/legacy-page.fixture";
import DynamicClaimPage, {
  dynamicParams,
  generateMetadata,
  generateStaticParams,
} from "../../app/claims/[slug]/page";
import { aiAsSourcePyramidsClaimContent as pilotClaim } from "../../content/claims/ai-as-source-pyramids";

const params = Promise.resolve({ slug: pilotClaim.slug });
const otherStaticClaimPages = [
  "15-minute-city-prison",
  "agenda-2030-seven-steps",
  "ai-bci-synthetic-soul",
  "chemtrails-aluminum",
  "cloud-seeding-chemtrails",
  "gateway-process-out-of-body",
  "project-blue-beam-nasa",
  "who-pandemic-agreement-sovereignty",
  "xrp-global-currency",
] as const;

interface JsonLdDocument {
  "@type": string;
  [key: string]: unknown;
}

function extractJsonLdDocuments(html: string): JsonLdDocument[] {
  return Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g), (match) => (
    JSON.parse(match[1]) as JsonLdDocument
  ));
}

describe("ai-as-source-pyramids dynamic route cutover", () => {
  it("generates only the pilot slug and disables unlisted dynamic params", () => {
    expect(generateStaticParams()).toEqual([{ slug: pilotClaim.slug }]);
    expect(dynamicParams).toBe(false);
  });

  it("moves only the pilot page to dynamic route ownership", () => {
    expect(existsSync("app/claims/[slug]/page.tsx")).toBe(true);
    expect(existsSync("app/claims/ai-as-source-pyramids/page.tsx")).toBe(false);
    for (const slug of otherStaticClaimPages) {
      expect(existsSync(`app/claims/${slug}/page.tsx`), `static page missing for ${slug}`).toBe(true);
    }
  });

  it("renders the pilot through ClaimBodyRenderer content", async () => {
    const html = renderToStaticMarkup(await DynamicClaimPage({ params }));

    expect(html).toContain(`<h1>${pilotClaim.title}</h1>`);
    expect(html).toContain(pilotClaim.lead);
    expect(html).toContain(pilotClaim.shortAnswer);
    expect(html).toContain(pilotClaim.bottomLine);
    expect(html).toContain('class="copy-box"');
  });

  it("preserves the pilot metadata and social-image intent", async () => {
    const metadata = await generateMetadata({ params });

    expect(metadata).toMatchObject({
      title: legacyMetadata.title,
      description: legacyMetadata.description,
      alternates: legacyMetadata.alternates,
      openGraph: {
        title: legacyMetadata.title,
        description: legacyMetadata.description,
        images: [{ url: `${pilotClaim.path}/opengraph-image`, alt: pilotClaim.ogAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: legacyMetadata.title,
        description: legacyMetadata.description,
        images: [{ url: `${pilotClaim.path}/opengraph-image`, alt: pilotClaim.ogAlt }],
      },
    });
  });

  it("preserves the existing Article and FAQPage JSON-LD documents", async () => {
    const dynamicDocuments = extractJsonLdDocuments(
      renderToStaticMarkup(await DynamicClaimPage({ params })),
    );
    const legacyArticle = extractJsonLdDocuments(renderToStaticMarkup(<LegacyClaimPage />))[0];
    const legacyFaqPage = extractJsonLdDocuments(
      renderToStaticMarkup(<StaticClaimLayout><div /></StaticClaimLayout>),
    )[0];

    expect(dynamicDocuments.find((document) => document["@type"] === "Article")).toEqual(legacyArticle);
    expect(dynamicDocuments.find((document) => document["@type"] === "FAQPage")).toEqual(legacyFaqPage);
  });
});
