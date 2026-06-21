import { getPublishedClaimContent, type ClaimContentIndexEntry } from "./claim-loader";

export type ClaimSitemapEntry = {
  path: string;
  lastModified: string;
  changeFrequency: ClaimContentIndexEntry["changeFrequency"];
  priority: number;
};

const urlBlockPattern = /  <url>\r?\n[\s\S]*?  <\/url>/g;

export function getClaimSitemapEntries(
  claims: readonly ClaimContentIndexEntry[] = getPublishedClaimContent(),
): readonly ClaimSitemapEntry[] {
  return claims.map((claim) => ({
    path: claim.path,
    lastModified: claim.updated,
    changeFrequency: claim.changeFrequency,
    priority: claim.priority,
  }));
}

function getLoc(block: string): string | undefined {
  return block.match(/<loc>([^<]+)<\/loc>/)?.[1];
}

export function updateClaimSitemapXml(
  xml: string,
  entries: readonly ClaimSitemapEntry[] = getClaimSitemapEntries(),
): string {
  const blocks = Array.from(xml.matchAll(urlBlockPattern));
  const claimBlocks = blocks.filter((match) => {
    const loc = getLoc(match[0]);
    return loc ? new URL(loc).pathname.startsWith("/claims/") : false;
  });

  if (claimBlocks.length === 0) {
    throw new Error("Unable to locate existing claim sitemap block");
  }

  const first = blocks.indexOf(claimBlocks[0]);
  const last = blocks.indexOf(claimBlocks.at(-1)!);
  if (blocks.slice(first, last + 1).some((block) => !claimBlocks.includes(block))) {
    throw new Error("Existing claim sitemap block is not contiguous");
  }

  const firstLoc = getLoc(claimBlocks[0][0])!;
  const origin = new URL(firstLoc).origin;
  const newline = xml.includes("\r\n") ? "\r\n" : "\n";
  const generated = entries
    .map((entry) =>
      [
        "  <url>",
        `    <loc>${origin}${entry.path}</loc>`,
        `    <lastmod>${entry.lastModified}</lastmod>`,
        `    <changefreq>${entry.changeFrequency}</changefreq>`,
        `    <priority>${entry.priority.toFixed(1)}</priority>`,
        "  </url>",
      ].join(newline),
    )
    .join(newline);

  const start = claimBlocks[0].index!;
  const finalBlock = claimBlocks.at(-1)!;
  const end = finalBlock.index! + finalBlock[0].length;
  return `${xml.slice(0, start)}${generated}${xml.slice(end)}`;
}
