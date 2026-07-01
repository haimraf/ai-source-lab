import { describe, expect, it } from "vitest";

import { generateMetadata } from "../../app/(public)/claims/[slug]/page";
import { monsterEnergy666LogoClaimContent as monster } from "../../content/claims/monster-energy-666-logo";

describe("Monster claim OG metadata", () => {
  it("publishes a versioned social-image URL to refresh crawler caches", async () => {
    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: monster.slug }),
    });
    const versionedImage = `${monster.path}/opengraph-image?version=og-v11`;

    expect(metadata.openGraph?.images).toEqual([{ url: versionedImage, alt: monster.ogAlt }]);
    expect(metadata.twitter?.images).toEqual([{ url: versionedImage, alt: monster.ogAlt }]);
  });
});
