import React from "react";
import ReactPlayer from "react-player";

export function VideoPlayer(props) {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "50%",
      }}
    >
      <ReactPlayer
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        width="100%"
        height="100%"
        controls
        {...props}
      />
      ;
    </div>
  );
}
