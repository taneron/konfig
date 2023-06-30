import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export function Figure({ src, caption }) {
  return (
    <figure>
      <img src={useBaseUrl(src)} alt={caption} />
      <b>
        <figcaption style={{ textAlign: "center" }}>{`${caption}`}</figcaption>
      </b>
    </figure>
  );
}
