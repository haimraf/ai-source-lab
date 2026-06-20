"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const RELEVANT_PAGE_PREFIXES = ["/claims/"];
const RELEVANT_STATIC_PAGES = new Set([
  "/about",
  "/methodology",
  "/editorial-policy",
  "/corrections",
  "/how-to-cite",
]);

function isRelevantPage(pathname: string) {
  return RELEVANT_PAGE_PREFIXES.some((prefix) => pathname.startsWith(prefix)) || RELEVANT_STATIC_PAGES.has(pathname);
}

function estimateReadingMinutes(text: string) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 210));
}

export function ReadingTimeInjector() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isRelevantPage(pathname)) return;

    const article = document.querySelector("main article");
    if (!article) return;

    article.querySelectorAll("[data-reading-time]").forEach((element) => element.remove());

    const minutes = estimateReadingMinutes(article.textContent ?? "");
    const readingTime = document.createElement("span");
    readingTime.className = "small reading-time";
    readingTime.dataset.readingTime = "true";
    readingTime.textContent = `זמן קריאה: ${minutes} דק׳`;

    const existingMeta = article.querySelector(".claim-meta");
    if (existingMeta) {
      existingMeta.appendChild(readingTime);
      return;
    }

    const hero = article.querySelector(".hero");
    if (hero) {
      const meta = document.createElement("div");
      meta.className = "claim-meta";
      meta.dataset.readingTime = "true";
      meta.appendChild(readingTime);
      hero.appendChild(meta);
    }
  }, [pathname]);

  return null;
}
