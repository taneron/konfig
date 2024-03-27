import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Quivr",
    "numberOfMethods": 52,
    "categories": [
      "open_source",
      "data_pipeline",
      "rag",
      "llm",
      "conversational_ai",
      "second_brain"
    ],
    "index": "quivr/typescript",
    "language": "TypeScript",
    "link": "/sdk/quivr/typescript/",
    "developerDocumentation": "docs.quivr.app",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/quivr/openapi.yaml"
  },
  {
    "name": "Quivr",
    "numberOfMethods": 52,
    "categories": [
      "open_source",
      "data_pipeline",
      "rag",
      "llm",
      "conversational_ai",
      "second_brain"
    ],
    "index": "quivr/python",
    "language": "Python",
    "link": "/sdk/quivr/python/",
    "developerDocumentation": "docs.quivr.app",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/quivr/openapi.yaml"
  },
  {
    "name": "Quivr",
    "numberOfMethods": 52,
    "categories": [
      "open_source",
      "data_pipeline",
      "rag",
      "llm",
      "conversational_ai",
      "second_brain"
    ],
    "index": "quivr/java",
    "language": "Java",
    "link": "/sdk/quivr/java/",
    "developerDocumentation": "docs.quivr.app",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/quivr/openapi.yaml"
  }
];

export default function Quivr() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Quivr"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/quivr/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/quivr/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/quivr/favicon.jpg"
      sdks={sdks}
      homepage="quivr.app"
      companyKebabCase="quivr"
      categories={allCategories}
      metaDescription={`Open-source RAG Framework`}
    />
  )
}