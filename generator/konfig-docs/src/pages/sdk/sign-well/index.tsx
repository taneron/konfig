import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "SignWell",
    "numberOfMethods": 23,
    "categories": [
      "electronic_signature"
    ],
    "index": "sign-well/typescript",
    "language": "TypeScript",
    "link": "/sdk/sign-well/typescript/",
    "developerDocumentation": "developers.signwell.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/signwell/openapi.yaml"
  },
  {
    "name": "SignWell",
    "numberOfMethods": 23,
    "categories": [
      "electronic_signature"
    ],
    "index": "sign-well/python",
    "language": "Python",
    "link": "/sdk/sign-well/python/",
    "developerDocumentation": "developers.signwell.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/signwell/openapi.yaml"
  },
  {
    "name": "SignWell",
    "numberOfMethods": 23,
    "categories": [
      "electronic_signature"
    ],
    "index": "sign-well/java",
    "language": "Java",
    "link": "/sdk/sign-well/java/",
    "developerDocumentation": "developers.signwell.com/reference",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/signwell/openapi.yaml"
  }
];

export default function SignWell() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="SignWell"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/signwell/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/signwell/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/signwell/favicon.png"
      sdks={sdks}
      homepage="signwell.com"
      companyKebabCase="sign-well"
      categories={allCategories}
      metaDescription={`When I started SignWell in 2019, I saw there was a need for an alternative to the hard-to-use and expensive e-signature software already out there. Documents can be complicated enough, but getting a document signed shouldn't be complicated too.

At SignWell, we pride ourselves not only on the ease and affordability of our e-signature process but also on our personalized and industry-leading customer support — whether it's for individual use or larger team accounts, SignWell is here to help you feel comfortable and confident getting your documents signed.

The SignWell mission? Simplify how documents get signed for millions of people and businesses. We're excited to help you continue to move toward the future of paperless document signing.

Ruben Gamez
Founder, SignWell`}
    />
  )
}