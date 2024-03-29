import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "LogisticsOS",
    "numberOfMethods": 12,
    "categories": [
      "logistics_provider",
      "route_optimization",
      "driver_dispatch",
      "delivery_management",
      "shipping_api",
      "optimization_engine",
      "delivery_planning",
      "fleet_management"
    ],
    "index": "logistics-os/typescript",
    "language": "TypeScript",
    "link": "/sdk/logistics-os/typescript/",
    "developerDocumentation": "www.logisticsos.com/docs?version=3",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/logisticsos/openapi.yaml"
  },
  {
    "name": "LogisticsOS",
    "numberOfMethods": 12,
    "categories": [
      "logistics_provider",
      "route_optimization",
      "driver_dispatch",
      "delivery_management",
      "shipping_api",
      "optimization_engine",
      "delivery_planning",
      "fleet_management"
    ],
    "index": "logistics-os/python",
    "language": "Python",
    "link": "/sdk/logistics-os/python/",
    "developerDocumentation": "www.logisticsos.com/docs?version=3",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/logisticsos/openapi.yaml"
  },
  {
    "name": "LogisticsOS",
    "numberOfMethods": 12,
    "categories": [
      "logistics_provider",
      "route_optimization",
      "driver_dispatch",
      "delivery_management",
      "shipping_api",
      "optimization_engine",
      "delivery_planning",
      "fleet_management"
    ],
    "index": "logistics-os/java",
    "language": "Java",
    "link": "/sdk/logistics-os/java/",
    "developerDocumentation": "www.logisticsos.com/docs?version=3",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/logisticsos/openapi.yaml"
  }
];

export default function LogisticsOs() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="LogisticsOS"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/logisticsos/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/logisticsos/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/logisticsos/favicon.png"
      sdks={sdks}
      homepage="www.logisticsos.com/"
      companyKebabCase="logistics-os"
      categories={allCategories}
      metaDescription={`We provide an algorithm REST API for companies in the last mile delivery space to dispatch drivers and optimize delivery sequences. Our customers range from traditional logistics companies with fleet management platforms to on-demand delivery companies with mobile apps and drivers. Clients can easily integrate our algorithm into their existing system to find optimal delivery plans. We are also planning to develop on-prem solutions so customers could deploy and host locally for flexibility and data security.

What's different about LogisticsOS?

There are many route optimization products in the market but there are three major flaws with them: They tend to make drivers traveling around the city, take hours to compute a result, and their solutions do not scale well with increasing volume.

We think customers deserve something better. So, we have built a generation leap route optimization engine that solves the above problems by,

Producing solutions with high route density. Drivers are now able to stay in one area.

Producing consistent results and scales linearly with increasing volume.

Significantly reduced computation time, I.e., hours to minutes, and minutes to seconds.

Further reduce the total travel time by another 10%-20%, which results in direct savings for delivery companies.`}
    />
  )
}