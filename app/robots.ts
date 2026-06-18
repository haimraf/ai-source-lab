import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const allowedBots = [
  "*",
  "OAI-SearchBot",
  "GPTBot",
  "PerplexityBot",
  "Googlebot",
  "Google-Extended",
  "Bingbot",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: allowedBots.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
