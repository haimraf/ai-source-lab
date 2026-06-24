import { Fragment, type ReactNode } from "react";

import { CopyBox } from "./CopyBox";
import { EvidenceGallery } from "./EvidenceGallery";
import type {
  ClaimBodyBlock,
  ClaimContent,
  ClaimReviewScope,
  SourceLevel,
  SourceQualityLabel,
} from "../lib/content/claim-schema";

interface ClaimBodyRendererProps {
  claim: ClaimContent;
}

const sourceLevelLabels: Record<SourceLevel, string> = {
  primary: "מקור ראשוני",
  official: "מסמך רשמי",
  secondary: "ניתוח משני",
  context: "מקור הטענה / הקשר",
};

const sourceQualityLabels: Record<SourceQualityLabel, string> = {
  "official-document": "מסמך רשמי",
  "academic-research": "מחקר / מקור אקדמי",
  journalism: "עיתונות",
  "primary-source": "מקור ראשוני",
  "secondary-analysis": "ניתוח משני",
  "claim-source-social-media": "מקור הטענה / רשת חברתית",
};

function getSourceLabel(source: ClaimContent["sources"][number]) {
  return source.quality ? sourceQualityLabels[source.quality] : sourceLevelLabels[source.level];
}

function getClaimReviewScope(claim: ClaimContent): ClaimReviewScope {
  return claim.reviewScope ?? {
    whatThisChecks: [
      `את הטענה כפי שהיא מנוסחת כאן: ${claim.claim}`,
      "את המקורות שמופיעים בעמוד ואת ההקשר שבו הם פורסמו.",
    ],
    whatThisDoesNotCheck: [
      "את כל הדיון הרחב סביב הנושא או כל גרסה אפשרית של הטענה.",
      "מקורות שלא צורפו, לא אותרו או לא נבדקו בעדכון הנוכחי.",
    ],
    evidenceLimitations: [
      "המסקנה מוגבלת למקורות שנבדקו ולתאריך העדכון של העמוד.",
      "כאשר נכתב שמקור לא נמצא, הכוונה היא שלא נמצא במקורות שנבדקו בסיס שתומך בנוסח הטענה.",
    ],
    strongerEvidenceWouldBe: [
      "מקור ראשוני, מסמך רשמי, נתונים גולמיים, מחקר או תיעוד מאומת שמחברים במפורש בין הטענה לבין המסקנה הרחבה.",
    ],
    sourceQualityNotes: [
      "תוויות המקור נועדו להבדיל בין מקור ראשוני או רשמי לבין ניתוח משני, עיתונות או מקור הטענה ברשת.",
    ],
  };
}

