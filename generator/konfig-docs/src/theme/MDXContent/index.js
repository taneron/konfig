import React from "react";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "@theme/MDXComponents";
import { Mermaid } from "@jakxz/mdx-mermaid/Mermaid";

export default function MDXContent({ children }) {
  return (
    <MDXProvider components={{ ...MDXComponents, Mermaid }}>
      {children}
    </MDXProvider>
  );
}
