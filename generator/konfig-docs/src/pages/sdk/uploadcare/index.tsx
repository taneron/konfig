import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Uploadcare",
    "numberOfMethods": 9,
    "categories": [
      "file_sharing",
      "cdn",
      "developer_tools",
      "file_management",
      "digital_media",
      "content_delivery_network"
    ],
    "index": "uploadcare/typescript",
    "language": "TypeScript",
    "link": "/sdk/uploadcare/typescript/",
    "developerDocumentation": "uploadcare.com/api-refs/upload-api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/uploadcare/openapi.yaml"
  },
  {
    "name": "Uploadcare",
    "numberOfMethods": 9,
    "categories": [
      "file_sharing",
      "cdn",
      "developer_tools",
      "file_management",
      "digital_media",
      "content_delivery_network"
    ],
    "index": "uploadcare/python",
    "language": "Python",
    "link": "/sdk/uploadcare/python/",
    "developerDocumentation": "uploadcare.com/api-refs/upload-api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/uploadcare/openapi.yaml"
  },
  {
    "name": "Uploadcare",
    "numberOfMethods": 9,
    "categories": [
      "file_sharing",
      "cdn",
      "developer_tools",
      "file_management",
      "digital_media",
      "content_delivery_network"
    ],
    "index": "uploadcare/java",
    "language": "Java",
    "link": "/sdk/uploadcare/java/",
    "developerDocumentation": "uploadcare.com/api-refs/upload-api/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/uploadcare/openapi.yaml"
  }
];

export default function Uploadcare() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Uploadcare"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadcare/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadcare/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/uploadcare/favicon.png"
      sdks={sdks}
      homepage="uploadcare.com/"
      companyKebabCase="uploadcare"
      categories={allCategories}
      metaDescription={`Uploadcare is file management platform and a CDN for user-generated content. It is a robust file API for uploading, managing, processing, rendering, optimizing, and delivering users' content.`}
    />
  )
}