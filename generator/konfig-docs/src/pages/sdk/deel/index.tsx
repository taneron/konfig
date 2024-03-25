import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Deel",
    "numberOfMethods": 153,
    "categories": [
      "hr",
      "payroll",
      "compliance",
      "global_payments",
      "multinational",
      "talent_acquisition_analytics",
      "payment_services",
      "independent_contractors",
      "remote_hiring",
      "remote_work",
      "hris"
    ],
    "index": "deel/typescript",
    "language": "TypeScript",
    "link": "/sdk/deel/typescript/",
    "developerDocumentation": "developer.deel.com/docs/welcome",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/deel/openapi.yaml"
  },
  {
    "name": "Deel",
    "numberOfMethods": 153,
    "categories": [
      "hr",
      "payroll",
      "compliance",
      "global_payments",
      "multinational",
      "talent_acquisition_analytics",
      "payment_services",
      "independent_contractors",
      "remote_hiring",
      "remote_work",
      "hris"
    ],
    "index": "deel/python",
    "language": "Python",
    "link": "/sdk/deel/python/",
    "developerDocumentation": "developer.deel.com/docs/welcome",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/deel/openapi.yaml"
  },
  {
    "name": "Deel",
    "numberOfMethods": 153,
    "categories": [
      "hr",
      "payroll",
      "compliance",
      "global_payments",
      "multinational",
      "talent_acquisition_analytics",
      "payment_services",
      "independent_contractors",
      "remote_hiring",
      "remote_work",
      "hris"
    ],
    "index": "deel/java",
    "language": "Java",
    "link": "/sdk/deel/java/",
    "developerDocumentation": "developer.deel.com/docs/welcome",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/deel/openapi.yaml"
  }
];

export default function Deel() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Deel"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/deel/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/deel/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/deel/favicon.png"
      sdks={sdks}
      homepage="deel.com"
      companyKebabCase="deel"
      categories={allCategories}
      metaDescription={`Deel is the all-in-one Global People Platform that simplifies and streamlines every aspect of managing an international workforce—from culture and onboarding, to local payroll and compliance. Our industry-leading suite of HR tools, payroll solutions, mobility services, and compliance expertise makes it possible for companies of all sizes to scale globally with unmatched speed and flexibility.

Today, Deel serves over 25,000+ companies worldwide—from small teams to publicly traded enterprise businesses.`}
    />
  )
}