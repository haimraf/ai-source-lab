import { claimContentRecords } from "../content/claims";

export const staticPages = [
  { path: "/", updated: "2026-06-23", changeFrequency: "weekly", priority: 1 },
  { path: "/about", updated: "2026-06-19", changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/accessibility", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/methodology", updated: "2026-06-19", changeFrequency: "weekly", priority: 0.8 },
  { path: "/how-to-cite", updated: "2026-06-19", changeFrequency: "weekly", priority: 0.7 },
  { path: "/suggest-claim", updated: "2026-06-19", changeFrequency: "weekly", priority: 0.7 },
  { path: "/editorial-policy", updated: "2026-06-19", changeFrequency: "weekly", priority: 0.7 },
  { path: "/corrections", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/topics", updated: "2026-06-20", changeFrequency: "weekly", priority: 0.8 },
] as const;

export const homeFeaturedClaimSlug = "great-reset-global-government";

export type TopicClusterSlug =
  | "ai-sources"
  | "agenda-2030"
  | "sky-climate"
  | "pop-culture-symbols"
  | "consciousness-intelligence"
  | "institutional-narratives"
  | "digital-money";

export const claimRecords = claimContentRecords.map((claim) => ({
  slug: claim.slug,
  path: claim.path,
  title: claim.title,
  description: claim.description,
  kicker: claim.kicker,
  tags: claim.tags,
  verdict: claim.verdict,
  updated: claim.updated,
  changeFrequency: claim.changeFrequency,
  priority: claim.priority,
  cluster: claim.cluster,
  ogAlt: claim.ogAlt,
}));

export type ClaimRecord = (typeof claimRecords)[number];
export type ClaimSlug = ClaimRecord["slug"];

export const allClaimTags = Array.from(new Set(claimRecords.flatMap((claim) => claim.tags))).sort((a, b) =>
  a.localeCompare(b, "he"),
);

export function getClaimBySlug(slug: ClaimSlug): ClaimRecord;
export function getClaimBySlug(slug: string | null): ClaimRecord | undefined;
export function getClaimBySlug(slug: string | null) {
  return claimRecords.find((claim) => claim.slug === slug);
}

export function getHomeFeaturedClaim() {
  return getClaimBySlug(homeFeaturedClaimSlug) ?? claimRecords[0];
}
