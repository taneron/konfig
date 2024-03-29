import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Finley",
    "numberOfMethods": 17,
    "categories": [
      "debt_capital_raise",
      "due_diligence",
      "compliance",
      "capital_providers_reporting"
    ],
    "index": "finley/typescript",
    "language": "TypeScript",
    "link": "/sdk/finley/typescript/",
    "developerDocumentation": "docs.finleycms.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/finley/openapi.yaml"
  },
  {
    "name": "Finley",
    "numberOfMethods": 17,
    "categories": [
      "debt_capital_raise",
      "due_diligence",
      "compliance",
      "capital_providers_reporting"
    ],
    "index": "finley/python",
    "language": "Python",
    "link": "/sdk/finley/python/",
    "developerDocumentation": "docs.finleycms.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/finley/openapi.yaml"
  },
  {
    "name": "Finley",
    "numberOfMethods": 17,
    "categories": [
      "debt_capital_raise",
      "due_diligence",
      "compliance",
      "capital_providers_reporting"
    ],
    "index": "finley/java",
    "language": "Java",
    "link": "/sdk/finley/java/",
    "developerDocumentation": "docs.finleycms.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/finley/openapi.yaml"
  }
];

export default function Finley() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Finley"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finley/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finley/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finley/favicon.png"
      sdks={sdks}
      homepage="finleycms.com"
      companyKebabCase="finley"
      categories={allCategories}
      metaDescription={`Finley's software simplifies debt capital raise and management for businesses. High-growth startups like Ramp, Even, and Arc rely on Finley to manage over $2 billion in debt capital. By automating due diligence, ensuring compliance, and streamlining ongoing reporting with capital providers, Finley helps ensure that companies always have access to funding when they need it. Finley's investors include Y Combinator, Bain Capital Ventures, Haystack, Nine Four Ventures, and TwentyTwo VC.`}
    />
  )
}