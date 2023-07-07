import React, { MutableRefObject, createContext, useRef } from "react";
import { VideoPlayer } from "./VideoPlayer";
import ReactPlayer from "react-player";
import { mapReactNode } from "../util/map-react-node";

export const VideoSectionContext =
  createContext<MutableRefObject<ReactPlayer> | null>(null);

/**
 * Iterates over children and passes ref to
 */
export function VideoSection({ children }) {
  const ref = useRef<ReactPlayer | null>(null);
  children = mapReactNode(children, (node) => {
    if (typeof node !== "object") return node;
    if (!("type" in node)) return node;
    if (node.type !== VideoPlayer) return node;
    return React.cloneElement(node, { ref: ref });
  });
  return (
    <>
      <VideoSectionContext.Provider value={ref}>
        {children}
      </VideoSectionContext.Provider>
    </>
  );
}
