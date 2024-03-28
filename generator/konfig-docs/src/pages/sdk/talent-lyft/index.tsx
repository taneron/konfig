import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Customers",
    "numberOfMethods": 66,
    "categories": [
      "recruiting",
      "hr",
      "talent_management",
      "applicant_tracking",
      "job_postings"
    ],
    "index": "customers/typescript",
    "language": "TypeScript",
    "link": "/sdk/talent-lyft/customers/typescript/",
    "developerDocumentation": "developers.talentlyft.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/talentlyft/customers/openapi.yaml"
  },
  {
    "name": "Customers",
    "numberOfMethods": 66,
    "categories": [
      "recruiting",
      "hr",
      "talent_management",
      "applicant_tracking",
      "job_postings"
    ],
    "index": "customers/python",
    "language": "Python",
    "link": "/sdk/talent-lyft/customers/python/",
    "developerDocumentation": "developers.talentlyft.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/talentlyft/customers/openapi.yaml"
  },
  {
    "name": "Customers",
    "numberOfMethods": 66,
    "categories": [
      "recruiting",
      "hr",
      "talent_management",
      "applicant_tracking",
      "job_postings"
    ],
    "index": "customers/java",
    "language": "Java",
    "link": "/sdk/talent-lyft/customers/java/",
    "developerDocumentation": "developers.talentlyft.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/talentlyft/customers/openapi.yaml"
  }
];

export default function TalentLyft() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="TalentLyft"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/talentlyft/customers/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/talentlyft/customers/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/talentlyft/customers/favicon.png"
      sdks={sdks}
      homepage="talentlyft.com"
      companyKebabCase="talent-lyft"
      categories={allCategories}
      metaDescription={`TalentLyft is an innovative recruitment software that streamlines the hiring process, from sourcing candidates to applicant tracking. It offers powerful tools for recruiters and HR professionals to attract, evaluate, and hire top talent efficiently. With features like job posting, candidate management, and customizable workflows, TalentLyft helps companies build their dream teams with ease.`}
    />
  )
}