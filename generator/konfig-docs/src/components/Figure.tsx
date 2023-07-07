import React, { PropsWithChildren } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export function Figure({
  src,
  caption,
  children,
}: PropsWithChildren<{ src?: string; caption: string }>) {
  return (
    <figure>
      {src && <img src={useBaseUrl(src)} alt={caption} />}
      {children}
      <b>
        <figcaption style={{ textAlign: "center" }}>{`${caption}`}</figcaption>
      </b>
    </figure>
  );
}
