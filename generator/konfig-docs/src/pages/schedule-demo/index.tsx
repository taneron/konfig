import React from "react";
import Layout from "@theme/Layout";
import { InlineWidget } from "react-calendly";

export default function ScheduleDemo() {
  return (
    <Layout
      title={`Schedule Demo`}
      description="Learn more about Konfig through a live Demo"
    >
      <div className="container pt-6">
        <h1>Schedule a Demo</h1>
        <p>
          In this demo we will:
          <ul>
            <li>learn about your API onboarding problems </li>
            <li>understand your development workflow</li>
            <li>
              give you an overview of what it looks like to operate with Konfig
            </li>
          </ul>
        </p>
      </div>
      <div style={{ height: "700px" }}>
        <InlineWidget
          styles={{ height: "100%" }}
          url="https://calendly.com/anhtuan-2/30min"
        />
      </div>
    </Layout>
  );
}
