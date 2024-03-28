import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Banking",
    "numberOfMethods": 17,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "banking/typescript",
    "language": "TypeScript",
    "link": "/sdk/adatree/banking/typescript/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/banking/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/banking/openapi.yaml"
  },
  {
    "name": "Banking",
    "numberOfMethods": 17,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "banking/python",
    "language": "Python",
    "link": "/sdk/adatree/banking/python/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/banking/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/banking/openapi.yaml"
  },
  {
    "name": "Banking",
    "numberOfMethods": 17,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "banking/java",
    "language": "Java",
    "link": "/sdk/adatree/banking/java/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/banking/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/banking/openapi.yaml"
  },
  {
    "name": "Consent",
    "numberOfMethods": 10,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "consent/typescript",
    "language": "TypeScript",
    "link": "/sdk/adatree/consent/typescript/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/consent/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/consent/openapi.yaml"
  },
  {
    "name": "Consent",
    "numberOfMethods": 10,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "consent/python",
    "language": "Python",
    "link": "/sdk/adatree/consent/python/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/consent/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/consent/openapi.yaml"
  },
  {
    "name": "Consent",
    "numberOfMethods": 10,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "consent/java",
    "language": "Java",
    "link": "/sdk/adatree/consent/java/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/consent/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/consent/openapi.yaml"
  },
  {
    "name": "Data",
    "numberOfMethods": 13,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "data/typescript",
    "language": "TypeScript",
    "link": "/sdk/adatree/data/typescript/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/data/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/data/openapi.yaml"
  },
  {
    "name": "Data",
    "numberOfMethods": 13,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "data/python",
    "language": "Python",
    "link": "/sdk/adatree/data/python/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/data/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/data/openapi.yaml"
  },
  {
    "name": "Data",
    "numberOfMethods": 13,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "data/java",
    "language": "Java",
    "link": "/sdk/adatree/data/java/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/data/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/data/openapi.yaml"
  },
  {
    "name": "Insights",
    "numberOfMethods": 2,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "insights/typescript",
    "language": "TypeScript",
    "link": "/sdk/adatree/insights/typescript/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/insights/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/insights/openapi.yaml"
  },
  {
    "name": "Insights",
    "numberOfMethods": 2,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "insights/python",
    "language": "Python",
    "link": "/sdk/adatree/insights/python/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/insights/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/insights/openapi.yaml"
  },
  {
    "name": "Insights",
    "numberOfMethods": 2,
    "categories": [
      "open_banking",
      "fintech",
      "financial_services",
      "data_management",
      "compliance"
    ],
    "index": "insights/java",
    "language": "Java",
    "link": "/sdk/adatree/insights/java/",
    "developerDocumentation": "developer.adatree.com.au/docs/api/insights/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/adatree/insights/openapi.yaml"
  }
];

export default function Adatree() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Adatree"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/banking/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/banking/logo.jpg"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/adatree/banking/favicon.jpg"
      sdks={sdks}
      homepage="adatree.com.au/"
      companyKebabCase="adatree"
      categories={allCategories}
      metaDescription={`Adatree is a CDR technology intermediary. What does that mean? Simply put, we're the poles and wires connecting Banking, Finance, Energy and Telecommunications with Open Data. Our platform is ready for implementation with out-of-the-box functionality to have you connected to compliant data within a matter of weeks. The new age of data regulations are changing the way FinTech operates. Adatree is your on-ramp to stay plugged into the digital economy.

We work with organisations of all sizes and sectors to provide turnkey solutions. We've built a world-class CDR intermediary platform that is the most robust and flexible in market, ready to scale for any Open Data use case. If the scores of awards don't prove it, our list of satisfied clients ought to.

When you work with Adatree you're working with genuine CDR experts. We live and breathe this stuff, and strive to make it easy for other businesses to access consumer data with confidence.

We'll help you:
- Determine which CDR access model is best for your organisation
- Implement our fully-compliant white-labelled consent dashboard, tailored to your unique business needs
- Meet all compliance and legislative requirements including authentication and consent
- Leverage the full CDR ecosystem with every available API
- Accelerate your time-to-market to weeks (not months!) with our proven streamlined integration process
- Maintain consistent and secure connections to the Consumer Data Right network

We know the Consumer Data Right back-to-front and promise to walk you through every stage of the journey. Ready to take the first step?

Reach out to our team today: https://www.adatree.com.au/contact`}
    />
  )
}