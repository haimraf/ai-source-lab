import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedGravityLoss2026ProjectAnchorClaimContent = defineMigratedClaimContent({
  slug: "gravity-loss-2026-project-anchor",
  path: "/claims/gravity-loss-2026-project-anchor",
  title: "האם כדור הארץ יאבד כבידה ל־7 שניות ב־12 באוגוסט 2026?",
  description: "בדיקה של הטענה ש־NASA מסתירה אירוע בשם Project Anchor שבו כדור הארץ יאבד כבידה לשבע שניות, מול ליקוי החמה האמיתי באותו תאריך.",
  kicker: "ליקוי חמה וכבידה",
  tags: ["NASA", "Project Anchor", "ליקוי חמה", "כבידה", "מדע פופולרי"],
  verdict: "התאריך אמיתי; הטענה על אובדן כבידה אינה נתמכת",
  cluster: "sky-climate",
  updated: "2026-06-22",
  changeFrequency: "monthly",
  priority: 0.88,
  ogAlt: "מקור בדיקה - בדיקת הטענה שכדור הארץ יאבד כבידה לשבע שניות באוגוסט 2026",
  claim: "ב־12 באוגוסט 2026 כדור הארץ יאבד כבידה ל־7 שניות, ו־NASA יודעת ומתכוננת לכך במסגרת Project Anchor אבל מסתירה את זה.",
  shortAnswer: "לא. יש ליקוי חמה מלא בתאריך הזה, אבל לא נמצא בסיס לטענה על אובדן כבידה.",
  bottomLine: "לא נמצא מקור רשמי או בסיס פיזיקלי לטענה שכדור הארץ יאבד כבידה לשבע שניות.",
  summaryPoints: [
    "ב־12 באוגוסט 2026 צפוי ליקוי חמה מלא במסלול שעובר בין היתר בגרינלנד, איסלנד וצפון ספרד.",
    "מ”יש אירוע אסטרונומי אמיתי” ל”NASA מסתירה אובדן כבידה עולמי”.",
  ],
  overview: "הגרעין האמיתי בטענה הוא התאריך: ב־12 באוגוסט 2026 צפוי ליקוי חמה מלא, אירוע אסטרונומי רגיל שאפשר לחשב את מסלולו מראש. אבל הטענה מוסיפה עליו שכבות שלא נמצאו במקורות רשמיים: Project Anchor, הסתרה של NASA, אובדן כבידה עולמי לשבע שניות וקישור לגלי כבידה או חורים שחורים. אלה כבר טענות אחרות, והן דורשות ראיות אחרות.",
  sources: [
    { id: "nasa-eclipse-map-2026", title: "NASA: Total Solar Eclipse of 2026 August 12", url: "https://eclipse.gsfc.nasa.gov/SEsearch/SEsearchmap.php?Ecl=20260812", level: "official", note: "מפת NASA למסלול ליקוי החמה המלא ב־12 באוגוסט 2026. מאשרת את האירוע האסטרונומי, לא טענה על אובדן כבידה." },
    { id: "nasa-eclipse-data-2026", title: "NASA: Besselian Elements - Total Solar Eclipse of 2026 August 12", url: "https://eclipse.gsfc.nasa.gov/SEsearch/SEdata.php?Ecl=+20260812", level: "official", note: "נתוני הליקוי של NASA: סוג הליקוי, זמן השיא, מסלול, רוחב ומשך. אין שם אירוע כבידה או Project Anchor." },
    { id: "nasa-eclipse-types", title: "NASA Science: Types of Solar Eclipses", url: "https://science.nasa.gov/eclipses/types/", level: "official", note: "הסבר רשמי: ליקוי חמה קורה כשהירח עובר בין השמש לכדור הארץ ומטיל צל על אזורים מסוימים בכדור הארץ." },
    { id: "nasa-search-project-anchor", title: "NASA Search: Project Anchor", url: "https://search.nasa.gov/search?affiliate=nasa&query=%22Project%20Anchor%22", level: "official", note: "חיפוש מדויק באתר NASA לביטוי Project Anchor. נכון למועד הבדיקה לא נמצא מקור רשמי שמציג פרויקט כזה בהקשר של אובדן כבידה." },
    { id: "ligo-gravitational-waves", title: "LIGO: What are Gravitational Waves?", url: "https://www.ligo.caltech.edu/page/what-are-gw", level: "official", note: "הסבר מדעי על גלי כבידה: גלים במרחב־זמן מאירועים קוסמיים אלימים, שנמדדים כשינויים זעירים מאוד כשהם מגיעים לכדור הארץ." },
    { id: "popular-mechanics-gravity-claim", title: "Popular Mechanics: Earth's Gravity Could Undergo a Bizarre Change, According to This Wild Theory", url: "https://www.popularmechanics.com/science/environment/a70480321/conspiracy-earth-gravity/", level: "secondary", note: "סיקור משני של הטענה הוויראלית סביב Project Anchor, כולל הפנייה לתגובת NASA שפורסמה דרך בדיקת עובדות." },
  ],
  faq: [
    { question: "אז כן יש משהו ב־12 באוגוסט 2026?", answer: "כן. צפוי ליקוי חמה מלא באזורים מסוימים בעולם. זה אירוע אמיתי, מחושב ומוכר, אבל הוא לא אומר שכדור הארץ יאבד כבידה." },
    { question: "יכול להיות שליקוי חמה משפיע על כבידה?", answer: "הירח והשמש תמיד מפעילים כבידה על כדור הארץ, ויש תופעות גאות ושפל. זה לא דומה לאובדן כבידה עולמי או להפסקה של כוח הכבידה לשבע שניות." },
    { question: "ומה לגבי גלי כבידה מחורים שחורים?", answer: "גלי כבידה קיימים, אבל כשהם מגיעים אלינו הם נמדדים כשינויים זעירים מאוד במרחב־זמן. הטענה שהם יכבו את כבידת כדור הארץ אינה נתמכת במקור מדעי שנבדק כאן." },
    { question: "מה יגרום לעדכן את המסקנה?", answer: "מקור רשמי של NASA או גוף מדעי מוכר שמציג נתונים, פרויקט, תחזית ומנגנון פיזיקלי ברור לאירוע כזה. נכון לבדיקה הזו לא נמצא מקור כזה." },
  ],
});

