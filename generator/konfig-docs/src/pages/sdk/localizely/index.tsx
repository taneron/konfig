import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Localizely",
    "numberOfMethods": 4,
    "categories": [
      "language",
      "translation"
    ],
    "index": "localizely/typescript",
    "language": "TypeScript",
    "link": "/sdk/localizely/typescript/",
    "developerDocumentation": "api.localizely.com/swagger-ui/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/localizely/openapi.yaml"
  },
  {
    "name": "Localizely",
    "numberOfMethods": 4,
    "categories": [
      "language",
      "translation"
    ],
    "index": "localizely/python",
    "language": "Python",
    "link": "/sdk/localizely/python/",
    "developerDocumentation": "api.localizely.com/swagger-ui/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/localizely/openapi.yaml"
  },
  {
    "name": "Localizely",
    "numberOfMethods": 4,
    "categories": [
      "language",
      "translation"
    ],
    "index": "localizely/java",
    "language": "Java",
    "link": "/sdk/localizely/java/",
    "developerDocumentation": "api.localizely.com/swagger-ui/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/localizely/openapi.yaml"
  }
];

export default function Localizely() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Localizely"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/localizely/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/localizely/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/localizely/favicon.png"
      sdks={sdks}
      homepage="localizely.com"
      companyKebabCase="localizely"
      categories={allCategories}
      metaDescription={`Localizely is a translation management system for agile teams that streamlines software localization.

We believe translation management for apps should be easy, so the team can focus on things that bring business value.

Developers can easily integrate translations into the apps build process, and managers can easily collaborate with translators.

We built Localizely from our experience by working on software projects with 2 to 100 languages.`}
    />
  )
}