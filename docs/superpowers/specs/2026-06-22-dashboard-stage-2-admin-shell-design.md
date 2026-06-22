# Stage 2 Dashboard Admin Shell Design

- **Status:** Draft for review
- **Date:** 2026-06-22
- **Scope:** Private, read-only dashboard foundation
- **Depends on:** [ADR 0001](../../adr/0001-dashboard-foundation.md) and completion of dashboard roadmap Stages 0–1

## Purpose

Stage 2 adds a secure administrative shell that the site owner can open from a work computer or phone. It establishes authentication, server-side authorization, operational audit, durable login rate limiting, health checks and a protected view of the existing content-status report.

This stage does not create a content-management system. Public content remains static-first and Git-backed. Supabase is an operational dependency for authentication, sessions, audit and rate limiting only.

## Approved decisions

- The dashboard is available at `/dashboard` from any device.
- Authentication uses a Supabase email Magic Link.
- Exactly one email, configured by `DASHBOARD_ADMIN_EMAIL`, is authorized initially.
- `requireDashboardUser()` is the authoritative security boundary for every protected page and server action.
- The first authenticated role is `admin`; the shell remains read-only.
- The authorization model may represent `read_only` for future compatibility, but Stage 2 does not provision or manage that role.
- Supabase stores only operational auth/session/audit/rate-limit data.
- Git remains the source of truth for claims, metadata, workflow, topics, sitemap inputs and all other public content.
- AI work remains `Git -> Pull Request -> human approval`. AI receives no dashboard session, email identity, service key or direct production mutation capability.
- Stage 2 is not complete until implementation is merged, automated checks pass and the protected production flow is verified.

## Non-goals

Stage 2 does not add:

- claim creation or editing;
- submissions or an intake inbox;
- publish, deploy, merge or rollback actions;
- a CMS or database-backed public content;
- user invitations or user-management UI;
- editor or reviewer roles;
- secret, provider or Supabase administration UI;
- AI actions, analytics dashboards or public analytics inside the admin shell;
- changes to claim content, claim workflow values, topic clusters, sitemap entries or Open Graph rendering.

## System boundaries

### Public layer

Git remains canonical for every published field and route. The dashboard reads the existing typed claim records through the same repository code used by the public build. It does not copy claim records into Supabase and cannot modify them.

### Operational layer

Supabase is canonical only for:

- the single authorized authentication identity and its session lifecycle;
- append-only dashboard audit events;
- durable, expiring rate-limit counters.

### Human and AI responsibilities

The owner uses the dashboard to view operational state. AI reads repository schemas and status contracts, prepares Git changes and opens Pull Requests. The dashboard does not become an alternate AI control plane.

## Routing and presentation architecture

The implementation provides these surfaces:

- `/dashboard/login`: Magic Link request form with a generic response;
- `/dashboard`: read-only overview;
- `/dashboard/content`: protected rendering of the existing content-status data;
- `/dashboard/health`: read-only dependency and deployment health;
- `/dashboard/audit`: protected recent authentication audit events;
- a server-side logout action available from the dashboard header.

The dashboard uses its own shell and does not render the public site header, footer, mobile navigation, reading-time behavior, site schema or public analytics. Implementation will keep the root layout limited to document-wide HTML, body, fonts and global styles; move the current public chrome, site schema, reading-time behavior and public analytics into a `(public)` route-group layout; and place dashboard pages under a separate `(dashboard)` route-group layout. Route groups preserve existing public URLs. Moving routes into the public group requires route, metadata and visual-parity tests before merge.

The current `/internal/content-status` URL stops serving the report publicly during implementation. It must execute server-side authorization and redirect an authorized user to `/dashboard/content`; an unauthenticated request reaches the login flow. The content-status calculation remains in the existing shared library and is not duplicated in a page or database.

## Authentication flow

### Magic Link request

1. The login form submits by POST to a server action.
2. The server normalizes the supplied email using one documented rule: trim surrounding whitespace and compare lowercase values.
3. Durable rate limits are consumed before the authorization result is returned.
4. The server computes equal-length SHA-256 digests of the normalized supplied email and normalized server-only `DASHBOARD_ADMIN_EMAIL`, then compares those digests with Node.js `timingSafeEqual`. Neither raw value is persisted or logged.
5. Only the allowlisted email is passed to Supabase.
6. Every browser receives the same generic response, whether the email was allowed, denied or already rate-limited.

Public Supabase sign-up is disabled. The authorized admin identity is provisioned explicitly, and the Magic Link request uses an existing-user-only flow. Redirect destinations are restricted to configured production and non-production callback URLs.

### Callback and session

