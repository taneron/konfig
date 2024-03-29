import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "TheirStack",
    "numberOfMethods": 25,
    "categories": [
      "sales",
      "lead_generation"
    ],
    "index": "their-stack/typescript",
    "language": "TypeScript",
    "link": "/sdk/their-stack/typescript/",
    "developerDocumentation": "api.theirstack.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/theirstack/openapi.yaml"
  },
  {
    "name": "TheirStack",
    "numberOfMethods": 25,
    "categories": [
      "sales",
      "lead_generation"
    ],
    "index": "their-stack/python",
    "language": "Python",
    "link": "/sdk/their-stack/python/",
    "developerDocumentation": "api.theirstack.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/theirstack/openapi.yaml"
  },
  {
    "name": "TheirStack",
    "numberOfMethods": 25,
    "categories": [
      "sales",
      "lead_generation"
    ],
    "index": "their-stack/java",
    "language": "Java",
    "link": "/sdk/their-stack/java/",
    "developerDocumentation": "api.theirstack.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/theirstack/openapi.yaml"
  }
];

export default function TheirStack() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="TheirStack"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/theirstack/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/theirstack/logo.ico"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/theirstack/favicon.png"
      sdks={sdks}
      homepage="theirstack.com"
      companyKebabCase="their-stack"
      categories={allCategories}
      metaDescription={`TheirStack is a sales tool designed to discover purchase intent signals through job postings. It helps SaaS companies, recruiting agencies and consulting firms find their next customer by analyzing 40 million job listings across 100 countries.

It features instant alerts on new openings, identifies companies based on technology use, and pinpoints those with specific software needs.

Primarily used by sales and marketing teams, it facilitates lead generation and enrichment, targeted marketing, and offers data-driven insights while significantly reducing research time.`}
    />
  )
}