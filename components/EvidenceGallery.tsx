"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Maximize2, X } from "lucide-react";

type Exhibit = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export function EvidenceGallery({ exhibits }: { exhibits: Exhibit[] }) {
  const [active, setActive] = useState<Exhibit | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const captionId = useId();

  function openExhibit(exhibit: Exhibit, button: HTMLButtonElement) {
    openerRef.current = button;
    setActive(exhibit);
  }

  function closeExhibit() {
    setActive(null);
    window.setTimeout(() => openerRef.current?.focus(), 0);
  }

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeExhibit();
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return (
    <>
      <div className="exhibit-grid" id="evidence-gallery">
        {exhibits.map((exhibit) => (
          <figure className="exhibit-card" key={exhibit.src}>
            <button
              className="exhibit-trigger"
              type="button"
              onClick={(event) => openExhibit(exhibit, event.currentTarget)}
              aria-label={`פתיחת ${exhibit.title} בתצוגה מוגדלת`}
            >
              <img src={exhibit.src} alt={exhibit.alt} />
              <span aria-hidden="true"><Maximize2 />לחיצה להגדלה</span>
            </button>
            <figcaption>
              <strong>{exhibit.title}</strong> {exhibit.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby={captionId} onClick={closeExhibit}>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button
              ref={closeButtonRef}
              className="lightbox-close"
              type="button"
              onClick={closeExhibit}
              aria-label="סגירת התמונה המוגדלת"
            >
              <X aria-hidden="true" />
            </button>
            <img src={active.src} alt={active.alt} />
            <p id={captionId}><strong>{active.title}</strong> {active.caption}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
