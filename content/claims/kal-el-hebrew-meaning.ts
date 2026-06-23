import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedKalElHebrewMeaningClaimContent = defineMigratedClaimContent({
  slug: "kal-el-hebrew-meaning",
  path: "/claims/kal-el-hebrew-meaning",
  title: "האם Kal-El מסופרמן הוא רמז עברי מכוון?",
  description: "בדיקה של הטענה שהשם Kal-El של סופרמן הוא מסר עברי או דתי מכוון, דרך ההבדל בין רקע יהודי, פרשנות תרבותית וכוונה מוכחת.",
  kicker: "סמלים, שמות ותרבות פופולרית",
  tags: ["Superman", "Kal-El", "סופרמן", "עברית", "יהדות", "תרבות פופולרית"],
  verdict: "פרשנות עברית חזקה; כוונה מפורשת לא הוכחה",
  cluster: "pop-culture-symbols",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ש-Kal-El מסופרמן הוא רמז עברי מכוון",
  claim: "השם Kal-El של סופרמן נבחר במכוון כדי לרמוז בעברית ל\"קול אל\" או ל\"קולו של אלוהים\".",
  shortAnswer: "יש בסיס מעניין לפרשנות, אבל לא הוכחה לכוונה מפורשת.",
  bottomLine: "הקריאה העברית סביב Kal-El אינה המצאה ריקה: יוצרי סופרמן, Jerry Siegel ו-Joe Shuster, היו יהודים, וסופרמן נקרא לא פעם דרך הקבלות ליהדות, משה, גלות וזהות כפולה. גם מקורות תרבותיים קוראים את Kal-El כקרוב ל-\"Voice of God\". אבל בבדיקה הזו לא נמצא מקור ישיר של היוצרים שמאשר שהם בחרו בשם כדי להעביר מסר עברי או דתי מפורש. לכן נכון להציג זאת כפרשנות תרבותית חזקה, לא כהוכחה למסר סודי.",
  summaryPoints: [
    "יש גרעין אמת: שני יוצרי סופרמן היו יהודים, והדמות נקראת לעיתים דרך הקשרים יהודיים ומוטיבים של משה, גלות ואימוץ.",
    "השם Kal-El נקרא במקורות תרבותיים כקרוב ל-\"Voice of God\", וב-AP מצוין שהרכיב El בעברית מתקשר לאל/אלוהים.",
    "אבל פרשנות לשונית או תרבותית אינה זהה למסמך כוונה של היוצרים.",
    "לא נמצא בבדיקה מקור ישיר מסיגל או שוסטר שמאשר שהשם נבחר בכוונה כ\"קול אל\" בעברית.",
  ],
  overview: "זה קייס שמעלה רמה ביחס לטענות על סמלים. כאן לא מדובר רק בדמיון חזותי פשוט. יש באמת רקע יהודי, יש באמת פרשנויות רציניות, ויש באמת שם שנשמע לאנשים כמו עברית. לכן המטרה אינה למחוק את הפרשנות, אלא לסווג אותה נכון: מה ידוע כרקע, מה הוא קריאה תרבותית, ומה היה צריך להופיע כדי להפוך את הקריאה הזאת להוכחת כוונה.",
  sources: [
    { id: "ap-superman-religion", title: "AP — Superman's religious and ethical undertones", url: "https://apnews.com/article/828f16fb956c487368d94676b04fa2c3", level: "secondary", note: "כתבת AP על ההקשרים הדתיים והמוסריים של סופרמן. מציינת את סיגל ושוסטר כיוצרים יהודים ואת Kal-El כחלק מהדיון על שורשים יהודיים ודתיים." },
    { id: "new-yorker-kryptonomics", title: "The New Yorker — Kryptonomics", url: "https://www.newyorker.com/magazine/2013/06/24/kryptonomics", level: "secondary", note: "רקע תרבותי על סופרמן, הגירה וזהות יהודית-אמריקאית. מציין ש-Kal-El קרוב בעברית ל-Voice of God, אך לא מציג זאת כאישור ישיר של כוונת היוצרים." },
    { id: "ew-nicolas-cage-kal-el", title: "Entertainment Weekly — Nicolas Cage on naming his son Kal-El", url: "https://ew.com/nicolas-cage-insists-he-didnt-name-son-kal-el-after-superman-11986576", level: "secondary", note: "עובדת בונוס תרבותית: ניקולס קייג׳ אמר שבחר בשם Kal-El בגלל המשמעות העברית שהוא מייחס לו. זה מעניין, אבל אינו ראיה לכוונת יוצרי סופרמן." },
    { id: "superman-literary-analysis", title: "Superman — literary analysis and religious themes", url: "https://en.wikipedia.org/wiki/Superman#Religious_themes", level: "context", note: "רקע מסכם על קריאות יהודיות ודתיות סביב סופרמן, כולל ההבחנה שהראיות להשפעה ישירה הן בעיקר נסיבתיות." },
  ],
  faq: [
    { question: "אז Kal-El באמת אומר קול אל בעברית?", answer: "זו קריאה נפוצה ומעניינת, במיוחד סביב הדמיון ל-\"קול אל\" והמשמעות של El כשורש שמי/עברי הקשור לאל. אבל השאלה בבדיקה אינה רק אם אפשר לקרוא כך את השם, אלא האם יש מקור שמוכיח שכך התכוונו היוצרים." },
    { question: "למה לא להציג את זה כהוכחה?", answer: "כי הוכחה לכוונה דורשת מקור על כוונה: ראיון, מכתב, מסמך עיצוב או עדות ישירה של היוצרים. בלי זה נשארים עם פרשנות תרבותית חזקה, לא עם מסר סודי מוכח." },
    { question: "האם זה אומר שאין השפעה יהודית על סופרמן?", answer: "לא. יש בהחלט רקע יהודי וקריאות תרבותיות משמעותיות סביב סופרמן. הבדיקה רק מפרידה בין השפעה/הדהוד/פרשנות לבין טענה על כוונה מפורשת בשם Kal-El." },
    { question: "מה עובדת הבונוס על ניקולס קייג׳ מוכיחה?", answer: "היא מוכיחה שהפרשנות ל-Kal-El כ-Voice of God קיימת בתרבות הפופולרית ומשפיעה גם מחוץ לקומיקס. היא לא מוכיחה מה סיגל ושוסטר התכוונו בשנות ה-30." },
  ],
});

