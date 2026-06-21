# Claim Workflow Fields Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add required, typed workflow statuses to all ten claim content records and enforce them through repository content-integrity checks without changing public output.

**Architecture:** Extend the existing flat `EditorialWorkflow` interface and populate the shared migrated-record factory plus the one independently defined claim. Add a pure workflow-integrity validator that consumes `ClaimContent`; focused tests define its behavior, and the existing repository integrity test invokes it for every full content record.

**Tech Stack:** TypeScript, Vitest, Next.js App Router, existing claim content registry.

---

## File map

- Modify `lib/content/claim-schema.ts`: workflow vocabularies, union types, and required fields.
- Modify `content/claims/define-migrated-claim.ts`: shared Stage 10 values for nine migrated records.
- Modify `content/claims/ai-as-source-pyramids.ts`: explicit Stage 10 values for the independent record.
- Create `lib/content/claim-workflow.test.ts`: all-record contract and validator behavior.
- Create `lib/content/claim-workflow.ts`: pure runtime integrity validation.
- Modify `lib/content-integrity.repository.test.ts`: run workflow integrity over full content records under `check:content`.
- Modify `lib/content/claim-schema.test.ts`: keep the complete typed fixture valid and assert stable workflow vocabularies.

### Task 1: Lock the all-record workflow contract with a failing test

**Files:**
- Create: `lib/content/claim-workflow.test.ts`

- [ ] **Step 1: Record the sitemap baseline**

Run:

```powershell
Get-FileHash -Algorithm SHA256 public\sitemap.xml
```

Expected: capture the current hash for final comparison.

- [ ] **Step 2: Write the failing all-record test**

Create a test that loads the real registry and checks all ten records:

```ts
import { describe, expect, it } from "vitest";

import { getAllClaimContent } from "./claim-loader";

const allowedEditorialStatuses = ["draft", "reviewed", "published", "needs-review"] as const;
const allowedSourceStatuses = ["missing", "partial", "verified", "needs-refresh"] as const;
const allowedSeoStatuses = ["missing", "basic", "complete", "needs-review"] as const;
const allowedTestStatuses = ["missing", "partial", "covered", "needs-review"] as const;

describe("claim workflow fields", () => {
  it("stores the approved Stage 10 workflow state on every claim", () => {
    const claims = getAllClaimContent();

    expect(claims).toHaveLength(10);
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
    }
  });
});
```

- [ ] **Step 3: Run the focused test and verify RED**

Run:

```text
npx vitest run lib/content/claim-workflow.test.ts
```

Expected: FAIL because `checkedAt` and the approved status fields are absent.

### Task 2: Extend the schema and migrate all ten records

**Files:**
- Modify: `lib/content/claim-schema.ts`
- Modify: `content/claims/define-migrated-claim.ts`
- Modify: `content/claims/ai-as-source-pyramids.ts`
- Modify: `lib/content/claim-schema.test.ts`
- Test: `lib/content/claim-workflow.test.ts`

- [ ] **Step 1: Add stable workflow vocabularies and types**

Add to `claim-schema.ts`:

```ts
export const editorialWorkflowStatuses = ["draft", "reviewed", "published", "needs-review"] as const;
export type EditorialWorkflowStatus = (typeof editorialWorkflowStatuses)[number];

export const sourceWorkflowStatuses = ["missing", "partial", "verified", "needs-refresh"] as const;
export type SourceWorkflowStatus = (typeof sourceWorkflowStatuses)[number];

export const seoWorkflowStatuses = ["missing", "basic", "complete", "needs-review"] as const;
export type SeoWorkflowStatus = (typeof seoWorkflowStatuses)[number];

export const testWorkflowStatuses = ["missing", "partial", "covered", "needs-review"] as const;
export type TestWorkflowStatus = (typeof testWorkflowStatuses)[number];
```

Require these fields on `EditorialWorkflow`:

```ts
checkedAt: string;
editorialStatus: EditorialWorkflowStatus;
sourceStatus: SourceWorkflowStatus;
seoStatus: SeoWorkflowStatus;
testStatus: TestWorkflowStatus;
needsUpdate: boolean;
updateReason?: string;
```

- [ ] **Step 2: Add shared migrated-record values**

Add to the `workflow` returned by `defineMigratedClaimContent` without changing existing dates:

```ts
checkedAt: "2026-06-21",
editorialStatus: "published",
sourceStatus: "verified",
seoStatus: "basic",
testStatus: "covered",
needsUpdate: false,
```

- [ ] **Step 3: Add the same explicit values to AI/pyramids**

Add the six values to `aiAsSourcePyramidsClaimContent.workflow`. Do not change `createdAt`, `updatedAt`, `publishedAt`, `updated`, or any content field.

- [ ] **Step 4: Update the typed schema fixture and vocabulary assertion**

Add the six fields to the `workflow` fixture in `claim-schema.test.ts`, import the four exported arrays, and assert their exact order and values in the existing vocabulary test.

- [ ] **Step 5: Run focused schema and record tests and verify GREEN**

Run:

```text
npx vitest run lib/content/claim-workflow.test.ts lib/content/claim-schema.test.ts
```

Expected: both files pass and all ten records match the approved migration state.

