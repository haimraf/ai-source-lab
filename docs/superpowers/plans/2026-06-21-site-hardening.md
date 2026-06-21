# Site Hardening Implementation Plan

> **For agentic workers:** This plan is complete and retained as implementation history. Completed steps use checkbox (`- [x]`) syntax.

## Status: completed on main

This plan is implementation history, not the active roadmap. Tasks 1-5 were completed on `main` by 21 June 2026. The final implementation includes:

- Next.js 16.2.9, global security headers, a CSP compatible with Vercel Analytics, deterministic installs, tests, typecheck and production builds.
- Repository content-integrity checks and CI coverage for claims, topics, sitemap and Open Graph routes.
- Mobile header and bottom navigation improvements, focused homepage actions and responsive verification.
- Prefilled GitHub proposal flow, copy and WhatsApp sharing.
- WebSite, Organization and Person JSON-LD, clearer editorial responsibility and updated operations documentation.

Follow-up work also completed the crawler, search and topic-cluster layer, trust metadata, mobile icon polish, evidence assets and spacing fixes. Do not reopen these tasks unless a regression or a specific new requirement is documented.

The active v0.3 sequence now lives in `docs/editorial-roadmap.md`: claim schema and admin-ready fields, content loader, local content files, dynamic claim routing, and migration of all content consumers to the loader. The architecture remains static-first.

Explicitly out of scope for v0.3 foundation work: CMS, login, editable dashboard, comments, AI drafting and open-ended AI search.

**Goal:** Harden the current MVP, reduce mobile friction, automate content consistency, and improve trust and sharing without adding a CMS, accounts, or a custom domain.

**Architecture:** Keep the site static-first. Add security policy in Next configuration, pure helpers for testable URL/content logic, and small reusable client components only where browser state is required. Preserve the existing claim-page structure and analytics policy.

**Tech Stack:** Next.js 16.2.9, React 19, TypeScript, Vitest, Vercel.

---

### Task 1: Dependency and Runtime Hardening — completed

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `app/layout.tsx`
- Create: `next.config.ts`
- Create: `lib/security-headers.test.ts`

- [x] Write a failing test that imports the Next configuration and asserts the global response includes `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- [x] Run `npm test -- lib/security-headers.test.ts` and confirm the missing configuration fails.
- [x] Add conservative global security headers compatible with Vercel Analytics and the site's external images/links.
- [x] Remove the network-time Google font import and use bundled local Heebo with system fallbacks.
- [x] Upgrade Next.js from 16.1.0 to the npm `latest` verified version 16.2.9.
- [x] Run the focused test, `npm audit --omit=dev`, typecheck, and production build.

### Task 2: Content Integrity and CI — completed

**Files:**
- Create: `lib/content-integrity.ts`
- Create: `lib/content-integrity.test.ts`
- Modify: `.github/workflows/ci.yml`
- Modify: `package.json`

- [x] Write failing tests for a helper that reports a claim missing from sitemap, a missing page file, and a missing Open Graph file.
- [x] Run the focused test and confirm failures are caused by the missing helper.
- [x] Implement the minimal integrity helper and a repository check that validates every claim and topic route.
- [x] Add `check:content` and run it in CI after replacing `npm install` with deterministic `npm ci`.
- [x] Run focused tests and the full test suite.

### Task 3: Mobile Navigation and Homepage Focus — completed

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/theme.css`

- [x] Remove the duplicated proposal action from the mobile header; keep it in the thumb-friendly bottom navigation.
- [x] Reduce the homepage hero to the two primary actions: search and example check.
- [x] Add narrow-screen CSS that keeps the brand and two quick actions fully visible at 360–390px.
- [x] Build and verify desktop plus 390px screenshots, DOM width, and navigation interactions.

### Task 4: Lower-Friction Proposals and Sharing — completed

**Files:**
- Create: `lib/share-links.ts`
- Create: `lib/share-links.test.ts`
- Create: `components/ClaimProposalForm.tsx`
- Modify: `app/suggest-claim/page.tsx`
- Modify: `components/CopyBox.tsx`
- Modify: `app/components.css`

- [x] Write failing tests for encoded GitHub issue and WhatsApp share URLs, including Hebrew and empty optional fields.
- [x] Run the focused tests and confirm the helper is missing.
- [x] Implement pure URL builders.
- [x] Add an accessible proposal form that opens a prefilled GitHub issue without collecting or transmitting data before the explicit submit action.
- [x] Add a WhatsApp share action beside the existing copy response action.
- [x] Verify form encoding, keyboard operation, mobile layout, and copy/share controls.

### Task 5: Trust Metadata and Final Verification — completed

**Files:**
- Create: `lib/site-schema.ts`
- Create: `lib/site-schema.test.ts`
- Modify: `app/layout.tsx`
- Modify: `app/about/page.tsx`
- Modify: `docs/OPERATIONS.md`
- Modify: `docs/TECHNICAL_STATUS.md`

- [x] Write a failing test for WebSite, Organization, and Person schema with canonical site and GitHub identity URLs.
- [x] Implement the schema helper and render its static JSON-LD in the root layout.
- [x] Expand the About page with explicit editor responsibility and limits without inventing credentials.
- [x] Update operations documentation for content integrity, security headers, dependency policy, and the proposal form.
- [x] Run `npm test`, `npm run typecheck`, `npm run check:content`, `npm run build`, and `npm audit --omit=dev`.
- [x] Inspect the final diff and verify no secrets, unrelated changes, or generated artifacts are included.
