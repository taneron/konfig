import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Crowd4Cash",
    "numberOfMethods": 18,
    "categories": [
      "finance",
      "payments",
      "fintech",
      "crowdfunding"
    ],
    "index": "crowd-4-cash/typescript",
    "language": "TypeScript",
    "link": "/sdk/crowd-4-cash/typescript/",
    "developerDocumentation": "api2.crowd4cash.ch/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crowd-4-cash/openapi.yaml"
  },
  {
    "name": "Crowd4Cash",
    "numberOfMethods": 18,
    "categories": [
      "finance",
      "payments",
      "fintech",
      "crowdfunding"
    ],
    "index": "crowd-4-cash/python",
    "language": "Python",
    "link": "/sdk/crowd-4-cash/python/",
    "developerDocumentation": "api2.crowd4cash.ch/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crowd-4-cash/openapi.yaml"
  },
  {
    "name": "Crowd4Cash",
    "numberOfMethods": 18,
    "categories": [
      "finance",
      "payments",
      "fintech",
      "crowdfunding"
    ],
    "index": "crowd-4-cash/java",
    "language": "Java",
    "link": "/sdk/crowd-4-cash/java/",
    "developerDocumentation": "api2.crowd4cash.ch/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crowd-4-cash/openapi.yaml"
  }
];

export default function Crowd4Cash() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Crowd4Cash"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowd-4-cash/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowd-4-cash/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowd-4-cash/favicon.png"
      sdks={sdks}
      homepage="crowd4cash.ch/"
      companyKebabCase="crowd-4-cash"
      categories={allCategories}
      metaDescription={`Swiss FinTech for private persons and SME. Crowd Solutions is the provider of Crowd4Cash.ch the innovative Crowdlending platform. 

Crowd4Cash brings investors and borrower together. For better returns for the investors and lower interest rates for borrower. 100% online, easy and simply fair!`}
    />
  )
}