### Task 3: Add runtime content-integrity validation with TDD

**Files:**
- Create: `lib/content/claim-workflow.ts`
- Modify: `lib/content/claim-workflow.test.ts`
- Modify: `lib/content-integrity.repository.test.ts`

- [ ] **Step 1: Add failing validator tests**

Extend `claim-workflow.test.ts` to import `findClaimWorkflowIntegrityIssues` and verify:

```ts
const [validClaim] = getAllClaimContent();

it("accepts every current claim workflow", () => {
  expect(getAllClaimContent().flatMap(findClaimWorkflowIntegrityIssues)).toEqual([]);
});

it("reports a missing workflow field", () => {
  const { checkedAt: _checkedAt, ...workflow } = validClaim.workflow;
  const invalidClaim = { ...validClaim, workflow } as typeof validClaim;
  expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toContain(
    `${validClaim.slug}: workflow.checkedAt must be an ISO YYYY-MM-DD date`,
  );
});

it("rejects invalid workflow vocabularies and missing published statuses", () => {
  const invalidClaim = {
    ...validClaim,
    workflow: {
      ...validClaim.workflow,
      editorialStatus: "invalid",
      sourceStatus: "missing",
      seoStatus: "missing",
      testStatus: "missing",
    },
  } as typeof validClaim;
  expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toEqual(
    expect.arrayContaining([
      `${validClaim.slug}: invalid workflow.editorialStatus`,
      `${validClaim.slug}: published claim cannot have workflow.sourceStatus missing`,
      `${validClaim.slug}: published claim cannot have workflow.seoStatus missing`,
      `${validClaim.slug}: published claim cannot have workflow.testStatus missing`,
    ]),
  );
});

it("requires checklist evidence for verified sources and a reason for updates", () => {
  const invalidClaim = {
    ...validClaim,
    workflow: {
      ...validClaim.workflow,
      sourceStatus: "verified",
      needsUpdate: true,
      updateReason: " ",
      checklist: { ...validClaim.workflow.checklist, primarySourcesChecked: false },
    },
  };
  expect(findClaimWorkflowIntegrityIssues(invalidClaim)).toEqual(
    expect.arrayContaining([
      `${validClaim.slug}: verified source status requires checked primary sources and links`,
      `${validClaim.slug}: workflow.updateReason is required when needsUpdate is true`,
    ]),
  );
});
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```text
npx vitest run lib/content/claim-workflow.test.ts
```

Expected: FAIL because `findClaimWorkflowIntegrityIssues` does not exist.

- [ ] **Step 3: Implement the minimal pure validator**

Create `claim-workflow.ts`. Import the four schema vocabularies and `ClaimContent`; validate membership, the strict date pattern plus a real parsed date, published/non-missing rules, verified/checklist agreement, and non-empty `updateReason` when required. Return only an array of deterministic issue strings; do not mutate the claim.

- [ ] **Step 4: Run the validator tests and verify GREEN**

Run:

```text
npx vitest run lib/content/claim-workflow.test.ts
```

Expected: all workflow tests pass.

- [ ] **Step 5: Connect the validator to `check:content`**

In `content-integrity.repository.test.ts`, load full records with `getAllClaimContent`, then append:

```ts
const workflowIssues = getAllClaimContent().flatMap(findClaimWorkflowIntegrityIssues);
expect([...issues, ...workflowIssues]).toEqual([]);
```

Keep the existing sitemap staleness and route/file checks intact.

- [ ] **Step 6: Prove `check:content` runs the workflow audit**

Run:

```text
npm run check:content
```

Expected: PASS with the current ten records. The focused missing-field test proves the invoked validator rejects incomplete runtime data.

### Task 4: Verify parity, commit, push, and monitor deployment

**Files:**
- Verify all modified files above.
- Do not modify `public/sitemap.xml`, metadata files, structured-data files, routes, layouts, or UI.

- [ ] **Step 1: Inspect scope and external-output diffs**

Run:

```text
git diff --check
git status --short
git diff -- public/sitemap.xml app/claims/[slug]/page.tsx lib/content/claim-structured-data.ts app/layout.tsx lib/site-schema.ts
```

Expected: no diff in the listed external-output files and no unrelated files staged.

- [ ] **Step 2: Verify the sitemap hash is unchanged**

Run:

```powershell
Get-FileHash -Algorithm SHA256 public\sitemap.xml
```

Expected: exactly the Task 1 baseline hash.

- [ ] **Step 3: Run the full acceptance suite**

Run each command independently:

```text
npm test
npm run check:content
npm run typecheck
npm run build
```

Expected: all commands exit 0 and the build reports 39/39 generated pages.

- [ ] **Step 4: Commit only Stage 10 files**

Stage the schema, two content files, workflow validator/tests, repository integrity test, schema test, and this plan. Exclude `.codex-remote-attachments/` and any generated or unrelated file.

Commit message:

```text
feat: add claim workflow status fields
```

- [ ] **Step 5: Push and verify remote systems**

Push `main`, then verify the exact SHA in GitHub Actions and Vercel Production. Report the final SHA, changed files, CI/deployment status, unchanged sitemap hash, unchanged external output surface, and 39-route build.
