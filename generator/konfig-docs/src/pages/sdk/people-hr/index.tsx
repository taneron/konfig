import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "PeopleHR",
    "numberOfMethods": 118,
    "categories": [
      "human_resources",
      "hr",
      "payroll"
    ],
    "index": "people-hr/typescript",
    "language": "TypeScript",
    "link": "/sdk/people-hr/typescript/",
    "developerDocumentation": "apidocs.peoplehr.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/peoplehr/openapi.yaml"
  },
  {
    "name": "PeopleHR",
    "numberOfMethods": 118,
    "categories": [
      "human_resources",
      "hr",
      "payroll"
    ],
    "index": "people-hr/python",
    "language": "Python",
    "link": "/sdk/people-hr/python/",
    "developerDocumentation": "apidocs.peoplehr.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/peoplehr/openapi.yaml"
  },
  {
    "name": "PeopleHR",
    "numberOfMethods": 118,
    "categories": [
      "human_resources",
      "hr",
      "payroll"
    ],
    "index": "people-hr/java",
    "language": "Java",
    "link": "/sdk/people-hr/java/",
    "developerDocumentation": "apidocs.peoplehr.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/peoplehr/openapi.yaml"
  }
];

export default function PeopleHr() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="PeopleHR"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peoplehr/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peoplehr/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/peoplehr/favicon.png"
      sdks={sdks}
      homepage="peoplehr.com"
      companyKebabCase="people-hr"
      categories={allCategories}
      metaDescription={`Access PeopleHR is part of The Access Group, and together we are supporting the world of HR. From supplying HRIS for all sized businesses, providing learning content, payroll systems, and much more.`}
    />
  )
}