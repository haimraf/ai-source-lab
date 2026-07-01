import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { aiBciSyntheticSoulClaimContent as claim } from "../content/claims/ai-bci-synthetic-soul";
import { ClaimBodyRenderer } from "./ClaimBodyRenderer";

function expectMarkersInOrder(subject: string, markers: readonly string[], label: string) {
  let previous = -1;
  for (const marker of markers) {
    const current = subject.indexOf(marker, previous + 1);
    expect(current, `${label} marker missing: ${marker}`).toBeGreaterThan(previous);
    previous = current;
  }
}

describe("ai-bci-synthetic-soul renderer parity", () => {
  const source = readFileSync(join(process.cwd(), "app", "(public)", "claims", claim.slug, "legacy-page.fixture.tsx"), "utf8");
  it("preserves visible content and core section order", () => {
    const html = renderToStaticMarkup(<ClaimBodyRenderer claim={claim} />)
      .replaceAll("&quot;", '"')
      .replaceAll("&#x27;", "'")
      .replaceAll("&amp;", "&");
    const legacyMarkers = ["שורה תחתונה", "מה כן אמיתי?", "איפה הקפיצה?", "שאלות נפוצות", "תגובה קצרה להעתקה", "המקורות שנבדקו", "איך נבדקה הטענה?"];
    const dynamicMarkers = [claim.shortAnswer, "מה כן אמיתי?", "איפה הקפיצה?", "שאלות נפוצות", "תגובה קצרה להעתקה", "המקורות שנבדקו", "איך נבדקה הטענה?"];
    expectMarkersInOrder(source, legacyMarkers, "static");
    expectMarkersInOrder(html, dynamicMarkers, "dynamic");
    expect(source).toContain(claim.lead);
    expect(html).toContain(claim.lead);
    expect(html).toContain('class="copy-box"');
  });

  it("preserves FAQ, sources and share copy", () => {
    const html = renderToStaticMarkup(<ClaimBodyRenderer claim={claim} />)
      .replaceAll("&quot;", '"')
      .replaceAll("&#x27;", "'")
      .replaceAll("&amp;", "&");
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
  });
});
