import type { ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

export const whoPandemicAgreementSovereigntyClaimContent = defineMigratedClaimContent({
  slug: "who-pandemic-agreement-sovereignty",
  path: "/claims/who-pandemic-agreement-sovereignty",
  title: "האם אמנת המגיפות נותנת ל-WHO סמכות על מדיניות פנים?",
  description: "בדיקה של הטענה שאמנת המגיפות של WHO נותנת לארגון סמכות להכתיב למדינות מדיניות פנימית או חקיקה.",
  kicker: "WHO ואמנת מגיפות",
  tags: ["WHO", "אמנת מגיפות", "ריבונות", "מדיניות פנים", "מקור רשמי"],
  verdict: "הטקסט הרשמי שולל סמכות להכתיב מדיניות פנים למדינות",
  cluster: "institutional-narratives",
  updated: "2026-06-21",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שאמנת המגיפות נותנת ל-WHO סמכות כפייה",
  claim: "אמנת המגיפות נותנת ל-WHO סמכות להכתיב למדינות מדיניות פנים בזמן מגיפה.",
  shortAnswer: "לא במובן שמופץ ברשת.",
  bottomLine: "הסעיף הרלוונטי אומר ההפך: אין ל-WHO סמכות כזו.",
  summaryPoints: [
    "ההסכם עוסק בשיתוף פעולה, היערכות, שרשראות אספקה, מימון, דיווחים וגישה שוויונית לכלים רפואיים.",
    "מ”הסכם בינלאומי מחייב” ל”ארגון חיצוני יכול להורות למדינה מה לעשות בתוך המדינה”.",
  ],
  overview: "ההסכם הוא מסמך בינלאומי מחייב למדינות שיצטרפו אליו לפי התהליך החוקתי שלהן, אבל הטקסט הרשמי אינו נותן למזכירות WHO או למנכ״ל WHO סמכות להורות למדינות לשנות חוק, להכתיב מדיניות פנים או להפעיל צעדי חירום.",
  sources: [
    { id: "who-agreement-topic", title: "WHO Pandemic Agreement — health topic page", url: "https://www.who.int/health-topics/who-pandemic-agreement", level: "official", note: "עמוד WHO שמסביר שההסכם אומץ ב-20 במאי 2025, מתאר את רכיבי ההסכם ומדגיש שהיישום נשאר בשליטת מדינות ריבוניות." },
    { id: "wha78-official-text", title: "WHA78.1 — WHO Pandemic Agreement, official text", url: "https://apps.who.int/gb/ebwha/pdf_files/WHA78/A78_R1-en.pdf", level: "primary", note: "הטקסט הרשמי שאומץ בעצרת הבריאות העולמית. סעיף 22(2) הוא מקור המפתח לשאלה אם ל-WHO יש סמכות להכתיב מדיניות פנים למדינות." },
    { id: "who-agreement-qa", title: "WHO Q&A — Pandemic prevention, preparedness and response agreement", url: "https://www.who.int/news-room/questions-and-answers/item/pandemic-prevention--preparedness-and-response-accord", level: "official", note: "שאלות ותשובות של WHO על תהליך האימוץ, נספח PABS, ריבונות המדינות ותפקיד המזכירות של WHO." },
    { id: "reuters-agreement", title: "Reuters — landmark global pandemic agreement adopted", url: "https://www.reuters.com/business/healthcare-pharmaceuticals/landmark-global-pandemic-agreement-adopted-by-world-health-organization-members-2025-05-20/", level: "secondary", note: "דיווח חדשותי על אימוץ ההסכם, ההצבעה, ההימנעויות והעובדה שההסכם לא נכנס לתוקף מיידי בלי השלמת נספח ואשרור מדינתי." },
    { id: "ap-agreement", title: "AP — WHO adopts a pandemic agreement after the chaos of COVID", url: "https://apnews.com/article/51ff7eddb83db47b869d2729a5f27a6d", level: "secondary", note: "דיווח רקע על אימוץ ההסכם, ההקשר של COVID והפער בין שיתוף פעולה בינלאומי לבין מנגנון אכיפה ישיר." },
  ],
  faq: [
    { question: "אז ההסכם לא מחייב בכלל?", answer: "הוא מיועד להיות הסכם בינלאומי מחייב למדינות שיהפכו לצד להסכם. אבל מחייב מדינה אינו אומר ש-WHO מקבל סמכות ישירה להורות למדינה אילו חוקים לחוקק או אילו צעדים להפעיל." },
    { question: "מה הסעיף הכי חשוב לבדיקה?", answer: "סעיף 22(2). הוא קובע שאין לפרש את ההסכם כנותן למזכירות WHO או למנכ״ל WHO סמכות להורות, לשנות או להכתיב חוק או מדיניות פנים של מדינה." },
    { question: "מה עם International Health Regulations?", answer: "ההסכם וה-IHR הם מסגרות קשורות אבל לא אותו מסמך. גם שם צריך לבדוק סעיפים ספציפיים ולא לערבב בין הגדרות, המלצות, הכרזות חירום וסמכות כפייה." },
    { question: "ישראל הצביעה בעד?", answer: "לפי דיווח Reuters על ההצבעה ב-2025, ישראל הייתה בין המדינות שנמנעו. זה נתון פוליטי מעניין, אבל הוא לא משנה את נוסח סעיף הסמכות בטקסט הרשמי." },
  ],
}) satisfies ClaimContent;
