import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedDigitalShekelControlClaimContent = defineMigratedClaimContent({
  slug: "digital-shekel-spending-control",
  path: "/claims/digital-shekel-spending-control",
  title: "האם שקל דיגיטלי יאפשר להגביל קניות?",
  description: "בדיקה של הטענה ששקל דיגיטלי יאפשר למדינה או לבנק ישראל לקבוע מה אזרחים יכולים לקנות, ממי, מתי ובאיזה מקום.",
  kicker: "שקל דיגיטלי ו-CBDC",
  tags: ["שקל דיגיטלי", "CBDC", "בנק ישראל", "פרטיות", "כסף דיגיטלי"],
  verdict: "יש שאלות אמיתיות על CBDC ופרטיות; לא נמצאה תוכנית ישראלית להגביל קניות אזרחים",
  cluster: "digital-money",
  updated: "2026-06-21",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ששקל דיגיטלי יאפשר להגביל קניות",
  claim: "שקל דיגיטלי יאפשר לבנק ישראל או למדינה להגביל לאזרחים מה הם יכולים לקנות, ממי, מתי ובאיזה מקום.",
  shortAnswer: "החשש עוסק בנושא אמיתי, אבל הטענה על שליטה בפועל לא הוכחה במקורות שנבדקו.",
  bottomLine: "לא נמצא מקור רשמי שמראה תוכנית ישראלית להגביל קניות אזרחים באמצעות שקל דיגיטלי.",
  summaryPoints: [
    "בנק ישראל אכן בוחן שקל דיגיטלי, ו-CBDC מעלה שאלות אמיתיות על פרטיות, עיצוב מערכת ותשלומים מותנים.",
    "הקפיצה היא ממחקר והיערכות למטבע דיגיטלי למסקנה שכבר קיימת תוכנית לשלוט בהוצאות אזרחים.",
  ],
  overview: "שקל דיגיטלי הוא נושא אמיתי שבנק ישראל חוקר ומכין סביבו תרחישים וניסויים. אבל צריך להפריד בין עצם המחקר, שאלות לגיטימיות על פרטיות ועיצוב, לבין טענה חזקה בהרבה: שכבר קיימת תוכנית להגביל לאזרחים מה לקנות. בבדיקה הזו לא נמצא מקור רשמי שמראה תוכנית כזו.",
  sources: [
    {
      id: "reuters-digital-shekel",
      title: "Reuters — Bank of Israel waiting for digital euro ahead of digital shekel launch",
      url: "https://www.reuters.com/markets/currencies/bank-israel-waiting-digital-euro-ahead-digital-shekel-launch-2024-07-10/",
      level: "secondary",
      note: "דיווח על מצב ההיערכות של בנק ישראל, כולל העובדה שגם עם הכנות מתקדמות לא בטוח שהשקל הדיגיטלי יונפק בפועל.",
    },
    {
      id: "ecb-digital-euro-privacy",
      title: "Reuters — Digital euro likely but not inevitable, ECB digital currency chief says",
      url: "https://www.reuters.com/markets/currencies/digital-euro-likely-not-inevitable-ecb-digital-currency-chief-says-2024-06-05/",
      level: "secondary",
      note: "הקשר אירופי חשוב: ה-ECB הדגיש שהאירו הדיגיטלי לא מיועד להיות כסף מתוכנת שמוגבל לשימושים מסוימים.",
    },
    {
      id: "ecb-conditional-payments",
      title: "Reuters interview with ECB board member Cipollone",
      url: "https://www.reuters.com/markets/europe/reuters-interview-with-ecb-board-member-cipollone-2025-02-06/",
      level: "secondary",
      note: "רקע להבחנה בין תשלומים מותנים לבין כסף שמוגבל מראש לפי מטרה או זהות המשתמש.",
    },
  ],
  faq: [
    {
      question: "האם אין בכלל סיכון בפרויקט כזה?",
      answer: "לא זו המסקנה. CBDC מעלה שאלות אמיתיות על פרטיות, זהות, תפקיד מתווכים, תשלומים לא מקוונים ואמון ציבורי. המסקנה הצרה היא שלא נמצא מקור שמוכיח תוכנית ישראלית להגביל קניות.",
    },
    {
      question: "האם בנק ישראל כבר החליט להנפיק שקל דיגיטלי?",
      answer: "לפי הדיווחים שנבדקו, בנק ישראל נערך ומתנסה, אבל עדיין לא בטוח שהשקל הדיגיטלי יונפק בפועל. אם יוחלט על השקה, נדרשים שלבי אישור והטמעה נוספים.",
    },
    {
      question: "מה ההבדל בין תשלום מותנה לכסף מתוכנת?",
      answer: "תשלום מותנה יכול להיות למשל תשלום שמתבצע רק אם תנאי שירות התקיים. כסף מתוכנת במובן הקשה הוא כסף שמוגבל מראש לשימושים מסוימים. אלה לא אותו דבר.",
    },
    {
      question: "איזה מקור היה משנה את המסקנה?",
      answer: "מסמך רשמי שמציג מנגנון להגבלת קניות אזרחים לפי מוצר, מקום, זמן או זהות, או הודעת מדיניות מפורשת של בנק ישראל או המדינה על כוונה כזו.",
    },
  ],
});

