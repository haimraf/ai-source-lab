import { describe, expect, it } from "vitest";
import * as socialImage from "./social-image";

describe("OG bidi text", () => {
  it("keeps Latin phrases and numbers left-to-right inside visual-order Hebrew", () => {
    expect(socialImage).toHaveProperty("toVisualOgText");

    const toVisualOgText = (
      socialImage as typeof socialImage & { toVisualOgText: (text: string) => string }
    ).toVisualOgText;

    expect(toVisualOgText("האם הלוגו של Monster Energy מסתיר 666 בעברית?")).toBe(
      "?תירבעב 666 ריתסמ Monster Energy לש וגולה םאה",
    );
  });

  it("keeps the Monster title in three stable semantic lines", () => {
    expect(socialImage).toHaveProperty("splitSocialImageTitle");

    const splitSocialImageTitle = (
      socialImage as typeof socialImage & { splitSocialImageTitle: (text: string) => string[] }
    ).splitSocialImageTitle;

    expect(splitSocialImageTitle("האם הלוגו של Monster Energy מסתיר 666 בעברית?")).toEqual([
      "האם הלוגו של",
      "Monster Energy מסתיר 666",
      "בעברית?",
    ]);
  });

  it("keeps the WHO title in three stable semantic lines", () => {
    expect(
      socialImage.splitSocialImageTitle("האם אמנת המגיפות נותנת ל-WHO סמכות על מדיניות פנים?"),
    ).toEqual(["האם אמנת המגיפות", "נותנת ל-WHO סמכות", "על מדיניות פנים?"]);
  });

  it("keeps the Gravity title in three stable semantic lines", () => {
    expect(
      socialImage.splitSocialImageTitle("האם כדור הארץ יאבד כבידה ל־7 שניות ב־12 באוגוסט 2026?"),
    ).toEqual(["האם כדור הארץ", "יאבד כבידה ל־7 שניות", "ב־12 באוגוסט 2026?"]);
  });
});
