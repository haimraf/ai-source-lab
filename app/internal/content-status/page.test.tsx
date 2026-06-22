import { readFileSync } from "node:fs";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { claimContentRecords } from "../../../content/claims";
import ContentStatusPage, { metadata } from "./page";

describe("read-only content status page", () => {
  it("renders every claim and aggregate claim count in a static semantic report", () => {
    const html = renderToStaticMarkup(<ContentStatusPage />);

    for (const claim of claimContentRecords) {
      expect(html).toContain(claim.slug);
      expect(html).toContain(claim.title);
    }
    expect(html).toContain(`<strong>${claimContentRecords.length}</strong>`);
    expect(html).toContain("<table");
    expect(html).toContain("9/9");
    expect(html).not.toMatch(/<(form|input|select|button)\b/i);
    expect(html).not.toContain("href=");
  });

  it("exports noindex and nofollow metadata", () => {
    expect(metadata.robots).toEqual({ index: false, follow: false });
  });

  it("stays out of public discovery surfaces", () => {
    const sitemap = readFileSync("public/sitemap.xml", "utf8");
    const layout = readFileSync("app/layout.tsx", "utf8");
    const llmsRoute = readFileSync("app/llms.txt/route.ts", "utf8");

    expect(sitemap).not.toContain("/internal/content-status");
    expect(layout).not.toContain("/internal/content-status");
    expect(llmsRoute).not.toContain("/internal/content-status");
  });

  it("uses the site's dark theme tokens instead of white fallback surfaces", () => {
    const css = readFileSync("app/internal/content-status/page.module.css", "utf8");

    expect(css).toContain("background: var(--panel);");
    expect(css).toContain("background: var(--panel-strong);");
    expect(css).toContain("border: 1px solid var(--border);");
    expect(css).toContain("color: var(--muted);");
    expect(css).not.toContain("--color-surface");
    expect(css).not.toContain("#fff");
  });
});
