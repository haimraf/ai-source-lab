# Claim dynamic route parity audit

Date: 2026-06-21

## Decision

The claim route must not be cut over yet. All ten static claim pages and all ten typed content records exist, but the records do not yet preserve enough presentation and metadata detail to replace the static pages without visible or semantic changes.

The static pages remain the source of truth for rendering. No `app/claims/[slug]/page.tsx` route should be shipped until the gaps below are closed and parity is verified.

## Audit method and status terms

This audit compares:

- `app/claims/*/page.tsx` and the four claim-specific `layout.tsx` files.
- The matching records under `content/claims/`.
- The fields currently available in `ClaimContent`.

Status terms:

- **Ready**: the record contains the required data and no claim-specific rendering gap was found.
- **Partial**: core data exists, but metadata, ordering, copy, or presentation is not fully modeled.
- **Not ready**: activating the generic renderer would remove or materially change existing output.

## Cross-cutting findings

1. **Nine records flatten the body.** Every record except `ai-as-source-pyramids` uses `defineMigratedClaimContent`, which creates one `overview` section and derives `findings` from summary fields. The static pages contain many more ordered sections and presentation types.
2. **The body needs an ordered block model.** The current schema cannot express verdict grids, evidence-number lists, source-level rows, comparison lists, logic chains, method notes, bonus boxes, evidence galleries, or copy-to-share blocks while preserving their order.
3. **Lead copy is distinct from SEO description.** Several pages pass a dedicated `lead` to `ClaimHeader`, while others render a manual lead paragraph. `description` is not always a byte-for-byte replacement.
4. **Metadata is only partially modeled.** `seo.title`, `seo.description`, `path`, `ogAlt`, and workflow dates exist, but the current record does not preserve the exact per-page Open Graph, Twitter, canonical, image, author, publication-date, and modification-date output.
5. **Structured data varies by claim.** Most pages emit Article JSON-LD; some also emit FAQPage JSON-LD, sometimes from a claim-specific layout. `ai-bci-synthetic-soul` currently emits no page-level JSON-LD. A single unconditional generator would change public output.
6. **FAQ and source data are mostly present.** Source counts match between every static page and its record. FAQ counts also match; `agenda-2030-seven-steps` intentionally has zero in both. The future renderer must still preserve order, notes, external-link behavior, `<details>` presentation, and claim-specific FAQ JSON-LD behavior.
7. **Special media is not modeled.** Three pages use `EvidenceGallery`: two SVG exhibits for the 15-minute-city claim, two WebP posters for Agenda 2030, and two SVG exhibits for the WHO claim. No exhibit/gallery field exists in `ClaimContent`.
8. **The share block is not modeled.** Every static page uses `CopyBox` with claim-specific `copyText`; no equivalent field exists in `ClaimContent`.
9. **Route identity has one important exception.** The record slug `fifteen-minute-city-prison` maps to `/claims/15-minute-city-prison`. A dynamic route must derive the public segment from `path` or add an explicit route-segment field; it must not assume `/claims/${slug}`.
10. **Shared claim chrome is already safe.** `app/claims/layout.tsx` supplies `ClaimBreadcrumbs` and `EditorialByline`. A future `[slug]` route nested under this layout would inherit them. The cutover must keep that layout and verify that breadcrumb lookup continues to use the record path.

## Fields or renderer capabilities required before cutover

- An ordered discriminated body-block type, at minimum covering: paragraph section, answer box, verdict grid, evidence list, source levels, comparison list, logic chain, method/bonus note, FAQ, sources, gallery, and copy block.
- A dedicated lead field when the lead is not identical to `description`.
- A reusable `copyText` or structured share-copy field.
- An exhibit/gallery field with source path, alt text, caption, label, and optional credit.
- Metadata generation that preserves canonical URL, exact title/description, Open Graph, Twitter, image URL, and article dates.
- Structured-data configuration that can preserve Article-only, Article-plus-FAQPage, FAQPage-from-layout, and intentionally absent states.
- Route resolution based on the existing `path`, including the 15-minute-city slug/path mismatch.
- Parity tests for heading order, FAQ/source order, structured-data types, metadata fields, special components, and known public paths.

## Per-claim checklist

### `fifteen-minute-city-prison`

- **Public path:** `/claims/15-minute-city-prison` — differs from the content slug.
- **Static page exists:** Yes.
- **Content record exists:** Yes, `content/claims/15-minute-city-prison.ts`.
- **Metadata parity:** Partial. The page includes canonical metadata, full Open Graph and Twitter metadata with a route image, plus Article JSON-LD.
- **Body/content parity:** Not ready. The record contains one overview section; the page has 12 ordered H2 blocks.
- **FAQ/sources:** Four FAQ items and five sources exist in both page and record.
- **Special markup/components:** `ClaimHeader` with custom lead/verdict/date labels; three source-level rows; verdict grid; comparison blocks; logic chain; method and bonus notes; `CopyBox`; `EvidenceGallery`.
- **Images/visuals:** `/evidence/15-minute-city-layers.svg` and `/evidence/15-minute-city-bonus.svg`.
- **Before cutover:** Model the public route segment, dedicated lead, gallery exhibits, source-level block, bonus/method blocks, logic chain, copy text, exact metadata, and Article JSON-LD.

