import React from "react";
import createCollectionButton from "./create-collection-button.png";

export function PlusButton() {
  return (
    <span style={{ width: "1rem", height: "1rem", display: "inline-block" }}>
      <img src={createCollectionButton} />
    </span>
  );
}
