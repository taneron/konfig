import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Checkout",
    "numberOfMethods": 8,
    "categories": [
      "payments",
      "financial_technology",
      "fintech",
      "online_payments",
      "financial_services"
    ],
    "index": "checkout/typescript",
    "language": "TypeScript",
    "link": "/sdk/pay-pal/checkout/typescript/",
    "developerDocumentation": "developer.paypal.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paypal/checkout/openapi.yaml"
  },
  {
    "name": "Checkout",
    "numberOfMethods": 8,
    "categories": [
      "payments",
      "financial_technology",
      "fintech",
      "online_payments",
      "financial_services"
    ],
    "index": "checkout/python",
    "language": "Python",
    "link": "/sdk/pay-pal/checkout/python/",
    "developerDocumentation": "developer.paypal.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paypal/checkout/openapi.yaml"
  },
  {
    "name": "Checkout",
    "numberOfMethods": 8,
    "categories": [
      "payments",
      "financial_technology",
      "fintech",
      "online_payments",
      "financial_services"
    ],
    "index": "checkout/java",
    "language": "Java",
    "link": "/sdk/pay-pal/checkout/java/",
    "developerDocumentation": "developer.paypal.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/paypal/checkout/openapi.yaml"
  }
];

export default function PayPal() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="PayPal"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/checkout/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/checkout/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/paypal/checkout/favicon.png"
      sdks={sdks}
      homepage="www.paypal.com/"
      companyKebabCase="pay-pal"
      categories={allCategories}
      metaDescription={`We're championing possibilities for all by making money fast, easy, and more enjoyable. Our hope is unlock opportunities for people in their everyday lives and empower the millions of people and businesses around the world who trust, rely, and use PayPal every day.

For support, visit the PayPal Help Center. https://payp.al/help

For employment opportunities, check out our job openings in the 'Jobs' tab. We're an equal opportunity employer that welcomes diversity, and offer generous benefits to help you thrive at work and in your free time.`}
    />
  )
}