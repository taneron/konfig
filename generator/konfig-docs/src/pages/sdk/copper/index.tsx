import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Copper",
    "numberOfMethods": 75,
    "categories": [
      "crm"
    ],
    "index": "copper/typescript",
    "language": "TypeScript",
    "link": "/sdk/copper/typescript/",
    "developerDocumentation": "developer.copper.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/copper/openapi.yaml"
  },
  {
    "name": "Copper",
    "numberOfMethods": 75,
    "categories": [
      "crm"
    ],
    "index": "copper/python",
    "language": "Python",
    "link": "/sdk/copper/python/",
    "developerDocumentation": "developer.copper.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/copper/openapi.yaml"
  },
  {
    "name": "Copper",
    "numberOfMethods": 75,
    "categories": [
      "crm"
    ],
    "index": "copper/java",
    "language": "Java",
    "link": "/sdk/copper/java/",
    "developerDocumentation": "developer.copper.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/copper/openapi.yaml"
  }
];

export default function Copper() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Copper"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/copper/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/copper/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/copper/favicon.png"
      sdks={sdks}
      homepage="copper.com"
      companyKebabCase="copper"
      categories={allCategories}
      metaDescription={`If relationships are the lifeblood of your business, Copper is the heart. The only Google-recommended CRM that helps teams build better relationships to drive lasting revenue.`}
    />
  )
}