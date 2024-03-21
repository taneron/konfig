import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Langfuse",
    "numberOfMethods": 21,
    "categories": [
      "llm",
      "machine_learning",
      "llmops"
    ],
    "index": "langfuse/typescript",
    "language": "TypeScript",
    "link": "/sdk/langfuse/typescript/",
    "developerDocumentation": "langfuse.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/langfuse/openapi.yaml"
  },
  {
    "name": "Langfuse",
    "numberOfMethods": 21,
    "categories": [
      "llm",
      "machine_learning",
      "llmops"
    ],
    "index": "langfuse/python",
    "language": "Python",
    "link": "/sdk/langfuse/python/",
    "developerDocumentation": "langfuse.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/langfuse/openapi.yaml"
  },
  {
    "name": "Langfuse",
    "numberOfMethods": 21,
    "categories": [
      "llm",
      "machine_learning",
      "llmops"
    ],
    "index": "langfuse/java",
    "language": "Java",
    "link": "/sdk/langfuse/java/",
    "developerDocumentation": "langfuse.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/langfuse/openapi.yaml"
  }
];

export default function Langfuse() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Langfuse"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/langfuse/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/langfuse/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/langfuse/favicon.png"
      sdks={sdks}
      homepage="langfuse.com"
      companyKebabCase="langfuse"
      categories={allCategories}
      metaDescription={`Open source LLM engineering platform. Traces, evals, prompt management and metrics to debug and improve your LLM application.`}
    />
  )
}