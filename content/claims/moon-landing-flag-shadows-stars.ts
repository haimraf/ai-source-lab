import { defineClaim } from "../../lib/content/claim-schema";
import { siteUrl } from "../../lib/site";
import { defineMigratedClaimContent } from "./define-migrated-claim";

const migratedMoonLandingFlagShadowsStarsClaimContent = defineMigratedClaimContent({
  slug: "moon-landing-flag-shadows-stars",
  path: "/claims/moon-landing-flag-shadows-stars",
  title: "האם הדגל, הצללים והכוכבים מוכיחים שהנחיתה על הירח זויפה?",
  description: "בדיקה ממוקדת לטענות הוויראליות על תמונות אפולו: הדגל שנראה מתנופף, היעדר הכוכבים, הצללים והצילום שנראה מבוים.",
  kicker: "אפולו ונאס״א",
  tags: ["NASA", "אפולו 11", "ירח", "צילום", "קונספירציות"],
  verdict: "טענות הצילום נראות מוזרות במבט ראשון — אבל הן לא מוכיחות זיוף של הנחיתה",
  cluster: "institutional-narratives",
  updated: "2026-06-23",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת טענות הדגל, הצללים והכוכבים בנחיתה על הירח",
  claim: "הדגל שנראה מתנופף, היעדר הכוכבים, הצללים בתמונות ואיכות הצילום מוכיחים שהנחיתה על הירח צולמה באולפן וזויפה.",
  shortAnswer: "לא. אלה נקודות שנראות חריגות בלי הקשר, אבל לכל אחת יש הסבר צילום/סביבה סביר והיא לא מוכיחה זיוף.",
  bottomLine: "יש גרעין אמיתי: בתמונות אפולו אכן אין בדרך כלל כוכבים, הדגל נראה מקומט וזוויות הצל יכולות להיראות מוזרות. אבל המקורות והתיעוד הרחב מצביעים על הסברים פשוטים יותר: חשיפה לצילום באור שמש חזק, דגל עם מוט אופקי וקפלים, קרקע לא ישרה והיעדר אטמוספירה. הטענות האלה לא מספיקות כדי להוכיח שהנחיתה זויפה.",
  summaryPoints: [
    "הגרעין האמיתי: תמונות הירח באמת נראות שונה מצילום רגיל על כדור הארץ.",
    "מה לא נמצא: מקור רציני שמראה שהדגל, הצללים או היעדר הכוכבים מחייבים זיוף אולפני.",
    "הקפיצה: מעבר מ'צילום נראה מוזר' ל'כל תוכנית אפולו זויפה'.",
    "הבדיקה כאן לא מנסה להוכיח את כל היסטוריית אפולו, אלא בודקת אם ארבע טענות צילום נפוצות מספיקות כהוכחה לזיוף.",
  ],
  overview: "זו אחת הטענות החזקות ביותר ברשת כי היא נשענת על אינטואיציה חזותית: אם אין כוכבים, אם הדגל נראה כאילו הוא זז, ואם הצללים לא נראים מושלמים — אולי זו תפאורה. אבל צילום על הירח שונה מצילום לילה בכדור הארץ: פני השטח מוארים בשמש חזקה, אין אטמוספירה שמרככת אור ומרחקים, והמצלמות כוונו לאסטרונאוטים ולקרקע המוארת, לא לכוכבים חלשים.",
  sources: [
    {
      id: "nasa-apollo-journals",
      title: "NASA — The Apollo Lunar Surface Journal and Apollo Flight Journal",
      url: "https://www.nasa.gov/history/alsj-and-afj/",
      level: "primary",
      note: "ארכיון NASA עם תמלולים, תמונות, סרטונים, אודיו ומסמכי רקע למשימות אפולו.",
    },
    {
      id: "nasa-restored-apollo-video",
      title: "NASA SVS — NASA Releases Preview Partially Restored Apollo 11 Video",
      url: "https://svs.gsfc.nasa.gov/10451/",
      level: "primary",
      note: "מקור NASA על שיקום חלקים מהווידאו של אפולו 11 ועל ההבדל בין שידור הטלוויזיה לבין חומרי הגיבוי המקוריים.",
    },
    {
      id: "lroc-apollo-sites",
      title: "LROC / Arizona State University — Apollo landing site imagery",
      url: "https://www.lroc.asu.edu/featured_sites#ApolloSites",
      level: "context",
      note: "תיעוד של אתרי הנחיתה כפי שצולמו ממסלול הירח על ידי Lunar Reconnaissance Orbiter Camera, כולל סימני ציוד ושבילים באתרים שונים.",
    },
    {
      id: "rmg-moon-hoax-explained",
      title: "Royal Museums Greenwich — Moon landing conspiracy theories, debunked",
      url: "https://www.rmg.co.uk/stories/topics/moon-landing-conspiracy-theories-debunked",
      level: "secondary",
      note: "הסברים נגישים לטענות נפוצות כמו דגל, כוכבים וצללים, בשפה ציבורית ולא טכנית מדי.",
    },
  ],
  faq: [
    {
      question: "למה אין כוכבים ברוב התמונות מהירח?",
      answer: "המצלמות כוונו לצילום פני שטח ואסטרונאוטים שמוארים באור שמש חזק. בחשיפה כזו כוכבים חלשים לא נקלטים, כמו שלא תמיד רואים כוכבים בצילום לילה של אובייקט מואר חזק.",
    },
    {
      question: "אז למה הדגל נראה כאילו הוא מתנופף?",
      answer: "הדגל לא היה תלוי חופשי כמו דגל רגיל. היה לו מוט אופקי כדי שייראה פרוש בסביבה בלי רוח, והוא נשאר מקומט מהקיפול והפריסה. תנועה בזמן ההצבה יכולה להיראות כמו נפנוף, אבל זה לא מחייב רוח או אולפן.",
    },
    {
      question: "מה לגבי הצללים שלא נראים מקבילים?",
      answer: "צללים מושפעים משיפועי קרקע, עדשה, פרספקטיבה והחזרי אור מהקרקע ומהחליפות. צל שנראה מוזר אינו מספיק כדי להוכיח תאורת אולפן.",
    },
    {
      question: "האם זה מוכיח לבד שהנחיתה הייתה אמיתית?",
      answer: "לא. העמוד הזה בודק טענות צילום נפוצות בלבד. הוא לא מתיימר להוכיח את כל תוכנית אפולו, אלא לבדוק אם הטענות האלה הן ראיה חזקה לזיוף. המסקנה: לא.",
    },
    {
      question: "איזו ראיה הייתה מחזקת את טענת הזיוף?",
      answer: "מקור ראשוני שמראה שתמונות אפולו נוצרו באולפן, מסמכי הפקה, הודאה מתועדת או ניתוח בלתי תלוי שמראה שהנתונים והצילומים לא יכולים להתאים לסביבת ירח. טענות צילום כלליות אינן מספיקות.",
    },
  ],
});

