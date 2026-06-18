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

export function createSocialImage({ kicker, title, verdict }: SocialImageInput) {
  const safeKicker = clampText(kicker, 44);
  const safeTitle = clampText(title, 78);
  const safeVerdict = clampText(verdict, 96);

  return new ImageResponse(
    (
      <div
        dir="rtl"
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
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 31, fontWeight: 900 }}>מקור בדיקה</div>
              <div style={{ fontSize: 17, color: "#91a1b2", letterSpacing: "0.04em" }}>טענה • מקור • פער • מסקנה</div>
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
            בדיקת מקור
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
              <div style={{ fontSize: 16, fontWeight: 900, color: "#7b5b22" }}>מסמך מקור</div>
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
                נבדק
              </div>
              <div style={{ fontSize: 13, color: "#6e7682" }}>קישורים פתוחים</div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 22,
              padding: "28px 0",
            }}
          >
            <div style={{ color: "#d9b36a", fontSize: 28, fontWeight: 900 }}>{safeKicker}</div>
            <div style={{ fontSize: 54, lineHeight: 1.12, fontWeight: 900, maxWidth: 690 }}>{safeTitle}</div>
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
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
          <span>מקורות גלויים • תאריך עדכון • בדיקה אנושית</span>
          <span>ai-source-lab.vercel.app</span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
