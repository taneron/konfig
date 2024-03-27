import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Sign",
    "numberOfMethods": 57,
    "categories": [
      "document_management",
      "sign"
    ],
    "index": "sign/typescript",
    "language": "TypeScript",
    "link": "/sdk/dropbox/sign/typescript/",
    "developerDocumentation": "developers.hellosign.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dropbox/sign/openapi.yaml"
  },
  {
    "name": "Sign",
    "numberOfMethods": 57,
    "categories": [
      "document_management",
      "sign"
    ],
    "index": "sign/python",
    "language": "Python",
    "link": "/sdk/dropbox/sign/python/",
    "developerDocumentation": "developers.hellosign.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dropbox/sign/openapi.yaml"
  },
  {
    "name": "Sign",
    "numberOfMethods": 57,
    "categories": [
      "document_management",
      "sign"
    ],
    "index": "sign/java",
    "language": "Java",
    "link": "/sdk/dropbox/sign/java/",
    "developerDocumentation": "developers.hellosign.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/dropbox/sign/openapi.yaml"
  }
];

export default function Dropbox() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Dropbox"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dropbox/sign/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dropbox/sign/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/dropbox/sign/favicon.png"
      sdks={sdks}
      homepage="sign.dropbox.com"
      companyKebabCase="dropbox"
      categories={allCategories}
      metaDescription={`Dropbox is the one place to keep life organized and keep work moving. With more than 700 million registered users across 180 countries, we're on a mission to design a more enlightened way of working. Dropbox is headquartered in San Francisco, CA, and has offices around the world.

To learn more about working at Dropbox, visit dropbox.com/jobs

We also have a few simple guidelines to keep this space respectful and productive. Please avoid:
- Harassing other people or using language that's hateful, offensive, vulgar, or advocates violence
- Trolling, fraud and spamming
- Violating someone else's rights or privacy
- Advertising or soliciting donations
- Link baiting
- Posting off topic comments or thread hijacking

We may remove comments that violate these guidelines.`}
    />
  )
}