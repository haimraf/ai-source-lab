type IntegrityInput = {
  claimPaths: readonly string[];
  topicPaths: readonly string[];
  sitemapPaths: ReadonlySet<string>;
  fileExists: (path: string) => boolean;
};

export function findContentIntegrityIssues(input: IntegrityInput) {
  const issues: string[] = [];

  for (const route of [...input.claimPaths, ...input.topicPaths]) {
    if (!input.sitemapPaths.has(route)) issues.push(`Missing sitemap URL: ${route}`);
    const pageFile = `app${route}/page.tsx`;
    if (!input.fileExists(pageFile)) issues.push(`Missing page file: ${pageFile}`);

    if (route.startsWith("/claims/")) {
      const ogFile = `app${route}/opengraph-image.tsx`;
      if (!input.fileExists(ogFile)) issues.push(`Missing OG file: ${ogFile}`);
    }
  }

  return issues;
}
