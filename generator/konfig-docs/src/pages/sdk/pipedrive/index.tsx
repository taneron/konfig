import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Pipedrive",
    "numberOfMethods": 275,
    "categories": [
      "crm",
      "sales"
    ],
    "index": "pipedrive/typescript",
    "language": "TypeScript",
    "link": "/sdk/pipedrive/typescript/",
    "developerDocumentation": "developers.pipedrive.com/docs/api/v1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pipedrive/openapi.yaml"
  },
  {
    "name": "Pipedrive",
    "numberOfMethods": 275,
    "categories": [
      "crm",
      "sales"
    ],
    "index": "pipedrive/python",
    "language": "Python",
    "link": "/sdk/pipedrive/python/",
    "developerDocumentation": "developers.pipedrive.com/docs/api/v1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pipedrive/openapi.yaml"
  },
  {
    "name": "Pipedrive",
    "numberOfMethods": 275,
    "categories": [
      "crm",
      "sales"
    ],
    "index": "pipedrive/java",
    "language": "Java",
    "link": "/sdk/pipedrive/java/",
    "developerDocumentation": "developers.pipedrive.com/docs/api/v1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pipedrive/openapi.yaml"
  }
];

export default function Pipedrive() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Pipedrive"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pipedrive/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pipedrive/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pipedrive/favicon.png"
      sdks={sdks}
      homepage="pipedrive.com"
      companyKebabCase="pipedrive"
      categories={allCategories}
      metaDescription={`Founded in 2010, Pipedrive is an easy and effective sales CRM that drives small business growth.

Today, Pipedrive is used by revenue teams at more than 100,000 companies worldwide. Pipedrive is headquartered in New York and has offices across Europe and the US.

The company is backed by majority holder Vista Equity Partners, Bessemer Venture Partners, Insight Partners, Atomico, and DTCP.

Learn more at www.pipedrive.com.`}
    />
  )
}