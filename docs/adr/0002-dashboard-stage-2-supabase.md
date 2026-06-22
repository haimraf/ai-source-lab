# ADR 0002: Supabase for Dashboard Stage 2 Operations

- **Status:** Accepted for implementation planning
- **Date:** 2026-06-22
- **Decision owners:** AI Source Lab maintainer
- **Scope:** Stage 2 dashboard authentication and operational state

## Context

[ADR 0001](0001-dashboard-foundation.md) established a two-layer architecture: Git is canonical for public content, while a future operational store may hold private workflow records. Stage 2 requires a private, remotely accessible, read-only admin shell with passwordless authentication, secure sessions, audit, durable rate limiting and database health checks.

The initial system has one human administrator. AI continues to operate through repository changes and Pull Requests, not through a dashboard identity or direct production credentials.

## Decision

Use Supabase for Stage 2 operational capabilities only:

- passwordless email Magic Link authentication;
- secure session verification;
- append-only dashboard audit events;
- durable, atomic authentication rate limits;
- operational health checks.

Vercel continues to host the Next.js application. Git remains the only source of truth for claims and all public content. Supabase does not store editable copies of claims, workflow fields, topics, sitemap data or publishing state.

## Authorization decision

- One pre-provisioned Supabase identity is authorized initially.
- The allowed email is configured in server-only `DASHBOARD_ADMIN_EMAIL`.
- `requireDashboardUser()` verifies the Supabase user and repeats the server-side allowlist check for every protected page and action.
- A valid Supabase session alone does not authorize dashboard access.
- The initial principal is `admin`, but Stage 2 exposes no mutation controls.
- Public sign-up and invitation UI are disabled.

## Service boundaries

The Supabase project URL and publishable key are consumed only by server-side auth code in Stage 2; no browser-side Supabase client is added. The service-role key remains server-only and is wrapped behind narrow audit and rate-limit functions. Row Level Security denies direct browser access to operational tables.

AI receives no Supabase identity, dashboard session or service credential. AI changes remain `Git -> Pull Request -> human approval`.

## Data-minimization decision

Audit and rate-limit storage excludes raw email, raw IP, tokens, Magic Links, credentials, cookies, full user agents, stack traces and claim content. Repeated attempts may be correlated only through HMAC-derived server-side hashes with expiry where applicable.

## Alternatives considered

### Auth.js plus marketplace database and email provider

This keeps more auth logic in the repository but requires separate session storage, email delivery and database integration. It adds more operational components than Stage 2 needs.

### Clerk plus a separate operational database

Clerk provides a polished authentication layer but still requires another provider for audit and rate limiting. Two providers are unnecessary for a single-admin foundation.

### Self-hosted authentication and Postgres

This maximizes infrastructure control but transfers patching, availability, email delivery, backup and recovery work to the project. The operational burden is disproportionate to Stage 2.

## Consequences

### Positive

- One managed provider covers auth and the small operational data model.
- Magic Link works across the owner's desktop and phone.
- Postgres supports atomic rate limiting, versioned migrations, export and restore.
- The public static-first content architecture remains unchanged.

### Costs and risks

- Supabase becomes a production dependency for dashboard access.
- Incorrect RLS or service-key boundaries could expose operational data.
- Email delivery, redirect configuration and environment separation require explicit verification.
- Backup availability varies by provider configuration, so project-owned export and restore procedures remain mandatory.

## Required controls

- separate production and non-production operational environments;
- public sign-up disabled and one admin identity pre-provisioned;
- server-side email allowlist on every authorization decision;
- durable rate limiting with no raw identifier storage;
- RLS and least-privilege database functions;
- server-only service and optional GitHub tokens;
- private/no-store dashboard responses;
- export procedure and successful non-production restore drill;
- no dashboard mutation or publishing capability in Stage 2.

## Revisit triggers

Revisit this ADR before:

- adding team invitations or additional administrators;
- enabling `read_only`, editor or reviewer users;
- allowing dashboard content mutation;
- giving AI an authenticated operational identity;
- storing submissions, research notes or uploaded evidence;
- changing provider, region, retention or backup guarantees;
- making Supabase authoritative for any public field.

## Relationship to Stage 2 completion

Acceptance of this provider decision does not complete Stage 2. Completion requires merged implementation, automated verification, successful recovery evidence and live production validation as defined by the Stage 2 design spec.
