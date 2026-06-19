import { siteUrl } from "@/lib/site";

const pageUrl = `${siteUrl}/claims/ai-as-source-pyramids`;

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "אם המודל מצרף קישורים, זה לא מספיק?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "לא. צריך לפתוח את הקישור ולבדוק שהמקור באמת אומר את מה שהמודל מייחס לו. לפעמים הקישור אמיתי אבל המסקנה לא מופיעה בו.",
      },
    },
    {
      "@type": "Question",
      name: "אז אסור להשתמש ב-AI למחקר?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "מותר ואף שימושי. AI טוב כמפת דרכים, לא כתחנה אחרונה. משתמשים בו כדי למצוא מה לבדוק, ואז בודקים את המקור עצמו.",
      },
    },
    {
      "@type": "Question",
      name: "מה ההבדל בין מקור לבין סיכום?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "מקור הוא המסמך, המחקר, הנתון או העדות שאפשר לפתוח ולבדוק. סיכום הוא פרשנות או עיבוד של מקור, גם אם הוא נכתב יפה.",
      },
    },
    {
      "@type": "Question",
      name: "איזו ראיה הייתה משנה את המסקנה?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "לא תשובה של מודל, אלא מקור שניתן לפתוח: מחקר, מסמך, נתון, תיעוד או ציטוט מדויק שתומך בטענה עצמה.",
      },
    },
  ],
  mainEntityOfPage: pageUrl,
};

export default function AiAsSourceLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
