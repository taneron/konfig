import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Jina AI",
    "numberOfMethods": 7,
    "categories": [
      "artificial_intelligence",
      "open_source",
      "developer_tools",
      "machine_learning",
      "ai",
      "vector_search",
      "embedding"
    ],
    "index": "jina-ai/typescript",
    "language": "TypeScript",
    "link": "/sdk/jina-ai/typescript/",
    "developerDocumentation": "api.jina.ai/redoc",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jina-ai/openapi.yaml"
  },
  {
    "name": "Jina AI",
    "numberOfMethods": 7,
    "categories": [
      "artificial_intelligence",
      "open_source",
      "developer_tools",
      "machine_learning",
      "ai",
      "vector_search",
      "embedding"
    ],
    "index": "jina-ai/python",
    "language": "Python",
    "link": "/sdk/jina-ai/python/",
    "developerDocumentation": "api.jina.ai/redoc",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jina-ai/openapi.yaml"
  },
  {
    "name": "Jina AI",
    "numberOfMethods": 7,
    "categories": [
      "artificial_intelligence",
      "open_source",
      "developer_tools",
      "machine_learning",
      "ai",
      "vector_search",
      "embedding"
    ],
    "index": "jina-ai/java",
    "language": "Java",
    "link": "/sdk/jina-ai/java/",
    "developerDocumentation": "api.jina.ai/redoc",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jina-ai/openapi.yaml"
  }
];

export default function JinaAi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Jina AI"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jina-ai/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jina-ai/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jina-ai/favicon.png"
      sdks={sdks}
      homepage="jina.ai"
      companyKebabCase="jina-ai"
      categories={allCategories}
      metaDescription={`Founded in February 2020, Jina AI has swiftly emerged as a global pioneer in multimodal AI technology. Within an impressive timeframe of 20 months, we have successfully raised $37.5M, marking our strong position in the AI industry. Our ground-breaking technology, open-sourced on GitHub, has empowered over 40,000 developers around the globe to seamlessly build and deploy sophisticated multimodal applications.

In 2023, we've made significant strides in advancing AI generation tools grounded on multimodal technology. This innovation has benefited over 250,000 users worldwide, catering to a plethora of unique business requirements. From facilitating business growth and enhancing operational efficiency to optimizing costs, Jina AI is dedicated to empowering businesses to excel in the multimodal era.`}
    />
  )
}