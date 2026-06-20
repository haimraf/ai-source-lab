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
  { path: "/topics/agenda-2030", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.8 },
] as const;

export const homeFeaturedClaimSlug = "ai-bci-synthetic-soul";

export const claimRecords = [
  {
    slug: "ai-bci-synthetic-soul",
    path: "/claims/ai-bci-synthetic-soul",
    title: "האם BCI ו-AI מוכיחים שליטה חיצונית בגוף?",
    description: "בדיקה של טענה שמערבבת BCI, סוכני AI, כפילים דיגיטליים, נוירופידבק, LED ו-Wi-Fi למסקנה על שליטה חיצונית באדם.",
    kicker: "AI, מוח ותודעה",
    tags: ["AI", "BCI", "תודעה", "Digital Twin", "נוירוטכנולוגיה"],
    verdict: "הטכנולוגיות קיימות, אבל לא מוכיחות שליטה חיצונית באדם",
    updated: "2026-06-20",
    changeFrequency: "monthly",
    priority: 0.9,
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
    ogAlt: "מקור בדיקה - בדיקת הטענה ש-Project Blue Beam הוא תוכנית רשמית של NASA",
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
    ogAlt: "מקור בדיקה - בדיקת הקשר בין זריעת עננים לטענות Chemtrails",
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
    ogAlt: "מקור בדיקה - בדיקת אג׳נדה 2030 ושבעת השלבים",
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
