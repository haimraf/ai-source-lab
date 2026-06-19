import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const allowedBots = [
  "*",
  "Googlebot",
  "Bingbot",
  "BingPreview",
  "DuckDuckBot",
  "Applebot",
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-User",
  "anthropic-ai",
  "Google-Extended",
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
