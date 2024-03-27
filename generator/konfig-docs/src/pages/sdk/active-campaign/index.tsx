import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "ActiveCampaign",
    "numberOfMethods": 257,
    "categories": [
      "automation",
      "marketing",
      "crm",
      "email_marketing",
      "marketing_automation"
    ],
    "index": "active-campaign/typescript",
    "language": "TypeScript",
    "link": "/sdk/active-campaign/typescript/",
    "developerDocumentation": "developers.activecampaign.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/activecampaign/openapi.yaml"
  },
  {
    "name": "ActiveCampaign",
    "numberOfMethods": 257,
    "categories": [
      "automation",
      "marketing",
      "crm",
      "email_marketing",
      "marketing_automation"
    ],
    "index": "active-campaign/python",
    "language": "Python",
    "link": "/sdk/active-campaign/python/",
    "developerDocumentation": "developers.activecampaign.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/activecampaign/openapi.yaml"
  },
  {
    "name": "ActiveCampaign",
    "numberOfMethods": 257,
    "categories": [
      "automation",
      "marketing",
      "crm",
      "email_marketing",
      "marketing_automation"
    ],
    "index": "active-campaign/java",
    "language": "Java",
    "link": "/sdk/active-campaign/java/",
    "developerDocumentation": "developers.activecampaign.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/activecampaign/openapi.yaml"
  }
];

export default function ActiveCampaign() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ActiveCampaign"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/activecampaign/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/activecampaign/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/activecampaign/favicon.png"
      sdks={sdks}
      homepage="activecampaign.com"
      companyKebabCase="active-campaign"
      categories={allCategories}
      metaDescription={`We help small teams power big businesses with the must-have platform for intelligent marketing automation. 🚀

Customers from over 170 countries depend on our mix of pre-built automations and integrations (including Facebook, Google, WordPress, Salesforce, Shopify, and Square) to power personalized marketing, transactional emails, and one-to-one CRM interactions throughout the customer lifecycle.`}
    />
  )
}