import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedAgenda2030SevenStepsClaimContent = defineMigratedClaimContent({
  slug: "agenda-2030-seven-steps",
  path: "/claims/agenda-2030-seven-steps",
  title: "מהי תוכנית שבעת השלבים של אג׳נדה 2030?",
  description: "השוואה בין פוסטרים שמופצים ברשת לבין המסמך הרשמי של אג׳נדה 2030.",
  kicker: "אג׳נדה 2030",
  tags: ["אג׳נדה 2030", "האו״ם", "SDGs", "סדר עולמי", "מסמך רשמי"],
  verdict: "לא נמצא מקור רשמי לרשימת שבעת השלבים",
  cluster: "agenda-2030",
  updated: "2026-06-18",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת אג׳נדה 2030 ושבעת השלבים",
  claim: "הפוסטר מסכם תוכנית רשמית של האו״ם.",
  shortAnswer: "לא נמצאה תוכנית רשמית בת שבעה שלבים",
  bottomLine: "לא נמצא מסמך רשמי שתומך ברשימה.",
  summaryPoints: [
    "אג׳נדה 2030 כוללת 17 יעדים ו-169 מטרות.",
    "מיעדי פיתוח לרשימת מסקנות שלא מופיעה במקור.",
  ],
  overview: "המסמך הרשמי של אג׳נדה 2030 כולל 17 יעדים ו-169 מטרות. הפוסטרים שנבדקו מציגים רשימה אחרת, אך בבדיקה לא נמצא מקור רשמי של האו״ם שמנסח או מאשר את אותה רשימה.",
  sources: [
    { id: "un-resolution-70-1", title: "החלטת העצרת הכללית A/RES/70/1", url: "https://documents.un.org/doc/undoc/gen/n15/291/89/pdf/n1529189.pdf", level: "primary", note: "המסמך הרשמי שאימץ את אג׳נדה 2030 בשנת 2015." },
    { id: "un-2030-agenda", title: "עמוד אג׳נדה 2030 באתר האו״ם", url: "https://sdgs.un.org/2030agenda", level: "official", note: "עמוד רשמי שמציג את 17 היעדים ואת מטרות התוכנית." },
  ],
  faq: [],
});

