import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Teamwork",
    "numberOfMethods": 188,
    "categories": [
      "project_management",
      "collaboration"
    ],
    "index": "teamwork/typescript",
    "language": "TypeScript",
    "link": "/sdk/teamwork/typescript/",
    "developerDocumentation": "apidocs.teamwork.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/teamwork/openapi.yaml"
  },
  {
    "name": "Teamwork",
    "numberOfMethods": 188,
    "categories": [
      "project_management",
      "collaboration"
    ],
    "index": "teamwork/python",
    "language": "Python",
    "link": "/sdk/teamwork/python/",
    "developerDocumentation": "apidocs.teamwork.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/teamwork/openapi.yaml"
  },
  {
    "name": "Teamwork",
    "numberOfMethods": 188,
    "categories": [
      "project_management",
      "collaboration"
    ],
    "index": "teamwork/java",
    "language": "Java",
    "link": "/sdk/teamwork/java/",
    "developerDocumentation": "apidocs.teamwork.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/teamwork/openapi.yaml"
  }
];

export default function Teamwork() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Teamwork"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/teamwork/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/teamwork/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/teamwork/favicon.png"
      sdks={sdks}
      homepage="teamwork.com"
      companyKebabCase="teamwork"
      categories={allCategories}
      metaDescription={`Teamwork.com is the only project management platform built specifically for client work. Deliver work on time and on budget, eliminate client chaos, and understand profitability, all in one platform.

Headquartered in Cork, Ireland and founded by a team who have run an agency before, Teamwork has more than 20,000 customers around the world with a global team of over 350 employees.

Learn more at teamwork.com.`}
    />
  )
}