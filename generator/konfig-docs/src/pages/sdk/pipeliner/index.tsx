import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Pipeliner",
    "numberOfMethods": 1264,
    "categories": [
      "crm",
      "automation",
      "sales"
    ],
    "index": "pipeliner/typescript",
    "language": "TypeScript",
    "link": "/sdk/pipeliner/typescript/",
    "developerDocumentation": "developers.pipelinersales.com/api-docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pipeliner/openapi.yaml"
  },
  {
    "name": "Pipeliner",
    "numberOfMethods": 1264,
    "categories": [
      "crm",
      "automation",
      "sales"
    ],
    "index": "pipeliner/python",
    "language": "Python",
    "link": "/sdk/pipeliner/python/",
    "developerDocumentation": "developers.pipelinersales.com/api-docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pipeliner/openapi.yaml"
  },
  {
    "name": "Pipeliner",
    "numberOfMethods": 1264,
    "categories": [
      "crm",
      "automation",
      "sales"
    ],
    "index": "pipeliner/java",
    "language": "Java",
    "link": "/sdk/pipeliner/java/",
    "developerDocumentation": "developers.pipelinersales.com/api-docs",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/pipeliner/openapi.yaml"
  }
];

export default function Pipeliner() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Pipeliner"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pipeliner/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pipeliner/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/pipeliner/favicon.png"
      sdks={sdks}
      homepage="pipelinersales.com"
      companyKebabCase="pipeliner"
      categories={allCategories}
      metaDescription={`Pipeliner has revolutionized the complexity of CRM with a simple, unique visual interface, a no-code workflow automation engine, and instant, dynamic insights and reporting.
 
There is no other CRM that provides sales reps and sales management with so many ways to view and analyze sales data, while delivering intelligent, system-generated insights.
 
Plus, thanks to our automation engine and easy integration with other systems (such as email, ERP, marketing), Pipeliner eliminates many of the manual and routine tasks that other systems impose on both sales reps and sales managers.
 
The Pipeliner CRM experience is so different from traditional CRM, which is why we drive the highest adoption rates, lower total cost of ownership, and rapid return on investment. Plus, with our quick onboarding and ease of learning to use and/or administer the system, there is little to no business disruption during deployment.
 
And because we are committed to supporting the professional development of salespeople, we have even integrated our online sales magazine Sales POP! into the product to provide unparalleled sales-related content at the point of impact.`}
    />
  )
}