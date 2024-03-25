import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "ShipEngine",
    "numberOfMethods": 93,
    "categories": [
      "shipping_api",
      "multi_carrier",
      "logistics_provider",
      "shipping_integration",
      "usps",
      "ups",
      "dhl",
      "shipping_experts",
      "shipping",
      "ecommerce",
      "order_management",
      "international_shipping"
    ],
    "index": "ship-engine/typescript",
    "language": "TypeScript",
    "link": "/sdk/ship-engine/typescript/",
    "developerDocumentation": "www.shipengine.com/docs/getting-started/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shipengine/openapi.yaml"
  },
  {
    "name": "ShipEngine",
    "numberOfMethods": 93,
    "categories": [
      "shipping_api",
      "multi_carrier",
      "logistics_provider",
      "shipping_integration",
      "usps",
      "ups",
      "dhl",
      "shipping_experts",
      "shipping",
      "ecommerce",
      "order_management",
      "international_shipping"
    ],
    "index": "ship-engine/python",
    "language": "Python",
    "link": "/sdk/ship-engine/python/",
    "developerDocumentation": "www.shipengine.com/docs/getting-started/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shipengine/openapi.yaml"
  },
  {
    "name": "ShipEngine",
    "numberOfMethods": 93,
    "categories": [
      "shipping_api",
      "multi_carrier",
      "logistics_provider",
      "shipping_integration",
      "usps",
      "ups",
      "dhl",
      "shipping_experts",
      "shipping",
      "ecommerce",
      "order_management",
      "international_shipping"
    ],
    "index": "ship-engine/java",
    "language": "Java",
    "link": "/sdk/ship-engine/java/",
    "developerDocumentation": "www.shipengine.com/docs/getting-started/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/shipengine/openapi.yaml"
  }
];

export default function ShipEngine() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ShipEngine"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shipengine/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shipengine/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/shipengine/favicon.png"
      sdks={sdks}
      homepage="shipengine.com"
      companyKebabCase="ship-engine"
      categories={allCategories}
      metaDescription={`ShipEngine is the leading multi-carrier shipping API. Our highly efficient API helps brands, platforms and third-party logistics providers drive efficiency and cost savings through a network of 70-plus carriers worldwide. You can invest significant resources into building carrier and order source integrations. And, after those integrations are built, you can continue exhausting resources to maintain them. Many businesses choose this expensive, time-intensive path — only to realize the approach is unsustainable.

There's a better alternative: Integrate once with ShipEngine and never worry about building or maintaining integrations again. Spend your team's valuable time and money on projects that are core to growing your business, rather than dealing with legacy carrier integrations. In addition to the ROI you achieve after implementing ShipEngine, our shipping API also offers pre-negotiated, discounted rates through the USPS, UPS and DHL. Our users report that shipping-related tasks that once took minutes now take seconds, and that ShipEngine's features and capabilities help unlock thousands in savings.

Getting started with ShipEngine is easy.

Visit our API documentation and start building with our SDKs at shipengine.com/docs/

Schedule time to talk to one of our shipping experts by visiting shipengine.com/contact/

Or get a free API key and start building, no credit card required, at shipengine.com/signup/`}
    />
  )
}