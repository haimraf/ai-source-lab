const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL ||
  "localhost:3000";

export const siteUrl = configuredUrl.startsWith("http")
  ? configuredUrl.replace(/\/$/, "")
  : `${configuredUrl === "localhost:3000" ? "http" : "https"}://${configuredUrl.replace(/\/$/, "")}`;
