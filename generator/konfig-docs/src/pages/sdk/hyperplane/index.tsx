import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Hyperplane",
    "numberOfMethods": 28,
    "categories": [
      "ai",
      "finance",
      "machine_learning"
    ],
    "index": "hyperplane/typescript",
    "language": "TypeScript",
    "link": "/sdk/hyperplane/typescript/",
    "developerDocumentation": "docs.hyperplane.ai/reference/post_auth-token",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hyperplane/openapi.yaml"
  },
  {
    "name": "Hyperplane",
    "numberOfMethods": 28,
    "categories": [
      "ai",
      "finance",
      "machine_learning"
    ],
    "index": "hyperplane/python",
    "language": "Python",
    "link": "/sdk/hyperplane/python/",
    "developerDocumentation": "docs.hyperplane.ai/reference/post_auth-token",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hyperplane/openapi.yaml"
  },
  {
    "name": "Hyperplane",
    "numberOfMethods": 28,
    "categories": [
      "ai",
      "finance",
      "machine_learning"
    ],
    "index": "hyperplane/java",
    "language": "Java",
    "link": "/sdk/hyperplane/java/",
    "developerDocumentation": "docs.hyperplane.ai/reference/post_auth-token",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hyperplane/openapi.yaml"
  }
];

export default function Hyperplane() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Hyperplane"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hyperplane/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hyperplane/logo.jpg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hyperplane/favicon.png"
      sdks={sdks}
      homepage="hyperplane.ai"
      companyKebabCase="hyperplane"
      categories={allCategories}
      metaDescription={`Hyperplane builds the brain for financial institutions.

Our data platform uses first-party data for hyper-personalization and machine intelligence through specialized foundational models.`}
    />
  )
}