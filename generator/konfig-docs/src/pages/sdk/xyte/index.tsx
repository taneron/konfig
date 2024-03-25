import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Xyte",
    "numberOfMethods": 36,
    "categories": [
      "iot",
      "asset_management",
      "remote_support",
      "ecommerce",
      "subscription_management",
      "hardware"
    ],
    "index": "xyte/typescript",
    "language": "TypeScript",
    "link": "/sdk/xyte/typescript/",
    "developerDocumentation": "dev.xyte.io/reference/api-endpoints-1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xyte/openapi.yaml"
  },
  {
    "name": "Xyte",
    "numberOfMethods": 36,
    "categories": [
      "iot",
      "asset_management",
      "remote_support",
      "ecommerce",
      "subscription_management",
      "hardware"
    ],
    "index": "xyte/python",
    "language": "Python",
    "link": "/sdk/xyte/python/",
    "developerDocumentation": "dev.xyte.io/reference/api-endpoints-1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xyte/openapi.yaml"
  },
  {
    "name": "Xyte",
    "numberOfMethods": 36,
    "categories": [
      "iot",
      "asset_management",
      "remote_support",
      "ecommerce",
      "subscription_management",
      "hardware"
    ],
    "index": "xyte/java",
    "language": "Java",
    "link": "/sdk/xyte/java/",
    "developerDocumentation": "dev.xyte.io/reference/api-endpoints-1",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/xyte/openapi.yaml"
  }
];

export default function Xyte() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Xyte"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xyte/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xyte/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/xyte/favicon.png"
      sdks={sdks}
      homepage="xyte.io"
      companyKebabCase="xyte"
      categories={allCategories}
      metaDescription={`Xyte's Device Cloud is the first all-in-one servitization platform designed for device and hardware manufacturers to cloudify, operate, support, and commercialize their connected devices in a unified platform. 

We enable OEMs across different industries to navigate their digital journey, transforming their devices into integrated business solutions that combine hardware, software and services. The only business and commerce platform designed specifically for IoT device manufacturers, our fully-federated Device Cloud empowers OEMs to manage the complete lifecycle of their devices, from the minute they leave the warehouse through aftermarket sales to end customers.

Our out-of-the-box applications for asset management, remote support, ecommerce and subscription management, financing, and a powerful and secure back office suite help OEMs boost revenue and market growth, optimize operational efficiencies, gain instant insights into equipment and device performance, and develop sustainable customer relationships.`}
    />
  )
}