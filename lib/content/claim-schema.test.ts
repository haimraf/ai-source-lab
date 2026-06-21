import { describe, expect, it } from "vitest";

import {
  changeFrequencies,
  claimStatuses,
  defineClaim,
  editorialDecisions,
  editorialRoles,
  sourceLevels,
  type ClaimContent,
  type ClaimBodyBlock,
  type ClaimFaqItem,
  type ClaimSource,
  type EditorialChecklist,
  type EditorialWorkflow,
} from "./claim-schema";

const richBody = [
  {
    id: "context",
    type: "paragraph-section",
    title: "Context",
    paragraphs: ["A paragraph that must keep its place in the document."],
  },
  {
    id: "answer",
    type: "answer-box",
    eyebrow: "Short answer",
    title: "The narrow answer",
    paragraphs: ["The answer box keeps its supporting copy."],
    variant: "answer",
  },
  {
    id: "verdict",
    type: "verdict-grid",
    items: [
      { label: "Claim", text: "The statement being checked." },
      { label: "Bottom line", text: "The supported conclusion.", emphasis: true },
    ],
  },
  {
    id: "evidence",
    type: "evidence-list",
    numbered: true,
    items: [
      { id: "evidence-1", number: "01", title: "Primary evidence", paragraphs: ["What the source establishes."] },
    ],
  },
  {
    id: "levels",
    type: "source-levels",
    rows: [
      { label: "Document", title: "What exists", paragraphs: ["The primary document exists."] },
    ],
  },
  {
    id: "comparison",
    type: "comparison-list",
    items: [
      { label: "Supported", text: "The narrow statement is documented.", tone: "supports" },
      { label: "Unsupported", text: "The broader conclusion is not documented.", tone: "contradicts" },
    ],
  },
  {
    id: "logic",
    type: "logic-chain",
    ariaLabel: "Claim reasoning chain",
    steps: ["A document exists", "The document discusses the topic"],
    conclusion: "Therefore the broader claim is true",
    note: "The conclusion does not follow from the preceding steps.",
  },
  {
    id: "method",
    type: "method-note",
    title: "How the claim was checked",
    paragraphs: ["The sources were compared with the exact claim."],
  },
  {
    id: "bonus",
    type: "bonus-note",
    title: "Additional context",
    paragraphs: ["A related fact that should remain visually distinct."],
  },
  { id: "faq", type: "faq", title: "Frequently asked questions", source: "claim" },
  { id: "sources", type: "sources", title: "Sources checked", source: "claim" },
  { id: "gallery", type: "gallery", title: "Exhibits", source: "claim", exhibitIds: ["exhibit-1"] },
  { id: "share", type: "copy-share", title: "Copy a short response", source: "claim" },
] satisfies readonly ClaimBodyBlock[];

const checklist = {
  claimScopeChecked: true,
  primarySourcesChecked: true,
  sourceLinksVerified: true,
  verdictSupported: true,
  copyReviewed: true,
  seoReviewed: true,
} satisfies EditorialChecklist;

const primarySource = {
  id: "primary-document",
  title: "Primary document",
  url: "https://example.com/document",
  level: "primary",
  publisher: "Example publisher",
  accessedAt: "2026-06-21",
  language: "en",
} satisfies ClaimSource;

const faqItem = {
  question: "What does the document establish?",
  answer: "It establishes only the narrow fact described above.",
} satisfies ClaimFaqItem;

const workflow = {
  revision: 1,
  needsReview: false,
  createdAt: "2026-06-20",
  updatedAt: "2026-06-21",
  publishedAt: "2026-06-21",
  reviewedBy: "editor",
  reviewedAt: "2026-06-21",
  checklist,
  credits: [
    {
      id: "editor",
      name: "Editor",
      role: "editor",
    },
  ],
  review: {
    reviewerId: "editor",
    decision: "approved",
    reviewedAt: "2026-06-21",
  },
} satisfies EditorialWorkflow;

