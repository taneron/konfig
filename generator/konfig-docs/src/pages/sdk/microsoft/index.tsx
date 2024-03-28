import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Dynamics 365 Business Central",
    "numberOfMethods": 324,
    "categories": [
      "financial_services",
      "finance",
      "sales",
      "services",
      "operations"
    ],
    "index": "dynamics-365-business-central/typescript",
    "language": "TypeScript",
    "link": "/sdk/microsoft/dynamics-365-business-central/typescript/",
    "developerDocumentation": "learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/microsoft/dynamics-365-business-central/openapi.yaml"
  },
  {
    "name": "Dynamics 365 Business Central",
    "numberOfMethods": 324,
    "categories": [
      "financial_services",
      "finance",
      "sales",
      "services",
      "operations"
    ],
    "index": "dynamics-365-business-central/python",
    "language": "Python",
    "link": "/sdk/microsoft/dynamics-365-business-central/python/",
    "developerDocumentation": "learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/microsoft/dynamics-365-business-central/openapi.yaml"
  },
  {
    "name": "Dynamics 365 Business Central",
    "numberOfMethods": 324,
    "categories": [
      "financial_services",
      "finance",
      "sales",
      "services",
      "operations"
    ],
    "index": "dynamics-365-business-central/java",
    "language": "Java",
    "link": "/sdk/microsoft/dynamics-365-business-central/java/",
    "developerDocumentation": "learn.microsoft.com/en-us/dynamics365/business-central/dev-itpro/api-reference/v2.0/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/microsoft/dynamics-365-business-central/openapi.yaml"
  }
];

export default function Microsoft() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Microsoft"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/microsoft/dynamics-365-business-central/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/microsoft/dynamics-365-business-central/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/microsoft/dynamics-365-business-central/favicon.png"
      sdks={sdks}
      homepage="microsoft.com"
      companyKebabCase="microsoft"
      categories={allCategories}
      metaDescription={`Microsoft is a multinational technology company known for developing, manufacturing, licensing, supporting, and selling computer software, consumer electronics, and personal computers. It is one of the largest technology corporations in the world, with a wide range of products and services including the Windows operating system, Azure cloud services, Office productivity suite, Xbox gaming consoles, and Surface devices.`}
    />
  )
}