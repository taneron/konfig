import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "WorkforceNow",
    "numberOfMethods": 7,
    "categories": [
      "hr",
      "payroll",
      "time_management",
      "benefits",
      "human_capital_management",
      "hr_bpo",
      "payroll_tax_services",
      "talent_management",
      "human_resource_management",
      "benefits_administration",
      "time_attendance",
      "payroll_services",
      "professional_services",
      "erp"
    ],
    "index": "workforce-now/typescript",
    "language": "TypeScript",
    "link": "/sdk/adp/workforce-now/typescript/",
    "developerDocumentation": "developers.adp.com/build/api-explorer/hcm-offrg-wfn",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adp/workforce-now/openapi.yaml"
  },
  {
    "name": "WorkforceNow",
    "numberOfMethods": 7,
    "categories": [
      "hr",
      "payroll",
      "time_management",
      "benefits",
      "human_capital_management",
      "hr_bpo",
      "payroll_tax_services",
      "talent_management",
      "human_resource_management",
      "benefits_administration",
      "time_attendance",
      "payroll_services",
      "professional_services",
      "erp"
    ],
    "index": "workforce-now/python",
    "language": "Python",
    "link": "/sdk/adp/workforce-now/python/",
    "developerDocumentation": "developers.adp.com/build/api-explorer/hcm-offrg-wfn",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adp/workforce-now/openapi.yaml"
  },
  {
    "name": "WorkforceNow",
    "numberOfMethods": 7,
    "categories": [
      "hr",
      "payroll",
      "time_management",
      "benefits",
      "human_capital_management",
      "hr_bpo",
      "payroll_tax_services",
      "talent_management",
      "human_resource_management",
      "benefits_administration",
      "time_attendance",
      "payroll_services",
      "professional_services",
      "erp"
    ],
    "index": "workforce-now/java",
    "language": "Java",
    "link": "/sdk/adp/workforce-now/java/",
    "developerDocumentation": "developers.adp.com/build/api-explorer/hcm-offrg-wfn",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adp/workforce-now/openapi.yaml"
  }
];

export default function Adp() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ADP"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adp/workforce-now/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adp/workforce-now/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adp/workforce-now/favicon.png"
      sdks={sdks}
      homepage="adp.com"
      companyKebabCase="adp"
      categories={allCategories}
      metaDescription={`Designing better ways to work through cutting-edge products, premium services and exceptional experiences that enable people to reach their full potential. HR, Talent, Time Management, Benefits and Payroll. Informed by data and designed for people.`}
    />
  )
}