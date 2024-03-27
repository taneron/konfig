import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "UKG",
    "numberOfMethods": 203,
    "categories": [
      "hr",
      "workforce_management",
      "payroll"
    ],
    "index": "ukg/typescript",
    "language": "TypeScript",
    "link": "/sdk/ukg/typescript/",
    "developerDocumentation": "developer.ukg.com/hcm/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ukg/openapi.yaml"
  },
  {
    "name": "UKG",
    "numberOfMethods": 203,
    "categories": [
      "hr",
      "workforce_management",
      "payroll"
    ],
    "index": "ukg/python",
    "language": "Python",
    "link": "/sdk/ukg/python/",
    "developerDocumentation": "developer.ukg.com/hcm/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ukg/openapi.yaml"
  },
  {
    "name": "UKG",
    "numberOfMethods": 203,
    "categories": [
      "hr",
      "workforce_management",
      "payroll"
    ],
    "index": "ukg/java",
    "language": "Java",
    "link": "/sdk/ukg/java/",
    "developerDocumentation": "developer.ukg.com/hcm/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ukg/openapi.yaml"
  }
];

export default function Ukg() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="UKG"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ukg/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ukg/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ukg/favicon.png"
      sdks={sdks}
      homepage="ukg.com"
      companyKebabCase="ukg"
      categories={allCategories}
      metaDescription={`At UKG, our purpose is people. As strong believers in the power of culture and belonging as the secret to success, we champion great workplaces and build lifelong partnerships with our customers to show what's possible when businesses invest in their people. One of the world's leading HCM cloud companies today, UKG and our Life-work Technology approach to HR, pay, time, and culture solutions for all people helps  80,000 organizations around the globe and across every industry anticipate and adapt to their employees' needs beyond just work. To learn more, visit ukg.com.

UKG Social Media Guidelines available at https://www.ukg.com/ukg-social-media-guidelines.`}
    />
  )
}