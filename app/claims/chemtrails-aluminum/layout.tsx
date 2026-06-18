import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

const url = `${siteUrl}/claims/chemtrails-aluminum`;
const title = "שובלי מטוסים וטענות על ריסוס | מקור בדיקה";
const description = "בדיקת מקור מול מקורות תעופה, סביבה ומזג אוויר.";

export const metadata: Metadata = {
  alternates: { canonical: "/claims/chemtrails-aluminum" },
  openGraph: { title, description, url, siteName: "מקור בדיקה", locale: "he_IL", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
