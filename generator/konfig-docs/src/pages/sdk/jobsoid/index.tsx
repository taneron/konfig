import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Jobsoid",
    "numberOfMethods": 6,
    "categories": [
      "applicant_tracking",
      "recruitment",
      "automation"
    ],
    "index": "jobsoid/typescript",
    "language": "TypeScript",
    "link": "/sdk/jobsoid/typescript/",
    "developerDocumentation": "apidocs.jobsoid.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jobsoid/openapi.yaml"
  },
  {
    "name": "Jobsoid",
    "numberOfMethods": 6,
    "categories": [
      "applicant_tracking",
      "recruitment",
      "automation"
    ],
    "index": "jobsoid/python",
    "language": "Python",
    "link": "/sdk/jobsoid/python/",
    "developerDocumentation": "apidocs.jobsoid.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jobsoid/openapi.yaml"
  },
  {
    "name": "Jobsoid",
    "numberOfMethods": 6,
    "categories": [
      "applicant_tracking",
      "recruitment",
      "automation"
    ],
    "index": "jobsoid/java",
    "language": "Java",
    "link": "/sdk/jobsoid/java/",
    "developerDocumentation": "apidocs.jobsoid.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jobsoid/openapi.yaml"
  }
];

export default function Jobsoid() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Jobsoid"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobsoid/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobsoid/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jobsoid/favicon.png"
      sdks={sdks}
      homepage="jobsoid.com"
      companyKebabCase="jobsoid"
      categories={allCategories}
      metaDescription={`Jobsoid is an Online Applicant Tracking System (ATS) which simplifies every step of the recruitment process in organizations, streamlining everything from sourcing potential candidates to hiring the right one. Jobsoid is the only recruitment software with the ability to help save your precious time, by automatically screening candidate applications and suggesting the best fit candidates for a certain job profile in your company. Instead of manually navigating through innumerable resumes, job applications and responses, and then trying to track and manage them with spreadsheets or emails, let Jobsoid take on the workload for you.
Our software is designed to make your life and work simpler, by automating most of the work involved in recruitment and candidate shortlisting, thereby freeing up your time for the actual selection and hiring process. Based on your organization's hiring needs, you can opt for a free plan that offers all the basics, or use one of our premium plans that are customized for a variety of different recruitment and hiring requirements. Jobsoid acts as your recruitment helper right from start to finish.
Post a job opening, send automated responses and bulk emails, filter through applications, schedule interviews, set up automated backups, and much more!`}
    />
  )
}