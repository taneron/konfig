import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Space Invoices",
    "numberOfMethods": 358,
    "categories": [
      "finance",
      "billing",
      "invoicing"
    ],
    "index": "space-invoices/typescript",
    "language": "TypeScript",
    "link": "/sdk/space-invoices/typescript/",
    "developerDocumentation": "spaceinvoices.com/docs/Introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/space-invoices/openapi.yaml"
  },
  {
    "name": "Space Invoices",
    "numberOfMethods": 358,
    "categories": [
      "finance",
      "billing",
      "invoicing"
    ],
    "index": "space-invoices/python",
    "language": "Python",
    "link": "/sdk/space-invoices/python/",
    "developerDocumentation": "spaceinvoices.com/docs/Introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/space-invoices/openapi.yaml"
  },
  {
    "name": "Space Invoices",
    "numberOfMethods": 358,
    "categories": [
      "finance",
      "billing",
      "invoicing"
    ],
    "index": "space-invoices/java",
    "language": "Java",
    "link": "/sdk/space-invoices/java/",
    "developerDocumentation": "spaceinvoices.com/docs/Introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/space-invoices/openapi.yaml"
  }
];

export default function SpaceInvoices() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Space Invoices"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/space-invoices/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/space-invoices/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/space-invoices/favicon.jpg"
      sdks={sdks}
      homepage="spaceinvoices.com"
      companyKebabCase="space-invoices"
      categories={allCategories}
      metaDescription={`Off-the-shelf invoicing API and UI, our customers dramatically reduce their time-to-market from weeks or months to just days while simultaneously providing a new revenue stream by offering their own invoice-as-a-service solution to their customers.`}
    />
  )
}