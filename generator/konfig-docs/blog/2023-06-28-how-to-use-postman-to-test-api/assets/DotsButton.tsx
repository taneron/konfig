import React from "react";
import dotsButton from "./dots.png";

export function DotsButton() {
  return (
    <span
      style={{ width: "1.2rem", height: "1.2rem", display: "inline-block" }}
    >
      <img src={dotsButton} />
    </span>
  );
}
