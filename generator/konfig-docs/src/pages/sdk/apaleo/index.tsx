import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Apaleo",
    "numberOfMethods": 33,
    "categories": [
      "hotel",
      "property_management",
      "hospitality"
    ],
    "index": "apaleo/typescript",
    "language": "TypeScript",
    "link": "/sdk/apaleo/typescript/",
    "developerDocumentation": "apaleo.dev",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/apaleo/openapi.yaml"
  },
  {
    "name": "Apaleo",
    "numberOfMethods": 33,
    "categories": [
      "hotel",
      "property_management",
      "hospitality"
    ],
    "index": "apaleo/python",
    "language": "Python",
    "link": "/sdk/apaleo/python/",
    "developerDocumentation": "apaleo.dev",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/apaleo/openapi.yaml"
  },
  {
    "name": "Apaleo",
    "numberOfMethods": 33,
    "categories": [
      "hotel",
      "property_management",
      "hospitality"
    ],
    "index": "apaleo/java",
    "language": "Java",
    "link": "/sdk/apaleo/java/",
    "developerDocumentation": "apaleo.dev",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/apaleo/openapi.yaml"
  }
];

export default function Apaleo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Apaleo"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/apaleo/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/apaleo/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/apaleo/favicon.png"
      sdks={sdks}
      homepage="apaleo.com"
      companyKebabCase="apaleo"
      categories={allCategories}
      metaDescription={`More than a PMS, Apaleo is the API-first property management platform empowering hotel & apartment groups to create the ultimate experience for guests & staff. Gain back control and scale your hospitality business with native multi-property management, process automation and unlimited data access.`}
    />
  )
}