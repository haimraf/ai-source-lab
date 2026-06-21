import { claimContentRecords } from "../../content/claims";
import { claimRecords, homeFeaturedClaimSlug } from "../claims-db";
import type { ClaimContent } from "./claim-schema";

export type ClaimContentIndexEntry = Pick<
  ClaimContent,
  | "schemaVersion"
  | "slug"
  | "path"
  | "title"
  | "description"
  | "kicker"
  | "tags"
  | "verdict"
  | "status"
  | "cluster"
  | "updated"
  | "changeFrequency"
  | "priority"
  | "ogAlt"
>;

const migratedClaimContentBySlug = new Map<string, ClaimContent>(
  claimContentRecords.map((claim) => [claim.slug, claim]),
);

const currentClaimContent = claimRecords.map(
  (claim) =>
    migratedClaimContentBySlug.get(claim.slug) ?? {
      schemaVersion: 1 as const,
      status: "published" as const,
      ...claim,
    },
) satisfies readonly ClaimContentIndexEntry[];

export function getAllClaimContent(): readonly ClaimContentIndexEntry[] {
  return currentClaimContent;
}

export function getPublishedClaimContent(
  claims: readonly ClaimContentIndexEntry[] = currentClaimContent,
): readonly ClaimContentIndexEntry[] {
  return claims.filter((claim) => claim.status === "published");
}

export function getClaimContentBySlug(
  slug: string | null,
  claims: readonly ClaimContentIndexEntry[] = currentClaimContent,
): ClaimContentIndexEntry | undefined {
  return claims.find((claim) => claim.slug === slug);
}

export function getClaimContentRecordBySlug(slug: string | null): ClaimContent | undefined {
  if (!slug) return undefined;
  return migratedClaimContentBySlug.get(slug);
}

export function getClaimContentByPath(
  path: string,
  claims: readonly ClaimContentIndexEntry[] = currentClaimContent,
): ClaimContentIndexEntry | undefined {
  return claims.find((claim) => claim.path === path);
}

export function getClaimContentByCluster(
  cluster: string,
  claims: readonly ClaimContentIndexEntry[] = currentClaimContent,
): readonly ClaimContentIndexEntry[] {
  return claims.filter((claim) => claim.cluster === cluster);
}

export function getAllClaimTags(
  claims: readonly ClaimContentIndexEntry[] = currentClaimContent,
): readonly string[] {
  return Array.from(new Set(claims.flatMap((claim) => claim.tags))).sort((a, b) => a.localeCompare(b, "he"));
}

export function getFeaturedClaimContent(
  claims: readonly ClaimContentIndexEntry[] = getPublishedClaimContent(),
  featuredSlug: string = homeFeaturedClaimSlug,
): ClaimContentIndexEntry | undefined {
  return getClaimContentBySlug(featuredSlug, claims) ?? claims[0];
}
