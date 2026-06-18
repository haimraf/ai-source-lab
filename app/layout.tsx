import type { Metadata } from "next";
import "./globals.css";
import "./theme.css";
import "./components.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "מקור בדיקה | טענות, מקורות ומסקנות",
  description: "אתר עברי שבודק טענות רשת מול מקורות ומראה איפה העובדות נגמרות והמסקנות מתחילות.",
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>
        <header className="site-header">
          <nav className="site-nav" aria-label="ניווט ראשי">
            <a className="brand" href="/">
              <span className="brand-mark">מ</span>
              <span className="brand-copy">
                <strong>מקור בדיקה</strong>
                <small>טענות, מקורות ומסקנות</small>
              </span>
            </a>
            <div className="nav-links">
              <a href="/#checks">בדיקות</a>
              <a href="/topics">נושאים</a>
              <a href="/methodology">איך בודקים</a>
              <a href="/about">אודות</a>
            </div>
          </nav>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <div className="footer-grid">
            <div>
              <a className="footer-brand" href="/">מקור בדיקה</a>
              <p>בדיקות בעברית שמתחילות במקור, לא בכותרת.</p>
            </div>
            <div>
              <strong>האתר</strong>
              <a href="/about">אודות</a>
              <a href="/methodology">מתודולוגיה</a>
              <a href="/topics">מפת נושאים</a>
            </div>
            <div>
              <strong>אמון ושקיפות</strong>
              <a href="/editorial-policy">מדיניות עריכה</a>
              <a href="/corrections">תיקונים ועדכונים</a>
              <a href="https://github.com/haimraf/ai-source-lab" target="_blank" rel="noreferrer">קוד פתוח ב-GitHub</a>
            </div>
          </div>
          <p className="footer-note">בכל עמוד מופיעים המקורות שנבדקו ותאריך העדכון.</p>
        </footer>
      </body>
    </html>
  );
}
