import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Retell AI",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "voice_generation",
      "llm",
      "text_to_audio"
    ],
    "index": "retell-ai/typescript",
    "language": "TypeScript",
    "link": "/sdk/retell-ai/typescript/",
    "developerDocumentation": "docs.retellai.com/general/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/retell-ai/openapi.yaml"
  },
  {
    "name": "Retell AI",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "voice_generation",
      "llm",
      "text_to_audio"
    ],
    "index": "retell-ai/python",
    "language": "Python",
    "link": "/sdk/retell-ai/python/",
    "developerDocumentation": "docs.retellai.com/general/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/retell-ai/openapi.yaml"
  },
  {
    "name": "Retell AI",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "voice_generation",
      "llm",
      "text_to_audio"
    ],
    "index": "retell-ai/java",
    "language": "Java",
    "link": "/sdk/retell-ai/java/",
    "developerDocumentation": "docs.retellai.com/general/introduction",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/retell-ai/openapi.yaml"
  }
];

export default function RetellAi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Retell AI"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/retell-ai/favicon.png"
      sdks={sdks}
      homepage="retellai.com"
      companyKebabCase="retell-ai"
      categories={allCategories}
      metaDescription={`API for voice AI. Effortlessly integrate human-like Voice AI into your product. | We are building an API that enables your product to provide an intuitive and engaging way for user interaction - through voice.`}
    />
  )
}