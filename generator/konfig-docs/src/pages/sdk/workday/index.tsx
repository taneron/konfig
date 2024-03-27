import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "PerformanceEnablement",
    "numberOfMethods": 23,
    "categories": [
      "hr"
    ],
    "index": "performance-enablement/typescript",
    "language": "TypeScript",
    "link": "/sdk/workday/performance-enablement/typescript/",
    "developerDocumentation": "community.workday.com/sites/default/files/file-hosting/restapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/performance-enablement/openapi.yaml"
  },
  {
    "name": "PerformanceEnablement",
    "numberOfMethods": 23,
    "categories": [
      "hr"
    ],
    "index": "performance-enablement/python",
    "language": "Python",
    "link": "/sdk/workday/performance-enablement/python/",
    "developerDocumentation": "community.workday.com/sites/default/files/file-hosting/restapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/performance-enablement/openapi.yaml"
  },
  {
    "name": "PerformanceEnablement",
    "numberOfMethods": 23,
    "categories": [
      "hr"
    ],
    "index": "performance-enablement/java",
    "language": "Java",
    "link": "/sdk/workday/performance-enablement/java/",
    "developerDocumentation": "community.workday.com/sites/default/files/file-hosting/restapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/performance-enablement/openapi.yaml"
  },
  {
    "name": "Person",
    "numberOfMethods": 112,
    "categories": [
      "hr"
    ],
    "index": "person/typescript",
    "language": "TypeScript",
    "link": "/sdk/workday/person/typescript/",
    "developerDocumentation": "community.workday.com/sites/default/files/file-hosting/restapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/person/openapi.yaml"
  },
  {
    "name": "Person",
    "numberOfMethods": 112,
    "categories": [
      "hr"
    ],
    "index": "person/python",
    "language": "Python",
    "link": "/sdk/workday/person/python/",
    "developerDocumentation": "community.workday.com/sites/default/files/file-hosting/restapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/person/openapi.yaml"
  },
  {
    "name": "Person",
    "numberOfMethods": 112,
    "categories": [
      "hr"
    ],
    "index": "person/java",
    "language": "Java",
    "link": "/sdk/workday/person/java/",
    "developerDocumentation": "community.workday.com/sites/default/files/file-hosting/restapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/person/openapi.yaml"
  },
  {
    "name": "Staffing",
    "numberOfMethods": 144,
    "categories": [
      "hr"
    ],
    "index": "staffing/typescript",
    "language": "TypeScript",
    "link": "/sdk/workday/staffing/typescript/",
    "developerDocumentation": "community.workday.com/sites/default/files/file-hosting/restapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/staffing/openapi.yaml"
  },
  {
    "name": "Staffing",
    "numberOfMethods": 144,
    "categories": [
      "hr"
    ],
    "index": "staffing/python",
    "language": "Python",
    "link": "/sdk/workday/staffing/python/",
    "developerDocumentation": "community.workday.com/sites/default/files/file-hosting/restapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/staffing/openapi.yaml"
  },
  {
    "name": "Staffing",
    "numberOfMethods": 144,
    "categories": [
      "hr"
    ],
    "index": "staffing/java",
    "language": "Java",
    "link": "/sdk/workday/staffing/java/",
    "developerDocumentation": "community.workday.com/sites/default/files/file-hosting/restapi",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/workday/staffing/openapi.yaml"
  }
];

export default function Workday() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Workday"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/performance-enablement/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/performance-enablement/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/workday/performance-enablement/favicon.png"
      sdks={sdks}
      homepage="workday.com"
      companyKebabCase="workday"
      categories={allCategories}
      metaDescription={`Workday is a leading provider of enterprise cloud applications for finance and human resources, helping customers adapt and thrive in a changing world. Workday applications for financial management, human resources, planning, spend management, and analytics are built with artificial intelligence and machine learning at the core to help organizations around the world embrace the future of work. Workday is used by more than 10,000 organizations around the world and across industries – from medium-sized businesses to more than 50% of the Fortune 500.`}
    />
  )
}