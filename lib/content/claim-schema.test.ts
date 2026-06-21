import { describe, expect, it } from "vitest";

import {
  changeFrequencies,
  claimStatuses,
  defineClaim,
  editorialDecisions,
  editorialRoles,
  sourceLevels,
  type ClaimContent,
  type ClaimFaqItem,
  type ClaimSource,
  type EditorialChecklist,
  type EditorialWorkflow,
} from "./claim-schema";

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
});
