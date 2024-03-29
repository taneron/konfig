import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Crusoe",
    "numberOfMethods": 95,
    "categories": [
      "data_center",
      "clean_computing_infrastructure",
      "environmental_impact_reduction",
      "emissions_reduction"
    ],
    "index": "crusoe/typescript",
    "language": "TypeScript",
    "link": "/sdk/crusoe/typescript/",
    "developerDocumentation": "docs.crusoecloud.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crusoe/openapi.yaml"
  },
  {
    "name": "Crusoe",
    "numberOfMethods": 95,
    "categories": [
      "data_center",
      "clean_computing_infrastructure",
      "environmental_impact_reduction",
      "emissions_reduction"
    ],
    "index": "crusoe/python",
    "language": "Python",
    "link": "/sdk/crusoe/python/",
    "developerDocumentation": "docs.crusoecloud.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crusoe/openapi.yaml"
  },
  {
    "name": "Crusoe",
    "numberOfMethods": 95,
    "categories": [
      "data_center",
      "clean_computing_infrastructure",
      "environmental_impact_reduction",
      "emissions_reduction"
    ],
    "index": "crusoe/java",
    "language": "Java",
    "link": "/sdk/crusoe/java/",
    "developerDocumentation": "docs.crusoecloud.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crusoe/openapi.yaml"
  }
];

export default function Crusoe() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Crusoe"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crusoe/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crusoe/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crusoe/favicon.png"
      sdks={sdks}
      homepage="crusoecloud.com"
      companyKebabCase="crusoe"
      categories={allCategories}
      metaDescription={`Crusoe exists to bring energy to ideas. We are the pioneers of clean computing infrastructure that reduces both the costs and the environmental impact of the world's expanding digital economy. By unlocking stranded sources of energy to power cloud and data center services, we are creating the climate-aligned future of compute-intensive innovation that reduces rather than adds to emissions. The world's appetite for computation, energy, and progress will never stop growing. Crusoe is here to bring energy to ideas in ways that are aligned with the needs of our climate.`}
    />
  )
}