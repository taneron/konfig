import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Miso",
    "numberOfMethods": 26,
    "categories": [
      "ai",
      "search"
    ],
    "index": "miso/typescript",
    "language": "TypeScript",
    "link": "/sdk/miso/typescript/",
    "developerDocumentation": "docs.miso.ai/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/miso/openapi.yaml"
  },
  {
    "name": "Miso",
    "numberOfMethods": 26,
    "categories": [
      "ai",
      "search"
    ],
    "index": "miso/python",
    "language": "Python",
    "link": "/sdk/miso/python/",
    "developerDocumentation": "docs.miso.ai/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/miso/openapi.yaml"
  },
  {
    "name": "Miso",
    "numberOfMethods": 26,
    "categories": [
      "ai",
      "search"
    ],
    "index": "miso/java",
    "language": "Java",
    "link": "/sdk/miso/java/",
    "developerDocumentation": "docs.miso.ai/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/miso/openapi.yaml"
  }
];

export default function Miso() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Miso"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/miso/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/miso/logo.svg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/miso/favicon.png"
      sdks={sdks}
      homepage="miso.ai"
      companyKebabCase="miso"
      categories={allCategories}
      metaDescription={`Miso’s simple APIs empower product teams to realize unlimited personalization opportunities. Leading brands are using Miso’s semantic intelligence and real-time clickstream analysis to drive a new generation of personalized experiences and lift revenues sitewide. And unlike traditional solutions, Miso can personalize 100% anonymously — no tracking users or mining data.`}
    />
  )
}