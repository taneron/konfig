import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "SightMap",
    "numberOfMethods": 88,
    "categories": [
      "real_estate",
      "data_visualization",
      "real_estate_technology",
      "real_estate_marketing",
      "property_management"
    ],
    "index": "sight-map/typescript",
    "language": "TypeScript",
    "link": "/sdk/engrain/sight-map/typescript/",
    "developerDocumentation": "api.sightmap.com/v1/openapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/engrain/sight-map/openapi.yaml"
  },
  {
    "name": "SightMap",
    "numberOfMethods": 88,
    "categories": [
      "real_estate",
      "data_visualization",
      "real_estate_technology",
      "real_estate_marketing",
      "property_management"
    ],
    "index": "sight-map/python",
    "language": "Python",
    "link": "/sdk/engrain/sight-map/python/",
    "developerDocumentation": "api.sightmap.com/v1/openapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/engrain/sight-map/openapi.yaml"
  },
  {
    "name": "SightMap",
    "numberOfMethods": 88,
    "categories": [
      "real_estate",
      "data_visualization",
      "real_estate_technology",
      "real_estate_marketing",
      "property_management"
    ],
    "index": "sight-map/java",
    "language": "Java",
    "link": "/sdk/engrain/sight-map/java/",
    "developerDocumentation": "api.sightmap.com/v1/openapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/engrain/sight-map/openapi.yaml"
  }
];

export default function Engrain() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Engrain"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/engrain/sight-map/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/engrain/sight-map/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/engrain/sight-map/favicon.png"
      sdks={sdks}
      homepage="www.engrain.com/sightmap"
      companyKebabCase="engrain"
      categories={allCategories}
      metaDescription={`Engrain is a recognized leader in next-generation interactive technology and data visualization software solutions for the multifamily, commercial, residential, storage, and retail real estate industries. The company is best known for its award-winning TouchTour® suite of products – including interactive sales kiosks, the TouchTour iPad application, and TouchTour Connect digital signage – which engage prospects and residents alike while empowering sales teams with actionable, real-time information.

Through its innovative SightMap™ data visualization software platform, Engrain is poised to disrupt the real estate industry once again with a lightweight map format that displays unit-level data in a highly responsive and integrated way. SightMap can be embedded on virtually any website or application and is available on all Engrain's TouchTour products.  It is also available for license by individual companies as a powerful asset management tool, and third-party software providers for inclusion in marketing and operations dashboards, applications, analytics tools and websites via an SDK and Unit Map data API.`}
    />
  )
}