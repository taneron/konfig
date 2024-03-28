import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Boss Insights",
    "numberOfMethods": 299,
    "categories": [
      "financial_technology",
      "fintech",
      "financial_services",
      "data_management",
      "data_warehouse",
      "business_software",
      "loan_management",
      "data_aggregator"
    ],
    "index": "boss-insights/typescript",
    "language": "TypeScript",
    "link": "/sdk/boss-insights/typescript/",
    "developerDocumentation": "api.bossinsights.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/boss-insights/openapi.yaml"
  },
  {
    "name": "Boss Insights",
    "numberOfMethods": 299,
    "categories": [
      "financial_technology",
      "fintech",
      "financial_services",
      "data_management",
      "data_warehouse",
      "business_software",
      "loan_management",
      "data_aggregator"
    ],
    "index": "boss-insights/python",
    "language": "Python",
    "link": "/sdk/boss-insights/python/",
    "developerDocumentation": "api.bossinsights.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/boss-insights/openapi.yaml"
  },
  {
    "name": "Boss Insights",
    "numberOfMethods": 299,
    "categories": [
      "financial_technology",
      "fintech",
      "financial_services",
      "data_management",
      "data_warehouse",
      "business_software",
      "loan_management",
      "data_aggregator"
    ],
    "index": "boss-insights/java",
    "language": "Java",
    "link": "/sdk/boss-insights/java/",
    "developerDocumentation": "api.bossinsights.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/boss-insights/openapi.yaml"
  }
];

export default function BossInsights() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Boss Insights"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/boss-insights/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/boss-insights/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/boss-insights/favicon.png"
      sdks={sdks}
      homepage="bossinsights.com/"
      companyKebabCase="boss-insights"
      categories={allCategories}
      metaDescription={`Engage and grow your business clients - Qualify, engage and support your business clients with streamlined workflows and actionable insights based on standardized Open Finance datasets.


Boss Insights is an award-winning leader in open banking, linking fintechs, neobanks, and financial institutions to their business clients' financial accounting, banking, commerce/sales, KYB, payroll, tax/IRS data, and more. Boss Insights has earned media coverage by American Banker, Forbes, Bank Innovation, Open Finance World, and The Financial Brand. Boss Insights has won multiple awards including Money 20/20 Rise Up, CB Insights' Top 35 Future in Fintech, Corporate LiveWire's Lending Technologist Of The Year, Open Banking Excellence's SME Award, Women In Payments' Unicorn Challenge, Corporate Vision's Most Innovative Leader In Lending Technology & Canadian Lenders Association's Executive Leader In Lending.`}
    />
  )
}