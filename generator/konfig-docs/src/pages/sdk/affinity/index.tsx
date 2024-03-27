import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Affinity",
    "numberOfMethods": 20,
    "categories": [
      "crm",
      "venture_capital",
      "pipeline_management",
      "deal_management"
    ],
    "index": "affinity/typescript",
    "language": "TypeScript",
    "link": "/sdk/affinity/typescript/",
    "developerDocumentation": "developer.affinity.co/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/affinity/openapi.yaml"
  },
  {
    "name": "Affinity",
    "numberOfMethods": 20,
    "categories": [
      "crm",
      "venture_capital",
      "pipeline_management",
      "deal_management"
    ],
    "index": "affinity/python",
    "language": "Python",
    "link": "/sdk/affinity/python/",
    "developerDocumentation": "developer.affinity.co/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/affinity/openapi.yaml"
  },
  {
    "name": "Affinity",
    "numberOfMethods": 20,
    "categories": [
      "crm",
      "venture_capital",
      "pipeline_management",
      "deal_management"
    ],
    "index": "affinity/java",
    "language": "Java",
    "link": "/sdk/affinity/java/",
    "developerDocumentation": "developer.affinity.co/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/affinity/openapi.yaml"
  }
];

export default function Affinity() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Affinity"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/affinity/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/affinity/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/affinity/favicon.png"
      sdks={sdks}
      homepage="affinity.co"
      companyKebabCase="affinity"
      categories={allCategories}
      metaDescription={`Affinity's patented technology structures and analyzes millions of data points across emails, calendars, and third-party sources to offer users the tools they need to automatically manage their most valuable relationships, prioritize important connections, and discover untapped opportunities. Affinity uses artificial intelligence to analyze relationship strength and illuminate the best paths to warm introductions. The platform also offers a holistic view of users' networks in a centralized, automatically updated database without any manual upkeep. Founded in 2014, Affinity is headquartered in San Francisco, California. 

Affinity has raised $120M to date and is backed by leading investors including Menlo Ventures, Advance Venture Partners, 8VC and MassMutual Ventures.

It has over 2,700 customers in 70 countries, including venture capital firms such as Bain Capital Ventures and Kleiner Perkins, private equity firms such as SoftBank Group, investment bankers such as Woodside Capital Partners, financial services firms such as Fidelity Investments, real estate companies such as Tishman Speyer, insurers such as American Family Insurance and enterprises such as Nike, Qualcomm and Twilio.

Affinity has been named in Fortune Magazine's Best Workplaces, Inc. Magazine's Best Workplaces and editor's number one pick, the Data Breakthrough Award, BIG Innovation Award and others.`}
    />
  )
}