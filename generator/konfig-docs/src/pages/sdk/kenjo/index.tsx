import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Kenjo",
    "numberOfMethods": 60,
    "categories": [
      "hr",
      "people_management_software",
      "culture",
      "people_management",
      "workforce_management",
      "deskless",
      "operations",
      "onboarding",
      "offboarding",
      "org_chart",
      "payroll",
      "time_off",
      "attendance"
    ],
    "index": "kenjo/typescript",
    "language": "TypeScript",
    "link": "/sdk/kenjo/typescript/",
    "developerDocumentation": "www.kenjo.io/legal/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kenjo/openapi.yaml"
  },
  {
    "name": "Kenjo",
    "numberOfMethods": 60,
    "categories": [
      "hr",
      "people_management_software",
      "culture",
      "people_management",
      "workforce_management",
      "deskless",
      "operations",
      "onboarding",
      "offboarding",
      "org_chart",
      "payroll",
      "time_off",
      "attendance"
    ],
    "index": "kenjo/python",
    "language": "Python",
    "link": "/sdk/kenjo/python/",
    "developerDocumentation": "www.kenjo.io/legal/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kenjo/openapi.yaml"
  },
  {
    "name": "Kenjo",
    "numberOfMethods": 60,
    "categories": [
      "hr",
      "people_management_software",
      "culture",
      "people_management",
      "workforce_management",
      "deskless",
      "operations",
      "onboarding",
      "offboarding",
      "org_chart",
      "payroll",
      "time_off",
      "attendance"
    ],
    "index": "kenjo/java",
    "language": "Java",
    "link": "/sdk/kenjo/java/",
    "developerDocumentation": "www.kenjo.io/legal/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/kenjo/openapi.yaml"
  }
];

export default function Kenjo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Kenjo"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kenjo/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kenjo/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/kenjo/favicon.png"
      sdks={sdks}
      homepage="kenjo.io"
      companyKebabCase="kenjo"
      categories={allCategories}
      metaDescription={`Kenjo is the all in one HR software for managing the workforce of companies in the industrial, service and commercial sectors, among others. 

On a single platform, companies can optimise the most important operations and processes in people management: attendance, shift planning and recruitment, among others, while remaining compliant. 

All of this with the aim of making HR a key part of the success of companies and the development of their workforce.`}
    />
  )
}