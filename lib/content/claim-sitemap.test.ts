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

const PUBLISHED_CLAIM_COUNT = 26;

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
    const sitemapPaths = sitemapEntries.map((entry) => entry.path);

    expect(sitemapEntries).toEqual(
      getPublishedClaimContent().map((claim) => ({
        path: claim.path,
        lastModified: claim.updated,
        changeFrequency: claim.changeFrequency,
        priority: claim.priority,
      })),
    );
    expect(sitemapEntries).toHaveLength(PUBLISHED_CLAIM_COUNT);
    expect(new Set(sitemapPaths).size).toBe(PUBLISHED_CLAIM_COUNT);
    expect(sitemapPaths).toContain("/claims/15-minute-city-prison");
    expect(sitemapPaths).toContain("/claims/monster-energy-666-logo");
    expect(sitemapPaths).toContain("/claims/event-201-pandemic-exercise");
    expect(sitemapPaths).toContain("/claims/moon-landing-flag-shadows-stars");
    expect(sitemapPaths).toContain("/claims/mrna-vaccines-dna-genome");
    expect(sitemapPaths).toContain("/claims/iso-20022-global-currency");
    expect(sitemapPaths).toContain("/claims/covid-supplements-vitamin-d-zinc-cure");
    expect(sitemapPaths).not.toContain("/claims/fifteen-minute-city-prison");
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
    expect(() => updateClaimSitemapXml(staticBlock, entries)).toThrow("Unable to locate existing claim sitemap block");
  });

  it("writes the generated sitemap file", () => {
    const directory = mkdtempSync(join(tmpdir(), "claim-sitemap-"));
    temporaryDirectories.push(directory);
    const path = join(directory, "sitemap.xml");
    writeFileSync(path, fixture, "utf-8");

    generateClaimSitemapFile(path);

    const generated = readFileSync(path, "utf-8");
    expect(generated).toContain("<loc>https://example.com/claims/15-minute-city-prison</loc>");
    expect(generated).toContain("<loc>https://example.com/claims/monster-energy-666-logo</loc>");
    expect(generated).not.toContain("old-one");
    expect(generated).not.toContain("old-two");
  });
});
