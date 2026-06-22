# ADR 0001: Dashboard Foundation

- **Status:** Accepted
- **Date:** 2026-06-22
- **Decision owners:** AI Source Lab maintainers
- **Scope:** Editorial dashboard architecture foundation

## Context

AI Source Lab currently publishes typed claim content from Git through a static-first Next.js application. Claim records drive the public routes, metadata, sitemap, `llms.txt` and structured data. Git history, automated validation, preview builds and deployment rollback already form the public publishing control plane.

The planned editorial dashboard will eventually add submissions, triage, research notes, tasks, reviews, media handling, audit and controlled publishing. Those operational needs do not justify moving the public source of truth into a database or allowing an internal tool to mutate production directly.

This ADR defines the boundaries and contracts that must exist before selecting providers or implementing the dashboard. It does not select or add authentication, a database, object storage, sessions, routes, UI, migrations, uploads or an executable publishing workflow.

## Decision drivers

- Preserve the current static-first public site and its build-time validation.
- Keep exactly one canonical source for each field and record.
- Prevent internal data, PII and research notes from entering public payloads.
- Make every publication reviewable, attributable, reversible and reproducible.
- Support export and recovery without dependence on a running vendor service.
- Defer provider selection until requirements can be evaluated independently.
- Introduce the smallest initial permission model that can be enforced safely.

## Decision summary

We adopt a provider-agnostic two-layer model:

1. **Git is the source of truth for published public content and public shared records.**
2. **A future database is the source of truth for internal operational records.**
3. **Publishing is Git-backed.** A dashboard may prepare a validated snapshot and create a change set or Pull Request, but it may not write directly to production.
4. **Promotion is one-way.** An approved operational draft may become a public Git record. The database does not remain a second canonical copy of the published fields.
5. **Providers remain unselected.** Stage 2 will compare candidates against the contracts in this ADR.

## Alternatives considered

### Direct database-backed public publishing

Rejected for the initial system. It would replace working Git history, previews, validation and rollback before a measured bottleneck exists. It would also create two migration projects at once: the dashboard and the public renderer.

### Git-only operational storage

Rejected. Submissions, assignments, comments, authentication activity and audit queries require access control, retention rules and transactional updates that do not belong in public content files or ordinary Git review.

### Immediate commitment to named infrastructure providers

Rejected. Provider APIs must be evaluated against this ADR rather than becoming the architecture by default. A non-binding shortlist may be evaluated during Stage 2, but no provider-specific contract is accepted here.

## 1. Source of truth

### Public layer

The version merged into `main` is canonical for:

- Claim Check, Article, FAQ Page, Topic Page, Static Page and Methodology/Policy Page content;
- published Source, Exhibit/Evidence, Topic/Taxonomy, Redirect and Correction/Change records;
- public slugs, canonical paths, metadata, structured data and publication state;
- outputs derived from those records, including public routes, sitemap and `llms.txt`.

Derived artifacts are never edited as independent sources. If a derived output is wrong, the canonical Git record or derivation policy is corrected and rebuilt.

### Operational layer

The future database is canonical for:

- Claim Submission and intake state;
- Editorial Task and assignment;
- Review Decision and internal comments;
- Publish Request and change-set lifecycle;
- Audit Event;
- Analytics Summary;
- Maintenance Finding;
- authentication identities, sessions and authorization state when implemented.

Operational records are private by default and are never copied wholesale into a public content record.

### No dual authority

A field cannot be editable in both layers. Once a public snapshot is merged, Git is authoritative for the published representation. The database may retain identifiers, hashes and references to the resulting commit or deployment, but not an independently editable canonical copy of the public fields.

## 2. Git-backed publishing

The future publishing contract is:

1. An authorized actor requests publication from an operational draft.
2. The system produces an immutable candidate snapshot using a known content schema version.
3. Validation runs against the same schema and consumer rules used by the public site.
4. A change set or Pull Request is created from a recorded base Git SHA.
5. CI and preview complete before approval.
6. An authorized human approves and merges the change.
7. Production deploys from `main`.
8. The operational Publish Request records the resulting commit and verified deployment.

