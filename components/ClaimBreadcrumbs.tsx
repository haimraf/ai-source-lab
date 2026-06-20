"use client";

import { usePathname } from "next/navigation";
import { claimRecords } from "@/lib/claims-db";
import { Breadcrumbs } from "@/components/Breadcrumbs";

function getTopicHref(kicker?: string) {
  if (!kicker) return "/topics#all-checks";
  if (kicker.includes("אג׳נדה")) return "/topics/agenda-2030";
  return "/topics#all-checks";
}

export function ClaimBreadcrumbs() {
  const pathname = usePathname();
  const claim = claimRecords.find((record) => record.path === pathname);

  return (
    <Breadcrumbs
      items={[
        { label: "בדיקות", href: "/#checks" },
        { label: claim?.kicker ?? "בדיקת מקור", href: getTopicHref(claim?.kicker) },
      ]}
    />
  );
}
