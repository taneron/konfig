import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Oyster",
    "numberOfMethods": 17,
    "categories": [
      "hr",
      "talent_management",
      "global_payments",
      "remote_work",
      "global_employment"
    ],
    "index": "oyster/typescript",
    "language": "TypeScript",
    "link": "/sdk/oyster/typescript/",
    "developerDocumentation": "docs.oysterhr.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/oyster/openapi.yaml"
  },
  {
    "name": "Oyster",
    "numberOfMethods": 17,
    "categories": [
      "hr",
      "talent_management",
      "global_payments",
      "remote_work",
      "global_employment"
    ],
    "index": "oyster/python",
    "language": "Python",
    "link": "/sdk/oyster/python/",
    "developerDocumentation": "docs.oysterhr.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/oyster/openapi.yaml"
  },
  {
    "name": "Oyster",
    "numberOfMethods": 17,
    "categories": [
      "hr",
      "talent_management",
      "global_payments",
      "remote_work",
      "global_employment"
    ],
    "index": "oyster/java",
    "language": "Java",
    "link": "/sdk/oyster/java/",
    "developerDocumentation": "docs.oysterhr.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/oyster/openapi.yaml"
  }
];

export default function Oyster() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Oyster"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oyster/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oyster/logo.webp"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/oyster/favicon.png"
      sdks={sdks}
      homepage="oysterhr.com"
      companyKebabCase="oyster"
      categories={allCategories}
      metaDescription={`Our mission is to create a more equal world by making it possible for companies everywhere to hire people anywhere. We believe it should be easy for any company to hire any person, no matter where they are located in the world.`}
    />
  )
}