export const agenda2030SevenStepsClaimContent = defineClaim({
  ...migratedAgenda2030SevenStepsClaimContent,
  lead: "אג׳נדה 2030 היא מסמך אמיתי של האו״ם. הרשימה שמופיעה בפוסטרים תחת הכותרת \"שבעת השלבים\" אינה מופיעה במסמך הרשמי.",
  shareCopy: `אג׳נדה 2030 היא מסמך אמיתי עם 17 יעדים ו-169 מטרות. הרשימה שמכונה "שבעת השלבים" לא נמצאה במסמך הרשמי. המסמך גם מדגיש את הריבונות של כל מדינה.
${siteUrl}/claims/agenda-2030-seven-steps`,
  exhibits: [
    {
      id: "agenda-2030-poster-1",
      src: "/evidence/agenda-2030-poster-1.webp",
      alt: "פוסטר ויראלי בעברית שמציג רשימת טענות על אג׳נדה 2030",
      title: "מוצג 1.",
      caption: "פוסטר בעברית שמחבר את אג׳נדה 2030 לשורה של טענות. מקורו הראשוני לא אותר.",
    },
    {
      id: "agenda-2030-poster-2",
      src: "/evidence/agenda-2030-poster-2.webp",
      alt: "פוסטר ויראלי שכותרתו תוכנית שבעת השלבים המוצעת של האו״ם",
      title: "מוצג 2.",
      caption: "פוסטר שמציג רשימה בת שבעה שלבים. הופעת תמונות בו אינה מוכיחה שהמצולמים כתבו או אישרו את הטקסט.",
    },
  ],
  body: [
    {
      id: "short-answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: "לא נמצאה תוכנית רשמית בת שבעה שלבים",
      paragraphs: [migratedAgenda2030SevenStepsClaimContent.sections[0].paragraphs[0]],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: "הפוסטר מסכם תוכנית רשמית של האו״ם." },
        { label: "השורה התחתונה", text: "לא נמצא מסמך רשמי שתומך ברשימה.", emphasis: true },
        { label: "מה כן נכון", text: "אג׳נדה 2030 כוללת 17 יעדים ו-169 מטרות." },
        { label: "איפה הסיפור קופץ", text: "מיעדי פיתוח לרשימת מסקנות שלא מופיעה במקור." },
      ],
    },
    {
      id: "claim-table",
      type: "comparison-list",
      title: "טבלת הטענה",
      items: [
        { label: "מה נטען:", text: "האו״ם פרסם תוכנית בת שבעה שלבים." },
        { label: "מה המקור אומר:", text: "המסמך הרשמי מציג 17 יעדים ו-169 מטרות." },
        { label: "מה נמצא:", text: "נמצא מסמך אג׳נדה 2030; לא נמצאה בו הרשימה מהפוסטר." },
        { label: "מה המסקנה:", text: "הפוסטר אינו מקור רשמי לאג׳נדה 2030." },
      ],
    },
    {
      id: "sixty-seconds",
      type: "method-note",
      title: "גרסת 60 שניות",
      paragraphs: ["יש מסמך אמיתי של האו״ם בשם אג׳נדה 2030. הוא אומץ בשנת 2015 ומציג 17 יעדי פיתוח בר-קיימא ו-169 מטרות. ברשת מסתובבים פוסטרים שמציגים \"שבעה שלבים\" ומייחסים אותם לאו״ם. בבדיקה מול המסמך הרשמי לא נמצאה חלוקה כזאת ולא נמצאה הרשימה שמופיעה בפוסטר. לכן נכון לומר: אג׳נדה 2030 קיימת, אבל רשימת שבעת השלבים כפי שמופצת ברשת לא נמצאה כמקור רשמי."],
    },
    {
      id: "official-document",
      type: "paragraph-section",
      title: "מה כתוב במסמך?",
      paragraphs: ["החלטת האו״ם A/RES/70/1 עוסקת בעוני, בריאות, חינוך, שוויון, תשתיות, סביבה ושיתוף פעולה. היא כוללת 17 יעדים ו-169 מטרות."],
    },
    {
      id: "evidence",
      type: "evidence-list",
      numbered: true,
      items: [
        { id: "official-document-exists", number: "01", title: "המסמך הרשמי קיים", paragraphs: ["העצרת הכללית של האו״ם אימצה אותו בספטמבר 2015."] },
        { id: "no-seven-steps", number: "02", title: "אין בו חלוקה לשבעה שלבים", paragraphs: ["החלוקה הרשמית היא ל-17 יעדים ול-169 מטרות."] },
        { id: "sovereignty-remains", number: "03", title: "הריבונות לא מבוטלת", paragraphs: ["המסמך מדגיש שלכל מדינה יש ריבונות על המשאבים והפעילות הכלכלית שלה."] },
        { id: "poster-adds-claims", number: "04", title: "הפוסטר מוסיף טענות משלו", paragraphs: ["כמה מהטענות הבולטות בפוסטרים לא נמצאו בטקסט הרשמי שנבדק."] },
      ],
    },
    {
      id: "poster-intro",
      type: "paragraph-section",
      title: "הפוסטרים שנבדקו",
      paragraphs: ["אלה דוגמאות לתוכן שמופץ ברשת. הן מוצגות כאן כדי לתעד את הטענה, לא כמקור שמוכיח אותה."],
    },
    { id: "posters", type: "gallery", source: "claim" },
    {
      id: "short-comparison",
      type: "comparison-list",
      title: "השוואה קצרה",
      items: [
        { label: "שבעת השלבים:", text: "לא נמצאו במסמך הרשמי." },
        { label: "סוף הריבונות:", text: "המסמך מדגיש ריבונות של מדינות." },
        { label: "17 יעדים ו-169 מטרות:", text: "כן, אלה מופיעים במסמך." },
        { label: "שיתוף פעולה וטכנולוגיה:", text: "כן, בהקשר של פיתוח וידע." },
      ],
    },
    {
      id: "claim-chain",
      type: "logic-chain",
      title: "שרשרת הטענה",
      steps: ["יש מסמך רשמי", "יש בו יעדים עולמיים", "ברשת נוספה רשימה אחרת"],
      conclusion: "הרשימה מוצגת כאילו נלקחה מהמסמך",
    },
    { id: "copy-share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    {
      id: "method",
      type: "method-note",
      title: "איך נבדקה הטענה?",
      paragraphs: ["השווינו בין שני הפוסטרים לבין מסמך האו״ם. מקורם הראשוני של הפוסטרים עדיין לא אותר."],
    },
  ],
  structuredData: {
    mode: "configured",
    entries: [{
      type: "article",
      placement: "page",
      headline: "מהי תוכנית שבעת השלבים של אג׳נדה 2030?",
      description: migratedAgenda2030SevenStepsClaimContent.description,
      datePublished: "2026-06-18",
      dateModified: "2026-06-18",
      inLanguage: "he-IL",
    }],
  },
  metadataOverrides: {
    title: `${migratedAgenda2030SevenStepsClaimContent.title} | מקור בדיקה`,
    description: migratedAgenda2030SevenStepsClaimContent.description,
    canonical: migratedAgenda2030SevenStepsClaimContent.path,
    openGraph: {
      title: `${migratedAgenda2030SevenStepsClaimContent.title} | מקור בדיקה`,
      description: "בדיקת מקור מול מסמך רשמי.",
      url: `${siteUrl}${migratedAgenda2030SevenStepsClaimContent.path}`,
      siteName: "מקור בדיקה",
      locale: "he_IL",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${migratedAgenda2030SevenStepsClaimContent.title} | מקור בדיקה`,
      description: "בדיקת מקור מול מסמך רשמי.",
    },
  },
} satisfies ClaimContent);
