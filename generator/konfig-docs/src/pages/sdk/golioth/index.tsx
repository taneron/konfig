import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Golioth",
    "numberOfMethods": 106,
    "categories": [
      "iot",
      "hardware"
    ],
    "index": "golioth/typescript",
    "language": "TypeScript",
    "link": "/sdk/golioth/typescript/",
    "developerDocumentation": "docs.golioth.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/golioth/openapi.yaml"
  },
  {
    "name": "Golioth",
    "numberOfMethods": 106,
    "categories": [
      "iot",
      "hardware"
    ],
    "index": "golioth/python",
    "language": "Python",
    "link": "/sdk/golioth/python/",
    "developerDocumentation": "docs.golioth.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/golioth/openapi.yaml"
  },
  {
    "name": "Golioth",
    "numberOfMethods": 106,
    "categories": [
      "iot",
      "hardware"
    ],
    "index": "golioth/java",
    "language": "Java",
    "link": "/sdk/golioth/java/",
    "developerDocumentation": "docs.golioth.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/golioth/openapi.yaml"
  }
];

export default function Golioth() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Golioth"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/golioth/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/golioth/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/golioth/favicon.png"
      sdks={sdks}
      homepage="golioth.io"
      companyKebabCase="golioth"
      categories={allCategories}
      metaDescription={`Built IoT your way without the stress. Securely connect your MCU then capture and route sensor data anywhere with the Golioth SDK. Build secure, scalable, and innovative IoT in a fraction of the time.`}
    />
  )
}