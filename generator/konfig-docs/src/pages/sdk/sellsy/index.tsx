import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Sellsy",
    "numberOfMethods": 351,
    "categories": [
      "crm",
      "invoicing"
    ],
    "index": "sellsy/typescript",
    "language": "TypeScript",
    "link": "/sdk/sellsy/typescript/",
    "developerDocumentation": "api.sellsy.com/doc/v2/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sellsy/openapi.yaml"
  },
  {
    "name": "Sellsy",
    "numberOfMethods": 351,
    "categories": [
      "crm",
      "invoicing"
    ],
    "index": "sellsy/python",
    "language": "Python",
    "link": "/sdk/sellsy/python/",
    "developerDocumentation": "api.sellsy.com/doc/v2/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sellsy/openapi.yaml"
  },
  {
    "name": "Sellsy",
    "numberOfMethods": 351,
    "categories": [
      "crm",
      "invoicing"
    ],
    "index": "sellsy/java",
    "language": "Java",
    "link": "/sdk/sellsy/java/",
    "developerDocumentation": "api.sellsy.com/doc/v2/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/sellsy/openapi.yaml"
  }
];

export default function Sellsy() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Sellsy"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sellsy/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sellsy/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/sellsy/favicon.png"
      sdks={sdks}
      homepage="sellsy.com"
      companyKebabCase="sellsy"
      categories={allCategories}
      metaDescription={`Sellsy is a CRM, invoicing and pre-accounting suite for optimized business management and customer experience. A collaborative tool to give marketing, sales and administrative teams the means to be effective! 🚀

With 6,300 clients, Sellsy surrounds itself with almost 130 employees to carry out its projects. Sellsy remains, above all, a French company created by two entrepreneurs, Frédéric Coulais and Alain Mevellec, for entrepreneurs. Since its creation in 2009, Sellsy has placed innovation at the heart of its strategy, in order to offer companies simple, efficient and secure digital solutions.

👉 To learn more about Sellsy and its CRM suite, visit go.sellsy.com`}
    />
  )
}