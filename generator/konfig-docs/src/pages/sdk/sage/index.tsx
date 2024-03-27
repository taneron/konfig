import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Sage",
    "numberOfMethods": 53,
    "categories": [
      "finance",
      "payroll",
      "accounting",
      "construction",
      "real_estate"
    ],
    "index": "sage/typescript",
    "language": "TypeScript",
    "link": "/sdk/sage/typescript/",
    "developerDocumentation": "developer.sage.com/hr/reference/api-ref/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sage/openapi.yaml"
  },
  {
    "name": "Sage",
    "numberOfMethods": 53,
    "categories": [
      "finance",
      "payroll",
      "accounting",
      "construction",
      "real_estate"
    ],
    "index": "sage/python",
    "language": "Python",
    "link": "/sdk/sage/python/",
    "developerDocumentation": "developer.sage.com/hr/reference/api-ref/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sage/openapi.yaml"
  },
  {
    "name": "Sage",
    "numberOfMethods": 53,
    "categories": [
      "finance",
      "payroll",
      "accounting",
      "construction",
      "real_estate"
    ],
    "index": "sage/java",
    "language": "Java",
    "link": "/sdk/sage/java/",
    "developerDocumentation": "developer.sage.com/hr/reference/api-ref/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sage/openapi.yaml"
  }
];

export default function Sage() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Sage"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sage/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sage/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sage/favicon.png"
      sdks={sdks}
      homepage="sage.com"
      companyKebabCase="sage"
      categories={allCategories}
      metaDescription={`At Sage, we knock down barriers with information, insights, and tools to help your business flow.
 
We provide businesses with software and services that are simple and easy to use, as we work with you to give you that feeling of confidence. Customers trust our Payroll, HR, and Finance software to make business flow with ease. From our local network of experts to our ever-growing partnerships, we are on hand to give you all the insights you need to thrive. 💚`}
    />
  )
}