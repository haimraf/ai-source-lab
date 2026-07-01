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

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "האם שובלי מטוסים הם תמיד ריסוס?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "לא. שובלים לבנים מאחורי מטוסים יכולים להיות שובלי התעבות שנוצרים מתנאי לחות, קור ופליטת מנועים בגובה.",
      },
    },
    {
      "@type": "Question",
      name: "האם קיימת זריעת עננים?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "כן, קיימות פעולות מוכרות לשינוי מזג אוויר או זריעת עננים. זה לא מוכיח שכל שובלי המטוסים הם ריסוס חשאי של אלומיניום.",
      },
    },
    {
      "@type": "Question",
      name: "מה צריך כדי להוכיח ריסוס אלומיניום?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "צריך ראיה ישירה שמקשרת בין טיסה מסוימת, חומר מסוים, כמות מדידה ומנגנון פעולה. צילום של פס לבן בשמיים אינו מספיק.",
      },
    },
  ],
  mainEntityOfPage: url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {children}
    </>
  );
}
