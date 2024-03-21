import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "CloudFunctions",
    "numberOfMethods": 36,
    "categories": [
      "gpu",
      "artificial_intelligence",
      "deep_learning",
      "parallel_computing",
      "gpuaccelerated_computing",
      "ai"
    ],
    "index": "cloud-functions/typescript",
    "language": "TypeScript",
    "link": "/sdk/nvidia/cloud-functions/typescript/",
    "developerDocumentation": "docs.api.nvidia.com/cloud-functions/reference/getfunctiondeployment",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nvidia/cloud-functions/openapi.yaml"
  },
  {
    "name": "CloudFunctions",
    "numberOfMethods": 36,
    "categories": [
      "gpu",
      "artificial_intelligence",
      "deep_learning",
      "parallel_computing",
      "gpuaccelerated_computing",
      "ai"
    ],
    "index": "cloud-functions/python",
    "language": "Python",
    "link": "/sdk/nvidia/cloud-functions/python/",
    "developerDocumentation": "docs.api.nvidia.com/cloud-functions/reference/getfunctiondeployment",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nvidia/cloud-functions/openapi.yaml"
  },
  {
    "name": "CloudFunctions",
    "numberOfMethods": 36,
    "categories": [
      "gpu",
      "artificial_intelligence",
      "deep_learning",
      "parallel_computing",
      "gpuaccelerated_computing",
      "ai"
    ],
    "index": "cloud-functions/java",
    "language": "Java",
    "link": "/sdk/nvidia/cloud-functions/java/",
    "developerDocumentation": "docs.api.nvidia.com/cloud-functions/reference/getfunctiondeployment",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nvidia/cloud-functions/openapi.yaml"
  },
  {
    "name": "NIM",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "gpu",
      "gpuaccelerated_computing",
      "artificial_intelligence",
      "deep_learning",
      "parallel_computing"
    ],
    "index": "nim/typescript",
    "language": "TypeScript",
    "link": "/sdk/nvidia/nim/typescript/",
    "developerDocumentation": "docs.api.nvidia.com/nim/reference/google-gemma7b",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nvidia/nim/openapi.yaml"
  },
  {
    "name": "NIM",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "gpu",
      "gpuaccelerated_computing",
      "artificial_intelligence",
      "deep_learning",
      "parallel_computing"
    ],
    "index": "nim/python",
    "language": "Python",
    "link": "/sdk/nvidia/nim/python/",
    "developerDocumentation": "docs.api.nvidia.com/nim/reference/google-gemma7b",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nvidia/nim/openapi.yaml"
  },
  {
    "name": "NIM",
    "numberOfMethods": 19,
    "categories": [
      "ai",
      "gpu",
      "gpuaccelerated_computing",
      "artificial_intelligence",
      "deep_learning",
      "parallel_computing"
    ],
    "index": "nim/java",
    "language": "Java",
    "link": "/sdk/nvidia/nim/java/",
    "developerDocumentation": "docs.api.nvidia.com/nim/reference/google-gemma7b",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nvidia/nim/openapi.yaml"
  }
];

export default function Nvidia() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="NVIDIA"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/cloud-functions/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/cloud-functions/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nvidia/cloud-functions/favicon.png"
      sdks={sdks}
      homepage="www.nvidia.com/en-us/ai/"
      companyKebabCase="nvidia"
      categories={allCategories}
      metaDescription={`Since its founding in 1993, NVIDIA (NASDAQ: NVDA) has been a pioneer in accelerated computing. The company's invention of the GPU in 1999 sparked the growth of the PC gaming market, redefined computer graphics, ignited the era of modern AI and is fueling the creation of the metaverse. NVIDIA is now a full-stack computing company with data-center-scale offerings that are reshaping industry.`}
    />
  )
}