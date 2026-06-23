import { describe, expect, it } from "vitest";

import { claimContentRecords } from "../../content/claims";
import type { ClaimContent } from "./claim-schema";
import { findClaimWorkflowIntegrityIssues } from "./claim-workflow";

const allowedEditorialStatuses = ["draft", "reviewed", "published", "needs-review"] as const;
const allowedSourceStatuses = ["missing", "partial", "verified", "needs-refresh"] as const;
const allowedSeoStatuses = ["missing", "basic", "complete", "needs-review"] as const;
const allowedTestStatuses = ["missing", "partial", "covered", "needs-review"] as const;
const PUBLISHED_CLAIM_COUNT = 22;

describe("claim workflow fields", () => {
  it("accepts the current published claim set", () => {
    expect(claimContentRecords).toHaveLength(PUBLISHED_CLAIM_COUNT);
    expect(claimContentRecords.flatMap(findClaimWorkflowIntegrityIssues)).toEqual([]);
  });

  it("keeps every published claim in the approved workflow state", () => {
    for (const claim of claimContentRecords) {
      expect(claim.workflow.checkedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(allowedEditorialStatuses).toContain(claim.workflow.editorialStatus);
      expect(allowedSourceStatuses).toContain(claim.workflow.sourceStatus);
      expect(allowedSeoStatuses).toContain(claim.workflow.seoStatus);
      expect(allowedTestStatuses).toContain(claim.workflow.testStatus);
      expect(claim.workflow).toMatchObject({
        editorialStatus: "published",
        sourceStatus: "verified",
        seoStatus: "basic",
        testStatus: "covered",
        needsUpdate: false,
      });
      expect(claim.workflow.checklist).toMatchObject({
        conclusionWordingChecked: true,
        shareCopyReviewed: true,
        mobileReviewed: true,
      });
    }
  });

  it("reports missing workflow metadata", () => {
    const [validClaim] = claimContentRecords;
    const { checkedAt: _checkedAt, ...workflow } = validClaim.workflow;
    const invalidClaim = { ...validClaim, workflow } as unknown as ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toContain(
      `${validClaim.slug}: workflow.checkedAt must be an ISO YYYY-MM-DD date`,
    );
  });

  it("reports missing and invalid checklist fields", () => {
    const [validClaim] = claimContentRecords;
    const missingChecklistClaim = {
      ...validClaim,
      workflow: { ...validClaim.workflow, checklist: undefined },
    } as unknown as ClaimContent;
    const invalidChecklistClaim = {
      ...validClaim,
      workflow: {
        ...validClaim.workflow,
        checklist: { ...validClaim.workflow.checklist, mobileReviewed: "yes" },
      },
    } as unknown as ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(missingChecklistClaim)).toContain(
      `${validClaim.slug}: workflow.checklist is required`,
    );
    expect(findClaimWorkflowIntegrityIssues(invalidChecklistClaim)).toContain(
      `${validClaim.slug}: workflow.checklist.mobileReviewed must be a boolean`,
    );
  });

  it("requires completed checklist evidence for published claims", () => {
    const [validClaim] = claimContentRecords;
    const invalidClaim = {
      ...validClaim,
      workflow: {
        ...validClaim.workflow,
        checklist: { ...validClaim.workflow.checklist, shareCopyReviewed: false },
      },
    } as ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toContain(
      `${validClaim.slug}: published claim requires workflow.checklist.shareCopyReviewed`,
    );
  });

  it("allows incomplete checklist evidence before publication", () => {
    const [validClaim] = claimContentRecords;
    const draftClaim = {
      ...validClaim,
      status: "draft",
      workflow: {
        ...validClaim.workflow,
        checklist: { ...validClaim.workflow.checklist, shareCopyReviewed: false },
      },
    } as ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(draftClaim)).not.toContain(
      `${validClaim.slug}: published claim requires workflow.checklist.shareCopyReviewed`,
    );
  });

  it("rejects invalid vocabularies, impossible dates, and missing update reasons", () => {
    const [validClaim] = claimContentRecords;
    const invalidClaim = {
      ...validClaim,
      workflow: {
        ...validClaim.workflow,
        updatedAt: "2026-02-30",
        editorialStatus: "done",
        sourceStatus: "ok",
        seoStatus: "fine",
        testStatus: "green",
        needsUpdate: true,
      },
    } as unknown as ClaimContent;

    const issues = findClaimWorkflowIntegrityIssues(invalidClaim);
    expect(issues).toContain(`${validClaim.slug}: workflow.updatedAt must be an ISO YYYY-MM-DD date`);
    expect(issues).toContain(`${validClaim.slug}: workflow.editorialStatus must be one of draft, reviewed, published, needs-review`);
    expect(issues).toContain(`${validClaim.slug}: workflow.sourceStatus must be one of missing, partial, verified, needs-refresh`);
    expect(issues).toContain(`${validClaim.slug}: workflow.seoStatus must be one of missing, basic, complete, needs-review`);
    expect(issues).toContain(`${validClaim.slug}: workflow.testStatus must be one of missing, partial, covered, needs-review`);
    expect(issues).toContain(`${validClaim.slug}: workflow.updateReason is required when needsUpdate is true`);
  });
});
