import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Layer2 Financial",
    "numberOfMethods": 59,
    "categories": [
      "fintech",
      "global_payments",
      "payment_services",
      "payments"
    ],
    "index": "layer-2-financial/typescript",
    "language": "TypeScript",
    "link": "/sdk/layer-2-financial/typescript/",
    "developerDocumentation": "docs.layer2financial.com/api-docs/openapi/layer2/overview/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/layer-2-financial/openapi.yaml"
  },
  {
    "name": "Layer2 Financial",
    "numberOfMethods": 59,
    "categories": [
      "fintech",
      "global_payments",
      "payment_services",
      "payments"
    ],
    "index": "layer-2-financial/python",
    "language": "Python",
    "link": "/sdk/layer-2-financial/python/",
    "developerDocumentation": "docs.layer2financial.com/api-docs/openapi/layer2/overview/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/layer-2-financial/openapi.yaml"
  },
  {
    "name": "Layer2 Financial",
    "numberOfMethods": 59,
    "categories": [
      "fintech",
      "global_payments",
      "payment_services",
      "payments"
    ],
    "index": "layer-2-financial/java",
    "language": "Java",
    "link": "/sdk/layer-2-financial/java/",
    "developerDocumentation": "docs.layer2financial.com/api-docs/openapi/layer2/overview/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/layer-2-financial/openapi.yaml"
  }
];

export default function Layer2Financial() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Layer2 Financial"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/layer-2-financial/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/layer-2-financial/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/layer-2-financial/favicon.png"
      sdks={sdks}
      homepage="layer2financial.com"
      companyKebabCase="layer-2-financial"
      categories={allCategories}
      metaDescription={`Layer2 is a next generation Payments Infrastructure. Our multi-partner platform is designed to provide payment processors, fintechs and neobanks with fully compliant Collections, PayOuts, FX, Cross Border payment services. With just one API, you can access all of these services seamlessly and easily.`}
    />
  )
}