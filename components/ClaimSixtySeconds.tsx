import type { ClaimContent } from "@/lib/content/claim-schema";

/**
 * The claim in sixty seconds, built entirely from fields that already existed.
 *
 * `claim-schema.ts` requires every claim to carry `shortAnswer`, `bottomLine`
 * and `summaryPoints`. All of them are written, per claim, by a person. None of
 * them had ever been rendered — counted across every non-test `.tsx` in the
 * repository:
 *
 *   verdict         49 files
 *   shortAnswer      0
 *   bottomLine       0
 *   summaryPoints    0
 *
 * So this module invents nothing and summarises nothing. Writing a fresh
 * summary here would mean a machine paraphrasing a human's sourced work and
 * publishing the paraphrase as the finding, which is the exact failure this
 * product exists to document elsewhere. Every string below was already written
 * and already reviewed; it was simply never shown to a reader.
 *
 * The three blocks stay labelled and stay apart, because the separation is the
 * product. `summaryPoints` is what the sources say. `shortAnswer` is the
 * reading of them. `bottomLine` is the conclusion drawn. Collapsing them into
 * one tidy paragraph would read better and would quietly destroy the thing that
 * makes the page trustworthy.
 *
 * The link goes to a source marked `level: "primary"` when the claim has one.
 * When it does not, the module says so rather than promoting a secondary source
 * into a position it did not earn.
 */

type ClaimSixtySecondsProps = {
  claim: ClaimContent;
  updatedLabel: string;
};

export function ClaimSixtySeconds({ claim, updatedLabel }: ClaimSixtySecondsProps) {
  const primarySource = claim.sources.find((source) => source.level === "primary");

  return (
    <section className="claim-sixty" aria-labelledby="claim-sixty-title">
      <h2 id="claim-sixty-title" className="claim-sixty__title">
        המקור ב־60 שניות
      </h2>

      <div className="claim-sixty__block">
        <h3 className="claim-sixty__label">התשובה הקצרה</h3>
        <p className="claim-sixty__answer">{claim.shortAnswer}</p>
      </div>

      {claim.summaryPoints.length > 0 ? (
        <div className="claim-sixty__block">
          <h3 className="claim-sixty__label">מה נמצא במקורות</h3>
          <ul className="claim-sixty__points">
            {claim.summaryPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="claim-sixty__block">
        <h3 className="claim-sixty__label">השורה התחתונה</h3>
        <p className="claim-sixty__bottom">{claim.bottomLine}</p>
      </div>

      <footer className="claim-sixty__footer">
        {primarySource ? (
          <a
            className="claim-sixty__source"
            href={primarySource.url}
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            למקור הראשוני: {primarySource.title}
          </a>
        ) : (
          /* Said plainly rather than hidden. A reader who wants the primary
             source deserves to know the check did not rest on one. */
          <span className="claim-sixty__source claim-sixty__source--none">
            אין מקור ראשוני יחיד בבדיקה הזו — ראו רשימת המקורות המלאה למטה.
          </span>
        )}
        <span className="claim-sixty__updated">נבדק ועודכן: {updatedLabel}</span>
      </footer>
    </section>
  );
}
