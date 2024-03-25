import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "NocoDB",
    "numberOfMethods": 143,
    "categories": [
      "database",
      "airtable",
      "no_code",
      "developer_tools",
      "spreadsheet"
    ],
    "index": "noco-db/typescript",
    "language": "TypeScript",
    "link": "/sdk/noco-db/typescript/",
    "developerDocumentation": "docs.nocodb.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nocodb/openapi.yaml"
  },
  {
    "name": "NocoDB",
    "numberOfMethods": 143,
    "categories": [
      "database",
      "airtable",
      "no_code",
      "developer_tools",
      "spreadsheet"
    ],
    "index": "noco-db/python",
    "language": "Python",
    "link": "/sdk/noco-db/python/",
    "developerDocumentation": "docs.nocodb.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nocodb/openapi.yaml"
  },
  {
    "name": "NocoDB",
    "numberOfMethods": 143,
    "categories": [
      "database",
      "airtable",
      "no_code",
      "developer_tools",
      "spreadsheet"
    ],
    "index": "noco-db/java",
    "language": "Java",
    "link": "/sdk/noco-db/java/",
    "developerDocumentation": "docs.nocodb.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nocodb/openapi.yaml"
  }
];

export default function NocoDb() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="NocoDB"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nocodb/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nocodb/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nocodb/favicon.png"
      sdks={sdks}
      homepage="nocodb.com"
      companyKebabCase="noco-db"
      categories={allCategories}
      metaDescription={`Turn software consumers into software producers within each organisation.`}
    />
  )
}