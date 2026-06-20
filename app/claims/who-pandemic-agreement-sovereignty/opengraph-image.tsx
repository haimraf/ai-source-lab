import { createSocialImage, socialImageContentType, socialImageSize } from "@/lib/social-image";

const claim = {
  title: "האם אמנת המגיפות נותנת ל-WHO סמכות על מדיניות פנים?",
  kicker: "WHO ואמנת מגיפות",
  verdict: "הטקסט הרשמי שולל סמכות להכתיב מדיניות פנים למדינות",
  ogAlt: "מקור בדיקה - בדיקת הטענה שאמנת המגיפות נותנת ל-WHO סמכות כפייה",
} as const;

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
