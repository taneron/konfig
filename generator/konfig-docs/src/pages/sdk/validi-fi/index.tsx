import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "BankLogin",
    "numberOfMethods": 8,
    "categories": [
      "financial_services",
      "fintech",
      "banking",
      "fraud_prevention"
    ],
    "index": "bank-login/typescript",
    "language": "TypeScript",
    "link": "/sdk/validi-fi/bank-login/typescript/",
    "developerDocumentation": "portal.ribbit.ai/BLP/Integration",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/validifi/bank-login/openapi.yaml"
  },
  {
    "name": "BankLogin",
    "numberOfMethods": 8,
    "categories": [
      "financial_services",
      "fintech",
      "banking",
      "fraud_prevention"
    ],
    "index": "bank-login/python",
    "language": "Python",
    "link": "/sdk/validi-fi/bank-login/python/",
    "developerDocumentation": "portal.ribbit.ai/BLP/Integration",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/validifi/bank-login/openapi.yaml"
  },
  {
    "name": "BankLogin",
    "numberOfMethods": 8,
    "categories": [
      "financial_services",
      "fintech",
      "banking",
      "fraud_prevention"
    ],
    "index": "bank-login/java",
    "language": "Java",
    "link": "/sdk/validi-fi/bank-login/java/",
    "developerDocumentation": "portal.ribbit.ai/BLP/Integration",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/validifi/bank-login/openapi.yaml"
  }
];

export default function ValidiFi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="ValidiFI"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/validifi/bank-login/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/validifi/bank-login/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/validifi/bank-login/favicon.png"
      sdks={sdks}
      homepage="validifi.com/"
      companyKebabCase="validi-fi"
      categories={allCategories}
      metaDescription={`ValidiFI, an analytics and technology company, connects bank account and payment insights to help companies in a variety of industries provide more confident, trustworthy and transparent transactions. Our differentiated data, sourced directly from banks, payment processors, and financial platforms helps companies to ensure compliance, mitigate risk, combat fraud, and confidently validate bank account and ownership. For more information, visit ValidiFI.com.`}
    />
  )
}