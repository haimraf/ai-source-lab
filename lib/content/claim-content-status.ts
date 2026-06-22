import {
  editorialChecklistFields,
  type ClaimContent,
  type EditorialChecklist,
} from "./claim-schema";

export type ClaimChecklistField = (typeof editorialChecklistFields)[number];
export type BasicMetadataField = "title" | "description" | "canonical";

export interface ClaimContentStatus {
  slug: string;
  path: ClaimContent["path"];
  title: string;
  editorialStatus: ClaimContent["workflow"]["editorialStatus"];
  sourceStatus: ClaimContent["workflow"]["sourceStatus"];
  seoStatus: ClaimContent["workflow"]["seoStatus"];
  testStatus: ClaimContent["workflow"]["testStatus"];
  needsUpdate: boolean;
  checkedAt: string;
  sourceCount: number;
  hasSources: boolean;
  hasShareCopy: boolean;
  checklistCompleted: number;
  checklistTotal: number;
  incompleteChecklistFields: readonly ClaimChecklistField[];
  missingMetadataFields: readonly BasicMetadataField[];
  needsRefresh: boolean;
  mobileReviewed: boolean;
}

function hasText(value: string | undefined): boolean {
  return Boolean(value?.trim());
}

export function getClaimContentStatus(claim: ClaimContent): ClaimContentStatus {
  const checklist = claim.workflow.checklist as Partial<EditorialChecklist>;
  const incompleteChecklistFields = editorialChecklistFields.filter(
    (field) => checklist[field] !== true,
  );
  const effectiveMetadata = {
    title: claim.metadataOverrides?.title ?? claim.seo.title ?? claim.title,
    description:
      claim.metadataOverrides?.description ?? claim.seo.description ?? claim.description,
    canonical: claim.metadataOverrides?.canonical ?? claim.path,
  };
  const missingMetadataFields = (
    Object.keys(effectiveMetadata) as BasicMetadataField[]
  ).filter((field) => !hasText(effectiveMetadata[field]));

  return {
    slug: claim.slug,
    path: claim.path,
    title: claim.title,
    editorialStatus: claim.workflow.editorialStatus,
    sourceStatus: claim.workflow.sourceStatus,
    seoStatus: claim.workflow.seoStatus,
    testStatus: claim.workflow.testStatus,
    needsUpdate: claim.workflow.needsUpdate,
    checkedAt: claim.workflow.checkedAt,
    sourceCount: claim.sources.length,
    hasSources: claim.sources.length > 0,
    hasShareCopy: hasText(claim.shareCopy),
    checklistCompleted: editorialChecklistFields.length - incompleteChecklistFields.length,
    checklistTotal: editorialChecklistFields.length,
    incompleteChecklistFields,
    missingMetadataFields,
    needsRefresh:
      claim.workflow.needsUpdate === true || claim.workflow.sourceStatus === "needs-refresh",
    mobileReviewed: checklist.mobileReviewed === true,
  };
}

export function getAllClaimsContentStatus(
  claims: readonly ClaimContent[],
): readonly ClaimContentStatus[] {
  return claims.map(getClaimContentStatus);
}
