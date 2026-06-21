# Editorial Checklist Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the existing flat claim editorial checklist a fixed nine-field publication gate enforced by schema typing and repository content integrity.

**Architecture:** Extend `EditorialChecklist` with three explicit booleans and export one ordered tuple containing all nine keys. Populate the existing shared migrated-claim factory and the independent AI/pyramids record, then extend the existing workflow validator so every claim has boolean checklist values and published claims require every value to be true.

**Tech Stack:** TypeScript, Vitest, Next.js App Router, existing claim content registry and integrity gate.

---

## File map

- Modify `lib/content/claim-schema.ts`: three fields and the ordered `editorialChecklistFields` tuple.
- Modify `lib/content/claim-schema.test.ts`: typed fixture and exact tuple assertion.
- Modify `content/claims/define-migrated-claim.ts`: shared values for nine records.
- Modify `content/claims/ai-as-source-pyramids.ts`: explicit values for the independent record.
- Modify `lib/content/claim-workflow.test.ts`: all-record contract and validator edge cases.
- Modify `lib/content/claim-workflow.ts`: safe fixed-checklist integrity rules.

### Task 1: Lock the new all-record checklist contract

**Files:**
- Modify: `lib/content/claim-workflow.test.ts`

- [ ] **Step 1: Record the sitemap baseline**

Run:

```powershell
Get-FileHash -Algorithm SHA256 public\sitemap.xml
```

Expected: capture the current hash for final comparison.

- [ ] **Step 2: Add the failing record assertions**

In the existing test `stores the approved Stage 10 workflow state on every claim`, add:

```ts
expect(claim.workflow.checklist).toMatchObject({
  conclusionWordingChecked: true,
  shareCopyReviewed: true,
  mobileReviewed: true,
});
```

This test already loads all ten full records through `claimContentRecords`.

- [ ] **Step 3: Run the focused test and verify RED**

Run:

```text
npx vitest run lib/content/claim-workflow.test.ts
```

Expected: FAIL because the current checklist does not contain the three new fields.

### Task 2: Extend the typed checklist and migrate all records

**Files:**
- Modify: `lib/content/claim-schema.ts`
- Modify: `lib/content/claim-schema.test.ts`
- Modify: `content/claims/define-migrated-claim.ts`
- Modify: `content/claims/ai-as-source-pyramids.ts`
- Test: `lib/content/claim-workflow.test.ts`

- [ ] **Step 1: Extend the explicit interface**

Keep the checklist flat and add the fields in semantic order:

```ts
export interface EditorialChecklist {
  claimScopeChecked: boolean;
  primarySourcesChecked: boolean;
  sourceLinksVerified: boolean;
  verdictSupported: boolean;
  conclusionWordingChecked: boolean;
  copyReviewed: boolean;
  seoReviewed: boolean;
  shareCopyReviewed: boolean;
  mobileReviewed: boolean;
}
```

- [ ] **Step 2: Export the central ordered tuple**

Immediately after the interface, add:

```ts
export const editorialChecklistFields = [
  "claimScopeChecked",
  "primarySourcesChecked",
  "sourceLinksVerified",
  "verdictSupported",
  "conclusionWordingChecked",
  "copyReviewed",
  "seoReviewed",
  "shareCopyReviewed",
  "mobileReviewed",
] as const satisfies readonly (keyof EditorialChecklist)[];
```

- [ ] **Step 3: Add shared migration values**

In `defineMigratedClaimContent`, add to `workflow.checklist` without changing dates or any other field:

```ts
conclusionWordingChecked: true,
shareCopyReviewed: true,
mobileReviewed: true,
```

- [ ] **Step 4: Add explicit AI/pyramids values**

Add the same three `true` values to `aiAsSourcePyramidsClaimContent.workflow.checklist`.

- [ ] **Step 5: Update the typed schema fixture and tuple test**

Add the three fields to the `checklist` fixture in `claim-schema.test.ts`, import `editorialChecklistFields`, and assert:

