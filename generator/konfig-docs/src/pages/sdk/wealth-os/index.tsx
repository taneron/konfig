import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "WealthOS",
    "numberOfMethods": 77,
    "categories": [
      "financial_services",
      "wealth_management"
    ],
    "index": "wealth-os/typescript",
    "language": "TypeScript",
    "link": "/sdk/wealth-os/typescript/",
    "developerDocumentation": "wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wealthos/openapi.yaml"
  },
  {
    "name": "WealthOS",
    "numberOfMethods": 77,
    "categories": [
      "financial_services",
      "wealth_management"
    ],
    "index": "wealth-os/python",
    "language": "Python",
    "link": "/sdk/wealth-os/python/",
    "developerDocumentation": "wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wealthos/openapi.yaml"
  },
  {
    "name": "WealthOS",
    "numberOfMethods": 77,
    "categories": [
      "financial_services",
      "wealth_management"
    ],
    "index": "wealth-os/java",
    "language": "Java",
    "link": "/sdk/wealth-os/java/",
    "developerDocumentation": "wos-gb.sandbox.wealthos.cloud/admin/documentation",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/wealthos/openapi.yaml"
  }
];

export default function WealthOs() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="WealthOS"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wealthos/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wealthos/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/wealthos/favicon.png"
      sdks={sdks}
      homepage="wealthos.cloud/"
      companyKebabCase="wealth-os"
      categories={allCategories}
      metaDescription={`WealthOS is an API first, enterprise, core wealth management platform built to accelerate digital adoption and innovation within the wealth management industry.

By leveraging the latest advances in cloud-native technologies, WealthOS will offer the wealth management industry the upgraded technology infrastructure that's powering digital innovation in the financial services industry.

We plan to offer an extensive feature set coupled with pre-built integration to a market place of specialist service providers, allowing wealth managers to do more things on a single platform.

Our modular architecture allows you to use WealthOS fully to launch your entire digital value proposition, or in parts to complement an existing proposition. Our API first platform allows you to simply plug, and play.

 WealthOS dramatically reduces time to market for wealth management products and features while also reducing the total cost of ownership.`}
    />
  )
}