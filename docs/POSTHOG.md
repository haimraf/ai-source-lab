# PostHog Plan

PostHog is optional and disabled unless `NEXT_PUBLIC_POSTHOG_KEY` is set.

## Privacy rules

- No autocapture.
- No session recordings.
- No user profiles beyond an anonymous browser id.
- No free text collection.
- No query strings.
- No sensitive URLs.
- Only explicit product signals.

## Environment variables

```env
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

## Current implementation status

A small capture helper exists in `lib/posthog-lite.ts`.

It does not add a dependency and does not send anything unless the public key exists.

The next step is to wire explicit events in client components. This should be done carefully and tested locally.

## First events to wire

- `copy_response_clicked` when a user copies a short response.
- `source_opened` when a user opens a source link.
- `faq_opened` when a user opens a FAQ item.
- `claim_card_clicked` when a user enters a claim from the homepage.

## Why not autocapture?

The site is about trust and source checking. Measurement should support editorial decisions, not create unnecessary surveillance.
