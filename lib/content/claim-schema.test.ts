import { describe, expect, it } from "vitest";

import {
  claimStatuses,
  defineClaim,
  editorialDecisions,
  editorialRoles,
  sourceLevels,
  type Claim,
} from "./claim-schema";

const validClaim = {
  schemaVersion: 1,
  slug: "example-claim",
  title: "Example claim",
  description: "A concise description for listings and metadata.",
  kicker: "Example topic",
  tags: ["example", "source-check"],
  cluster: "examples",
  claim: "The narrow statement being checked.",
  shortAnswer: "The short answer shown before the evidence.",
  verdict: "The conclusion supported by the cited sources.",
  findings: {
    found: ["A relevant primary document exists."],
    notFound: ["No source supports the broader interpretation."],
    conclusion: "The narrow fact is real, but the broader claim is unsupported.",
  },
  sources: [
    {
      id: "primary-document",
      title: "Primary document",
      url: "https://example.com/document",
      level: "primary",
      publisher: "Example publisher",
      accessedAt: "2026-06-21",
      language: "en",
    },
  ],
  faq: [
    {
      question: "What does the document establish?",
      answer: "It establishes only the narrow fact described above.",
    },
  ],
  sections: [
    {
      id: "context",
      title: "Context",
      paragraphs: ["Additional context remains structured and static."],
    },
  ],
  workflow: {
    status: "published",
    revision: 1,
    createdAt: "2026-06-20",
    updatedAt: "2026-06-21",
    publishedAt: "2026-06-21",
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
  },
  seo: {
    ogAlt: "A source-check card for the example claim",
  },
} satisfies Claim;

describe("claim content schema", () => {
  it("preserves a complete statically typed claim document", () => {
    expect(defineClaim(validClaim)).toBe(validClaim);
  });

  it("exports stable vocabularies for loaders and editorial tooling", () => {
    expect(claimStatuses).toEqual(["draft", "in_review", "ready", "published", "archived"]);
    expect(sourceLevels).toEqual(["primary", "official", "secondary", "context"]);
    expect(editorialRoles).toEqual(["author", "fact_checker", "editor"]);
    expect(editorialDecisions).toEqual(["pending", "approved", "changes_requested"]);
  });
});
