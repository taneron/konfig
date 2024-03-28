import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Pappers",
    "numberOfMethods": 22,
    "categories": [
      "finance",
      "legal",
      "legaltech",
      "data"
    ],
    "index": "pappers/typescript",
    "language": "TypeScript",
    "link": "/sdk/pappers/typescript/",
    "developerDocumentation": "www.pappers.fr/api/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pappers/openapi.yaml"
  },
  {
    "name": "Pappers",
    "numberOfMethods": 22,
    "categories": [
      "finance",
      "legal",
      "legaltech",
      "data"
    ],
    "index": "pappers/python",
    "language": "Python",
    "link": "/sdk/pappers/python/",
    "developerDocumentation": "www.pappers.fr/api/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pappers/openapi.yaml"
  },
  {
    "name": "Pappers",
    "numberOfMethods": 22,
    "categories": [
      "finance",
      "legal",
      "legaltech",
      "data"
    ],
    "index": "pappers/java",
    "language": "Java",
    "link": "/sdk/pappers/java/",
    "developerDocumentation": "www.pappers.fr/api/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pappers/openapi.yaml"
  }
];

export default function Pappers() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Pappers"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pappers/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pappers/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pappers/favicon.png"
      sdks={sdks}
      homepage="www.pappers.fr/"
      companyKebabCase="pappers"
      categories={allCategories}
      metaDescription={`Avec Pappers, accédez à toute toute l'information légale, juridique financière des sociétés françaises !
Découvrez nos offres : https://www.pappers.fr/api et https://www.pappers.fr/exports`}
    />
  )
}