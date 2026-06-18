import {describe, expect, it} from "vitest";
import {FPS, TOTAL_FRAMES, xrpScenes} from "./scenes";

describe("XRP video scene data", () => {
  it("fills exactly sixty seconds at 30 FPS", () => {
    expect(FPS).toBe(30);
    expect(TOTAL_FRAMES).toBe(1800);
    expect(
      xrpScenes.reduce((sum, scene) => sum + scene.durationInFrames, 0),
    ).toBe(TOTAL_FRAMES);
  });

  it("keeps every factual scene tied to a visible source", () => {
    const factual = xrpScenes.filter((scene) => scene.kind === "evidence");
    expect(factual.length).toBeGreaterThanOrEqual(3);
    expect(factual.every((scene) => scene.sourceLabel && scene.sourceUrl)).toBe(
      true,
    );
  });
});
