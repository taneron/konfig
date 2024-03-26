import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Procurify",
    "numberOfMethods": 50,
    "categories": [
      "financial_services",
      "financial_technology",
      "ap_automation"
    ],
    "index": "procurify/typescript",
    "language": "TypeScript",
    "link": "/sdk/procurify/typescript/",
    "developerDocumentation": "developer.procurify.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/procurify/openapi.yaml"
  },
  {
    "name": "Procurify",
    "numberOfMethods": 50,
    "categories": [
      "financial_services",
      "financial_technology",
      "ap_automation"
    ],
    "index": "procurify/python",
    "language": "Python",
    "link": "/sdk/procurify/python/",
    "developerDocumentation": "developer.procurify.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/procurify/openapi.yaml"
  },
  {
    "name": "Procurify",
    "numberOfMethods": 50,
    "categories": [
      "financial_services",
      "financial_technology",
      "ap_automation"
    ],
    "index": "procurify/java",
    "language": "Java",
    "link": "/sdk/procurify/java/",
    "developerDocumentation": "developer.procurify.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/procurify/openapi.yaml"
  }
];

export default function Procurify() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Procurify"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/procurify/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/procurify/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/procurify/favicon.png"
      sdks={sdks}
      homepage="www.procurify.com/"
      companyKebabCase="procurify"
      categories={allCategories}
      metaDescription={`Procurify is the Intelligent Spend Management company. We're on a mission to give all organizations unprecedented visibility and control over their business spend. By bringing more spend under management in one procure-to-pay solution, our customers capture unified spend data that can be harnessed to realize millions of dollars in time and cost savings.

Named the #1 Purchasing Leader by G2, Procurify is trusted by hundreds of customers worldwide to manage over US$30 billion dollars of organizational spend. We integrate with major ERP accounting systems such as NetSuite and QuickBooks Online.

Take control of spend today.`}
    />
  )
}