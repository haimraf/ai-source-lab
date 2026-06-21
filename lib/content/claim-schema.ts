export const claimStatuses = ["draft", "in_review", "ready", "published", "archived"] as const;
export type ClaimStatus = (typeof claimStatuses)[number];

export const sourceLevels = ["primary", "official", "secondary", "context"] as const;
export type SourceLevel = (typeof sourceLevels)[number];

export const editorialRoles = ["author", "fact_checker", "editor"] as const;
export type EditorialRole = (typeof editorialRoles)[number];

export const editorialDecisions = ["pending", "approved", "changes_requested"] as const;
export type EditorialDecision = (typeof editorialDecisions)[number];

export interface Source {
  id: string;
  title: string;
  url: string;
  level: SourceLevel;
  publisher?: string;
  publishedAt?: string;
  accessedAt: string;
  language?: string;
  archivedUrl?: string;
  note?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ClaimSection {
  id: string;
  title: string;
  paragraphs: readonly string[];
}

export interface ClaimFindings {
  found: readonly string[];
  notFound: readonly string[];
  conclusion: string;
}

export interface EditorialCredit {
  id: string;
  name: string;
  role: EditorialRole;
}

export interface EditorialReview {
  reviewerId: string;
  decision: EditorialDecision;
  reviewedAt?: string;
  note?: string;
}

export interface EditorialWorkflow {
  status: ClaimStatus;
  revision: number;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  credits: readonly EditorialCredit[];
  review?: EditorialReview;
}

export interface ClaimSeo {
  title?: string;
  description?: string;
  ogAlt: string;
  noIndex?: boolean;
}

export interface Claim {
  schemaVersion: 1;
  slug: string;
  title: string;
  description: string;
  kicker: string;
  tags: readonly string[];
  cluster: string;
  claim: string;
  shortAnswer: string;
  verdict: string;
  findings: ClaimFindings;
  sources: readonly Source[];
  faq: readonly FAQ[];
  sections: readonly ClaimSection[];
  workflow: EditorialWorkflow;
  seo: ClaimSeo;
}

export function defineClaim<const T extends Claim>(claim: T): T {
  return claim;
}
