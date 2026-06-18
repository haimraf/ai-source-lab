export const staticPages = [
  { path: "/", updated: "2026-06-18", changeFrequency: "weekly", priority: 1 },
  { path: "/about", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/privacy", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/accessibility", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/methodology", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.8 },
  { path: "/editorial-policy", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/corrections", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.7 },
  { path: "/topics", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.8 },
  { path: "/topics/agenda-2030", updated: "2026-06-18", changeFrequency: "weekly", priority: 0.8 },
] as const;

export const claimRecords = [
  {
    slug: "agenda-2030-seven-steps",
    path: "/claims/agenda-2030-seven-steps",
    title: "מהי תוכנית שבעת השלבים של אג׳נדה 2030?",
    description: "השוואה בין פוסטרים שמופצים ברשת לבין המסמך הרשמי של אג׳נדה 2030.",
    kicker: "אג׳נדה 2030",
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
    verdict: "לא נמצאה ראיה שמקשרת שובלי טיסות רגילות לריסוס אלומיניום",
    updated: "2026-06-18",
    changeFrequency: "monthly",
    priority: 0.9,
    ogAlt: "מקור בדיקה - בדיקת הטענה שמטוסים מרססים אלומיניום",
  },
] as const;

export type ClaimRecord = (typeof claimRecords)[number];
export type ClaimSlug = ClaimRecord["slug"];

export function getClaimBySlug(slug: ClaimSlug): ClaimRecord;
export function getClaimBySlug(slug: string | null): ClaimRecord | undefined;
export function getClaimBySlug(slug: string | null) {
  return claimRecords.find((claim) => claim.slug === slug);
}
