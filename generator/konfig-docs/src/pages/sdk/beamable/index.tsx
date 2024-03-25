import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Beamable",
    "numberOfMethods": 325,
    "categories": [
      "developer_tools",
      "gaming"
    ],
    "index": "beamable/typescript",
    "language": "TypeScript",
    "link": "/sdk/beamable/typescript/",
    "developerDocumentation": "docs.beamable.com/reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beamable/openapi.yaml"
  },
  {
    "name": "Beamable",
    "numberOfMethods": 325,
    "categories": [
      "developer_tools",
      "gaming"
    ],
    "index": "beamable/python",
    "language": "Python",
    "link": "/sdk/beamable/python/",
    "developerDocumentation": "docs.beamable.com/reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beamable/openapi.yaml"
  },
  {
    "name": "Beamable",
    "numberOfMethods": 325,
    "categories": [
      "developer_tools",
      "gaming"
    ],
    "index": "beamable/java",
    "language": "Java",
    "link": "/sdk/beamable/java/",
    "developerDocumentation": "docs.beamable.com/reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/beamable/openapi.yaml"
  }
];

export default function Beamable() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Beamable"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beamable/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beamable/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/beamable/favicon.png"
      sdks={sdks}
      homepage="beamable.com"
      companyKebabCase="beamable"
      categories={allCategories}
      metaDescription={`var Beamable = BeamContext.Default; - That one line of code is a gateway to everything you need to build custom server logic via microservices along with a world of LiveOps tools and live services to build games that players love.`}
    />
  )
}