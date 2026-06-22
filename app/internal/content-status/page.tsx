import type { Metadata } from "next";

import { claimContentRecords } from "../../../content/claims";
import { getAllClaimsContentStatus } from "../../../lib/content/claim-content-status";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "מצב תוכן פנימי",
  description: "דוח סטטי לקריאה בלבד על מוכנות רשומות התוכן הקיימות.",
  robots: {
    index: false,
    follow: false,
  },
};

const checklistLabels: Record<string, string> = {
  claimScopeChecked: "תחום הטענה",
  primarySourcesChecked: "מקורות ראשוניים",
  sourceLinksVerified: "קישורי מקורות",
  verdictSupported: "ביסוס הממצא",
  conclusionWordingChecked: "ניסוח מסקנה",
  copyReviewed: "עריכת תוכן",
  seoReviewed: "SEO",
  shareCopyReviewed: "טקסט שיתוף",
  mobileReviewed: "מובייל",
};

const metadataLabels: Record<string, string> = {
  title: "כותרת",
  description: "תיאור",
  canonical: "Canonical",
};

function yesNo(value: boolean): string {
  return value ? "כן" : "לא";
}

export default function ContentStatusPage() {
  const statuses = getAllClaimsContentStatus(claimContentRecords);
  const completeChecklists = statuses.filter(
    (status) => status.checklistCompleted === status.checklistTotal,
  ).length;
  const claimsWithSources = statuses.filter((status) => status.hasSources).length;
  const completeMetadata = statuses.filter(
    (status) => status.missingMetadataFields.length === 0,
  ).length;
  const claimsWithShareCopy = statuses.filter((status) => status.hasShareCopy).length;
  const claimsNeedingRefresh = statuses.filter((status) => status.needsRefresh).length;
  const totalSources = statuses.reduce((total, status) => total + status.sourceCount, 0);

  return (
    <article className={styles.report}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>כלי עריכה פנימי · קריאה בלבד</p>
        <h1>מצב תוכן</h1>
        <p>
          הדוח נגזר בזמן build מרשומות ה־claim הקיימות בלבד. הנתיב
          <span dir="ltr"> /internal </span>
          אינו בקרת גישה, והעמוד אינו מציג הערות עבודה או מידע רגיש.
        </p>
      </header>

      <section className={styles.summary} aria-label="סיכום מצב התוכן">
        <p><strong>{statuses.length}</strong><span>בדיקות בסך הכול</span></p>
        <p><strong>{completeChecklists}/{statuses.length}</strong><span>checklists מלאים</span></p>
        <p><strong>{claimsWithSources}/{statuses.length}</strong><span>בדיקות עם מקורות</span></p>
        <p><strong>{totalSources}</strong><span>מקורות מקושרים</span></p>
        <p><strong>{completeMetadata}/{statuses.length}</strong><span>metadata מלא</span></p>
        <p><strong>{claimsWithShareCopy}/{statuses.length}</strong><span>עם טקסט שיתוף</span></p>
        <p><strong>{claimsNeedingRefresh}</strong><span>דורשות רענון</span></p>
      </section>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <caption>פירוט מוכנות לפי רשומת תוכן</caption>
          <thead>
            <tr>
              <th scope="col">בדיקה</th>
              <th scope="col">Workflow</th>
              <th scope="col">Checklist</th>
              <th scope="col">מקורות</th>
              <th scope="col">SEO ושיתוף</th>
              <th scope="col">מובייל</th>
              <th scope="col">בדיקה אחרונה</th>
              <th scope="col">רענון</th>
            </tr>
          </thead>
          <tbody>
            {statuses.map((status) => (
              <tr key={status.slug}>
                <th scope="row">
                  <span className={styles.claimTitle}>{status.title}</span>
                  <span className={styles.code} dir="ltr">{status.slug}</span>
                  <span className={styles.code} dir="ltr">{status.path}</span>
                </th>
                <td>
                  <span>עריכה: {status.editorialStatus}</span>
                  <span>מקורות: {status.sourceStatus}</span>
                  <span>SEO: {status.seoStatus}</span>
                  <span>בדיקות: {status.testStatus}</span>
                </td>
                <td>
                  <strong>{status.checklistCompleted}/{status.checklistTotal}</strong>
                  <span>
                    {status.incompleteChecklistFields.length === 0
                      ? "מלא"
                      : `חסר: ${status.incompleteChecklistFields
                          .map((field) => checklistLabels[field] ?? field)
                          .join(", ")}`}
                  </span>
                </td>
                <td>
                  <strong>{status.sourceCount}</strong>
                  <span>{status.hasSources ? "יש מקורות" : "אין מקורות"}</span>
                </td>
                <td>
                  <span>
                    Metadata: {status.missingMetadataFields.length === 0
                      ? "מלא"
                      : `חסר ${status.missingMetadataFields
                          .map((field) => metadataLabels[field] ?? field)
                          .join(", ")}`}
                  </span>
                  <span>טקסט שיתוף: {yesNo(status.hasShareCopy)}</span>
                </td>
                <td>{yesNo(status.mobileReviewed)}</td>
                <td><span dir="ltr">{status.checkedAt}</span></td>
                <td>
                  <strong>{status.needsRefresh ? "נדרש" : "תקין"}</strong>
                  <span>needsUpdate: {yesNo(status.needsUpdate)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}
