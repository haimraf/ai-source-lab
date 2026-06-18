{
const {existsSync, mkdirSync} = require("node:fs") as typeof import("node:fs");
const {join, resolve} = require("node:path") as typeof import("node:path");
const {bundle} = require("@remotion/bundler") as typeof import("@remotion/bundler");
const {
  renderMedia,
  selectComposition,
} = require("@remotion/renderer") as typeof import("@remotion/renderer");
const {xrpScenes} = require("./scenes.ts") as typeof import("./scenes");

const edgeExecutable =
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const browserExecutable = existsSync(edgeExecutable) ? edgeExecutable : undefined;
const artifactsDirectory = resolve("artifacts", "video");
const voiceoverDirectory = resolve("public", "video", "xrp", "voiceover");
const withVoiceover = xrpScenes.every((scene) =>
  existsSync(join(voiceoverDirectory, `${scene.id}.mp3`)),
);

const outputs = [
  {
    id: "XrpVertical",
    format: "vertical",
    filename: "xrp-global-currency-vertical.mp4",
  },
  {
    id: "XrpLandscape",
    format: "landscape",
    filename: "xrp-global-currency-landscape.mp4",
  },
] as const;

const main = async () => {
  mkdirSync(artifactsDirectory, {recursive: true});
  console.log(
    `Narration: ${withVoiceover ? "enabled" : "unavailable; rendering caption-complete silent fallback"}`,
  );

  const serveUrl = await bundle({
    entryPoint: resolve("videos", "xrp", "index.ts"),
    publicDir: resolve("public"),
    onProgress: (progress) => {
      if (Math.round(progress) % 25 === 0) {
        console.log(`Bundling ${Math.round(progress)}%`);
      }
    },
  });

  for (const output of outputs) {
    const inputProps = {format: output.format, withVoiceover};
    const composition = await selectComposition({
      serveUrl,
      id: output.id,
      inputProps,
      browserExecutable,
    });
    let lastReported = -1;
    await renderMedia({
      serveUrl,
      composition,
      codec: "h264",
      outputLocation: join(artifactsDirectory, output.filename),
      inputProps,
      browserExecutable,
      concurrency: "50%",
      muted: !withVoiceover,
      overwrite: true,
      onProgress: ({progress}) => {
        const percentage = Math.floor(progress * 10) * 10;
        if (percentage !== lastReported) {
          lastReported = percentage;
          console.log(`${output.id}: ${percentage}%`);
        }
      },
    });
    console.log(`Rendered ${join(artifactsDirectory, output.filename)}`);
  }
};

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.stack : error);
  process.exitCode = 1;
});
}
