import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Keatext AI",
    "numberOfMethods": 21,
    "categories": [
      "ai",
      "nlp",
      "text",
      "text_analytics",
      "ai_text"
    ],
    "index": "keatext-ai/typescript",
    "language": "TypeScript",
    "link": "/sdk/keatext-ai/typescript/",
    "developerDocumentation": "developer.keatext.ai/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/keatext-ai/openapi.yaml"
  },
  {
    "name": "Keatext AI",
    "numberOfMethods": 21,
    "categories": [
      "ai",
      "nlp",
      "text",
      "text_analytics",
      "ai_text"
    ],
    "index": "keatext-ai/python",
    "language": "Python",
    "link": "/sdk/keatext-ai/python/",
    "developerDocumentation": "developer.keatext.ai/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/keatext-ai/openapi.yaml"
  },
  {
    "name": "Keatext AI",
    "numberOfMethods": 21,
    "categories": [
      "ai",
      "nlp",
      "text",
      "text_analytics",
      "ai_text"
    ],
    "index": "keatext-ai/java",
    "language": "Java",
    "link": "/sdk/keatext-ai/java/",
    "developerDocumentation": "developer.keatext.ai/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/keatext-ai/openapi.yaml"
  }
];

export default function KeatextAi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Keatext AI"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keatext-ai/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keatext-ai/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keatext-ai/favicon.png"
      sdks={sdks}
      homepage="www.keatext.ai/"
      companyKebabCase="keatext-ai"
      categories={allCategories}
      metaDescription={`Keatext brings the voice of customer and employee into your day-to-day activities. Easily understand what drives engagement and get tailored AI-based recommendations to improve people experiences.`}
    />
  )
}