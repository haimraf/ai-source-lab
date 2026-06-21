# Content-driven claim sitemap design

## Goal

Generate only the claim URL entries in `public/sitemap.xml` from the published claim content registry while preserving the existing public sitemap URL, non-claim entries, XML output, SEO metadata, JSON-LD, and the 39-route build count.

## Scope

- Keep `public/sitemap.xml`; do not add `app/sitemap.ts`.
- Treat `getPublishedClaimContent()` as the published-record source and each record's `claim.path` as the public URL source of truth.
- Generate the claim entry fields already present in content: `updated`, `changeFrequency`, and `priority`.
- Preserve every non-claim `<url>` entry byte-for-byte.
- Do not change claim metadata generation, structured data, routes, content, dashboard, or CMS code.

## Design

Add a small claim-sitemap module with two responsibilities:

1. `getClaimSitemapEntries()` maps published claim records to sitemap data using `claim.path`, never `claim.slug`.
2. A pure XML update function replaces the contiguous claim `<url>` block in the existing sitemap while retaining the existing sitemap origin and all surrounding static XML.

Add a build-time generator script that reads `public/sitemap.xml`, applies the pure update function, and writes the result only when it differs. Run it through a dedicated npm script before `next build`. Use a lightweight TypeScript script runner so the generator imports the same content registry and helper used by tests rather than duplicating claim data.

The current registry order matches the existing claim order in the XML, so the first generated output remains externally identical. Future published records will be reflected automatically during the build.

## Validation and failure behavior

- Unit tests require every published `claim.path` exactly once and reject `/claims/fifteen-minute-city-prison`.
- A repository test renders the claim block from current content and requires `public/sitemap.xml` to already match, so `check:content` catches a stale committed sitemap before deployment.
- The generator fails if it cannot identify the existing claim block; it must not silently rewrite static entries.
- Existing dynamic-route parity tests continue to guard canonical, title, description, OpenGraph, Twitter, visible content, and JSON-LD.
- The production build must still report 39 generated pages.

## Expected changed surface

- One claim-sitemap helper module and its tests.
- One generator script.
- `package.json` and lockfile for the generator command/runtime.
- The content-integrity repository test.
- `public/sitemap.xml` only if generation reveals drift; with the current records its emitted claim entries should remain unchanged.
