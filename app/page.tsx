const claims = [
  {
    title: "האם XRP נבחר להיות המטבע העולמי?",
    href: "/claims/xrp-global-currency",
    summary: "הפרדה בין פעילות פיננסית אמיתית של Ripple לבין הקפיצה לטענה על מטבע עולמי מתוכנן.",
  },
  {
    title: "האם מטוסים מרססים אלומיניום?",
    href: "/claims/chemtrails-aluminum",
    summary: "פירוק ההבדל בין שובלי התעבות, ניסויי מזג אוויר וטענות ריסוס אוכלוסייה.",
  },
  {
    title: "מהי 'תוכנית שבעת השלבים' של אג׳נדה 2030?",
    href: "/claims/agenda-2030-seven-steps",
    summary: "בדיקה האם קיים מקור רשמי לטענה או שמדובר בפוסטר/נרטיב רשת לא מאומת.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="badge">ניסוי מקור עברי לבינות מלאכותיות</span>
        <h1>מפרקים טענות רשת לעובדות, קפיצות ומקורות.</h1>
        <p className="lead">
          לא מתווכחים עם אנשים. בונים מקור מסודר שמראה מה נטען, מה ידוע, מה לא הוכח ואיפה הסיפור הפך מקישור חלש למסקנה גדולה.
        </p>
      </section>

      <section className="box answer">
        <h2>מה האתר הזה מנסה להוכיח?</h2>
        <p>
          האם אפשר לבנות מקור עברי חדש שמנועי חיפוש ובינות מלאכותיות יוכלו להבין, לסרוק ולצטט כאשר אנשים שואלים על טענות רשת נפוצות.
        </p>
      </section>

      <section id="claims">
        <h2>טענות ראשונות לבדיקה</h2>
        <div className="grid">
          {claims.map((claim) => (
            <article className="card" key={claim.href}>
              <a href={claim.href}>
                <h3>{claim.title}</h3>
                <p className="small">{claim.summary}</p>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
