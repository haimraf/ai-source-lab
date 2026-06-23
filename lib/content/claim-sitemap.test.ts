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
    expect(sitemapEntries).toHaveLength(19);
    expect(new Set(sitemapEntries.map((entry) => entry.path)).size).toBe(19);
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/15-minute-city-prison");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/monster-energy-666-logo");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/event-201-pandemic-exercise");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/spider-man-hand-sign");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/kal-el-hebrew-meaning");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/pallavicini-islam-responsibility");
    expect(sitemapEntries.map((entry) => entry.path)).toContain("/claims/great-reset-global-government");
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
      "Unable to locate existing claim sitemap block",
    );
  });

  it("fails instead of rewriting a non-contiguous claim block", () => {
    const nonContiguous = fixture.replace(
      `${firstClaimBlock}\r\n${secondClaimBlock}`,
      `${firstClaimBlock}\r\n${staticBlock}\r\n${secondClaimBlock}`,
    );

    expect(() => updateClaimSitemapXml(nonContiguous, entries)).toThrow(
      "Existing claim sitemap block is not contiguous",
    );
  });

  it("updates only stale claim entries and is idempotent", () => {
    const directory = mkdtempSync(join(tmpdir(), "claim-sitemap-"));
    temporaryDirectories.push(directory);
    const sitemapPath = join(directory, "sitemap.xml");
    writeFileSync(sitemapPath, fixture.replaceAll("\r\n", "\n"), "utf8");

    generateClaimSitemapFile(sitemapPath);
    const firstGenerated = readFileSync(sitemapPath, "utf8");
    generateClaimSitemapFile(sitemapPath);

    expect(readFileSync(sitemapPath, "utf8")).toBe(firstGenerated);
  });
});
