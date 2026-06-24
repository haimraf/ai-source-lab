export const claimStatuses = ["draft", "in_review", "ready", "published", "archived"] as const;
export type ClaimStatus = (typeof claimStatuses)[number];

export const sourceLevels = ["primary", "official", "secondary", "context"] as const;
export type SourceLevel = (typeof sourceLevels)[number];

export const sourceQualityLabels = [
  "official-document",
  "academic-research",
  "journalism",
  "primary-source",
  "secondary-analysis",
  "claim-source-social-media",
] as const;
export type SourceQualityLabel = (typeof sourceQualityLabels)[number];

export const changeFrequencies = ["always", "hourly", "daily", "weekly", "monthly", "yearly", "never"] as const;
export type ChangeFrequency = (typeof changeFrequencies)[number];

export const editorialRoles = ["author", "fact_checker", "editor"] as const;
export type EditorialRole = (typeof editorialRoles)[number];

export const editorialDecisions = ["pending", "approved", "changes_requested"] as const;
export type EditorialDecision = (typeof editorialDecisions)[number];

export const editorialWorkflowStatuses = ["draft", "reviewed", "published", "needs-review"] as const;
export type EditorialWorkflowStatus = (typeof editorialWorkflowStatuses)[number];

export const sourceWorkflowStatuses = ["missing", "partial", "verified", "needs-refresh"] as const;
export type SourceWorkflowStatus = (typeof sourceWorkflowStatuses)[number];

export const seoWorkflowStatuses = ["missing", "basic", "complete", "needs-review"] as const;
export type SeoWorkflowStatus = (typeof seoWorkflowStatuses)[number];

export const testWorkflowStatuses = ["missing", "partial", "covered", "needs-review"] as const;
export type TestWorkflowStatus = (typeof testWorkflowStatuses)[number];

