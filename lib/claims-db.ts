export const staticPages = [
  { path: "/", updated: "2026-06-20", changeFrequency: "weekly", priority: 1 },
  { path: "/about", updated: "2026-06-19", changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/accessibility", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/methodology", updated: "2026-06-19", changeFrequency: "weekly", priority: 0.8 },
  { path: "/how-to-cite", updated: "2026-06-19", changeFrequency: "weekly", priority: 0.7 },
  { path: "/suggest-claim", updated: "2026-06-19", changeFrequency: "weekly", priority: 0.7 },
  { path: "/editorial-policy", updated: "2026-06-19", changeFrequency: "weekly", priority: 0.7 },
  { path: "/corrections", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/topics", updated: "2026-06-20", changeFrequency: "weekly", priority: 0.8 },
] as const;

export const homeFeaturedClaimSlug = "ai-bci-synthetic-soul";

export type TopicClusterSlug =
  | "ai-sources"
  | "agenda-2030"
  | "sky-climate"
  | "consciousness-intelligence"
  | "institutional-narratives"
  | "digital-money";

export const claimRecords = [
  {
    slug: "ai-bci-synthetic-soul",
    path: "/claims/ai-bci-synthetic-soul",
    title: "האם BCI ו-AI מוכיחים שליטה חיצונית בגוף?",
    description: "בדיקה של טענה שמערבבת BCI, סוכני AI, כפילים דיגיטליים, נוירופידבק, LED ו-Wi-Fi למסקנה על שליטה חיצונית באדם.",
    kicker: "AI, מוח ותודעה",
    tags: ["AI", "BCI", "נשמה סינטטית", "Digital Twin", "נוירוטכנולוגיה"],
    verdict: "הטכנולוגיות קיימות, אבל לא מוכיחות שליטה חיצונית באדם",
    updated: "2026-06-20",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "ai-sources",
    ogAlt: "מקור בדיקה - בדיקת הטענה ש-BCI ו-AI מוכיחים שליטה חיצונית בגוף",
  },
  {
    slug: "project-blue-beam-nasa",
    path: "/claims/project-blue-beam-nasa",
    title: "האם Project Blue Beam הוא תוכנית רשמית של NASA?",
    description: "בדיקה של הטענה ש־Project Blue Beam הוא פרויקט רשמי של NASA או האו״ם לזיוף פלישת חוצנים או התגלות דתית לצורך סדר עולמי חדש.",
    kicker: "חוצנים וסדר עולמי",
    tags: ["חוצנים", "NASA", "האו״ם", "סדר עולמי", "מקור רשמי"],
    verdict: "לא נמצא מקור רשמי של NASA או האו״ם",
    updated: "2026-06-20",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "institutional-narratives",
    ogAlt: "מקור בדיקה - בדיקת הטענה ש-Project Blue Beam הוא תוכנית רשמית של NASA",
  },
  {
    slug: "who-pandemic-agreement-sovereignty",
    path: "/claims/who-pandemic-agreement-sovereignty",
    title: "האם אמנת המגיפות נותנת ל-WHO סמכות על מדיניות פנים?",
    description: "בדיקה של הטענה שאמנת המגיפות של WHO נותנת לארגון סמכות להכתיב למדינות מדיניות פנימית או חקיקה.",
    kicker: "WHO ואמנת מגיפות",
    tags: ["WHO", "אמנת מגיפות", "ריבונות", "מדיניות פנים", "מקור רשמי"],
    verdict: "הטקסט הרשמי שולל סמכות להכתיב מדיניות פנים למדינות",
    updated: "2026-06-21",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "institutional-narratives",
    ogAlt: "מקור בדיקה - בדיקת הטענה שאמנת המגיפות נותנת ל-WHO סמכות כפייה",
  },
  {
    slug: "gateway-process-out-of-body",
    path: "/claims/gateway-process-out-of-body",
    title: "האם מסמך Gateway מוכיח יציאה מהגוף?",
    description: "בדיקה של מסמך Gateway מ־1983: מה באמת נבדק, מה אפשר ללמוד ממנו, ואיפה מתחילה הקפיצה מהתעניינות מודיעינית להוכחה רוחנית.",
    kicker: "תודעה ומודיעין",
    tags: ["תודעה", "CIA", "Gateway", "ראייה מרחוק", "מסמך רשמי"],
    verdict: "המסמך אמיתי, אבל הוא לא הוכחה ליציאה מהגוף",
    updated: "2026-06-19",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "consciousness-intelligence",
    ogAlt: "מקור בדיקה - בדיקת הטענה שמסמך Gateway מוכיח יציאה מהגוף",
  },
  {
    slug: "ai-as-source-pyramids",
    path: "/claims/ai-as-source-pyramids",
    title: "האם תשובת AI היא מקור?",
    description: "בדיקה של הטענה שתשובה של AI יכולה לשמש מקור, דרך קייס הפירמידות והפער בין תשובה משכנעת לבין מקור שניתן לפתוח.",
    kicker: "AI ומקורות",
    tags: ["AI", "מקורות", "ציטוטים", "פירמידות", "בדיקת מקור"],
    verdict: "AI הוא כלי שמוביל למקורות, לא מקור בפני עצמו",
    updated: "2026-06-19",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "ai-sources",
    ogAlt: "מקור בדיקה - בדיקת הטענה שתשובת AI היא מקור",
  },
  {
    slug: "cloud-seeding-chemtrails",
    path: "/claims/cloud-seeding-chemtrails",
    title: "האם זריעת עננים מוכיחה Chemtrails?",
    description: "בדיקה שמפרידה בין זריעת עננים אמיתית, שובלי מטוסים וטענות על ריסוס אלומיניום.",
    kicker: "שובלי מטוסים",
    tags: ["Chemtrails", "Cloud Seeding", "Geoengineering", "שמיים", "אקלים"],
    verdict: "זריעת עננים קיימת, אבל אינה מוכיחה שכל שובל הוא ריסוס",
    updated: "2026-06-19",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "sky-climate",
    ogAlt: "מקור בדיקה - בדיקת הקשר בין זריעת עננים לטענות Chemtrails",
  },
  {
    slug: "fifteen-minute-city-prison",
    path: "/claims/15-minute-city-prison",
    title: "האם עיר 15 דקות היא כלא עירוני?",
    description: "בדיקה שמפרידה בין מודל תכנון עירוני של קרבה לשירותים, מדיניות תחבורה מקומית וטענה על כליאה או הגבלת יציאה מהשכונה.",
    kicker: "תכנון עירוני ואג׳נדה",
    tags: ["עיר 15 דקות", "אג׳נדה 2030", "תכנון עירוני", "תחבורה", "חופש תנועה"],
    verdict: "לא נמצא שמודל עיר 15 דקות מחייב כליאה או איסור יציאה מהשכונה",
    updated: "2026-06-20",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "agenda-2030",
    ogAlt: "מקור בדיקה - בדיקת הטענה שעיר 15 דקות היא כלא עירוני",
  },
  {
    slug: "agenda-2030-seven-steps",
    path: "/claims/agenda-2030-seven-steps",
    title: "מהי תוכנית שבעת השלבים של אג׳נדה 2030?",
    description: "השוואה בין פוסטרים שמופצים ברשת לבין המסמך הרשמי של אג׳נדה 2030.",
    kicker: "אג׳נדה 2030",
    tags: ["אג׳נדה 2030", "האו״ם", "SDGs", "סדר עולמי", "מסמך רשמי"],
    verdict: "לא נמצא מקור רשמי לרשימת שבעת השלבים",
    updated: "2026-06-18",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "agenda-2030",
    ogAlt: "מקור בדיקה - בדיקת אג׳נדה 2030 ושבעת השלבים",
  },
  {
    slug: "you-will-own-nothing-klaus-schwab",
    path: "/claims/you-will-own-nothing-klaus-schwab",
    title: "האם קלאוס שוואב אמר שלא יהיה לכם כלום?",
    description: "בדיקה של המשפט ״לא יהיה לכם כלום ותהיו מאושרים״: מה המקור האמיתי, מי כתב אותו, ומה לא נמצא כמסמך מדיניות רשמי.",
    kicker: "WEF ואג׳נדה 2030",
    tags: ["WEF", "קלאוס שוואב", "אג׳נדה 2030", "רכוש", "מקור רשמי"],
    verdict: "המקור קיים כמאמר תרחישי; לא נמצא שזה ציטוט של שוואב או תוכנית הפקעה",
    updated: "2026-06-21",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "agenda-2030",
    ogAlt: "מקור בדיקה - בדיקת הטענה שקלאוס שוואב אמר שלא יהיה לכם כלום",
  },
  {
    slug: "digital-shekel-spending-control",
    path: "/claims/digital-shekel-spending-control",
    title: "האם שקל דיגיטלי יאפשר להגביל קניות?",
    description: "בדיקה של הטענה ששקל דיגיטלי יאפשר למדינה או לבנק ישראל לקבוע מה אזרחים יכולים לקנות, ממי, מתי ובאיזה מקום.",
    kicker: "שקל דיגיטלי ו-CBDC",
    tags: ["שקל דיגיטלי", "CBDC", "בנק ישראל", "פרטיות", "כסף דיגיטלי"],
    verdict: "יש שאלות אמיתיות על CBDC ופרטיות; לא נמצאה תוכנית ישראלית להגביל קניות אזרחים",
    updated: "2026-06-21",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "digital-money",
    ogAlt: "מקור בדיקה - בדיקת הטענה ששקל דיגיטלי יאפשר להגביל קניות",
  },
  {
    slug: "xrp-global-currency",
    path: "/claims/xrp-global-currency",
    title: "האם XRP נבחר להיות המטבע העולמי?",
    description:
      "בדיקה מבוססת מקורות רשמיים לטענה ש-XRP נבחר להיות מטבע עולמי, מטבע רזרבה או תחליף למטבעות מדינתיים.",
    kicker: "XRP ותקני תשלום",
    tags: ["XRP", "כסף דיגיטלי", "ISO 20022", "מטבעות", "תשלומים"],
    verdict: "לא נמצא מקור רשמי לכך ש-XRP נבחר למטבע עולמי",
    updated: "2026-06-18",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "digital-money",
    ogAlt: "מקור בדיקה - בדיקת הטענה ש-XRP נבחר להיות המטבע העולמי",
  },
  {
    slug: "chemtrails-aluminum",
    path: "/claims/chemtrails-aluminum",
    title: "האם מטוסים מרססים אלומיניום?",
    description: "בדיקה מול FAA, EPA ושירות מזג האוויר האמריקאי לטענה שהפסים הלבנים ממטוסים הם ריסוס אלומיניום.",
    kicker: "שובלי מטוסים",
    tags: ["Chemtrails", "אלומיניום", "Contrails", "שמיים", "FAA"],
    verdict: "לא נמצאה ראיה שמקשרת שובלי טיסות רגילות לריסוס אלומיניום",
    updated: "2026-06-18",
    changeFrequency: "monthly",
    priority: 0.9,
    cluster: "sky-climate",
    ogAlt: "מקור בדיקה - בדיקת הטענה שמטוסים מרססים אלומיניום",
  },
] as const;

export type ClaimRecord = (typeof claimRecords)[number];
export type ClaimSlug = ClaimRecord["slug"];

export const allClaimTags = Array.from(new Set(claimRecords.flatMap((claim) => claim.tags))).sort((a, b) =>
  a.localeCompare(b, "he"),
);

export function getClaimBySlug(slug: ClaimSlug): ClaimRecord;
export function getClaimBySlug(slug: string | null): ClaimRecord | undefined;
export function getClaimBySlug(slug: string | null) {
  return claimRecords.find((claim) => claim.slug === slug);
}

export function getHomeFeaturedClaim() {
  return getClaimBySlug(homeFeaturedClaimSlug) ?? claimRecords[0];
}
