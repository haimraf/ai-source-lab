import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { chemtrailsAluminumClaimContent as chemtrails } from "../content/claims/chemtrails-aluminum";
import { xrpGlobalCurrencyClaimContent as xrp } from "../content/claims/xrp-global-currency";
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
  const sourceFile = ["chemtrails-aluminum", "xrp-global-currency"].includes(claim.slug)
    ? "legacy-page.fixture.tsx"
    : "page.tsx";
  const source = readFileSync(join(process.cwd(), "app", "claims", claim.slug, sourceFile), "utf8");
  const html = renderToStaticMarkup(<ClaimBodyRenderer claim={claim} />).replaceAll("&quot;", '"').replaceAll("&amp;", "&");
  const claimBodyHtml = html.slice(html.indexOf(claim.lead ?? claim.shortAnswer));

  expect(source).toContain(claim.lead);
  expect(html).toContain(claim.lead);
  expectMarkersInOrder(source.slice(source.indexOf("return (")), markers);
  expectMarkersInOrder(claimBodyHtml, markers);
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
}

describe("chemtrails and XRP renderer parity", () => {
  it("preserves Chemtrails Aluminum visible content and order", () => verifyParity(chemtrails, [
    "תשובה קצרה", "השורה התחתונה", "טבלת הטענה", "גרסת 60 שניות", "מהו שובל התעבות?",
    "שובל יכול להישאר שעות", "ומה לגבי אבק או אלומיניום בבדיקה?", "פס לבן שנשאר זמן רב:",
    "שרשרת הטענה", "שאלות נפוצות", "תגובה קצרה להעתקה", "המקורות שנבדקו", "איך נבדקה הטענה?",
  ]));

  it("preserves XRP visible content and order", () => verifyParity(xrp, [
    "תשובה קצרה", "השורה התחתונה", "טבלת הטענה", "גרסת 60 שניות", "למה הטענה נשמעת הגיונית?",
    "XRP הוא נכס עם שימוש מוגדר", "שרשרת הטענה", "מה אפשר לקבוע?", "שאלות נפוצות",
    "תגובה קצרה להעתקה", "המקורות שנבדקו", "איך נבדקה הטענה?",
  ]));
});
