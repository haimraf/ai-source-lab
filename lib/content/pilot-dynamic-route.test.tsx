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
import { gatewayProcessOutOfBodyClaimContent as gatewayClaim } from "../../content/claims/gateway-process-out-of-body";
import { projectBlueBeamNasaClaimContent as blueBeamClaim } from "../../content/claims/project-blue-beam-nasa";
import { cloudSeedingChemtrailsClaimContent as cloudClaim } from "../../content/claims/cloud-seeding-chemtrails";
import { chemtrailsAluminumClaimContent as chemtrailsClaim } from "../../content/claims/chemtrails-aluminum";

const params = Promise.resolve({ slug: pilotClaim.slug });
const otherStaticClaimPages = [
  "15-minute-city-prison",
  "agenda-2030-seven-steps",
  "ai-bci-synthetic-soul",
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

describe("dynamic claim route cutovers", () => {
  it("generates only the approved dynamic slugs and disables unlisted params", () => {
    expect(generateStaticParams()).toEqual([
      { slug: pilotClaim.slug },
      { slug: gatewayClaim.slug },
      { slug: blueBeamClaim.slug },
      { slug: cloudClaim.slug },
      { slug: chemtrailsClaim.slug },
    ]);
    expect(dynamicParams).toBe(false);
  });

  it("moves only the approved pages to dynamic route ownership", () => {
    expect(existsSync("app/claims/[slug]/page.tsx")).toBe(true);
    expect(existsSync("app/claims/ai-as-source-pyramids/page.tsx")).toBe(false);
    expect(existsSync("app/claims/gateway-process-out-of-body/page.tsx")).toBe(false);
    expect(existsSync("app/claims/project-blue-beam-nasa/page.tsx")).toBe(false);
    expect(existsSync("app/claims/cloud-seeding-chemtrails/page.tsx")).toBe(false);
    expect(existsSync("app/claims/chemtrails-aluminum/page.tsx")).toBe(false);
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
