# XRP Remotion Video Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render caption-complete vertical and landscape MP4 explainers of the published XRP fact-check from one responsive Remotion codebase.

**Architecture:** Keep verified editorial content in a typed scene-data module and render it through one aspect-ratio-aware composition. Generate narration as optional scene audio before rendering; the composition remains fully understandable when audio is unavailable.

**Tech Stack:** React 19, TypeScript, Remotion, `@remotion/cli`, `@remotion/transitions`, Vitest, ElevenLabs multilingual TTS when configured

---

### Task 1: Add the video toolchain

**Files:**
- Modify: `package.json`
- Modify: `.gitignore`

- [ ] **Step 1: Install dependencies**

```powershell
npm install remotion @remotion/cli @remotion/transitions @remotion/bundler @remotion/renderer
npm install --save-dev vitest
```

Expected: `package.json` and `package-lock.json` contain the Remotion packages and Vitest.

- [ ] **Step 2: Add scripts to `package.json`**

```json
{
  "scripts": {
    "test": "vitest run",
    "video:studio": "remotion studio videos/xrp/index.ts",
    "video:still:vertical": "remotion still videos/xrp/index.ts XrpVertical artifacts/video/xrp-vertical.png --frame=300",
    "video:still:landscape": "remotion still videos/xrp/index.ts XrpLandscape artifacts/video/xrp-landscape.png --frame=300",
    "video:render": "node --strip-types videos/xrp/render.ts"
  }
}
```

- [ ] **Step 3: Ignore generated media but keep the directory contract**

Append:

```gitignore
artifacts/video/*.mp4
artifacts/video/*.png
public/video/xrp/voiceover/*.mp3
```

- [ ] **Step 4: Run existing checks**

Run: `npm run typecheck`

Expected: PASS.

- [ ] **Step 5: Commit**

```powershell
git add package.json package-lock.json .gitignore
git commit -m "build: add Remotion video toolchain"
```

### Task 2: Define verified scene data test-first

**Files:**
- Create: `videos/xrp/scenes.test.ts`
- Create: `videos/xrp/scenes.ts`

- [ ] **Step 1: Write the failing data-contract test**

```ts
import {describe, expect, it} from "vitest";
import {FPS, TOTAL_FRAMES, xrpScenes} from "./scenes";

describe("XRP video scene data", () => {
  it("fills exactly sixty seconds at 30 FPS", () => {
    expect(FPS).toBe(30);
    expect(TOTAL_FRAMES).toBe(1800);
    expect(xrpScenes.reduce((sum, scene) => sum + scene.durationInFrames, 0)).toBe(TOTAL_FRAMES);
  });

  it("keeps every factual scene tied to a visible source", () => {
    const factual = xrpScenes.filter((scene) => scene.kind === "evidence");
    expect(factual.length).toBeGreaterThanOrEqual(3);
    expect(factual.every((scene) => scene.sourceLabel && scene.sourceUrl)).toBe(true);
  });
});
```

- [ ] **Step 2: Run the test and verify failure**

Run: `npm test -- videos/xrp/scenes.test.ts`

Expected: FAIL because `videos/xrp/scenes.ts` does not exist.

- [ ] **Step 3: Implement the typed scene data**

Create `videos/xrp/scenes.ts` with `FPS = 30`, `TOTAL_FRAMES = 1800`, and six scenes totaling 1800 frames. Use these durations: 210, 300, 360, 330, 330, and 270 frames. Evidence scenes must cite the existing Ripple/XRPL, ISO 20022, and IMF URLs from `app/claims/xrp-global-currency/page.tsx`. Narration must say “אקס־אר־פי” and describe ISO 20022 as a messaging standard, never as a coin approval list.