const validClaim = {
  schemaVersion: 1,
  slug: "example-claim",
  path: "/claims/example-claim",
  title: "Example claim",
  description: "A concise description for listings and metadata.",
  kicker: "Example topic",
  tags: ["example", "source-check"],
  verdict: "The conclusion supported by the cited sources.",
  status: "published",
  cluster: "examples",
  updated: "2026-06-21",
  changeFrequency: "monthly",
  priority: 0.8,
  ogAlt: "A source-check card for the example claim",
  claim: "The narrow statement being checked.",
  shortAnswer: "The short answer shown before the evidence.",
  bottomLine: "The narrow fact is real, but the broader claim is unsupported.",
  summaryPoints: ["A relevant primary document exists.", "The broader claim is unsupported."],
  findings: {
    found: ["A relevant primary document exists."],
    notFound: ["No source supports the broader interpretation."],
    conclusion: "The narrow fact is real, but the broader claim is unsupported.",
  },
  sources: [primarySource],
  faq: [faqItem],
  sections: [
    {
      id: "context",
      title: "Context",
      paragraphs: ["Additional context remains structured and static."],
    },
  ],
  workflow,
  seo: {
    noIndex: false,
  },
} satisfies ClaimContent;

const richClaim = {
  ...validClaim,
  lead: "A dedicated editorial lead that is distinct from the SEO description.",
  shareCopy: "A short response prepared for copying and sharing.",
  exhibits: [
    {
      id: "exhibit-1",
      src: "/evidence/example.svg",
      alt: "A diagram separating the source from the conclusion",
      title: "Source and conclusion",
      caption: "The exhibit preserves its caption and accessible alternative text.",
      label: "Exhibit 1",
      credit: "Editorial illustration",
      kind: "image",
    },
  ],
  structuredData: {
    mode: "configured",
    entries: [
      {
        type: "article",
        placement: "page",
        headline: "Example claim",
        datePublished: "2026-06-20",
        dateModified: "2026-06-21",
        inLanguage: "en",
      },
      { type: "faq", placement: "layout", items: [faqItem] },
    ],
  },
  metadataOverrides: {
    canonical: "/claims/example-claim",
    openGraph: {
      title: "Example claim",
      description: "A social description for the example claim.",
      url: "https://example.com/claims/example-claim",
      image: "https://example.com/claims/example-claim/opengraph-image",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: "Example claim",
      description: "A social description for the example claim.",
      image: "https://example.com/claims/example-claim/opengraph-image",
    },
  },
  body: richBody,
} satisfies ClaimContent;

describe("claim content schema", () => {
  it("preserves a complete statically typed claim document", () => {
    expect(defineClaim(validClaim)).toBe(validClaim);
  });

  it("exports stable vocabularies for loaders and editorial tooling", () => {
    expect(claimStatuses).toEqual(["draft", "in_review", "ready", "published", "archived"]);
    expect(sourceLevels).toEqual(["primary", "official", "secondary", "context"]);
    expect(changeFrequencies).toEqual(["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"]);
    expect(editorialRoles).toEqual(["author", "fact_checker", "editor"]);
    expect(editorialDecisions).toEqual(["pending", "approved", "changes_requested"]);
  });

  it("preserves ordered rich body blocks and optional cutover metadata", () => {
    const claim = defineClaim(richClaim);

    expect(claim.body.map((block) => block.type)).toEqual([
      "paragraph-section",
      "answer-box",
      "verdict-grid",
      "evidence-list",
      "source-levels",
      "comparison-list",
      "logic-chain",
      "method-note",
      "bonus-note",
      "faq",
      "sources",
      "gallery",
      "copy-share",
    ]);
    expect(claim.exhibits[0].id).toBe("exhibit-1");
    expect(claim.structuredData.mode).toBe("configured");
    expect(claim.structuredData.entries[1]).toMatchObject({ type: "faq", items: [faqItem] });
    expect(claim.metadataOverrides.openGraph?.type).toBe("article");
  });
});