export const kalElHebrewMeaningClaimContent = defineClaim({
  ...migratedKalElHebrewMeaningClaimContent,
  workflow: {
    ...migratedKalElHebrewMeaningClaimContent.workflow,
    checkedAt: "2026-06-23",
  },
  lead: "הטענה על Kal-El מעניינת דווקא כי היא לא נשענת רק על דמיון מקרי. יש כאן רקע יהודי אמיתי, שם שמקבל קריאה עברית, ופרשנויות תרבותיות רציניות. אבל האתר לא עוצר ב\"זה נשמע מתאים\": הוא בודק איפה נגמרת פרשנות טובה ואיפה מתחילה טענה על כוונה מוכחת.",
  shareCopy: `הקריאה של Kal-El כ\"קול אל\" או Voice of God היא פרשנות תרבותית מעניינת, במיוחד כי יוצרי סופרמן היו יהודים ויש סביב הדמות הקבלות ליהדות, משה וזהות כפולה. אבל בבדיקה לא נמצא מקור ישיר מסיגל או שוסטר שמאשר שזו הייתה הכוונה בשם. לכן זו פרשנות חזקה — לא הוכחה למסר סודי.
${siteUrl}/claims/kal-el-hebrew-meaning`,
  exhibits: [
    {
      id: "kal-el-cultural-reading",
      src: "/evidence/kal-el-cultural-reading.svg",
      alt: "איור פנימי ללא טקסט של דמות גיבור־על כללית בין שמיים, עיר ואור זהות כפולה",
      title: "מוצג 1.",
      caption: "איור פנימי מקורי שמייצג דמות גיבור־על כללית וזהות כפולה סביב מיתוס, מורשת ופרשנות תרבותית. האיור אינו מקור היסטורי ואינו ראיה לכוונת יוצרי סופרמן.",
    },
  ],
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: "יש פרשנות עברית חזקה, אבל לא הוכחת כוונה.",
      paragraphs: [
        migratedKalElHebrewMeaningClaimContent.bottomLine,
        "לכן זה לא קייס של \"שטויות\" ולא קייס של \"הוכחה סודית\". זה קייס שמראה איך פרשנות יכולה להיות מעניינת גם כשהיא לא עוברת את הרף של ראיה ישירה.",
      ],
      variant: "answer",
    },
    {
      id: "layers",
      type: "source-levels",
      title: "שלוש שכבות שלא לערבב",
      rows: [
        { label: "רקע", title: "יוצרים יהודים ודמות עם זהות כפולה", paragraphs: ["Jerry Siegel ו-Joe Shuster היו יוצרים יהודים, וסופרמן נקרא לא פעם דרך חוויות של הגירה, גלות, אימוץ וזהות כפולה."] },
        { label: "פרשנות", title: "Kal-El כקריאה עברית/דתית", paragraphs: ["מקורות תרבותיים קוראים את Kal-El כקרוב ל-Voice of God או ל\"קול אל\". זו קריאה מעניינת שמסבירה למה הטענה מושכת."] },
        { label: "כוונה", title: "מה צריך כדי להוכיח", paragraphs: ["כדי לטעון שזה היה מסר עברי מכוון צריך מקור ישיר מהיוצרים או מתהליך היצירה שמאשר את הכוונה הזאת."] },
      ],
    },
    {
      id: "exhibits-intro",
      type: "paragraph-section",
      title: "מוצגים ואיורים",
      paragraphs: ["אלה לא צילומי מקור, אלא איורים פנימיים שנועדו להמחיש רעיון. האיור בעמוד הזה נקי מטקסט כדי לא להפוך פרשנות חזותית לראיה מזויפת."],
    },
    { id: "exhibits", type: "gallery", source: "claim" },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים?",
      numbered: true,
      items: [
        {
          id: "jewish-context",
          title: "יש בסיס אמיתי לקריאה יהודית סביב סופרמן",
          paragraphs: [
            "AP מתארת את סופרמן כדמות עם הקשרים דתיים ומוסריים, ומזכירה את הרקע היהודי של היוצרים ואת הדיון סביב Kal-El.",
            "The New Yorker מדגיש את סופרמן כחלק מחוויית הגירה וזהות יהודית־אמריקאית, ומציין את הקרבה של Kal-El ל-Voice of God.",
          ],
        },
        {
          id: "interpretation-not-proof",
          title: "פרשנות תרבותית אינה מסמך כוונה",
          paragraphs: [
            "העובדה ששם נשמע עברי, או שדמות ניתנת לקריאה דרך מיתוסים יהודיים, אינה מוכיחה לבד שהיוצרים תכננו מסר סודי בשם.",
            "כאן בדיוק עובר הקו: פרשנות יכולה להיות חזקה ומעניינת, אבל טענת כוונה צריכה מקור ישיר יותר.",
          ],
        },
        {
          id: "missing-source",
          title: "מה לא נמצא בבדיקה",
          paragraphs: [
            "לא נמצא מקור ישיר של Jerry Siegel או Joe Shuster שאומר שהם בחרו בשם Kal-El כדי לרמוז במפורש ל\"קול אל\" בעברית.",
            "בלי מקור כזה, המסקנה הזהירה היא שהקריאה העברית היא פרשנות תרבותית חזקה — לא הוכחה לכוונה מפורשת.",
          ],
        },
      ],
    },
    {
      id: "bonus-heading",
      type: "paragraph-section",
      title: "עובדת בונוס",
      paragraphs: [],
    },
    {
      id: "nicolas-cage-bonus",
      type: "method-note",
      title: "ניקולס קייג׳ קרא לבן שלו Kal-El — אבל זה לא מוכיח את כוונת היוצרים",
      paragraphs: [
        "ניקולס קייג׳ אמר לאחרונה שהוא לא קרא לבנו Kal-El בגלל הערצה לסופרמן בלבד, אלא בגלל המשמעות העברית שהוא מייחס לשם — Voice of God. זו עובדה תרבותית מושכת שמראה שהפרשנות חיה וקיימת, אבל היא אינה מקור על מה שסיגל ושוסטר התכוונו אליו בשנות ה-30.",
      ],
    },
    {
      id: "logic-jump",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      ariaLabel: "שרשרת הקפיצה הלוגית בטענת Kal-El והעברית",
      steps: [
        "יוצרי סופרמן היו יהודים",
        "Kal-El נשמע קרוב לקריאה עברית",
        "יש הקבלות בין סופרמן למוטיבים יהודיים",
      ],
      conclusion: "לכן זו כוונה עברית מוכחת בשם",
      note: "שלושת השלבים הראשונים מחזקים פרשנות. הקפיצה מתרחשת כשמחליפים פרשנות תרבותית במקור ישיר על כוונת היוצרים.",
    },
    {
      id: "what-would-count",
      type: "comparison-list",
      title: "מה היה מחזק את הטענה?",
      items: [
        { label: "חלש", text: "רק זה שהשם נשמע דומה ל\"קול אל\".", tone: "contradicts" },
        { label: "בינוני", text: "כתבות וניתוחים שמראים שהקריאה העברית נפוצה ומעניינת.", tone: "neutral" },
        { label: "חזק", text: "ראיון, מכתב, מסמך יצירה או עדות ישירה של היוצרים על בחירת השם.", tone: "supports" },
        { label: "כאן", text: "נמצא בסיס פרשני חזק, אבל לא מקור ישיר לכוונה מפורשת.", tone: "caution" },
      ],
    },
    {
      id: "method-note",
      type: "method-note",
      title: "כלל עבודה לקייסים כאלה",
      paragraphs: [
        "לא כל פרשנות היא קונספירציה, ולא כל השראה היא הוכחת כוונה. השאלה המדויקת היא: מה המקור אומר, ומה אנחנו מוסיפים עליו כקריאה תרבותית?",
      ],
    },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "copy", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
  ],
  structuredData: {
    mode: "configured",
    entries: [{
      type: "article",
      placement: "page",
      headline: migratedKalElHebrewMeaningClaimContent.title,
      description: migratedKalElHebrewMeaningClaimContent.description,
      datePublished: "2026-06-23",
      dateModified: "2026-06-23",
      inLanguage: "he-IL",
    }],
  },
  metadataOverrides: {
    title: `${migratedKalElHebrewMeaningClaimContent.title} | מקור בדיקה`,
    description: migratedKalElHebrewMeaningClaimContent.description,
    canonical: migratedKalElHebrewMeaningClaimContent.path,
    openGraph: {
      title: migratedKalElHebrewMeaningClaimContent.title,
      description: migratedKalElHebrewMeaningClaimContent.description,
      url: `${siteUrl}${migratedKalElHebrewMeaningClaimContent.path}`,
      siteName: "מקור בדיקה",
      locale: "he_IL",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: migratedKalElHebrewMeaningClaimContent.title,
      description: migratedKalElHebrewMeaningClaimContent.description,
    },
  },
});
