import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Workable",
    "numberOfMethods": 54,
    "categories": [
      "recruiting",
      "hr",
      "applicant_tracking"
    ],
    "index": "workable/typescript",
    "language": "TypeScript",
    "link": "/sdk/workable/typescript/",
    "developerDocumentation": "workable.readme.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workable/openapi.yaml"
  },
  {
    "name": "Workable",
    "numberOfMethods": 54,
    "categories": [
      "recruiting",
      "hr",
      "applicant_tracking"
    ],
    "index": "workable/python",
    "language": "Python",
    "link": "/sdk/workable/python/",
    "developerDocumentation": "workable.readme.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workable/openapi.yaml"
  },
  {
    "name": "Workable",
    "numberOfMethods": 54,
    "categories": [
      "recruiting",
      "hr",
      "applicant_tracking"
    ],
    "index": "workable/java",
    "language": "Java",
    "link": "/sdk/workable/java/",
    "developerDocumentation": "workable.readme.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workable/openapi.yaml"
  }
];

export default function Workable() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Workable"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workable/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workable/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workable/favicon.png"
      sdks={sdks}
      homepage="workable.com"
      companyKebabCase="workable"
      categories={allCategories}
      metaDescription={`Workable develops a cloud-based recruitment platform for companies to post jobs, track applicants and schedule interviews.`}
    />
  )
}