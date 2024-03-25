import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Unit",
    "numberOfMethods": 123,
    "categories": [
      "financial_services",
      "fintech",
      "payments",
      "financial_technology",
      "money_movement",
      "banking",
      "fintech_infrastructure",
      "banking_as_a_service",
      "card_issuing",
      "lending",
      "compliance"
    ],
    "index": "unit/typescript",
    "language": "TypeScript",
    "link": "/sdk/unit/typescript/",
    "developerDocumentation": "www.unit.co/docs/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unit/openapi.yaml"
  },
  {
    "name": "Unit",
    "numberOfMethods": 123,
    "categories": [
      "financial_services",
      "fintech",
      "payments",
      "financial_technology",
      "money_movement",
      "banking",
      "fintech_infrastructure",
      "banking_as_a_service",
      "card_issuing",
      "lending",
      "compliance"
    ],
    "index": "unit/python",
    "language": "Python",
    "link": "/sdk/unit/python/",
    "developerDocumentation": "www.unit.co/docs/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unit/openapi.yaml"
  },
  {
    "name": "Unit",
    "numberOfMethods": 123,
    "categories": [
      "financial_services",
      "fintech",
      "payments",
      "financial_technology",
      "money_movement",
      "banking",
      "fintech_infrastructure",
      "banking_as_a_service",
      "card_issuing",
      "lending",
      "compliance"
    ],
    "index": "unit/java",
    "language": "Java",
    "link": "/sdk/unit/java/",
    "developerDocumentation": "www.unit.co/docs/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/unit/openapi.yaml"
  }
];

export default function Unit() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Unit"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unit/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unit/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/unit/favicon.png"
      sdks={sdks}
      homepage="unit.co"
      companyKebabCase="unit"
      categories={allCategories}
      metaDescription={`Unit is the leading financial infrastructure platform that helps tech companies, store, move, and lend money. Unlock new revenue streams and delight your customers.`}
    />
  )
}