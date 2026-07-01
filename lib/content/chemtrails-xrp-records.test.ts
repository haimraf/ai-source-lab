import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { chemtrailsAluminumClaimContent as chemtrails } from "../../content/claims/chemtrails-aluminum";
import { xrpGlobalCurrencyClaimContent as xrp } from "../../content/claims/xrp-global-currency";

describe("chemtrails-aluminum and xrp-global-currency rich content records", () => {
  it.each([
    [chemtrails, ["answer-box", "verdict-grid", "comparison-list", "method-note", "paragraph-section", "evidence-list", "paragraph-section", "comparison-list", "logic-chain", "faq", "copy-share", "sources", "method-note"]],
    [xrp, ["answer-box", "verdict-grid", "comparison-list", "method-note", "paragraph-section", "evidence-list", "logic-chain", "paragraph-section", "faq", "copy-share", "sources", "method-note"]],
  ] as const)("defines ordered renderer content for %s", (claim, blockTypes) => {
    expect(claim.lead).toBeTruthy();
    expect(claim.shareCopy).toContain(claim.path);
    expect(claim.body?.map((block) => block.type)).toEqual(blockTypes);
    expect(claim.metadataOverrides?.canonical).toBe(claim.path);
    expect(claim.structuredData?.mode).toBe("configured");
    expect(claim.workflow.credits).toContainEqual({ id: "haim-rafael", name: "חיים רפאל", role: "author" });
  });

  it("models XRP's graph container and intentionally distinct structured FAQ", () => {
    expect(xrp.structuredData?.mode).toBe("configured");
    if (xrp.structuredData?.mode !== "configured") throw new Error("expected configured structured data");
    expect(xrp.structuredData.container).toBe("graph");
    const faq = xrp.structuredData.entries.find((entry) => entry.type === "faq");
    expect(faq?.items?.map((item) => item.question)).not.toEqual(xrp.faq.map((item) => item.question));
  });

  it("keeps both cutover claims as legacy fixtures", () => {
    for (const claim of [chemtrails, xrp]) {
      expect(existsSync(join(process.cwd(), "app", "(public)", "claims", claim.slug, "page.tsx"))).toBe(false);
      expect(existsSync(join(process.cwd(), "app", "(public)", "claims", claim.slug, "legacy-page.fixture.tsx"))).toBe(true);
    }
  });
});
