import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Beam",
    "numberOfMethods": 33,
    "categories": [
      "finance",
      "financial_services",
      "risk_management",
      "data_management",
      "credit_decisions",
      "financial_data"
    ],
    "index": "beam/typescript",
    "language": "TypeScript",
    "link": "/sdk/beam/typescript/",
    "developerDocumentation": "docs.beamlend.com/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beam/openapi.yaml"
  },
  {
    "name": "Beam",
    "numberOfMethods": 33,
    "categories": [
      "finance",
      "financial_services",
      "risk_management",
      "data_management",
      "credit_decisions",
      "financial_data"
    ],
    "index": "beam/python",
    "language": "Python",
    "link": "/sdk/beam/python/",
    "developerDocumentation": "docs.beamlend.com/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beam/openapi.yaml"
  },
  {
    "name": "Beam",
    "numberOfMethods": 33,
    "categories": [
      "finance",
      "financial_services",
      "risk_management",
      "data_management",
      "credit_decisions",
      "financial_data"
    ],
    "index": "beam/java",
    "language": "Java",
    "link": "/sdk/beam/java/",
    "developerDocumentation": "docs.beamlend.com/api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beam/openapi.yaml"
  }
];

export default function Beam() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Beam"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beam/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beam/logo.jpg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beam/favicon.png"
      sdks={sdks}
      homepage="beamlend.com/"
      companyKebabCase="beam"
      categories={allCategories}
      metaDescription={`Beam is the intelligent way to manage risk with laser precision in real time.

Beam's state-of-the-art software solution sources traditional and alternative data to give you a real-time affordability analysis of your customer and makes manual analysis, fragmented data sources, high costs and slow processes a thing of the past so that you and your team get better data with sharper insight.

Beam makes it easy and seamless to access multiple data sources like bank statements from multiple accounts, bureau data and alternative data for thin-file customers, giving you the most up-to-date and precise view of your customer's financial position so that your organisation can make accelerated credit decisions. 

Our completely digital customer onboarding process allows for near-instant credit approval.

Beam's API-first solution reduces credit decision-making time from days to seconds while helping you forecast your customer's income and expenses instantly. Beam Console's audit-ready reporting dashboard lets your admin, risk and underwriting teams easily and efficiently manage your customer data from one place.`}
    />
  )
}