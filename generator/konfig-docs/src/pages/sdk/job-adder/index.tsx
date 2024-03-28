import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "JobAdder",
    "numberOfMethods": 372,
    "categories": [
      "job_postings",
      "recruiting"
    ],
    "index": "job-adder/typescript",
    "language": "TypeScript",
    "link": "/sdk/job-adder/typescript/",
    "developerDocumentation": "api.jobadder.com/v2/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jobadder/openapi.yaml"
  },
  {
    "name": "JobAdder",
    "numberOfMethods": 372,
    "categories": [
      "job_postings",
      "recruiting"
    ],
    "index": "job-adder/python",
    "language": "Python",
    "link": "/sdk/job-adder/python/",
    "developerDocumentation": "api.jobadder.com/v2/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jobadder/openapi.yaml"
  },
  {
    "name": "JobAdder",
    "numberOfMethods": 372,
    "categories": [
      "job_postings",
      "recruiting"
    ],
    "index": "job-adder/java",
    "language": "Java",
    "link": "/sdk/job-adder/java/",
    "developerDocumentation": "api.jobadder.com/v2/docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jobadder/openapi.yaml"
  }
];

export default function JobAdder() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="JobAdder"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobadder/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobadder/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobadder/favicon.png"
      sdks={sdks}
      homepage="jobadder.com"
      companyKebabCase="job-adder"
      categories={allCategories}
      metaDescription={`Recruiting is hard work. Your recruitment software shouldn't be.

JobAdder is simplifying recruitment for recruitment agencies, staffing firms and HR and talent acquisition teams who want everything in one place without the complexity. Use it as a standalone platform or plug and play with 10+ add-ons, 100+ partners and 200+ job boards to create a custom recruitment management solution.

Join us today to discover why we have a CSAT score of 99% from 26,000+ users worldwide.`}
    />
  )
}