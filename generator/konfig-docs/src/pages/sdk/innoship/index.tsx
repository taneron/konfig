import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Innoship",
    "numberOfMethods": 51,
    "categories": [
      "shipping_api",
      "logistics_provider",
      "shipping_integration"
    ],
    "index": "innoship/typescript",
    "language": "TypeScript",
    "link": "/sdk/innoship/typescript/",
    "developerDocumentation": "api.innoship.io/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/innoship/openapi.yaml"
  },
  {
    "name": "Innoship",
    "numberOfMethods": 51,
    "categories": [
      "shipping_api",
      "logistics_provider",
      "shipping_integration"
    ],
    "index": "innoship/python",
    "language": "Python",
    "link": "/sdk/innoship/python/",
    "developerDocumentation": "api.innoship.io/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/innoship/openapi.yaml"
  },
  {
    "name": "Innoship",
    "numberOfMethods": 51,
    "categories": [
      "shipping_api",
      "logistics_provider",
      "shipping_integration"
    ],
    "index": "innoship/java",
    "language": "Java",
    "link": "/sdk/innoship/java/",
    "developerDocumentation": "api.innoship.io/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/innoship/openapi.yaml"
  }
];

export default function Innoship() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Innoship"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/innoship/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/innoship/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/innoship/favicon.png"
      sdks={sdks}
      homepage="innoship.io"
      companyKebabCase="innoship"
      categories={allCategories}
      metaDescription={`Innoship is the advanced delivery management platform that helps retailers to improve customer experience by streamlining the delivery process. We combined our eCommerce logistics expertise with all the enterprise features you need to master last-mile customer experience. 

Backed by Abris Capital Partners, the ESG transformation specialist private equity investor, Innoship is now part of Alsendo group, the leading eCommerce shipping solutions technologies in the CEE region.

From checkout and shipping to tracking, returns and analytics, Innoship helps you safely deliver on promises made to your customers. 

Effortless integration, hassle-free delivery
•	A simple, one-time integration with the Innoship app allows retailers to access any carrier, local or international.
•	External markets become readily available with seamless connections to hundreds of carriers in 15+ countries.`}
    />
  )
}