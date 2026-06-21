import {
  editorialWorkflowStatuses,
  seoWorkflowStatuses,
  sourceWorkflowStatuses,
  testWorkflowStatuses,
  type ClaimContent,
} from "./claim-schema";

function includesStatus(statuses: readonly string[], value: unknown): value is string {
  return typeof value === "string" && statuses.includes(value);
}

function isIsoDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

  const [year, month, day] = value.split("-").map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));

  return (
    parsed.getUTCFullYear() === year &&
    parsed.getUTCMonth() === month - 1 &&
    parsed.getUTCDate() === day
  );
}

export function findClaimWorkflowIntegrityIssues(claim: ClaimContent): string[] {
  const issues: string[] = [];
  const workflow = claim.workflow;
  const prefix = `${claim.slug}:`;

  if (!isIsoDate(workflow.checkedAt)) {
    issues.push(`${prefix} workflow.checkedAt must be an ISO YYYY-MM-DD date`);
  }
  if (!includesStatus(editorialWorkflowStatuses, workflow.editorialStatus)) {
    issues.push(`${prefix} invalid workflow.editorialStatus`);
  }
  if (!includesStatus(sourceWorkflowStatuses, workflow.sourceStatus)) {
    issues.push(`${prefix} invalid workflow.sourceStatus`);
  }
  if (!includesStatus(seoWorkflowStatuses, workflow.seoStatus)) {
    issues.push(`${prefix} invalid workflow.seoStatus`);
  }
  if (!includesStatus(testWorkflowStatuses, workflow.testStatus)) {
    issues.push(`${prefix} invalid workflow.testStatus`);
  }
  if (typeof workflow.needsUpdate !== "boolean") {
    issues.push(`${prefix} workflow.needsUpdate must be a boolean`);
  }

  if (claim.status === "published") {
    if (workflow.sourceStatus === "missing") {
      issues.push(`${prefix} published claim cannot have workflow.sourceStatus missing`);
    }
    if (workflow.seoStatus === "missing") {
      issues.push(`${prefix} published claim cannot have workflow.seoStatus missing`);
    }
    if (workflow.testStatus === "missing") {
      issues.push(`${prefix} published claim cannot have workflow.testStatus missing`);
    }
  }

  if (
    workflow.sourceStatus === "verified" &&
    (!workflow.checklist.primarySourcesChecked || !workflow.checklist.sourceLinksVerified)
  ) {
    issues.push(`${prefix} verified source status requires checked primary sources and links`);
  }

  if (workflow.needsUpdate === true && !workflow.updateReason?.trim()) {
    issues.push(`${prefix} workflow.updateReason is required when needsUpdate is true`);
  }

  return issues;
}
