import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "interviewstream",
    "numberOfMethods": 10,
    "categories": [
      "video",
      "hr_management",
      "scheduling",
      "recruitment_software"
    ],
    "index": "interviewstream/typescript",
    "language": "TypeScript",
    "link": "/sdk/interviewstream/typescript/",
    "developerDocumentation": "api.interviewstream.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/interviewstream/openapi.yaml"
  },
  {
    "name": "interviewstream",
    "numberOfMethods": 10,
    "categories": [
      "video",
      "hr_management",
      "scheduling",
      "recruitment_software"
    ],
    "index": "interviewstream/python",
    "language": "Python",
    "link": "/sdk/interviewstream/python/",
    "developerDocumentation": "api.interviewstream.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/interviewstream/openapi.yaml"
  },
  {
    "name": "interviewstream",
    "numberOfMethods": 10,
    "categories": [
      "video",
      "hr_management",
      "scheduling",
      "recruitment_software"
    ],
    "index": "interviewstream/java",
    "language": "Java",
    "link": "/sdk/interviewstream/java/",
    "developerDocumentation": "api.interviewstream.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/interviewstream/openapi.yaml"
  }
];

export default function Interviewstream() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="interviewstream"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/interviewstream/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/interviewstream/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/interviewstream/favicon.png"
      sdks={sdks}
      homepage="interviewstream.com"
      companyKebabCase="interviewstream"
      categories={allCategories}
      metaDescription={`interviewstream exists to simplify your hiring process through our video interviewing and scheduling platform. We help you cut time, improve candidate experience, and automate scheduling so you can focus on what matters most–your candidates.

interviewstream is dedicated to the success of more than 900 clients from emerging businesses, midsize companies, large enterprises, colleges, and universities.`}
    />
  )
}