import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "LinkCy",
    "numberOfMethods": 102,
    "categories": [
      "fintech",
      "banking",
      "financial_technology",
      "banking_as_a_service",
      "white_label_banking"
    ],
    "index": "link-cy/typescript",
    "language": "TypeScript",
    "link": "/sdk/link-cy/typescript/",
    "developerDocumentation": "docs.sandbox.linkcy.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/linkcy/openapi.yaml"
  },
  {
    "name": "LinkCy",
    "numberOfMethods": 102,
    "categories": [
      "fintech",
      "banking",
      "financial_technology",
      "banking_as_a_service",
      "white_label_banking"
    ],
    "index": "link-cy/python",
    "language": "Python",
    "link": "/sdk/link-cy/python/",
    "developerDocumentation": "docs.sandbox.linkcy.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/linkcy/openapi.yaml"
  },
  {
    "name": "LinkCy",
    "numberOfMethods": 102,
    "categories": [
      "fintech",
      "banking",
      "financial_technology",
      "banking_as_a_service",
      "white_label_banking"
    ],
    "index": "link-cy/java",
    "language": "Java",
    "link": "/sdk/link-cy/java/",
    "developerDocumentation": "docs.sandbox.linkcy.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/linkcy/openapi.yaml"
  }
];

export default function LinkCy() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="LinkCy"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/linkcy/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/linkcy/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/linkcy/favicon.png"
      sdks={sdks}
      homepage="linkcy.io"
      companyKebabCase="link-cy"
      categories={allCategories}
      metaDescription={`LinkCy is the White Label Banking solution (via App or API) for Global Market in Europe.

Its Plug And Play service enables all Companies to offer accounts (IBANS) and payment cards (Visa / Mastercard) to their users without any regulatory burden, in just a few minutes, compared to 9 to 12 months of technical and regulatory development with other Banking As A Service (BAAS) platforms.

LinkCy is a French fintech start-up incubated at Sation F with BNP Paribas & Plug And Play.`}
    />
  )
}