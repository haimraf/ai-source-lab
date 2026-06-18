import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const size = socialImageSize;
export const contentType = socialImageContentType;
export const alt = "האם קיימת תוכנית בת שבעה שלבים של האו״ם?";

export default function Image() {
  return createSocialImage({
    kicker: "אג׳נדה 2030",
    title: "האם קיימת תוכנית בת שבעה שלבים של האו״ם?",
    verdict: "לא נמצא מקור רשמי לרשימה",
  });
}
