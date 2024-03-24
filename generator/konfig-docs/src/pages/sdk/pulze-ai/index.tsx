import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Pulze.ai",
    "numberOfMethods": 13,
    "categories": [
      "ai",
      "developer_tools",
      "llm"
    ],
    "index": "pulze-ai/typescript",
    "language": "TypeScript",
    "link": "/sdk/pulze-ai/typescript/",
    "developerDocumentation": "docs.pulze.ai/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pulze-ai/openapi.yaml"
  },
  {
    "name": "Pulze.ai",
    "numberOfMethods": 13,
    "categories": [
      "ai",
      "developer_tools",
      "llm"
    ],
    "index": "pulze-ai/python",
    "language": "Python",
    "link": "/sdk/pulze-ai/python/",
    "developerDocumentation": "docs.pulze.ai/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pulze-ai/openapi.yaml"
  },
  {
    "name": "Pulze.ai",
    "numberOfMethods": 13,
    "categories": [
      "ai",
      "developer_tools",
      "llm"
    ],
    "index": "pulze-ai/java",
    "language": "Java",
    "link": "/sdk/pulze-ai/java/",
    "developerDocumentation": "docs.pulze.ai/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pulze-ai/openapi.yaml"
  }
];

export default function PulzeAi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Pulze.ai"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pulze-ai/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pulze-ai/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pulze-ai/favicon.png"
      sdks={sdks}
      homepage="www.pulze.ai/"
      companyKebabCase="pulze-ai"
      categories={allCategories}
      metaDescription={`At Pulze it's our mission to supercharge today's workforce with AI to maximize the world's prosperity. We are doing so by enabling companies of any size to securely leverage Large Language Models (LLM) and easily build AI features into their apps. Our enterprise platform has access to all best in class LLMs and can route user requests to the most relevant model to get the highest quality response at the best price thanks to our smart meta model. End users can leverage pre-built applications, such as our Marketing AI product, or build custom apps on top of the Pulze Platform.

We are a VC Funded, early stage startup based in San Francisco.`}
    />
  )
}