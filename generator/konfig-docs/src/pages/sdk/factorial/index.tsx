import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Factorial",
    "numberOfMethods": 161,
    "categories": [
      "hr",
      "time_management",
      "talent_management",
      "recruitment",
      "document_management",
      "hr_software",
      "human_resources",
      "hr_platform",
      "hr_solutions",
      "hr_tech",
      "hrms",
      "people_management_platform",
      "hr_systems",
      "payroll_services",
      "payroll_tax_services",
      "benefits_administration",
      "benefits",
      "employee_engagement",
      "insurance",
      "payroll"
    ],
    "index": "factorial/typescript",
    "language": "TypeScript",
    "link": "/sdk/factorial/typescript/",
    "developerDocumentation": "apidoc.factorialhr.com/reference/core-employees-v1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/factorial/openapi.yaml"
  },
  {
    "name": "Factorial",
    "numberOfMethods": 161,
    "categories": [
      "hr",
      "time_management",
      "talent_management",
      "recruitment",
      "document_management",
      "hr_software",
      "human_resources",
      "hr_platform",
      "hr_solutions",
      "hr_tech",
      "hrms",
      "people_management_platform",
      "hr_systems",
      "payroll_services",
      "payroll_tax_services",
      "benefits_administration",
      "benefits",
      "employee_engagement",
      "insurance",
      "payroll"
    ],
    "index": "factorial/python",
    "language": "Python",
    "link": "/sdk/factorial/python/",
    "developerDocumentation": "apidoc.factorialhr.com/reference/core-employees-v1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/factorial/openapi.yaml"
  },
  {
    "name": "Factorial",
    "numberOfMethods": 161,
    "categories": [
      "hr",
      "time_management",
      "talent_management",
      "recruitment",
      "document_management",
      "hr_software",
      "human_resources",
      "hr_platform",
      "hr_solutions",
      "hr_tech",
      "hrms",
      "people_management_platform",
      "hr_systems",
      "payroll_services",
      "payroll_tax_services",
      "benefits_administration",
      "benefits",
      "employee_engagement",
      "insurance",
      "payroll"
    ],
    "index": "factorial/java",
    "language": "Java",
    "link": "/sdk/factorial/java/",
    "developerDocumentation": "apidoc.factorialhr.com/reference/core-employees-v1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/factorial/openapi.yaml"
  }
];

export default function Factorial() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Factorial"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/factorial/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/factorial/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/factorial/favicon.png"
      sdks={sdks}
      homepage="factorialhr.com"
      companyKebabCase="factorial"
      categories={allCategories}
      metaDescription={`With over 8,000 clients worldwide, Factorial is one of the leading HR softwares for SMEs. We provide intuitive HR solutions that automate and centralize administrative tasks to provide insights and help your business run smoothly.

Factorial was founded in 2016 in Barcelona and experienced quick growth due to the fact that so many businesses face the same challenge: wasting time on never-ending manual tasks. A few years later, in 2022, Factorial became a Unicorn, propelling us forward to continue on our mission of providing your business with a one-stop-shop solution for all people processes.

Factorial offers solutions like time management, talent management, recruitment, expenses, analytics, document management to name a few. Our all-in-one, user friendly platform makes it easier for businesses to focus on matters, the people within it.`}
    />
  )
}