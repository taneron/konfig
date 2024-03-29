import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Rated",
    "numberOfMethods": 80,
    "categories": [
      "blockchain",
      "cryptocurrency",
      "web_3"
    ],
    "index": "rated/typescript",
    "language": "TypeScript",
    "link": "/sdk/rated/typescript/",
    "developerDocumentation": "api-docs.rated.network/rated-api/api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rated/openapi.yaml"
  },
  {
    "name": "Rated",
    "numberOfMethods": 80,
    "categories": [
      "blockchain",
      "cryptocurrency",
      "web_3"
    ],
    "index": "rated/python",
    "language": "Python",
    "link": "/sdk/rated/python/",
    "developerDocumentation": "api-docs.rated.network/rated-api/api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rated/openapi.yaml"
  },
  {
    "name": "Rated",
    "numberOfMethods": 80,
    "categories": [
      "blockchain",
      "cryptocurrency",
      "web_3"
    ],
    "index": "rated/java",
    "language": "Java",
    "link": "/sdk/rated/java/",
    "developerDocumentation": "api-docs.rated.network/rated-api/api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/rated/openapi.yaml"
  }
];

export default function Rated() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Rated"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rated/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rated/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/rated/favicon.png"
      sdks={sdks}
      homepage="rated.network"
      companyKebabCase="rated"
      categories={allCategories}
      metaDescription={`We are building reputation for machines, starting with Ethereum validators. Our mission is to instill greater transparency and rich context in Web3 infrastructure data.`}
    />
  )
}