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

  it("preserves the static page body order and cutover metadata", () => {
    expect(typedPilotClaim.lead).toBe(
      "זו אחת הקפיצות החדשות ברשת: שואלים מודל, מקבלים תשובה חלקה, ואז מתייחסים אליה כאילו היא מסמך. אבל תשובה שנשמעת חכמה אינה מקור. המקור הוא הדבר שאפשר לפתוח, לקרוא, לבדוק ולצטט.",
    );
    expect(typedPilotClaim.shareCopy).toBe(
      "תשובה של AI יכולה להיות נקודת התחלה טובה, אבל היא לא מקור. גם כשהתשובה נשמעת בטוחה, צריך לפתוח את הקישורים, לבדוק מה המקור באמת אומר, ולראות אם המסקנה מופיעה שם או רק נוספה על ידי המודל.\nhttps://ai-source-lab.vercel.app/claims/ai-as-source-pyramids",
    );
    expect(typedPilotClaim.body?.map((block) => block.type)).toEqual([
      "answer-box",
      "verdict-grid",
      "evidence-list",
      "paragraph-section",
      "comparison-list",
      "method-note",
      "logic-chain",
      "comparison-list",
      "faq",
      "copy-share",
      "sources",
      "method-note",
    ]);
    expect(typedPilotClaim.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ type: "faq", source: "claim" }),
        expect.objectContaining({ type: "copy-share", source: "claim" }),
        expect.objectContaining({ type: "sources", source: "claim" }),
      ]),
    );
    expect(typedPilotClaim.structuredData).toEqual({
      mode: "configured",
      entries: [
        {
          type: "article",
          placement: "page",
          headline: "האם תשובת AI היא מקור?",
          description:
            "בדיקה של הטענה שתשובת AI יכולה לשמש מקור, דרך קייס הפירמידות והפער בין תשובה משכנעת לבין מקור שניתן לפתוח.",
          datePublished: "2026-06-19",
          dateModified: "2026-06-19",
          inLanguage: "he-IL",
        },
        { type: "faq", placement: "layout" },
      ],
    });
    expect(typedPilotClaim.metadataOverrides).toEqual({
      title: "האם תשובת AI היא מקור? | מקור בדיקה",
      description:
        "בדיקה של הטענה שתשובה של AI יכולה לשמש מקור, דרך קייס הפירמידות והפער בין תשובה משכנעת לבין מקור שניתן לפתוח.",
      canonical: "/claims/ai-as-source-pyramids",
    });
  });

  it("keeps the pilot metadata aligned with the existing claim record", () => {
    const existingClaim = claimRecords.find((claim) => claim.slug === typedPilotClaim.slug);

    expect(existingClaim).toBeDefined();
    expect(typedPilotClaim).toMatchObject(existingClaim!);
    expect(typedPilotClaim.path).toBe(existingClaim?.path);
  });

  it("does not create or remove public page routes", () => {
    expect(countPageModules("app")).toBe(22);
    expect(existsSync("app/claims/[slug]/page.tsx")).toBe(true);
    expect(existsSync("app/claims/ai-as-source-pyramids/page.tsx")).toBe(false);
  });

  it("keeps loader output aligned with the existing claim records", () => {
    expect(getAllClaimContent().map((claim) => claim.slug)).toEqual(claimRecords.map((claim) => claim.slug));
    expect(getClaimContentBySlug(typedPilotClaim.slug)).toMatchObject(
      claimRecords.find((claim) => claim.slug === typedPilotClaim.slug)!,
    );
  });
});
