import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { InlineWidget } from "react-calendly";

export default function Index() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Schedule Demo | ${siteConfig.title}`}
      description="Learn more about Konfig through a live Demo"
    >
      <div style={{ height: "700px" }}>
        <InlineWidget
          styles={{ height: "100%" }}
          url="https://calendly.com/dylan-konfig/meet"
        />
      </div>
    </Layout>
  );
}
