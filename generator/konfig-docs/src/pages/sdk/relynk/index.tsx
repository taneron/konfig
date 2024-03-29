import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Relynk",
    "numberOfMethods": 1,
    "categories": [
      "real_estate_technology",
      "property_management",
      "iot",
      "data",
      "data_management"
    ],
    "index": "relynk/typescript",
    "language": "TypeScript",
    "link": "/sdk/relynk/typescript/",
    "developerDocumentation": "docs.relynk.io/docs/intro",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/relynk/openapi.yaml"
  },
  {
    "name": "Relynk",
    "numberOfMethods": 1,
    "categories": [
      "real_estate_technology",
      "property_management",
      "iot",
      "data",
      "data_management"
    ],
    "index": "relynk/python",
    "language": "Python",
    "link": "/sdk/relynk/python/",
    "developerDocumentation": "docs.relynk.io/docs/intro",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/relynk/openapi.yaml"
  },
  {
    "name": "Relynk",
    "numberOfMethods": 1,
    "categories": [
      "real_estate_technology",
      "property_management",
      "iot",
      "data",
      "data_management"
    ],
    "index": "relynk/java",
    "language": "Java",
    "link": "/sdk/relynk/java/",
    "developerDocumentation": "docs.relynk.io/docs/intro",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/relynk/openapi.yaml"
  }
];

export default function Relynk() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Relynk"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relynk/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relynk/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/relynk/favicon.png"
      sdks={sdks}
      homepage="www.relynk.io/"
      companyKebabCase="relynk"
      categories={allCategories}
      metaDescription={`Relynk empowers PropTech companies by providing seamless access to a commercial building's real-time data. Our easy-to-use API platform connects you to an extensive range of real-time information, including occupancy levels, energy usage, ambient conditions, and more, supercharging your data-driven solutions and giving you the edge you need to succeed.

With Relynk, tapping into the expansive network of sensors and IoT devices within any commercial building has never been simpler.`}
    />
  )
}