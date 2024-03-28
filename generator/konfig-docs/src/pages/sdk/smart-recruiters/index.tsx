import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "SmartRecruiters",
    "numberOfMethods": 233,
    "categories": [
      "recruiting",
      "hr",
      "applicant_tracking"
    ],
    "index": "smart-recruiters/typescript",
    "language": "TypeScript",
    "link": "/sdk/smart-recruiters/typescript/",
    "developerDocumentation": "developers.smartrecruiters.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/smartrecruiters/openapi.yaml"
  },
  {
    "name": "SmartRecruiters",
    "numberOfMethods": 233,
    "categories": [
      "recruiting",
      "hr",
      "applicant_tracking"
    ],
    "index": "smart-recruiters/python",
    "language": "Python",
    "link": "/sdk/smart-recruiters/python/",
    "developerDocumentation": "developers.smartrecruiters.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/smartrecruiters/openapi.yaml"
  },
  {
    "name": "SmartRecruiters",
    "numberOfMethods": 233,
    "categories": [
      "recruiting",
      "hr",
      "applicant_tracking"
    ],
    "index": "smart-recruiters/java",
    "language": "Java",
    "link": "/sdk/smart-recruiters/java/",
    "developerDocumentation": "developers.smartrecruiters.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/smartrecruiters/openapi.yaml"
  }
];

export default function SmartRecruiters() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="SmartRecruiters"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/smartrecruiters/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/smartrecruiters/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/smartrecruiters/favicon.png"
      sdks={sdks}
      homepage="smartrecruiters.com"
      companyKebabCase="smart-recruiters"
      categories={allCategories}
      metaDescription={`SmartRecruiters is a California-based cloud platform that offers solutions including talent sourcing, recruitment and applicant tracking for businesses.`}
    />
  )
}