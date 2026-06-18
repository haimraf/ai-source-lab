import {Audio} from "@remotion/media";
import {AbsoluteFill, Series, staticFile} from "remotion";
import {voiceoverPath} from "./audio";
import {SceneCard} from "./SceneCard";
import {FPS, xrpScenes} from "./scenes";

export type XrpVideoProps = {
  format: "vertical" | "landscape";
  withVoiceover: boolean;
};

export const XrpVideo = ({format, withVoiceover}: XrpVideoProps) => (
  <AbsoluteFill
    style={{
      backgroundColor: "#071015",
      color: "#f4f7f8",
      fontFamily: 'Arial, "Noto Sans Hebrew", sans-serif',
    }}
  >
    <Series>
      {xrpScenes.map((scene, index) => (
        <Series.Sequence
          key={scene.id}
          durationInFrames={scene.durationInFrames}
          premountFor={FPS}
        >
          <SceneCard
            scene={scene}
            format={format}
            sceneNumber={index + 1}
          />
          {withVoiceover ? (
            <Audio src={staticFile(voiceoverPath(scene.id))} />
          ) : null}
        </Series.Sequence>
      ))}
    </Series>
  </AbsoluteFill>
);
