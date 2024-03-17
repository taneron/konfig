import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Tavus",
    "numberOfMethods": 10,
    "categories": [
      "video",
      "ai",
      "personalized_video"
    ],
    "index": "tavus/typescript",
    "language": "TypeScript",
    "link": "/sdk/tavus/typescript/",
    "developerDocumentation": "docs.tavusapi.com/api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tavus/openapi.yaml"
  },
  {
    "name": "Tavus",
    "numberOfMethods": 10,
    "categories": [
      "video",
      "ai",
      "personalized_video"
    ],
    "index": "tavus/python",
    "language": "Python",
    "link": "/sdk/tavus/python/",
    "developerDocumentation": "docs.tavusapi.com/api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tavus/openapi.yaml"
  },
  {
    "name": "Tavus",
    "numberOfMethods": 10,
    "categories": [
      "video",
      "ai",
      "personalized_video"
    ],
    "index": "tavus/java",
    "language": "Java",
    "link": "/sdk/tavus/java/",
    "developerDocumentation": "docs.tavusapi.com/api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tavus/openapi.yaml"
  }
];

export default function Tavus() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Tavus"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tavus/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tavus/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tavus/favicon.png"
      sdks={sdks}
      homepage="www.tavus.io/"
      companyKebabCase="tavus"
      categories={allCategories}
      metaDescription={`We're an AI video research company making personalized video possible at scale. Generate videos of yourself, and never record again! Available via web app & developer APIs.`}
    />
  )
}