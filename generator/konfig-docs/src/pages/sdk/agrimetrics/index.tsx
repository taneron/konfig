import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Agrimetrics",
    "numberOfMethods": 96,
    "categories": [
      "agriculture",
      "sustainability",
      "agritech",
      "data"
    ],
    "index": "agrimetrics/typescript",
    "language": "TypeScript",
    "link": "/sdk/agrimetrics/typescript/",
    "developerDocumentation": "developer.agrimetrics.co.uk/reference/retrieve-api-key",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/agrimetrics/openapi.yaml"
  },
  {
    "name": "Agrimetrics",
    "numberOfMethods": 96,
    "categories": [
      "agriculture",
      "sustainability",
      "agritech",
      "data"
    ],
    "index": "agrimetrics/python",
    "language": "Python",
    "link": "/sdk/agrimetrics/python/",
    "developerDocumentation": "developer.agrimetrics.co.uk/reference/retrieve-api-key",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/agrimetrics/openapi.yaml"
  },
  {
    "name": "Agrimetrics",
    "numberOfMethods": 96,
    "categories": [
      "agriculture",
      "sustainability",
      "agritech",
      "data"
    ],
    "index": "agrimetrics/java",
    "language": "Java",
    "link": "/sdk/agrimetrics/java/",
    "developerDocumentation": "developer.agrimetrics.co.uk/reference/retrieve-api-key",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/agrimetrics/openapi.yaml"
  }
];

export default function Agrimetrics() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Agrimetrics"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/agrimetrics/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/agrimetrics/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/agrimetrics/favicon.png"
      sdks={sdks}
      homepage="agrimetrics.co.uk"
      companyKebabCase="agrimetrics"
      categories={allCategories}
      metaDescription={`Radical new answers are needed to feed a growing population and protect our planet.

Agrimetrics provides data and tools to agrifood businesses, researchers and policy-makers to address our most pressing global food challenges. This is a unique opportunity for the food and farming sectors, working together, to drive sustainable productivity.`}
    />
  )
}