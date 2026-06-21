import { defineClaim, type ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedProjectBlueBeamNasaClaimContent = defineMigratedClaimContent({
  slug: "project-blue-beam-nasa",
  path: "/claims/project-blue-beam-nasa",
  title: "האם Project Blue Beam הוא תוכנית רשמית של NASA?",
  description: "בדיקה של הטענה ש־Project Blue Beam הוא פרויקט רשמי של NASA או האו״ם לזיוף פלישת חוצנים או התגלות דתית לצורך סדר עולמי חדש.",
  kicker: "חוצנים וסדר עולמי",
  tags: ["חוצנים", "NASA", "האו״ם", "סדר עולמי", "מקור רשמי"],
  verdict: "לא נמצא מקור רשמי של NASA או האו״ם",
  cluster: "institutional-narratives",
  updated: "2026-06-20",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה ש-Project Blue Beam הוא תוכנית רשמית של NASA",
  claim: "Project Blue Beam הוא פרויקט אמיתי של NASA/האו״ם לזיוף פלישת חוצנים או התגלות דתית.",
  shortAnswer: "לא נמצא מקור רשמי של NASA או האו״ם לתוכנית כזו.",
  bottomLine: "לא נמצא מקור רשמי שמאשר את זה.",
  summaryPoints: [
    "יש נרטיב מוכר בשם הזה, והוא חוזר ברשת סביב אירועי עב״מים, רחפנים ואורות בשמיים.",
    "מ”מונאסט כתב ש־NASA מעורבת” ל”NASA מפעילה תוכנית אמיתית”.",
  ],
  overview: "Project Blue Beam מוכר בעיקר כנרטיב קונספירטיבי שמיוחס לסרז׳ מונאסט משנות ה־90. הוא מזכיר את NASA והאו״ם בתוך הסיפור, אבל נכון לבדיקה הזו לא נמצא מסמך רשמי של NASA או של האו״ם שמציג את Project Blue Beam כתוכנית אמיתית.",
  sources: [
    { id: "nasa-search", title: "NASA Search: Project Blue Beam", url: "https://search.nasa.gov/search?affiliate=nasa&query=%22Project%20Blue%20Beam%22", level: "official", note: "חיפוש מדויק באתר NASA לביטוי Project Blue Beam. נכון למועד הבדיקה לא נמצא מקור רשמי שמציג את הביטוי כתוכנית של NASA." },
    { id: "un-search", title: "United Nations Search: Project Blue Beam", url: "https://search.un.org/results.php?query=%22Project%20Blue%20Beam%22", level: "official", note: "חיפוש מדויק באתר האו״ם לביטוי Project Blue Beam. נכון למועד הבדיקה לא נמצא מקור רשמי שמחבר את הטענה לאו״ם." },
    { id: "serge-monast", title: "Serge Monast — background profile", url: "https://en.wikipedia.org/wiki/Serge_Monast", level: "context", note: "מקור רקע על סרז׳ מונאסט, שמזוהה עם הפצת הטענה בשנות ה־90. זה מקור רקע, לא מקור רשמי של NASA או האו״ם." },
    { id: "blue-beam-theory", title: "Projet Blue Beam — summary of the theory", url: "https://fr.wikipedia.org/wiki/Projet_Blue_Beam", level: "context", note: "רקע כללי על מבנה התיאוריה: הולוגרמות, דמויות דתיות, פלישת חוצנים וסדר עולמי חדש. לא מסמך רשמי." },
    { id: "guardian-drones", title: "The Guardian: drones and renewed Blue Beam claims", url: "https://www.theguardian.com/us-news/2024/dec/17/drones-new-jersey-fbi", level: "secondary", note: "דוגמה עדכנית לאופן שבו הטענה חוזרת ברשת סביב אירועי רחפנים ואורות בשמיים. רלוונטי להפצה, לא להוכחת הטענה." },
    { id: "project-blue-book", title: "Project Blue Book — real U.S. Air Force UFO study", url: "https://en.wikipedia.org/wiki/Project_Blue_Book", level: "context", note: "רקע על פרויקט אמיתי בעל שם דומה: Project Blue Book של חיל האוויר האמריקאי. חשוב להפרדה בין פרויקט היסטורי אמיתי לבין Blue Beam." },
  ],
  faq: [
    { question: "אז Project Blue Beam לא קיים בכלל?", answer: "הנרטיב קיים. אנשים מדברים עליו, מפיצים אותו, ויש מקורות רקע על מקורו. מה שלא נמצא כאן הוא מקור רשמי שמראה שזו תוכנית אמיתית של NASA או האו״ם." },
    { question: "האם זה מוכיח שאין טכנולוגיות סודיות?", answer: "לא. זו לא הבדיקה. הבדיקה כאן צרה: האם הטענה הספציפית על Project Blue Beam כתוכנית NASA/UN מגובה במסמך רשמי." },
    { question: "למה הטענה חוזרת כל פעם שיש אורות או רחפנים?", answer: "כי היא נותנת מסגרת דרמטית לאירוע לא ברור: לא “אנחנו לא יודעים עדיין”, אלא “זה חלק מתוכנית ענק”. זה אנושי ומושך, אבל לא מחליף מקור." },
    { question: "מה יגרום לעדכן את המסקנה?", answer: "מסמך רשמי, ארכיון ממשלתי, תיעוד מקורי או מקור אמין שמפנה למסמך כזה. אם מקור כזה יופיע, המסקנה תעודכן." },
  ],
});

export const projectBlueBeamNasaClaimContent = defineClaim({
  ...migratedProjectBlueBeamNasaClaimContent,
  lead: "Project Blue Beam הוא אחד הנרטיבים הוויראליים הכי חזקים באזור שבין חוצנים, סדר עולמי חדש, טכנולוגיה סודית ודת. הטענה נשמעת כמו מסמך ממשלתי שנחשף: NASA והאו״ם יזייפו התגלות דתית או פלישת חוצנים כדי לאחד את האנושות תחת שליטה אחת. אבל השאלה שלנו צרה יותר: האם יש מקור רשמי שמראה שזה באמת פרויקט של NASA או האו״ם?",
  shareCopy: "Project Blue Beam הוא נרטיב קונספירטיבי מוכר, בעיקר סביב טענות של סרז׳ מונאסט משנות ה־90. נכון לבדיקה הזו לא נמצא מקור רשמי של NASA או של האו״ם שמראה שמדובר בתוכנית אמיתית. הקפיצה היא להפוך סיפור שמייחס משהו ל־NASA למסמך רשמי של NASA.\nhttps://ai-source-lab.vercel.app/claims/project-blue-beam-nasa",
  body: [
    { id: "answer", type: "answer-box", eyebrow: "תשובה קצרה", title: migratedProjectBlueBeamNasaClaimContent.shortAnswer, paragraphs: migratedProjectBlueBeamNasaClaimContent.sections[0].paragraphs, variant: "answer" },
    { id: "verdict", type: "verdict-grid", items: [
      { label: "הטענה", text: migratedProjectBlueBeamNasaClaimContent.claim },
      { label: "השורה התחתונה", text: migratedProjectBlueBeamNasaClaimContent.bottomLine, emphasis: true },
      { label: "מה כן נכון", text: migratedProjectBlueBeamNasaClaimContent.summaryPoints[0] },
      { label: "איפה הסיפור קופץ", text: migratedProjectBlueBeamNasaClaimContent.summaryPoints[1] },
    ] },
    { id: "what-is-blue-beam", type: "paragraph-section", title: "מה זה Project Blue Beam?", paragraphs: ["בגרסה הנפוצה של הסיפור, גורמים חזקים משתמשים בטכנולוגיה מתקדמת — הולוגרמות, תקשורת תודעתית, אירועים בשמיים או פלישת חוצנים מבוימת — כדי לגרום לאנושות לוותר על דתות, גבולות וספקנות, ולקבל סדר עולמי חדש. זה סיפור בנוי היטב: הוא מחבר פחד מטכנולוגיה, פחד מממשלה, חוצנים, דת ואג׳נדה גלובלית."] },
    { id: "distinctions", type: "comparison-list", items: [
      { label: "הגרעין האמיתי:", text: "יש תיאוריה מוכרת בשם Project Blue Beam, והיא מופצת כבר שנים." },
      { label: "הייחוס:", text: "הטענה מייחסת את התוכנית ל־NASA ולעיתים גם לאו״ם." },
      { label: "הבעיה:", text: "ייחוס בתוך סיפור אינו מסמך רשמי של הגוף שמוזכר בסיפור." },
      { label: "מה צריך להראות:", text: "מסמך NASA/UN, מספר תיק, דף רשמי או מקור ראשוני אמין." },
    ] },
    { id: "what-we-checked", type: "paragraph-section", title: "מה בדקנו?", paragraphs: ["הבדיקה התחילה מהביטוי המדויק: Project Blue Beam. חיפשנו האם הביטוי מופיע כמסמך או תוכנית רשמית באתר NASA, והאם הוא מופיע באופן רשמי באתר האו״ם. בנוסף בדקנו מקורות רקע שמייחסים את מקור הסיפור לסרז׳ מונאסט ולגלי הפצה חוזרים ברשת."] },
    { id: "gateway-comparison", type: "method-note", title: "למה זה לא אותו דבר כמו Gateway?", paragraphs: ["ב־Gateway היה מסמך אמיתי של ה־CIA, והבדיקה הייתה: האם המסמך מוכיח את מה שאומרים עליו. ב־Blue Beam המצב הפוך: קודם צריך למצוא בכלל מסמך רשמי של NASA או של האו״ם. בלי מסמך כזה, אין עדיין מה לפרש — יש נרטיב שמייחס את עצמו למוסדות רשמיים."] },
    { id: "blue-book", type: "paragraph-section", title: "בלבול אפשרי: Blue Beam מול Blue Book", paragraphs: ["יש פרויקט אמיתי בשם Project Blue Book, שהיה מחקר של חיל האוויר האמריקאי על דיווחי עב״מים באמצע המאה ה־20. זה לא Project Blue Beam. דמיון בשם, נושא של עב״מים וארכיונים ממשלתיים יכולים לעזור לנרטיב להישמע רשמי, אבל הם לא הופכים אותו למסמך NASA."] },
    { id: "logic", type: "logic-chain", title: "שרשרת הטענה", steps: ["יש סיפור בשם Blue Beam", "הסיפור מזכיר את NASA והאו״ם", "הסיפור חוזר סביב אירועים בשמיים"], conclusion: "לכן זו תוכנית רשמית", note: "שלושת החלקים הראשונים יכולים להסביר למה הטענה מושכת. הקפיצה היא החלק האחרון: ייחוס אינו ראיה רשמית." },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "המקורות שנבדקו", source: "claim" },
    { id: "method", type: "method-note", title: "איך נבדקה הטענה?", paragraphs: ["הפרדנו בין שלושה דברים: קיום הנרטיב, הייחוס שלו ל־NASA/האו״ם, והוכחה רשמית שהגופים האלה מפעילים תוכנית כזו. המסקנה אינה “כל שאלה על עב״מים היא שטויות”, אלא ש־Project Blue Beam לא הוצג כאן כמסמך רשמי של NASA או של האו״ם."] },
  ],
  structuredData: { mode: "configured", entries: [{ type: "article", placement: "page", headline: migratedProjectBlueBeamNasaClaimContent.title, description: migratedProjectBlueBeamNasaClaimContent.description, datePublished: "2026-06-20", dateModified: "2026-06-20", inLanguage: "he-IL" }] },
  metadataOverrides: { title: `${migratedProjectBlueBeamNasaClaimContent.title} | מקור בדיקה`, description: migratedProjectBlueBeamNasaClaimContent.description, canonical: migratedProjectBlueBeamNasaClaimContent.path },
  workflow: { ...migratedProjectBlueBeamNasaClaimContent.workflow, credits: [{ id: "haim-rafael", name: "חיים רפאל", role: "author" }] },
} satisfies ClaimContent);
