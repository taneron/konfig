import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Nanonets",
    "numberOfMethods": 20,
    "categories": [
      "artificial_intelligence",
      "machine_learning",
      "software_development",
      "enterprise_software"
    ],
    "index": "nanonets/typescript",
    "language": "TypeScript",
    "link": "/sdk/nanonets/typescript/",
    "developerDocumentation": "nanonets.com/documentation/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nanonets/openapi.yaml"
  },
  {
    "name": "Nanonets",
    "numberOfMethods": 20,
    "categories": [
      "artificial_intelligence",
      "machine_learning",
      "software_development",
      "enterprise_software"
    ],
    "index": "nanonets/python",
    "language": "Python",
    "link": "/sdk/nanonets/python/",
    "developerDocumentation": "nanonets.com/documentation/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nanonets/openapi.yaml"
  },
  {
    "name": "Nanonets",
    "numberOfMethods": 20,
    "categories": [
      "artificial_intelligence",
      "machine_learning",
      "software_development",
      "enterprise_software"
    ],
    "index": "nanonets/java",
    "language": "Java",
    "link": "/sdk/nanonets/java/",
    "developerDocumentation": "nanonets.com/documentation/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nanonets/openapi.yaml"
  }
];

export default function Nanonets() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Nanonets"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nanonets/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nanonets/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nanonets/favicon.png"
      sdks={sdks}
      homepage="nanonets.com/"
      companyKebabCase="nanonets"
      categories={allCategories}
      metaDescription={`Nanonets enables self-service artificial intelligence by simplifying adoption. Easily build machine learning models with minimal training data or knowledge of machine learning.

At Nanonets, we serve up the most accurate models. Always.`}
    />
  )
}