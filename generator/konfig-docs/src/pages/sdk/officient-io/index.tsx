import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Officient.io",
    "numberOfMethods": 98,
    "categories": [
      "hr"
    ],
    "index": "officient-io/typescript",
    "language": "TypeScript",
    "link": "/sdk/officient-io/typescript/",
    "developerDocumentation": "apidocs.officient.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/officient-io/openapi.yaml"
  },
  {
    "name": "Officient.io",
    "numberOfMethods": 98,
    "categories": [
      "hr"
    ],
    "index": "officient-io/python",
    "language": "Python",
    "link": "/sdk/officient-io/python/",
    "developerDocumentation": "apidocs.officient.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/officient-io/openapi.yaml"
  },
  {
    "name": "Officient.io",
    "numberOfMethods": 98,
    "categories": [
      "hr"
    ],
    "index": "officient-io/java",
    "language": "Java",
    "link": "/sdk/officient-io/java/",
    "developerDocumentation": "apidocs.officient.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/officient-io/openapi.yaml"
  }
];

export default function OfficientIo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Officient.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/officient-io/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/officient-io/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/officient-io/favicon.png"
      sdks={sdks}
      homepage="officient.io"
      companyKebabCase="officient-io"
      categories={allCategories}
      metaDescription={`Officient offers an intuitive HRIS which helps manage all personnel administration through our HR platform & personalized employee self-services. Manage payroll, company assets, contracts, days off, fleet, performance reviews and all employee data in one HR system. HR deserves great software and we're here to provide it. 

We support our customers in transforming HR towards paperless administration and automating tedious workforce management tasks in the process. Our goal? Transform HR from an administrative, processing role, to a controlling role which fuels HR strategy across the organization.`}
    />
  )
}