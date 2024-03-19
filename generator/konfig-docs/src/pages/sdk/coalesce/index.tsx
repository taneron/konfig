import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Coalesce",
    "numberOfMethods": 11,
    "categories": [
      "automation",
      "data_management",
      "data_transformation",
      "graphical_user_interface",
      "data"
    ],
    "index": "coalesce/typescript",
    "language": "TypeScript",
    "link": "/sdk/coalesce/typescript/",
    "developerDocumentation": "docs.coalesce.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/coalesce/openapi.yaml"
  },
  {
    "name": "Coalesce",
    "numberOfMethods": 11,
    "categories": [
      "automation",
      "data_management",
      "data_transformation",
      "graphical_user_interface",
      "data"
    ],
    "index": "coalesce/python",
    "language": "Python",
    "link": "/sdk/coalesce/python/",
    "developerDocumentation": "docs.coalesce.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/coalesce/openapi.yaml"
  },
  {
    "name": "Coalesce",
    "numberOfMethods": 11,
    "categories": [
      "automation",
      "data_management",
      "data_transformation",
      "graphical_user_interface",
      "data"
    ],
    "index": "coalesce/java",
    "language": "Java",
    "link": "/sdk/coalesce/java/",
    "developerDocumentation": "docs.coalesce.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/coalesce/openapi.yaml"
  }
];

export default function Coalesce() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Coalesce"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/coalesce/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/coalesce/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/coalesce/favicon.png"
      sdks={sdks}
      homepage="coalesce.io/"
      companyKebabCase="coalesce"
      categories={allCategories}
      metaDescription={`Founded in 2020, Coalesce is the only data transformation tool built for scale. As the first platform to combine the speed of an intuitive graphical user interface (GUI), the flexibility of code, and the efficiency of automation for data transformations, Coalesce customers benefit from increased data engineer productivity and insights. Based in San Francisco, Calif., Coalesce is backed by Emergence Capital, 11.2 Capital, GreatPoint Ventures, and Industry Ventures, and supports customers worldwide.`}
    />
  )
}