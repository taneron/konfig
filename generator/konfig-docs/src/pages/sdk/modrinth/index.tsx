import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Modrinth",
    "numberOfMethods": 76,
    "categories": [
      "gaming",
      "platform",
      "modding",
      "development_platforms",
      "communities",
      "marketplace"
    ],
    "index": "modrinth/typescript",
    "language": "TypeScript",
    "link": "/sdk/modrinth/typescript/",
    "developerDocumentation": "docs.modrinth.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/modrinth/openapi.yaml"
  },
  {
    "name": "Modrinth",
    "numberOfMethods": 76,
    "categories": [
      "gaming",
      "platform",
      "modding",
      "development_platforms",
      "communities",
      "marketplace"
    ],
    "index": "modrinth/python",
    "language": "Python",
    "link": "/sdk/modrinth/python/",
    "developerDocumentation": "docs.modrinth.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/modrinth/openapi.yaml"
  },
  {
    "name": "Modrinth",
    "numberOfMethods": 76,
    "categories": [
      "gaming",
      "platform",
      "modding",
      "development_platforms",
      "communities",
      "marketplace"
    ],
    "index": "modrinth/java",
    "language": "Java",
    "link": "/sdk/modrinth/java/",
    "developerDocumentation": "docs.modrinth.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/modrinth/openapi.yaml"
  }
];

export default function Modrinth() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Modrinth"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/modrinth/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/modrinth/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/modrinth/favicon.png"
      sdks={sdks}
      homepage="modrinth.com/"
      companyKebabCase="modrinth"
      categories={allCategories}
      metaDescription={`Modrinth is a modding platform providing gamers a site where they can discover modifications for their favorite games and developers a site where they can upload their projects and share them to the world.`}
    />
  )
}