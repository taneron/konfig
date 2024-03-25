import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Breezy HR",
    "numberOfMethods": 50,
    "categories": [
      "talent_acquisition_analytics",
      "recruiting"
    ],
    "index": "breezy-hr/typescript",
    "language": "TypeScript",
    "link": "/sdk/breezy-hr/typescript/",
    "developerDocumentation": "developer.breezy.hr/reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/breezy-hr/openapi.yaml"
  },
  {
    "name": "Breezy HR",
    "numberOfMethods": 50,
    "categories": [
      "talent_acquisition_analytics",
      "recruiting"
    ],
    "index": "breezy-hr/python",
    "language": "Python",
    "link": "/sdk/breezy-hr/python/",
    "developerDocumentation": "developer.breezy.hr/reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/breezy-hr/openapi.yaml"
  },
  {
    "name": "Breezy HR",
    "numberOfMethods": 50,
    "categories": [
      "talent_acquisition_analytics",
      "recruiting"
    ],
    "index": "breezy-hr/java",
    "language": "Java",
    "link": "/sdk/breezy-hr/java/",
    "developerDocumentation": "developer.breezy.hr/reference/overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/breezy-hr/openapi.yaml"
  }
];

export default function BreezyHr() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Breezy HR"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/breezy-hr/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/breezy-hr/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/breezy-hr/favicon.png"
      sdks={sdks}
      homepage="breezy.hr"
      companyKebabCase="breezy-hr"
      categories={allCategories}
      metaDescription={`We specialize in sourcing high quality pilots to meet the needs of 135 operators. Our team of highly skilled pilots and aviation experts seamlessly integrates with your operation to quickly provide you with world-class pilot candidates from our extensive network. All candidates are fully vetted and evaluated by Hire Up prior to being recommended to you.`}
    />
  )
}