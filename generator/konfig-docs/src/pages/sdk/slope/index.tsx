import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Slope",
    "numberOfMethods": 28,
    "categories": [
      "payments",
      "fintech",
      "b2b_payments"
    ],
    "index": "slope/typescript",
    "language": "TypeScript",
    "link": "/sdk/slope/typescript/",
    "developerDocumentation": "developers.slope.so/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/slope/openapi.yaml"
  },
  {
    "name": "Slope",
    "numberOfMethods": 28,
    "categories": [
      "payments",
      "fintech",
      "b2b_payments"
    ],
    "index": "slope/python",
    "language": "Python",
    "link": "/sdk/slope/python/",
    "developerDocumentation": "developers.slope.so/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/slope/openapi.yaml"
  },
  {
    "name": "Slope",
    "numberOfMethods": 28,
    "categories": [
      "payments",
      "fintech",
      "b2b_payments"
    ],
    "index": "slope/java",
    "language": "Java",
    "link": "/sdk/slope/java/",
    "developerDocumentation": "developers.slope.so/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/slope/openapi.yaml"
  }
];

export default function Slope() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Slope"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slope/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slope/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/slope/favicon.png"
      sdks={sdks}
      homepage="slopepay.com"
      companyKebabCase="slope"
      categories={allCategories}
      metaDescription={`The B2B payments platform.`}
    />
  )
}