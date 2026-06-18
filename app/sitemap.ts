import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/privacy",
    "/methodology",
    "/editorial-policy",
    "/corrections",
    "/topics",
    "/topics/agenda-2030",
    "/claims/agenda-2030-seven-steps",
    "/claims/xrp-global-currency",
    "/claims/chemtrails-aluminum",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route.startsWith("/claims/") ? "monthly" : "weekly",
    priority: route === "" ? 1 : route.startsWith("/claims/") ? 0.9 : 0.7,
  }));
}
