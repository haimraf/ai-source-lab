import { ImageResponse } from "next/og";

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

export function createSocialImage({
  kicker,
  title,
  verdict,
}: {
  kicker: string;
  title: string;
  verdict: string;
}) {
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
          padding: "52px 70px",
          color: "#f6f8fc",
          background:
            "radial-gradient(circle at 90% 0%, #18314f 0%, #0d1522 34%, #090c12 72%)",
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
            opacity: 0.22,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.07) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 76,
                height: 76,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 22,
                border: "2px solid #5d8cb8",
                background: "#13263a",
                color: "#8fc7ff",
                fontSize: 34,
                fontWeight: 800,
              }}
            >
              מ
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 30, fontWeight: 800 }}>מקור בדיקה</div>
              <div style={{ fontSize: 18, color: "#aab3c5" }}>טענות, מקורות ומסקנות</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid #42698e",
              background: "#13263a",
              color: "#8fc7ff",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            בדיקת מקור
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 1060 }}>
          <div style={{ color: "#8fc7ff", fontSize: 27, fontWeight: 700 }}>{kicker}</div>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.18, letterSpacing: "-2px" }}>
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "17px 24px",
            borderRadius: 18,
            border: "1px solid #4c6078",
            background: "#111d2b",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          <span>{verdict}</span>
          <span style={{ color: "#aab3c5", fontSize: 17 }}>ai-source-lab.vercel.app</span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
