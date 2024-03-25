import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Revenium",
    "numberOfMethods": 377,
    "categories": [
      "api_monetization",
      "data",
      "monetization"
    ],
    "index": "revenium/typescript",
    "language": "TypeScript",
    "link": "/sdk/revenium/typescript/",
    "developerDocumentation": "revenium.readme.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/revenium/openapi.yaml"
  },
  {
    "name": "Revenium",
    "numberOfMethods": 377,
    "categories": [
      "api_monetization",
      "data",
      "monetization"
    ],
    "index": "revenium/python",
    "language": "Python",
    "link": "/sdk/revenium/python/",
    "developerDocumentation": "revenium.readme.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/revenium/openapi.yaml"
  },
  {
    "name": "Revenium",
    "numberOfMethods": 377,
    "categories": [
      "api_monetization",
      "data",
      "monetization"
    ],
    "index": "revenium/java",
    "language": "Java",
    "link": "/sdk/revenium/java/",
    "developerDocumentation": "revenium.readme.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/revenium/openapi.yaml"
  }
];

export default function Revenium() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Revenium"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/revenium/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/revenium/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/revenium/favicon.png"
      sdks={sdks}
      homepage="www.revenium.io/"
      companyKebabCase="revenium"
      categories={allCategories}
      metaDescription={`In an era where APIs are pivotal across industries and solutions, Revenium (formerly HyperCurrent) accelerates digital product delivery, revenue generation, and ROI. With "zero code" installation, compatibility with major API management platforms, advanced monetization capabilities, flexible go-to-market tools, and next-gen observability, Revenium is the ideal solution for businesses seeking to turn ideas into income.
What is Revenium? Revenium is a pioneering and indispensable element in the periodic table of digital revenue generation. As a catalyst, it seamlessly exposes APIs and enterprise data assets to bridge the components of digital products to actualize revenue and drive ROI.
`}
    />
  )
}