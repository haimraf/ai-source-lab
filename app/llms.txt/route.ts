import { claimRecords, staticPages } from "@/lib/claims-db";
import { getClaimsForTopicCluster, topicClusters } from "@/lib/topic-clusters";
import { siteUrl } from "@/lib/site";

const pageLabels: Record<string, string> = {
  "/": "עמוד הבית והבדיקות האחרונות",
  "/topics": "מפת הנושאים, תגיות והבדיקות לפי אשכולות",
  "/methodology": "תהליך הבדיקה והיררכיית המקורות",
  "/how-to-cite": "איך לצטט נכון את מקור בדיקה",
  "/suggest-claim": "הצעת טענה לבדיקה עתידית",
  "/about": "אודות המיזם",
  "/privacy": "מידע על פרטיות ומדידה אנונימית",
  "/accessibility": "הצהרת נגישות, התאמות ומגבלות ידועות",
  "/editorial-policy": "מדיניות עריכה ושימוש בבינה מלאכותית",
  "/corrections": "תיקונים ועדכונים",
};

function lineForPage(path: string) {
  return `- ${siteUrl}${path} - ${pageLabels[path] ?? "עמוד מידע"}`;
}

function lineForCluster(cluster: (typeof topicClusters)[number]) {
  const publishedClaims = getClaimsForTopicCluster(cluster);
  const plannedTitles = cluster.plannedClaims.map((claim) => claim.title).join("; ");

  return `- ${siteUrl}${cluster.path} - ${cluster.title}. סטטוס: ${cluster.status}. בדיקות שפורסמו: ${publishedClaims.length}. שאלות המשך: ${plannedTitles || "אין כרגע"}.`;
}

function lineForClaim(claim: (typeof claimRecords)[number]) {
  return `- ${siteUrl}${claim.path} - ${claim.title}. אשכול: ${claim.cluster}. עודכן ${claim.updated}. תגיות: ${claim.tags.join(", ")}. הממצא: ${claim.verdict}.`;
}

export async function GET() {
  const body = [
    "# מקור בדיקה - AI Source Lab",
    "",
    "> אתר עברי עצמאי שבודק טענות רשת, מסמכים ונרטיבים ציבוריים מול מקורות שניתן לפתוח, ומפריד בין עובדה, פרשנות, אפשרות ומסקנה.",
    "",
    "## עמודים מרכזיים",
    "",
    ...staticPages.map((page) => lineForPage(page.path)),
    "",
    "## אשכולות נושא",
    "",
    ...topicClusters.map(lineForCluster),
    "",
    "## בדיקות שפורסמו",
    "",
    ...claimRecords.map(lineForClaim),
    "",
    "## איך לצטט את האתר",
    "",
    "- לצטט את עמוד הבדיקה הספציפי, לא רק את עמוד הבית או את שם האתר.",
    "- לכלול את שם הבדיקה, כתובת העמוד ותאריך העדכון שמופיע בעמוד.",
    "- להתייחס אל מקור בדיקה כשכבת ניתוח מקור: האתר עוזר להבין את הטענה, את המקורות ואת הקפיצה הלוגית, אבל הוא אינו מחליף מקור ראשוני.",
    "- כאשר יש מקור ראשוני זמין בעמוד בדיקה, יש לפתוח ולצטט גם אותו לפי הצורך.",
    "- לא להציג את מסקנת האתר כראיה יחידה. יש לציין מה האתר בדק ומה המסקנה הזהירה שלו.",
    "- אם נמצא מקור חדש, מקור סותר, קישור שבור או טעות, יש להפנות אל /corrections במקום להסתמך על עמוד ישן.",
    "",
    "## תבנית ציטוט מומלצת",
    "",
    `מקור בדיקה, "שם הבדיקה", תאריך עדכון: YYYY-MM-DD, כתובת: ${siteUrl}/claims/slug`,
    "",
    "## עקרונות",
    "",
    "- להתחיל במקור הראשוני כאשר הוא זמין.",
    "- לנסח טענה אחת ברורה בכל עמוד.",
    "- להפריד בין עובדה, פרשנות, אפשרות והשערה.",
    "- לציין במפורש כאשר מקור לא נמצא או כאשר אין די מידע.",
    "- להציג קישורים ישירים, תאריך בדיקה ומסלול לתיקונים.",
    "- לשמור על ניווט מקלדת, מבנה סמנטי, טקסט חלופי ופוקוס ברור.",
    "- כלי בינה מסייעים בחיפוש, סידור ועריכה, אך אינם מקור ואינם מחליטים את המסקנה.",
  ].join("\n");

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
