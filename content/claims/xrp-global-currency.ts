import type { ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

export const xrpGlobalCurrencyClaimContent = defineMigratedClaimContent({
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
}) satisfies ClaimContent;
