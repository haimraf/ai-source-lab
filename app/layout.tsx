import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./theme.css";
import "./components.css";
import "./polish.css";
import "./accessibility.css";
import "./editorial-system.css";
import { siteUrl } from "@/lib/site";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
});

const siteTitle = "מקור בדיקה | טענות, מקורות ומסקנות";
const siteDescription = "אתר עברי שבודק טענות רשת מול מקורות ומראה איפה העובדות נגמרות והמסקנות מתחילות.";
const ogVersion = "editorial-file-v4";
const homeOgImage = `${siteUrl}/api/og/home?version=${ogVersion}`;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "מקור בדיקה",
    locale: "he_IL",
    type: "website",
    images: [
      {
        url: homeOgImage,
        width: 1200,
        height: 630,
        alt: "מקור בדיקה - תיק מקור ובדיקת טענות",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [homeOgImage],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className={heebo.className}>
        <a className="skip-link" href="#main-content">דילוג לתוכן הראשי</a>

        <header className="site-header">
          <nav className="site-nav" aria-label="ניווט ראשי">
            <a className="brand" href="/" aria-label="מקור בדיקה, עמוד הבית">
              <span className="brand-mark" aria-hidden="true">מ</span>
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

        <main id="main-content" className="container" tabIndex={-1}>{children}</main>

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
              <a href="/privacy">פרטיות</a>
              <a href="/accessibility">הצהרת נגישות</a>
              <a href="https://github.com/haimraf/ai-source-lab" target="_blank" rel="noreferrer">קוד פתוח ב-GitHub</a>
            </div>
          </div>
          <p className="footer-note">בכל עמוד מופיעים המקורות שנבדקו ותאריך העדכון.</p>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
