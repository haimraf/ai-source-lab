import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

import LegacyPage, { metadata as legacyMetadata } from "../../app/(public)/claims/ai-bci-synthetic-soul/legacy-page.fixture";
import DynamicClaimPage, { generateMetadata, generateStaticParams } from "../../app/(public)/claims/[slug]/page";
import { aiBciSyntheticSoulClaimContent as claim } from "../../content/claims/ai-bci-synthetic-soul";

const params = Promise.resolve({ slug: claim.slug });

describe("ai-bci-synthetic-soul dynamic route cutover", () => {
  it("registers and renders the claim through the dynamic renderer", async () => {
    expect(generateStaticParams()).toContainEqual({ slug: claim.slug });
    const html = renderToStaticMarkup(await DynamicClaimPage({ params })).replaceAll("&quot;", '"');
    expect(html).toContain(`<h1>${claim.title}</h1>`);
    expect(html).toContain(claim.lead);
    expect(html).toContain(claim.shareCopy);
    expect(readFileSync("public/sitemap.xml", "utf8")).toContain(`<loc>https://ai-source-lab.vercel.app${claim.path}</loc>`);
  });

  it("preserves the complete legacy metadata", async () => {
    expect(await generateMetadata({ params })).toEqual(legacyMetadata);
  });

  it("preserves the absence of page-level JSON-LD", async () => {
    const legacyHtml = renderToStaticMarkup(<LegacyPage />);
    const dynamicHtml = renderToStaticMarkup(await DynamicClaimPage({ params }));
    expect(legacyHtml).not.toContain('type="application/ld+json"');
    expect(dynamicHtml).not.toContain('type="application/ld+json"');
  });
});
