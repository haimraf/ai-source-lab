# Gate 3 Audit: Suggest and Corrections Flow

Date: 2026-07-01

Scope: `/suggest-claim`, `/corrections`, `/methodology`, and adjacent public trust language.

## Result

Gate 3 is acceptable for the current public beta/source-check archive model after a small copy clarification on `/suggest-claim` and `/corrections`.

The flow remains manual. It does not add a dashboard route, inbox, database, authentication, CMS, moderation system or automatic publishing path.

## Checks

| Requirement | Status | Notes |
| --- | --- | --- |
| Explains what kind of claim is useful to submit | Pass | `/suggest-claim` asks for one narrow claim, where it appeared and what is interesting to check. |
| Explains what counts as a useful source | Pass after copy update | The page now prefers direct links to documents, studies, official pages, source articles or original videos. |
| Explains screenshots or viral captions are not enough | Pass after copy update | Screenshots are framed as context for what spread, not proof by themselves. |
| Explains stronger evidence or corrections can change a page | Pass after copy update | `/corrections` now says a direct or open source beyond a screenshot or viral caption can change what the site can responsibly conclude. |
| Invites better evidence, not arguments | Pass after copy update | `/suggest-claim` now states the goal is better evidence, not opening a debate. `/corrections` already rejects disagreement alone as a correction. |
| Preserves public/manual intake | Pass | Existing email/GitHub flow is unchanged. |
| Avoids new product claims | Pass | No new archive, dashboard, Supabase, auth or inbox capability is claimed. |

## Public Copy Changes

- Tightened `/suggest-claim` metadata so it asks for a claim plus a link/source that can be opened and checked.
- Clarified that screenshots and viral captions are useful context, but not enough as proof.
- Added a field for a direct or open source when available.
- Clarified on `/corrections` that a direct or open source can change a page, while disagreement alone does not.

## Deliberately Out of Scope

- No claim submissions inbox.
- No `/dashboard/submissions`.
- No Supabase or authentication.
- No form backend or storage.
- No schema or workflow changes.
- No new claims or source research.
