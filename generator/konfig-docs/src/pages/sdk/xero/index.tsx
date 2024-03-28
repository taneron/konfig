import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Accounting",
    "numberOfMethods": 237,
    "categories": [
      "finance",
      "accounting"
    ],
    "index": "accounting/typescript",
    "language": "TypeScript",
    "link": "/sdk/xero/accounting/typescript/",
    "developerDocumentation": "developer.xero.com/documentation/api/accounting/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xero/accounting/openapi.yaml"
  },
  {
    "name": "Accounting",
    "numberOfMethods": 237,
    "categories": [
      "finance",
      "accounting"
    ],
    "index": "accounting/python",
    "language": "Python",
    "link": "/sdk/xero/accounting/python/",
    "developerDocumentation": "developer.xero.com/documentation/api/accounting/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xero/accounting/openapi.yaml"
  },
  {
    "name": "Accounting",
    "numberOfMethods": 237,
    "categories": [
      "finance",
      "accounting"
    ],
    "index": "accounting/java",
    "language": "Java",
    "link": "/sdk/xero/accounting/java/",
    "developerDocumentation": "developer.xero.com/documentation/api/accounting/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xero/accounting/openapi.yaml"
  }
];

export default function Xero() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Xero"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xero/accounting/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xero/accounting/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xero/accounting/favicon.png"
      sdks={sdks}
      homepage="xero.com"
      companyKebabCase="xero"
      categories={allCategories}
      metaDescription={`Xero is a global small business platform with 3.5 million subscribers which includes a core accounting solution, payroll, workforce management, expenses and projects. Xero also has an extensive ecosystem of connected apps and connections to banks and other financial institutions helping small businesses access a range of solutions from within Xero's open platform to help them run their business and manage their finances. For four consecutive years (2020-2023) Xero was included in the Bloomberg Gender-Equality Index. In 2021 and 2022, Xero was included in the Dow Jones Sustainability Index (DJSI), powered by the S&P Global Corporate Sustainability Assessment. Xero is a FIFA Women's Football partner.

Get support http://central.xero.com`}
    />
  )
}