export const moonLandingFlagShadowsStarsClaimContent = defineClaim({
  ...migratedMoonLandingFlagShadowsStarsClaimContent,
  lead: "הטענות על הדגל, הכוכבים והצללים מרגישות חזקות כי הן עובדות על אינטואיציה: ככה אנחנו רגילים שצילום נראה בכדור הארץ. אבל הירח הוא סביבת צילום אחרת. כדי להפוך מוזרות חזותית לראיה לזיוף צריך להראות שהצילום לא יכול להתאים לסביבת ירח — ולא רק שהוא נראה לנו מוזר.",
  shareCopy: `הדגל, הצללים והיעדר הכוכבים בתמונות אפולו לא מוכיחים שהנחיתה על הירח זויפה. יש כאן גרעין אמיתי: התמונות באמת נראות חריגות. אבל ההסברים הם חשיפה באור שמש חזק, דגל עם מוט אופקי, קפלים, פרספקטיבה וקרקע לא ישרה — לא ראיה מספקת לאולפן.
${siteUrl}/claims/moon-landing-flag-shadows-stars`,
  body: [
    {
      id: "answer",
      type: "answer-box",
      eyebrow: "תשובה קצרה",
      title: migratedMoonLandingFlagShadowsStarsClaimContent.shortAnswer,
      paragraphs: [
        migratedMoonLandingFlagShadowsStarsClaimContent.bottomLine,
        "זו בדיקה צרה של טענות צילום נפוצות. היא לא מחליפה בדיקה מלאה של כל תוכנית אפולו, אבל היא כן בודקת האם הטענות הוויראליות האלה מספיקות כהוכחה לזיוף.",
      ],
      variant: "answer",
    },
    {
      id: "verdict",
      type: "verdict-grid",
      items: [
        { label: "הטענה", text: migratedMoonLandingFlagShadowsStarsClaimContent.claim },
        { label: "מה כן נכון", text: migratedMoonLandingFlagShadowsStarsClaimContent.summaryPoints[0] },
        { label: "מה לא נמצא", text: migratedMoonLandingFlagShadowsStarsClaimContent.summaryPoints[1] },
        { label: "מסקנה", text: migratedMoonLandingFlagShadowsStarsClaimContent.verdict, emphasis: true },
      ],
    },
    {
      id: "subclaims",
      type: "comparison-list",
      title: "ארבע הטענות המרכזיות",
      items: [
        { label: "אין כוכבים", text: "המצלמה נחשפה לאסטרונאוטים ולקרקע המוארת, לא לכוכבים חלשים ברקע." },
        { label: "הדגל נראה זז", text: "הדגל הוחזק במוט אופקי ונשאר מקומט; תנועה בזמן ההצבה אינה ראיה לרוח." },
        { label: "הצללים מוזרים", text: "פרספקטיבה, קרקע לא ישרה והחזרי אור יכולים לשנות מראה של צללים." },
        { label: "הצילום נראה מבוים", text: "תחושה חזותית אינה מספיקה; צריך להראות שהנתונים לא יכולים להתאים לסביבת ירח." },
      ],
    },
    {
      id: "visual-intuition",
      type: "method-note",
      title: "למה זה מרגיש משכנע?",
      paragraphs: [
        "הטענות האלה חזקות כי הן לא מתחילות ממסמך אלא מתמונה. תמונה שמרגישה לא טבעית גורמת למוח להשלים סיפור: אם אין כוכבים, אם הדגל נראה בתנועה ואם הצללים לא מסתדרים — אולי צילמו את זה באולפן.",
        "אבל בדיקת מקור לא מסתפקת בתחושה. היא שואלת האם יש הסבר פיזיקלי/צילומי פשוט יותר, והאם נשארה ראיה ישירה לזיוף אחרי שמפרידים בין התחושה לבין ההוכחה.",
      ],
    },
    {
      id: "evidence",
      type: "evidence-list",
      title: "בדיקת הטענות אחת־אחת",
      numbered: true,
      items: [
        {
          id: "stars",
          number: "01",
          title: "היעדר כוכבים אינו מפתיע בצילום חשוף לאור שמש",
          paragraphs: [
            "במשימות אפולו פני השטח והאסטרונאוטים היו מוארים בשמש. כדי לא לשרוף את האובייקטים המוארים, מצלמה מכוונת לחשיפה קצרה יחסית. בתנאים כאלה כוכבים חלשים לא יופיעו ברקע.",
          ],
        },
        {
          id: "flag",
          number: "02",
          title: "הדגל לא היה אמור להיתלות כמו דגל בכדור הארץ",
          paragraphs: [
            "בסביבה בלי רוח דגל רגיל היה נופל כלפי מטה, לכן השתמשו במוט אופקי. הקפלים והתנועה בזמן ההצבה יכולים להיראות כמו נפנוף, אבל זה לא מוכיח רוח או אולפן.",
          ],
        },
        {
          id: "shadows",
          number: "03",
          title: "צללים על הירח לא חייבים להיראות כמו תרשים גיאומטרי נקי",
          paragraphs: [
            "קרקע לא ישרה, עדשה רחבה, פרספקטיבה והחזרי אור מהקרקע ומהחליפות יכולים לגרום לצללים להיראות לא מקבילים או לא אחידים. זו לא ראיה מספקת למספר פנסי אולפן.",
          ],
        },
        {
          id: "site-record",
          number: "04",
          title: "הטענות הוויזואליות צריכות להתמודד גם עם תיעוד רחב יותר",
          paragraphs: [
            "מעבר לתמונות בודדות, קיימים תמלולים, וידאו, אודיו, מסמכי משימה, צילומי אתרי נחיתה ממסלול הירח וארכיון רחב של NASA. טענה על זיוף צריכה להסביר את כל המארג הזה, לא רק צילום שנראה חריג.",
          ],
        },
      ],
    },
    {
      id: "what-this-does-not-prove",
      type: "comparison-list",
      title: "מה זה לא מוכיח?",
      items: [
        { label: "צילום מוזר", text: "מוכיח שיש משהו שדורש הסבר, לא בהכרח זיוף." },
        { label: "מקור רשמי של NASA", text: "הוא מקור חשוב, אבל עדיין טוב להשוות מול תיעוד נוסף ולא להסתפק בסיסמה." },
        { label: "סרטון ויראלי", text: "יכול להצביע על שאלה טובה, אבל הוא לא מחליף מקור, הקשר וניתוח מלא." },
        { label: "מסקנה חזקה", text: "כדי לטעון זיוף צריך ראיה ישירה לאולפן, הפקה או סתירה בלתי ניתנת ליישוב — לא רק מוזרות חזותית." },
      ],
    },
    {
      id: "logic",
      type: "logic-chain",
      title: "שרשרת הקפיצה",
      steps: [
        "תמונות הירח נראות שונות מצילום רגיל",
        "כמה פרטים נראים לא אינטואיטיביים",
        "יש סרטונים שמציגים את זה כסתירה",
        "מכאן מסיקים שהכול צולם באולפן",
      ],
      conclusion: "הנחיתה על הירח זויפה",
      note: "החוליה האחרונה דורשת ראיה ישירה וחזקה בהרבה. מוזרות חזותית יכולה לפתוח בדיקה, אבל היא לא מסיימת אותה.",
    },
    { id: "faq", type: "faq", title: "שאלות נפוצות", source: "claim" },
    { id: "share", type: "copy-share", title: "תגובה קצרה להעתקה", source: "claim" },
    { id: "sources", type: "sources", title: "מקורות ישירים", source: "claim" },
  ],
  structuredData: {
    mode: "configured",
    entries: [
      {
        type: "article",
        placement: "page",
        headline: migratedMoonLandingFlagShadowsStarsClaimContent.title,
        description: migratedMoonLandingFlagShadowsStarsClaimContent.description,
        datePublished: "2026-06-23",
        dateModified: "2026-06-23",
        inLanguage: "he-IL",
      },
      { type: "faq", placement: "page" },
    ],
  },
  metadataOverrides: {
    title: "האם הדגל, הצללים והכוכבים מוכיחים שהנחיתה על הירח זויפה? | מקור בדיקה",
    description: migratedMoonLandingFlagShadowsStarsClaimContent.description,
    canonical: "/claims/moon-landing-flag-shadows-stars",
  },
});
