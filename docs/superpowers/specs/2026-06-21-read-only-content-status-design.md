# Read-only content status page design

## Goal

Add a statically generated, read-only content status report at `/internal/content-status`. The report is computed from the existing full claim content records during build and shows the current editorial state of all ten claims without manual synchronization.

This route is public by URL. The `/internal` prefix is an organizational label, not access control or a security boundary. The page contains no secrets, internal notes, credentials, local paths, deployment details, editing controls, or information that would be inappropriate for an accidental visitor.

Adding the page is the only intended route change and raises the build count from 39/39 to 40/40.

## Status helper

Create `lib/content/claim-content-status.ts` with two pure functions:

```ts
getClaimContentStatus(claim: ClaimContent): ClaimContentStatus
getAllClaimsContentStatus(claims: readonly ClaimContent[]): readonly ClaimContentStatus[]
```

The plural function receives records explicitly; it does not read files, fetch data, mutate claims, or depend on request state. The page passes the existing `claimContentRecords` registry, so the next build reflects any record update automatically.

Each summary exposes only:

- `slug`, `path`, and `title`;
- `editorialStatus`, `sourceStatus`, `seoStatus`, and `testStatus`;
- `needsUpdate` and `checkedAt`;
- `sourceCount` and `hasSources`;
- `hasShareCopy`;
- checklist completed count, total count, and incomplete field names;
- missing effective basic metadata fields;
- `needsRefresh`;
- mobile review status.

The helper does not expose `updateReason`, editorial review notes, source notes, credentials, environment data, filesystem data, or deployment data.

### Derived rules

Checklist completion uses the central `editorialChecklistFields` tuple. A checklist item is complete only when its value is exactly `true`; any missing, false, or non-boolean runtime value appears in `incompleteChecklistFields`. The total is the tuple length, currently nine. Mobile status is true only when `workflow.checklist.mobileReviewed` is exactly `true`.

Effective basic metadata consists of:

- title: `metadataOverrides.title`, then `seo.title`, then `claim.title`;
- description: `metadataOverrides.description`, then `seo.description`, then `claim.description`;
- canonical: `metadataOverrides.canonical`, then `claim.path`.

A field is missing only when the effective value is absent or blank. The absence of an override is not itself a failure. OpenGraph and Twitter are not reinterpreted or upgraded in Stage 12.

`hasSources` is true when `sources.length > 0`; `sourceCount` is the exact length. `hasShareCopy` requires a non-blank `shareCopy`. `needsRefresh` is true only when `workflow.needsUpdate` is true or `workflow.sourceStatus` is `"needs-refresh"`.

## Static page

Create `app/internal/content-status/page.tsx` as a server component with no dynamic APIs, client directive, state, event handlers, forms, filters, buttons, or edit links. It maps the helper output into one semantic table containing:

- claim title and slug;
- workflow statuses;
- checklist completion and incomplete fields;
- effective metadata completeness;
- source count/presence;
- share-copy presence;
- mobile review;
- checked date;
- update/refresh state.

The page may show aggregate counts derived from the same summaries, but it must not add charts, filtering, actions, or dashboard behavior. A page-scoped CSS module provides readable table layout and horizontal overflow on narrow screens without modifying global or claim-page styles.

Claim titles, slugs, and paths are rendered as report text, not as navigation or action links.

The page inherits the existing root site chrome and global site schema. It does not add page-specific JSON-LD.

## Indexing and discovery

Export page metadata with:

```ts
robots: {
  index: false,
  follow: false,
}
```

The page has a descriptive internal-report title and description, but does not modify root or claim metadata. No navigation, footer, topic, claim, or other public page links to it.

`public/sitemap.xml` and its generator remain unchanged. Tests assert that `/internal/content-status` is absent, and its SHA-256 must remain byte-for-byte identical before and after implementation.

## Testing

Add focused helper tests that:

- summarize all ten real records;
- verify their workflow/checklist/source/share/mobile fields;
- use a synthetic degraded claim to verify missing metadata, sources, share copy, incomplete checklist, and refresh rules;
- verify input records are not mutated.

Add a page test that renders the server component to static markup and verifies:

- all ten titles and slugs are present;
- the approved columns and status values are rendered;
- no `form`, `input`, `select`, `button`, or client controls are present;
- exported robots metadata is `noindex, nofollow`;
- the sitemap does not contain the route.

Run the existing claim metadata and JSON-LD parity suite unchanged. Final verification runs `npm test`, `npm run check:content`, `npm run typecheck`, and `npm run build`; the build must report 40/40.

## Scope boundaries

Stage 12 does not add or change:

- Dashboard, CMS, authentication, database, editing, forms, filters, or client interactivity;
- claim routes, claim visible content, claim mobile UI, navigation, or footer links;
- claim metadata, OpenGraph, Twitter, share output, JSON-LD, placement semantics, or render slots;
- sitemap XML or sitemap generation;
- workflow data or claim content records.

Sensitive information or editing capabilities require a future authenticated Dashboard/CMS and are outside this stage.

## Expected changed surface

- `lib/content/claim-content-status.ts`
- `lib/content/claim-content-status.test.ts`
- `app/internal/content-status/page.tsx`
- `app/internal/content-status/page.module.css`
- `app/internal/content-status/page.test.tsx`
- an existing sitemap or route-hygiene test only if needed to pin route exclusion

No existing production page, content record, metadata helper, structured-data helper, sitemap generator, navigation component, or global stylesheet should change.