function ScopeList({ title, items }: { title: string; items?: readonly string[] }) {
  if (!items?.length) return null;

  return (
    <div>
      <span className="eyebrow">{title}</span>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function ClaimScopeBox({ claim }: { claim: ClaimContent }) {
  const scope = getClaimReviewScope(claim);

  return (
    <section className="box method-note">
      <h2>גבולות הבדיקה</h2>
      <p>
        מקור בדיקה אינו פסק דין סופי על כל הנושא. המסקנה בעמוד הזה מוגבלת לטענה,
        למקורות שנבדקו ולתאריך העדכון.
      </p>
      <div className="verdict-grid">
        <ScopeList title="מה נבדק" items={scope.whatThisChecks} />
        <ScopeList title="מה לא נבדק" items={scope.whatThisDoesNotCheck} />
        <ScopeList title="מגבלות ראיות" items={scope.evidenceLimitations} />
        <ScopeList title="מה יחזק או ישנה" items={scope.strongerEvidenceWouldBe} />
      </div>
      {scope.sourceQualityNotes?.length ? (
        <div>
          <span className="eyebrow">הערת איכות מקורות</span>
          {scope.sourceQualityNotes.map((note) => <p key={note}>{note}</p>)}
        </div>
      ) : null}
    </section>
  );
}

function CorrectionCta() {
  return (
    <section className="box answer">
      <h2>מצאת מקור חזק יותר או תיקון?</h2>
      <p>
        אם יש מקור ראשוני, מחקר, מסמך רשמי, תחקיר עצמאי או תיקון שמשנה את גבולות
        הבדיקה, אפשר לשלוח אותו לבדיקה חוזרת.
      </p>
      <a className="button-secondary" href="/corrections">שליחת מקור או תיקון</a>
    </section>
  );
}

function renderBlock(block: ClaimBodyBlock, claim: ClaimContent): ReactNode {
  switch (block.type) {
    case "answer-box":
      return (
        <section className={`box ${block.variant === "verdict" ? "verdict-box" : "answer"}`}>
          {block.eyebrow ? <span className="eyebrow">{block.eyebrow}</span> : null}
          <h2>{block.title}</h2>
          {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      );

    case "verdict-grid":
      return (
        <section className="box verdict-box">
          {block.title ? <h2>{block.title}</h2> : null}
          <div className="verdict-grid">
            {block.items.map((item) => (
              <div key={`${item.label}-${item.text}`}>
                <span className="eyebrow">{item.label}</span>
                <p>{item.emphasis ? <strong>{item.text}</strong> : item.text}</p>
              </div>
            ))}
          </div>
        </section>
      );

    case "evidence-list":
      return (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          <div className="evidence-list">
            {block.items.map((item, index) => (
              <section className="evidence-item" key={item.id}>
                {block.numbered ? <span className="evidence-number">{item.number ?? String(index + 1)}</span> : null}
                <div>
                  <h3>{item.title}</h3>
                  {item.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}
          </div>
        </section>
      );

    case "paragraph-section":
      return (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      );

    case "source-levels":
      return (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          <div className="source-levels">
            {block.rows.map((row) => (
              <div className="source-level" key={`${row.label}-${row.title}`}>
                <strong>{row.label}</strong>
                <div>
                  <h3>{row.title}</h3>
                  {row.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </div>
            ))}
          </div>
        </section>
      );

    case "comparison-list":
      return (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          <div className="comparison-list">
            {block.items.map((item) => (
              <div data-tone={item.tone} key={`${item.label}-${item.text}`}>
                <strong>{item.label}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </section>
      );

    case "logic-chain":
      return (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          <div className="logic-chain" aria-label={block.ariaLabel}>
            {block.steps.map((step, index) => (
              <Fragment key={step}>
                {index > 0 ? <span className="logic-arrow" aria-hidden="true">←</span> : null}
                <span>{step}</span>
              </Fragment>
            ))}
            {block.conclusion ? (
              <>
                <span className="logic-arrow" aria-hidden="true">←</span>
                <strong>{block.conclusion}</strong>
              </>
            ) : null}
          </div>
          {block.note ? <p className="small">{block.note}</p> : null}
        </section>
      );

    case "method-note":
      return (
        <section className="box method-note">
          {block.title ? <h2>{block.title}</h2> : null}
          {block.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      );

    case "faq":
      return (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          <div className="faq-list">
            {claim.faq.map((item) => (
              <details key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      );

    case "sources":
      return (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          <ol className="source-list source-cards">
            {claim.sources.map((source) => (
              <li key={source.id}>
                <span className="badge">{getSourceLabel(source)}</span>{" "}
                <a href={source.url} target="_blank" rel="noreferrer"><strong>{source.title}</strong></a>
                {source.note ? <p className="small">{source.note}</p> : null}
              </li>
            ))}
          </ol>
        </section>
      );

    case "gallery": {
      const exhibits = block.exhibitIds
        ? claim.exhibits?.filter((exhibit) => block.exhibitIds?.includes(exhibit.id))
        : claim.exhibits;
      return exhibits?.length ? (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          <EvidenceGallery exhibits={exhibits.map(({ src, alt, title, caption }) => ({ src, alt, title, caption }))} />
        </section>
      ) : null;
    }

    case "copy-share":
      return claim.shareCopy ? (
        <section>
          {block.title ? <h2>{block.title}</h2> : null}
          <CopyBox text={claim.shareCopy} />
        </section>
      ) : null;

    default:
      return null;
  }
}

export function ClaimBodyRenderer({ claim }: ClaimBodyRendererProps) {
  return (
    <>
      {claim.lead ? <p className="lead">{claim.lead}</p> : null}
      <ClaimScopeBox claim={claim} />
      {claim.body?.map((block) => <Fragment key={block.id}>{renderBlock(block, claim)}</Fragment>)}
      <CorrectionCta />
    </>
  );
}
