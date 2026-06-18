{
const {mkdirSync, writeFileSync} = require("node:fs") as typeof import("node:fs");
const {join} = require("node:path") as typeof import("node:path");
const {xrpScenes} = require("./scenes.ts") as typeof import("./scenes");

const apiKey = process.env.ELEVENLABS_API_KEY;
const voiceId = process.env.ELEVENLABS_VOICE_ID;

if (!apiKey || !voiceId) {
  console.error(
    "Voiceover generation skipped: set ELEVENLABS_API_KEY and ELEVENLABS_VOICE_ID before running this script.",
  );
  process.exit(1);
}

const outputDirectory = join(
  process.cwd(),
  "public",
  "video",
  "xrp",
  "voiceover",
);

const generate = async () => {
  mkdirSync(outputDirectory, {recursive: true});

  for (const scene of xrpScenes) {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}`,
      {
        method: "POST",
        headers: {
          Accept: "audio/mpeg",
          "Content-Type": "application/json",
          "xi-api-key": apiKey,
        },
        body: JSON.stringify({
          text: scene.narration,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            similarity_boost: 0.75,
            stability: 0.5,
            style: 0.3,
          },
        }),
      },
    );

    if (!response.ok) {
      throw new Error(
        `ElevenLabs request failed for ${scene.id}: ${response.status} ${response.statusText}`,
      );
    }

    const audio = Buffer.from(await response.arrayBuffer());
    writeFileSync(join(outputDirectory, `${scene.id}.mp3`), audio);
    console.log(`Generated ${scene.id}.mp3`);
  }
};

generate().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exitCode = 1;
});
}
