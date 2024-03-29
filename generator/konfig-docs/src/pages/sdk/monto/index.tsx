import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Monto",
    "numberOfMethods": 37,
    "categories": [
      "fintech",
      "financial_data",
      "lending",
      "credit_decisions"
    ],
    "index": "monto/typescript",
    "language": "TypeScript",
    "link": "/sdk/monto/typescript/",
    "developerDocumentation": "monto.redoc.ly/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/monto/openapi.yaml"
  },
  {
    "name": "Monto",
    "numberOfMethods": 37,
    "categories": [
      "fintech",
      "financial_data",
      "lending",
      "credit_decisions"
    ],
    "index": "monto/python",
    "language": "Python",
    "link": "/sdk/monto/python/",
    "developerDocumentation": "monto.redoc.ly/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/monto/openapi.yaml"
  },
  {
    "name": "Monto",
    "numberOfMethods": 37,
    "categories": [
      "fintech",
      "financial_data",
      "lending",
      "credit_decisions"
    ],
    "index": "monto/java",
    "language": "Java",
    "link": "/sdk/monto/java/",
    "developerDocumentation": "monto.redoc.ly/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/monto/openapi.yaml"
  }
];

export default function Monto() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Monto"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/monto/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/monto/logo.webp"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/monto/favicon.png"
      sdks={sdks}
      homepage="monto.ai"
      companyKebabCase="monto"
      categories={allCategories}
      metaDescription={`Monto is a Stockholm-based fintech that helps Nordic SME lenders harness the power of real-time data. We combine smart tech and deep industry know-how to help fintechs, banks, lending brokers and BaaS platforms make better credit decisions, streamline processes and improve the customer experience.

With Monto, lenders no longer have to rely on manual, dated or mediocre data sources in their credit reviews. Our API unlocks instant access to up-to-date income statements, ledger quality, financial ratios, and more, fetched from leading accounting software providers in Sweden. We also provide a visual interface that allows credit teams to gain a comprehensive financial understanding of their connected borrowers.

Our platform is tech agnostic and available for a free trial.`}
    />
  )
}