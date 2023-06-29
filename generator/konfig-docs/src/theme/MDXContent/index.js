import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import { Mermaid } from "@jakxz/mdx-mermaid/Mermaid";
import { Tooltip } from "@site/src/components/Tooltip";
import Admonition from "@theme/Admonition";
import { VideoPlayer } from "@site/src/components/VideoPlayer";

export default function MDXContent({ children }) {
  return (
    <MDXProvider
      components={{
        ...MDXComponents,
        Mermaid,
        Tooltip,
        Admonition,
        VideoPlayer,
      }}
    >
      {children}
    </MDXProvider>
  );
}
