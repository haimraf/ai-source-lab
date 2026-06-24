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
    const legacyMarkers = [
      "\u05ea\u05e9\u05d5\u05d1\u05d4 \u05e7\u05e6\u05e8\u05d4",
      "\u05dc\u05d0. \u05d4\u05e8\u05e2\u05d9\u05d5\u05df \u05e2\u05e6\u05de\u05d5 \u05d0\u05d9\u05e0\u05d5 \u05db\u05dc\u05d0 \u05e2\u05d9\u05e8\u05d5\u05e0\u05d9.",
      "\u05e9\u05dc\u05d5\u05e9 \u05e9\u05db\u05d1\u05d5\u05ea \u05e9\u05dc\u05d0 \u05dc\u05e2\u05e8\u05d1\u05d1",
      "\u05de\u05d5\u05e6\u05d2\u05d9\u05dd \u05d5\u05d0\u05d9\u05d5\u05e8\u05d9\u05dd",
      "\u05e2\u05d5\u05d1\u05d3\u05ea \u05d1\u05d5\u05e0\u05d5\u05e1",
      "\u05d4\u05e9\u05dd \u05d7\u05d3\u05e9 \u05d9\u05d7\u05e1\u05d9\u05ea; \u05d4\u05e8\u05e2\u05d9\u05d5\u05df \u05dc\u05d0 \u05e0\u05d5\u05dc\u05d3 \u05de\u05d0\u05e4\u05e1",
      "\u05de\u05d4 \u05db\u05df \u05d0\u05e4\u05e9\u05e8 \u05dc\u05d1\u05e7\u05e8?",
      "\u05e9\u05e8\u05e9\u05e8\u05ea \u05d4\u05e7\u05e4\u05d9\u05e6\u05d4",
      "\u05de\u05d4 \u05dc\u05d0 \u05e0\u05de\u05e6\u05d0 \u05d1\u05de\u05e7\u05d5\u05e8\u05d5\u05ea?",
      "\u05e9\u05d0\u05dc\u05d5\u05ea \u05e0\u05e4\u05d5\u05e6\u05d5\u05ea",
      "\u05ea\u05d2\u05d5\u05d1\u05d4 \u05e7\u05e6\u05e8\u05d4 \u05dc\u05d4\u05e2\u05ea\u05e7\u05d4",
      "<h2>\u05d4\u05de\u05e7\u05d5\u05e8\u05d5\u05ea \u05e9\u05e0\u05d1\u05d3\u05e7\u05d5</h2>",
      "\u05d0\u05d9\u05da \u05e0\u05d1\u05d3\u05e7\u05d4 \u05d4\u05d8\u05e2\u05e0\u05d4?",
    ];
    const dynamicMarkers = [
      "\u05ea\u05e9\u05d5\u05d1\u05d4 \u05e7\u05e6\u05e8\u05d4",
      "\u05dc\u05d0 \u05dc\u05e4\u05d9 \u05d4\u05de\u05e7\u05d5\u05e8\u05d5\u05ea \u05e9\u05e0\u05d1\u05d3\u05e7\u05d5. \u05d4\u05e8\u05e2\u05d9\u05d5\u05df \u05e2\u05e6\u05de\u05d5 \u05d0\u05d9\u05e0\u05d5 \u05db\u05dc\u05d0 \u05e2\u05d9\u05e8\u05d5\u05e0\u05d9.",
      "\u05e9\u05dc\u05d5\u05e9 \u05e9\u05db\u05d1\u05d5\u05ea \u05e9\u05dc\u05d0 \u05dc\u05e2\u05e8\u05d1\u05d1",
      "\u05de\u05d5\u05e6\u05d2\u05d9\u05dd \u05d5\u05d0\u05d9\u05d5\u05e8\u05d9\u05dd",
      "\u05e2\u05d5\u05d1\u05d3\u05ea \u05d1\u05d5\u05e0\u05d5\u05e1",
      "\u05d4\u05e9\u05dd \u05d7\u05d3\u05e9 \u05d9\u05d7\u05e1\u05d9\u05ea; \u05d4\u05e8\u05e2\u05d9\u05d5\u05df \u05dc\u05d0 \u05e0\u05d5\u05dc\u05d3 \u05de\u05d0\u05e4\u05e1",
      "\u05de\u05d4 \u05db\u05df \u05d0\u05e4\u05e9\u05e8 \u05dc\u05d1\u05e7\u05e8?",
      "\u05e9\u05e8\u05e9\u05e8\u05ea \u05d4\u05e7\u05e4\u05d9\u05e6\u05d4",
      "\u05de\u05d4 \u05dc\u05d0 \u05e0\u05de\u05e6\u05d0 \u05d1\u05de\u05e7\u05d5\u05e8\u05d5\u05ea \u05e9\u05e0\u05d1\u05d3\u05e7\u05d5?",
      "\u05e9\u05d0\u05dc\u05d5\u05ea \u05e0\u05e4\u05d5\u05e6\u05d5\u05ea",
      "\u05ea\u05d2\u05d5\u05d1\u05d4 \u05e7\u05e6\u05e8\u05d4 \u05dc\u05d4\u05e2\u05ea\u05e7\u05d4",
      "<h2>\u05d4\u05de\u05e7\u05d5\u05e8\u05d5\u05ea \u05e9\u05e0\u05d1\u05d3\u05e7\u05d5</h2>",
      "\u05d0\u05d9\u05da \u05e0\u05d1\u05d3\u05e7\u05d4 \u05d4\u05d8\u05e2\u05e0\u05d4?",
    ];

    expect(source).toContain(claim.lead);
    expect(html).toContain(claim.lead);
    expectMarkersInOrder(source.slice(source.indexOf("return (")), legacyMarkers);
    expectMarkersInOrder(html, dynamicMarkers);
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
