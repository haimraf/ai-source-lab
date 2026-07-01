import { readFileSync } from "node:fs";
import { join } from "node:path";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { gatewayProcessOutOfBodyClaimContent as gatewayClaim } from "../content/claims/gateway-process-out-of-body";
import { ClaimBodyRenderer } from "./ClaimBodyRenderer";

const staticPageSource = readFileSync(
  join(process.cwd(), "app", "(public)", "claims", "gateway-process-out-of-body", "legacy-page.fixture.tsx"),
  "utf8",
);
const staticPageBody = staticPageSource.slice(staticPageSource.indexOf("return ("));
const rendererHtml = renderToStaticMarkup(<ClaimBodyRenderer claim={gatewayClaim} />)
  .replace(/&#x27;/g, "'")
  .replace(/&quot;/g, '"')
  .replace(/&amp;/g, "&");
const rendererClaimBody = rendererHtml.slice(rendererHtml.indexOf(gatewayClaim.lead!));

function expectMarkersInOrder(subject: string, markers: readonly string[]) {
  let previousIndex = -1;
  for (const marker of markers) {
    const currentIndex = subject.indexOf(marker, previousIndex + 1);
    expect(currentIndex, `expected marker in order: ${marker}`).toBeGreaterThan(previousIndex);
    previousIndex = currentIndex;
  }
}

describe("gateway-process-out-of-body renderer parity", () => {
  it("keeps important visible content in the static page and renderer", () => {
    const visibleMarkers = [
      gatewayClaim.lead!,
      gatewayClaim.shortAnswer,
      gatewayClaim.bottomLine,
      "מהו Gateway Process?",
      "הגישה המעשית:",
      "הגישה המיסטית:",
      "מה לגבי Hemi-Sync?",
      "ומה עם בלוטת האצטרובל?",
      "יש מסמך אמיתי",
      "לכן יציאה מהגוף וראייה מרחוק הוכחו",
      "איך נבדקה הטענה?",
    ];

    for (const marker of visibleMarkers) {
      expect(staticPageSource, `static page is missing: ${marker}`).toContain(marker);
      expect(rendererHtml, `renderer is missing: ${marker}`).toContain(marker);
    }
  });

  it("keeps the visible sections in the same order", () => {
    const orderedMarkers = [
      "תשובה קצרה",
      "השורה התחתונה",
      "מהו Gateway Process?",
      "הגישה המעשית:",
      "מה לגבי Hemi-Sync?",
      "ומה עם בלוטת האצטרובל?",
      "שרשרת הטענה",
      "שאלות נפוצות",
      "תגובה קצרה להעתקה",
      "המקורות שנבדקו",
      "איך נבדקה הטענה?",
    ];

    expectMarkersInOrder(staticPageBody, orderedMarkers);
    expectMarkersInOrder(rendererClaimBody, orderedMarkers);
  });

  it("keeps FAQ questions, sources and share copy aligned", () => {
    for (const item of gatewayClaim.faq) {
      expect(staticPageSource).toContain(item.question);
      expect(rendererHtml).toContain(item.question);
    }
    for (const source of gatewayClaim.sources) {
      expect(staticPageSource).toContain(source.title);
      expect(staticPageSource).toContain(source.url);
      expect(rendererHtml).toContain(source.title);
      expect(rendererHtml).toContain(source.url);
    }

    const shareMessage = gatewayClaim.shareCopy!.split("\n")[0];
    expect(staticPageSource).toContain(shareMessage);
    expect(staticPageSource).toContain("<CopyBox text={copyText}");
    expect(rendererHtml).toContain(gatewayClaim.shareCopy!);
    expect(rendererHtml).toContain('class="copy-box"');
  });
});
