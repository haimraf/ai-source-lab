import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { aiBciSyntheticSoulClaimContent as claim } from "../content/claims/ai-bci-synthetic-soul";
import { ClaimBodyRenderer } from "./ClaimBodyRenderer";

describe("ai-bci-synthetic-soul renderer parity", () => {
  const source = readFileSync(join(process.cwd(), "app", "claims", claim.slug, "legacy-page.fixture.tsx"), "utf8");
  it("preserves visible content and core section order", () => {
    const html = renderToStaticMarkup(<ClaimBodyRenderer claim={claim} />)
      .replaceAll("&quot;", '"')
      .replaceAll("&#x27;", "'")
      .replaceAll("&amp;", "&");
    const markers = ["שורה תחתונה", "מה כן אמיתי?", "איפה הקפיצה?", "שאלות נפוצות", "תגובה קצרה להעתקה", "המקורות שנבדקו", "איך נבדקה הטענה?"];
    let previousStatic = -1;
    let previousDynamic = -1;
    for (const marker of markers) {
      const staticIndex = source.indexOf(marker);
      const dynamicIndex = html.indexOf(marker);
      expect(staticIndex, `static marker missing: ${marker}`).toBeGreaterThan(previousStatic);
      expect(dynamicIndex, `dynamic marker missing: ${marker}`).toBeGreaterThan(previousDynamic);
      previousStatic = staticIndex;
      previousDynamic = dynamicIndex;
    }
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
