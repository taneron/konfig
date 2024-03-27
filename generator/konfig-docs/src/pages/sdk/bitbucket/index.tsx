import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Bitbucket",
    "numberOfMethods": 318,
    "categories": [
      "version_control"
    ],
    "index": "bitbucket/typescript",
    "language": "TypeScript",
    "link": "/sdk/bitbucket/typescript/",
    "developerDocumentation": "developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bitbucket/openapi.yaml"
  },
  {
    "name": "Bitbucket",
    "numberOfMethods": 318,
    "categories": [
      "version_control"
    ],
    "index": "bitbucket/python",
    "language": "Python",
    "link": "/sdk/bitbucket/python/",
    "developerDocumentation": "developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bitbucket/openapi.yaml"
  },
  {
    "name": "Bitbucket",
    "numberOfMethods": 318,
    "categories": [
      "version_control"
    ],
    "index": "bitbucket/java",
    "language": "Java",
    "link": "/sdk/bitbucket/java/",
    "developerDocumentation": "developer.atlassian.com/cloud/bitbucket/rest/intro/#authentication",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/bitbucket/openapi.yaml"
  }
];

export default function Bitbucket() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Bitbucket"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bitbucket/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bitbucket/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/bitbucket/favicon.png"
      sdks={sdks}
      homepage="bitbucket.org/product"
      companyKebabCase="bitbucket"
      categories={allCategories}
      metaDescription={`Bitbucket offers Git and Mercurial based source code management and collaboration solutions in the cloud.`}
    />
  )
}