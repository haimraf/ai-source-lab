import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import StaticPage, { metadata } from "../../app/claims/ai-bci-synthetic-soul/legacy-page.fixture";
import { aiBciSyntheticSoulClaimContent as claim } from "../../content/claims/ai-bci-synthetic-soul";
import { siteUrl } from "../site";

describe("ai-bci-synthetic-soul metadata parity", () => {
  it("models the complete static metadata contract", () => {
    const pageUrl = `${siteUrl}${claim.path}`;
    const image = `${pageUrl}/opengraph-image`;
    const productionPageUrl = `https://ai-source-lab.vercel.app${claim.path}`;
    const productionImage = `${productionPageUrl}/opengraph-image`;

    expect(metadata).toMatchObject({
      title: `${claim.title} | מקור בדיקה`,
      description: claim.description,
      alternates: { canonical: claim.path },
      openGraph: {
        title: claim.title,
        description: claim.description,
        url: pageUrl,
        siteName: "מקור בדיקה",
        locale: "he_IL",
        type: "article",
        images: [{ url: image, width: 1200, height: 630, alt: claim.ogAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: claim.title,
        description: claim.description,
        images: [image],
      },
    });
    expect(claim.metadataOverrides).toEqual({
      title: `${claim.title} | מקור בדיקה`,
      description: claim.description,
      canonical: claim.path,
      openGraph: {
        title: claim.title,
        description: claim.description,
        url: productionPageUrl,
        siteName: "מקור בדיקה",
        locale: "he_IL",
        type: "article",
        images: [{ url: productionImage, width: 1200, height: 630, alt: claim.ogAlt }],
      },
      twitter: {
        card: "summary_large_image",
        title: claim.title,
        description: claim.description,
        images: [productionImage],
      },
    });
  });

  it("preserves the intentional absence of page-level JSON-LD", () => {
    const html = renderToStaticMarkup(<StaticPage />);
    expect(html).not.toContain('type="application/ld+json"');
    expect(claim.structuredData).toEqual({ mode: "none" });
  });
});
