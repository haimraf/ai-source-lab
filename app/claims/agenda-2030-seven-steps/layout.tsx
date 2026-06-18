import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

const url = `${siteUrl}/claims/agenda-2030-seven-steps`;
const title = "מהי תוכנית שבעת השלבים של אג׳נדה 2030? | מקור בדיקה";
const description = "בדיקת מקור מול מסמך רשמי.";

export const metadata: Metadata = {
  alternates: { canonical: "/claims/agenda-2030-seven-steps" },
  openGraph: { title, description, url, siteName: "מקור בדיקה", locale: "he_IL", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
