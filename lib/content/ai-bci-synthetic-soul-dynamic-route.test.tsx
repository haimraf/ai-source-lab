import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import LegacyAiBciPage, { metadata as legacyMetadata } from "../../app/claims/ai-bci-synthetic-soul/legacy-page.fixture";
import DynamicClaimPage, { generateMetadata } from "../../app/claims/[slug]/page";
import { aiBciSyntheticSoulClaimContent as claim } from "../../content/claims/ai-bci-synthetic-soul";

const params = Promise.resolve({ slug: claim.slug });
const structuredDataMarker = ["application", "ld+json"].join("/");

describe("ai-bci-synthetic-soul dynamic route cutover", () => {
  it("renders the enriched record through ClaimBodyRenderer", async () => {
    const html = renderToStaticMarkup(await DynamicClaimPage({ params }));
    expect(html).toContain(`<h1>${claim.title}</h1>`);
    expect(html).toContain(claim.lead);
    expect(html).toContain(claim.bottomLine);
    for (const item of claim.faq) expect(html).toContain(item.question);
    expect(html).toContain('class="copy-box"');
  });

  it("preserves metadata, canonical, public URL and social-image intent", async () => {
    const metadata = await generateMetadata({ params });
    expect(metadata).toMatchObject({
      title: legacyMetadata.title,
      description: legacyMetadata.description,
      alternates: legacyMetadata.alternates,
      openGraph: claim.metadataOverrides?.openGraph,
      twitter: claim.metadataOverrides?.twitter,
    });
  });

  it("preserves sitemap presence for the public URL", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    expect(sitemap).toContain(`/claims/${claim.slug}`);
  });

  it("preserves the intentional absence of page-level structured data", async () => {
    const dynamicHtml = renderToStaticMarkup(await DynamicClaimPage({ params }));
    const legacyHtml = renderToStaticMarkup(<LegacyAiBciPage />);
    expect(dynamicHtml).not.toContain(structuredDataMarker);
    expect(legacyHtml).not.toContain(structuredDataMarker);
  });
});
