import { describe, expect, it } from "vitest";

import { claimContentRecords } from "../../content/claims";
import { findClaimWorkflowIntegrityIssues } from "./claim-workflow";

describe("claim workflow fields", () => {
  it("accepts the current published claim set", () => {
    expect(claimContentRecords).toHaveLength(13);
    expect(claimContentRecords.flatMap(findClaimWorkflowIntegrityIssues)).toEqual([]);
  });

  it("keeps every published claim in the approved workflow state", () => {
    for (const claim of claimContentRecords) {
      expect(claim.workflow.editorialStatus).toBe("published");
      expect(claim.workflow.sourceStatus).toBe("verified");
      expect(claim.workflow.seoStatus).toBe("basic");
      expect(claim.workflow.testStatus).toBe("covered");
      expect(claim.workflow.needsUpdate).toBe(false);
      expect(claim.workflow.checkedAt).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(claim.workflow.checklist.shareCopyReviewed).toBe(true);
      expect(claim.workflow.checklist.mobileReviewed).toBe(true);
      expect(claim.workflow.checklist.conclusionWordingChecked).toBe(true);
    }
  });
});