export interface ClaimSource {
  id: string;
  title: string;
  url: string;
  level: SourceLevel;
  quality?: SourceQualityLabel;
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

export interface ClaimBodyBlockBase {
  id: string;
  title?: string;
}

export interface ClaimParagraphSectionBlock extends ClaimBodyBlockBase {
  type: "paragraph-section";
  paragraphs: readonly string[];
}

export interface ClaimAnswerBoxBlock extends ClaimBodyBlockBase {
  type: "answer-box";
  eyebrow?: string;
  title: string;
  paragraphs: readonly string[];
  variant?: "answer" | "verdict";
}

export interface ClaimVerdictGridItem {
  label: string;
  text: string;
  emphasis?: boolean;
}

export interface ClaimVerdictGridBlock extends ClaimBodyBlockBase {
  type: "verdict-grid";
  items: readonly ClaimVerdictGridItem[];
}

export interface ClaimEvidenceItem {
  id: string;
  number?: string;
  title: string;
  paragraphs: readonly string[];
}

export interface ClaimEvidenceListBlock extends ClaimBodyBlockBase {
  type: "evidence-list";
  numbered?: boolean;
  items: readonly ClaimEvidenceItem[];
}

export interface ClaimSourceLevelRow {
  label: string;
  title: string;
  paragraphs: readonly string[];
}

export interface ClaimSourceLevelsBlock extends ClaimBodyBlockBase {
  type: "source-levels";
  rows: readonly ClaimSourceLevelRow[];
}

export type ClaimComparisonTone = "neutral" | "supports" | "contradicts" | "caution";

export interface ClaimComparisonItem {
  label: string;
  text: string;
  tone?: ClaimComparisonTone;
  emphasis?: boolean;
}

export interface ClaimComparisonListBlock extends ClaimBodyBlockBase {
  type: "comparison-list";
  items: readonly ClaimComparisonItem[];
}

export interface ClaimLogicChainBlock extends ClaimBodyBlockBase {
  type: "logic-chain";
  ariaLabel?: string;
  steps: readonly string[];
  conclusion?: string;
  note?: string;
}

export interface ClaimMethodNoteBlock extends ClaimBodyBlockBase {
  type: "method-note";
  paragraphs: readonly string[];
}

export interface ClaimBonusNoteBlock extends ClaimBodyBlockBase {
  type: "bonus-note";
  paragraphs: readonly string[];
}

export interface ClaimFaqBlock extends ClaimBodyBlockBase {
  type: "faq";
  source: "claim";
}

export interface ClaimSourcesBlock extends ClaimBodyBlockBase {
  type: "sources";
  source: "claim";
}

export interface ClaimGalleryBlock extends ClaimBodyBlockBase {
  type: "gallery";
  source: "claim";
  exhibitIds?: readonly string[];
}

export interface ClaimCopyShareBlock extends ClaimBodyBlockBase {
  type: "copy-share";
  source: "claim";
}

export type ClaimBodyBlock =
  | ClaimParagraphSectionBlock
  | ClaimAnswerBoxBlock
  | ClaimVerdictGridBlock
  | ClaimEvidenceListBlock
  | ClaimSourceLevelsBlock
  | ClaimComparisonListBlock
  | ClaimLogicChainBlock
  | ClaimMethodNoteBlock
  | ClaimBonusNoteBlock
  | ClaimFaqBlock
  | ClaimSourcesBlock
  | ClaimGalleryBlock
  | ClaimCopyShareBlock;

export interface ClaimExhibit {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  label?: string;
  credit?: string;
  kind?: "image" | "document";
}

export type ClaimStructuredDataPlacement = "page" | "layout";

export interface ClaimArticleStructuredData {
  type: "article";
  placement: ClaimStructuredDataPlacement;
  headline?: string;
  description?: string;
  datePublished?: string;
  dateModified?: string;
  inLanguage?: string;
}

export interface ClaimFaqStructuredData {
  type: "faq";
  placement: ClaimStructuredDataPlacement;
  items?: readonly ClaimFaqItem[];
}

export type ClaimStructuredDataEntry = ClaimArticleStructuredData | ClaimFaqStructuredData;

export type ClaimStructuredDataConfig =
  | { mode: "none" }
  | { mode: "configured"; container?: "separate" | "graph"; entries: readonly ClaimStructuredDataEntry[] };

export interface ClaimOpenGraphOverrides {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  images?: readonly ClaimSocialImage[];
  siteName?: string;
  locale?: string;
  type?: "article" | "website";
}

export interface ClaimTwitterOverrides {
  card?: "summary" | "summary_large_image";
  title?: string;
  description?: string;
  image?: string;
  images?: readonly string[];
}

export interface ClaimSocialImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface ClaimMetadataOverrides {
  title?: string;
  description?: string;
  canonical?: `/claims/${string}`;
  openGraph?: ClaimOpenGraphOverrides;
  twitter?: ClaimTwitterOverrides;
}

export interface ClaimFindings {
  found: readonly string[];
  notFound: readonly string[];
  conclusion: string;
}

export interface ClaimReviewScope {
  whatThisChecks: readonly string[];
  whatThisDoesNotCheck?: readonly string[];
  evidenceLimitations?: readonly string[];
  strongerEvidenceWouldBe?: readonly string[];
  sourceQualityNotes?: readonly string[];
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
  conclusionWordingChecked: boolean;
  copyReviewed: boolean;
  seoReviewed: boolean;
  shareCopyReviewed: boolean;
  mobileReviewed: boolean;
}

export const editorialChecklistFields = [
  "claimScopeChecked",
  "primarySourcesChecked",
  "sourceLinksVerified",
  "verdictSupported",
  "conclusionWordingChecked",
  "copyReviewed",
  "seoReviewed",
  "shareCopyReviewed",
  "mobileReviewed",
] as const satisfies readonly (keyof EditorialChecklist)[];

export interface EditorialWorkflow {
  revision: number;
  needsReview: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  checkedAt: string;
  editorialStatus: EditorialWorkflowStatus;
  sourceStatus: SourceWorkflowStatus;
  seoStatus: SeoWorkflowStatus;
  testStatus: TestWorkflowStatus;
  needsUpdate: boolean;
  updateReason?: string;
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
  lead?: string;
  shareCopy?: string;
  exhibits?: readonly ClaimExhibit[];
  structuredData?: ClaimStructuredDataConfig;
  metadataOverrides?: ClaimMetadataOverrides;
  reviewScope?: ClaimReviewScope;
  body?: readonly ClaimBodyBlock[];
}

// Compatibility aliases keep the schema additive until content migration starts.
export type Source = ClaimSource;
export type FAQ = ClaimFaqItem;
export type Claim = ClaimContent;

export function defineClaim<const T extends ClaimContent>(claim: T): T {
  return claim;
}
