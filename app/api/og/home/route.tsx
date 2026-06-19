import { createSocialImage } from "@/lib/social-image";

export const runtime = "edge";

export function GET() {
  return createSocialImage({
    kicker: "מקור בדיקה",
    title: "טענה אחת. מקור אחד. מסקנה זהירה.",
    verdict: "בודקים מול המקור לפני שקופצים למסקנה.",
  });
}