export const gravityLoss2026ProjectAnchorClaimContent = defineClaim({
  ...migratedGravityLoss2026ProjectAnchorClaimContent,
  lead: "הטענה נשמעת מדויקת כי יש לה תאריך, שם פרויקט וגוף גדול כמו NASA. זה בדיוק מה שהופך אותה למסוכנת: היא לוקחת אירוע אסטרונומי אמיתי — ליקוי חמה מלא ב־12 באוגוסט 2026 — ומלבישה עליו סיפור על אובדן כבידה, הסתרה ו־Project Anchor.",
  shareCopy: "ב־12 באוגוסט 2026 באמת צפוי ליקוי חמה מלא באזורים כמו גרינלנד, איסלנד וצפון ספרד. אבל לא נמצא בסיס לטענה שכדור הארץ יאבד כבידה ל־7 שניות, או ש־NASA מסתירה פרויקט בשם Project Anchor. זו קפיצה מאירוע אסטרונומי אמיתי לסיפור שלא נתמך במקור רשמי או בפיזיקה בסיסית.\nhttps://ai-source-lab.vercel.app/claims/gravity-loss-2026-project-anchor",
  body: [
    { id: "answer", type: "answer-box", eyebrow: "תשובה קצרה", title: migratedGravityLoss2026ProjectAnchorClaimContent.shortAnswer, paragraphs: migratedGravityLoss2026ProjectAnchorClaimContent.sections[0].paragraphs, variant: "answer" },
    { id: "verdict", type: "verdict-grid", items: [
      { label: "הטענה", text: migratedGravityLoss2026ProjectAnchorClaimContent.claim },
      { label: "השורה התחתונה", text: migratedGravityLoss2026ProjectAnchorClaimContent.bottomLine, emphasis: true },
      { label: "מה כן נכון", text: migratedGravityLoss2026ProjectAnchorClaimContent.summaryPoints[0] },
      { label: "איפה הסיפור קופץ", text: migratedGravityLoss2026ProjectAnchorClaimContent.summaryPoints[1] },
    ] },
    { id: "distinctions", type: "comparison-list", title: "ההבחנה החשובה", items: [
      { label: "התאריך:", text: "12 באוגוסט 2026 הוא תאריך אמיתי של ליקוי חמה מלא." },
      { label: "האירוע:", text: "ליקוי חמה הוא מעבר של הירח בין השמש לכדור הארץ, כך שהירח מטיל צל באזורים מסוימים." },
      { label: "הטענה הנוספת:", text: "אובדן כבידה עולמי לשבע שניות, Project Anchor והסתרה של NASA — אלה לא נובעים מהליקוי." },
      { label: "מה צריך להוכיח:", text: "מקור רשמי, נתונים פיזיקליים ומנגנון ברור שמסביר איך כבידת כדור הארץ נעלמת וחוזרת." },
    ] },
    { id: "evidence", type: "evidence-list", title: "מה המקורות מראים?", numbered: true, items: [
      { id: "eclipse-real", number: "01", title: "הליקוי אמיתי", paragraphs: ["נתוני NASA מציגים ליקוי חמה מלא ב־12 באוגוסט 2026, כולל זמן שיא, מסלול, רוחב מסלול ומשך מירבי של כשתי דקות ו־18 שניות באזור השיא. זה הגרעין האמיתי שעליו הטענה מתלבשת."] },
      { id: "eclipse-not-gravity-loss", number: "02", title: "ליקוי חמה הוא לא אובדן כבידה", paragraphs: ["NASA מסבירה שליקוי חמה קורה כשהירח עובר בין השמש לכדור הארץ ומטיל צל. זה אירוע של אור וצל מנקודת מבט של אזורים מסוימים על פני כדור הארץ, לא כיבוי של כוח הכבידה."] },
      { id: "project-anchor", number: "03", title: "Project Anchor לא נמצא כמקור רשמי", paragraphs: ["בחיפוש אחר מקור רשמי של NASA לביטוי Project Anchor בהקשר של אובדן כבידה לא נמצא מסמך שמציג פרויקט כזה. שם פרויקט שנשמע רשמי אינו מחליף מקור רשמי." ] },
      { id: "gravitational-waves", number: "04", title: "גלי כבידה לא הופכים את הטענה לסבירה", paragraphs: ["גלי כבידה הם תופעה אמיתית, ו־LIGO מתאר אותם כגלים במרחב־זמן שנוצרים מאירועים קוסמיים אלימים כמו חורים שחורים מתמזגים. אבל כשהם מגיעים לכדור הארץ הם זעירים עד כדי כך שנדרשים מכשירים רגישים במיוחד כדי למדוד אותם. זה לא מנגנון שמכבה את כבידת כדור הארץ." ] },
    ] },
    { id: "logic", type: "logic-chain", title: "שרשרת הטענה", steps: ["יש ליקוי חמה מלא ב־12 באוגוסט 2026", "NASA מחשבת ומפרסמת נתונים על ליקויים", "הטענה מזכירה Project Anchor וגלי כבידה"], conclusion: "לכן NASA מסתירה אובדן כבידה עולמי ל־7 שניות", note: "שני השלבים הראשונים נכונים ולא חשודים. הקפיצה היא להפוך מידע אסטרונומי גלוי לסיפור על אירוע כבידה סודי." },
    { id: "why-it-spreads", type: "paragraph-section", title: "למה זה תופס?", paragraphs: ["כי הטענה לא מתחילה מאפס. יש תאריך אמיתי, יש גוף מוכר כמו NASA, ויש מונחים מדעיים שנשמעים כבדים: גלי כבידה, חורים שחורים, ליקוי חמה. השילוב הזה יוצר תחושה של מסמך מסווג, גם כשאין מסמך כזה.", "זו בדיוק נקודת הבדיקה: לא לשאול אם משהו נשמע מדעי, אלא האם יש מקור שאפשר לפתוח, והאם המסקנה באמת נובעת מהמקור." ] },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    { id: "method", type: "method-note", title: "איך נבדקה הטענה?", paragraphs: ["הבדיקה הפרידה בין ארבע שכבות: קיום ליקוי חמה בתאריך, קיום מקור רשמי של NASA, קיום Project Anchor כמסמך רשמי, והטענה הפיזיקלית על אובדן כבידה. נמצא בסיס לשכבה הראשונה בלבד." ] },
  ],
  structuredData: { mode: "configured", entries: [
    { type: "article", placement: "page", headline: migratedGravityLoss2026ProjectAnchorClaimContent.title, description: migratedGravityLoss2026ProjectAnchorClaimContent.description, datePublished: "2026-06-22", dateModified: "2026-06-22", inLanguage: "he-IL" },
    { type: "faq", placement: "page", items: [
      { question: "האם כדור הארץ יאבד כבידה ב־12 באוגוסט 2026?", answer: "לא נמצא בסיס רשמי או פיזיקלי לטענה שכדור הארץ יאבד כבידה לשבע שניות בתאריך הזה." },
      { question: "מה באמת צפוי לקרות ב־12 באוגוסט 2026?", answer: "צפוי ליקוי חמה מלא במסלול שעובר באזורים כמו גרינלנד, איסלנד וצפון ספרד." },
    ] },
  ] },
  metadataOverrides: { title: `${migratedGravityLoss2026ProjectAnchorClaimContent.title} | מקור בדיקה`, description: migratedGravityLoss2026ProjectAnchorClaimContent.description, canonical: migratedGravityLoss2026ProjectAnchorClaimContent.path },
  workflow: { ...migratedGravityLoss2026ProjectAnchorClaimContent.workflow, checkedAt: "2026-06-22", credits: [{ id: "haim-rafael", name: "חיים רפאל", role: "author" }] },
} satisfies ClaimContent);
