import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import LegacyPage, { metadata as legacyMetadata } from "../../app/claims/who-pandemic-agreement-sovereignty/legacy-page.fixture";
import DynamicClaimPage, { generateMetadata, generateStaticParams } from "../../app/claims/[slug]/page";
import { whoPandemicAgreementSovereigntyClaimContent as claim } from "../../content/claims/who-pandemic-agreement-sovereignty";

const params = Promise.resolve({ slug: claim.slug });

function extractArticleJsonLd(html: string) {
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  expect(match).not.toBeNull();
  return JSON.parse(match![1]) as Record<string, unknown>;
}

describe("who-pandemic-agreement-sovereignty dynamic route cutover", () => {
  it("registers and renders the claim through the dynamic renderer", async () => {
    expect(generateStaticParams()).toContainEqual({ slug: claim.slug });
    const html = renderToStaticMarkup(await DynamicClaimPage({ params })).replaceAll("&quot;", '"');
    expect(html).toContain(`<h1>${claim.title}</h1>`);
    expect(html).toContain("הטקסט שולל סמכות להכתיב מדיניות פנים");
    expect(html).toContain(claim.lead);
    expect(html).toContain(claim.shareCopy);
    expect(readFileSync("public/sitemap.xml", "utf8")).toContain(`<loc>https://ai-source-lab.vercel.app${claim.path}</loc>`);
  });

  it("preserves all page metadata and social-image intent", async () => {
    expect(await generateMetadata({ params })).toMatchObject({
      title: legacyMetadata.title,
      description: legacyMetadata.description,
      alternates: legacyMetadata.alternates,
      openGraph: legacyMetadata.openGraph,
      twitter: legacyMetadata.twitter,
    });
  });

  it("preserves the existing Article JSON-LD without adding FAQPage JSON-LD", async () => {
    const legacyHtml = renderToStaticMarkup(<LegacyPage />);
    const dynamicHtml = renderToStaticMarkup(await DynamicClaimPage({ params }));
    expect(extractArticleJsonLd(dynamicHtml)).toEqual(extractArticleJsonLd(legacyHtml));
    expect(dynamicHtml).not.toContain('"@type":"FAQPage"');
  });
});