```ts
export type XrpScene = {
  id: string;
  kind: "hook" | "evidence" | "logic" | "verdict" | "close";
  durationInFrames: number;
  eyebrow: string;
  title: string;
  body: string;
  narration: string;
  sourceLabel?: string;
  sourceUrl?: string;
};

export const FPS = 30;
export const TOTAL_FRAMES = 1800;
export const xrpScenes: XrpScene[] = [
  {
    id: "hook",
    kind: "hook",
    durationInFrames: 210,
    eyebrow: "בדיקת טענה",
    title: "האם XRP נבחר להיות המטבע העולמי?",
    body: "הטענה נשמעת שוב ושוב. חיפשנו את ההחלטה הרשמית שמאחוריה.",
    narration: "האם אקס־אר־פי נבחר להיות המטבע העולמי? הטענה הזאת מופיעה שוב ושוב, אבל מה אומרים המקורות הרשמיים?",
  },
  {
    id: "xrp-use",
    kind: "evidence",
    durationInFrames: 300,
    eyebrow: "מה כן נכון",
    title: "ל-XRP יש שימוש אמיתי",
    body: "Ripple ו-XRP Ledger מתארים נכס לתשלומים שיכול לגשר בין מטבעות.",
    narration: "ראשית, לאקס־אר־פי יש שימוש אמיתי. ריפל והתיעוד של אקס־אר־פי לדג'ר מתארים נכס לתשלומים שיכול לגשר בין מטבעות.",
    sourceLabel: "XRP Ledger: About XRP",
    sourceUrl: "https://xrpl.org/about/xrp",
  },
  {
    id: "iso-standard",
    kind: "evidence",
    durationInFrames: 360,
    eyebrow: "המקור הרשמי",
    title: "ISO 20022 הוא תקן למסרים",
    body: "התקן מגדיר כיצד מערכות פיננסיות מחליפות מידע. הוא אינו מאשר מטבעות.",
    narration: "אבל תקן איי־אס־או שמספרו עשרים אלף עשרים ושתיים הוא תקן למסרים פיננסיים. הוא מגדיר איך מערכות מחליפות מידע. הוא לא בוחר ולא מאשר מטבע עולמי.",
    sourceLabel: "ISO 20022: About the Standard",
    sourceUrl: "https://www.iso20022.org/about-iso-20022",
  },
  {
    id: "sdr-basket",
    kind: "evidence",
    durationInFrames: 330,
    eyebrow: "בדיקת רזרבה",
    title: "XRP אינו חלק מסל ה-SDR",
    body: "קרן המטבע מפרטת חמישה מטבעות בסל. XRP אינו אחד מהם.",
    narration: "גם סל זכויות המשיכה המיוחדות של קרן המטבע לא כולל אקס־אר־פי. הוא מבוסס על חמישה מטבעות מדינתיים, ואקס־אר־פי אינו אחד מהם.",
    sourceLabel: "IMF: Special Drawing Rights",
    sourceUrl: "https://www.imf.org/en/about/factsheets/sheets/2023/special-drawing-rights-sdr",
  },
  {
    id: "logic-leap",
    kind: "logic",
    durationInFrames: 330,
    eyebrow: "הקפיצה הלוגית",
    title: "שימוש אפשרי אינו בחירה רשמית",
    body: "תשלומים + גישור + תקן מסרים ≠ מטבע עולמי שנבחר בהחלטה רשמית.",
    narration: "כאן מתרחשת הקפיצה. שימוש בתשלומים, יכולת לגשר בין מטבעות ותקן מסרים אמיתי, אינם הוכחה לבחירה רשמית במטבע עולמי.",
  },
  {
    id: "verdict",
    kind: "verdict",
    durationInFrames: 270,
    eyebrow: "המסקנה",
    title: "לא נמצא מקור רשמי לטענה",
    body: "את שרשרת המקורות המלאה אפשר לבדוק באתר מקור בדיקה.",
    narration: "המסקנה: לא נמצא מקור רשמי לכך שאקס־אר־פי נבחר להיות מטבע עולמי או מטבע רזרבה. את כל המקורות אפשר לפתוח ולבדוק במקור בדיקה.",
  },
];
```

- [ ] **Step 4: Run the test and verify success**

Run: `npm test -- videos/xrp/scenes.test.ts`

Expected: PASS with 2 tests.

- [ ] **Step 5: Commit**

```powershell
git add videos/xrp/scenes.ts videos/xrp/scenes.test.ts
git commit -m "feat: define verified XRP video scenes"
```

### Task 3: Build one responsive composition

**Files:**
- Create: `videos/xrp/index.ts`
- Create: `videos/xrp/Root.tsx`
- Create: `videos/xrp/XrpVideo.tsx`
- Create: `videos/xrp/SceneCard.tsx`

- [ ] **Step 1: Register two compositions over the same component**

