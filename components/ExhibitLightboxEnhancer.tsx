"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type ActiveImage = {
  src: string;
  alt: string;
};

export function ExhibitLightboxEnhancer() {
  const [active, setActive] = useState<ActiveImage | null>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const link = target.closest<HTMLAnchorElement>(".exhibit-card a");
      if (!link) return;

      const image = link.querySelector<HTMLImageElement>("img");
      if (!image) return;

      event.preventDefault();
      setActive({ src: image.currentSrc || image.src, alt: image.alt });
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }

    document.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!active) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="תצוגת תמונה" onClick={() => setActive(null)}>
      <div className="lightbox-panel" onClick={(event) => event.stopPropagation()}>
        <button className="lightbox-close" type="button" onClick={() => setActive(null)} aria-label="סגירת התמונה"><X aria-hidden="true" /></button>
        <img src={active.src} alt={active.alt} />
      </div>
    </div>
  );
}
