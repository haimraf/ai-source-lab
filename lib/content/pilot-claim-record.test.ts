import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { aiAsSourcePyramidsClaimContent } from "../../content/claims/ai-as-source-pyramids";
import { claimRecords } from "../claims-db";
import { getAllClaimContent, getClaimContentBySlug } from "./claim-loader";
import type { ClaimContent } from "./claim-schema";

const typedPilotClaim: ClaimContent = aiAsSourcePyramidsClaimContent;

function countPageModules(directory: string): number {
  return readdirSync(directory, { withFileTypes: true }).reduce((count, entry) => {
    const path = join(directory, entry.name);

    if (entry.isDirectory()) return count + countPageModules(path);
    return count + Number(entry.name === "page.tsx");
  }, 0);
}

describe("pilot claim content record", () => {
  it("defines the AI-as-source claim as complete typed static content", () => {
    expect(typedPilotClaim.schemaVersion).toBe(1);
    expect(typedPilotClaim.sources.length).toBeGreaterThan(0);
    expect(typedPilotClaim.faq.length).toBeGreaterThan(0);
    expect(typedPilotClaim.sections.length).toBeGreaterThan(0);
  });

  it("keeps the pilot metadata aligned with the existing claim record", () => {
    const existingClaim = claimRecords.find((claim) => claim.slug === typedPilotClaim.slug);

    expect(existingClaim).toBeDefined();
    expect(typedPilotClaim).toMatchObject(existingClaim!);
    expect(typedPilotClaim.path).toBe(existingClaim?.path);
  });

  it("does not create or remove public page routes", () => {
    expect(countPageModules("app")).toBe(22);
    expect(existsSync("app/claims/ai-as-source-pyramids/page.tsx")).toBe(true);
  });

  it("keeps loader output aligned with the existing claim records", () => {
    expect(getAllClaimContent().map((claim) => claim.slug)).toEqual(claimRecords.map((claim) => claim.slug));
    expect(getClaimContentBySlug(typedPilotClaim.slug)).toMatchObject(
      claimRecords.find((claim) => claim.slug === typedPilotClaim.slug)!,
    );
  });
});
