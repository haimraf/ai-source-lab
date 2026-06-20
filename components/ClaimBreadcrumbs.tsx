"use client";

import { usePathname } from "next/navigation";
import { claimRecords } from "@/lib/claims-db";
import { getTopicClusterBySlug } from "@/lib/topic-clusters";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function ClaimBreadcrumbs() {
  const pathname = usePathname();
  const claim = claimRecords.find((record) => record.path === pathname);
  const cluster = claim ? getTopicClusterBySlug(claim.cluster) : undefined;

  return (
    <Breadcrumbs
      items={[
        { label: "בדיקות", href: "/#checks" },
        { label: cluster?.shortTitle ?? claim?.kicker ?? "בדיקת מקור", href: cluster?.path ?? "/topics#all-checks" },
      ]}
    />
  );
}
