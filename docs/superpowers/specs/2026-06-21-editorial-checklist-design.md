# Editorial checklist design

## Goal

Make `workflow.checklist` a fixed, typed publication checklist for every claim. Stage 11 changes only the claim schema, stored workflow data, and content-integrity validation. It does not render the checklist or change any public output.

## Fixed checklist

Keep the existing flat `EditorialChecklist` interface and its six current fields:

- `claimScopeChecked`: the checked claim is scoped precisely;
- `primarySourcesChecked`: primary sources were reviewed;
- `sourceLinksVerified`: source links were verified;
- `verdictSupported`: the evidence supports the verdict;
- `copyReviewed`: the general editorial copy was reviewed;
- `seoReviewed`: the existing SEO output was reviewed.

Add only the three missing checks:

```ts
conclusionWordingChecked: boolean;
shareCopyReviewed: boolean;
mobileReviewed: boolean;
```

`conclusionWordingChecked` is separate from `verdictSupported` and `copyReviewed`: it records that the conclusion itself is cautious, does not overstate certainty, and stays within what the sources support. `shareCopyReviewed` names the existing `shareCopy` output precisely. `mobileReviewed` records mobile QA without changing mobile UI.

Export a central `editorialChecklistFields` readonly tuple containing all nine required keys in the interface order. The explicit interface remains the readable schema, while the tuple is the runtime source used by integrity validation. No nested checklist or workflow model is introduced.

## Migration

All ten existing published claims receive `true` for the three new fields. This records the already-completed migration, parity, testing, sharing-copy, and responsive-page review; it does not modify content.

- Nine migrated records receive the values through `defineMigratedClaimContent`.
- `ai-as-source-pyramids` receives the values explicitly.

Existing workflow and content dates remain unchanged, including `updated`, `updatedAt`, `publishedAt`, and `checkedAt`.

## Content integrity

Extend the existing `findClaimWorkflowIntegrityIssues` validator rather than creating another validation path.

For every claim:

- `workflow.checklist` must exist;
- every key in `editorialChecklistFields` must exist;
- every required checklist value must be a boolean.

For a published claim, every required checklist value must be `true`. Draft and review-stage claims may retain `false` values while work is incomplete, but they must still provide all nine boolean fields.

The validator must return deterministic issue messages when the checklist is absent or invalid and must not throw. The existing repository integrity test already invokes this validator for all full claim records, so `npm run check:content` remains the single repository gate.

## Test-first implementation

1. Add a failing all-record test requiring the three new fields on all ten claims.
2. Add the schema fields, the nine-key tuple, shared factory values, and explicit AI/pyramids values; verify the record test becomes green.
3. Add failing validator tests for a missing checklist, a missing/non-boolean field, and a `false` field on a published claim.
4. Extend `findClaimWorkflowIntegrityIssues` minimally and verify the focused tests and `check:content` become green.
5. Run the complete test, content-integrity, typecheck, and build gates.

Record the SHA-256 of `public/sitemap.xml` before implementation and verify the same hash afterward. The build must remain 39/39.

## Scope boundaries

Stage 11 does not add or change:

- UI, mobile UI, a status page, Dashboard, CMS, or database behavior;
- routes or visible content;
- title, description, canonical, OpenGraph, Twitter, or other metadata;
- Article, FAQPage, ClaimReview, global schema, JSON-LD, placement semantics, or render slots;
- sitemap XML or sitemap generation;
- workflow dates, publication dates, or content revision semantics.

Stage 12 remains separate and is not included.

## Expected changed surface

- `lib/content/claim-schema.ts`
- `lib/content/claim-schema.test.ts`
- `content/claims/define-migrated-claim.ts`
- `content/claims/ai-as-source-pyramids.ts`
- `lib/content/claim-workflow.ts`
- `lib/content/claim-workflow.test.ts`

The existing `lib/content-integrity.repository.test.ts` should not need a new validation path because it already calls the workflow validator.
