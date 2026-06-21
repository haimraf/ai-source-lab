import type { ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

export const gatewayProcessOutOfBodyClaimContent = defineMigratedClaimContent({
  slug: "gateway-process-out-of-body",
  path: "/claims/gateway-process-out-of-body",
  title: "האם מסמך Gateway מוכיח יציאה מהגוף?",
  description: "בדיקה של מסמך Gateway מ־1983: מה באמת נבדק, מה אפשר ללמוד ממנו, ואיפה מתחילה הקפיצה מהתעניינות מודיעינית להוכחה רוחנית.",
  kicker: "תודעה ומודיעין",
  tags: ["תודעה", "CIA", "Gateway", "ראייה מרחוק", "מסמך רשמי"],
  verdict: "המסמך אמיתי, אבל הוא לא הוכחה ליציאה מהגוף",
  cluster: "consciousness-intelligence",
  updated: "2026-06-19",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שמסמך Gateway מוכיח יציאה מהגוף",
  claim: "מסמך Gateway של ה־CIA מוכיח שלתודעה יש יכולת לצאת מהגוף או לגשת למידע מרחוק.",
  shortAnswer: "המסמך קיים. הוא לא הוכחה שהיכולת הוכחה.",
  bottomLine: "לא. הוא מוכיח שהיה עניין ובדיקה, לא שהיכולת הוכחה.",
  summaryPoints: [
    "Gateway היא שיטה קיימת של מדיטציה, הרפיה ושמע, והמסמך אכן עוסק בה ברצינות.",
    "מ”הצבא בדק רעיון חריג” ל”הרעיון נכון ומוכח”.",
  ],
  overview: "המסמך מראה שגורמים צבאיים ומודיעיניים התעניינו ב־Gateway Process ובחנו את האפשרות שיש לשיטה ערך. זה שונה לגמרי מהטענה שהמסמך מוכיח יציאה ממשית מהגוף, שליטה במציאות או ראייה מרחוק שניתנת לשחזור מדעי.",
  sources: [
    { id: "cia-gateway", title: "CIA Reading Room: Analysis and Assessment of Gateway Process", url: "https://www.cia.gov/readingroom/docs/CIA-RDP96-00788R001700210016-5.pdf", level: "primary", note: "המסמך המקורי שנושא את שם הבדיקה. עצם קיומו מראה שגורמי ביטחון בחנו את Gateway, לא שהטענות המיסטיות הוכחו." },
    { id: "cia-stargate", title: "CIA Reading Room: Stargate Collection", url: "https://www.cia.gov/readingroom/collection/stargate", level: "official", note: "אוסף מסמכים רחב יותר סביב תוכניות ראייה מרחוק ויכולות תודעה שנבחנו בתקופת המלחמה הקרה." },
    { id: "monroe-gateway", title: "The Monroe Institute: Gateway Experience", url: "https://www.monroeinstitute.org/products/gateway-experience", level: "official", note: "המקור האזרחי שמציג את Gateway Experience כתוכנית שמע ומדיטציה המבוססת על Hemi-Sync." },
    { id: "hemi-sync", title: "Hemi-Sync: Technology", url: "https://hemi-sync.com/technology/", level: "official", note: "הסבר מסחרי על שימוש בצלילים, דפוסי שמע וביטוי Hemi-Sync. זה מקור לשיטת המוצר, לא הוכחה מדעית עצמאית לכל הטענות." },
    { id: "air-remote-viewing", title: "American Institutes for Research: An Evaluation of Remote Viewing", url: "https://irp.fas.org/program/collect/air1995.pdf", level: "primary", note: "דוח הערכה מאוחר יותר על ראייה מרחוק. רלוונטי להבחנה בין עניין מודיעיני לבין הוכחה מבצעית או מדעית רחבה." },
  ],
  faq: [
    { question: "אז המסמך מזויף?", answer: "לא. המסמך אמיתי ומופיע בארכיון ה־CIA. הבעיה היא לא עצם המסמך, אלא המסקנות שמוסיפים לו ברשת." },
    { question: "האם זה אומר שאין שום ערך ל־Gateway?", answer: "לא. ייתכן שיש ערך מעשי בתרגול הרפיה, נשימה, קשב ודמיון מודרך. זה לא מחייב לקבל את כל הטענות על יציאה מהגוף או ממדים אחרים." },
    { question: "האם ה־CIA הוכיח ראייה מרחוק?", answer: "לא דרך המסמך הזה. לכל היותר הוא מראה עניין ובחינה של האפשרות. הוכחה דורשת תוצאות עקביות, מדידות ושחזוריות, לא רק מסמך תיאורטי." },
    { question: "אז איך נכון להשתמש בזה?", answer: "ככלי לפתיחת שאלה: מה נבדק, מי בדק, מה נמצא, ומה רק משוער. לא כקלף שסוגר דיון." },
  ],
}) satisfies ClaimContent;
