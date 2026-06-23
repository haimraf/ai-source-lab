import { getClaimBySlug } from "@/lib/claims-db";
import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

const claim = getClaimBySlug("great-reset-global-government")!;

export const size = socialImageSize;
export const contentType = socialImageContentType;
export const alt = claim.ogAlt;

export default function Image() {
  return createSocialImage({
    kicker: claim.kicker,
    title: claim.title,
    verdict: claim.verdict,
  });
}
