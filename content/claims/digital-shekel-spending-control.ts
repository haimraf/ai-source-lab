import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedDigitalShekelSpendingControlClaimContent = defineMigratedClaimContent({
  slug: "digital-shekel-spending-control",
  path: "/claims/digital-shekel-spending-control",
  title: "האם שקל דיגיטלי יאפשר שליטה בהוצאות?",
  description: "בדיקה של הטענה ששקל דיגיטלי יאפשר למדינה או לבנק ישראל להגביל לאזרחים מה הם יכולים לקנות, מתי וממי.",
  kicker: "שקל דיגיטלי ו-CBDC",
  tags: ["שקל דיגיטלי", "CBDC", "בנק ישראל", "פרטיות", "כסף דיגיטלי"],
  verdict: "יש שאלות אמיתיות על פרטיות ועיצוב, אבל לא נמצאה תוכנית שליטה בהוצאות",
  cluster: "digital-money",
  updated: "2026-06-21",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ששקל דיגיטלי יאפשר שליטה בהוצאות",
  claim: "שקל דיגיטלי יאפשר למדינה או לבנק ישראל לשלוט במה שאזרחים קונים ולהגביל הוצאות לפי מוצר, אדם, זמן או מקום.",
  shortAnswer: "לא נמצא מקור שמראה תוכנית כזאת בישראל.",
  bottomLine: "בנק ישראל אכן בוחן שקל דיגיטלי, ויש דיון אמיתי על פרטיות, תכנון מערכת ותשלומים מותנים. אבל לא נמצא מקור רשמי שמציג תוכנית להגביל לאזרחים רכישות יומיומיות דרך השקל הדיגיטלי.",
  summaryPoints: [
    "שקל דיגיטלי הוא פרויקט מחקר והיערכות אמיתי של בנק ישראל, לא המצאה רשתית.",
    "יכולת טכנולוגית או דיון תכנוני אינם הוכחה למדיניות שליטה בפועל על קניות אזרחים.",
  ],
  overview: "הטענה נשענת על חשש אמיתי: כסף דיגיטלי של בנק מרכזי מעלה שאלות על פרטיות, תשתית, מתווכים, זהות דיגיטלית ואפשרות לתשלומים מותנים. אבל בבדיקה צריך להפריד בין דיון תיאורטי או טכנולוגי לבין תוכנית מדיניות קיימת. נכון לעכשיו, לא נמצא מקור רשמי ישראלי שמציג את השקל הדיגיטלי ככלי להגבלת רכישות של אזרחים לפי מוצר, זמן, אדם או מקום.",
  sources: [
    { id: "reuters-digital-shekel", title: "Reuters: Bank of Israel waiting for digital euro ahead of digital shekel launch", url: "https://www.reuters.com/markets/currencies/bank-israel-waiting-digital-euro-ahead-digital-shekel-launch-2024-07-10/", level: "secondary", note: "דיווח על מצב ההיערכות של בנק ישראל, כולל העובדה שלא בטוח שהשקל הדיגיטלי יונפק בפועל." },
    { id: "boi-digital-shekel-challenge", title: "Bank of Israel: Digital Shekel Challenge", url: "https://www.boi.org.il/en/communication-and-publications/press-releases/the-digital-shekel-challenge-final-event/", level: "official", note: "מקור רשמי על אתגר השקל הדיגיטלי והדגמות שימושים אפשריים. יש לבדוק שימושים בלי לקפוץ מהם למדיניות שליטה." },
    { id: "ecb-digital-euro-faq", title: "European Central Bank: Digital euro FAQ", url: "https://www.ecb.europa.eu/euro/digital_euro/faqs/html/ecb.faq_digital_euro.en.html", level: "official", note: "מקור רשמי שמועיל להבחנה בין תשלומים מותנים, פרטיות וכסף מתוכנת." },
    { id: "mit-programmability", title: "MIT DCI: A Framework for Programmability in Digital Currency", url: "https://arxiv.org/abs/2311.04874", level: "context", note: "מאמר רקע שמסביר למה המונח 'כסף מתוכנת' דורש הגדרות מדויקות ולא סיסמה כללית." },
  ],
  faq: [
    { question: "אז אין שום סיכון בשקל דיגיטלי?", answer: "לא זו המסקנה. יש שאלות אמיתיות על פרטיות, עיצוב מערכת, גישה לחשבונות ותפקיד מתווכים. המסקנה היא שלא נמצא מקור שמראה תוכנית ישראלית לשלוט בקניות של אזרחים." },
    { question: "השקל הדיגיטלי כבר יוצא בישראל?", answer: "לא בטוח. לפי הדיווחים הקיימים, בנק ישראל נערך וחוקר, אך גם מציין שאין ודאות שהשקל הדיגיטלי יונפק בפועל." },
    { question: "מה ההבדל בין תשלום מותנה לכסף מתוכנת?", answer: "תשלום מותנה הוא פעולה שמתבצעת כאשר מתקיים תנאי מסוים, למשל בהזמנה או חוזה. כסף מתוכנת הוא טענה חזקה יותר: שהכסף עצמו מוגבל לשימושים מסוימים. זו הבחנה מרכזית." },
    { question: "למה הטענה נשמעת משכנעת?", answer: "כי היא מתחילה מחשש אמיתי. אבל מקור בדיקה לא עוצר בתחושת סיכון; הוא שואל האם יש מסמך רשמי שמראה שהחשש כבר הפך למדיניות." },
  ],
});

