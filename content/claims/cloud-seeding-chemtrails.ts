import type { ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

export const cloudSeedingChemtrailsClaimContent = defineMigratedClaimContent({
  slug: "cloud-seeding-chemtrails",
  path: "/claims/cloud-seeding-chemtrails",
  title: "האם זריעת עננים מוכיחה Chemtrails?",
  description: "בדיקה שמפרידה בין זריעת עננים אמיתית, שובלי מטוסים וטענות על ריסוס אלומיניום.",
  kicker: "שובלי מטוסים",
  tags: ["Chemtrails", "Cloud Seeding", "Geoengineering", "שמיים", "אקלים"],
  verdict: "זריעת עננים קיימת, אבל אינה מוכיחה שכל שובל הוא ריסוס",
  cluster: "sky-climate",
  updated: "2026-06-19",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הקשר בין זריעת עננים לטענות Chemtrails",
  claim: "אם קיימת זריעת עננים, אז שובלי מטוסים הם כנראה Chemtrails.",
  shortAnswer: "כן, זריעת עננים קיימת. לא, זה לא מוכיח שכל שובל הוא ריסוס.",
  bottomLine: "לא. קיום של שיטה אחת לא מוכיח טענה רחבה על כל שובל.",
  summaryPoints: [
    "זריעת עננים קיימת, ולעיתים משתמשים בה ביודיד כסף.",
    "מפעולה מוצהרת ומקומית למסקנה על ריסוס חשאי ומתמשך.",
  ],
  overview: "זריעת עננים היא פעולה אמיתית ומוצהרת לשינוי מקומי של משקעים, לרוב רק כשיש עננים ותנאים מתאימים. אבל מכאן לא נובע שכל פס לבן בשמיים הוא פעולה כזאת, ובטח לא הוכחה לריסוס אלומיניום. זו טענה נוספת שדורשת מקור וראיות משלה.",
  sources: [
    { id: "gao-cloud-seeding", title: "GAO: Cloud Seeding Technology", url: "https://www.gao.gov/products/gao-25-107328", level: "official", note: "דוח רשמי מ-2024 על זריעת עננים, יודיד כסף, מגבלות היעילות והצורך להבחין בין זריעת עננים לגיאו-הנדסה." },
    { id: "noaa-stormfury", title: "NOAA: Project STORMFURY", url: "https://www.aoml.noaa.gov/hrd/hrd_sub/sfury.html", level: "official", note: "תיעוד רשמי של ניסויי זריעת הוריקנים ביודיד כסף ושל הסיבה שהמסקנות החיוביות הוטלו בספק." },
    { id: "faa-contrails", title: "FAA: Contrails", url: "https://www.faa.gov/contrails", level: "official", note: "הסבר רשמי על שובלי התעבות ועל ההבחנה בין שובלים לבין פעולות פיזור מכוונות אחרות." },
    { id: "epa-contrails", title: "EPA: Information on Contrails from Aircraft", url: "https://www.epa.gov/regulations-emissions-vehicles-and-engines/Contrails", level: "official", note: "מידע סביבתי על שובלי מטוסים, פליטות וטענות סביב chemtrails." },
  ],
  faq: [
    { question: "אז הרשויות מודות שיש שינוי מזג אוויר?", answer: "כן, יש פעולות מוצהרות כמו זריעת עננים. זה לא אומר שכל שובל מטוס הוא פעולה כזאת." },
    { question: "אם משתמשים ביודיד כסף, זה לא מסוכן?", answer: "זו שאלה סביבתית לגיטימית, אבל היא שונה מהטענה על ריסוס אלומיניום. גם ביקורת על יודיד כסף לא מוכיחה חומר אחר או פעולה אחרת." },
    { question: "איזו ראיה הייתה משנה את המסקנה?", answer: "מסמכים מאומתים, דגימות מבוקרות, ציוד פיזור מתועד וקישור ברור לטיסה, זמן ומקום מסוימים." },
  ],
}) satisfies ClaimContent;
