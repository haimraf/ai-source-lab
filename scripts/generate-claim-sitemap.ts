import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { updateClaimSitemapXml } from "../lib/content/claim-sitemap";

export function generateClaimSitemapFile(sitemapPath = "public/sitemap.xml"): boolean {
  const current = readFileSync(sitemapPath, "utf8");
  const generated = updateClaimSitemapXml(current);
  if (generated === current) return false;

  writeFileSync(sitemapPath, generated, "utf8");
  return true;
}

const executedFile = process.argv[1] ? pathToFileURL(resolve(process.argv[1])).href : undefined;
if (executedFile === import.meta.url) {
  generateClaimSitemapFile();
}
