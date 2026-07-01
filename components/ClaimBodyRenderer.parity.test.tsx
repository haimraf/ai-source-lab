import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { aiAsSourcePyramidsClaimContent as pilotClaim } from "../content/claims/ai-as-source-pyramids";
import { ClaimBodyRenderer } from "./ClaimBodyRenderer";

const staticPageSource = readFileSync(
  join(process.cwd(), "app", "(public)", "claims", "ai-as-source-pyramids", "legacy-page.fixture.tsx"),
  "utf8",
);
const staticPageBody = staticPageSource.slice(staticPageSource.indexOf("return ("));
const rendererHtml = renderToStaticMarkup(<ClaimBodyRenderer claim={pilotClaim} />);
const rendererSemanticHtml = rendererHtml
  .replace(/&#x27;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&amp;/g, "&");

function expectMarkersInOrder(subject: string, markers: readonly string[]) {
  let previousIndex = -1;

  for (const marker of markers) {
    const currentIndex = subject.indexOf(marker);
    expect(currentIndex, `expected marker in order: ${marker}`).toBeGreaterThan(previousIndex);
    previousIndex = currentIndex;
  }
}

describe("ai-as-source-pyramids renderer parity", () => {
  it("keeps the important visible content in both the static page and renderer", () => {
    const visibleMarkers = [
      pilotClaim.lead!,
      pilotClaim.shortAnswer,
      pilotClaim.bottomLine,
      "הטון נשמע סמכותי",
      "יש מילים שמרגישות כמו מקור",
      "הוא סוגר לנו את הסיפור מהר",
      "מה מקור יכול להראות:",
      "מה מקור לא בהכרח מוכיח:",
      "מה AI עלול לעשות:",
      "מה בודקים בפועל:",
      "AI נתן תשובה בטוחה",
      "לכן התשובה עצמה היא מקור שמוכיח את הטענה",
      "גרסת 60 שניות",
      "איך נבדקה הטענה?",
    ];

    for (const marker of visibleMarkers) {
      expect(staticPageSource, `static page is missing: ${marker}`).toContain(marker);
      expect(rendererSemanticHtml, `renderer is missing: ${marker}`).toContain(marker);
    }
  });

  it("keeps the major visible sections in the same order", () => {
    const orderedMarkers = [
      "תשובה קצרה",
      "השורה התחתונה",
      "למה זה כל כך משכנע?",
      "קייס הפירמידות: מה הבעיה?",
      "מה מקור יכול להראות:",
      "גרסת 60 שניות",
      "שרשרת הטענה",
      "איך להשתמש ב-AI נכון בבדיקת מקורות?",
      "שאלות נפוצות",
      "תגובה קצרה להעתקה",
      "המקורות שנבדקו",
      "איך נבדקה הטענה?",
    ];

    expectMarkersInOrder(staticPageBody, orderedMarkers);
    expectMarkersInOrder(rendererSemanticHtml, orderedMarkers);
  });

  it("keeps every claim-backed FAQ question in both implementations", () => {
    for (const item of pilotClaim.faq) {
      expect(staticPageSource).toContain(item.question);
      expect(rendererSemanticHtml).toContain(item.question);
    }
  });

  it("keeps every source title and URL in both implementations", () => {
    for (const source of pilotClaim.sources) {
      expect(staticPageSource).toContain(source.title);
      expect(staticPageSource).toContain(source.url);
      expect(rendererSemanticHtml).toContain(source.title);
      expect(rendererSemanticHtml).toContain(source.url);
    }
  });

  it("keeps the share copy and CopyBox integration", () => {
    const shareMessage = pilotClaim.shareCopy!.split("\n")[0];

    expect(staticPageSource).toContain(shareMessage);
    expect(staticPageSource).toContain("<CopyBox text={copyText}");
    expect(rendererHtml).toContain(pilotClaim.shareCopy!);
    expect(rendererHtml).toContain('class="copy-box"');
    expect(rendererHtml).toContain('type="button"');
  });
});
