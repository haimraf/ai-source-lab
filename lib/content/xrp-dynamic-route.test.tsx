import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import LegacyXrpPage, { metadata as legacyMetadata } from "../../app/claims/xrp-global-currency/legacy-page.fixture";
import { metadata as legacyLayoutMetadata } from "../../app/claims/xrp-global-currency/layout";
import DynamicClaimPage, { generateMetadata } from "../../app/claims/[slug]/page";
import { xrpGlobalCurrencyClaimContent as xrp } from "../../content/claims/xrp-global-currency";

const params = Promise.resolve({ slug: xrp.slug });

function extractJsonLdScripts(html: string): unknown[] {
  return Array.from(html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g), (match) => JSON.parse(match[1]));
}

describe("xrp-global-currency dynamic route cutover", () => {
  it("renders visible content and the visible FAQ through ClaimBodyRenderer", async () => {
    const html = renderToStaticMarkup(await DynamicClaimPage({ params }));
    expect(html).toContain(`<h1>${xrp.title}</h1>`);
    expect(html).toContain(xrp.lead);
    expect(html).toContain(xrp.shortAnswer);
    for (const item of xrp.faq) expect(html).toContain(item.question);
    expect(html).toContain('class="copy-box"');
  });

  it("preserves metadata and social-image intent", async () => {
    const metadata = await generateMetadata({ params });
    expect(metadata).toMatchObject({
      title: legacyMetadata.title,
      description: legacyMetadata.description,
      alternates: legacyMetadata.alternates,
      openGraph: { ...legacyLayoutMetadata.openGraph, images: [{ url: `${xrp.path}/opengraph-image`, alt: xrp.ogAlt }] },
      twitter: { ...legacyLayoutMetadata.twitter, images: [{ url: `${xrp.path}/opengraph-image`, alt: xrp.ogAlt }] },
    });
  });

  it("preserves the single @graph script and its intentionally distinct FAQ", async () => {
    const dynamicScripts = extractJsonLdScripts(renderToStaticMarkup(await DynamicClaimPage({ params })));
    const legacyScripts = extractJsonLdScripts(renderToStaticMarkup(<LegacyXrpPage />));
    expect(dynamicScripts).toHaveLength(1);
    expect(dynamicScripts).toEqual(legacyScripts);
    const graph = dynamicScripts[0] as { "@context": string; "@graph": Array<{ "@type": string; mainEntity?: Array<{ name: string }> }> };
    expect(graph["@context"]).toBe("https://schema.org");
    expect(graph["@graph"].map((item) => item["@type"])).toEqual(["Article", "FAQPage"]);
    const structuredQuestions = graph["@graph"].find((item) => item["@type"] === "FAQPage")?.mainEntity?.map((item) => item.name);
    expect(structuredQuestions).not.toEqual(xrp.faq.map((item) => item.question));
  });
});
