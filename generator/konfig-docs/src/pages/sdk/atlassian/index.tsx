import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Jira",
    "numberOfMethods": 532,
    "categories": [
      "software_development",
      "collaboration",
      "project_management",
      "task_management",
      "productivity_software",
      "issue_tracker",
      "agile"
    ],
    "index": "jira/typescript",
    "language": "TypeScript",
    "link": "/sdk/atlassian/jira/typescript/",
    "developerDocumentation": "developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#about",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/atlassian/jira/openapi.yaml"
  },
  {
    "name": "Jira",
    "numberOfMethods": 532,
    "categories": [
      "software_development",
      "collaboration",
      "project_management",
      "task_management",
      "productivity_software",
      "issue_tracker",
      "agile"
    ],
    "index": "jira/python",
    "language": "Python",
    "link": "/sdk/atlassian/jira/python/",
    "developerDocumentation": "developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#about",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/atlassian/jira/openapi.yaml"
  },
  {
    "name": "Jira",
    "numberOfMethods": 532,
    "categories": [
      "software_development",
      "collaboration",
      "project_management",
      "task_management",
      "productivity_software",
      "issue_tracker",
      "agile"
    ],
    "index": "jira/java",
    "language": "Java",
    "link": "/sdk/atlassian/jira/java/",
    "developerDocumentation": "developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#about",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/atlassian/jira/openapi.yaml"
  }
];

export default function Atlassian() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Atlassian"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/atlassian/jira/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/atlassian/jira/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/atlassian/jira/favicon.png"
      sdks={sdks}
      homepage="www.atlassian.com/software/jira"
      companyKebabCase="atlassian"
      categories={allCategories}
      metaDescription={`We're a team of 7000+ Atlassians supporting an international group of 250,000+ customers. We build tools like Jira, Confluence, Bitbucket, and Trello to help teams across the world become more nimble, creative, and aligned.`}
    />
  )
}