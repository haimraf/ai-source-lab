"use client";

import { useEffect, useState } from "react";

type Exhibit = {
  src: string;
  alt: string;
  title: string;
  caption: string;
};

export function EvidenceGallery({ exhibits }: { exhibits: Exhibit[] }) {
  const [active, setActive] = useState<Exhibit | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <div className="exhibit-grid">
        {exhibits.map((exhibit) => (
          <figure className="exhibit-card" key={exhibit.src}>
            <button className="exhibit-trigger" type="button" onClick={() => setActive(exhibit)}>
              <img src={exhibit.src} alt={exhibit.alt} />
              <span>לחיצה להגדלה</span>
            </button>
            <figcaption>
              <strong>{exhibit.title}</strong> {exhibit.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {active ? (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActive(null)}>
          <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
            <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="סגירת התמונה">
              ×
            </button>
            <img src={active.src} alt={active.alt} />
            <p><strong>{active.title}</strong> {active.caption}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
