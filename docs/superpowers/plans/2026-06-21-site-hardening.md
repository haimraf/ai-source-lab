# Site Hardening Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Harden the current MVP, reduce mobile friction, automate content consistency, and improve trust and sharing without adding a CMS, accounts, or a custom domain.

**Architecture:** Keep the site static-first. Add security policy in Next configuration, pure helpers for testable URL/content logic, and small reusable client components only where browser state is required. Preserve the existing claim-page structure and analytics policy.

**Tech Stack:** Next.js 16.2.9, React 19, TypeScript, Vitest, Vercel.

---

### Task 1: Dependency and Runtime Hardening

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `app/layout.tsx`
- Create: `next.config.ts`
- Create: `lib/security-headers.test.ts`

- [ ] Write a failing test that imports the Next configuration and asserts the global response includes `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, and `Permissions-Policy`.
- [ ] Run `npm test -- lib/security-headers.test.ts` and confirm the missing configuration fails.
- [ ] Add conservative global security headers compatible with Vercel Analytics and the site's external images/links.
- [ ] Remove the network-time Google font import and use the existing system font stack.
- [ ] Upgrade Next.js from 16.1.0 to the npm `latest` verified version 16.2.9.
- [ ] Run the focused test, `npm audit --omit=dev`, typecheck, and production build.

### Task 2: Content Integrity and CI

**Files:**
- Create: `lib/content-integrity.ts`
- Create: `lib/content-integrity.test.ts`
- Modify: `.github/workflows/ci.yml`
- Modify: `package.json`

- [ ] Write failing tests for a helper that reports a claim missing from sitemap, a missing page file, and a missing Open Graph file.
- [ ] Run the focused test and confirm failures are caused by the missing helper.
- [ ] Implement the minimal integrity helper and a repository check that validates every claim and topic route.
- [ ] Add `check:content` and run it in CI after replacing `npm install` with deterministic `npm ci`.
- [ ] Run focused tests and the full test suite.

### Task 3: Mobile Navigation and Homepage Focus

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/page.tsx`
- Modify: `app/theme.css`

- [ ] Remove the duplicated proposal action from the mobile header; keep it in the thumb-friendly bottom navigation.
- [ ] Reduce the homepage hero to the two primary actions: search and example check.
- [ ] Add narrow-screen CSS that keeps the brand and two quick actions fully visible at 360–390px.
- [ ] Build and verify desktop plus 390px screenshots, DOM width, and navigation interactions.

### Task 4: Lower-Friction Proposals and Sharing

**Files:**
- Create: `lib/share-links.ts`
- Create: `lib/share-links.test.ts`
- Create: `components/ClaimProposalForm.tsx`
- Modify: `app/suggest-claim/page.tsx`
- Modify: `components/CopyBox.tsx`
- Modify: `app/components.css`

- [ ] Write failing tests for encoded GitHub issue and WhatsApp share URLs, including Hebrew and empty optional fields.
- [ ] Run the focused tests and confirm the helper is missing.
- [ ] Implement pure URL builders.
- [ ] Add an accessible proposal form that opens a prefilled GitHub issue without collecting or transmitting data before the explicit submit action.
- [ ] Add a WhatsApp share action beside the existing copy response action.
- [ ] Verify form encoding, keyboard operation, mobile layout, and copy/share controls.

### Task 5: Trust Metadata and Final Verification

**Files:**
- Create: `lib/site-schema.ts`
- Create: `lib/site-schema.test.ts`
- Modify: `app/layout.tsx`
- Modify: `app/about/page.tsx`
- Modify: `docs/OPERATIONS.md`
- Modify: `docs/TECHNICAL_STATUS.md`

- [ ] Write a failing test for WebSite, Organization, and Person schema with canonical site and GitHub identity URLs.
- [ ] Implement the schema helper and render its static JSON-LD in the root layout.
- [ ] Expand the About page with explicit editor responsibility and limits without inventing credentials.
- [ ] Update operations documentation for content integrity, security headers, dependency policy, and the proposal form.
- [ ] Run `npm test`, `npm run typecheck`, `npm run check:content`, `npm run build`, and `npm audit --omit=dev`.
- [ ] Inspect the final diff and verify no secrets, unrelated changes, or generated artifacts are included.
