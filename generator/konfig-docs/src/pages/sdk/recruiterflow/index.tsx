import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Recruiterflow",
    "numberOfMethods": 86,
    "categories": [
      "recruiting",
      "crm"
    ],
    "index": "recruiterflow/typescript",
    "language": "TypeScript",
    "link": "/sdk/recruiterflow/typescript/",
    "developerDocumentation": "recruiterflow.com/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/recruiterflow/openapi.yaml"
  },
  {
    "name": "Recruiterflow",
    "numberOfMethods": 86,
    "categories": [
      "recruiting",
      "crm"
    ],
    "index": "recruiterflow/python",
    "language": "Python",
    "link": "/sdk/recruiterflow/python/",
    "developerDocumentation": "recruiterflow.com/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/recruiterflow/openapi.yaml"
  },
  {
    "name": "Recruiterflow",
    "numberOfMethods": 86,
    "categories": [
      "recruiting",
      "crm"
    ],
    "index": "recruiterflow/java",
    "language": "Java",
    "link": "/sdk/recruiterflow/java/",
    "developerDocumentation": "recruiterflow.com/api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/recruiterflow/openapi.yaml"
  }
];

export default function Recruiterflow() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Recruiterflow"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/recruiterflow/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/recruiterflow/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/recruiterflow/favicon.png"
      sdks={sdks}
      homepage="recruiterflow.com"
      companyKebabCase="recruiterflow"
      categories={allCategories}
      metaDescription={`Recruiterflow is a dedicated Applicant Tracking, CRM and Recruiting platform for Ambitious Recruiting & executive search firms. What makes Recruiterflow different from other ATS and recruiting CRM products, is Recruiting automation, simplicity and ease of use.

It offers drag-and-drop workflows, email and text messaging,  API integrations, and ATS capabilities. It also encompasses advanced functionalities like candidate portals, company blocking, automatic email tracking, job board posting, built-in report analytics and more. With its G Suite and office365 integration, you can two-way sync emails to clients and candidates.

With Recruiterflow you can manage & maintain your candidate and client pipeline,  post jobs across multiple job boards and track candidates, write personalized well-crafted email sequences, deliver candidate experience without extra efforts and get a detailed insight about the performance of your team and recruiting effort.

You can review your recruiting strategy and performance in real time using Recruiterflow's real-time statistics. You can also build your own custom apps on Recruiterflow using open APIs.

Recruiterflow's user interface is designed to be effortlessly navigable, ensuring recruiters can quickly adapt to the platform without extensive training. You just need to sign in with your work email id and you are good to go. We provide a free trial of the product for 7 days.`}
    />
  )
}