import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Backend",
    "numberOfMethods": 109,
    "categories": [
      "developer_tools",
      "authentication",
      "user_management"
    ],
    "index": "backend/typescript",
    "language": "TypeScript",
    "link": "/sdk/clerk/backend/typescript/",
    "developerDocumentation": "clerk.com/docs/reference/backend-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clerk/backend/openapi.yaml"
  },
  {
    "name": "Backend",
    "numberOfMethods": 109,
    "categories": [
      "developer_tools",
      "authentication",
      "user_management"
    ],
    "index": "backend/python",
    "language": "Python",
    "link": "/sdk/clerk/backend/python/",
    "developerDocumentation": "clerk.com/docs/reference/backend-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clerk/backend/openapi.yaml"
  },
  {
    "name": "Backend",
    "numberOfMethods": 109,
    "categories": [
      "developer_tools",
      "authentication",
      "user_management"
    ],
    "index": "backend/java",
    "language": "Java",
    "link": "/sdk/clerk/backend/java/",
    "developerDocumentation": "clerk.com/docs/reference/backend-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clerk/backend/openapi.yaml"
  }
];

export default function Clerk() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Clerk"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clerk/backend/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clerk/backend/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clerk/backend/favicon.png"
      sdks={sdks}
      homepage="clerk.com"
      companyKebabCase="clerk"
      categories={allCategories}
      metaDescription={`Clerk is a complete suite of embeddable UIs, flexible APIs, and admin dashboards to authenticate and manage your users.`}
    />
  )
}