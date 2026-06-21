import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { cloudSeedingChemtrailsClaimContent as cloud } from "../content/claims/cloud-seeding-chemtrails";
import { projectBlueBeamNasaClaimContent as blueBeam } from "../content/claims/project-blue-beam-nasa";
import type { ClaimContent } from "../lib/content/claim-schema";
import { ClaimBodyRenderer } from "./ClaimBodyRenderer";

function expectMarkersInOrder(subject: string, markers: readonly string[]) {
  let previous = -1;
  for (const marker of markers) {
    const current = subject.indexOf(marker);
    expect(current, `expected marker in order: ${marker}`).toBeGreaterThan(previous);
    previous = current;
  }
}

function verifyParity(claim: ClaimContent, markers: readonly string[]) {
  const sourceFile = claim.slug === "project-blue-beam-nasa" ? "legacy-page.fixture.tsx" : "page.tsx";
  const source = readFileSync(join(process.cwd(), "app", "claims", claim.slug, sourceFile), "utf8");
  const html = renderToStaticMarkup(<ClaimBodyRenderer claim={claim} />).replaceAll("&quot;", '"').replaceAll("&amp;", "&");
  expect(source).toContain(claim.lead);
  expect(html).toContain(claim.lead);
  expectMarkersInOrder(source.slice(source.indexOf("return (")), markers);
  expectMarkersInOrder(html, markers);
  for (const item of claim.faq) {
    expect(source).toContain(item.question);
    expect(html).toContain(item.question);
  }
  for (const item of claim.sources) {
    expect(source).toContain(item.title);
    expect(source).toContain(item.url);
    expect(html).toContain(item.title);
    expect(html).toContain(item.url);
  }
  expect(source).toContain(claim.shareCopy!.split("\n")[0]);
  expect(html).toContain(claim.shareCopy!.split("\n")[0]);
  expect(html).toContain('class="copy-box"');
}

describe("blue-beam and cloud-seeding renderer parity", () => {
  it("preserves Blue Beam visible content and order", () => verifyParity(blueBeam, [
    "תשובה קצרה", "השורה התחתונה", "מה זה Project Blue Beam?", "הגרעין האמיתי:",
    "מה בדקנו?", "למה זה לא אותו דבר כמו Gateway?", "בלבול אפשרי: Blue Beam מול Blue Book",
    "שרשרת הטענה", "שאלות נפוצות", "תגובה קצרה להעתקה", "המקורות שנבדקו", "איך נבדקה הטענה?",
  ]));

  it("preserves Cloud Seeding visible content and order", () => verifyParity(cloud, [
    "תשובה קצרה", "השורה התחתונה", "ההבחנה החשובה", "מה המקורות מראים?",
    "שרשרת הטענה", "ומה לגבי יודיד כסף?", "שאלות נפוצות", "תגובה קצרה להעתקה",
    "המקורות שנבדקו", "איך נבדקה הטענה?",
  ]));
});
