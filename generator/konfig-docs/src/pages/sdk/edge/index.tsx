import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Edge",
    "numberOfMethods": 41,
    "categories": [
      "online_payments",
      "financial_data_management"
    ],
    "index": "edge/typescript",
    "language": "TypeScript",
    "link": "/sdk/edge/typescript/",
    "developerDocumentation": "docs.tryedge.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/edge/openapi.yaml"
  },
  {
    "name": "Edge",
    "numberOfMethods": 41,
    "categories": [
      "online_payments",
      "financial_data_management"
    ],
    "index": "edge/python",
    "language": "Python",
    "link": "/sdk/edge/python/",
    "developerDocumentation": "docs.tryedge.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/edge/openapi.yaml"
  },
  {
    "name": "Edge",
    "numberOfMethods": 41,
    "categories": [
      "online_payments",
      "financial_data_management"
    ],
    "index": "edge/java",
    "language": "Java",
    "link": "/sdk/edge/java/",
    "developerDocumentation": "docs.tryedge.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/edge/openapi.yaml"
  }
];

export default function Edge() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Edge"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/edge/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/edge/logo.jpg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/edge/favicon.png"
      sdks={sdks}
      homepage="tryedge.io"
      companyKebabCase="edge"
      categories={allCategories}
      metaDescription={`We are building the gold standard in online payment infrastructure for merchants mis-labeled as high-risk.`}
    />
  )
}