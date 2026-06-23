import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { afterEach, describe, expect, it } from "vitest";

import { getPublishedClaimContent } from "./claim-loader";
import {
  getClaimSitemapEntries,
  updateClaimSitemapXml,
  type ClaimSitemapEntry,
} from "./claim-sitemap";
import { generateClaimSitemapFile } from "../../scripts/generate-claim-sitemap";

const temporaryDirectories: string[] = [];

const PUBLISHED_CLAIM_COUNT = 23;

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    rmSync(directory, { recursive: true, force: true });
  }
});

const staticBlock = [
  "  <url>",
  "    <loc>https://example.com/about</loc>",
  "    <lastmod>2026-06-19</lastmod>",
  "    <changefreq>weekly</changefreq>",
  "    <priority>0.7</priority>",
  "  </url>",
].join("\r\n");

const firstClaimBlock = [
  "  <url>",
  "    <loc>https://example.com/claims/old-one</loc>",
  "    <lastmod>2026-01-01</lastmod>",
  "    <changefreq>monthly</changefreq>",
  "    <priority>0.9</priority>",
  "  </url>",
].join("\r\n");

const secondClaimBlock = firstClaimBlock.replace("old-one", "old-two");
const fixture = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  staticBlock,
  firstClaimBlock,
  secondClaimBlock,
  "</urlset>",
  "",
].join("\r\n");

const entries: readonly ClaimSitemapEntry[] = [
  {
    path: "/claims/15-minute-city-prison",
    lastModified: "2026-06-20",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/claims/example",
    lastModified: "2026-06-21",
    changeFrequency: "weekly",
    priority: 0.8,
  },
];

describe("claim sitemap", () => {
  it("maps every published claim from its public path", () => {
    const sitemapEntries = getClaimSitemapEntries();

    expect(sitemapEntries).toEqual(
      getPublishedClaimContent().map((claim) => ({
        path: claim.path,
        lastModified: claim.updated,
        changeFrequency: claim.changeFrequency,
        priority: claim.priority,
      })),
    );
    expect(sitemapEntries).toHaveLength(PUBLISHED_CLAIM_COUNT);
    expect(new Set(sitemapEntries.map((entry) => entry.path)).size).toBe(PUBLISHED_CLAIM_COUNT);
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/15-minute-city-prison");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/monster-energy-666-logo");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/event-201-pandemic-exercise");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/spider-man-hand-sign");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/kal-el-hebrew-meaning");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/pallavicini-islam-responsibility");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/great-reset-global-government");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/rockefeller-lock-step-pandemic-scenario");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/haarp-earthquakes");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/bill-gates-vaccines-population-reduction");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/moon-landing-flag-shadows-stars");
    expect(sitemapEntries.map((entry) => entry.path)).not.toContain("/claims/fifteen-minute-city-prison");
  });

  it("replaces only the contiguous claim block and preserves XML formatting", () => {
    const generated = updateClaimSitemapXml(fixture, entries);

    expect(generated).toContain(staticBlock);
    expect(generated).toContain("<loc>https://example.com/claims/15-minute-city-prison</loc>");
    expect(generated).toContain("<lastmod>2026-06-20</lastmod>");
    expect(generated).toContain("<changefreq>weekly</changefreq>");
    expect(generated).toContain("<priority>0.8</priority>");
    expect(generated).not.toContain("old-one");
    expect(generated).not.toContain("old-two");
    expect(generated).not.toContain("\n  <url>\n");
  });

  it("changes generated XML when content-backed sitemap fields drift", () => {
    const current = updateClaimSitemapXml(fixture, entries);
    const changed = updateClaimSitemapXml(current, [
      { ...entries[0], lastModified: "2026-06-21" },
      entries[1],
    ]);

    expect(changed).not.toBe(current);
  });

  it("fails instead of rewriting when no claim block exists", () => {
    const staticOnly = fixture.replace(`${firstClaimBlock}\r\n${secondClaimBlock}\r\n`, "");

    expect(() => updateClaimSitemapXml(staticOnly, entries)).toThrow(
      "Could not find contiguous claim sitemap block to replace",
    );
  });

  it("writes the generated sitemap file", () => {
    const directory = mkdtempSync(join(tmpdir(), "claim-sitemap-"));
    temporaryDirectories.push(directory);
    const filePath = join(directory, "sitemap.xml");
    writeFileSync(filePath, fixture);

    generateClaimSitemapFile({ filePath, siteUrl: "https://example.com" });

    const generated = readFileSync(filePath, "utf8");
    const normalized = generated.replace(/\r\n/g, "\n");

    expect(normalized).toContain("https://example.com/claims/15-minute-city-prison");
    expect(normalized).not.toContain("https://example.com/claims/old-one");
  });
});
