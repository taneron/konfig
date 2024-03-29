import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Volt.io",
    "numberOfMethods": 20,
    "categories": [
      "global_payments",
      "online_payments",
      "financial_technology",
      "fintech",
      "payment_network",
      "real_time_payments",
      "payments"
    ],
    "index": "volt-io/typescript",
    "language": "TypeScript",
    "link": "/sdk/volt-io/typescript/",
    "developerDocumentation": "docs.volt.io/api-documentation/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/volt-io/openapi.yaml"
  },
  {
    "name": "Volt.io",
    "numberOfMethods": 20,
    "categories": [
      "global_payments",
      "online_payments",
      "financial_technology",
      "fintech",
      "payment_network",
      "real_time_payments",
      "payments"
    ],
    "index": "volt-io/python",
    "language": "Python",
    "link": "/sdk/volt-io/python/",
    "developerDocumentation": "docs.volt.io/api-documentation/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/volt-io/openapi.yaml"
  },
  {
    "name": "Volt.io",
    "numberOfMethods": 20,
    "categories": [
      "global_payments",
      "online_payments",
      "financial_technology",
      "fintech",
      "payment_network",
      "real_time_payments",
      "payments"
    ],
    "index": "volt-io/java",
    "language": "Java",
    "link": "/sdk/volt-io/java/",
    "developerDocumentation": "docs.volt.io/api-documentation/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/volt-io/openapi.yaml"
  }
];

export default function VoltIo() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Volt.io"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/volt-io/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/volt-io/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/volt-io/favicon.png"
      sdks={sdks}
      homepage="www.volt.io/"
      companyKebabCase="volt-io"
      categories={allCategories}
      metaDescription={`Volt is building the next generation payment network that is global, instant and interoperable - connecting real-time payments everywhere.

We're driving the shift to an era where real-time is the only time. This new era starts now.`}
    />
  )
}