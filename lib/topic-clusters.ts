import { type ClaimSlug, type TopicClusterSlug } from "@/lib/claims-db";
import {
  getClaimContentByCluster,
  getPublishedClaimContent,
  type ClaimContentIndexEntry,
} from "@/lib/content/claim-loader";

export type TopicClusterStatus = "active" | "expanding" | "planned";
export type PlannedClaimStatus = "בבדיקה" | "בתכנון";

export type PlannedClaim = {
  title: string;
  status: PlannedClaimStatus;
  note: string;
};

export type TopicCluster = {
  slug: TopicClusterSlug;
  path: `/topics/${string}`;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  status: TopicClusterStatus;
  updated: string;
  priority: number;
  claimSlugs: readonly ClaimSlug[];
  plannedClaims: readonly PlannedClaim[];
  sourceMap: readonly (readonly [string, string])[];
  admin: {
    dashboardSection: "clusters";
    editorialStage: string;
    nextAction: string;
  };
};

function claimSlugs<T extends readonly ClaimSlug[]>(slugs: T) {
  return slugs;
}

export const topicClusters = [
  {
    slug: "agenda-2030",
    path: "/topics/agenda-2030",
    title: "אג׳נדה 2030: מסמך רשמי מול סיפורים ויראליים",
    shortTitle: "אג׳נדה 2030",
    eyebrow: "🌐 אשכול פעיל",
    description:
      "אשכול שמפריד בין החלטת האו״ם, יעדי SDGs, מסמכים של גופים אחרים וטענות שמופצות ברשת כאילו הן תוכנית אחת סגורה.",
    status: "active",
    updated: "2026-06-21",
    priority: 0.95,
    claimSlugs: claimSlugs(["you-will-own-nothing-klaus-schwab", "fifteen-minute-city-prison", "agenda-2030-seven-steps"]),
    plannedClaims: [
      {
        title: "האם אג׳נדה 2030 מחייבת מדינות כחוק?",
        status: "בבדיקה",
        note: "להפריד בין החלטת עצרת כללית, התחייבות מדינית וחקיקה מקומית.",
      },
      {
        title: "האם יש קשר רשמי בין אג׳נדה 2030 לזהות דיגיטלית?",
        status: "בבדיקה",
        note: "לבדוק מסמכי או״ם, יוזמות ID4D וקפיצות בין גופים שונים.",
      },
      {
        title: "האם מטבע דיגיטלי של בנק מרכזי הוא חלק מהאג׳נדה?",
        status: "בתכנון",
        note: "לבדוק CBDC מול בנקים מרכזיים ולא להניח קשר אוטומטי לאו״ם.",
      },
      {
        title: "מה ההבדל בין האו״ם, ה-WEF והבנק העולמי?",
        status: "בתכנון",
        note: "עמוד הסבר שימנע ערבוב בין מוסדות שונים בתוך אותה טענה.",
      },
    ],
    sourceMap: [
      ["מקור ראשוני", "החלטות או״ם, מסמכי SDGs ופרסומים רשמיים שניתן לפתוח."],
      ["מקור משני", "ניתוחים, כתבות ומסמכי מדיניות של גופים שאינם האו״ם."],
      ["רשת", "פוסטרים, סרטונים וחיבורים שמאחדים כמה דברים לרשימה אחת."],
    ],
    admin: {
      dashboardSection: "clusters",
      editorialStage: "needs-more-primary-sources",
      nextAction: "להמשיך להוסיף בדיקות ממוקדות במקום להרחיב עמוד אחד גדול.",
    },
  },
  {
    slug: "sky-climate",
    path: "/topics/sky-climate",
    title: "שמיים, אקלים וסביבה",
    shortTitle: "שמיים ואקלים",
    eyebrow: "☁️ אשכול מתרחב",
    description:
      "אשכול שמחבר בין שובלי התעבות, זריעת עננים, Geoengineering וטענות על ריסוס — בלי להפוך טכנולוגיה קיימת להוכחה גורפת.",
    status: "expanding",
    updated: "2026-06-19",
    priority: 0.9,
    claimSlugs: claimSlugs(["cloud-seeding-chemtrails", "chemtrails-aluminum"]),
    plannedClaims: [
      {
        title: "מה ההבדל בין Contrails, Cloud Seeding ו-Geoengineering?",
        status: "בתכנון",
        note: "עמוד מילון קצר שימנע ערבוב בין שלושה מושגים שונים.",
      },
      {
        title: "האם יש מדידות רשמיות של מתכות באוויר בישראל?",
        status: "בתכנון",
        note: "לבדוק מקורות מדידה סביבתיים לפני כל מסקנה על ריסוס.",
      },
    ],
    sourceMap: [
      ["תופעה פיזיקלית", "שובלי התעבות ותנאי לחות/טמפרטורה בגובה."],
      ["טכנולוגיה קיימת", "זריעת עננים וניסויי מזג אוויר מוגדרים."],
      ["קפיצה לוגית", "הנחה שכל שובל לבן הוא ריסוס מכוון של חומר מסוים."],
    ],
    admin: {
      dashboardSection: "clusters",
      editorialStage: "expand-glossary",
      nextAction: "להוסיף עמוד מושגים קצר לפני פתיחת עוד בדיקות כבדות.",
    },
  },
  {
    slug: "pop-culture-symbols",
    path: "/topics/pop-culture-symbols",
    title: "סמלים נסתרים בתרבות פופולרית",
    shortTitle: "סמלים ותרבות",
    eyebrow: "🎭 אשכול חדש",
    description:
      "אשכול לטענות שבהן לוגואים, קומיקס וסמלים מוכרים מקבלים פרשנות נסתרת — עם הפרדה בין דמיון חזותי, השראה תרבותית וכוונה מוכחת.",
    status: "expanding",
    updated: "2026-06-23",
    priority: 0.82,
    claimSlugs: claimSlugs(["monster-energy-666-logo", "spider-man-hand-sign", "kal-el-hebrew-meaning"]),
    plannedClaims: [],
    sourceMap: [
      ["דמיון חזותי", "מה באמת נראה בסמל או בלוגו, ומה אפשר לפרש ממנו."],
      ["גרעין אמת", "ערך מספרי, הקשר תרבותי או רקע היסטורי שאכן קיימים."],
      ["כוונה מוכחת", "ראיון, מסמך עיצוב, מקור רשמי או עדות ישירה שמחברים בין הסמל לפרשנות."],
    ],
    admin: {
      dashboardSection: "clusters",
      editorialStage: "third-claim-added",
      nextAction: "לעצור לפני נושאים רגישים יותר ולבדוק שהאשכול מציג טוב את ההבדל בין פרשנות, השראה וכוונה מוכחת.",
    },
  },
  {
    slug: "ai-sources",
    path: "/topics/ai-sources",
    title: "AI, מקורות וטענות טכנולוגיות",
    shortTitle: "AI ומקורות",
    eyebrow: "אשכול פעיל",
    description:
      "אשכול לטענות שבהן AI, תשובות מודל או טכנולוגיות מתקדמות משמשים כקיצור דרך למסקנות שלא תמיד מופיעות במקור.",
    status: "active",
    updated: "2026-06-20",
    priority: 0.88,
    claimSlugs: claimSlugs(["ai-bci-synthetic-soul", "ai-as-source-pyramids"]),
    plannedClaims: [
      {
        title: "מתי תשובת AI עוזרת ומתי היא מטעה?",
        status: "בתכנון",
        note: "עמוד שימושי לקוראים שרוצים לבדוק בעצמם מקורות ולא להסתפק בצ׳אט.",
      },
      {
        title: "מה באמת אפשר לדעת ממחקרי BCI ציבוריים?",
        status: "בתכנון",
        note: "להפריד בין מחקר, מוצר, הדגמה והצהרות שיווקיות.",
      },
    ],
    sourceMap: [
      ["כלי", "מודל AI יכול לעזור למצוא כיוון, ניסוח ומקורות אפשריים."],
      ["מקור", "המקור הוא מסמך, מחקר, תקן, נתון או פרסום שניתן לפתוח."],
      ["מסקנה", "המסקנה צריכה להישען על מקור פתוח ולא על תשובה משכנעת בלבד."],
    ],
    admin: {
      dashboardSection: "clusters",
      editorialStage: "ready-for-reuse",
      nextAction: "להשתמש באשכול הזה כבסיס לקייסים על AEO ו-LLMs.",
    },
  },
  {
    slug: "institutional-narratives",
    path: "/topics/institutional-narratives",
    title: "מוסדות, נרטיבים ציבוריים וסדר עולמי",
    shortTitle: "מוסדות ונרטיבים",
    eyebrow: "🛸 אשכול מתרחב",
    description:
      "אשכול לטענות שמייחסות לגופים רשמיים תוכניות גדולות, אבל דורשות בדיקה פשוטה: האם יש מקור רשמי שניתן לפתוח.",
    status: "expanding",
    updated: "2026-06-21",
    priority: 0.84,
    claimSlugs: claimSlugs(["project-blue-beam-nasa", "who-pandemic-agreement-sovereignty", "event-201-pandemic-exercise", "pallavicini-islam-responsibility"]),
    plannedClaims: [
      {
        title: "איך מזהים מקור רשמי של גוף ממשלתי או בינלאומי?",
        status: "בתכנון",
        note: "עמוד עזר שיתאים גם לבדיקות NASA, או״ם וגופים ציבוריים.",
      },
      {
        title: "מתי סיפור ויראלי הופך לייחוס שגוי?",
        status: "בתכנון",
        note: "לנסח כלל עריכה קצר לשימוש חוזר בבדיקות עתידיות.",
      },
    ],
    sourceMap: [
      ["גוף רשמי", "אתר רשמי, מסמך חתום, דוח או פרסום שניתן לאמת."],
      ["ייחוס", "מי טוען שהגוף אמר או עשה משהו, ומה המקור לכך."],
      ["נרטיב", "חיבור בין עובדות, שמועות והנחות לסיפור אחד גדול."],
    ],
    admin: {
      dashboardSection: "clusters",
      editorialStage: "needs-taxonomy",
      nextAction: "לבנות תבנית חוזרת לבדיקות שמתחילות ב'האם גוף X אמר/עשה'.",
    },
  },
  {
    slug: "consciousness-intelligence",
    path: "/topics/consciousness-intelligence",
    title: "תודעה, מודיעין ומסמכים ישנים",
    shortTitle: "תודעה ומודיעין",
    eyebrow: "🧠 אשכול ממוקד",
    description:
      "אשכול שמפריד בין מסמך אמיתי, עניין מחקרי או מודיעיני, לבין הקפיצה להוכחה רוחנית או מדעית רחבה.",
    status: "expanding",
    updated: "2026-06-19",
    priority: 0.8,
    claimSlugs: claimSlugs(["gateway-process-out-of-body"]),
    plannedClaims: [
      {
        title: "מה ההבדל בין מסמך מודיעיני לבין הוכחה מדעית?",
        status: "בתכנון",
        note: "שאלה רוחבית שתעזור להסביר למה מקור אמיתי לא תמיד מוכיח את הפרשנות.",
      },
    ],
    sourceMap: [
      ["מסמך", "מה כתוב בפועל ומה ההקשר שבו הוא נוצר."],
      ["פרשנות", "מה אנשים מסיקים ממנו ברשת או בסרטונים."],
      ["הוכחה", "מה היה צריך להופיע כדי להפוך את הפרשנות למסקנה חזקה."],
    ],
    admin: {
      dashboardSection: "clusters",
      editorialStage: "single-claim-cluster",
      nextAction: "לא להעמיס. להוסיף רק בדיקה אחת נוספת כשיש מקור חזק.",
    },
  },
  {
    slug: "digital-money",
    path: "/topics/digital-money",
    title: "כסף דיגיטלי ומערכות תשלום",
    shortTitle: "כסף דיגיטלי",
    eyebrow: "💳 אשכול ממוקד",
    description:
      "אשכול לטענות על XRP, CBDC, תקני תשלום ומטבעות עתידיים — עם הפרדה בין שימוש טכנולוגי לבין בחירה רשמית.",
    status: "expanding",
    updated: "2026-06-21",
    priority: 0.78,
    claimSlugs: claimSlugs(["digital-shekel-spending-control", "xrp-global-currency"]),
    plannedClaims: [
      {
        title: "מה ההבדל בין ISO 20022 לבין בחירה במטבע מסוים?",
        status: "בתכנון",
        note: "עמוד קצר שיחסוך בלבול בין תקן מסרים לבין מטבע עולמי.",
      },
      {
        title: "האם CBDC הוא בהכרח מטבע עולמי אחד?",
        status: "בתכנון",
        note: "לבדוק בנקים מרכזיים ומסמכי BIS מול הטענות ברשת.",
      },
    ],
    sourceMap: [
      ["תקן", "איך מערכות תשלום מעבירות מידע ומסרים."],
      ["מטבע", "נכס, מטבע דיגיטלי או אמצעי תשלום ספציפי."],
      ["מדיניות", "החלטה רשמית של מדינה, בנק מרכזי או גוף בינלאומי."],
    ],
    admin: {
      dashboardSection: "clusters",
      editorialStage: "needs-next-claim",
      nextAction: "לפתוח בדיקת ISO 20022 לפני עוד טענות XRP.",
    },
  },
] satisfies readonly TopicCluster[];

export const dynamicTopicClusters = topicClusters.filter((cluster) => cluster.slug !== "agenda-2030");

export const topicClusterPages = topicClusters.map((cluster) => ({
  path: cluster.path,
  updated: cluster.updated,
  changeFrequency: "weekly" as const,
  priority: cluster.priority,
}));

export function getTopicClusterBySlug(slug: string | null | undefined): TopicCluster | undefined {
  if (!slug) return undefined;

  const clusters: readonly TopicCluster[] = topicClusters;
  return clusters.find((cluster) => cluster.slug === slug);
}

export function getTopicClusterForClaim(claim: Pick<ClaimContentIndexEntry, "cluster">): TopicCluster {
  const cluster = getTopicClusterBySlug(claim.cluster);

  if (!cluster) {
    throw new Error(`Missing topic cluster for claim cluster: ${claim.cluster}`);
  }

  return cluster;
}

export function getClaimsForTopicCluster(cluster: TopicCluster) {
  return getClaimContentByCluster(cluster.slug, getPublishedClaimContent());
}
