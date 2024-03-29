import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Payments",
    "numberOfMethods": 46,
    "categories": [
      "finance",
      "banking"
    ],
    "index": "payments/typescript",
    "language": "TypeScript",
    "link": "/sdk/mambu/payments/typescript/",
    "developerDocumentation": "api.mambu.com/payments-api/#welcome",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mambu/payments/openapi.yaml"
  },
  {
    "name": "Payments",
    "numberOfMethods": 46,
    "categories": [
      "finance",
      "banking"
    ],
    "index": "payments/python",
    "language": "Python",
    "link": "/sdk/mambu/payments/python/",
    "developerDocumentation": "api.mambu.com/payments-api/#welcome",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mambu/payments/openapi.yaml"
  },
  {
    "name": "Payments",
    "numberOfMethods": 46,
    "categories": [
      "finance",
      "banking"
    ],
    "index": "payments/java",
    "language": "Java",
    "link": "/sdk/mambu/payments/java/",
    "developerDocumentation": "api.mambu.com/payments-api/#welcome",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/mambu/payments/openapi.yaml"
  }
];

export default function Mambu() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Mambu"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mambu/payments/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mambu/payments/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/mambu/payments/favicon.png"
      sdks={sdks}
      homepage="mambu.com"
      companyKebabCase="mambu"
      categories={allCategories}
      metaDescription={`Heard of composable banking? The concept originated here at Mambu. We've been champions of composable for over a decade.

Mambu is the only true SaaS cloud core banking platform. Our unique and sustainable composable approach means that independent engines, systems and connectors can be assembled in any configuration to meet business requirements and the ever-changing demands of your customers. 260+ banks, lenders, fintechs, and even retailers in 65 countries turn to us to help them build modern digital financial products faster, securely and cost-effectively.

Ready to become a Mambuvian? Check our Jobs tab.`}
    />
  )
}