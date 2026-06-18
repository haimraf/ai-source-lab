import type { MetadataRoute } from "next";
import { claimRecords, staticPages } from "@/lib/claims-db";
import { siteUrl } from "@/lib/site";

type SitemapSource = {
  path: string;
  updated: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: SitemapSource[] = Array.from(staticPages);
  claimRecords.forEach((claim) => pages.push(claim));

  return pages.map((page) => ({
    url: siteUrl + page.path,
    lastModified: page.updated,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
