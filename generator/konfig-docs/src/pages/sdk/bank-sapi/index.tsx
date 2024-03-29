import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "BANKSapi",
    "numberOfMethods": 57,
    "categories": [
      "finance",
      "open_banking",
      "fintech",
      "payments",
      "financial_technology",
      "banking",
      "banking_api"
    ],
    "index": "bank-sapi/typescript",
    "language": "TypeScript",
    "link": "/sdk/bank-sapi/typescript/",
    "developerDocumentation": "docs.banksapi.de/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/banksapi/openapi.yaml"
  },
  {
    "name": "BANKSapi",
    "numberOfMethods": 57,
    "categories": [
      "finance",
      "open_banking",
      "fintech",
      "payments",
      "financial_technology",
      "banking",
      "banking_api"
    ],
    "index": "bank-sapi/python",
    "language": "Python",
    "link": "/sdk/bank-sapi/python/",
    "developerDocumentation": "docs.banksapi.de/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/banksapi/openapi.yaml"
  },
  {
    "name": "BANKSapi",
    "numberOfMethods": 57,
    "categories": [
      "finance",
      "open_banking",
      "fintech",
      "payments",
      "financial_technology",
      "banking",
      "banking_api"
    ],
    "index": "bank-sapi/java",
    "language": "Java",
    "link": "/sdk/bank-sapi/java/",
    "developerDocumentation": "docs.banksapi.de/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/banksapi/openapi.yaml"
  }
];

export default function BankSapi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="BANKSapi"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/banksapi/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/banksapi/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/banksapi/favicon.png"
      sdks={sdks}
      homepage="banksapi.de/en/"
      companyKebabCase="bank-sapi"
      categories={allCategories}
      metaDescription={`We develop and operate REST-APIs and GUIs all around the topic of finance. As a specialised connectivity and payment provider, we are fully dedicated to the growth areas of Open Banking and Open Finance.

To make this possible, we provide account information and offer payment initiation services on our regulated and secure platform as a payment institution approved by the German authorities (BaFin). 

Due to our advanced, AI-based data analytics, we offer high-performance value-added services for a wide range of use cases (e.g. contract recognition, age verification, KYC light based on account data or affordability checks). 

In addition, we realise and operate your personal finance or business finance application as a web portal or mobile app cost-effectively with our front-end technology platform. 

With our SaaS and ASP solutions, we maximally reduce complexity for our clients from a multitude of industries (e.g. insurance companies, ERP & accounting, financial advisory) and enable new use cases and business models for them.

BANKSapi Technology GmbH is a venture of Finconomy AG.


Imprint: https://banksapi.de/impressum/`}
    />
  )
}