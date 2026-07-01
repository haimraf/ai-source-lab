import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { metadata as legacyMetadata } from "../../app/(public)/claims/15-minute-city-prison/legacy-page.fixture";
import DynamicClaimPage, { generateMetadata, generateStaticParams } from "../../app/(public)/claims/[slug]/page";
import { fifteenMinuteCityPrisonClaimContent as claim } from "../../content/claims/15-minute-city-prison";

const publicSlug = "15-minute-city-prison";
const params = Promise.resolve({ slug: publicSlug });

describe("15-minute-city-prison dynamic route cutover", () => {
  it("registers only the existing public slug and resolves its internal content record", async () => {
    expect(generateStaticParams()).toContainEqual({ slug: publicSlug });
    expect(generateStaticParams()).not.toContainEqual({ slug: claim.slug });
    expect(await generateMetadata({ params: Promise.resolve({ slug: claim.slug }) })).toEqual({});

    const html = renderToStaticMarkup(await DynamicClaimPage({ params })).replaceAll("&quot;", '"');
    expect(html).toContain(`<h1>${claim.title}</h1>`);
    expect(html).toContain(claim.bottomLine);
    expect(html).toContain(claim.lead);
    expect(html).toContain(claim.shareCopy);
    expect(readFileSync("public/sitemap.xml", "utf8")).toContain(`<loc>https://ai-source-lab.vercel.app${claim.path}</loc>`);
    expect(readFileSync("public/sitemap.xml", "utf8")).not.toContain("/claims/fifteen-minute-city-prison");
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

  it("uses the claim dateModified and does not add FAQPage JSON-LD", async () => {
    const dynamicHtml = renderToStaticMarkup(await DynamicClaimPage({ params }));
    expect(dynamicHtml).toContain(`"dateModified":"${claim.updated}"`);
    expect(dynamicHtml).not.toContain('"@type":"FAQPage"');
  });
});