There is no direct database-to-production mutation, filesystem write on a production instance or manual status flip that can substitute for a verified deployment.

Validation failure, Git conflict, failed CI or failed deployment stops the transition. The currently live content remains unchanged.

## 3. Entity boundaries

### Content Type

A Content Type is a complete public page contract. It owns its required fields, optional fields, metadata behavior, structured-data behavior, allowed workflow, validation, slug and canonical behavior, public discovery policy and rendering contract.

Published Content Types live in Git.

### Shared Record

A Shared Record can be referenced by multiple Content Types. Examples are Source Record, Exhibit/Evidence Record, Topic/Taxonomy Record, Redirect Record and Correction/Change Record.

A candidate Shared Record may be researched internally in the operational layer. Publication performs an explicit promotion into a stable Git representation. The promoted Git record becomes canonical; the operational record retains only its workflow history and reference to the public identifier.

### Operational Record

An Operational Record coordinates internal work and is not a public page. It remains in the database, is subject to authorization and retention, and never enters sitemap or `llms.txt`.

### Ownership matrix

| Entity or capability | Canonical layer | Publication or sync rule |
|---|---|---|
| Claim Check | Git | Created or changed through a reviewed Git change set |
| Article | Git | Created or changed through a reviewed Git change set |
| FAQ Page | Git | Created or changed through a reviewed Git change set |
| Topic Page | Git | Created or changed through a reviewed Git change set |
| Static Page | Git | Created or changed through a reviewed Git change set |
| Methodology / Policy Page | Git | Created or changed through a reviewed Git change set |
| Published Source Record | Git | Promoted from approved research; Git representation becomes canonical |
| Published Exhibit / Evidence Record | Git | Approved asset reference and public metadata are committed together |
| Topic / Taxonomy Record | Git | Public taxonomy is versioned with its consumers |
| Redirect Record | Git | Must be reviewed with slug and canonical changes |
| Correction / Change Record | Git | Versioned with the affected public content |
| Claim Submission | Database | Never public; may initiate a Content Type draft |
| Editorial Task | Database | References stable public or operational IDs |
| Review Decision | Database | May approve a candidate snapshot but does not publish it |
| Publish Request | Database | References change-set ID, base SHA, commit and deployment |
| Audit Event | Database | Append-only; never promoted to public content |
| Analytics Summary | Database | Aggregated operational data; never a public source of truth |
| Maintenance Finding | Database | May initiate a reviewed Git correction |
| Raw upload | Private object storage plus Database metadata | Requires explicit approval before any public derivative is created |
| Approved public media | Git reference plus public asset location | Asset hash and attribution are reviewed with the content change |
| Authentication and authorization state | Database or auth service | Server-side operational state only |

Every future feature must identify one canonical layer. Cross-layer actions use references and immutable snapshots, not shared mutable fields.

## 4. Preview, staging and production

### Preview

- Built from a branch or immutable change set.
- Uses the production content schema, validation and rendering components.
- Uses non-production secrets and no production operational writes.
- Exists for review and may not be treated as published.

### Staging

- Hosts integration testing for the future dashboard and operational services.
- Uses an isolated operational dataset containing synthetic or approved non-sensitive test data.
- Uses separate credentials, storage namespace and callbacks from production.
- Cannot merge changes or deploy public production without the normal approval gate.

### Production

- The public site is built from `main`.
- Operational production services use production-only credentials and data stores.
- A public status becomes `published` only after a deployment for the merged commit is verified.
- Preview or staging URLs never become canonical public URLs.

## 5. Initial auth and authorization model

The first implementation will have two roles:

- `admin`: may manage operational records, request publication and perform explicitly authorized administrative actions.
- `read_only`: may view permitted internal operational records but cannot create, edit, approve, publish, delete or change permissions.

Authentication provider selection is deferred. The chosen solution must support secure server-managed sessions, revocation, short-lived sensitive operations, audit integration and account export or replacement.

Authorization must be enforced server-side for every protected route, query and action. UI visibility is never sufficient authorization. Default access is deny. Service credentials may not be exposed to the browser.

