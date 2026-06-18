import { NextRequest } from "next/server";
import { claimRecords, getClaimBySlug } from "@/lib/claims-db";
import { createSocialImage } from "@/lib/social-image";

export const runtime = "edge";

export function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  const claim = getClaimBySlug(slug) ?? claimRecords[0];

  return createSocialImage({
    kicker: claim.kicker,
    title: claim.title,
    verdict: claim.verdict,
  });
}
