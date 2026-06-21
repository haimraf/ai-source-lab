import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedXrpGlobalCurrencyClaimContent = defineMigratedClaimContent({
  slug: "xrp-global-currency",
  path: "/claims/xrp-global-currency",
  title: "האם XRP נבחר להיות המטבע העולמי?",
  description: "בדיקה מבוססת מקורות רשמיים לטענה ש-XRP נבחר להיות מטבע עולמי, מטבע רזרבה או תחליף למטבעות מדינתיים.",
  kicker: "XRP ותקני תשלום",
  tags: ["XRP", "כסף דיגיטלי", "ISO 20022", "מטבעות", "תשלומים"],
  verdict: "לא נמצא מקור רשמי לכך ש-XRP נבחר למטבע עולמי",
  cluster: "digital-money",
  updated: "2026-06-18",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ש-XRP נבחר להיות המטבע העולמי",
  claim: "XRP נבחר להיות המטבע העולמי של המערכת הפיננסית החדשה.",
  shortAnswer: "לא נמצא מקור רשמי שבחר ב-XRP כמטבע עולמי",
  bottomLine: "לא נמצא לכך מקור רשמי.",
  summaryPoints: [
    "XRP יכול לשמש להעברת ערך ולגישור בין מטבעות.",
    "Ripple פועלת בתחום התשלומים, XRP נועד בין השאר להעברת ערך, ומערכות פיננסיות עוברות ל-ISO 20022.",
  ],
  overview: "XRP הוא נכס דיגיטלי אמיתי עם שימושים שמתוארים על ידי Ripple ו-XRP Ledger. אבל בבדיקה לא נמצא מסמך רשמי של Ripple, ISO, קרן המטבע או גוף בינלאומי שבוחר בו כמטבע עולמי או כמטבע רזרבה.",
  sources: [
    { id: "ripple-xrp", title: "Ripple: XRP", url: "https://ripple.com/xrp/", level: "official", note: "Ripple מתארת את XRP כנכס של XRP Ledger וככלי שיכול לגשר בין מטבעות." },
    { id: "xrpl-about-xrp", title: "XRP Ledger: About XRP", url: "https://xrpl.org/about/xrp", level: "official", note: "התיעוד הרשמי מסביר ש-XRP נועד לתשלומים ויכול לשמש גשר בין מטבעות." },
    { id: "ripple-cross-border", title: "Ripple: Cross-Border Payments", url: "https://ripple.com/solutions/cross-border-payments/", level: "official", note: "פתרון התשלומים של Ripple משלב מטבעות רגילים, XRP, מטבעות יציבים ונכסים נוספים." },
    { id: "iso-20022", title: "ISO 20022: About the Standard", url: "https://www.iso20022.org/about-iso-20022", level: "official", note: "ISO 20022 הוא תקן למסרים פיננסיים. הוא אינו רשימת מטבעות מאושרים." },
    { id: "imf-sdr", title: "IMF: Special Drawing Rights", url: "https://www.imf.org/en/about/factsheets/sheets/2023/special-drawing-rights-sdr", level: "official", note: "סל ה-SDR כולל חמישה מטבעות. XRP אינו אחד מהם." },
  ],
  faq: [
    { question: "אז XRP תואם ל-ISO 20022?", answer: "הניסוח הזה מבלבל. ISO 20022 הוא תקן למסרים פיננסיים שמערכות וארגונים יכולים ליישם. הוא אינו גוף שמאשר מטבעות." },
    { question: "האם XRP יכול לשמש גשר בין מטבעות?", answer: "כן. זה אחד השימושים שמתוארים בחומרי Ripple ובתיעוד של XRP Ledger. זה עדיין שונה מבחירה בו כמטבע היחיד בעולם." },
    { question: "האם XRP יכול להפוך בעתיד לנכס רזרבה?", answer: "אי אפשר לדעת מה יקרה בעתיד. כדי לטעון שהוא כבר נבחר צריך להציג מקור רשמי עדכני. בבדיקה הזאת לא נמצא מקור כזה." },
  ],
});

