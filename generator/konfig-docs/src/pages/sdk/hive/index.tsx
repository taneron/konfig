import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Hive",
    "numberOfMethods": 75,
    "categories": [
      "project_management",
      "task_management",
      "time_tracking"
    ],
    "index": "hive/typescript",
    "language": "TypeScript",
    "link": "/sdk/hive/typescript/",
    "developerDocumentation": "developers.hive.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hive/openapi.yaml"
  },
  {
    "name": "Hive",
    "numberOfMethods": 75,
    "categories": [
      "project_management",
      "task_management",
      "time_tracking"
    ],
    "index": "hive/python",
    "language": "Python",
    "link": "/sdk/hive/python/",
    "developerDocumentation": "developers.hive.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hive/openapi.yaml"
  },
  {
    "name": "Hive",
    "numberOfMethods": 75,
    "categories": [
      "project_management",
      "task_management",
      "time_tracking"
    ],
    "index": "hive/java",
    "language": "Java",
    "link": "/sdk/hive/java/",
    "developerDocumentation": "developers.hive.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/hive/openapi.yaml"
  }
];

export default function Hive() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Hive"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hive/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hive/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/hive/favicon.png"
      sdks={sdks}
      homepage="hive.com"
      companyKebabCase="hive"
      categories={allCategories}
      metaDescription={`We help teams move faster. Hive's best-in-class project management platform includes all of the tools you need and want - and if not, we will build them for you. With flexible project views and endless customizations, Hive offers project management on your terms, success guaranteed. 

Hive is used by thousands of fast-moving teams to help with:
- Project management
- Integrating tools
- Resourcing
- Time-Tracking
- Proofing and approvals
- Note Taking 
- Task management
- Reporting and analytics 

Want to see what it's all about? Start using Hive for free: app.hive.com/join`}
    />
  )
}