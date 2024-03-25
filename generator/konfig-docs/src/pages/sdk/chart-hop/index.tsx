import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "ChartHop",
    "numberOfMethods": 509,
    "categories": [
      "hr",
      "analytics",
      "hr_metrics",
      "hr_analytics",
      "hr_reporting",
      "human_resources",
      "workforce_planning",
      "hr_dashboard",
      "workforce_insights",
      "people_analytics",
      "workforce_intelligence",
      "workforce_analytics",
      "human_capital_management",
      "workforce_solutions",
      "hris"
    ],
    "index": "chart-hop/typescript",
    "language": "TypeScript",
    "link": "/sdk/chart-hop/typescript/",
    "developerDocumentation": "docs.charthop.com/developer-basics",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/charthop/openapi.yaml"
  },
  {
    "name": "ChartHop",
    "numberOfMethods": 509,
    "categories": [
      "hr",
      "analytics",
      "hr_metrics",
      "hr_analytics",
      "hr_reporting",
      "human_resources",
      "workforce_planning",
      "hr_dashboard",
      "workforce_insights",
      "people_analytics",
      "workforce_intelligence",
      "workforce_analytics",
      "human_capital_management",
      "workforce_solutions",
      "hris"
    ],
    "index": "chart-hop/python",
    "language": "Python",
    "link": "/sdk/chart-hop/python/",
    "developerDocumentation": "docs.charthop.com/developer-basics",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/charthop/openapi.yaml"
  },
  {
    "name": "ChartHop",
    "numberOfMethods": 509,
    "categories": [
      "hr",
      "analytics",
      "hr_metrics",
      "hr_analytics",
      "hr_reporting",
      "human_resources",
      "workforce_planning",
      "hr_dashboard",
      "workforce_insights",
      "people_analytics",
      "workforce_intelligence",
      "workforce_analytics",
      "human_capital_management",
      "workforce_solutions",
      "hris"
    ],
    "index": "chart-hop/java",
    "language": "Java",
    "link": "/sdk/chart-hop/java/",
    "developerDocumentation": "docs.charthop.com/developer-basics",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/charthop/openapi.yaml"
  }
];

export default function ChartHop() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ChartHop"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/charthop/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/charthop/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/charthop/favicon.png"
      sdks={sdks}
      homepage="charthop.com"
      companyKebabCase="chart-hop"
      categories={allCategories}
      metaDescription={`ChartHop is a dynamic People Operations Platform that connects and visualizes all your people data to empower your organization through insights, alignment, and action.`}
    />
  )
}