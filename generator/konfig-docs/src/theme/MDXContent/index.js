import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import { Mermaid } from "@jakxz/mdx-mermaid/Mermaid";
import { Tooltip } from "@site/src/components/Tooltip";

export default function MDXContent({ children }) {
  return (
    <MDXProvider components={{ ...MDXComponents, Mermaid, Tooltip }}>
      {children}
    </MDXProvider>
  );
}
