export function EditorialByline() {
  return (
    <aside className="editorial-byline" aria-label="אחריות עריכתית">
      <div className="editorial-avatar" aria-hidden="true">ח</div>
      <div>
        <span className="eyebrow">אחריות עריכתית</span>
        <p><strong>נערך ונבדק על ידי חיים רפאל</strong></p>
        <p className="small">מיזם עצמאי לבדיקת טענות ומקורות בעברית. המקורות והמסקנה עוברים בדיקה אנושית לפני פרסום.</p>
        <div className="editorial-links">
          <a href="/about">אודות המיזם</a>
          <a href="/editorial-policy">מדיניות עריכה</a>
          <a href="/corrections">תיקונים ועדכונים</a>
        </div>
      </div>
    </aside>
  );
}
