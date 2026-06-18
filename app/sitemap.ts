import type { MetadataRoute } from "next";
import { claimRecords, staticPages } from "@/lib/claims-db";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticPages.concat(claimRecords);

  return pages.map((page) => ({
    url: siteUrl + page.path,
    lastModified: page.updated,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
