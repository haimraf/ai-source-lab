import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { cloudSeedingChemtrailsClaimContent as cloud } from "../../content/claims/cloud-seeding-chemtrails";
import { projectBlueBeamNasaClaimContent as blueBeam } from "../../content/claims/project-blue-beam-nasa";

describe("blue-beam and cloud-seeding rich content records", () => {
  it.each([
    [blueBeam, ["answer-box", "verdict-grid", "paragraph-section", "comparison-list", "paragraph-section", "method-note", "paragraph-section", "logic-chain", "faq", "copy-share", "sources", "method-note"]],
    [cloud, ["answer-box", "verdict-grid", "comparison-list", "evidence-list", "logic-chain", "paragraph-section", "faq", "copy-share", "sources", "method-note"]],
  ] as const)("defines ordered renderer content for %s", (claim, blockTypes) => {
    expect(claim.lead).toBeTruthy();
    expect(claim.shareCopy).toContain(claim.path);
    expect(claim.body?.map((block) => block.type)).toEqual(blockTypes);
    expect(claim.metadataOverrides?.canonical).toBe(claim.path);
    expect(claim.structuredData?.mode).toBe("configured");
    expect(claim.workflow.credits).toContainEqual({ id: "haim-rafael", name: "חיים רפאל", role: "author" });
  });

  it("keeps both public routes owned by their static pages", () => {
    for (const slug of [blueBeam.slug, cloud.slug]) {
      expect(existsSync(join(process.cwd(), "app", "claims", slug, "page.tsx"))).toBe(true);
    }
  });
});
