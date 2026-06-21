import { Fragment, type ReactNode } from "react";

import { CopyBox } from "./CopyBox";
import type { ClaimBodyBlock, ClaimContent } from "../lib/content/claim-schema";

interface ClaimBodyRendererProps {
  claim: ClaimContent;
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
                <a href={source.url} target="_blank" rel="noreferrer"><strong>{source.title}</strong></a>
                {source.note ? <p className="small">{source.note}</p> : null}
              </li>
            ))}
          </ol>
        </section>
      );

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
      {claim.body?.map((block) => <Fragment key={block.id}>{renderBlock(block, claim)}</Fragment>)}
    </>
  );
}
