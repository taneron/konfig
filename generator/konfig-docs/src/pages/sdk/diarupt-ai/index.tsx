import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Diarupt AI",
    "numberOfMethods": 6,
    "categories": [
      "video_ai",
      "conversations",
      "ai"
    ],
    "index": "diarupt-ai/typescript",
    "language": "TypeScript",
    "link": "/sdk/diarupt-ai/typescript/",
    "developerDocumentation": "docs.diarupt.ai/api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/diarupt-ai/openapi.yaml"
  },
  {
    "name": "Diarupt AI",
    "numberOfMethods": 6,
    "categories": [
      "video_ai",
      "conversations",
      "ai"
    ],
    "index": "diarupt-ai/python",
    "language": "Python",
    "link": "/sdk/diarupt-ai/python/",
    "developerDocumentation": "docs.diarupt.ai/api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/diarupt-ai/openapi.yaml"
  },
  {
    "name": "Diarupt AI",
    "numberOfMethods": 6,
    "categories": [
      "video_ai",
      "conversations",
      "ai"
    ],
    "index": "diarupt-ai/java",
    "language": "Java",
    "link": "/sdk/diarupt-ai/java/",
    "developerDocumentation": "docs.diarupt.ai/api-reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/diarupt-ai/openapi.yaml"
  }
];

export default function DiaruptAi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Diarupt AI"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/diarupt-ai/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/diarupt-ai/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/diarupt-ai/favicon.png"
      sdks={sdks}
      homepage="diarupt.ai/"
      companyKebabCase="diarupt-ai"
      categories={allCategories}
      metaDescription={`Diarupt AI lets you build real-time video AI conversations into your product.`}
    />
  )
}