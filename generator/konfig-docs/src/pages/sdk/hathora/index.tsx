import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Hathora",
    "numberOfMethods": 67,
    "categories": [
      "gaming",
      "multiplayer_games",
      "infrastructure",
      "server_orchestration"
    ],
    "index": "hathora/typescript",
    "language": "TypeScript",
    "link": "/sdk/hathora/typescript/",
    "developerDocumentation": "hathora.dev/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hathora/openapi.yaml"
  },
  {
    "name": "Hathora",
    "numberOfMethods": 67,
    "categories": [
      "gaming",
      "multiplayer_games",
      "infrastructure",
      "server_orchestration"
    ],
    "index": "hathora/python",
    "language": "Python",
    "link": "/sdk/hathora/python/",
    "developerDocumentation": "hathora.dev/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hathora/openapi.yaml"
  },
  {
    "name": "Hathora",
    "numberOfMethods": 67,
    "categories": [
      "gaming",
      "multiplayer_games",
      "infrastructure",
      "server_orchestration"
    ],
    "index": "hathora/java",
    "language": "Java",
    "link": "/sdk/hathora/java/",
    "developerDocumentation": "hathora.dev/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hathora/openapi.yaml"
  }
];

export default function Hathora() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Hathora"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hathora/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hathora/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hathora/favicon.png"
      sdks={sdks}
      homepage="hathora.dev/"
      companyKebabCase="hathora"
      categories={allCategories}
      metaDescription={`A venture-backed start-up building a modern cloud optimized for multiplayer games.`}
    />
  )
}