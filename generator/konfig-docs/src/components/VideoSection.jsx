import React, { createContext, useRef } from "react";
import { VideoPlayer } from "./VideoPlayer";

export const VideoSectionContext = createContext();

export function VideoSection({ children }) {
  const childrenAsArray = React.Children.toArray(children);
  const index = childrenAsArray.findIndex(
    (child) => child.type === VideoPlayer
  );
  const ref = useRef(null);
  return (
    <>
      <VideoSectionContext.Provider value={ref}>
        {childrenAsArray.map((child, i) => {
          if (i === index) {
            return <VideoPlayer key={child.key} ref={ref} {...child.props} />;
          }
          return child;
        })}
      </VideoSectionContext.Provider>
    </>
  );
}