export const digitalShekelSpendingControlClaimContent = defineClaim({
  ...migratedDigitalShekelControlClaimContent,
  lead: "החשש משקל דיגיטלי לא נולד משום מקום: מטבעות דיגיטליים של בנקים מרכזיים באמת מעלים שאלות על פרטיות, תפקיד המדינה ועיצוב המערכת. אבל הבדיקה כאן שואלת דבר חד יותר: האם נמצא מקור שמראה שבישראל כבר מתוכננת שליטה במה שאזרחים קונים.",
  shareCopy: `בנק ישראל אכן בוחן שקל דיגיטלי, ויש שאלות אמיתיות על פרטיות ועיצוב המערכת. אבל מהמקורות שנבדקו כאן לא עולה שכבר קיימת תוכנית ישראלית להגביל לאזרחים מה הם יכולים לקנות. הקפיצה היא מ״CBDC נחקר״ ל״שליטה בפועל בהוצאות״.
${siteUrl}/claims/digital-shekel-spending-control`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: migratedDigitalShekelControlClaimContent.shortAnswer,
      paragraphs: [
        migratedDigitalShekelControlClaimContent.sections[0].paragraphs[0],
        "אפשר וצריך לשאול שאלות על פרטיות ועל עיצוב מערכת. אבל כדי לקבוע שיש תוכנית שליטה, צריך מקור רשמי שמראה את המנגנון או ההחלטה.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedDigitalShekelControlClaimContent.claim },
        { label: "השורה התחתונה", text: migratedDigitalShekelControlClaimContent.bottomLine, emphasis: true },
        { label: "מה כן נכון", text: migratedDigitalShekelControlClaimContent.summaryPoints[0] },
        { label: "איפה הסיפור קופץ", text: migratedDigitalShekelControlClaimContent.summaryPoints[1] },
      ],
    },
    {
      id: "claim-table",
      type: "comparison-list",
      title: "טבלת הטענה",
      items: [
        { label: "מה נטען:", text: "שקל דיגיטלי יאפשר למדינה להגביל בפועל מה אזרחים קונים." },
        { label: "מה נמצא:", text: "מחקר, היערכות וניסויים סביב שקל דיגיטלי ומטבעות בנק מרכזי." },
        { label: "מה לא נמצא:", text: "מקור רשמי שמציג תוכנית ישראלית להגבלת רכישות אזרחים." },
        { label: "המסקנה:", text: "החשש שווה בדיקה, אבל הטענה הנחרצת דורשת ראיה שלא נמצאה כאן.", emphasis: true },
      ],
    },
    {
      id: "bonus",
      type: "method-note",
      title: "עובדת בונוס",
      paragraphs: [
        "הנקודה הכי חזקה בבדיקה היא שבנק ישראל עצמו, לפי הדיווחים, עדיין לא בהכרח החליט להנפיק שקל דיגיטלי. כלומר הטענה הוויראלית מדלגת לא רק משאלת עיצוב לשאלת שליטה, אלא גם ממחקר והיערכות להנחה שהמערכת כבר בדרך להשקה מלאה.",
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים",
      numbered: true,
      items: [
        {
          id: "research",
          number: "01",
          title: "היערכות אינה השקה",
          paragraphs: [
            "המקורות מתארים מחקר, ניסויים והיערכות. אלה שלבים חשובים, אבל הם אינם שקולים להחלטה סופית להנפיק מטבע או לקבוע כללי שימוש מחייבים.",
          ],
        },
        {
          id: "privacy",
          number: "02",
          title: "פרטיות היא שאלה אמיתית",
          paragraphs: [
            "CBDC יכול להיות מתוכנן בדרכים שונות. לכן פרטיות, זהות, מידע על עסקאות ותפקיד מתווכים הם נושאים אמיתיים לבדיקה ציבורית.",
          ],
        },
        {
          id: "programmability",
          number: "03",
          title: "תשלום מותנה אינו בהכרח שליטה בהוצאות",
          paragraphs: [
            "בדיונים על מטבעות דיגיטליים קיימת הבחנה בין תשלומים שמותנים באירוע לבין כסף שמוגבל מראש לשימושים מסוימים. ערבוב ביניהם מייצר מסקנה חזקה מדי.",
          ],
        },
      ],
    },
    {
      id: "logic",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: [
        "בנק ישראל בוחן שקל דיגיטלי",
        "CBDC יכול להיות מתוכנן בדרכים שונות",
        "תיאורטית אפשר לחשוש ממגבלות",
        "לכן כבר יש תוכנית לשלוט בקניות",
      ],
      conclusion: "מסקנה שלא הוכחה במקורות שנבדקו",
      note: "החוליות הראשונות אמיתיות, אבל המסקנה האחרונה דורשת מקור נוסף.",
    },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "מקורות ישירים", source: "claim" },
  ],
  structuredData: {
    mode: "configured",
    entries: [
      {
        type: "article",
        placement: "page",
        headline: migratedDigitalShekelControlClaimContent.title,
        description: migratedDigitalShekelControlClaimContent.description,
        datePublished: "2026-06-21",
        dateModified: "2026-06-21",
        inLanguage: "he-IL",
      },
      { type: "faq", placement: "page" },
    ],
  },
  metadataOverrides: {
    title: "האם שקל דיגיטלי יאפשר להגביל קניות? | מקור בדיקה",
    description: migratedDigitalShekelControlClaimContent.description,
    canonical: "/claims/digital-shekel-spending-control",
  },
} satisfies ClaimContent);
