import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedPallaviciniIslamResponsibilityClaimContent = defineMigratedClaimContent({
  slug: "pallavicini-islam-responsibility",
  path: "/claims/pallavicini-islam-responsibility",
  title: "האם Pallavicini קשור לאסלאם — או שטענה ויראלית קפצה מאדם אחד להיסטוריה שלמה?",
  description: "בדיקה של הטענה שמשפחת Pallavicini אחראית על האסלאם, מול אדם מודרני בשם Abd al-Wahid Pallavicini, משפחת אצולה אירופית והכרונולוגיה של האסלאם.",
  kicker: "ייחוס, דתות ונרטיבים היסטוריים",
  tags: ["Pallavicini", "אסלאם", "Abd al-Wahid Pallavicini", "היסטוריה", "דתות", "קפיצה לוגית"],
  verdict: "קשר מודרני אמיתי; אחריות על האסלאם לא הוכחה",
  cluster: "institutional-narratives",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת הטענה שמשפחת Pallavicini אחראית על האסלאם",
  claim: "משפחת Pallavicini יצרה, מנהלת או אחראית על האסלאם.",
  shortAnswer: "לא לפי המקורות שנבדקו.",
  bottomLine: "יש גרעין אמת: Abd al-Wahid Pallavicini היה אדם מודרני שהתאסלם, פעל סביב סופיות ודיאלוג בין־דתי, והיה קשור למוסדות מוסלמיים באיטליה ובאירופה. יש גם משפחת Pallavicini אירופית עתיקה. אבל שני הדברים האלה אינם מוכיחים שמשפחת Pallavicini יצרה, מנהלת או אחראית על האסלאם — דת שמקורה ההיסטורי במאה ה־7 בחצי האי ערב, סביב מוחמד והקהילה המוסלמית הראשונה.",
  summaryPoints: [
    "Abd al-Wahid Pallavicini היה דמות אמיתית באסלאם האירופי המודרני, לא שם מומצא.",
    "משפחת Pallavicini היא משפחת אצולה איטלקית עתיקה, והשם עצמו אכן נושא משקל היסטורי אירופי.",
    "אבל כרונולוגיה בסיסית מפרידה בין משפחת אצולה אירופית מתועדת לבין ראשית האסלאם במאה ה־7 בחצי האי ערב.",
    "לא נמצא מקור שמראה שמשפחת Pallavicini יצרה, מנהלת או אחראית על האסלאם כולו.",
  ],
  overview: "הטענה הזאת עובדת כי היא מערבבת כמה דברים אמיתיים: שם משפחה אירופי עתיק, אדם מודרני שהתאסלם, פעילות מוסלמית באיטליה ודיאלוג בין־דתי. אבל בדיקה היסטורית צריכה לשאול מה בדיוק נובע מכל עובדה. אדם בשם Pallavicini שהיה פעיל באסלאם האירופי המודרני אינו ראיה לכך שמשפחה אירופית אחראית על דת עולמית שמקורה מאות שנים קודם לכן באזור אחר לגמרי.",
  sources: [
    { id: "abd-al-wahid-pallavicini", title: "Abd al-Wahid Pallavicini — biographical background", url: "https://en.wikipedia.org/wiki/Abd_al_Wahid_Pallavicini", level: "context", note: "רקע ביוגרפי על Felice / Abd al-Wahid Pallavicini: המרה לאסלאם, פעילות סופית, COREIS ודיאלוג בין־דתי. משמש כרקע, לא כראיה לטענה רחבה על האסלאם כולו." },
    { id: "coreis-background", title: "Italian Islamic Religious Community — COREIS background", url: "https://en.wikipedia.org/wiki/Italian_Islamic_Religious_Community", level: "context", note: "רקע על COREIS, ארגון איסלאמי איטלקי שנקשר ל-Abd al-Wahid Pallavicini. מסייע להבין את הגרעין המודרני של הטענה." },
    { id: "pallavicini-family", title: "Pallavicini family — historical background", url: "https://en.wikipedia.org/wiki/Pallavicini_family", level: "context", note: "רקע על משפחת Pallavicini כמשפחת אצולה איטלקית עתיקה. שימושי לבדיקת הכרונולוגיה והקפיצה מהשם המשפחתי לטענה על דת שלמה." },
    { id: "britannica-islam", title: "Encyclopaedia Britannica — Islam", url: "https://www.britannica.com/topic/Islam", level: "secondary", note: "רקע אנציקלופדי על ראשית האסלאם, מוחמד והקהילה המוסלמית הראשונה. משמש לקיבוע ציר הזמן ההיסטורי הרחב." },
    { id: "assisi-interreligious-meeting", title: "Interreligious meeting in Assisi, 1986", url: "https://en.wikipedia.org/wiki/World_Day_of_Prayer_for_Peace", level: "context", note: "רקע על מפגש אסיזי הבין־דתי לשלום ב-1986. משמש לעובדת הבונוס על מעורבות Pallavicini בדיאלוג בין־דתי, לא כהוכחה לטענה הוויראלית." },
  ],
  faq: [
    { question: "אז Pallavicini לא קשור בכלל לאסלאם?", answer: "יש קשר לאדם מודרני בשם Abd al-Wahid Pallavicini, שהתאסלם ופעל סביב מוסדות ודיאלוג בין־דתי באירופה. זה קשר אמיתי, אבל הוא מודרני ומוגבל — לא אחריות על האסלאם כולו." },
    { question: "האם משפחת Pallavicini באמת עתיקה?", answer: "כן, לפי מקורות רקע היא משפחת אצולה איטלקית עתיקה. דווקא בגלל זה חשוב לבדוק ציר זמן: שם משפחה אירופי עתיק אינו מסביר את ראשית האסלאם במאה ה־7 בחצי האי ערב." },
    { question: "מה הייתה הקפיצה הלוגית?", answer: "הקפיצה היא לקחת אדם אחד ממשפחה אירופית, שפעל באסלאם האיטלקי המודרני, ולהפוך אותו או את משפחתו להסבר למקור או ניהול של דת שלמה." },
    { question: "מה היה מחזק את הטענה?", answer: "מקור היסטורי ישיר שמראה קשר סיבתי בין משפחת Pallavicini לבין יצירת האסלאם, שליטה במוסדותיו הראשונים או ניהול דת עולמית לאורך זמן. מקור כזה לא נמצא בבדיקה הזאת." },
  ],
});

