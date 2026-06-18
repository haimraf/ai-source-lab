import { ImageResponse } from "next/og";

export const socialImageSize = { width: 1200, height: 630 };
export const socialImageContentType = "image/png";

function getTopicCode(title: string) {
  if (title.includes("XRP")) return "XRP / PAYMENT CLAIM";
  if (title.includes("מטוסים") || title.includes("אלומיניום")) return "CONTRAILS / AIRCRAFT CLAIM";
  if (title.includes("2030") || title.includes("אג׳נדה") || title.includes("אג'נדה")) return "AGENDA 2030 / SOURCE CHECK";
  return "SOURCE CHECK / HEBREW FACT FILE";
}

export function createSocialImage({
  title,
}: {
  kicker: string;
  title: string;
  verdict: string;
}) {
  const topic = getTopicCode(title);

  return new ImageResponse(
    (
      <div
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

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
                fontSize: 26,
                fontWeight: 900,
              }}
            >
              M
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 29, fontWeight: 900, letterSpacing: "0.03em" }}>MAKOR BEDIKA</div>
              <div style={{ fontSize: 17, color: "#91a1b2", letterSpacing: "0.12em" }}>SOURCE • EVIDENCE • VERDICT</div>
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
              letterSpacing: "0.08em",
            }}
          >
            CHECK FILE
          </div>
        </div>

        <div
          style={{
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
              <div style={{ fontSize: 16, fontWeight: 900, color: "#7b5b22" }}>PRIMARY SOURCE</div>
              <div style={{ fontSize: 14, color: "#6e7682" }}>01</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ height: 14, background: "#172033", width: "74%", display: "flex" }} />
              <div style={{ height: 10, background: "#657180", width: "92%", display: "flex" }} />
              <div style={{ height: 10, background: "#657180", width: "84%", display: "flex" }} />
              <div style={{ height: 10, background: "#657180", width: "68%", display: "flex" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ width: 70, height: 70, border: "3px solid #b0473c", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", color: "#b0473c", fontSize: 13, fontWeight: 900 }}>CHECKED</div>
              <div style={{ fontSize: 13, color: "#6e7682" }}>OPEN DOCUMENT</div>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 26,
              padding: "28px 0",
            }}
          >
            <div style={{ color: "#d9b36a", fontSize: 26, fontWeight: 900, letterSpacing: "0.08em" }}>{topic}</div>
            <div style={{ fontSize: 58, lineHeight: 1.08, fontWeight: 900, letterSpacing: "0.02em" }}>
              CLAIM → SOURCE → GAP → VERDICT
            </div>
            <div style={{ fontSize: 23, lineHeight: 1.35, color: "#b8c2cf", maxWidth: 660 }}>
              A Hebrew source-checking file that separates what was written from what was added later.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #273747",
            paddingTop: 18,
            color: "#91a1b2",
            fontSize: 18,
          }}
        >
          <span>Human reviewed • Sources linked • Updated file</span>
          <span>ai-source-lab.vercel.app</span>
        </div>
      </div>
    ),
    socialImageSize,
  );
}
