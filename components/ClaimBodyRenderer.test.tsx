import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { aiAsSourcePyramidsClaimContent } from "../content/claims/ai-as-source-pyramids";
import { ClaimBodyRenderer } from "./ClaimBodyRenderer";

describe("ClaimBodyRenderer", () => {
  it("renders the pilot body blocks in their declared order", () => {
    const html = renderToStaticMarkup(<ClaimBodyRenderer claim={aiAsSourcePyramidsClaimContent} />);
    const orderedCopy = [
      aiAsSourcePyramidsClaimContent.lead!,
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

    let previousIndex = -1;
    for (const copy of orderedCopy) {
      const currentIndex = html.indexOf(copy);
      expect(currentIndex, `expected rendered copy: ${copy}`).toBeGreaterThan(previousIndex);
      previousIndex = currentIndex;
    }
  });

  it("resolves claim-backed FAQ, sources and share copy", () => {
    const html = renderToStaticMarkup(<ClaimBodyRenderer claim={aiAsSourcePyramidsClaimContent} />);

    expect(html).toContain("<details>");
    expect(html).toContain(aiAsSourcePyramidsClaimContent.faq[0].question);
    expect(html).toContain(aiAsSourcePyramidsClaimContent.sources[0].url);
    expect(html).toContain(aiAsSourcePyramidsClaimContent.sources[0].title);
    expect(html).toContain(aiAsSourcePyramidsClaimContent.shareCopy!);
    expect(html).toContain('class="copy-box"');
  });
});
