export function EditorialByline() {
  return (
    <aside className="box method-note" aria-label="אחריות עריכתית">
      <span className="eyebrow">אחריות עריכתית</span>
      <h2>נערך ונבדק על ידי חיים רפאל</h2>
      <p>
        מיזם עצמאי לבדיקת טענות ומקורות בעברית. המקורות והמסקנה עוברים בדיקה אנושית לפני פרסום.
      </p>
      <div className="hero-actions">
        <a className="button-secondary" href="/about">אודות המיזם</a>
        <a className="button-secondary" href="/editorial-policy">מדיניות עריכה</a>
        <a className="button-secondary" href="/corrections">תיקונים ועדכונים</a>
      </div>
    </aside>
  );
}
