import {
  AbsoluteFill,
  Easing,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type {XrpScene} from "./scenes";

type SceneCardProps = {
  scene: XrpScene;
  format: "vertical" | "landscape";
  sceneNumber: number;
};

const palette = {
  canvas: "#071015",
  panel: "#0d1b22",
  panelStrong: "#122832",
  ink: "#f4f7f8",
  muted: "#9fb1ba",
  accent: "#62e6bb",
  warning: "#ffcf5c",
  line: "rgba(151, 227, 205, 0.24)",
};

export const SceneCard = ({scene, format, sceneNumber}: SceneCardProps) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const isVertical = format === "vertical";
  const enter = interpolate(frame, [0, 1.2 * fps], [0, 1], {
    easing: Easing.bezier(0.16, 1, 0.3, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const opacity = interpolate(enter, [0, 1], [0, 1]);
  const translateY = interpolate(enter, [0, 1], [48, 0]);
  const isVerdict = scene.kind === "verdict";
  const hasSource = Boolean(scene.sourceLabel && scene.sourceUrl);

  const header = (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: isVertical ? 34 : 24,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          color: isVerdict ? palette.warning : palette.accent,
          fontSize: isVertical ? 31 : 27,
          fontWeight: 800,
          letterSpacing: 1.5,
        }}
      >
        {scene.eyebrow}
      </div>
      <div
        style={{
          fontSize: isVertical ? 78 : 70,
          fontWeight: 900,
          lineHeight: 1.08,
          letterSpacing: -2.5,
        }}
      >
        {scene.title}
      </div>
      <div
        style={{
          color: palette.muted,
          fontSize: isVertical ? 39 : 33,
          fontWeight: 500,
          lineHeight: 1.42,
        }}
      >
        {scene.body}
      </div>
    </div>
  );

  const evidence = (
    <div
      style={{
        alignSelf: "stretch",
        background: hasSource ? palette.panelStrong : palette.panel,
        border: `2px solid ${palette.line}`,
        borderRadius: 34,
        display: "flex",
        flexDirection: "column",
        gap: 22,
        justifyContent: "center",
        minHeight: isVertical ? 310 : 390,
        padding: isVertical ? "44px 46px" : "46px 52px",
        boxShadow: "0 30px 80px rgba(0,0,0,0.28)",
      }}
    >
      <div
        style={{
          color: palette.accent,
          fontSize: isVertical ? 26 : 24,
          fontWeight: 800,
          letterSpacing: 1,
        }}
      >
        {hasSource ? "מקור פתוח לבדיקה" : "שרשרת ההיסק"}
      </div>
      <div
        style={{
          fontSize: isVertical ? 35 : 31,
          fontWeight: 750,
          lineHeight: 1.35,
        }}
      >
        {scene.sourceLabel ?? "עובדה אמיתית אינה מוכיחה את המסקנה הנטענת"}
      </div>
      {scene.sourceUrl ? (
        <div
          dir="ltr"
          style={{
            color: palette.muted,
            fontFamily: "Consolas, monospace",
            fontSize: isVertical ? 20 : 18,
            lineHeight: 1.35,
            overflowWrap: "anywhere",
            textAlign: "left",
          }}
        >
          {scene.sourceUrl}
        </div>
      ) : null}
    </div>
  );

  return (
    <AbsoluteFill
      dir="rtl"
      style={{
        background: `radial-gradient(circle at 12% 12%, rgba(98,230,187,0.12), transparent 35%), ${palette.canvas}`,
        padding: isVertical ? "92px 74px 86px" : "62px 90px 54px",
      }}
    >
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          opacity: 0.82,
        }}
      >
        <div style={{fontSize: isVertical ? 24 : 20, fontWeight: 800}}>
          מקור בדיקה
        </div>
        <div
          dir="ltr"
          style={{color: palette.muted, fontSize: isVertical ? 22 : 19}}
        >
          {String(sceneNumber).padStart(2, "0")} / 06
        </div>
      </div>

      <div
        style={{
          display: "grid",
          flex: 1,
          gap: isVertical ? 48 : 72,
          gridTemplateColumns: isVertical ? "1fr" : "0.88fr 1.12fr",
          gridTemplateRows: isVertical ? "1fr auto" : "1fr",
          marginTop: isVertical ? 64 : 38,
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        {isVertical ? (
          <>
            {header}
            {evidence}
          </>
        ) : (
          <>
            {evidence}
            {header}
          </>
        )}
      </div>

      <div
        style={{
          background: "rgba(2, 8, 11, 0.93)",
          border: `1px solid ${palette.line}`,
          borderRadius: 24,
          color: palette.ink,
          fontSize: isVertical ? 31 : 27,
          fontWeight: 650,
          lineHeight: 1.38,
          marginTop: isVertical ? 46 : 32,
          minHeight: isVertical ? 150 : 104,
          padding: isVertical ? "28px 34px" : "22px 30px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
          }}
        >
          {scene.narration}
        </div>
      </div>
    </AbsoluteFill>
  );
};
