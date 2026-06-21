# Claim structured-data centralization design

## Goal

Move the existing claim Article, FAQPage, and graph JSON-LD generation out of `app/claims/[slug]/page.tsx` into one typed, pure helper without changing any JSON-LD document, order, grouping, script location, metadata, route, or visible content.

## Current parity contract

The helper returns two render slots:

```ts
{
  beforeArticle: readonly JsonLdDocument[];
  insideArticle: readonly JsonLdDocument[];
}
```

The slots describe current DOM output, not an idealized interpretation of the schema field names:

- A standalone FAQPage remains before `<article>`, including FAQ entries configured with `placement: "page"`.
- Article remains inside `<article>`.
- XRP remains one graph document inside `<article>`, with Article followed by FAQPage in `@graph`.
- `mode: "none"` produces no claim-level documents.
- `mode: "configured"` preserves the current configured Article and optional FAQ behavior.
- No ClaimReview is generated.

Today `placement` affects structured-data details such as whether FAQPage receives `mainEntityOfPage`; it does not reliably describe DOM placement. Renaming or changing that semantic is future ADR/backlog work, not Stage 9.

## Architecture

Create `lib/content/claim-structured-data.ts` and move these pure responsibilities into it:

- locating typed Article and FAQ entries;
- building the existing Article object and author data;
- building the existing FAQPage questions, answers, and `mainEntityOfPage` behavior;
- preserving the existing special FAQ answer override;
- removing nested `@context` values when constructing a graph;
- returning the exact `beforeArticle` and `insideArticle` render slots.

The helper accepts a `ClaimContent` record and site URL. It consumes the existing typed `structuredData` configuration and does not introduce schema types or defaults. The dynamic page calls the helper and only maps each returned document to the existing `<script type="application/ld+json">` location.

`app/layout.tsx` and `lib/site-schema.ts` remain unchanged. Their existing test continues to guard the global WebSite, Organization, and Person graph.

## Sitemap hygiene

Add `tsx` as a development dependency and change only the generator command to:

```json
"generate:sitemap": "tsx scripts/generate-claim-sitemap.ts"
```

`prebuild` continues to call `generate:sitemap`. Remove the lifecycle-dependent repository-generation branch from `lib/content/claim-sitemap.test.ts`; ordinary sitemap tests remain under `npm test`, while `lib/content-integrity.repository.test.ts` continues to fail on stale committed XML before build. `public/sitemap.xml` must remain byte-for-byte unchanged.

## Testing

- Add focused helper tests that capture the current render-slot output before removing page-local generation.
- Assert the per-claim document count and types for all ten claims.
- Assert exact Article and FAQPage objects, FAQ answer overrides, `mainEntityOfPage`, and author behavior.
- Assert Chemtrails retains its standalone FAQPage before the article.
- Assert XRP retains one inside-article graph with Article then FAQPage.
- Assert AI/BCI retains empty slots.
- Assert no generated document or graph entry has `@type: "ClaimReview"`.
- Keep all existing legacy-page parity tests green; these guard external JSON-LD content and document grouping.
- Keep `lib/site-schema.test.ts` green and do not modify global schema files.
- Verify sitemap SHA-256 before and after the `tsx` generator, and retain the 39-route build.

## Expected changed surface

- Create `lib/content/claim-structured-data.ts` and its focused test.
- Modify `app/claims/[slug]/page.tsx` only to consume and render helper slots.
- Modify `lib/content/claim-sitemap.test.ts` only to remove generator execution from the test lifecycle.
- Modify `package.json` and `package-lock.json` for `tsx` and the generator command.
- Do not modify claim records, metadata helpers, site schema, sitemap XML, routes, UI, dashboard, or CMS code.
