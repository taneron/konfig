import React, { LegacyRef, forwardRef, useRef } from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

export const VideoPlayer = forwardRef(
  (
    { autoplay, ...props }: ReactPlayerProps & { autoplay: boolean },
    ref: LegacyRef<ReactPlayer>
  ) => {
    const config: ReactPlayerProps["config"] =
      typeof props.url === "string"
        ? {
            file: {
              tracks: [
                {
                  kind: "captions",
                  src: `${props.url.split(".")[0]}.vtt`,
                  srcLang: "en",
                  label: "Captions",
                  default: true,
                },
              ],
            },
          }
        : {};
    return (
      <ReactPlayer
        ref={ref}
        playing={props.playing || autoplay}
        muted={props.muted || autoplay}
        loop={props.loop || autoplay}
        width="100%"
        height="100%"
        controls
        {...props}
        config={config}
      />
    );
  }
);
