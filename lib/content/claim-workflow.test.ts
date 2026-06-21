import { describe, expect, it } from "vitest";

import { claimContentRecords } from "../../content/claims";
import type { ClaimContent } from "./claim-schema";
import { findClaimWorkflowIntegrityIssues } from "./claim-workflow";

const allowedEditorialStatuses = ["draft", "reviewed", "published", "needs-review"] as const;
const allowedSourceStatuses = ["missing", "partial", "verified", "needs-refresh"] as const;
const allowedSeoStatuses = ["missing", "basic", "complete", "needs-review"] as const;
const allowedTestStatuses = ["missing", "partial", "covered", "needs-review"] as const;

describe("claim workflow fields", () => {
  it("stores the approved Stage 10 workflow state on every claim", () => {
    const claims = claimContentRecords;

    expect(claims).toHaveLength(12);
    for (const claim of claims) {
      expect(claim.workflow.checkedAt).toBe("2026-06-21");
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

  it("accepts every current claim workflow", () => {
    expect(claimContentRecords.flatMap(findClaimWorkflowIntegrityIssues)).toEqual([]);
  });

  it("reports a missing workflow field", () => {
    const [validClaim] = claimContentRecords;
    const { checkedAt: _checkedAt, ...workflow } = validClaim.workflow;
    const invalidClaim = { ...validClaim, workflow } as unknown as ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toContain(
      `${validClaim.slug}: workflow.checkedAt must be an ISO YYYY-MM-DD date`,
    );
  });

  it("reports a missing checklist without throwing", () => {
    const [validClaim] = claimContentRecords;
    const invalidClaim = {
      ...validClaim,
      workflow: { ...validClaim.workflow, checklist: undefined },
    } as unknown as ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toContain(
      `${validClaim.slug}: workflow.checklist is required`,
    );
  });

  it("requires every checklist field to be boolean", () => {
    const [validClaim] = claimContentRecords;
    const { conclusionWordingChecked: _conclusionWordingChecked, ...missingFieldChecklist } =
      validClaim.workflow.checklist;
    const missingFieldClaim = {
      ...validClaim,
      workflow: { ...validClaim.workflow, checklist: missingFieldChecklist },
    } as unknown as ClaimContent;
    const nonBooleanClaim = {
      ...validClaim,
      workflow: {
        ...validClaim.workflow,
        checklist: { ...validClaim.workflow.checklist, mobileReviewed: "yes" },
      },
    } as unknown as ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(missingFieldClaim)).toContain(
      `${validClaim.slug}: workflow.checklist.conclusionWordingChecked must be a boolean`,
    );
    expect(findClaimWorkflowIntegrityIssues(nonBooleanClaim)).toContain(
      `${validClaim.slug}: workflow.checklist.mobileReviewed must be a boolean`,
    );
  });

  it("requires every published checklist field to be true", () => {
    const [validClaim] = claimContentRecords;
    const invalidClaim = {
      ...validClaim,
      workflow: {
        ...validClaim.workflow,
        checklist: { ...validClaim.workflow.checklist, shareCopyReviewed: false },
      },
    } satisfies ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toContain(
      `${validClaim.slug}: published claim requires workflow.checklist.shareCopyReviewed`,
    );
  });

  it("allows an incomplete boolean checklist before publication", () => {
    const [validClaim] = claimContentRecords;
    const draftClaim = {
      ...validClaim,
      status: "draft",
      workflow: {
        ...validClaim.workflow,
        checklist: { ...validClaim.workflow.checklist, shareCopyReviewed: false },
      },
    } satisfies ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(draftClaim)).toEqual([]);
  });

  it("rejects invalid workflow vocabularies and missing published statuses", () => {
    const [validClaim] = claimContentRecords;
    const invalidClaim = {
      ...validClaim,
      workflow: {
        ...validClaim.workflow,
        editorialStatus: "invalid",
        sourceStatus: "missing",
        seoStatus: "missing",
        testStatus: "missing",
        needsUpdate: "no",
      },
    } as unknown as ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toEqual(
      expect.arrayContaining([
        `${validClaim.slug}: invalid workflow.editorialStatus`,
        `${validClaim.slug}: published claim cannot have workflow.sourceStatus missing`,
        `${validClaim.slug}: published claim cannot have workflow.seoStatus missing`,
        `${validClaim.slug}: published claim cannot have workflow.testStatus missing`,
        `${validClaim.slug}: workflow.needsUpdate must be a boolean`,
      ]),
    );
  });

  it("rejects impossible workflow dates", () => {
    const [validClaim] = claimContentRecords;
    const invalidClaim = {
      ...validClaim,
      workflow: { ...validClaim.workflow, checkedAt: "2026-02-31" },
    } as ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toContain(
      `${validClaim.slug}: workflow.checkedAt must be an ISO YYYY-MM-DD date`,
    );
  });

  it("requires checklist evidence for verified sources and a reason for updates", () => {
    const [validClaim] = claimContentRecords;
    const invalidClaim = {
      ...validClaim,
      workflow: {
        ...validClaim.workflow,
        sourceStatus: "verified",
        needsUpdate: true,
        updateReason: " ",
        checklist: { ...validClaim.workflow.checklist, primarySourcesChecked: false },
      },
    } satisfies ClaimContent;

    expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toEqual(
      expect.arrayContaining([
        `${validClaim.slug}: verified source status requires checked primary sources and links`,
        `${validClaim.slug}: workflow.updateReason is required when needsUpdate is true`,
      ]),
    );
  });
});

