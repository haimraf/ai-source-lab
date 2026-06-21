import { describe, expect, it } from "vitest";

import { gatewayProcessOutOfBodyClaimContent as gatewayClaim } from "../../content/claims/gateway-process-out-of-body";
import type { ClaimContent } from "./claim-schema";

const typedGatewayClaim: ClaimContent = gatewayClaim;

describe("gateway-process-out-of-body content record", () => {
  it("defines the ordered rich body needed by the renderer", () => {
    expect(typedGatewayClaim.lead).toBe(
      "מסמך Gateway הוא דוגמה מושלמת לטענה שיש לה גרעין אמיתי: אכן קיים מסמך מודיעיני אמריקאי שבחן את השיטה. אבל ברשת הגרעין הזה קופץ מהר מאוד למסקנה רחבה הרבה יותר — כאילו עצם הבדיקה מוכיחה יציאה מהגוף, ראייה מרחוק או יכולות תודעה על־טבעיות.",
    );
    expect(typedGatewayClaim.body?.map((block) => block.type)).toEqual([
      "answer-box",
      "verdict-grid",
      "paragraph-section",
      "comparison-list",
      "paragraph-section",
      "method-note",
      "logic-chain",
      "faq",
      "copy-share",
      "sources",
      "method-note",
    ]);
    expect(typedGatewayClaim.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ type: "faq", source: "claim" }),
        expect.objectContaining({ type: "copy-share", source: "claim" }),
        expect.objectContaining({ type: "sources", source: "claim" }),
      ]),
    );
  });

  it("preserves share, metadata and Article structured-data intent", () => {
    expect(typedGatewayClaim.shareCopy).toBe(
      'מסמך Gateway אמיתי, אבל הוא לא הוכחה לכך שאפשר לצאת מהגוף או לבצע ראייה מרחוק. הוא מראה שגורמים בצבא/מודיעין בחנו רעיון חריג בתקופת המלחמה הקרה. הקפיצה היא להפוך "המסמך קיים" ל"היכולת הוכחה".\nhttps://ai-source-lab.vercel.app/claims/gateway-process-out-of-body',
    );
    expect(typedGatewayClaim.structuredData).toEqual({
      mode: "configured",
      entries: [
        {
          type: "article",
          placement: "page",
          headline: "האם מסמך Gateway מוכיח יציאה מהגוף?",
          description:
            "בדיקה של מסמך Gateway מ־1983 והקפיצה בין התעניינות מודיעינית לבין הוכחה ליכולות תודעה חריגות.",
          datePublished: "2026-06-19",
          dateModified: "2026-06-19",
          inLanguage: "he-IL",
        },
      ],
    });
    expect(typedGatewayClaim.metadataOverrides).toEqual({
      title: "האם מסמך Gateway מוכיח יציאה מהגוף? | מקור בדיקה",
      description:
        "בדיקה של מסמך Gateway מ־1983: מה באמת נבדק, מה אפשר ללמוד ממנו, ואיפה מתחילה הקפיצה מהתעניינות מודיעינית להוכחה רוחנית.",
      canonical: "/claims/gateway-process-out-of-body",
    });
    expect(typedGatewayClaim.workflow.credits).toContainEqual({
      id: "haim-rafael",
      name: "חיים רפאל",
      role: "author",
    });
  });
});
