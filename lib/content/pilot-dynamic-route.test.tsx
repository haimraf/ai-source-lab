import { existsSync, readdirSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import StaticClaimLayout from "../../app/claims/ai-as-source-pyramids/layout";
import LegacyClaimPage, { metadata as legacyMetadata } from "../../app/claims/ai-as-source-pyramids/legacy-page.fixture";
import DynamicClaimPage, { dynamicParams, generateMetadata, generateStaticParams } from "../../app/claims/[slug]/page";
import { claimContentRecords } from "../../content/claims";
import { aiAsSourcePyramidsClaimContent as pilotClaim } from "../../content/claims/ai-as-source-pyramids";
import { fifteenMinuteCityPrisonClaimContent as cityClaim } from "../../content/claims/15-minute-city-prison";

const params = Promise.resolve({ slug: pilotClaim.slug });
const otherStaticClaimPages = [] as const;

interface JsonLdDocument { "@type": string; [key: string]: unknown }

function extractJsonLdDocuments(html: string): JsonLdDocument[] {
  return Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g), (match) => JSON.parse(match[1]) as JsonLdDocument);
}

describe("dynamic claim route cutovers", () => {
  it("generates only the approved dynamic slugs and disables unlisted params", () => {
    expect(generateStaticParams()).toEqual(
      claimContentRecords.map((claim) => ({ slug: claim.path.split("/").at(-1)! })),
    );
    expect(dynamicParams).toBe(false);
  });

  it("moves only the approved pages to dynamic route ownership", () => {
    expect(existsSync("app/claims/[slug]/page.tsx")).toBe(true);
    for (const claim of claimContentRecords) {
      expect(existsSync(`app${claim.path}/page.tsx`)).toBe(false);
    }
    expect(generateStaticParams()).not.toContainEqual({ slug: cityClaim.slug });
    const activeStaticClaimPages = readdirSync("app/claims", { withFileTypes: true })
      .filter((entry) => entry.isDirectory() && !entry.name.startsWith("["))
      .filter((entry) => existsSync(`app/claims/${entry.name}/page.tsx`))
      .map((entry) => entry.name);
    expect(activeStaticClaimPages).toEqual([]);
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
      openGraph: { title: legacyMetadata.title, description: legacyMetadata.description, images: [{ url: `${pilotClaim.path}/opengraph-image`, alt: pilotClaim.ogAlt }] },
      twitter: { card: "summary_large_image", title: legacyMetadata.title, description: legacyMetadata.description, images: [{ url: `${pilotClaim.path}/opengraph-image`, alt: pilotClaim.ogAlt }] },
    });
  });
});
