import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Paycor",
    "numberOfMethods": 109,
    "categories": [
      "hr",
      "payroll",
      "workforce_planning",
      "talent_acquisition_analytics",
      "benefits",
      "benefits_administration",
      "time_attendance",
      "people",
      "strategic_hr",
      "time",
      "attendance_solutions",
      "tax_filing",
      "compliance",
      "onboarding"
    ],
    "index": "paycor/typescript",
    "language": "TypeScript",
    "link": "/sdk/paycor/typescript/",
    "developerDocumentation": "developers.paycor.com/explore",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paycor/openapi.yaml"
  },
  {
    "name": "Paycor",
    "numberOfMethods": 109,
    "categories": [
      "hr",
      "payroll",
      "workforce_planning",
      "talent_acquisition_analytics",
      "benefits",
      "benefits_administration",
      "time_attendance",
      "people",
      "strategic_hr",
      "time",
      "attendance_solutions",
      "tax_filing",
      "compliance",
      "onboarding"
    ],
    "index": "paycor/python",
    "language": "Python",
    "link": "/sdk/paycor/python/",
    "developerDocumentation": "developers.paycor.com/explore",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paycor/openapi.yaml"
  },
  {
    "name": "Paycor",
    "numberOfMethods": 109,
    "categories": [
      "hr",
      "payroll",
      "workforce_planning",
      "talent_acquisition_analytics",
      "benefits",
      "benefits_administration",
      "time_attendance",
      "people",
      "strategic_hr",
      "time",
      "attendance_solutions",
      "tax_filing",
      "compliance",
      "onboarding"
    ],
    "index": "paycor/java",
    "language": "Java",
    "link": "/sdk/paycor/java/",
    "developerDocumentation": "developers.paycor.com/explore",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paycor/openapi.yaml"
  }
];

export default function Paycor() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Paycor"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paycor/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paycor/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paycor/favicon.png"
      sdks={sdks}
      homepage="paycor.com"
      companyKebabCase="paycor"
      categories={allCategories}
      metaDescription={`Paycor is a leading provider of comprehensive HR and payroll solutions for businesses of all sizes. With a focus on simplifying HR processes and improving employee management, Paycor offers a range of services including payroll processing, time and attendance tracking, benefits administration, and HR compliance tools. Trusted by thousands of organizations, Paycor helps streamline HR operations and empower companies to focus on their business growth.`}
    />
  )
}