import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Surfly",
    "numberOfMethods": 32,
    "categories": [
      "customer_communication",
      "video",
      "collaboration",
      "esignature",
      "document_management",
      "communication",
      "remote",
      "real_time_collaboration"
    ],
    "index": "surfly/typescript",
    "language": "TypeScript",
    "link": "/sdk/surfly/typescript/",
    "developerDocumentation": "docs.surfly.com/api/v2/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/surfly/openapi.yaml"
  },
  {
    "name": "Surfly",
    "numberOfMethods": 32,
    "categories": [
      "customer_communication",
      "video",
      "collaboration",
      "esignature",
      "document_management",
      "communication",
      "remote",
      "real_time_collaboration"
    ],
    "index": "surfly/python",
    "language": "Python",
    "link": "/sdk/surfly/python/",
    "developerDocumentation": "docs.surfly.com/api/v2/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/surfly/openapi.yaml"
  },
  {
    "name": "Surfly",
    "numberOfMethods": 32,
    "categories": [
      "customer_communication",
      "video",
      "collaboration",
      "esignature",
      "document_management",
      "communication",
      "remote",
      "real_time_collaboration"
    ],
    "index": "surfly/java",
    "language": "Java",
    "link": "/sdk/surfly/java/",
    "developerDocumentation": "docs.surfly.com/api/v2/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/surfly/openapi.yaml"
  }
];

export default function Surfly() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Surfly"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/surfly/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/surfly/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/surfly/favicon.png"
      sdks={sdks}
      homepage="www.surfly.com/"
      companyKebabCase="surfly"
      categories={allCategories}
      metaDescription={`Surfly is a high-growth interaction middleware player that can share, secure, and transform web experiences. We're on a mission to create (and be) the next wave of online interactions, currently powering online in-person experiences for 200,000+ users worldwide.

Our solution enables anyone to add a collaborative layer to any web application without having to modify or change the original application. Leading organizations use Surfly to accelerate remote deal-closing, collaborate better with seamless functionality, and engage with their own customers in a more efficient and meaningful way. 

Backed by powerful technology and API-first approach, Surfly's industry-leading Co-browsing product recreates an in-person experience as part of a digital customer journey, and helps companies thrive in the era of digital transformation and remote service distribution. With Surfly, you can innovate online interactions in real-time, however you want, without creating cumbersome integrations or continually adding complex and costly technology.

A Surfly Session is equipped with co-browsing, video & voice chat, secure e-signing, responsive document annotation and completion, file sharing, and more. Our customers can use the technology on its own, integrate with their own tool stack, or even build on top of it to gain a competitive advantage, innovate faster, and elevate their customers' experiences.

Surfly is built to meet the highest security standards and regulations— it's compliant by design. The entire Surfly Session has been developed to act as infrastructure, with information only passing through but never stored. And when no data is stored, no data can be lost. This enables us to be ISO 27001, HIPAA, PCI DSS, AICPA SOC, and GDPR compliant.

We are hiring: https://jobs.surfly.com`}
    />
  )
}