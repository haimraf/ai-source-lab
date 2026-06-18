import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const size = socialImageSize;
export const contentType = socialImageContentType;
export const alt = "מקור בדיקה - טענות, מקורות ומסקנות";

export default function Image() {
  return createSocialImage({
    kicker: "בדיקות מקור בעברית",
    title: "טענה רצה ברשת? חוזרים למקום שבו היא התחילה.",
    verdict: "מקור לפני מסקנה",
  });
}
