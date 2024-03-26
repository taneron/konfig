import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Officient",
    "numberOfMethods": 98,
    "categories": [
      "hr"
    ],
    "index": "officient/typescript",
    "language": "TypeScript",
    "link": "/sdk/officient/typescript/",
    "developerDocumentation": "apidocs.officient.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/officient/openapi.yaml"
  },
  {
    "name": "Officient",
    "numberOfMethods": 98,
    "categories": [
      "hr"
    ],
    "index": "officient/python",
    "language": "Python",
    "link": "/sdk/officient/python/",
    "developerDocumentation": "apidocs.officient.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/officient/openapi.yaml"
  },
  {
    "name": "Officient",
    "numberOfMethods": 98,
    "categories": [
      "hr"
    ],
    "index": "officient/java",
    "language": "Java",
    "link": "/sdk/officient/java/",
    "developerDocumentation": "apidocs.officient.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/officient/openapi.yaml"
  }
];

export default function Officient() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Officient"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/officient/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/officient/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/officient/favicon.png"
      sdks={sdks}
      homepage="officient.io"
      companyKebabCase="officient"
      categories={allCategories}
      metaDescription={`Officient offers an intuitive HRIS which helps manage all personnel administration through our HR platform & personalized employee self-services. Manage payroll, company assets, contracts, days off, fleet, performance reviews and all employee data in one HR system. HR deserves great software and we're here to provide it.

We support our customers in transforming HR towards paperless administration and automating tedious workforce management tasks in the process. Our goal? Transform HR from an administrative, processing role, to a controlling role which fuels HR strategy across the organization.`}
    />
  )
}