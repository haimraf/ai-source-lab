import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "מקור בדיקה | פירוק טענות רשת",
  description: "אתר עברי שבודק טענות רשת מול מקורות ומפריד בין עובדה למסקנה.",
  metadataBase: new URL(siteUrl),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <main className="container">
          <nav className="nav">
            <a className="brand" href="/">מקור בדיקה</a>
            <div className="nav-links">
              <a href="/methodology">מתודולוגיה</a>
              <a href="/#claims">טענות</a>
            </div>
          </nav>
          {children}
          <footer className="footer">
            בכל עמוד מופיעים המקורות שנבדקו ותאריך העדכון.
          </footer>
        </main>
      </body>
    </html>
  );
}
