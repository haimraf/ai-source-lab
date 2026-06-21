import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { fifteenMinuteCityPrisonClaimContent as claim } from "../content/claims/15-minute-city-prison";
import { ClaimBodyRenderer } from "./ClaimBodyRenderer";

function expectMarkersInOrder(subject: string, markers: readonly string[]) {
  let previous = -1;
  for (const marker of markers) {
    const current = subject.indexOf(marker);
    expect(current, `expected marker in order: ${marker}`).toBeGreaterThan(previous);
    previous = current;
  }
}

describe("15-minute-city-prison renderer parity", () => {
  const source = readFileSync(join(process.cwd(), "app", "claims", "15-minute-city-prison", "legacy-page.fixture.tsx"), "utf8");
  const html = renderToStaticMarkup(<ClaimBodyRenderer claim={claim} />)
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&amp;", "&");

  it("preserves visible content and section order", () => {
    const markers = [
      "תשובה קצרה",
      "לא. הרעיון עצמו אינו כלא עירוני.",
      "שלוש שכבות שלא לערבב",
      "מוצגים ואיורים",
      "עובדת בונוס",
      "השם חדש יחסית; הרעיון לא נולד מאפס",
      "מה כן אפשר לבקר?",
      "שרשרת הקפיצה",
      "מה לא נמצא במקורות?",
      "שאלות נפוצות",
      "תגובה קצרה להעתקה",
      "<h2>המקורות שנבדקו</h2>",
      "איך נבדקה הטענה?",
    ];

    expect(source).toContain(claim.lead);
    expect(html).toContain(claim.lead);
    expectMarkersInOrder(source.slice(source.indexOf("return (")), markers);
    expectMarkersInOrder(html, markers);
  });

  it("preserves exhibits, FAQ, sources and share copy", () => {
    expect(claim.exhibits).toHaveLength(2);
    for (const exhibit of claim.exhibits ?? []) {
      expect(source).toContain(exhibit.src);
      expect(source).toContain(exhibit.alt);
      expect(html).toContain(exhibit.src);
      expect(html).toContain(exhibit.alt);
    }
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
    expect(html).toContain(claim.shareCopy!);
    expect(html).toContain('class="copy-box"');
  });
});
