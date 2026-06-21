import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedCloudSeedingChemtrailsClaimContent = defineMigratedClaimContent({
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
});

export const cloudSeedingChemtrailsClaimContent = defineClaim({
  ...migratedCloudSeedingChemtrailsClaimContent,
  lead: "זו טענה שחוזרת הרבה: אם מודים שיש זריעת עננים, אז כנראה שגם הפסים הלבנים ממטוסים הם ריסוס מכוון של חומרים כמו אלומיניום. הבדיקה מפרידה בין שלושה דברים שונים: זריעת עננים, שובלי התעבות, והטענה הספציפית על ריסוס אלומיניום.",
  shareCopy: "זריעת עננים היא פעולה אמיתית ומוצהרת לשינוי מקומי של משקעים, לעיתים עם יודיד כסף. זה לא מוכיח שכל פס לבן בשמיים הוא ריסוס, ולא מוכיח טענה על אלומיניום בלי שרשרת ראיות נפרדת שמחברת חומר, מקור, זמן, מקום וטיסה מסוימת.\nhttps://ai-source-lab.vercel.app/claims/cloud-seeding-chemtrails",
  body: [
    { id: "answer", type: "answer-box", eyebrow: "תשובה קצרה", title: migratedCloudSeedingChemtrailsClaimContent.shortAnswer, paragraphs: migratedCloudSeedingChemtrailsClaimContent.sections[0].paragraphs, variant: "answer" },
    { id: "verdict", type: "verdict-grid", items: [
      { label: "הטענה", text: migratedCloudSeedingChemtrailsClaimContent.claim },
      { label: "השורה התחתונה", text: migratedCloudSeedingChemtrailsClaimContent.bottomLine, emphasis: true },
      { label: "מה כן נכון", text: migratedCloudSeedingChemtrailsClaimContent.summaryPoints[0] },
      { label: "איפה הסיפור קופץ", text: migratedCloudSeedingChemtrailsClaimContent.summaryPoints[1] },
    ] },
    { id: "distinctions", type: "comparison-list", title: "ההבחנה החשובה", items: [
      { label: "זריעת עננים:", text: "פעולה מכוונת שמנסה להשפיע על משקעים בעננים קיימים, בתנאים מתאימים." },
      { label: "שובלי מטוסים:", text: "פסי גבישי קרח שנוצרים בתנאי קור ולחות בגובה, ויכולים להישאר או להיעלם לפי מזג האוויר בגובה." },
      { label: "טענת Chemtrails:", text: "טענה על ריסוס מכוון של חומרים על הציבור. זו טענה נפרדת שדורשת ראיות נפרדות." },
    ] },
    { id: "evidence", type: "evidence-list", title: "מה המקורות מראים?", numbered: true, items: [
      { id: "cloud-seeding", number: "01", title: "זריעת עננים היא טכנולוגיה אמיתית", paragraphs: ["GAO מתאר זריעת עננים כטכנולוגיה בת כ-80 שנה שמוסיפה חלקיקים זעירים, בדרך כלל יודיד כסף, לעננים כדי לעודד גשם או שלג. אותו דוח מדגיש שהיעילות אינה מובטחת ושתנאי הענן חייבים להתאים."] },
      { id: "stormfury", number: "02", title: "גם ניסויים רשמיים לא מוכיחים שליטה רחבה במזג האוויר", paragraphs: ["NOAA מתעדת את Project STORMFURY, ניסוי ארוך לשינוי הוריקנים באמצעות יודיד כסף. בהמשך התברר שההשפעות שיוחסו להתערבות אנושית יכלו להיות חלק מהתנהגות טבעית של הוריקנים."] },
      { id: "contrails", number: "03", title: "שובל התעבות הוא הסבר אחר", paragraphs: ["מקורות תעופה וסביבה מסבירים ששובלי מטוסים נוצרים כאשר אדי מים ופליטות מנוע פוגשים אוויר קר ולח בגובה. העובדה ששובל נשאר זמן רב אינה מזהה חומר מסוים."] },
    ] },
    { id: "logic", type: "logic-chain", title: "שרשרת הטענה", steps: ["יש זריעת עננים", "לפעמים משתמשים ביודיד כסף", "יש פסים לבנים ממטוסים"], conclusion: "לכן הפסים הם ריסוס אלומיניום", note: "שלושת החלקים הראשונים יכולים להיות נכונים. המסקנה האחרונה אינה נובעת מהם ודורשת ראיה עצמאית." },
    { id: "silver-iodide", type: "paragraph-section", title: "ומה לגבי יודיד כסף?", paragraphs: ["יודיד כסף אינו אלומיניום. גם אם יש ביקורת סביבתית על זריעת עננים, זו עדיין לא הוכחה לטענה אחרת על אלומיניום בשובלי מטוסים. לפי GAO, המחקר הקיים לגבי שימוש נוכחי ביודיד כסף אינו מצביע על חשש סביבתי או בריאותי ברמות השימוש הנוכחיות, אך לא ברור מה תהיה ההשפעה של שימוש רחב יותר."] },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    { id: "method", type: "method-note", title: "איך נבדקה הטענה?", paragraphs: ["הבדיקה לא שואלת אם זריעת עננים קיימת; היא קיימת. השאלה היא האם עצם קיומה מוכיח טענה על שובלי מטוסים וריסוס אלומיניום. במקורות שנבדקו לא נמצאה שרשרת ראיות כזאת."] },
  ],
  structuredData: { mode: "configured", entries: [
    { type: "article", placement: "page", headline: migratedCloudSeedingChemtrailsClaimContent.title, description: "בדיקה שמפרידה בין זריעת עננים, שובלי מטוסים וטענה על ריסוס אלומיניום.", datePublished: "2026-06-19", dateModified: "2026-06-19", inLanguage: "he-IL" },
    { type: "faq", placement: "page", items: [
      { question: "האם זריעת עננים קיימת באמת?", answer: "כן. זריעת עננים היא טכנולוגיה קיימת לשינוי מקומי של משקעים, בדרך כלל באמצעות חלקיקים כמו יודיד כסף, אבל היעילות שלה תלויה בתנאי ענן מתאימים ואינה מוכיחה טענות על ריסוס כללי." },
      { question: "האם זריעת עננים מוכיחה ששובלי מטוסים הם ריסוס אלומיניום?", answer: "לא. זו קפיצה לוגית. כדי להוכיח ריסוס אלומיניום צריך ראיות נפרדות שמקשרות חומר, מקור, זמן, מקום וטיסה מסוימת." },
    ] },
  ] },
  metadataOverrides: { title: "האם זריעת עננים מוכיחה Chemtrails? | מקור בדיקה", description: migratedCloudSeedingChemtrailsClaimContent.description, canonical: migratedCloudSeedingChemtrailsClaimContent.path },
  workflow: { ...migratedCloudSeedingChemtrailsClaimContent.workflow, credits: [{ id: "haim-rafael", name: "חיים רפאל", role: "author" }] },
} satisfies ClaimContent);
