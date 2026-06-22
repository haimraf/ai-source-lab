import { ImageResponse } from "next/og";

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

type SocialImageInput = {
  kicker: string;
  title: string;
  verdict: string;
};

function clampText(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 1).trimEnd() + "…";
}

function normalizeHebrewOgText(text: string) {
  return text
    .replaceAll("Project Blue Beam", "פרויקט בלו בים")
    .replaceAll("NASA", "נאס״א")
    .replaceAll("UN", "האו״ם")
    .replaceAll("ISO 20022", "תקן המסרים הפיננסיים")
    .replaceAll("2030", "עשרים שלושים")
    .replaceAll("XRP", "אקס־אר־פי")
    .replaceAll("BCI", "בי־סי־איי")
    .replaceAll("AI", "בינה מלאכותית")
    .replaceAll("Gateway", "גייטוויי")
    .replaceAll("169", "מאה שישים ותשע")
    .replaceAll("17", "שבעה עשר");
}

// The ImageResponse renderer can lay out Hebrew text left-to-right. Build visual-order text for
// the image only, while protecting Latin and numeric runs so their internal order stays LTR.
// Regular page HTML and metadata remain semantic RTL Hebrew.
export function toVisualOgText(text: string) {
  const ltrRuns: string[] = [];
  const protectedText = normalizeHebrewOgText(text).replace(
    /[\p{Script=Latin}\p{Number}]+(?:[ \t./:+&'’_-]+[\p{Script=Latin}\p{Number}]+)*/gu,
    (run) => {
      const marker = String.fromCodePoint(0xe000 + ltrRuns.length);
      ltrRuns.push(run);
      return marker;
    },
  );

  return Array.from(protectedText)
    .reverse()
    .join("")
    .replace(/[\uE000-\uF8FF]/g, (marker) => ltrRuns[marker.codePointAt(0)! - 0xe000]);
}

export function splitSocialImageTitle(title: string) {
  const normalizedTitle = normalizeHebrewOgText(title);

  const explicitTitleLines: Record<string, string[]> = {
    "טענה רצה ברשת? חוזרים למקור.": ["טענה רצה ברשת?", "חוזרים למקור."],
    "טענה רצה ברשת? חוזרים למקור": ["טענה רצה ברשת?", "חוזרים למקור"],
    "רצה ברשת? חוזרים למקור.": ["רצה ברשת?", "חוזרים למקור."],
    "טענה אחת. מקור אחד. מסקנה זהירה.": ["טענה אחת.", "מקור אחד.", "מסקנה זהירה."],
    "האם בי־סי־איי ו-בינה מלאכותית מוכיחים שליטה חיצונית בגוף?": [
      "לא נמצאה ראיה",
      "לשליטה חיצונית",
      "באדם דרך AI ו-BCI",
    ],
    "האם תשובת בינה מלאכותית היא מקור?": [
      "תשובת בינה מלאכותית",
      "אינה מקור בפני עצמה",
    ],
    "האם פרויקט בלו בים הוא תוכנית רשמית של נאס״א?": [
      "לא נמצא מקור רשמי",
      "לפרויקט בלו בים",
      "של נאס״א או האו״ם",
    ],
    "האם מסמך גייטוויי מוכיח יציאה מהגוף?": [
      "מסמך גייטוויי אמיתי",
      "אבל אינו הוכחה",
      "ליציאה מהגוף",
    ],
    "האם זריעת עננים מוכיחה Chemtrails?": [
      "זריעת עננים קיימת",
      "אבל לא מוכיחה ריסוס",
    ],
    "מהי תוכנית שבעת השלבים של אג׳נדה עשרים שלושים?": [
      "לא נמצא מקור רשמי",
      "לשבעת השלבים",
    ],
    "האם אקס־אר־פי נבחר להיות המטבע העולמי?": [
      "לא נמצא מקור רשמי",
      "שאקס־אר־פי נבחר",
      "למטבע עולמי",
    ],
    "האם מטוסים מרססים אלומיניום?": ["לא נמצאה ראיה", "לריסוס אלומיניום"],
    "האם הלוגו של Monster Energy מסתיר 666 בעברית?": [
      "האם הלוגו של",
      "Monster Energy מסתיר 666",
      "בעברית?",
    ],
    "האם אמנת המגיפות נותנת ל-WHO סמכות על מדיניות פנים?": [
      "האם אמנת המגיפות",
      "נותנת ל-WHO סמכות",
      "על מדיניות פנים?",
    ],
    "האם כדור הארץ יאבד כבידה ל־7 שניות ב־12 באוגוסט 2026?": [
      "האם כדור הארץ",
      "יאבד כבידה ל־7 שניות",
      "ב־12 באוגוסט 2026?",
    ],
  };

  if (explicitTitleLines[normalizedTitle]) return explicitTitleLines[normalizedTitle];

  const words = normalizedTitle.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;

    if (candidate.length > 28 && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = candidate;
    }
  }

  if (currentLine) lines.push(currentLine);

  return lines.slice(0, 3);
}

export function createSocialImage({ kicker, title, verdict }: SocialImageInput) {
  const safeKicker = toVisualOgText(clampText(kicker, 44));
  const safeTitleLines = splitSocialImageTitle(clampText(title, 78)).map(toVisualOgText);
  const safeVerdict = toVisualOgText(clampText(verdict, 96));

  return new ImageResponse(
    (
      <div
        dir="ltr"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px 64px",
          color: "#eef3f8",
          background: "#0b1118",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            opacity: 0.45,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            height: 8,
            background: "#d9b36a",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexDirection: "row-reverse",
            }}
          >
            <div
              style={{
                width: 74,
                height: 74,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #d9b36a",
                background: "#111b25",
                color: "#d9b36a",
                fontSize: 28,
                fontWeight: 900,
              }}
            >
              מ
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div style={{ fontSize: 31, fontWeight: 900 }}>{toVisualOgText("מקור בדיקה")}</div>
              <div style={{ fontSize: 17, color: "#91a1b2", letterSpacing: "0.04em" }}>
                {toVisualOgText("טענה • מקור • פער • מסקנה")}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "10px 18px",
              border: "1px solid #314254",
              color: "#d9b36a",
              fontSize: 18,
              fontWeight: 800,
            }}
          >
            {toVisualOgText("בדיקת מקור")}
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            gap: 32,
            alignItems: "stretch",
            height: 330,
          }}
        >
          <div
            style={{
              width: 342,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 26,
              background: "#f3efe6",
              color: "#172033",
              border: "1px solid #d7c7ad",
              boxShadow: "12px 16px 0 rgba(0,0,0,.24)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 16, fontWeight: 900, color: "#7b5b22" }}>{toVisualOgText("מסמך מקור")}</div>
              <div style={{ fontSize: 14, color: "#6e7682" }}>01</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ height: 14, background: "#172033", width: "74%", display: "flex" }} />
              <div style={{ height: 10, background: "#657180", width: "92%", display: "flex" }} />
              <div style={{ height: 10, background: "#657180", width: "84%", display: "flex" }} />
              <div style={{ height: 10, background: "#657180", width: "68%", display: "flex" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div
                style={{
                  width: 74,
                  height: 74,
                  border: "3px solid #b0473c",
                  borderRadius: 999,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#b0473c",
                  fontSize: 13,
                  fontWeight: 900,
                }}
              >
                {toVisualOgText("נבדק")}
              </div>
              <div style={{ fontSize: 13, color: "#6e7682" }}>{toVisualOgText("קישורים פתוחים")}</div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              gap: 22,
              padding: "28px 0",
              textAlign: "right",
            }}
          >
            <div style={{ color: "#d9b36a", fontSize: 28, fontWeight: 900 }}>{safeKicker}</div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
              {safeTitleLines.map((line, index) => (
                <div key={index} style={{ fontSize: 54, lineHeight: 1.12, fontWeight: 900 }}>
                  {line}
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-end",
                fontSize: 24,
                lineHeight: 1.25,
                color: "#c9d2dc",
                maxWidth: 650,
              }}
            >
              {safeVerdict}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", color: "#91a1b2", fontSize: 16, position: "relative" }}>
          <div>{toVisualOgText("מקור פתוח • בדיקה אנושית • מסקנה זהירה")}</div>
          <div>ai-source-lab.vercel.app</div>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