### `agenda-2030-seven-steps`

- **Public path:** `/claims/agenda-2030-seven-steps`.
- **Static page exists:** Yes.
- **Content record exists:** Yes.
- **Metadata parity:** Partial. Basic page metadata is combined with Open Graph and Twitter metadata from the claim-specific layout; the page emits Article JSON-LD.
- **Body/content parity:** Not ready. The record has one overview section; the page includes a claim table, 60-second summary, four numbered evidence items, poster gallery, comparison block, logic chain, method note, and share copy.
- **FAQ/sources:** No FAQ in either representation; two sources exist in both.
- **Special markup/components:** Manual header, verdict grid, evidence-number list, `EvidenceGallery`, `CopyBox`, and a claim-specific metadata layout.
- **Images/visuals:** `/evidence/agenda-2030-poster-1.webp` and `/evidence/agenda-2030-poster-2.webp`.
- **Before cutover:** Model the gallery, numbered evidence blocks, ordered comparison/logic/method blocks, copy text, combined page/layout metadata, and Article JSON-LD.

### `ai-as-source-pyramids`

- **Public path:** `/claims/ai-as-source-pyramids`.
- **Static page exists:** Yes.
- **Content record exists:** Yes; this is the only record with multiple hand-authored sections.
- **Metadata parity:** Partial. The page has canonical title/description and Article JSON-LD; its claim-specific layout adds FAQPage JSON-LD.
- **Body/content parity:** Partial and closest to ready. The record preserves the main section text, FAQ, and sources, but not the exact lead, verdict-grid arrangement, evidence numbering, comparison/logic presentation, method note, or ordered share block.
- **FAQ/sources:** Four FAQ items and five sources exist in both.
- **Special markup/components:** Manual header, evidence-number list, verdict grid, comparison list, logic chain, `CopyBox`, method note, and FAQPage JSON-LD in a layout.
- **Images/visuals:** None found in the page body.
- **Before cutover:** Add ordered block semantics, dedicated lead and share copy, preserve the Article and FAQPage JSON-LD split, and verify exact heading and paragraph order.

### `ai-bci-synthetic-soul`

- **Public path:** `/claims/ai-bci-synthetic-soul`.
- **Static page exists:** Yes.
- **Content record exists:** Yes.
- **Metadata parity:** Partial. The page includes canonical, Open Graph, Twitter, and route-image metadata. It currently emits no page-level JSON-LD; that absence must not change accidentally.
- **Body/content parity:** Not ready. The record has one overview section; the page contains four source-level rows, a logic chain, two comparison groups, FAQ, sources, method note, and claim-specific caveat copy.
- **FAQ/sources:** Four FAQ items and six sources exist in both.
- **Special markup/components:** `ClaimHeader` with custom lead/verdict/date labels, source-level rows, logic chain, comparison lists, `CopyBox`, and method note.
- **Images/visuals:** None found in the page body.
- **Before cutover:** Model the dedicated lead and labels, source-level and comparison blocks, caveat/method text, copy text, exact social metadata, and the intentional structured-data state.

### `chemtrails-aluminum`

- **Public path:** `/claims/chemtrails-aluminum`.
- **Static page exists:** Yes.
- **Content record exists:** Yes.
- **Metadata parity:** Partial. Basic page metadata and Article JSON-LD are supplemented by Open Graph, Twitter, and FAQPage JSON-LD in the claim-specific layout.
- **Body/content parity:** Not ready. The record has one overview section; the page includes a claim table, 60-second summary, four numbered evidence items, comparison blocks, logic chain, FAQ, share copy, and method note.
- **FAQ/sources:** Four FAQ items and four sources exist in both.
- **Special markup/components:** Manual header, verdict grid, evidence-number list, comparison list, logic chain, `CopyBox`, and claim-specific metadata/FAQ layout.
- **Images/visuals:** None found in the page body.
- **Before cutover:** Model all ordered body blocks and copy text, then preserve combined page/layout metadata plus Article and FAQPage JSON-LD.

### `cloud-seeding-chemtrails`

