import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Clarifai",
    "numberOfMethods": 400,
    "categories": [
      "ai"
    ],
    "index": "clarifai/typescript",
    "language": "TypeScript",
    "link": "/sdk/clarifai/typescript/",
    "developerDocumentation": "docs.clarifai.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clarifai/openapi.yaml"
  },
  {
    "name": "Clarifai",
    "numberOfMethods": 400,
    "categories": [
      "ai"
    ],
    "index": "clarifai/python",
    "language": "Python",
    "link": "/sdk/clarifai/python/",
    "developerDocumentation": "docs.clarifai.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clarifai/openapi.yaml"
  },
  {
    "name": "Clarifai",
    "numberOfMethods": 400,
    "categories": [
      "ai"
    ],
    "index": "clarifai/java",
    "language": "Java",
    "link": "/sdk/clarifai/java/",
    "developerDocumentation": "docs.clarifai.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clarifai/openapi.yaml"
  }
];

export default function Clarifai() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Clarifai"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clarifai/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clarifai/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clarifai/favicon.png"
      sdks={sdks}
      homepage="clarifai.com"
      companyKebabCase="clarifai"
      categories={allCategories}
      metaDescription={`Clarifai is an independent artificial intelligence company that specializes in computer vision, natural language processing, and audio recognition.  One of the first deep learning platforms having been founded in 2013, Clarifai provides an AI platform for unstructured image, video, text, and audio data. Its platform supports the full AI lifecycle for data exploration, data labeling, model training, evaluation, and inference around images, video, text, and audio data. Headquartered in Washington DC, Clarifai uses machine learning and deep neural networks to identify and analyze images, videos, text, and audio automatically. Clarifai enables users to implement AI technology into their products via API, Mobile SDK, and/or on-premise solutions.`}
    />
  )
}