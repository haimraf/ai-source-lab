import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { House, LibraryBig, PencilLine, Search } from "lucide-react";

import { ReadingTimeInjector } from "@/components/ReadingTimeInjector";
import { siteUrl } from "@/lib/site";
import { createSiteSchema } from "@/lib/site-schema";

export function PublicSiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(createSiteSchema(siteUrl)) }} />
      <a className="skip-link" href="#main-content">דילוג לתוכן הראשי</a>

      <header className="site-header">
        <nav className="site-nav" aria-label="ניווט ראשי">
          <a className="brand" href="/" aria-label="מקור בדיקה, עמוד הבית">
            <span className="brand-mark" aria-hidden="true">מ</span>
            <span className="brand-copy">
              <strong>מקור בדיקה</strong>
              <small>מקור לפני מסקנה</small>
            </span>
          </a>
          <div className="mobile-header-actions" aria-label="פעולות מהירות במובייל">
            <a href="/topics#find-check"><Search aria-hidden="true" />חיפוש</a>
            <a href="/topics"><LibraryBig aria-hidden="true" />אשכולות</a>
          </div>
          <div className="nav-links">
            <a href="/#checks">בדיקות</a>
            <a href="/topics#find-check">חיפוש</a>
            <a href="/topics">אשכולות</a>
            <a href="/methodology">איך בודקים</a>
            <a href="/suggest-claim">הצע טענה</a>
            <a href="/about">אודות</a>
          </div>
        </nav>
      </header>

      <main id="main-content" className="container" tabIndex={-1}>{children}</main>
      <ReadingTimeInjector />

      <nav className="mobile-bottom-nav" aria-label="ניווט מהיר במובייל">
        <a href="/"><House aria-hidden="true" />בית</a>
        <a href="/topics#find-check"><Search aria-hidden="true" />חיפוש</a>
        <a href="/topics"><LibraryBig aria-hidden="true" />אשכולות</a>
        <a href="/suggest-claim"><PencilLine aria-hidden="true" />הצע</a>
      </nav>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-summary">
            <a className="footer-brand" href="/">מקור בדיקה</a>
            <p>בודקים טענות רשת, מקורות ומסמכים בלי לדלג מהכותרת למסקנה.</p>
            <span className="footer-seal">מקור לפני מסקנה</span>
          </div>
          <div>
            <strong>האתר</strong>
            <a href="/#checks">בדיקות</a>
            <a href="/topics#find-check">חיפוש חי</a>
            <a href="/topics">אשכולות נושא</a>
            <a href="/methodology">איך בודקים</a>
            <a href="/suggest-claim">הצע טענה לבדיקה</a>
            <a href="/about">אודות</a>
          </div>
          <div>
            <strong>אמון ושקיפות</strong>
            <a href="/how-to-cite">איך לצטט אותנו</a>
            <a href="/editorial-policy">מדיניות עריכה</a>
            <a href="/corrections">תיקונים ועדכונים</a>
            <a href="/privacy">פרטיות</a>
            <a href="/accessibility">הצהרת נגישות</a>
            <a href="https://github.com/haimraf/ai-source-lab" target="_blank" rel="noreferrer">שקיפות טכנית ב-GitHub</a>
          </div>
        </div>
        <p className="footer-note">בכל עמוד מופיעים המקורות שנבדקו, תאריך העדכון והפרדה בין עובדה, פרשנות וקפיצה לוגית.</p>
      </footer>

      <Analytics />
      <SpeedInsights />
    </>
  );
}
