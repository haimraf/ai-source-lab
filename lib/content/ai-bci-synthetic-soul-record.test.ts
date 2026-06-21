import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { aiBciSyntheticSoulClaimContent as claim } from "../../content/claims/ai-bci-synthetic-soul";

describe("ai-bci-synthetic-soul rich content record", () => {
  it("defines the static page body in renderer order", () => {
    expect(claim.lead).toBe(claim.claim);
    expect(claim.shareCopy).toContain(claim.path);
    expect(claim.body?.map((block) => block.type)).toEqual([
      "answer-box",
      "source-levels",
      "logic-chain",
      "comparison-list",
      "comparison-list",
      "faq",
      "copy-share",
      "sources",
      "method-note",
    ]);
    expect(claim.structuredData).toEqual({ mode: "none" });
    expect(claim.workflow.credits).toContainEqual({ id: "haim-rafael", name: "חיים רפאל", role: "author" });
  });

  it("keeps the claim on its existing static route", () => {
    expect(existsSync(join(process.cwd(), "app", "claims", claim.slug, "page.tsx"))).toBe(true);
    expect(existsSync(join(process.cwd(), "app", "claims", claim.slug, "legacy-page.fixture.tsx"))).toBe(false);
  });
});
