type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="breadcrumbs" aria-label="פירורי לחם">
      <ol>
        <li>
          <a href="/">מקור בדיקה</a>
        </li>
        {items.map((item) => (
          <li key={`${item.href ?? "current"}-${item.label}`} aria-current={item.href ? undefined : "page"}>
            {item.href ? <a href={item.href}>{item.label}</a> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
