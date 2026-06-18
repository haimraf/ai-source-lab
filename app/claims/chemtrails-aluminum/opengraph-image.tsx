import {
  createSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const size = socialImageSize;
export const contentType = socialImageContentType;
export const alt = "האם מטוסים מרססים אלומיניום?";

export default function Image() {
  return createSocialImage({
    kicker: "שמיים ומזג אוויר",
    title: "האם מטוסים מרססים אלומיניום?",
    verdict: "לא נמצא בסיס לריסוס מטיסות רגילות",
  });
}