export const digitalShekelSpendingControlClaimContent = defineClaim({
  ...migratedDigitalShekelSpendingControlClaimContent,
  lead: "שקל דיגיטלי הוא לא בדיחה ולא המצאה. בנק ישראל באמת בוחן אפשרות כזו. אבל בין מחקר, ניסויים, אתגרי פיתוח ושאלות פרטיות לבין טענה שהמדינה תשלוט במה שאנשים קונים יש פער גדול שצריך לבדוק בזהירות.",
  shareCopy: `בנק ישראל אכן בוחן שקל דיגיטלי, ויש שאלות אמיתיות על פרטיות ועיצוב המערכת. אבל בבדיקה לא נמצא מקור רשמי שמציג תוכנית להגביל לאזרחים מה הם יכולים לקנות. הקפיצה היא מ-CBDC נחקר ומעורר שאלות ל'שליטה בפועל בהוצאות'.
${siteUrl}/claims/digital-shekel-spending-control`,
  exhibits: [
    {
      id: "digital-shekel-control-map",
      src: "/evidence/digital-shekel-control-map.svg",
      alt: "איור פנימי ללא טקסט שמפריד בין מחקר שקל דיגיטלי לבין טענת שליטה בהוצאות",
      title: "מוצג 1.",
      caption: "איור פנימי ללא טקסט בתוך התמונה: מחקר והיערכות מצד אחד, טענת שליטה בהוצאות מצד שני. המקורות עצמם מופיעים כקישורים לחיצים ברשימת המקורות.",
    },
  ],
  body: [
    { id: "answer", type: "answer-box", eyebrow: "תשובה קצרה", title: migratedDigitalShekelSpendingControlClaimContent.shortAnswer, paragraphs: migratedDigitalShekelSpendingControlClaimContent.sections[0].paragraphs, variant: "answer" },
    { id: "gallery", type: "gallery", title: "מוצג חזותי", source: "claim" },
    { id: "verdict", type: "verdict-grid", items: [
      { label: "הטענה", text: migratedDigitalShekelSpendingControlClaimContent.claim },
      { label: "השורה התחתונה", text: migratedDigitalShekelSpendingControlClaimContent.bottomLine, emphasis: true },
      { label: "מה כן נכון", text: migratedDigitalShekelSpendingControlClaimContent.summaryPoints[0] },
      { label: "איפה הסיפור קופץ", text: "ממחקר על CBDC ואפשרויות תשלום למסקנה שכבר קיימת תוכנית להגביל רכישות." },
    ] },
    { id: "claim-table", type: "comparison-list", title: "טבלת הטענה", items: [
      { label: "מה נטען:", text: "שקל דיגיטלי יאפשר שליטה ישירה במה שכל אזרח יכול לקנות." },
      { label: "מה המקורות אומרים:", text: "בנק ישראל בוחן שקל דיגיטלי, שימושים אפשריים ותשתיות תשלום." },
      { label: "מה נמצא:", text: "לא נמצא מקור רשמי שמציג הגבלת קניות אזרחית כמדיניות של השקל הדיגיטלי." },
      { label: "מה המסקנה:", text: "יש חששות לגיטימיים לבדוק, אבל הטענה על שליטה בפועל לא הוכחה." },
    ] },
    { id: "sixty-seconds", type: "method-note", title: "גרסת 60 שניות", paragraphs: ["שקל דיגיטלי הוא רעיון אמיתי שבנק ישראל בוחן. גם CBDC בעולם מעלה שאלות אמיתיות על פרטיות, מתווכים ותשלומים מותנים. אבל הטענה שהשקל הדיגיטלי כבר נועד להגביל לאזרחים קניות דורשת מקור רשמי שמראה את זה. בבדיקה הנוכחית לא נמצא מקור כזה."] },
    { id: "bonus", type: "bonus-note", title: "עובדת בונוס", paragraphs: ["הנקודה הכי חזקה בבדיקה היא שבנק ישראל עצמו, לפי הדיווחים, עדיין לא בהכרח החליט להנפיק שקל דיגיטלי. כלומר הטענה הוויראלית מדלגת לא רק משאלת עיצוב לשאלת שליטה, אלא גם ממחקר והיערכות להנחה שהמערכת כבר בדרך להשקה מלאה.", "זו בדיוק הקפיצה שמקור בדיקה צריך לתפוס: לא כל ניסוי או אתגר פיתוח הוא מדיניות ציבורית מחייבת."] },
    { id: "evidence", type: "evidence-list", numbered: true, items: [
      { id: "real-project", number: "01", title: "הפרויקט אמיתי", paragraphs: ["בנק ישראל אכן עוסק בשקל דיגיטלי ובוחן תרחישים, שימושים ותשתיות. לכן לא נכון לפטור את הנושא כשטות רשתית."] },
      { id: "not-launched", number: "02", title: "מחקר אינו השקה", paragraphs: ["היערכות וניסויים אינם הכרזה שהשקל הדיגיטלי יוצא לציבור מחר, ואינם מוכיחים שכל שימוש אפשרי יהפוך למדיניות." ] },
      { id: "conditional-payments", number: "03", title: "תשלום מותנה אינו בהכרח כסף שמגביל אותך", paragraphs: ["בתחום ה-CBDC יש דיון על תשלומים אוטומטיים או מותנים. זה לא אותו דבר כמו כסף שמוגבל מראש לפי מוצר, אדם או מקום." ] },
      { id: "missing-policy", number: "04", title: "המסמך החסר הוא מדיניות שליטה", paragraphs: ["כדי לטעון לשליטה בהוצאות צריך להראות מקור רשמי שאומר שזה העיצוב או היעד. בבדיקה הזו לא נמצא מקור כזה." ] },
    ] },
    { id: "logic", type: "logic-chain", title: "שרשרת הקפיצה הלוגית", ariaLabel: "שרשרת הקפיצה הלוגית", steps: ["בנק ישראל בוחן שקל דיגיטלי", "CBDC יכול לכלול יכולות מתקדמות", "יש חששות פרטיות אמיתיים"], conclusion: "לכן תהיה שליטה בקניות", note: "החששות ראויים לבדיקה. המסקנה הסופית דורשת מקור מדיניות שלא נמצא בבדיקה." },
    { id: "conclusion", type: "paragraph-section", title: "מה אפשר לקבוע?", paragraphs: ["אפשר לקבוע בזהירות שהשקל הדיגיטלי הוא נושא אמיתי ושיש שאלות חשובות על פרטיות, עיצוב ותפקיד המדינה. אי אפשר לקבוע מתוך המקורות שנבדקו שקיימת תוכנית ישראלית להגביל רכישות של אזרחים דרך שקל דיגיטלי."] },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    { id: "method", type: "method-note", title: "איך נבדקה הטענה?", paragraphs: ["הבדיקה הפרידה בין עצם קיום פרויקט שקל דיגיטלי, יכולות טכנולוגיות אפשריות, וראיה למדיניות שליטה בהוצאות. מקורות על CBDC שימשו רק כדי להסביר מושגים, לא כדי להוכיח מה בנק ישראל מתכנן לעשות בפועל."] },
  ],
  structuredData: { mode: "configured", container: "graph", entries: [
    { type: "article", placement: "page", headline: migratedDigitalShekelSpendingControlClaimContent.title, description: migratedDigitalShekelSpendingControlClaimContent.description, datePublished: "2026-06-21", dateModified: "2026-06-21", inLanguage: "he-IL" },
    { type: "faq", placement: "page", items: migratedDigitalShekelSpendingControlClaimContent.faq },
  ] },
  metadataOverrides: {
    title: "האם שקל דיגיטלי יאפשר שליטה בהוצאות? | מקור בדיקה",
    description: migratedDigitalShekelSpendingControlClaimContent.description,
    canonical: migratedDigitalShekelSpendingControlClaimContent.path,
    openGraph: { title: "האם שקל דיגיטלי יאפשר שליטה בהוצאות? | מקור בדיקה", description: migratedDigitalShekelSpendingControlClaimContent.description, url: `${siteUrl}/claims/digital-shekel-spending-control`, siteName: "מקור בדיקה", locale: "he_IL", type: "article" },
    twitter: { card: "summary_large_image", title: "האם שקל דיגיטלי יאפשר שליטה בהוצאות? | מקור בדיקה", description: migratedDigitalShekelSpendingControlClaimContent.description },
  },
  workflow: { ...migratedDigitalShekelSpendingControlClaimContent.workflow, credits: [{ id: "haim-rafael", name: "חיים רפאל", role: "author" }] },
} satisfies ClaimContent);
