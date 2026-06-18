# XRP video, CBDC sources, and analytics design

## Goal

Run a small end-to-end trial of the newly installed Zotero, Remotion, and PostHog plugins for AI Source Lab:

1. Find primary CBDC sources already saved in the local Zotero library and prepare a citation list.
2. Produce a real, approximately 60-second MP4 explaining the existing XRP fact-check.
3. Measure source-link openings and short-answer copies without enabling session replay.

## Editorial constraints

- The video summarizes the published XRP investigation; it does not introduce unsupported claims.
- The conclusion remains: no official source was found showing that XRP was selected as a global currency.
- Official and primary sources appear visibly and are distinguished from interpretation.
- The video is not financial advice and avoids promotional crypto imagery.
- Hebrew is the primary language and all narration is accompanied by burned-in captions.

## Video design

### Outputs

- `xrp-global-currency-vertical.mp4`: 1080x1920, 30 FPS.
- `xrp-global-currency-landscape.mp4`: 1920x1080, 30 FPS.
- Both outputs use one responsive Remotion composition and the same verified scene data.

### Storyboard

1. **Hook:** "האם XRP נבחר להיות המטבע העולמי?"
2. **What is true:** XRP and Ripple are real, and ISO 20022 is a real financial-messaging standard.
3. **What the sources say:** show concise evidence from Ripple/XRPL, ISO 20022, and IMF material already cited by the article.
4. **The logical leap:** compatibility or participation does not equal official selection as a global currency.
5. **Verdict:** no official source supporting the viral claim was found.
6. **Close:** invite viewers to inspect the complete source trail on AI Source Lab.

### Visual language

- Reuse the site's dark editorial/source-file aesthetic, typography, verdict language, and restrained color palette.
- Use animated typography, document/source cards, evidence highlights, and quiet transitions.
- Avoid price charts, coins flying through space, trading imagery, and decorative effects that imply endorsement.
- Layout responds to aspect ratio: vertical uses stacked evidence cards; landscape uses side-by-side evidence and narration panels.

### Narration

- Neutral, confident Hebrew narration generated scene-by-scene with a multilingual TTS provider.
- Prefer ElevenLabs multilingual voice synthesis if a usable account/API key is available.
- Pronunciation-safe text spells XRP as "אקס־אר־פי" and describes ISO 20022 in natural Hebrew.
- Audio generation is isolated from rendering so the video can still be previewed with captions if TTS is unavailable.

## Zotero source workflow

- Probe the local Zotero Desktop API through the installed helper.
- Search read-only for CBDC, central bank digital currency, digital shekel, Bank of Israel, BIS, and IMF variants.
- Return title, author or institution, year, Zotero item key, and BibTeX key when available.
- Classify each result as primary, institutional secondary, or unsuitable.
- Do not import, edit, or delete Zotero records during this trial.
- If the library has no matching primary sources, report that clearly rather than substituting web results silently.

## PostHog instrumentation

The current connected target is the Studio Haim organization and its default project. The project has not completed snippet onboarding or ingested events, so implementation includes the base web SDK setup.

### Events

#### `source_opened`

Emitted immediately before navigating to an external evidence source.

Properties:

- `claim_slug`
- `source_url`
- `source_domain`
- `source_label`
- `source_kind`
- `page_path`

#### `short_answer_copied`

Emitted only after a successful clipboard write.

Properties:

- `claim_slug`
- `copy_surface`
- `page_path`

### Privacy

- Do not enable session replay in this trial.
- Do not identify visitors or capture names, email addresses, copied text, query parameters, or free-form content.
- Preserve PostHog's IP-anonymization setting.
- Update the privacy page to disclose anonymous product analytics before deployment.

## Failure handling

- Zotero unavailable: report the exact missing gate and continue with the other two workstreams.
- TTS unavailable: render a caption-complete silent preview and leave narration generation as a documented final step.
- PostHog credentials missing: implement environment-variable wiring and verify the site still builds without analytics enabled.
- Clipboard failure: do not emit `short_answer_copied`; preserve the existing user-facing error behavior.

## Verification

- Typecheck and production-build the Next.js site.
- Unit-test analytics event construction and clipboard-success behavior where the current test setup permits.
- Render representative still frames for both video aspect ratios.
- Render both MP4 files and verify duration, dimensions, captions, and audio presence.
- Verify the two PostHog events against the connected project after local or preview interaction.
- Inspect the final CBDC citation list for primary-source status and duplicates.

## Out of scope

- Session replay, user identification, feature flags, or experiments.
- Automatically importing web search results into Zotero.
- Publishing the video to social platforms.
- Replacing the existing XRP article or changing its verdict.
