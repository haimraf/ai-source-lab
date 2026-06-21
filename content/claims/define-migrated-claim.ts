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
  });
}
