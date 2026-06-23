import type { Metadata } from "next";
import { siteUrl } from "@/lib/site";

const url = `${siteUrl}/claims/agenda-2030-seven-steps`;
const title = "האם קיימת תוכנית רשמית בת שבעה שלבים של אג׳נדה 2030? | מקור בדיקה";
const description = "אג׳נדה 2030 קיימת; רשימת שבעת השלבים לא נמצאה במסמך הרשמי.";

export const metadata: Metadata = {
  alternates: { canonical: "/claims/agenda-2030-seven-steps" },
  openGraph: { title, description, url, siteName: "מקור בדיקה", locale: "he_IL", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
