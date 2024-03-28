import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Vantage",
    "numberOfMethods": 62,
    "categories": [
      "cloud",
      "cloud_cost_optimization",
      "cloud_cost_observability",
      "cloud_costs"
    ],
    "index": "vantage/typescript",
    "language": "TypeScript",
    "link": "/sdk/vantage/typescript/",
    "developerDocumentation": "vantage.readme.io/reference/general",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vantage/openapi.yaml"
  },
  {
    "name": "Vantage",
    "numberOfMethods": 62,
    "categories": [
      "cloud",
      "cloud_cost_optimization",
      "cloud_cost_observability",
      "cloud_costs"
    ],
    "index": "vantage/python",
    "language": "Python",
    "link": "/sdk/vantage/python/",
    "developerDocumentation": "vantage.readme.io/reference/general",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vantage/openapi.yaml"
  },
  {
    "name": "Vantage",
    "numberOfMethods": 62,
    "categories": [
      "cloud",
      "cloud_cost_optimization",
      "cloud_cost_observability",
      "cloud_costs"
    ],
    "index": "vantage/java",
    "language": "Java",
    "link": "/sdk/vantage/java/",
    "developerDocumentation": "vantage.readme.io/reference/general",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/vantage/openapi.yaml"
  }
];

export default function Vantage() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Vantage"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vantage/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vantage/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/vantage/favicon.png"
      sdks={sdks}
      homepage="vantage.sh"
      companyKebabCase="vantage"
      categories={allCategories}
      metaDescription={`Vantage is a cloud cost observability platform with more than a dozen native integrations, including AWS, Azure, GCP, Kubernetes, Datadog, Snowflake, Databricks and more. Thousands of organizations globally, ranging from startups to F500 companies, rely on Vantage to optimize billions of dollars in annualized infrastructure costs. Vantage was founded by former employees of AWS, Digital Ocean, and GitHub and is backed by top venture capital firms, Andreessen Horowitz and Scale Venture Partners.`}
    />
  )
}