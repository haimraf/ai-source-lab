import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import "./theme.css";
import "./components.css";
import "./polish.css";
import "./accessibility.css";
import "./editorial-system.css";
import { ReadingTimeInjector } from "@/components/ReadingTimeInjector";
import { siteUrl } from "@/lib/site";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
});

const siteTitle = "מקור בדיקה | טענות, מקורות ומסקנות";
const siteDescription = "אתר עברי שבודק טענות רשת מול מקורות ומראה איפה העובדות נגמרות והמסקנות מתחילות.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
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
                <small><span className="link-icon" aria-hidden="true">🔎</span>מקור לפני מסקנה</small>
              </span>
            </a>
            <div className="mobile-header-actions" aria-label="פעולות מהירות במובייל">
              <a href="/topics#find-check"><span className="link-icon" aria-hidden="true">🔎</span>חיפוש</a>
              <a href="/suggest-claim"><span className="link-icon" aria-hidden="true">✍️</span>הצעה</a>
            </div>
            <div className="nav-links">
              <a href="/#checks"><span className="link-icon" aria-hidden="true">📚</span>בדיקות</a>
              <a href="/topics#find-check"><span className="link-icon" aria-hidden="true">🔎</span>חיפוש</a>
              <a href="/topics"><span className="link-icon" aria-hidden="true">🧭</span>נושאים</a>
              <a href="/methodology"><span className="link-icon" aria-hidden="true">🧪</span>איך בודקים</a>
              <a href="/suggest-claim"><span className="link-icon" aria-hidden="true">✍️</span>הצע טענה</a>
              <a href="/about"><span className="link-icon" aria-hidden="true">🧑‍💻</span>אודות</a>
            </div>
          </nav>
        </header>

        <main id="main-content" className="container" tabIndex={-1}>{children}</main>
        <ReadingTimeInjector />

        <nav className="mobile-bottom-nav" aria-label="ניווט מהיר במובייל">
          <a href="/"><span aria-hidden="true">🏠</span>בית</a>
          <a href="/topics#find-check"><span aria-hidden="true">🔎</span>חיפוש</a>
          <a href="/topics"><span aria-hidden="true">🧭</span>נושאים</a>
          <a href="/suggest-claim"><span aria-hidden="true">✍️</span>הצע</a>
        </nav>

        <footer className="site-footer">
          <div className="footer-grid">
            <div className="footer-summary">
              <a className="footer-brand" href="/"><span className="link-icon" aria-hidden="true">🔎</span>מקור בדיקה</a>
              <p>בודקים טענות רשת, מקורות ומסמכים בלי לדלג מהכותרת למסקנה.</p>
              <span className="footer-seal"><span className="link-icon" aria-hidden="true">🧭</span>מקור לפני מסקנה</span>
            </div>
            <div>
              <strong><span className="link-icon" aria-hidden="true">🗂️</span>האתר</strong>
              <a href="/#checks"><span className="link-icon" aria-hidden="true">📚</span>בדיקות</a>
              <a href="/topics#find-check"><span className="link-icon" aria-hidden="true">🔎</span>חיפוש חי</a>
              <a href="/topics"><span className="link-icon" aria-hidden="true">🧭</span>מפת נושאים</a>
              <a href="/methodology"><span className="link-icon" aria-hidden="true">🧪</span>איך בודקים</a>
              <a href="/suggest-claim"><span className="link-icon" aria-hidden="true">✍️</span>הצע טענה לבדיקה</a>
              <a href="/about"><span className="link-icon" aria-hidden="true">🧑‍💻</span>אודות</a>
            </div>
            <div>
              <strong><span className="link-icon" aria-hidden="true">🛡️</span>אמון ושקיפות</strong>
              <a href="/how-to-cite"><span className="link-icon" aria-hidden="true">🔗</span>איך לצטט אותנו</a>
              <a href="/editorial-policy"><span className="link-icon" aria-hidden="true">📌</span>מדיניות עריכה</a>
              <a href="/corrections"><span className="link-icon" aria-hidden="true">🛠️</span>תיקונים ועדכונים</a>
              <a href="/privacy"><span className="link-icon" aria-hidden="true">🔒</span>פרטיות</a>
              <a href="/accessibility"><span className="link-icon" aria-hidden="true">♿</span>הצהרת נגישות</a>
              <a href="https://github.com/haimraf/ai-source-lab" target="_blank" rel="noreferrer"><span className="link-icon" aria-hidden="true">💻</span>שקיפות טכנית ב-GitHub</a>
            </div>
          </div>
          <p className="footer-note"><span className="link-icon" aria-hidden="true">🧾</span>בכל עמוד מופיעים המקורות שנבדקו, תאריך העדכון והפרדה בין עובדה, פרשנות וקפיצה לוגית.</p>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
