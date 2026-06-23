import {
  editorialChecklistFields,
  editorialWorkflowStatuses,
  seoWorkflowStatuses,
  sourceWorkflowStatuses,
  testWorkflowStatuses,
  type ClaimContent,
  type EditorialChecklist,
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

function statusIssue(prefix: string, field: string, statuses: readonly string[]) {
  return `${prefix} workflow.${field} must be one of ${statuses.join(", ")}`;
}

function dateIssue(prefix: string, field: string) {
  return `${prefix} workflow.${field} must be an ISO YYYY-MM-DD date`;
}

export function findClaimWorkflowIntegrityIssues(claim: ClaimContent): string[] {
  const issues: string[] = [];
  const workflow = claim.workflow;
  const prefix = `${claim.slug}:`;

  if (!isIsoDate(workflow.createdAt)) {
    issues.push(dateIssue(prefix, "createdAt"));
  }
  if (!isIsoDate(workflow.updatedAt)) {
    issues.push(dateIssue(prefix, "updatedAt"));
  }
  if (workflow.publishedAt !== undefined && !isIsoDate(workflow.publishedAt)) {
    issues.push(dateIssue(prefix, "publishedAt"));
  }
  if (workflow.reviewedAt !== undefined && !isIsoDate(workflow.reviewedAt)) {
    issues.push(dateIssue(prefix, "reviewedAt"));
  }
  if (!isIsoDate(workflow.checkedAt)) {
    issues.push(dateIssue(prefix, "checkedAt"));
  }

  if (!includesStatus(editorialWorkflowStatuses, workflow.editorialStatus)) {
    issues.push(statusIssue(prefix, "editorialStatus", editorialWorkflowStatuses));
  }
  if (!includesStatus(sourceWorkflowStatuses, workflow.sourceStatus)) {
    issues.push(statusIssue(prefix, "sourceStatus", sourceWorkflowStatuses));
  }
  if (!includesStatus(seoWorkflowStatuses, workflow.seoStatus)) {
    issues.push(statusIssue(prefix, "seoStatus", seoWorkflowStatuses));
  }
  if (!includesStatus(testWorkflowStatuses, workflow.testStatus)) {
    issues.push(statusIssue(prefix, "testStatus", testWorkflowStatuses));
  }
  if (typeof workflow.needsUpdate !== "boolean") {
    issues.push(`${prefix} workflow.needsUpdate must be a boolean`);
  }

  const checklist = workflow.checklist as Partial<EditorialChecklist> | undefined;

  if (!checklist) {
    issues.push(`${prefix} workflow.checklist is required`);
  } else {
    for (const field of editorialChecklistFields) {
      const value = checklist[field];

      if (typeof value !== "boolean") {
        issues.push(`${prefix} workflow.checklist.${field} must be a boolean`);
      } else if (claim.status === "published" && value === false) {
        issues.push(`${prefix} workflow.checklist.${field} must be true for published claims`);
      }
    }
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
    checklist &&
    workflow.sourceStatus === "verified" &&
    (!checklist.primarySourcesChecked || !checklist.sourceLinksVerified)
  ) {
    issues.push(`${prefix} verified source status requires checked primary sources and links`);
  }

  if (workflow.needsUpdate === true && !workflow.updateReason?.trim()) {
    issues.push(`${prefix} workflow.updateReason is required when needsUpdate is true`);
  }

  return issues;
}