1. The server callback exchanges the one-time code for a Supabase session.
2. The server calls Supabase user verification rather than trusting unverified client session data.
3. The verified email is normalized and checked again against `DASHBOARD_ADMIN_EMAIL`.
4. A missing, invalid or non-allowlisted identity is signed out before redirecting to login.
5. A successful authorization returns a minimal principal: `{ userId, role: "admin" }`.
6. A successful login is available only after its audit event is recorded. If that audit write fails, the session is revoked and the user sees a safe unavailable response.

Session cookies use secure provider-supported settings including `HttpOnly`, `Secure` in hosted environments and an appropriate `SameSite` policy. The implementation must preserve Supabase's PKCE and one-time-code protections.

### Authoritative authorization

`requireDashboardUser()` is called inside every protected page and server action. It:

- verifies the current user with Supabase on the server;
- repeats the normalized email allowlist check;
- returns only the minimal dashboard principal;
- signs out and rejects a non-allowlisted session;
- never relies on hidden controls, client state, middleware/proxy redirects or `robots.txt` as authorization.

An early redirect layer may improve navigation, but it cannot replace this function.

### Logout

Logout is a same-origin POST server action. It attempts to write an audit event and always revokes the session, even if audit storage is unavailable. A user must never be trapped in an active session because logging failed.

## Supabase client boundaries

The implementation uses three server-side client responsibilities:

- a request-scoped auth client using the publishable key and secure cookies;
- a server-only operational client for health reads that are allowed by policy;
- a narrowly wrapped, `server-only` service-role client used only for audit and rate-limit operations.

The service-role key is never imported into a Client Component, serialized into props, logged or exposed through a `NEXT_PUBLIC_` variable. Stage 2 does not require a browser-side Supabase client.

Row Level Security denies browser roles direct access to audit and rate-limit records. Database functions expose only the minimum server operations needed by the application.

## Operational data model

This document defines contracts, not executable migrations.

### `audit_events`

Required fields:

- immutable event ID;
- creation timestamp generated by the database;
- action identifier;
- result (`success`, `denied` or `error`);
- optional verified actor user ID;
- optional safe subject hash for correlation of denied attempts;
- request/correlation ID;
- optional safe reason code;
- schema version.

Initial actions are:

- `auth.magic_link_requested`;
- `auth.login_succeeded`;
- `auth.access_denied`;
- `auth.logout`.

Audit never stores a token, Magic Link, raw email, raw IP, credential, cookie, full user-agent, stack trace or claim content. Application code exposes insert and bounded read operations only. Update and delete are not normal application capabilities. Retention follows ADR 0001: 24 months unless a documented policy changes it.

### Durable auth rate limits

Rate-limit records contain only:

- an HMAC-derived key hash;
- limit type (`email` or `network`);
- window start and expiry;
- atomic attempt count.

The HMAC uses a dedicated server-only secret. Raw email and raw IP are never persisted. Rate limiting checks both normalized-email and trusted platform network signals. The initial policy is three allowed-email send attempts per 15 minutes and ten requests per network key per 15 minutes. Denied email addresses consume the network limit and receive the generic response.

Consumption is an atomic database operation. Expired buckets are deleted by a documented maintenance operation. If rate-limit storage is unavailable, the system fails closed and sends no Magic Link.

## Audit failure behavior

- A login is not considered successful unless `auth.login_succeeded` is recorded.
- A denied callback revokes the session before attempting best-effort audit.
- Logout always revokes the session, even if its audit event cannot be recorded.
- Audit failures never weaken authorization.
- Dashboard error output contains a correlation ID and safe Hebrew message only.

## Health design

`/dashboard/health` runs bounded, read-only checks and reports `healthy`, `degraded` or `unavailable` with check time and data source.

Initial checks are:

- verified Supabase auth configuration;
- database connectivity and expected operational schema availability;
- bounded read access to audit events;
- configured GitHub repository and `main` branch reachability;
- current `VERCEL_GIT_COMMIT_SHA` when available;
- comparison between the deployed commit and the observed `main` commit when both are available.

GitHub checks use read-only access. A server-only token may be configured to avoid public API limits, but it receives no write, workflow or repository-administration scope. Health endpoints cannot publish, deploy, merge, retry workflows or modify provider state.

Checks use explicit short timeouts and independent results so one failed dependency does not hide other states. Errors are mapped to safe reason codes; secrets, response bodies and stack traces are excluded from UI and audit payloads.

## Cache, indexing and analytics

All `/dashboard` and `/internal` responses are dynamic and private. Implementation must enforce:

- `Cache-Control: private, no-store` on protected responses;
- no static generation or revalidation of operational content;
- `noindex`, `nofollow` and `noarchive` through metadata and `X-Robots-Tag`;
- explicit exclusion from sitemap and `llms.txt`;
- no Vercel Web Analytics, Vercel Speed Insights or other public analytics execution on dashboard/internal routes.

Vercel Web Analytics and Vercel Speed Insights belong only in the `(public)` layout. Enabling Speed Insights in the Vercel project does not by itself authorize adding its runtime component in this documentation-only change; that integration is a separate, public-site PR.

