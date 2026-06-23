import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { agenda2030SevenStepsClaimContent as claim } from "../content/claims/agenda-2030-seven-steps";
import { ClaimBodyRenderer } from "./ClaimBodyRenderer";

function expectMarkersInOrder(subject: string, markers: readonly string[]) {
  let previous = -1;
  for (const marker of markers) {
    const current = subject.indexOf(marker);
    expect(current, `expected marker in order: ${marker}`).toBeGreaterThan(previous);
    previous = current;
  }
}

describe("agenda-2030-seven-steps renderer parity", () => {
  const source = readFileSync(join(process.cwd(), "app", "claims", claim.slug, "legacy-page.fixture.tsx"), "utf8");
  const html = renderToStaticMarkup(<ClaimBodyRenderer claim={claim} />)
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&amp;", "&");

  it("preserves visible content and section order", () => {
    const markers = [
      "תשובה קצרה",
      "טבלת הטענה",
      "גרסת 60 שניות",
      "מה כתוב במסמך הרשמי?",
      "המסמך הרשמי קיים",
      "<h2>הפוסטרים שנבדקו</h2>",
      "השוואה קצרה",
      "מה כן אפשר לבקר?",
      "שרשרת הקפיצה",
      "שאלות נפוצות",
      "תגובה קצרה להעתקה",
      "המקורות שנבדקו",
      "איך נבדקה הטענה?",
    ];

    expect(source).toContain(claim.lead);
    expect(html).toContain(claim.lead);
    expectMarkersInOrder(source.slice(source.indexOf("return (")), markers);
    expectMarkersInOrder(html, markers);
  });

  it("preserves exhibits, sources and share copy", () => {
    expect(claim.exhibits).toHaveLength(2);
    for (const exhibit of claim.exhibits ?? []) {
      expect(source).toContain(exhibit.src);
      expect(source).toContain(exhibit.alt);
      expect(html).toContain(exhibit.src);
      expect(html).toContain(exhibit.alt);
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
