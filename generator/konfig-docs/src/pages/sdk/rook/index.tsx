import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Rook",
    "numberOfMethods": 20,
    "categories": [
      "wearables",
      "health_data",
      "actionable_insights",
      "biomarker"
    ],
    "index": "rook/typescript",
    "language": "TypeScript",
    "link": "/sdk/rook/typescript/",
    "developerDocumentation": "docs.tryrook.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rook/openapi.yaml"
  },
  {
    "name": "Rook",
    "numberOfMethods": 20,
    "categories": [
      "wearables",
      "health_data",
      "actionable_insights",
      "biomarker"
    ],
    "index": "rook/python",
    "language": "Python",
    "link": "/sdk/rook/python/",
    "developerDocumentation": "docs.tryrook.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rook/openapi.yaml"
  },
  {
    "name": "Rook",
    "numberOfMethods": 20,
    "categories": [
      "wearables",
      "health_data",
      "actionable_insights",
      "biomarker"
    ],
    "index": "rook/java",
    "language": "Java",
    "link": "/sdk/rook/java/",
    "developerDocumentation": "docs.tryrook.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rook/openapi.yaml"
  }
];

export default function Rook() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Rook"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rook/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rook/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rook/favicon.png"
      sdks={sdks}
      homepage="www.tryrook.io/"
      companyKebabCase="rook"
      categories={allCategories}
      metaDescription={`Our API empowers companies with more meaningful health data. Easily process and embed data from hundreds of wearables with our single integration and gain access to deeper understanding and more actionable insights that allow you to make more informed decisions, find better solutions, and drive innovation.`}
    />
  )
}