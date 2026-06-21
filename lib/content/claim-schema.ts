export const claimStatuses = ["draft", "in_review", "ready", "published", "archived"] as const;
export type ClaimStatus = (typeof claimStatuses)[number];

export const sourceLevels = ["primary", "official", "secondary", "context"] as const;
export type SourceLevel = (typeof sourceLevels)[number];

export const changeFrequencies = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"] as const;
export type ChangeFrequency = (typeof changeFrequencies)[number];

export const editorialRoles = ["author", "fact_checker", "editor"] as const;
export type EditorialRole = (typeof editorialRoles)[number];

export const editorialDecisions = ["pending", "approved", "changes_requested"] as const;
export type EditorialDecision = (typeof editorialDecisions)[number];

export interface ClaimSource {
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

export interface ClaimFaqItem {
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

export interface EditorialChecklist {
  claimScopeChecked: boolean;
  primarySourcesChecked: boolean;
  sourceLinksVerified: boolean;
  verdictSupported: boolean;
  copyReviewed: boolean;
  seoReviewed: boolean;
}

export interface EditorialWorkflow {
  revision: number;
  needsReview: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  reviewedBy?: string;
  reviewedAt?: string;
  checklist: EditorialChecklist;
  credits: readonly EditorialCredit[];
  review?: EditorialReview;
}

export interface ClaimSeo {
  title?: string;
  description?: string;
  noIndex?: boolean;
}

export interface ClaimContent {
  schemaVersion: 1;
  slug: string;
  path: `/claims/${string}`;
  title: string;
  description: string;
  kicker: string;
  tags: readonly string[];
  verdict: string;
  status: ClaimStatus;
  cluster: string;
  updated: string;
  changeFrequency: ChangeFrequency;
  priority: number;
  ogAlt: string;
  claim: string;
  shortAnswer: string;
  bottomLine: string;
  summaryPoints: readonly string[];
  findings: ClaimFindings;
  sources: readonly ClaimSource[];
  faq: readonly ClaimFaqItem[];
  sections: readonly ClaimSection[];
  workflow: EditorialWorkflow;
  seo: ClaimSeo;
}

// Compatibility aliases keep the schema additive until content migration starts.
export type Source = ClaimSource;
export type FAQ = ClaimFaqItem;
export type Claim = ClaimContent;

export function defineClaim<const T extends ClaimContent>(claim: T): T {
  return claim;
}
