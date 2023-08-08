import React, { Children, PropsWithChildren, useEffect } from "react";
import("swiper/element/bundle").then((swiper) => swiper.register());

function Wrapper({ children }: PropsWithChildren<{}>) {
  return (
    <swiper-container
      pagination
      pagination-clickable
      autoplay-delay="10000"
      navigation
    >
      {Children.toArray(children)
        .filter((c) => {
          return React.isValidElement(c) && c.type === Slide;
        })
        .map((c, idx) => {
          return (
            <swiper-slide lazy key={idx}>
              {c}
            </swiper-slide>
          );
        })}
    </swiper-container>
  );
}

function Slide({ children }: PropsWithChildren<{}>) {
  return children;
}

export const Carousel = {
  Wrapper,
  Slide,
};
