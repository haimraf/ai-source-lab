import { createSocialImage } from "@/lib/social-image";

export const runtime = "edge";

export function GET() {
  return createSocialImage({
    kicker: "מקור בדיקה",
    title: "טענה רצה ברשת? חוזרים למקור.",
    verdict: "מקור לפני מסקנה",
  });
}
