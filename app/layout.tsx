import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "מקור בדיקה | פירוק טענות רשת",
  description: "ניסוי עברי שמפרק טענות רשת ליחידות בדיקה: מה נטען, מה ידוע, מה לא הוכח ואיפה נעשתה הקפיצה.",
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
            ניסוי פתוח: האתר אינו מחליף גוף בדיקת עובדות רשמי. כל עמוד מציג מקורות, תאריך בדיקה ורמת ודאות.
          </footer>
        </main>
      </body>
    </html>
  );
}
