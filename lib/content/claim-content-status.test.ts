import { describe, expect, it } from "vitest";

import { claimContentRecords } from "../../content/claims";
import type { ClaimContent } from "./claim-schema";
import { editorialChecklistFields } from "./claim-schema";
import {
  getAllClaimsContentStatus,
  getClaimContentStatus,
} from "./claim-content-status";

describe("claim content status", () => {
  it("summarizes every content record in loader order", () => {
    const summaries = getAllClaimsContentStatus(claimContentRecords);

    expect(summaries).toHaveLength(claimContentRecords.length);
    expect(summaries.map((summary) => summary.slug)).toEqual(
      claimContentRecords.map((claim) => claim.slug),
    );

    for (const [index, summary] of summaries.entries()) {
      const claim = claimContentRecords[index];
      expect(summary).toMatchObject({
        slug: claim.slug,
        path: claim.path,
        title: claim.title,
        editorialStatus: claim.workflow.editorialStatus,
        sourceStatus: claim.workflow.sourceStatus,
        seoStatus: claim.workflow.seoStatus,
        testStatus: claim.workflow.testStatus,
        needsUpdate: false,
        checkedAt: claim.workflow.checkedAt,
        sourceCount: claim.sources.length,
        hasSources: true,
        checklistCompleted: editorialChecklistFields.length,
        checklistTotal: editorialChecklistFields.length,
        incompleteChecklistFields: [],
        missingMetadataFields: [],
        needsRefresh: false,
        mobileReviewed: true,
      });
      expect(summary.hasShareCopy).toBe(Boolean(claim.shareCopy?.trim()));
    }
  });

  it("reports degraded content without exposing internal workflow notes", () => {
    const source = claimContentRecords[0];
    const degraded = {
      ...source,
      title: " ",
      description: " ",
      path: "" as ClaimContent["path"],
      sources: [],
      shareCopy: " ",
      seo: { ...source.seo, title: " ", description: " " },
      metadataOverrides: undefined,
      workflow: {
        ...source.workflow,
        needsUpdate: true,
        updateReason: "must not leave the helper",
        sourceStatus: "needs-refresh",
        checklist: {
          ...source.workflow.checklist,
          conclusionWordingChecked: false,
          mobileReviewed: false,
        },
      },
    } satisfies ClaimContent;

    const summary = getClaimContentStatus(degraded);

    expect(summary).toMatchObject({
      sourceCount: 0,
      hasSources: false,
      hasShareCopy: false,
      checklistCompleted: editorialChecklistFields.length - 2,
      incompleteChecklistFields: ["conclusionWordingChecked", "mobileReviewed"],
      missingMetadataFields: ["title", "description", "canonical"],
      needsRefresh: true,
      mobileReviewed: false,
    });
    expect(summary).not.toHaveProperty("updateReason");
  });

  it("does not mutate input records", () => {
    const before = JSON.stringify(claimContentRecords);
    getAllClaimsContentStatus(claimContentRecords);
    expect(JSON.stringify(claimContentRecords)).toBe(before);
  });
});
