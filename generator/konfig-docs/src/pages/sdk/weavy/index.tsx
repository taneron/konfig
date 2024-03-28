import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Weavy",
    "numberOfMethods": 125,
    "categories": [
      "developer_tools",
      "web_development",
      "framework",
      "web_apps"
    ],
    "index": "weavy/typescript",
    "language": "TypeScript",
    "link": "/sdk/weavy/typescript/",
    "developerDocumentation": "www.weavy.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/weavy/openapi.yaml"
  },
  {
    "name": "Weavy",
    "numberOfMethods": 125,
    "categories": [
      "developer_tools",
      "web_development",
      "framework",
      "web_apps"
    ],
    "index": "weavy/python",
    "language": "Python",
    "link": "/sdk/weavy/python/",
    "developerDocumentation": "www.weavy.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/weavy/openapi.yaml"
  },
  {
    "name": "Weavy",
    "numberOfMethods": 125,
    "categories": [
      "developer_tools",
      "web_development",
      "framework",
      "web_apps"
    ],
    "index": "weavy/java",
    "language": "Java",
    "link": "/sdk/weavy/java/",
    "developerDocumentation": "www.weavy.com/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/weavy/openapi.yaml"
  }
];

export default function Weavy() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Weavy"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/weavy/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/weavy/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/weavy/favicon.png"
      sdks={sdks}
      homepage="www.weavy.com/"
      companyKebabCase="weavy"
      categories={allCategories}
      metaDescription={`Weavy is a complete toolkit for developers to add collaboration, productivity, and community features to web and mobile apps at a fraction of the cost and time. Our API, SDKs and UI Kits for Chat, Files, and Feeds enable dev teams to increase functionality and connect users, while focusing on your core product.`}
    />
  )
}