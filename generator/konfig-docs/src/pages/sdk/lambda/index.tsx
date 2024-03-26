import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Lambda",
    "numberOfMethods": 10,
    "categories": [
      "artificial_intelligence",
      "gpu",
      "machine_learning",
      "gpus",
      "distributed_training"
    ],
    "index": "lambda/typescript",
    "language": "TypeScript",
    "link": "/sdk/lambda/typescript/",
    "developerDocumentation": "docs.lambdalabs.com/on-demand-cloud/cloud-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lambda/openapi.yaml"
  },
  {
    "name": "Lambda",
    "numberOfMethods": 10,
    "categories": [
      "artificial_intelligence",
      "gpu",
      "machine_learning",
      "gpus",
      "distributed_training"
    ],
    "index": "lambda/python",
    "language": "Python",
    "link": "/sdk/lambda/python/",
    "developerDocumentation": "docs.lambdalabs.com/on-demand-cloud/cloud-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lambda/openapi.yaml"
  },
  {
    "name": "Lambda",
    "numberOfMethods": 10,
    "categories": [
      "artificial_intelligence",
      "gpu",
      "machine_learning",
      "gpus",
      "distributed_training"
    ],
    "index": "lambda/java",
    "language": "Java",
    "link": "/sdk/lambda/java/",
    "developerDocumentation": "docs.lambdalabs.com/on-demand-cloud/cloud-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/lambda/openapi.yaml"
  }
];

export default function Lambda() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Lambda"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lambda/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lambda/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/lambda/favicon.png"
      sdks={sdks}
      homepage="lambdalabs.com"
      companyKebabCase="lambda"
      categories={allCategories}
      metaDescription={`Lambda provides computation to accelerate human progress. We're a team of Deep Learning engineers building the world's best GPU cloud, clusters, servers, and workstations. Our products power engineers and researchers at the forefront of human knowledge. Customers include Intel, Microsoft, Google, Amazon Research, Tencent, Kaiser Permanente, MIT, Stanford, Harvard, Caltech, Los Alamos National Lab, Disney, and the Department of Defense.`}
    />
  )
}