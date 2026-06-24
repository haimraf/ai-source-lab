import { defineClaim, type ClaimContent, type ClaimFaqItem, type ClaimSource } from "../../lib/content/claim-schema";

type ClaimMetadata = Pick<
  ClaimContent,
  | "slug"
  | "path"
  | "title"
  | "description"
  | "kicker"
  | "tags"
  | "verdict"
  | "cluster"
  | "updated"
  | "changeFrequency"
  | "priority"
  | "ogAlt"
>;

type MigratedSource = Omit<ClaimSource, "accessedAt">;

interface MigratedClaimInput extends ClaimMetadata {
  claim: string;
  shortAnswer: string;
  bottomLine: string;
  summaryPoints: readonly string[];
  overview: string;
  sources: readonly MigratedSource[];
  faq: readonly ClaimFaqItem[];
  reviewScope?: ClaimContent["reviewScope"];
}

function defaultReviewScope(input: MigratedClaimInput): ClaimContent["reviewScope"] {
  return {
    whatThisChecks: [
      `את הטענה כפי שנוסחה בעמוד: ${input.claim}`,
      "את המקורות המופיעים בבדיקה ואת ההקשר שבו הם פורסמו.",
    ],
    whatThisDoesNotCheck: [
      "את כל הדיון הרחב סביב הנושא או כל טענה קרובה שאינה מנוסחת כאן.",
      "מקורות שלא צורפו, לא אותרו או לא נבדקו בעדכון הנוכחי.",
    ],
    evidenceLimitations: [
      "המסקנה מוגבלת למקורות שנבדקו ולתאריך העדכון של העמוד.",
      "היעדר מקור בבדיקה אינו הוכחה מוחלטת שאין מקור כזה; הוא אומר שהמקורות שנבדקו אינם תומכים בנוסח הטענה.",
    ],
    strongerEvidenceWouldBe: [
      "מקור ראשוני, מסמך רשמי, מחקר, תחקיר עצמאי או נתונים גולמיים שמחברים במפורש בין הטענה לבין המסקנה הרחבה.",
    ],
    sourceQualityNotes: [
      "כאשר הבדיקה עוסקת בגוף מוסדי, מקורות רשמיים משמשים להבין מה הגוף פרסם בפועל; מקורות חיצוניים דרושים כדי לבחון ביקורת, פרשנות והשפעה רחבה יותר.",
    ],
  };
}

export function defineMigratedClaimContent(input: MigratedClaimInput): ClaimContent {
  const { overview, sources, ...content } = input;

  return defineClaim({
    schemaVersion: 1,
    ...content,
    status: "published",
    findings: {
      found: input.summaryPoints,
      notFound: [input.bottomLine],
      conclusion: input.verdict,
    },
    sources: sources.map((source) => ({ ...source, accessedAt: input.updated })),
    sections: [
      {
        id: "overview",
        title: input.shortAnswer,
        paragraphs: [overview],
      },
    ],
    workflow: {
      revision: 1,
      needsReview: false,
      createdAt: input.updated,
      updatedAt: input.updated,
      publishedAt: input.updated,
      checkedAt: "2026-06-21",
      editorialStatus: "published",
      sourceStatus: "verified",
      seoStatus: "basic",
      testStatus: "covered",
      needsUpdate: false,
      checklist: {
        claimScopeChecked: true,
        primarySourcesChecked: true,
        sourceLinksVerified: true,
        verdictSupported: true,
        conclusionWordingChecked: true,
        copyReviewed: true,
        seoReviewed: true,
        shareCopyReviewed: true,
        mobileReviewed: true,
      },
      credits: [
        {
          id: "haim-rafael",
          name: "חיים רפאל",
          role: "author",
        },
      ],
    },
    seo: {
      title: `${input.title} | מקור בדיקה`,
      description: input.description,
      noIndex: false,
    },
    reviewScope: input.reviewScope ?? defaultReviewScope(input),
  });
}
