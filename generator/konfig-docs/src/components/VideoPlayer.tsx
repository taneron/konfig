import React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

export function VideoPlayer(props: ReactPlayerProps) {
  const config: ReactPlayerProps["config"] =
    typeof props.url === "string"
      ? {
          file: {
            tracks: [
              {
                kind: "captions",
                src: props.url.replace("mov", "vtt"),
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
      width="100%"
      height="100%"
      controls
      {...props}
      config={config}
    />
  );
}
