import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "MeasureOne",
    "numberOfMethods": 36,
    "categories": [
      "consumer_data_access_and_verification"
    ],
    "index": "measure-one/typescript",
    "language": "TypeScript",
    "link": "/sdk/measure-one/typescript/",
    "developerDocumentation": "docs.measureone.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/measureone/openapi.yaml"
  },
  {
    "name": "MeasureOne",
    "numberOfMethods": 36,
    "categories": [
      "consumer_data_access_and_verification"
    ],
    "index": "measure-one/python",
    "language": "Python",
    "link": "/sdk/measure-one/python/",
    "developerDocumentation": "docs.measureone.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/measureone/openapi.yaml"
  },
  {
    "name": "MeasureOne",
    "numberOfMethods": 36,
    "categories": [
      "consumer_data_access_and_verification"
    ],
    "index": "measure-one/java",
    "language": "Java",
    "link": "/sdk/measure-one/java/",
    "developerDocumentation": "docs.measureone.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/measureone/openapi.yaml"
  }
];

export default function MeasureOne() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="MeasureOne"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/measureone/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/measureone/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/measureone/favicon.png"
      sdks={sdks}
      homepage="measureone.com"
      companyKebabCase="measure-one"
      categories={allCategories}
      metaDescription={`Automate your business workflows and lower your costs with MeasureOne, the most comprehensive and accurate platform for income, employment, education, insurance verification, and more. Benefit from unmatched scale with 10,000+ data sources, breakthrough processing speeds, and best-in-class consumer-permissioned data and document upload workflows for optimal conversion. MeasureOne is committed to protecting customer data and maintains the highest security standards, including SOC2 compliance. With a variety of integration options from no-code to a universal API, your data needs are covered. For more information, visit measureone.com.`}
    />
  )
}