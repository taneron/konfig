import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Wink",
    "numberOfMethods": 130,
    "categories": [
      "travel_expenses",
      "hotel",
      "content_management",
      "engagement",
      "travel_agent_portal"
    ],
    "index": "wink/typescript",
    "language": "TypeScript",
    "link": "/sdk/wink/typescript/",
    "developerDocumentation": "docs.wink.travel/affiliate",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wink/openapi.yaml"
  },
  {
    "name": "Wink",
    "numberOfMethods": 130,
    "categories": [
      "travel_expenses",
      "hotel",
      "content_management",
      "engagement",
      "travel_agent_portal"
    ],
    "index": "wink/python",
    "language": "Python",
    "link": "/sdk/wink/python/",
    "developerDocumentation": "docs.wink.travel/affiliate",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wink/openapi.yaml"
  },
  {
    "name": "Wink",
    "numberOfMethods": 130,
    "categories": [
      "travel_expenses",
      "hotel",
      "content_management",
      "engagement",
      "travel_agent_portal"
    ],
    "index": "wink/java",
    "language": "Java",
    "link": "/sdk/wink/java/",
    "developerDocumentation": "docs.wink.travel/affiliate",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wink/openapi.yaml"
  }
];

export default function Wink() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Wink"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wink/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wink/logo.jpg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wink/favicon.png"
      sdks={sdks}
      homepage="wink.travel/"
      companyKebabCase="wink"
      categories={allCategories}
      metaDescription={`Wink helps hotels improve their products and sell them through innovative new sales channels that lets travelers book much more than just the room. We manage the content, distribution, engagement, conversion and payment. We let hotels and affiliates focus on sales while we do the rest.`}
    />
  )
}