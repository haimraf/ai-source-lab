import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

const url = `${siteUrl}/claims/xrp-global-currency`;
const title = "האם XRP נבחר להיות המטבע העולמי? | מקור בדיקה";
const description = "בדיקה מבוססת מקורות רשמיים לטענה ש-XRP נבחר להיות מטבע עולמי, מטבע רזרבה או תחליף למטבעות מדינתיים.";

export const metadata: Metadata = {
  alternates: { canonical: "/claims/xrp-global-currency" },
  openGraph: { title, description, url, siteName: "מקור בדיקה", locale: "he_IL", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
