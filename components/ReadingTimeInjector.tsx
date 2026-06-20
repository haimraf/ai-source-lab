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

    article.querySelectorAll(".reading-time-row").forEach((element) => element.remove());

    const title = article.querySelector("h1");
    if (!title || !title.parentNode) return;

    const minutes = estimateReadingMinutes(article.textContent ?? "");
    const row = document.createElement("div");
    row.className = "reading-time-row";

    const readingTime = document.createElement("span");
    readingTime.className = "small reading-time";
    readingTime.textContent = `⏱️ זמן קריאה: ${minutes} דק׳`;

    row.appendChild(readingTime);
    title.parentNode.insertBefore(row, title.nextSibling);
  }, [pathname]);

  return null;
}
