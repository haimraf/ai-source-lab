import {Composition} from "remotion";
import {FPS, TOTAL_FRAMES} from "./scenes";
import {XrpVideo, type XrpVideoProps} from "./XrpVideo";

export const RemotionRoot = () => (
  <>
    <Composition
      id="XrpVertical"
      component={XrpVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={1080}
      height={1920}
      defaultProps={
        {format: "vertical", withVoiceover: false} satisfies XrpVideoProps
      }
    />
    <Composition
      id="XrpLandscape"
      component={XrpVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={1920}
      height={1080}
      defaultProps={
        {format: "landscape", withVoiceover: false} satisfies XrpVideoProps
      }
    />
  </>
);
