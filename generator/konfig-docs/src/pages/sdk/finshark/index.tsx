import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Finshark",
    "numberOfMethods": 51,
    "categories": [
      "financial_services",
      "online_payments",
      "fintech",
      "payment_solutions",
      "payouts"
    ],
    "index": "finshark/typescript",
    "language": "TypeScript",
    "link": "/sdk/finshark/typescript/",
    "developerDocumentation": "oas.finshark.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/finshark/openapi.yaml"
  },
  {
    "name": "Finshark",
    "numberOfMethods": 51,
    "categories": [
      "financial_services",
      "online_payments",
      "fintech",
      "payment_solutions",
      "payouts"
    ],
    "index": "finshark/python",
    "language": "Python",
    "link": "/sdk/finshark/python/",
    "developerDocumentation": "oas.finshark.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/finshark/openapi.yaml"
  },
  {
    "name": "Finshark",
    "numberOfMethods": 51,
    "categories": [
      "financial_services",
      "online_payments",
      "fintech",
      "payment_solutions",
      "payouts"
    ],
    "index": "finshark/java",
    "language": "Java",
    "link": "/sdk/finshark/java/",
    "developerDocumentation": "oas.finshark.io/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/finshark/openapi.yaml"
  }
];

export default function Finshark() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Finshark"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finshark/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finshark/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/finshark/favicon.jpg"
      sdks={sdks}
      homepage="finshark.io/"
      companyKebabCase="finshark"
      categories={allCategories}
      metaDescription={`More and more non-financial companies are looking into new ways to boost revenue through embedded finance as the financial services industry has been disrupted. Through open banking, we remove any legacy friction within online payments and other financial processes to create new, instant paths for modern companies to fully own finance, deliver proprietary solutions and, ultimately, reach the success they desire.

𝗜𝗻𝘀𝘁𝗮𝗻𝘁 𝗽𝗮𝘆𝗺𝗲𝗻𝘁𝘀. | Let your customers pay with their bank. 
𝗜𝗻𝘀𝘁𝗮𝗻𝘁 𝗽𝗮𝘆𝗼𝘂𝘁𝘀. | Send funds to anyone from your business.
𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗶𝗻𝘀𝗶𝗴𝗵𝘁𝘀. | Holistic financial data to streamline your KYC checks.
𝗦𝘁𝗿𝗲𝗮𝗺𝘀. | All our products rolled into one single interface. Zero coding.

Finshark is a licensed Payment Institution by the Financial Supervisory Authority, authorised to provide payment services across EU/EES.`}
    />
  )
}