import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "ClayHR",
    "numberOfMethods": 143,
    "categories": [
      "hr",
      "human_resources",
      "hr_reporting",
      "hr_analytics",
      "employee_onboarding",
      "performance_reviews",
      "timesheets_leave_tracking",
      "attendance_management",
      "hr_automation"
    ],
    "index": "clay-hr/typescript",
    "language": "TypeScript",
    "link": "/sdk/clay-hr/typescript/",
    "developerDocumentation": "clayhr.readme.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clayhr/openapi.yaml"
  },
  {
    "name": "ClayHR",
    "numberOfMethods": 143,
    "categories": [
      "hr",
      "human_resources",
      "hr_reporting",
      "hr_analytics",
      "employee_onboarding",
      "performance_reviews",
      "timesheets_leave_tracking",
      "attendance_management",
      "hr_automation"
    ],
    "index": "clay-hr/python",
    "language": "Python",
    "link": "/sdk/clay-hr/python/",
    "developerDocumentation": "clayhr.readme.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clayhr/openapi.yaml"
  },
  {
    "name": "ClayHR",
    "numberOfMethods": 143,
    "categories": [
      "hr",
      "human_resources",
      "hr_reporting",
      "hr_analytics",
      "employee_onboarding",
      "performance_reviews",
      "timesheets_leave_tracking",
      "attendance_management",
      "hr_automation"
    ],
    "index": "clay-hr/java",
    "language": "Java",
    "link": "/sdk/clay-hr/java/",
    "developerDocumentation": "clayhr.readme.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/clayhr/openapi.yaml"
  }
];

export default function ClayHr() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ClayHR"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clayhr/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clayhr/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/clayhr/favicon.png"
      sdks={sdks}
      homepage="clayhr.com"
      companyKebabCase="clay-hr"
      categories={allCategories}
      metaDescription={`Gartner Cool Vendor for Human Capital Management, ClayHR is the AI powered HCM system for fast growing mid-sized enterprises.

With an open API, rich data integrations and highly configurable platform,
BizMerlinHR enables you to hire the best candidates, easily onboard your employees, guide their performance and train and retaining your best talent.

ClayHR was launched in 2013, and has customers spanning multiple industries across North America, South America, Europe, Africa and Asia Pacific.

Completely cloud based application available via your favorite web browsers and native iOS and Android mobile apps. 100+ integrations with JIRA, Salesforce, FreshBooks, QuickBooks, Slack and others.`}
    />
  )
}