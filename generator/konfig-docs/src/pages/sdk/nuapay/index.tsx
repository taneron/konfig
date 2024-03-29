import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Nuapay",
    "numberOfMethods": 12,
    "categories": [
      "finance",
      "banking",
      "payments",
      "fintech",
      "financial_technology",
      "b_2_b_payments",
      "payment_services",
      "financial_services"
    ],
    "index": "nuapay/typescript",
    "language": "TypeScript",
    "link": "/sdk/nuapay/typescript/",
    "developerDocumentation": "developer.nuapay.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nuapay/openapi.yaml"
  },
  {
    "name": "Nuapay",
    "numberOfMethods": 12,
    "categories": [
      "finance",
      "banking",
      "payments",
      "fintech",
      "financial_technology",
      "b_2_b_payments",
      "payment_services",
      "financial_services"
    ],
    "index": "nuapay/python",
    "language": "Python",
    "link": "/sdk/nuapay/python/",
    "developerDocumentation": "developer.nuapay.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nuapay/openapi.yaml"
  },
  {
    "name": "Nuapay",
    "numberOfMethods": 12,
    "categories": [
      "finance",
      "banking",
      "payments",
      "fintech",
      "financial_technology",
      "b_2_b_payments",
      "payment_services",
      "financial_services"
    ],
    "index": "nuapay/java",
    "language": "Java",
    "link": "/sdk/nuapay/java/",
    "developerDocumentation": "developer.nuapay.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/nuapay/openapi.yaml"
  }
];

export default function Nuapay() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Nuapay"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nuapay/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nuapay/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nuapay/favicon.png"
      sdks={sdks}
      homepage="nuapay.com/"
      companyKebabCase="nuapay"
      categories={allCategories}
      metaDescription={`Nuapay is a pioneer of Open Banking and the industry's leading Account-2-Account payment environment. We securely process over €42bn every year as an outsourcing provider to many of the world's leading Banks, PSPs and Corporates – we have worked tirelessly to reinvent what's possible from a modern banking and payment solution. Today, we offer partners a fully comprehensive, integrated payment solution that removes all traditional banking inefficiencies and unnecessary costs, saving time, money and resources at every turn. This is banking as it should be.

Our Vision

For over 20 years, Nuapay has been at the forefront of Account-to-Account payments and the Open Banking movement. Through our market-leading payments and accounts platform, partner ecosystem and focus on quality we've helped thousands of clients (banks, payment providers, software platforms and businesses) deliver innovative, profitable and seamless payment services. Nuapay's flexible, secure approach will cover all your needs, underpinned by our 20 year heritage.

Our Mission

Here at Nuapay we know that perfecting the payments experience brings transformational benefits to customers and the businesses who serve them. We believe Account-to-Account payments and Open Banking can achieve that better than any other option – and are, together, the future of payments.

www.nuapay.com / @NUAPAY

Get in touch with us here: www.nuapay.com/contact/`}
    />
  )
}