Adding editor, reviewer or specialized roles requires a permission matrix and a future decision or amendment; it is not implied by these two initial roles.

## 6. PII, retention and deletion

### Collection

- Collect the minimum PII required for a named operational purpose.
- Prefer structured fields with length and format limits.
- Do not request credentials, government identifiers, medical details or other sensitive data in free text.
- Keep research notes and contact details out of public snapshots and application logs.

### Retention defaults

- Rejected Claim Submissions: delete or irreversibly anonymize after 90 days.
- Audit Events: retain for 24 months, with payload minimization before archival when full values are no longer required.
- Raw orphaned uploads: define and automate a short retention window before uploads are enabled; no indefinite orphan storage is permitted.
- Accepted records: retain only the operational fields required to explain the workflow and public promotion.

A documented legal or security hold may pause deletion for a specific record. The reason, scope, approver and expiry are audited.

### Deletion

Deletion must cover primary data, search indexes, caches and storage objects. Backup expiry follows the documented backup retention schedule; a deletion tombstone prevents a restored backup from silently reactivating deleted data. Manual deletion, anonymization and policy overrides create Audit Events without copying the deleted sensitive payload into the audit log.

## 7. Storage and media

Future raw uploads use private object storage. Each upload requires:

- a stable object ID and checksum;
- allowed MIME type and extension checks;
- a size limit;
- a private default access policy;
- signed, expiring access for authorized users;
- Database metadata for owner, state, timestamps and linked operational record.

Screenshots and PDFs are untrusted evidence inputs. Upload alone never makes them public. Public use requires review, safe derivative generation when needed, alt/caption/attribution, an approved public location and a Git change that references the exact asset hash.

Provider selection must support bulk export of original objects and metadata without rewriting file contents. Orphan cleanup, retention and failed-upload cleanup must be defined before real uploads are enabled.

## 8. Audit, versioning and rollback

### Audit

Audit Events are append-only and contain:

- event ID;
- actor or service identity;
- action;
- entity type and stable entity ID;
- timestamp;
- correlation ID;
- result and safe reason code;
- before/after field names or hashes when needed, not unrestricted secret payloads.

Credentials, session tokens, authentication secrets and full sensitive content are excluded.

### Versioning

- Git versions public content and public shared records.
- Operational records use explicit revision or event references suitable for concurrency checks.
- A candidate snapshot is immutable after its change set is created. Changes produce a new snapshot and audit event.

### Rollback

Public rollback is a reviewed revert or corrective commit followed by the normal CI and deployment path. It does not erase Git history. Operational recovery restores or compensates records using documented database procedures and does not delete audit history. Rollback never bypasses authorization, review or publishing gates.

## 9. Export, backup and recovery

### Export contract

Before real operational data is introduced, the selected implementation must produce:

- JSON or JSONL exports with documented schema version and UTF-8 encoding;
- stable IDs and relationship fields;
- original media objects;
- a manifest containing paths, sizes, MIME types and checksums;
- audit export that preserves ordering and correlation IDs;
- a machine-readable record of export time and source schema versions.

Export must be usable without the active provider's API.

### Backup contract

- Backups are encrypted in transit and at rest.
- At least one backup copy is isolated from the production account or failure domain.
- Retention, rotation, access and deletion are documented.
- Backup success is monitored, but a successful backup job is not proof of recoverability.

### Recovery gate

Before real information is accepted, a restore drill must create a clean environment from backup and exported media, run integrity checks, verify representative relationships and record recovery time and unresolved gaps. Failure of the drill blocks production data intake.

## 10. Sync contract between dashboard and site

Each publication candidate contains:

- change-set ID;
- base Git SHA;
- target branch;
- public entity IDs and intended paths;
- content schema version;
- snapshot hash;
- actor and approval references;
- validation result.

The sync direction during publication is:

`operational draft -> immutable validated snapshot -> Git change set -> merge -> deployment reference`

Rules:

