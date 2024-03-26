import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Keka HR",
    "numberOfMethods": 73,
    "categories": [
      "hr",
      "human_resources",
      "human_resource_management_system",
      "payroll_management_system",
      "leave_management_system",
      "attendance_management_system",
      "talent_management_system",
      "human_resource_automation",
      "expense_management_system",
      "remote_workforce_management_system",
      "timesheet_management_system",
      "workforce_management"
    ],
    "index": "keka-hr/typescript",
    "language": "TypeScript",
    "link": "/sdk/keka-hr/typescript/",
    "developerDocumentation": "developers.keka.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/keka-hr/openapi.yaml"
  },
  {
    "name": "Keka HR",
    "numberOfMethods": 73,
    "categories": [
      "hr",
      "human_resources",
      "human_resource_management_system",
      "payroll_management_system",
      "leave_management_system",
      "attendance_management_system",
      "talent_management_system",
      "human_resource_automation",
      "expense_management_system",
      "remote_workforce_management_system",
      "timesheet_management_system",
      "workforce_management"
    ],
    "index": "keka-hr/python",
    "language": "Python",
    "link": "/sdk/keka-hr/python/",
    "developerDocumentation": "developers.keka.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/keka-hr/openapi.yaml"
  },
  {
    "name": "Keka HR",
    "numberOfMethods": 73,
    "categories": [
      "hr",
      "human_resources",
      "human_resource_management_system",
      "payroll_management_system",
      "leave_management_system",
      "attendance_management_system",
      "talent_management_system",
      "human_resource_automation",
      "expense_management_system",
      "remote_workforce_management_system",
      "timesheet_management_system",
      "workforce_management"
    ],
    "index": "keka-hr/java",
    "language": "Java",
    "link": "/sdk/keka-hr/java/",
    "developerDocumentation": "developers.keka.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/keka-hr/openapi.yaml"
  }
];

export default function KekaHr() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Keka HR"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keka-hr/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keka-hr/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/keka-hr/favicon.png"
      sdks={sdks}
      homepage="keka.com"
      companyKebabCase="keka-hr"
      categories={allCategories}
      metaDescription={`Here's our story,

It all began with the frustration of using software that sucks. Prior to starting Keka, our core team was a 100 person business that needed an easy to use software for managing employees. We looked everywhere and all we found were software that was lousy and hard to use. We felt SME businesses in India deserved something better. Something awesome actually! 

Thus emerged Keka!`}
    />
  )
}