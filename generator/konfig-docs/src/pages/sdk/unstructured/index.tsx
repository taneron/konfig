import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Unstructured",
    "numberOfMethods": 1,
    "categories": [
      "document_management",
      "ai",
      "data_transformation",
      "nlp",
      "unstructured",
      "llm",
      "large_language_model",
      "artifical_intelegence",
      "rag",
      "machine_learning",
      "open_source",
      "data_pipeline",
      "pdf",
      "xml",
      "html"
    ],
    "index": "unstructured/typescript",
    "language": "TypeScript",
    "link": "/sdk/unstructured/typescript/",
    "developerDocumentation": "unstructured-io.github.io/unstructured/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unstructured/openapi.yaml"
  },
  {
    "name": "Unstructured",
    "numberOfMethods": 1,
    "categories": [
      "document_management",
      "ai",
      "data_transformation",
      "nlp",
      "unstructured",
      "llm",
      "large_language_model",
      "artifical_intelegence",
      "rag",
      "machine_learning",
      "open_source",
      "data_pipeline",
      "pdf",
      "xml",
      "html"
    ],
    "index": "unstructured/python",
    "language": "Python",
    "link": "/sdk/unstructured/python/",
    "developerDocumentation": "unstructured-io.github.io/unstructured/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unstructured/openapi.yaml"
  },
  {
    "name": "Unstructured",
    "numberOfMethods": 1,
    "categories": [
      "document_management",
      "ai",
      "data_transformation",
      "nlp",
      "unstructured",
      "llm",
      "large_language_model",
      "artifical_intelegence",
      "rag",
      "machine_learning",
      "open_source",
      "data_pipeline",
      "pdf",
      "xml",
      "html"
    ],
    "index": "unstructured/java",
    "language": "Java",
    "link": "/sdk/unstructured/java/",
    "developerDocumentation": "unstructured-io.github.io/unstructured/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unstructured/openapi.yaml"
  }
];

export default function Unstructured() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Unstructured"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unstructured/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unstructured/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unstructured/favicon.jpg"
      sdks={sdks}
      homepage="unstructured.io"
      companyKebabCase="unstructured"
      categories={allCategories}
      metaDescription={`At Unstructured, we're on a mission to give organizations access to all of their data. We know the world runs on documents—from research reports and memos, to quarterly filings and plans of action, documents are the unit of information that companies depend on. And yet, 80% of this information is trapped in inaccessible formats, and businesses have long struggled to unlock this data, leading to information silos, inefficient decision-making, and repetitive work. Until now.

Unstructured captures this unstructured data wherever it lives and transforms it into AI-friendly JSON files for companies who are eager to fold AI into their business.`}
    />
  )
}