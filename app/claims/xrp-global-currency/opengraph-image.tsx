import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const size = socialImageSize;
export const contentType = socialImageContentType;
export const alt = "האם XRP נבחר להיות המטבע העולמי?";

export default function Image() {
  return createSocialImage({
    kicker: "כסף דיגיטלי",
    title: "האם XRP נבחר להיות המטבע העולמי?",
    verdict: "לא נמצא בסיס רשמי לטענה",
  });
}
