import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Netvyne",
    "numberOfMethods": 5,
    "categories": [
      "discussion",
      "moderation"
    ],
    "index": "netvyne/typescript",
    "language": "TypeScript",
    "link": "/sdk/netvyne/typescript/",
    "developerDocumentation": "api.netvyne.com/documentation/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/netvyne/openapi.yaml"
  },
  {
    "name": "Netvyne",
    "numberOfMethods": 5,
    "categories": [
      "discussion",
      "moderation"
    ],
    "index": "netvyne/python",
    "language": "Python",
    "link": "/sdk/netvyne/python/",
    "developerDocumentation": "api.netvyne.com/documentation/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/netvyne/openapi.yaml"
  },
  {
    "name": "Netvyne",
    "numberOfMethods": 5,
    "categories": [
      "discussion",
      "moderation"
    ],
    "index": "netvyne/java",
    "language": "Java",
    "link": "/sdk/netvyne/java/",
    "developerDocumentation": "api.netvyne.com/documentation/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/netvyne/openapi.yaml"
  }
];

export default function Netvyne() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Netvyne"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/netvyne/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/netvyne/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/netvyne/favicon.png"
      sdks={sdks}
      homepage="netvyne.com"
      companyKebabCase="netvyne"
      categories={allCategories}
      metaDescription={`Netvyne provides the APIs and tools for discussion platforms to effortlessly manage and curate their users' comments.

Netvyne's API enforces your own content policy criterion and is tailored to your platform's needs. Netvyne takes a hybrid man-machine approach to bring both low latency and high accuracy moderation, resulting in increased user safety and community growth.`}
    />
  )
}