- **Public path:** `/claims/cloud-seeding-chemtrails`.
- **Static page exists:** Yes.
- **Content record exists:** Yes.
- **Metadata parity:** Partial. The page contains canonical metadata and a JSON-LD graph with Article and FAQPage entries.
- **Body/content parity:** Not ready. The record has one overview section; the page contains a distinction table, three numbered evidence items, logic chain, silver-iodide section, FAQ, share copy, sources, and method note.
- **FAQ/sources:** Three FAQ items and four sources exist in both.
- **Special markup/components:** Manual header, verdict grid, comparison list, evidence-number list, logic chain, `CopyBox`, and combined Article/FAQPage JSON-LD.
- **Images/visuals:** None found in the page body.
- **Before cutover:** Preserve block order and labels, model share copy and method text, and reproduce the combined structured-data graph exactly.

### `gateway-process-out-of-body`

- **Public path:** `/claims/gateway-process-out-of-body`.
- **Static page exists:** Yes.
- **Content record exists:** Yes.
- **Metadata parity:** Partial. The page includes canonical metadata and Article JSON-LD.
- **Body/content parity:** Not ready. The record has one overview section; the page separately covers Gateway, Hemi-Sync, the pineal gland, a logic chain, FAQ, share copy, sources, and method note.
- **FAQ/sources:** Four FAQ items and five sources exist in both.
- **Special markup/components:** Manual header, verdict grid, comparison lists, logic chain, `CopyBox`, and method note.
- **Images/visuals:** None found in the page body.
- **Before cutover:** Model the separate explanatory sections and their order, verdict/comparison/logic blocks, share copy, exact metadata, and Article JSON-LD.

### `project-blue-beam-nasa`

- **Public path:** `/claims/project-blue-beam-nasa`.
- **Static page exists:** Yes.
- **Content record exists:** Yes.
- **Metadata parity:** Partial. The page includes canonical metadata and Article JSON-LD.
- **Body/content parity:** Not ready. The record has one overview section; the page separately presents the narrative origin, investigation scope, Gateway distinction, Blue Book distinction, logic chain, FAQ, share copy, sources, and method note.
- **FAQ/sources:** Four FAQ items and six sources exist in both.
- **Special markup/components:** `ClaimHeader` with custom lead/verdict/date labels, verdict box, comparison blocks, logic chain, `CopyBox`, and method note.
- **Images/visuals:** None found in the page body.
- **Before cutover:** Model dedicated lead/header labels, all named distinction sections, block order, copy text, exact metadata, and Article JSON-LD.

### `who-pandemic-agreement-sovereignty`

- **Public path:** `/claims/who-pandemic-agreement-sovereignty`.
- **Static page exists:** Yes.
- **Content record exists:** Yes.
- **Metadata parity:** Partial. The page includes canonical, Open Graph, Twitter, route-image metadata, and Article JSON-LD.
- **Body/content parity:** Not ready. The record has one overview section; the page has 12 ordered H2 blocks including source levels, a bonus fact, criticism boundaries, logic chain, FAQ, share copy, sources, and method note.
- **FAQ/sources:** Four FAQ items and five sources exist in both.
- **Special markup/components:** `ClaimHeader` with custom lead/verdict/date labels, three source-level rows, verdict grid, comparison/logic/method/bonus blocks, `CopyBox`, and `EvidenceGallery`.
- **Images/visuals:** `/evidence/who-pandemic-agreement-scope.svg` and `/evidence/who-pandemic-agreement-timeline.svg`.
- **Before cutover:** Model the gallery, source-level and bonus blocks, dedicated lead/labels, copy text, exact social metadata, and Article JSON-LD.

### `xrp-global-currency`

- **Public path:** `/claims/xrp-global-currency`.
- **Static page exists:** Yes.
- **Content record exists:** Yes.
- **Metadata parity:** Partial. Basic page metadata is combined with Open Graph and Twitter metadata from the claim-specific layout; the page emits Article and FAQPage JSON-LD.
- **Body/content parity:** Not ready. The record has one overview section; the page includes a claim table, 60-second summary, four numbered evidence items, an ARIA-labelled logic chain, determination section, FAQ, share copy, sources, and method note.
- **FAQ/sources:** Three FAQ items and five sources exist in both.
- **Special markup/components:** Manual header, verdict grid, evidence-number list, comparison list, logic chain with an accessibility label, `CopyBox`, and claim-specific metadata layout.
- **Images/visuals:** None found in the page body.
- **Before cutover:** Model block order and accessibility attributes, share copy, combined page/layout metadata, and the Article-plus-FAQPage structured-data output.

## Recommended cutover sequence

1. Extend the schema with ordered body blocks, lead/share/gallery fields, and structured metadata configuration without changing any page.
2. Bring `ai-as-source-pyramids` to exact parity first because its record already contains the richest body representation.
3. Add automated parity assertions for metadata, structured-data types, heading order, FAQ/source order, and the existing path.
4. Cut over one pilot URL only after HTML and desktop/mobile screenshots match closely.
5. Migrate the remaining pages in small groups by template family: manual evidence pages, `ClaimHeader` pages, and gallery pages.
6. Remove a static `page.tsx` only in the same PR that proves its dynamic replacement owns the URL and preserves metadata/content parity.
