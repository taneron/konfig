import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Ebury",
    "numberOfMethods": 57,
    "categories": [
      "global_payments"
    ],
    "index": "ebury/typescript",
    "language": "TypeScript",
    "link": "/sdk/ebury/typescript/",
    "developerDocumentation": "docs.ebury.io",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ebury/openapi.yaml"
  },
  {
    "name": "Ebury",
    "numberOfMethods": 57,
    "categories": [
      "global_payments"
    ],
    "index": "ebury/python",
    "language": "Python",
    "link": "/sdk/ebury/python/",
    "developerDocumentation": "docs.ebury.io",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ebury/openapi.yaml"
  },
  {
    "name": "Ebury",
    "numberOfMethods": 57,
    "categories": [
      "global_payments"
    ],
    "index": "ebury/java",
    "language": "Java",
    "link": "/sdk/ebury/java/",
    "developerDocumentation": "docs.ebury.io",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ebury/openapi.yaml"
  }
];

export default function Ebury() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Ebury"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ebury/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ebury/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ebury/favicon.png"
      sdks={sdks}
      homepage="ebury.com"
      companyKebabCase="ebury"
      categories={allCategories}
      metaDescription={`Ebury is a Fintech company specialised in international payments, collections, and foreign exchange services. It offers financial solutions aimed mainly at SMEs and midcaps. Ebury offers foreign exchange activity in over 130 currencies - for both major and emerging markets - as well as cash management strategies, trade finance, and foreign exchange risk management.

Founded in London in 2009 by Spanish engineers Juan Lobato and Salvador García, the company has grown its global market presence to a network of 31 offices in 21 countries and more than 1,300 employees.

Throughout its history, the company has received more than 20 international awards, including the Financial Times 1000 Europe's fastest-growing companies 2020 and The Sunday Times Tech Track 100. All these recognitions place Ebury as one of the leading European financial technology companies.

ebury.com`}
    />
  )
}