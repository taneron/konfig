import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Seel",
    "numberOfMethods": 29,
    "categories": [
      "insurance",
      "commerce_protection",
      "fintech",
      "risk_free_shopping_experience"
    ],
    "index": "seel/typescript",
    "language": "TypeScript",
    "link": "/sdk/seel/typescript/",
    "developerDocumentation": "developer.seel.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seel/openapi.yaml"
  },
  {
    "name": "Seel",
    "numberOfMethods": 29,
    "categories": [
      "insurance",
      "commerce_protection",
      "fintech",
      "risk_free_shopping_experience"
    ],
    "index": "seel/python",
    "language": "Python",
    "link": "/sdk/seel/python/",
    "developerDocumentation": "developer.seel.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seel/openapi.yaml"
  },
  {
    "name": "Seel",
    "numberOfMethods": 29,
    "categories": [
      "insurance",
      "commerce_protection",
      "fintech",
      "risk_free_shopping_experience"
    ],
    "index": "seel/java",
    "language": "Java",
    "link": "/sdk/seel/java/",
    "developerDocumentation": "developer.seel.com/reference/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seel/openapi.yaml"
  }
];

export default function Seel() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Seel"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seel/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seel/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seel/favicon.png"
      sdks={sdks}
      homepage="seel.com"
      companyKebabCase="seel"
      categories={allCategories}
      metaDescription={`Seel is building a new category of insurance to help merchants offer risk-free shopping experience.`}
    />
  )
}