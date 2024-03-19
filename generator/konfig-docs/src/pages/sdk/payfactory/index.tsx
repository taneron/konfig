import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Payfactory",
    "numberOfMethods": 15,
    "categories": [
      "developer_tools",
      "payments",
      "finance",
      "financial_services",
      "embedded_payments"
    ],
    "index": "payfactory/typescript",
    "language": "TypeScript",
    "link": "/sdk/payfactory/typescript/",
    "developerDocumentation": "payfactory.readme.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/payfactory/openapi.yaml"
  },
  {
    "name": "Payfactory",
    "numberOfMethods": 15,
    "categories": [
      "developer_tools",
      "payments",
      "finance",
      "financial_services",
      "embedded_payments"
    ],
    "index": "payfactory/python",
    "language": "Python",
    "link": "/sdk/payfactory/python/",
    "developerDocumentation": "payfactory.readme.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/payfactory/openapi.yaml"
  },
  {
    "name": "Payfactory",
    "numberOfMethods": 15,
    "categories": [
      "developer_tools",
      "payments",
      "finance",
      "financial_services",
      "embedded_payments"
    ],
    "index": "payfactory/java",
    "language": "Java",
    "link": "/sdk/payfactory/java/",
    "developerDocumentation": "payfactory.readme.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/payfactory/openapi.yaml"
  }
];

export default function Payfactory() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Payfactory"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfactory/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfactory/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfactory/favicon.png"
      sdks={sdks}
      homepage="payfactory.io/"
      companyKebabCase="payfactory"
      categories={allCategories}
      metaDescription={`Payfactory specializes in embedded payment facilitation (payfac) services for ISVs and SaaS companies. Our gateway-friendly platform integrates with software systems to provide seamless payment facilitation with little to no development required, allowing our partners to minimize integration costs and quickly gain a new revenue stream. Founded by payment industry veterans, we believe that integrated processing should be simple, frictionless and fast – while also maintaining the highest level of security, customer service and human support.`}
    />
  )
}