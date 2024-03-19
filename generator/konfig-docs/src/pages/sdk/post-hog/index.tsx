import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "PostHog",
    "numberOfMethods": 390,
    "categories": [
      "developer_tools",
      "analytics",
      "open_source",
      "product_analytics",
      "heatmaps",
      "session_recording",
      "feature_flags",
      "ab_testing",
      "data"
    ],
    "index": "post-hog/typescript",
    "language": "TypeScript",
    "link": "/sdk/post-hog/typescript/",
    "developerDocumentation": "posthog.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/posthog/openapi.yaml"
  },
  {
    "name": "PostHog",
    "numberOfMethods": 390,
    "categories": [
      "developer_tools",
      "analytics",
      "open_source",
      "product_analytics",
      "heatmaps",
      "session_recording",
      "feature_flags",
      "ab_testing",
      "data"
    ],
    "index": "post-hog/python",
    "language": "Python",
    "link": "/sdk/post-hog/python/",
    "developerDocumentation": "posthog.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/posthog/openapi.yaml"
  },
  {
    "name": "PostHog",
    "numberOfMethods": 390,
    "categories": [
      "developer_tools",
      "analytics",
      "open_source",
      "product_analytics",
      "heatmaps",
      "session_recording",
      "feature_flags",
      "ab_testing",
      "data"
    ],
    "index": "post-hog/java",
    "language": "Java",
    "link": "/sdk/post-hog/java/",
    "developerDocumentation": "posthog.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/posthog/openapi.yaml"
  }
];

export default function PostHog() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="PostHog"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/posthog/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/posthog/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/posthog/favicon.png"
      sdks={sdks}
      homepage="posthog.com"
      companyKebabCase="post-hog"
      categories={allCategories}
      metaDescription={`We're working to increase the number of successful products in the world.

Until now, tools for building products have been fragmented. Product analytics, heatmaps, session recording, feature flags, and A/B testing are all helpful, but no one wants to buy, send data to, and integrate multiple products.

PostHog offers these tools (and more) in an integrated, open source platform which can be hosted in either the US or EU. Both versions are SOC2 certified, GDPR-ready, and HIPAA compliant. 

We started PostHog during YCombinator's W20 cohort and had the most successful B2B software launch on Hacker News since 2012 - with a product that was just 4 weeks old.

With over 50k users, we're default alive, growing 97% through word of mouth, and we are in the top 0.01% most popular repos on GitHub.`}
    />
  )
}