import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Vegapay",
    "numberOfMethods": 48,
    "categories": [
      "fintech",
      "banking",
      "payments",
      "financial_services",
      "global_banking"
    ],
    "index": "vegapay/typescript",
    "language": "TypeScript",
    "link": "/sdk/vegapay/typescript/",
    "developerDocumentation": "www.vegapay.tech/docs/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vegapay/openapi.yaml"
  },
  {
    "name": "Vegapay",
    "numberOfMethods": 48,
    "categories": [
      "fintech",
      "banking",
      "payments",
      "financial_services",
      "global_banking"
    ],
    "index": "vegapay/python",
    "language": "Python",
    "link": "/sdk/vegapay/python/",
    "developerDocumentation": "www.vegapay.tech/docs/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vegapay/openapi.yaml"
  },
  {
    "name": "Vegapay",
    "numberOfMethods": 48,
    "categories": [
      "fintech",
      "banking",
      "payments",
      "financial_services",
      "global_banking"
    ],
    "index": "vegapay/java",
    "language": "Java",
    "link": "/sdk/vegapay/java/",
    "developerDocumentation": "www.vegapay.tech/docs/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vegapay/openapi.yaml"
  }
];

export default function Vegapay() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Vegapay"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vegapay/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vegapay/logo.webp"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vegapay/favicon.png"
      sdks={sdks}
      homepage="www.vegapay.tech/"
      companyKebabCase="vegapay"
      categories={allCategories}
      metaDescription={`Vegapay is creating the credit card stack for regulated entities across globe`}
    />
  )
}