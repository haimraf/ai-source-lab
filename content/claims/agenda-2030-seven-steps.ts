import type { ClaimContent } from "../../lib/content/claim-schema";
import { defineMigratedClaimContent } from "./define-migrated-claim";

export const agenda2030SevenStepsClaimContent = defineMigratedClaimContent({
  slug: "agenda-2030-seven-steps",
  path: "/claims/agenda-2030-seven-steps",
  title: "מהי תוכנית שבעת השלבים של אג׳נדה 2030?",
  description: "השוואה בין פוסטרים שמופצים ברשת לבין המסמך הרשמי של אג׳נדה 2030.",
  kicker: "אג׳נדה 2030",
  tags: ["אג׳נדה 2030", "האו״ם", "SDGs", "סדר עולמי", "מסמך רשמי"],
  verdict: "לא נמצא מקור רשמי לרשימת שבעת השלבים",
  cluster: "agenda-2030",
  updated: "2026-06-18",
  changeFrequency: "monthly",
  priority: 0.9,
  ogAlt: "מקור בדיקה - בדיקת אג׳נדה 2030 ושבעת השלבים",
  claim: "הפוסטר מסכם תוכנית רשמית של האו״ם.",
  shortAnswer: "לא נמצאה תוכנית רשמית בת שבעה שלבים",
  bottomLine: "לא נמצא מסמך רשמי שתומך ברשימה.",
  summaryPoints: [
    "אג׳נדה 2030 כוללת 17 יעדים ו-169 מטרות.",
    "מיעדי פיתוח לרשימת מסקנות שלא מופיעה במקור.",
  ],
  overview: "המסמך הרשמי של אג׳נדה 2030 כולל 17 יעדים ו-169 מטרות. הפוסטרים שנבדקו מציגים רשימה אחרת, אך בבדיקה לא נמצא מקור רשמי של האו״ם שמנסח או מאשר את אותה רשימה.",
  sources: [
    { id: "un-resolution-70-1", title: "החלטת העצרת הכללית A/RES/70/1", url: "https://documents.un.org/doc/undoc/gen/n15/291/89/pdf/n1529189.pdf", level: "primary", note: "המסמך הרשמי שאימץ את אג׳נדה 2030 בשנת 2015." },
    { id: "un-2030-agenda", title: "עמוד אג׳נדה 2030 באתר האו״ם", url: "https://sdgs.un.org/2030agenda", level: "official", note: "עמוד רשמי שמציג את 17 היעדים ואת מטרות התוכנית." },
  ],
  faq: [],
}) satisfies ClaimContent;
