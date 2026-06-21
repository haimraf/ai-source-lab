import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import BlueBeamPage, { metadata as blueBeamMetadata } from "../../app/claims/project-blue-beam-nasa/legacy-page.fixture";
import CloudPage, { metadata as cloudMetadata } from "../../app/claims/cloud-seeding-chemtrails/legacy-page.fixture";
import { cloudSeedingChemtrailsClaimContent as cloud } from "../../content/claims/cloud-seeding-chemtrails";
import { projectBlueBeamNasaClaimContent as blueBeam } from "../../content/claims/project-blue-beam-nasa";

function jsonLdFrom(Page: () => React.ReactNode) {
  const html = renderToStaticMarkup(<Page />);
  const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  expect(match).not.toBeNull();
  return JSON.parse(match![1]);
}

describe("blue-beam and cloud-seeding metadata parity", () => {
  it("models Blue Beam metadata and Article JSON-LD", () => {
    const article = jsonLdFrom(BlueBeamPage);
    expect(blueBeam.metadataOverrides).toEqual({ title: blueBeamMetadata.title, description: blueBeamMetadata.description, canonical: blueBeamMetadata.alternates.canonical });
    expect(blueBeam.structuredData).toEqual({ mode: "configured", entries: [{ type: "article", placement: "page", headline: article.headline, description: article.description, datePublished: article.datePublished, dateModified: article.dateModified, inLanguage: article.inLanguage }] });
    expect(article["@type"]).toBe("Article");
    expect(article.mainEntityOfPage).toMatch(new RegExp(`${blueBeam.path}$`));
  });

  it("models Cloud Seeding metadata, Article and its dedicated FAQ JSON-LD", () => {
    const [article, faq] = jsonLdFrom(CloudPage);
    expect(cloud.metadataOverrides).toEqual({ title: cloudMetadata.title, description: cloudMetadata.description, canonical: cloudMetadata.alternates.canonical });
    expect(cloud.structuredData).toEqual({ mode: "configured", entries: [
      { type: "article", placement: "page", headline: article.headline, description: article.description, datePublished: article.datePublished, dateModified: article.dateModified, inLanguage: article.inLanguage },
      { type: "faq", placement: "page", items: faq.mainEntity.map((item: { name: string; acceptedAnswer: { text: string } }) => ({ question: item.name, answer: item.acceptedAnswer.text })) },
    ] });
    expect(article["@type"]).toBe("Article");
    expect(faq["@type"]).toBe("FAQPage");
    expect(article.mainEntityOfPage).toMatch(new RegExp(`${cloud.path}$`));
  });
});