```ts
expect(editorialChecklistFields).toEqual([
  "claimScopeChecked",
  "primarySourcesChecked",
  "sourceLinksVerified",
  "verdictSupported",
  "conclusionWordingChecked",
  "copyReviewed",
  "seoReviewed",
  "shareCopyReviewed",
  "mobileReviewed",
]);
```

- [ ] **Step 6: Run focused tests and verify GREEN**

Run:

```text
npx vitest run lib/content/claim-workflow.test.ts lib/content/claim-schema.test.ts
```

Expected: both files pass and all ten records contain the new checklist values.

### Task 3: Enforce checklist integrity with a second TDD cycle

**Files:**
- Modify: `lib/content/claim-workflow.test.ts`
- Modify: `lib/content/claim-workflow.ts`

- [ ] **Step 1: Add failing validator tests**

Add tests based on the first real claim record.

Missing checklist:

```ts
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
```

Missing/non-boolean field:

```ts
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
```

False published field and allowed draft field:

```ts
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
```

- [ ] **Step 2: Run the focused test and verify RED**

Run:

```text
npx vitest run lib/content/claim-workflow.test.ts
```

Expected: FAIL because the current validator dereferences a missing checklist and does not enforce all fixed fields.

- [ ] **Step 3: Extend the existing validator minimally**

Import `editorialChecklistFields` and `EditorialChecklist` from `claim-schema`. Treat the runtime checklist as `Partial<EditorialChecklist> | undefined`.

If absent, add only:

```text
<slug>: workflow.checklist is required
```

If present, iterate `editorialChecklistFields` in tuple order:

- non-boolean values add `<slug>: workflow.checklist.<field> must be a boolean`;
- for published claims, a boolean `false` adds `<slug>: published claim requires workflow.checklist.<field>`.

Keep the existing verified-source rule, but run it only when the checklist exists so the validator never throws.

- [ ] **Step 4: Run focused tests and verify GREEN**

Run:

```text
npx vitest run lib/content/claim-workflow.test.ts
```

Expected: all workflow tests pass, including missing-checklist safety and draft behavior.

- [ ] **Step 5: Verify the repository gate**

Run:

```text
npm run check:content
```

Expected: PASS. `lib/content-integrity.repository.test.ts` already calls `findClaimWorkflowIntegrityIssues` for every full claim record, so no second validation path is added.

### Task 4: Verify parity, commit, push, and monitor deployment

**Files:**
- Verify only the six implementation files listed in the file map plus this plan/spec commit history.
- Do not modify sitemap, metadata, structured-data, route, layout, or UI files.

- [ ] **Step 1: Inspect scope and protected files**

Run:

```text
git diff --check
git status --short
git diff -- public/sitemap.xml app/claims/[slug]/page.tsx lib/content/claim-structured-data.ts app/layout.tsx lib/site-schema.ts
```

Expected: no diff in protected output files and no unrelated staged files.

- [ ] **Step 2: Verify the sitemap hash is unchanged**

Run:

```powershell
Get-FileHash -Algorithm SHA256 public\sitemap.xml
```

Expected: exactly the Task 1 baseline hash.

- [ ] **Step 3: Run all acceptance gates**

Run independently:

```text
npm test
npm run check:content
npm run typecheck
npm run build
```

Expected: all commands exit 0 and the build reports 39/39 generated pages.

- [ ] **Step 4: Commit only Stage 11 files**

Stage the six implementation files and this committed plan history. Exclude `.codex-remote-attachments/` and unrelated files.

Commit message:

```text
feat: enforce editorial publication checklist
```

- [ ] **Step 5: Push and verify remote systems**

Push `main`, then verify the exact SHA in GitHub Actions and Vercel Production. Report changed files, the three added checklist fields, all-record migration, `check:content` behavior, unchanged sitemap hash/output surface, 39-route build, and remote statuses.
