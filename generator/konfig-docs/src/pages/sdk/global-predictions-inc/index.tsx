import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Global Predictions Inc",
    "numberOfMethods": 13,
    "categories": [
      "ai",
      "financial_services",
      "fintech",
      "financial_technology"
    ],
    "index": "global-predictions-inc/typescript",
    "language": "TypeScript",
    "link": "/sdk/global-predictions-inc/typescript/",
    "developerDocumentation": "portfoliopilot.com/static/external_api/documentation.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/global-predictions-inc/openapi.yaml"
  },
  {
    "name": "Global Predictions Inc",
    "numberOfMethods": 13,
    "categories": [
      "ai",
      "financial_services",
      "fintech",
      "financial_technology"
    ],
    "index": "global-predictions-inc/python",
    "language": "Python",
    "link": "/sdk/global-predictions-inc/python/",
    "developerDocumentation": "portfoliopilot.com/static/external_api/documentation.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/global-predictions-inc/openapi.yaml"
  },
  {
    "name": "Global Predictions Inc",
    "numberOfMethods": 13,
    "categories": [
      "ai",
      "financial_services",
      "fintech",
      "financial_technology"
    ],
    "index": "global-predictions-inc/java",
    "language": "Java",
    "link": "/sdk/global-predictions-inc/java/",
    "developerDocumentation": "portfoliopilot.com/static/external_api/documentation.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/global-predictions-inc/openapi.yaml"
  }
];

export default function GlobalPredictionsInc() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Global Predictions Inc"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/global-predictions-inc/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/global-predictions-inc/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/global-predictions-inc/favicon.jpg"
      sdks={sdks}
      homepage="www.globalpredictions.com/"
      companyKebabCase="global-predictions-inc"
      categories={allCategories}
      metaDescription={`Global Predictions is building an AI-powered WealthOS, a full-stack solution for financial advice and personalized recommendations built on top of our proprietary Economic Insights Engine. We power fintech solutions for millions of people through the GP API and customized insights. Our flagship product is PortfolioPilot for individuals, the world's best financial advisor, with over $6.2B assets on platform.

Please read our important disclosures: https://www.globalpredictions.com/disclosures`}
    />
  )
}