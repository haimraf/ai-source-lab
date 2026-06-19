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
    .replaceAll("ISO 20022", "תקן המסרים הפיננסיים")
    .replaceAll("2030", "עשרים שלושים")
    .replaceAll("XRP", "אקס־אר־פי")
    .replaceAll("AI", "בינה מלאכותית")
    .replaceAll("169", "מאה שישים ותשע")
    .replaceAll("17", "שבעה עשר");
}

// The Vercel ImageResponse renderer can render Hebrew text left-to-right in OG images.
// Until the generated image renderer handles bidi text consistently, we provide visual-order
// Hebrew strings for the image only. Regular page HTML and metadata remain semantic RTL Hebrew.
function ogHebrew(text: string) {
  return Array.from(normalizeHebrewOgText(text)).reverse().join("");
}

function splitTitleLines(title: string) {
  const normalizedTitle = normalizeHebrewOgText(title);

  const explicitTitleLines: Record<string, string[]> = {
    "טענה רצה ברשת? חוזרים למקור.": ["טענה רצה ברשת?", "חוזרים למקור."],
    "טענה רצה ברשת? חוזרים למקור": ["טענה רצה ברשת?", "חוזרים למקור"],
    "רצה ברשת? חוזרים למקור.": ["רצה ברשת?", "חוזרים למקור."],
    "טענה אחת. מקור אחד. מסקנה זהירה.": ["טענה אחת.", "מקור אחד.", "מסקנה זהירה."],
    "האם תשובת בינה מלאכותית היא מקור?": [
      "תשובת בינה מלאכותית",
      "אינה מקור בפני עצמה",
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
  const safeKicker = ogHebrew(clampText(kicker, 44));
  const safeTitleLines = splitTitleLines(clampText(title, 78)).map(ogHebrew);
  const safeVerdict = ogHebrew(clampText(verdict, 96));

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
              <div style={{ fontSize: 31, fontWeight: 900 }}>{ogHebrew("מקור בדיקה")}</div>
              <div style={{ fontSize: 17, color: "#91a1b2", letterSpacing: "0.04em" }}>
                {ogHebrew("טענה • מקור • פער • מסקנה")}
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
            {ogHebrew("בדיקת מקור")}
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
              <div style={{ fontSize: 16, fontWeight: 900, color: "#7b5b22" }}>{ogHebrew("מסמך מקור")}</div>
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
                {ogHebrew("נבדק")}
              </div>
              <div style={{ fontSize: 13, color: "#6e7682" }}>{ogHebrew("קישורים פתוחים")}</div>
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
                lineHeight: 1.35,
                color: "#d8e0ea",
                background: "rgba(217,179,106,.12)",
                border: "1px solid rgba(217,179,106,.42)",
                padding: "14px 18px",
                maxWidth: 650,
              }}
            >
              {safeVerdict}
            </div>
          </div>
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #273747",
            paddingTop: 18,
            color: "#91a1b2",
            fontSize: 18,
          }}
        >
          <span>{ogHebrew("מקורות גלויים • תאריך עדכון • בדיקה אנושית")}</span>
          <span>ai-source-lab.vercel.app</span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
