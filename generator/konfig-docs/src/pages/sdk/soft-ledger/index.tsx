import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "SoftLedger",
    "numberOfMethods": 373,
    "categories": [
      "finance",
      "cloud",
      "accounting",
      "financial_services"
    ],
    "index": "soft-ledger/typescript",
    "language": "TypeScript",
    "link": "/sdk/soft-ledger/typescript/",
    "developerDocumentation": "api-docs.softledger.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/softledger/openapi.yaml"
  },
  {
    "name": "SoftLedger",
    "numberOfMethods": 373,
    "categories": [
      "finance",
      "cloud",
      "accounting",
      "financial_services"
    ],
    "index": "soft-ledger/python",
    "language": "Python",
    "link": "/sdk/soft-ledger/python/",
    "developerDocumentation": "api-docs.softledger.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/softledger/openapi.yaml"
  },
  {
    "name": "SoftLedger",
    "numberOfMethods": 373,
    "categories": [
      "finance",
      "cloud",
      "accounting",
      "financial_services"
    ],
    "index": "soft-ledger/java",
    "language": "Java",
    "link": "/sdk/soft-ledger/java/",
    "developerDocumentation": "api-docs.softledger.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/softledger/openapi.yaml"
  }
];

export default function SoftLedger() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="SoftLedger"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/softledger/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/softledger/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/softledger/favicon.png"
      sdks={sdks}
      homepage="softledger.com/"
      companyKebabCase="soft-ledger"
      categories={allCategories}
      metaDescription={`SoftLedger provides real-time visibility to critical financial data.

Our cloud-native accounting software and APIs help organizations manage their distributed operations and assets.  This includes a full-featured general ledger, accounts receivable, accounts payable, inventory management, crypto asset management, and more.`}
    />
  )
}