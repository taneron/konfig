import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Homerun",
    "numberOfMethods": 11,
    "categories": [
      "recruiting",
      "job_postings",
      "applicant_tracking"
    ],
    "index": "homerun/typescript",
    "language": "TypeScript",
    "link": "/sdk/homerun/typescript/",
    "developerDocumentation": "developers.homerun.co",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/homerun/openapi.yaml"
  },
  {
    "name": "Homerun",
    "numberOfMethods": 11,
    "categories": [
      "recruiting",
      "job_postings",
      "applicant_tracking"
    ],
    "index": "homerun/python",
    "language": "Python",
    "link": "/sdk/homerun/python/",
    "developerDocumentation": "developers.homerun.co",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/homerun/openapi.yaml"
  },
  {
    "name": "Homerun",
    "numberOfMethods": 11,
    "categories": [
      "recruiting",
      "job_postings",
      "applicant_tracking"
    ],
    "index": "homerun/java",
    "language": "Java",
    "link": "/sdk/homerun/java/",
    "developerDocumentation": "developers.homerun.co",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/homerun/openapi.yaml"
  }
];

export default function Homerun() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Homerun"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/homerun/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/homerun/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/homerun/favicon.png"
      sdks={sdks}
      homepage="homerun.co"
      companyKebabCase="homerun"
      categories={allCategories}
      metaDescription={`Homerun is an intuitive recruitment software that helps companies create beautiful job postings, manage applications, and streamline their hiring process. With customizable templates and easy-to-use tools, Homerun simplifies the recruitment process for both employers and candidates, making it easier to find the right talent for the job.`}
    />
  )
}