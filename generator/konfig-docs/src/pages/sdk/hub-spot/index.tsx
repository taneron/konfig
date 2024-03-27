import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "CRM",
    "numberOfMethods": 173,
    "categories": [
      "crm"
    ],
    "index": "crm/typescript",
    "language": "TypeScript",
    "link": "/sdk/hub-spot/crm/typescript/",
    "developerDocumentation": "developers.hubspot.com/docs/api/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hubspot/crm/openapi.yaml"
  },
  {
    "name": "CRM",
    "numberOfMethods": 173,
    "categories": [
      "crm"
    ],
    "index": "crm/python",
    "language": "Python",
    "link": "/sdk/hub-spot/crm/python/",
    "developerDocumentation": "developers.hubspot.com/docs/api/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hubspot/crm/openapi.yaml"
  },
  {
    "name": "CRM",
    "numberOfMethods": 173,
    "categories": [
      "crm"
    ],
    "index": "crm/java",
    "language": "Java",
    "link": "/sdk/hub-spot/crm/java/",
    "developerDocumentation": "developers.hubspot.com/docs/api/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hubspot/crm/openapi.yaml"
  }
];

export default function HubSpot() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="HubSpot"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hubspot/crm/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hubspot/crm/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hubspot/crm/favicon.png"
      sdks={sdks}
      homepage="hubspot.com"
      companyKebabCase="hub-spot"
      categories={allCategories}
      metaDescription={`HubSpot is a Massachusetts-based CRM platform that provides solutions such as marketing automation, meeting scheduling and data quality automation for businesses.`}
    />
  )
}