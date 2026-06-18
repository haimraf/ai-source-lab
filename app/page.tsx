const checks = [
  {
    title: "מהי 'תוכנית שבעת השלבים' של אג׳נדה 2030?",
    href: "/claims/agenda-2030-seven-steps",
    summary: "השוואה בין הפוסטרים שמופצים ברשת לבין החלטת האו״ם A/RES/70/1.",
    topic: "אג׳נדה 2030",
    verdict: "לא נמצא מקור רשמי לרשימה",
  },
  {
    title: "האם XRP נבחר להיות המטבע העולמי?",
    href: "/claims/xrp-global-currency",
    summary: "מה Ripple באמת אומרת, מהו ISO 20022 ואיפה נולדה הקפיצה למטבע עולמי.",
    topic: "כסף דיגיטלי",
    verdict: "לא נמצא מקור רשמי לטענה",
  },
  {
    title: "האם מטוסים מרססים אלומיניום?",
    href: "/claims/chemtrails-aluminum",
    summary: "מהם שובלי התעבות, מהו שינוי מזג אוויר ומה עדיין צריך להוכיח.",
    topic: "שמיים ומזג אוויר",
    verdict: "נבדק מול מקורות תעופה וסביבה",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div>
          <span className="badge">בדיקות מקור בעברית</span>
          <h1>טענה רצה ברשת? חוזרים למקום שבו היא התחילה.</h1>
          <p className="lead">
            במקום להתווכח על צילום מסך, פותחים את המסמך, בודקים מה באמת כתוב בו ומסמנים איפה נוספה מסקנה שלא הופיעה במקור.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="/claims/agenda-2030-seven-steps">לבדיקה האחרונה</a>
            <a className="button-secondary" href="/methodology">איך אנחנו בודקים</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="מבנה בדיקה לדוגמה">
          <span className="topic-label">כך טענה נבדקת</span>
          <div className="signal-list">
            <div className="signal-row"><span>01</span><div><strong>הטענה</strong><small>מה בדיוק מופץ?</small></div></div>
            <div className="signal-row"><span>02</span><div><strong>המקור</strong><small>איפה המסמך או ההודעה המקוריים?</small></div></div>
            <div className="signal-row"><span>03</span><div><strong>הפער</strong><small>מה כתוב ומה נוסף אחר כך?</small></div></div>
            <div className="signal-row"><span>04</span><div><strong>המסקנה</strong><small>מה אפשר לקבוע נכון לעכשיו?</small></div></div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="נתוני אמון">
        <div className="trust-item"><strong>3</strong>בדיקות עומק</div>
        <div className="trust-item"><strong>9+</strong>מקורות ישירים</div>
        <div className="trust-item"><strong>100%</strong>קישורים פתוחים לבדיקה</div>
        <div className="trust-item"><strong>18.6.26</strong>עדכון אחרון</div>
      </section>

      <section>
        <div className="feature-card">
          <div>
            <span className="topic-label">בדיקה מרכזית</span>
            <h2>אג׳נדה 2030 מול הפוסטרים שמסתובבים ברשת</h2>
            <p>
              יש מסמך רשמי של האו״ם. יש גם פוסטרים שמייחסים לו ממשלה עולמית, סוף ריבונות ומעקב. בדקנו את הרשימה מול המסמך עצמו.
            </p>
            <a className="button-primary" href="/claims/agenda-2030-seven-steps">פתיחת הבדיקה</a>
          </div>
          <img src="/evidence/agenda-2030-poster-2.svg" alt="פוסטר שבעת השלבים שנבדק בעמוד אג׳נדה 2030" />
        </div>
      </section>

      <section id="checks">
        <div className="section-head">
          <div><span className="topic-label">בדיקות שפורסמו</span><h2>לא רק תשובה. מסלול מלא עד המקור.</h2></div>
          <p>כל כרטיס מוביל לעמוד עם מסקנה, שרשרת הטענה, שאלות נפוצות וקישורים ישירים למקורות.</p>
        </div>
        <div className="grid">
          {checks.map((check) => (
            <article className="card" key={check.href}>
              <a href={check.href}>
                <div className="card-meta"><span>{check.topic}</span><span>•</span><span>עודכן 18.6.26</span></div>
                <h3>{check.title}</h3>
                <p className="small">{check.summary}</p>
                <span className="status-chip">{check.verdict}</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <div><span className="topic-label">מפת נושאים</span><h2>נושאים שחוזרים שוב ושוב</h2></div>
          <p>במקום עמוד בודד לכל סערה, נבנה אשכול שמפריד בין הטענות השונות בתוך אותו סיפור.</p>
        </div>
        <div className="topic-grid">
          <a className="topic-card" href="/topics/agenda-2030"><span className="topic-label">אשכול מתפתח</span><h3>אג׳נדה 2030</h3><p>17 היעדים, שבעת השלבים, ריבונות, זהות דיגיטלית והחיבורים שמוסיפים ברשת.</p></a>
          <a className="topic-card" href="/claims/chemtrails-aluminum"><span className="topic-label">שמיים ומדע</span><h3>שובלי מטוסים</h3><p>שובלי התעבות, זריעת עננים, פליטות מנועים וטענות על ריסוס.</p></a>
          <a className="topic-card" href="/claims/xrp-global-currency"><span className="topic-label">כסף וטכנולוגיה</span><h3>מטבעות דיגיטליים</h3><p>מה חברות ורגולטורים אומרים מול התחזיות שמקבלות מעמד של עובדה.</p></a>
        </div>
      </section>

      <section className="box answer">
        <h2>למה לסמוך על התהליך?</h2>
        <p>המקורות מוצגים ליד המסקנה, תאריך הבדיקה גלוי, וטעויות ניתנות לתיקון. כלי בינה יכולים לסייע בסידור ובאיתור, אבל ההכרעה והפרסום עוברים בדיקה אנושית.</p>
        <div className="hero-actions"><a className="button-secondary" href="/editorial-policy">מדיניות עריכה</a><a className="button-secondary" href="/corrections">תיקונים ועדכונים</a></div>
      </section>
    </>
  );
}
