import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const claimListConsumers = [
  "app/page.tsx",
  "app/topics/page.tsx",
  "components/ClaimBreadcrumbs.tsx",
  "components/ClaimSearch.tsx",
  "lib/topic-clusters.ts",
] as const;

describe("claim list consumers", () => {
  it("read published claim data through the content loader boundary", () => {
    for (const path of claimListConsumers) {
      const source = readFileSync(path, "utf8");

      expect(source, path).toContain("claim-loader");
      expect(source, path).not.toContain("claimRecords");
    }
  });
});
