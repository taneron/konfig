// Create react component that creates responsive iframe
// for example
/**
<div style={{position: "relative", overflow: "hidden", width: "100%", paddingTop: "56.25%"}}>
<iframe style={{
      position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
}} src="https://www.youtube.com/embed/KFmO6ZJlCxw"
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay;
clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
allowfullscreen></iframe>
</div>
 */

import React from "react";

export function YouTube({ id }: { id: string }) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        paddingTop: "56.25%",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay;
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
