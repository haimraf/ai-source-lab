import { ImageResponse } from "next/og";

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

function visualHebrew(value: string) {
  const tokens = value.match(/[A-Za-z0-9.#:/_-]+|[\u0590-\u05FF]+|[^\u0590-\u05FFA-Za-z0-9.#:/_-]+/gu) ?? [value];

  return tokens
    .reverse()
    .map((token) => {
      if (/^[\u0590-\u05FF]+$/u.test(token)) return Array.from(token).reverse().join("");
      if (/^[A-Za-z0-9.#:/_-]+$/u.test(token)) return token;
      return token;
    })
    .join("");
}

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
        dir="ltr"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "54px 66px",
          color: "#172033",
          background: "#f4efe6",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            display: "flex",
            border: "2px solid #d9ccb9",
            borderRadius: 28,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 66,
            top: 54,
            width: 130,
            height: 130,
            display: "flex",
            borderRadius: 999,
            border: "2px solid rgba(35, 74, 112, 0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 66,
            bottom: 54,
            width: 210,
            height: 210,
            display: "flex",
            borderRadius: 999,
            border: "2px solid rgba(35, 74, 112, 0.12)",
          }}
        />

        <div style={{ display: "flex", flexDirection: "row-reverse", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 70,
                height: 70,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 18,
                border: "2px solid #234a70",
                background: "#ffffff",
                color: "#234a70",
                fontSize: 32,
                fontWeight: 900,
              }}
            >
              {visualHebrew("מ")}
            </div>
            <div style={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
              <div style={{ fontSize: 31, fontWeight: 900, color: "#172033" }}>{visualHebrew("מקור בדיקה")}</div>
              <div style={{ fontSize: 18, color: "#5b6473" }}>{visualHebrew("טענות, מקורות ומסקנות")}</div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              padding: "10px 18px",
              borderRadius: 999,
              border: "1px solid #c3b39e",
              background: "#fffaf2",
              color: "#5b4632",
              fontSize: 19,
              fontWeight: 800,
            }}
          >
            {visualHebrew("כרטיס בדיקה")}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            maxWidth: 1040,
            padding: "34px 42px",
            borderRadius: 26,
            background: "rgba(255, 255, 255, 0.78)",
            border: "1px solid #dfd2bf",
            boxShadow: "0 24px 70px rgba(38, 31, 22, 0.12)",
            textAlign: "right",
            alignSelf: "stretch",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row-reverse", alignItems: "center", gap: 14 }}>
            <div style={{ width: 56, height: 3, background: "#234a70", display: "flex" }} />
            <div style={{ color: "#234a70", fontSize: 26, fontWeight: 900 }}>{visualHebrew(kicker)}</div>
          </div>
          <div style={{ fontSize: 62, fontWeight: 900, lineHeight: 1.14, letterSpacing: "-1.7px", color: "#172033" }}>
            {visualHebrew(title)}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 24px",
            borderRadius: 18,
            border: "1px solid #d9ccb9",
            background: "#fffaf2",
            fontSize: 23,
            fontWeight: 800,
          }}
        >
          <span style={{ color: "#234a70", textAlign: "right" }}>{visualHebrew(verdict)}</span>
          <span style={{ color: "#7a6d5e", fontSize: 17 }}>ai-source-lab.vercel.app</span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
