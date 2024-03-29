import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Verifiable",
    "numberOfMethods": 168,
    "categories": [
      "health_data",
      "provider_network_management_platform"
    ],
    "index": "verifiable/typescript",
    "language": "TypeScript",
    "link": "/sdk/verifiable/typescript/",
    "developerDocumentation": "docs.discovery.verifiable.com/reference/current/overview/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/verifiable/openapi.yaml"
  },
  {
    "name": "Verifiable",
    "numberOfMethods": 168,
    "categories": [
      "health_data",
      "provider_network_management_platform"
    ],
    "index": "verifiable/python",
    "language": "Python",
    "link": "/sdk/verifiable/python/",
    "developerDocumentation": "docs.discovery.verifiable.com/reference/current/overview/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/verifiable/openapi.yaml"
  },
  {
    "name": "Verifiable",
    "numberOfMethods": 168,
    "categories": [
      "health_data",
      "provider_network_management_platform"
    ],
    "index": "verifiable/java",
    "language": "Java",
    "link": "/sdk/verifiable/java/",
    "developerDocumentation": "docs.discovery.verifiable.com/reference/current/overview/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/verifiable/openapi.yaml"
  }
];

export default function Verifiable() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Verifiable"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/verifiable/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/verifiable/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/verifiable/favicon.png"
      sdks={sdks}
      homepage="verifiable.com"
      companyKebabCase="verifiable"
      categories={allCategories}
      metaDescription={`Verifiable is an API-first, provider network management platform built to help healthcare provider and payer organizations speed up network operations, save costs and streamline the provider experience.

Verifiable industry-leading provider data infrastructure connects to thousands of primary sources to deliver real-time provider verification & monitoring to automate the credentialing process - resulting 78% faster turnaround times and millions in added revenue capture.

Verifiable works with innovative healthcare provider and payer organizations like Humana, Lyra Health, Talkspace, Modern Health, Wheel, Grow Therapy, and many others. Verifiable is a proud Y-Combinator company whose investors include Craft Ventures, Highland Capital Partners, Tiger Global, The Altman Fund, Struck Capital, Liquid2 Ventures, 137 Ventures, Cooley and Soma Capital.`}
    />
  )
}