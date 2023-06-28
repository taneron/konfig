import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import { Mermaid } from "@jakxz/mdx-mermaid/Mermaid";
import { Tooltip } from "@site/src/components/Tooltip";
import Admonition from "@theme/Admonition";

export default function MDXContent({ children }) {
  return (
    <MDXProvider
      components={{ ...MDXComponents, Mermaid, Tooltip, Admonition }}
    >
      {children}
    </MDXProvider>
  );
}
