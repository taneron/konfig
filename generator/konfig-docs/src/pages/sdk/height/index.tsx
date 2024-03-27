import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Height",
    "numberOfMethods": 22,
    "categories": [
      "automation",
      "ai",
      "project_collaboration"
    ],
    "index": "height/typescript",
    "language": "TypeScript",
    "link": "/sdk/height/typescript/",
    "developerDocumentation": "height-api.xyz/openapi/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/height/openapi.yaml"
  },
  {
    "name": "Height",
    "numberOfMethods": 22,
    "categories": [
      "automation",
      "ai",
      "project_collaboration"
    ],
    "index": "height/python",
    "language": "Python",
    "link": "/sdk/height/python/",
    "developerDocumentation": "height-api.xyz/openapi/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/height/openapi.yaml"
  },
  {
    "name": "Height",
    "numberOfMethods": 22,
    "categories": [
      "automation",
      "ai",
      "project_collaboration"
    ],
    "index": "height/java",
    "language": "Java",
    "link": "/sdk/height/java/",
    "developerDocumentation": "height-api.xyz/openapi/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/height/openapi.yaml"
  }
];

export default function Height() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Height"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/height/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/height/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/height/favicon.png"
      sdks={sdks}
      homepage="height.app"
      companyKebabCase="height"
      categories={allCategories}
      metaDescription={`Height is the autonomous project collaboration tool. With an embedded AI engine, Height handles the legwork of building products on autopilot. Offload soul-sucking chores like bug triage, backlog grooming, and documentation updates for good.`}
    />
  )
}