`Root.tsx` registers `XrpVertical` at 1080x1920 and `XrpLandscape` at 1920x1080. Both use 30 FPS, 1800 frames, and `<XrpVideo format="vertical" />` or `<XrpVideo format="landscape" />`.

- [ ] **Step 2: Implement frame-driven scene sequencing**

Use `<Series>` with one `<Series.Sequence>` per scene and `premountFor={FPS}`. `SceneCard` uses `useCurrentFrame()`, `useVideoConfig()`, `interpolate()`, and `Easing.bezier(0.16, 1, 0.3, 1)` for entry motion. Do not use CSS transitions or CSS keyframe animations.

- [ ] **Step 3: Implement aspect-ratio-aware layout**

Vertical layout stacks title, evidence card, and source label. Landscape layout uses a two-column grid with the title/verdict on the right and source evidence on the left. Both use `dir="rtl"`, a dark source-file palette, high contrast, and safe margins.

- [ ] **Step 4: Add burned-in captions**

Render each scene's narration text in a bottom caption panel with a maximum of three visible lines. Captions remain present even if narration audio is unavailable.

- [ ] **Step 5: Typecheck and preview representative stills**

Run:

```powershell
npm run typecheck
npm run video:still:vertical
npm run video:still:landscape
```

Expected: PASS and two PNG files under `artifacts/video/`.

- [ ] **Step 6: Commit**

```powershell
git add videos/xrp
git commit -m "feat: build responsive XRP explainer composition"
```

### Task 4: Add optional Hebrew narration

**Files:**
- Create: `videos/xrp/generate-voiceover.ts`
- Create: `videos/xrp/audio.ts`
- Modify: `.env.example`
- Modify: `videos/xrp/XrpVideo.tsx`

- [ ] **Step 1: Add environment contract**

Append to `.env.example`:

```dotenv
# Optional: generates Hebrew narration for the Remotion XRP video.
ELEVENLABS_API_KEY=
ELEVENLABS_VOICE_ID=
```

- [ ] **Step 2: Implement voice generation**

`generate-voiceover.ts` reads the scene narration, calls ElevenLabs `eleven_multilingual_v2`, and writes one MP3 per scene to `public/video/xrp/voiceover/<scene-id>.mp3`. It must exit with a clear message before any request if either environment variable is absent.

- [ ] **Step 3: Add audio tracks without making them mandatory**

`audio.ts` exposes `voiceoverPath(sceneId)` and `XrpVideo.tsx` renders `<Audio src={staticFile(path)} />` only when the render prop `withVoiceover` is true. Default props set `withVoiceover` to false until files exist.

- [ ] **Step 4: Generate and listen to the six narration clips**

Run: `node --strip-types videos/xrp/generate-voiceover.ts`

Expected: six MP3 files. Manually verify the pronunciations of XRP, Ripple, ISO 20022, IMF, and SDR before enabling narration.

- [ ] **Step 5: Commit only code and environment documentation**

```powershell
git add videos/xrp/generate-voiceover.ts videos/xrp/audio.ts videos/xrp/XrpVideo.tsx .env.example
git commit -m "feat: add optional Hebrew video narration"
```

### Task 5: Render and verify both MP4 files

**Files:**
- Create: `videos/xrp/render.ts`
- Create: `artifacts/video/README.md`

- [ ] **Step 1: Implement the render driver**

Use `@remotion/bundler` and `@remotion/renderer` to bundle `videos/xrp/index.ts` once, then render `XrpVertical` and `XrpLandscape` with H.264 to the two filenames specified by the design. Set `withVoiceover` based on whether all six MP3 files exist.

- [ ] **Step 2: Render**

Run: `npm run video:render`

Expected: two MP4 files under `artifacts/video/`.

- [ ] **Step 3: Verify media metadata**

Use the bundled `ffprobe` or Remotion tooling to verify: 60 seconds, 30 FPS, 1080x1920 vertical, 1920x1080 landscape, H.264 video, and an audio stream only when narration was generated.

- [ ] **Step 4: Document reproducible render commands**

`artifacts/video/README.md` records the source composition, output names, narration status, render command, and the editorial source page.

- [ ] **Step 5: Run final checks and commit**

```powershell
npm test
npm run typecheck
npm run build
git add videos/xrp artifacts/video/README.md
git commit -m "feat: render reproducible XRP explainer videos"
```