export const xrpGlobalCurrencyClaimContent = defineClaim({
  ...migratedXrpGlobalCurrencyClaimContent,
  lead: "לא נמצא מקור רשמי לכך ש-XRP נבחר להיות מטבע עולמי, מטבע רזרבה עולמי או תחליף למטבעות מדינתיים. יש לו שימוש אמיתי בתשלומים ובגישור בין מטבעות, אבל זה לא מוכיח שנבחר למלא תפקיד עולמי רשמי.",
  shareCopy: "לא נמצא מקור רשמי לכך ש-XRP נבחר להיות מטבע עולמי. Ripple עצמה עובדת גם עם מטבעות רגילים, מטבעות יציבים ונכסים נוספים. ISO 20022 הוא תקן למסרים פיננסיים, לא אישור למטבע מסוים.\nhttps://ai-source-lab.vercel.app/claims/xrp-global-currency",
  body: [
    { id: "answer", type: "answer-box", eyebrow: "תשובה קצרה", title: migratedXrpGlobalCurrencyClaimContent.shortAnswer, paragraphs: migratedXrpGlobalCurrencyClaimContent.sections[0].paragraphs, variant: "answer" },
    { id: "verdict", type: "verdict-grid", items: [
      { label: "הטענה", text: '"XRP נבחר להיות המטבע העולמי של המערכת הפיננסית החדשה".' },
      { label: "השורה התחתונה", text: migratedXrpGlobalCurrencyClaimContent.bottomLine, emphasis: true },
      { label: "מה כן נכון", text: migratedXrpGlobalCurrencyClaimContent.summaryPoints[0] },
      { label: "איפה הסיפור קופץ", text: "משימוש אפשרי בתשתיות תשלום לבחירה רשמית כמטבע עולמי." },
    ] },
    { id: "claim-table", type: "comparison-list", title: "טבלת הטענה", items: [
      { label: "מה נטען:", text: "XRP נבחר להיות המטבע העולמי או מטבע הרזרבה הבא." },
      { label: "מה המקורות אומרים:", text: "Ripple ו-XRP Ledger מתארים שימושים בתשלומים ובגישור בין מטבעות." },
      { label: "מה נמצא:", text: "לא נמצא מסמך רשמי שמעניק ל-XRP מעמד עולמי רשמי." },
      { label: "מה המסקנה:", text: "יש שימושים אמיתיים; אין ראיה לבחירה רשמית כמטבע עולמי." },
    ] },
    { id: "sixty-seconds", type: "method-note", title: "גרסת 60 שניות", paragraphs: ["XRP הוא נכס דיגיטלי אמיתי, וריפל אכן פועלת בעולם התשלומים הבינלאומיים. בנוסף, ISO 20022 הוא תקן אמיתי למסרים פיננסיים. הקפיצה מתחילה כשמחברים את העובדות האלה למסקנה ש-XRP נבחר להיות המטבע העולמי. בבדיקה מול מקורות רשמיים של Ripple, XRP Ledger, ISO 20022 וקרן המטבע לא נמצא מקור שמעניק ל-XRP מעמד כזה."] },
    { id: "why-plausible", type: "paragraph-section", title: "למה הטענה נשמעת הגיונית?", paragraphs: ["היא בנויה מכמה עובדות אמיתיות. Ripple פועלת בתחום התשלומים, XRP נועד בין השאר להעברת ערך, ומערכות פיננסיות עוברות ל-ISO 20022. הבעיה מתחילה כשמחברים את כל זה להחלטה עולמית שלא הוצג לה מסמך."] },
    { id: "evidence", type: "evidence-list", numbered: true, items: [
      { id: "use", number: "01", title: "XRP הוא נכס עם שימוש מוגדר", paragraphs: ["Ripple ו-XRP Ledger מתארים אותו כנכס שנועד לתשלומים ויכול לגשר בין מטבעות. זו עובדה. זו לא הכרזה על מטבע עולמי."] },
      { id: "ripple-assets", number: "02", title: "Ripple לא עובדת רק עם XRP", paragraphs: ["פתרון התשלומים של Ripple משלב מטבעות רגילים, מטבעות יציבים ונכסים דיגיטליים. במקרים מסוימים אפשר להשתמש ב-XRP, ובמקרים אחרים בנכס אחר. זה לא נראה כמו מערכת שנבנתה סביב מטבע יחיד."] },
      { id: "iso", number: "03", title: "ISO 20022 אינו רשימת מטבעות מאושרים", paragraphs: ["ISO 20022 הוא תקן למסרים פיננסיים. הוא מגדיר איך מערכות מחליפות מידע. הוא לא בוחר מטבע עולמי ולא מעניק למטבע כלשהו מעמד של רזרבה."] },
      { id: "sdr", number: "04", title: "XRP אינו חלק מסל ה-SDR", paragraphs: ["לפי קרן המטבע, סל ה-SDR מבוסס על דולר, אירו, רנמינבי, ין וליש\"ט. XRP אינו חלק מהסל. גם ה-SDR עצמו אינו מטבע שמיועד לציבור."] },
    ] },
    { id: "logic", type: "logic-chain", title: "שרשרת הטענה", ariaLabel: "שרשרת הקפיצה הלוגית", steps: ["Ripple עובדת על תשלומים", "XRP יכול לגשר בין מטבעות", "בנקים משתמשים ב-ISO 20022"], conclusion: "לכן XRP נבחר כמטבע העולמי", note: "שלושת השלבים הראשונים יכולים להיות נכונים. המסקנה האחרונה לא נובעת מהם בלי מסמך או החלטה רשמית." },
    { id: "conclusion", type: "paragraph-section", title: "מה אפשר לקבוע?", paragraphs: ["ל-XRP יש שימוש אמיתי והוא עשוי לקבל בעתיד תפקיד רחב יותר. נכון ל-18 ביוני 2026, לא נמצא מקור רשמי שבחר בו כמטבע עולמי או כמטבע רזרבה עולמי."] },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    { id: "method", type: "method-note", title: "איך נבדקה הטענה?", paragraphs: ["הבדיקה התבססה על מקורות רשמיים של Ripple, XRP Ledger, ISO 20022 וקרן המטבע. תחזיות מחיר, משפיעני קריפטו ופוסטים אנונימיים לא שימשו מקור להחלטה מוסדית."] },
  ],
  structuredData: { mode: "configured", container: "graph", entries: [
    { type: "article", placement: "page", headline: migratedXrpGlobalCurrencyClaimContent.title, description: "בדיקה מבוססת מקורות רשמיים לטענה ש-XRP נבחר להיות מטבע עולמי או מטבע רזרבה.", datePublished: "2026-06-18", dateModified: "2026-06-18", inLanguage: "he-IL" },
    { type: "faq", placement: "page", items: [
      { question: "האם XRP נבחר להיות המטבע העולמי?", answer: "לא נמצא מקור רשמי לכך ש-XRP נבחר להיות מטבע עולמי, מטבע רזרבה עולמי או תחליף למטבעות מדינתיים." },
      { question: "האם ISO 20022 מאשר את XRP?", answer: "לא. ISO 20022 הוא תקן למסרים ולמידע פיננסי. הוא אינו גוף שמאשר מטבעות." },
    ] },
  ] },
  metadataOverrides: { title: "האם XRP נבחר להיות המטבע העולמי? | מקור בדיקה", description: migratedXrpGlobalCurrencyClaimContent.description, canonical: migratedXrpGlobalCurrencyClaimContent.path },
  workflow: { ...migratedXrpGlobalCurrencyClaimContent.workflow, credits: [{ id: "haim-rafael", name: "חיים רפאל", role: "author" }] },
} satisfies ClaimContent);
