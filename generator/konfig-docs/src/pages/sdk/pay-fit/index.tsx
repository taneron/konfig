import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "PayFit",
    "numberOfMethods": 19,
    "categories": [
      "hr",
      "payroll_management_system",
      "payroll"
    ],
    "index": "pay-fit/typescript",
    "language": "TypeScript",
    "link": "/sdk/pay-fit/typescript/",
    "developerDocumentation": "developers.payfit.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/payfit/openapi.yaml"
  },
  {
    "name": "PayFit",
    "numberOfMethods": 19,
    "categories": [
      "hr",
      "payroll_management_system",
      "payroll"
    ],
    "index": "pay-fit/python",
    "language": "Python",
    "link": "/sdk/pay-fit/python/",
    "developerDocumentation": "developers.payfit.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/payfit/openapi.yaml"
  },
  {
    "name": "PayFit",
    "numberOfMethods": 19,
    "categories": [
      "hr",
      "payroll_management_system",
      "payroll"
    ],
    "index": "pay-fit/java",
    "language": "Java",
    "link": "/sdk/pay-fit/java/",
    "developerDocumentation": "developers.payfit.io/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/payfit/openapi.yaml"
  }
];

export default function PayFit() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="PayFit"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfit/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfit/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/payfit/favicon.png"
      sdks={sdks}
      homepage="payfit.com"
      companyKebabCase="pay-fit"
      categories={allCategories}
      metaDescription={`PayFit simplifies payroll management and HR processes for SMBs.

We have built a fast, intuitive and automated SaaS solution to help business owners and HR professionals save time and money allowing them to refocus and what really matters: their employees.

We have set ourselves a mission to support the digital transformation of HR management through our ever growing range of product features and services.

We have a strong presence in France since 2015 and have been quickly growing in Spain and the UK. More than 6500 companies such as Biocoop, Heetch or Gymlib to name a few already trust us. Over 700 PayFiters have already joined the adventure and we have raised 254M€ to keep growing.`}
    />
  )
}