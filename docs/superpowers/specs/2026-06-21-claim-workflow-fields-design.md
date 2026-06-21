# Claim workflow fields design

## Goal

Extend the existing `EditorialWorkflow` data model with required, typed editorial status fields for every claim. This is Stage 10 data-model and content-integrity groundwork only: the fields are stored and validated but are not rendered or consumed by metadata, structured data, sitemap generation, or routing.

`checkedAt` records the date of this workflow review and migration. It is not a content modification date and must not change `updated`, `updatedAt`, sitemap values, metadata, or JSON-LD dates.

## Schema

Add exported readonly value lists and corresponding union types to `lib/content/claim-schema.ts`, then require these fields on `EditorialWorkflow`:

```ts
checkedAt: string;
editorialStatus: "draft" | "reviewed" | "published" | "needs-review";
sourceStatus: "missing" | "partial" | "verified" | "needs-refresh";
seoStatus: "missing" | "basic" | "complete" | "needs-review";
testStatus: "missing" | "partial" | "covered" | "needs-review";
needsUpdate: boolean;
updateReason?: string;
```

The fields remain flat within the existing `workflow` object. Existing fields such as `needsReview`, `checklist`, credits, reviews, and publication dates remain unchanged. No nested `workflow.statuses`, derived-only status model, internal notes, or new structured-data semantics are introduced.

## Existing-claim migration

All ten published claims receive:

- `checkedAt: "2026-06-21"`;
- `editorialStatus: "published"`;
- `seoStatus: "basic"`;
- `testStatus: "covered"`;
- `needsUpdate: false`.

`sourceStatus` follows the approved conservative rule:

- use `"verified"` only when both `primarySourcesChecked` and `sourceLinksVerified` are true;
- otherwise use `"partial"` for an existing claim that has sources;
- do not use `"missing"` unless the claim actually has no sources.

All current records have both required checklist flags, so their migration value is `"verified"`. This is a consequence of the recorded checklist, not a blanket assumption based on publication status.

Nine migrated records receive the fields through `defineMigratedClaimContent`. The independently defined `ai-as-source-pyramids` record receives the same fields explicitly. This keeps the stored runtime records complete while avoiding repeated migration boilerplate.

## Content integrity and typing

The new `EditorialWorkflow` fields are required, so TypeScript rejects new claim records that omit them. Repository integrity checks also validate the runtime records so `npm run check:content` catches missing or invalid workflow state even if a record bypasses normal typing.

For every claim, integrity checks require:

- all workflow fields to be present and use allowed values;
- `checkedAt` to be a valid ISO `YYYY-MM-DD` date;
- a published claim not to use `sourceStatus`, `seoStatus`, or `testStatus` value `"missing"`;
- `sourceStatus: "verified"` to agree with both approved checklist flags;
- `updateReason` to be present and non-empty when `needsUpdate` is true.

The checks run against all `claimRecords` from `lib/content-integrity.repository.test.ts`, which is the existing `check:content` entry point.

## Test-first implementation

Before modifying production schema or records, add failing tests that express the required workflow contract across all ten `claimRecords`. Confirm the tests fail because the fields are absent. Then add the schema types and migration values, and rerun the focused tests to green.

Existing parity suites remain unchanged and must stay green. Final verification runs:

```text
npm test
npm run check:content
npm run typecheck
npm run build
```

The build must remain 39/39. Record the SHA-256 of `public/sitemap.xml` before implementation and verify the same value afterward.

## Scope boundaries

Stage 10 does not add or change:

- UI, status pages, Dashboard, CMS, or database behavior;
- routes or visible content;
- title, description, canonical, OpenGraph, Twitter, or other metadata;
- Article, FAQPage, ClaimReview, global schema, JSON-LD output, placement, or render slots;
- sitemap XML or sitemap generation;
- `updated`, publication dates, or content revision semantics.

The future separation of structured-data `renderSlot`, `schemaBehavior`, and `contentType` remains ADR/backlog work.

## Expected changed surface

- `lib/content/claim-schema.ts`
- `content/claims/define-migrated-claim.ts`
- `content/claims/ai-as-source-pyramids.ts`
- focused workflow schema/integrity tests
- `lib/content-integrity.repository.test.ts` if needed to connect the workflow audit to `check:content`

`public/sitemap.xml`, metadata code, structured-data code, routes, layouts, and UI files remain unchanged.