These controls reduce exposure and caching but are not authorization. `requireDashboardUser()` remains mandatory.

## CSRF and request integrity

- Login and logout use POST server actions.
- State-changing auth requests validate same-origin `Origin`/`Host` expectations in addition to framework protections.
- Callback destinations use an explicit allowlist; arbitrary `next` URLs are rejected.
- Correlation IDs are generated server-side or accepted only from a trusted platform source.
- Forwarded network headers are consumed only according to the hosting platform's documented trust boundary.

## Environment contract

The implementation documents variable names in `.env.example` without values. Expected categories are:

- Supabase project URL and publishable key, both consumed only by server-side code in Stage 2 and not exposed through `NEXT_PUBLIC_` variables;
- server-only Supabase service-role key;
- server-only `DASHBOARD_ADMIN_EMAIL`;
- server-only rate-limit HMAC secret;
- dashboard base URL and allowed callback URL;
- GitHub repository/default branch;
- optional server-only read-only GitHub token.

No server secret uses a `NEXT_PUBLIC_` prefix. Startup/config validation fails safely when a required production value is missing.

## Environment separation

- Production uses a production Supabase project and production-only secrets.
- Local development and preview never use production operational data.
- Preview uses a dedicated non-production project with synthetic data and an explicitly configured callback host, or the dashboard fails closed when non-production auth is unavailable.
- Arbitrary preview wildcard redirects are not accepted merely for convenience.
- Production service keys are unavailable to preview deployments.

## Backup, export and recovery

Before Stage 2 accepts real operational audit data:

- versioned migrations are stored in Git;
- a UTF-8 export procedure covers operational tables and schema version;
- a backup policy and retention expectation are documented;
- a restore drill imports a backup into a clean non-production environment;
- integrity checks verify representative audit ordering, IDs, timestamps and rate-limit expiry behavior;
- the restore result and unresolved gaps are recorded without including sensitive data.

A failed restore drill blocks Stage 2 completion.

## Dashboard presentation

The dashboard is Hebrew-first, RTL and responsive for desktop and phone. It provides:

- a compact header with authenticated state and logout;
- overview cards for content readiness, dependency health, deployed commit and recent audit;
- read-only tables with explicit source and check time;
- accessible status text in addition to color;
- empty, degraded and unavailable states;
- plain Hebrew error messages with correlation ID.

It contains no disabled edit/publish controls and no visual suggestion that mutation is available.

## Testing strategy

### Unit tests

- email normalization and allowlist decisions;
- generic login responses;
- HMAC keys do not expose source values;
- audit sanitization rejects forbidden fields;
- safe error mapping and correlation IDs;
- health result aggregation.

### Authorization and integration tests

- unauthenticated access is rejected for every protected page and action;
- a verified allowlisted user receives the minimal admin principal;
- a valid Supabase session for another email is revoked and denied;
- login calls Supabase only for the allowlisted email after rate-limit consumption;
- rate-limit increments are atomic and expiry is respected;
- audit and rate-limit tables deny direct browser access;
- callback and logout follow the approved failure behavior.

### Repository and route tests

- `/internal/content-status` no longer renders the report publicly;
- content-status calculations remain shared and unchanged;
- dashboard/internal are absent from sitemap and `llms.txt`;
- noindex/noarchive and no-store headers are present;
- public analytics do not run on protected routes;
- public route URLs and layout remain unchanged.

### Verification gate

- full unit/integration suite;
- content integrity checks;
- TypeScript typecheck;
- production build;
- migration/RLS verification against non-production Supabase;
- backup/export and restore drill;
- manual Magic Link login and logout on desktop and phone;
- production checks for unauthenticated denial, authorized access, audit entry, no-store and safe degraded health.

## Documentation and delivery

The implementation is delivered through small, reviewable Pull Requests. Documentation work includes:

- this approved design spec;
- ADR 0002 recording the Supabase operational-provider decision;
- an implementation plan written only after spec review;
- environment and operations documentation during implementation;
- roadmap status `in progress` while work is active;
- a closure update after implementation is merged and automated checks pass;
- a production marker only after the live protected flow is verified.

Stage 2 must not be marked complete in the design PR or an unmerged implementation PR.

## Acceptance criteria

Stage 2 implementation is acceptable only when:

- the sole allowlisted owner can request a Magic Link, authenticate and log out;
- non-allowlisted and unauthenticated users cannot read dashboard/internal content;
- every protected page/action calls server-side authorization;
- no service key or admin email is exposed to the browser;
- audit and durable rate limits store no prohibited raw values;
- dashboard content is read-only and derived from Git;
- health checks are read-only and fail safely;
- protected responses are no-store and excluded from indexing/discovery;
- public analytics do not execute on protected routes;
- no content-management or publishing path exists;
- backup/export and a non-production restore drill succeed;
- automated checks and the production verification gate pass.
