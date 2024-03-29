import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Goody",
    "numberOfMethods": 15,
    "categories": [
      "hr",
      "employee_engagement",
      "gifts",
      "sales",
      "client_appreciation",
      "platform"
    ],
    "index": "goody/typescript",
    "language": "TypeScript",
    "link": "/sdk/goody/typescript/",
    "developerDocumentation": "developer.ongoody.com/introduction/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/goody/openapi.yaml"
  },
  {
    "name": "Goody",
    "numberOfMethods": 15,
    "categories": [
      "hr",
      "employee_engagement",
      "gifts",
      "sales",
      "client_appreciation",
      "platform"
    ],
    "index": "goody/python",
    "language": "Python",
    "link": "/sdk/goody/python/",
    "developerDocumentation": "developer.ongoody.com/introduction/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/goody/openapi.yaml"
  },
  {
    "name": "Goody",
    "numberOfMethods": 15,
    "categories": [
      "hr",
      "employee_engagement",
      "gifts",
      "sales",
      "client_appreciation",
      "platform"
    ],
    "index": "goody/java",
    "language": "Java",
    "link": "/sdk/goody/java/",
    "developerDocumentation": "developer.ongoody.com/introduction/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/goody/openapi.yaml"
  }
];

export default function Goody() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Goody"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/goody/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/goody/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/goody/favicon.png"
      sdks={sdks}
      homepage="www.ongoody.com/"
      companyKebabCase="goody"
      categories={allCategories}
      metaDescription={`Goody is a new way to send personal and business gifts as easily as a text message.

Our business gifting platform, Goody for Business, powers employee engagement, client appreciation, and sales prospecting gifts at more than 12,000 leading companies. Goody integrates with 30 leading HR platforms, allowing companies to automatically gift employees on birthdays and work anniversaries.

Choose from a curated gift collection of 250+ brands. Send a gift with only an email or phone number — no address required. Let gift recipients swap your gift for equal or lower-priced options, with no pricing shown.`}
    />
  )
}