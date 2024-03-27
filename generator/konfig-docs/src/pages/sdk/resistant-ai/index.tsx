import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Resistant AI",
    "numberOfMethods": 11,
    "categories": [
      "ai",
      "fintech",
      "document_management",
      "fraud_prevention",
      "transaction_fraud",
      "cybercrime",
      "financial_fraud",
      "financial_crime",
      "document_forgery"
    ],
    "index": "resistant-ai/typescript",
    "language": "TypeScript",
    "link": "/sdk/resistant-ai/typescript/",
    "developerDocumentation": "documents.resistant.ai/docs/v2.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/resistant-ai/openapi.yaml"
  },
  {
    "name": "Resistant AI",
    "numberOfMethods": 11,
    "categories": [
      "ai",
      "fintech",
      "document_management",
      "fraud_prevention",
      "transaction_fraud",
      "cybercrime",
      "financial_fraud",
      "financial_crime",
      "document_forgery"
    ],
    "index": "resistant-ai/python",
    "language": "Python",
    "link": "/sdk/resistant-ai/python/",
    "developerDocumentation": "documents.resistant.ai/docs/v2.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/resistant-ai/openapi.yaml"
  },
  {
    "name": "Resistant AI",
    "numberOfMethods": 11,
    "categories": [
      "ai",
      "fintech",
      "document_management",
      "fraud_prevention",
      "transaction_fraud",
      "cybercrime",
      "financial_fraud",
      "financial_crime",
      "document_forgery"
    ],
    "index": "resistant-ai/java",
    "language": "Java",
    "link": "/sdk/resistant-ai/java/",
    "developerDocumentation": "documents.resistant.ai/docs/v2.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/resistant-ai/openapi.yaml"
  }
];

export default function ResistantAi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Resistant AI"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resistant-ai/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resistant-ai/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/resistant-ai/favicon.png"
      sdks={sdks}
      homepage="resistant.ai/"
      companyKebabCase="resistant-ai"
      categories={allCategories}
      metaDescription={`Resistant AI protects lenders and other fintechs from document fraud.

If you are part of a fraud, risk, operations, or compliance team in the fintech/finance industry, you can now improve your risk and fraud controls, by detecting fraudulent documents automatically, and without replacing your existing systems.

Detect and prevent document fraud in:
• KYB / Merchant Onboarding
• KYC / Customer Onboarding
• Digital Lending / Mortgage Underwriting
• Tenant Screening
• And more.

Some stats:
• 500+ detectors
• Less than 30 sec to get results
• 90% of manual reviews eliminated
• 80% of documents approved instantly
• 99% accuracy in document verdicts
• 50M+ documents analyzed

100+ patents. 100+ customers, including Payoneer, Habito, Planet42, and ComplyAdvantage. Digital Crime Fighter of the Year. Twice Winner of ACAMS'PwC Hackathon. Backed by GV, Index Ventures, Credo Ventures, Seedcamp, and more.`}
    />
  )
}