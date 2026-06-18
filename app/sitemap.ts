import type { MetadataRoute } from "next";
import { claimRecords, staticPages } from "@/lib/claims-db";
import { siteUrl } from "@/lib/site";

function toSitemapEntry(page: {
  path: string;
  updated: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}): MetadataRoute.Sitemap[number] {
  return {
    url: siteUrl + page.path,
    lastModified: page.updated,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map(toSitemapEntry),
    ...claimRecords.map(toSitemapEntry),
  ];
}
