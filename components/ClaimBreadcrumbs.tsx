"use client";

import { usePathname } from "next/navigation";
import { claimRecords } from "@/lib/claims-db";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function ClaimBreadcrumbs() {
  const pathname = usePathname();
  const claim = claimRecords.find((record) => record.path === pathname);

  return (
    <Breadcrumbs
      items={[
        { label: "בדיקות", href: "/#checks" },
        { label: claim?.kicker ?? "בדיקת מקור", href: claim ? `/topics${claim.path.includes("agenda") ? "/agenda-2030" : ""}` : undefined },
        { label: claim?.title ?? "עמוד בדיקה" },
      ]}
    />
  );
}