1. The dashboard may read Git state for display and conflict detection, but it may not rewrite Git history.
2. A base SHA that no longer matches requires regeneration, rebase or explicit conflict resolution; last-write-wins is prohibited.
3. Unknown schema versions are rejected.
4. After merge, the Database stores references to the commit and deployment. It does not become authoritative for the public fields.
5. Publication is complete only when the deployment associated with the merged commit is verified.
6. Retries use the same idempotency or change-set key and may not create duplicate public records.

## 11. Schema versioning and migrations

Public content schemas and operational schemas have independent explicit versions.

### Public content schema

- Version is stored with each record or unambiguously defined by its typed contract.
- Consumers reject unsupported future versions.
- A breaking change requires a migration plan, repository-wide validation, parity tests and a defined compatibility window.
- Migration changes are reviewed and committed like content changes.

### Operational schema

- Database migrations are ordered, reviewable and forward-only.
- They are idempotent when practical and safe to resume or clearly fail.
- Each migration has a dry-run or preflight, backup prerequisite, verification query and rollback or restore procedure.
- Application deployment order is documented when old and new schemas must coexist.

Silent coercion of unknown versions is prohibited. Migration history is part of export and recovery evidence.

## Failure behavior

| Failure | Required behavior |
|---|---|
| Content validation fails | Mark candidate blocked; do not create or update a publishable change set |
| Base Git SHA diverges | Require regeneration or explicit conflict resolution |
| CI or preview fails | Prevent approval and merge |
| Production deployment fails | Keep the previous live version and do not mark publication complete |
| Upload fails or checksum changes | Quarantine or reject the object and record a safe audit result |
| Export fails | Retain the prior valid export; record a Maintenance Finding |
| Backup fails | Alert and block claims of recoverability |
| Restore drill fails | Block real operational data intake until corrected and repeated |
| Unsupported schema version appears | Reject the record and require a migration or compatible reader |

## Consequences

### Positive

- The public site retains its existing validation, review, preview and rollback strengths.
- Internal operational data gains an appropriate private lifecycle.
- Provider selection can be evaluated against explicit portability and security requirements.
- Publication remains attributable and resistant to accidental direct mutation.

### Costs and limitations

- Publishing requires Git integration and may be slower than direct database mutation.
- Promotion from operational records to public Git records requires deliberate snapshot and mapping logic.
- Export, backup and restore drills add operational work before real data can be accepted.
- The initial two-role model is intentionally limited and will not cover a larger editorial organization.

## Provider evaluation criteria for Stage 2

Candidates may be shortlisted only if they can satisfy:

- server-side authorization and secure session lifecycle;
- private-by-default data and object access;
- open bulk export and documented backup/restore;
- migration execution and schema inspection;
- append-only or tamper-evident audit support at the application layer;
- separate preview, staging and production configuration;
- regional, privacy and deletion requirements;
- acceptable cost without making recovery dependent on a proprietary runtime.

The shortlist is non-binding until Stage 2 records the evaluation and implementation choice.

## Future ADR triggers

A new ADR or explicit amendment is required before:

- replacing Git as the public source of truth;
- enabling direct database-backed public publishing;
- allowing production mutation outside the reviewed Git path;
- materially expanding roles or delegation rules;
- changing PII categories or retention periods;
- adopting provider-specific data contracts that affect portability;
- introducing bidirectional synchronization;
- changing the public content schema in a way that requires consumer coexistence.

## Stage 1 closure checklist

- [x] Source of truth is explicit for public and operational data.
- [x] Git-backed publishing is selected over direct DB publishing.
- [x] Content Type, Shared Record and Operational Record boundaries are defined.
- [x] Preview, staging and production are separated.
- [x] Initial auth roles and server-side authorization rules are defined.
- [x] PII collection, retention and deletion rules are defined.
- [x] Storage and media promotion rules are defined.
- [x] Audit, versioning and rollback rules are defined.
- [x] Export, backup and recovery gates are defined.
- [x] The dashboard-to-site sync contract is defined.
- [x] Schema versioning and migration rules are defined.
- [x] Every planned entity has a canonical layer or explicit one-way promotion path.
- [x] A restore drill is required before real operational data is introduced.
- [x] Stage 2 remains unstarted and all provider choices remain deferred.
