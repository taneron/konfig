import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "InducedAI",
    "numberOfMethods": 6,
    "categories": [
      "ai",
      "developer_tools",
      "browser_automation",
      "browser_agent"
    ],
    "index": "induced-ai/typescript",
    "language": "TypeScript",
    "link": "/sdk/induced-ai/typescript/",
    "developerDocumentation": "docs.induced.ai/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/inducedai/openapi.yaml"
  },
  {
    "name": "InducedAI",
    "numberOfMethods": 6,
    "categories": [
      "ai",
      "developer_tools",
      "browser_automation",
      "browser_agent"
    ],
    "index": "induced-ai/python",
    "language": "Python",
    "link": "/sdk/induced-ai/python/",
    "developerDocumentation": "docs.induced.ai/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/inducedai/openapi.yaml"
  },
  {
    "name": "InducedAI",
    "numberOfMethods": 6,
    "categories": [
      "ai",
      "developer_tools",
      "browser_automation",
      "browser_agent"
    ],
    "index": "induced-ai/java",
    "language": "Java",
    "link": "/sdk/induced-ai/java/",
    "developerDocumentation": "docs.induced.ai/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/inducedai/openapi.yaml"
  }
];

export default function InducedAi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="InducedAI"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inducedai/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inducedai/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inducedai/favicon.png"
      sdks={sdks}
      homepage="induced.ai"
      companyKebabCase="induced-ai"
      categories={allCategories}
      metaDescription={`Building the next evolution of actionable AI.`}
    />
  )
}