export const pallaviciniIslamResponsibilityClaimContent = defineClaim({
  ...migratedPallaviciniIslamResponsibilityClaimContent,
  workflow: {
    ...migratedPallaviciniIslamResponsibilityClaimContent.workflow,
    checkedAt: "2026-06-23",
  },
  lead: "זה קייס שבו הגרעין האמיתי דווקא חשוב: יש אדם בשם Pallavicini שהיה פעיל באסלאם האירופי המודרני, ויש משפחת Pallavicini אירופית עתיקה. אבל ככל שהעובדות נשמעות מעניינות יותר, כך צריך להיזהר מהקפיצה מהן למסקנה ענקית מדי.",
  shareCopy: `יש קשר אמיתי בין אדם מודרני בשם Abd al-Wahid Pallavicini לבין פעילות מוסלמית ודיאלוג בין־דתי באיטליה ובאירופה. יש גם משפחת Pallavicini אירופית עתיקה. אבל שתי העובדות האלה לא מוכיחות שמשפחת Pallavicini יצרה, מנהלת או אחראית על האסלאם — שמקורו ההיסטורי במאה ה־7 בחצי האי ערב. קשר לדמות אחת אינו ראיה לשליטה על דת שלמה.
${siteUrl}/claims/pallavicini-islam-responsibility`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: "יש קשר מודרני אמיתי, לא הוכחה לאחריות על דת שלמה.",
      paragraphs: [
        migratedPallaviciniIslamResponsibilityClaimContent.bottomLine,
        "המשפט המרכזי של הבדיקה: קשר אמיתי לדמות אחת אינו ראיה לשליטה על דת שלמה.",
      ],
      variant: "answer",
    },
    {
      id: "timeline",
      type: "source-levels",
      title: "ציר זמן טקסטואלי",
      rows: [
        { label: "המאה ה־7", title: "ראשית האסלאם", paragraphs: ["האיסלאם מתפתח בחצי האי ערב סביב מוחמד והקהילה המוסלמית הראשונה. זו נקודת הזמן המרכזית לכל טענה על מקור האסלאם."] },
        { label: "מאה 11 ואילך", title: "משפחת Pallavicini באירופה", paragraphs: ["מקורות רקע מציגים את Pallavicini כמשפחת אצולה איטלקית עתיקה. זה מעניק לשם משקל היסטורי, אבל לא מחבר אותו אוטומטית לראשית האסלאם."] },
        { label: "1926–2017", title: "Abd al-Wahid Pallavicini", paragraphs: ["Felice Pallavicini, שהפך ל-Abd al-Wahid Pallavicini, היה דמות מודרנית באסלאם האירופי ובדיאלוג בין־דתי."] },
        { label: "הקפיצה", title: "מאדם אחד לדת שלמה", paragraphs: ["מכאן הטענה קופצת מפעילות מוסלמית מודרנית באיטליה למסקנה שמשפחה אירופית אחראית על האסלאם כולו. זו קפיצה שלא נתמכת במקור שנבדק."] },
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "מה המקורות מראים?",
      numbered: true,
      items: [
        {
          id: "modern-person",
          title: "Abd al-Wahid Pallavicini היה דמות אמיתית באסלאם האירופי המודרני",
          paragraphs: [
            "מקורות רקע מתארים אותו כאיטלקי שהתאסלם, פעל סביב סופיות, COREIS ודיאלוג בין־דתי, והיה חלק מהשיח על איסלאם איטלקי/אירופי.",
            "זה מסביר למה השם Pallavicini מופיע בהקשרים מוסלמיים מודרניים — אבל לא מוכיח אחריות על האסלאם כולו.",
          ],
        },
        {
          id: "family-background",
          title: "משפחת Pallavicini היא משפחה אירופית עתיקה",
          paragraphs: [
            "מקורות רקע מציגים את Pallavicini כמשפחת אצולה איטלקית ששמה מופיע בהיסטוריה האירופית של ימי הביניים.",
            "גם זו עובדה מעניינת, אבל הכרונולוגיה דווקא מחלישה את הטענה: משפחה אירופית מתועדת מאוחרת אינה מסבירה את מקור האסלאם במאה ה־7.",
          ],
        },
        {
          id: "islam-origin",
          title: "ראשית האסלאם קודמת לטענה על Pallavicini",
          paragraphs: [
            "מקורות היסטוריים כלליים ממקמים את ראשית האסלאם סביב מוחמד, ההתגלות, ההיג'רה והקהילה המוסלמית הראשונה בחצי האי ערב במאה ה־7.",
            "כדי להחליף את ההסבר ההיסטורי הזה בטענה על משפחה אירופית צריך מקור חזק מאוד — לא רק שם משפחה שמופיע בהקשר מוסלמי מודרני.",
          ],
        },
      ],
    },
    {
      id: "bonus-heading",
      type: "paragraph-section",
      title: "עובדות בונוס",
      paragraphs: [],
    },
    {
      id: "bonus-pallavicini-assisi",
      type: "method-note",
      title: "Abd al-Wahid Pallavicini כן היה דמות בדיאלוג בין־דתי",
      paragraphs: [
        "לפי מקורות רקע, Pallavicini היה מעורב בדיאלוג בין־דתי ואף נבחר לייצג את האיסלאם האיטלקי במפגש הבין־דתי לשלום באסיזי ב-1986, שיזם האפיפיור יוחנן פאולוס השני. זו עובדה שמחזקת את מקומו כדמות מודרנית מוכרת — אבל לא מוכיחה שליטה או אחריות על האסלאם כולו.",
      ],
    },
    {
      id: "bonus-family",
      type: "method-note",
      title: "גם המשפחה עצמה אינה שם אקראי",
      paragraphs: [
        "משפחת Pallavicini אכן מופיעה במקורות רקע כמשפחת אצולה איטלקית עתיקה. זה מסביר למה השם נשמע גדול ומושך פרשנויות, אבל שם היסטורי מרשים אינו מקור שמוכיח קשר סיבתי להיווצרות דת עולמית.",
      ],
    },
    {
      id: "logic-chain",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      ariaLabel: "שרשרת הקפיצה הלוגית בטענת Pallavicini והאסלאם",
      steps: [
        "יש אדם מודרני בשם Pallavicini שהתאסלם",
        "הוא פעל באסלאם האיטלקי ובדיאלוג בין־דתי",
        "משפחת Pallavicini היא משפחת אצולה אירופית עתיקה",
      ],
      conclusion: "לכן משפחת Pallavicini אחראית על האסלאם",
      note: "שלושת השלבים הראשונים יכולים להיות עובדות רקע מעניינות. המסקנה האחרונה דורשת מקור היסטורי וסיבתי שלא נמצא.",
    },
    {
      id: "not-found",
      type: "comparison-list",
      title: "מה לא נמצא במקורות?",
      items: [
        { label: "לא נמצא", text: "מקור שמראה שמשפחת Pallavicini יצרה את האסלאם." },
        { label: "לא נמצא", text: "מקור שמראה שמשפחת Pallavicini ניהלה את הקהילה המוסלמית הראשונה." },
        { label: "לא נמצא", text: "מקור שמחבר את משפחת Pallavicini למוחמד או לחצי האי ערב במאה ה־7." },
        { label: "לא נמצא", text: "מקור שמראה שליטה של משפחת Pallavicini על האסלאם העולמי." },
      ],
    },
    {
      id: "what-can-be-said",
      type: "comparison-list",
      title: "מה כן אפשר לומר בזהירות?",
      items: [
        { label: "כן", text: "היה אדם מודרני בשם Abd al-Wahid Pallavicini שהתאסלם ופעל בהקשרים מוסלמיים באירופה.", tone: "supports" },
        { label: "כן", text: "משפחת Pallavicini היא משפחה אירופית היסטורית מוכרת.", tone: "supports" },
        { label: "לא מזה", text: "מכאן לא נובעת אחריות על האסלאם כולו.", tone: "contradicts" },
        { label: "השורה", text: "קשר נקודתי ומודרני אינו ראיה למקור, ניהול או שליטה בדת שלמה.", tone: "caution", emphasis: true },
      ],
    },
    {
      id: "method-note",
      type: "method-note",
      title: "כלל עבודה לקייסים כאלה",
      paragraphs: [
        "ככל שהגרעין האמיתי מעניין יותר, כך צריך להיזהר יותר מהקפיצה ממנו למסקנה ענקית. העובדה שיש קשר אמיתי לאדם אחד לא הופכת אותו להסבר להיסטוריה שלמה.",
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
      headline: migratedPallaviciniIslamResponsibilityClaimContent.title,
      description: migratedPallaviciniIslamResponsibilityClaimContent.description,
      datePublished: "2026-06-23",
      dateModified: "2026-06-23",
      inLanguage: "he-IL",
    }],
  },
  metadataOverrides: {
    title: `${migratedPallaviciniIslamResponsibilityClaimContent.title} | מקור בדיקה`,
    description: migratedPallaviciniIslamResponsibilityClaimContent.description,
    canonical: migratedPallaviciniIslamResponsibilityClaimContent.path,
    openGraph: {
      title: migratedPallaviciniIslamResponsibilityClaimContent.title,
      description: migratedPallaviciniIslamResponsibilityClaimContent.description,
      url: `${siteUrl}${migratedPallaviciniIslamResponsibilityClaimContent.path}`,
      siteName: "מקור בדיקה",
      locale: "he_IL",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: migratedPallaviciniIslamResponsibilityClaimContent.title,
      description: migratedPallaviciniIslamResponsibilityClaimContent.description,
    },
  },
});
