# Reactions roadmap

Status: future enhancement, not part of the current claim-page cleanup.

## Why not now

Reactions look small in the UI, but they are a separate product surface:

- storage for reaction counts
- duplicate-vote prevention
- abuse/spam handling
- privacy choices
- moderation rules
- analytics boundaries
- fallback behavior if the backend is unavailable

## Good first version

A lightweight reaction strip at the end of each claim page:

- 👍 עזר לי להבין
- 🤔 עדיין לא בטוח
- 🔎 חסר מקור
- 🧠 למדתי משהו חדש

## Data model idea

Table: `claim_reactions`

- `claim_slug`
- `reaction_type`
- `anonymous_hash` or session key
- `created_at`

Aggregated counts can be cached and shown without exposing user identity.

## Editorial rule

Reactions should not replace sources, verdicts or correction requests. They are feedback signals only.

## Best timing

Add after the claim-page template is stable and after at least 10–15 claim pages exist, so the feature has enough value and does not distract from the core source-checking product.
