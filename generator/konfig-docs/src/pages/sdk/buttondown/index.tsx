import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Buttondown",
    "numberOfMethods": 28,
    "categories": [
      "newsletter",
      "communication",
      "email",
      "marketing"
    ],
    "index": "buttondown/typescript",
    "language": "TypeScript",
    "link": "/sdk/buttondown/typescript/",
    "developerDocumentation": "docs.buttondown.email/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/buttondown/openapi.yaml"
  },
  {
    "name": "Buttondown",
    "numberOfMethods": 28,
    "categories": [
      "newsletter",
      "communication",
      "email",
      "marketing"
    ],
    "index": "buttondown/python",
    "language": "Python",
    "link": "/sdk/buttondown/python/",
    "developerDocumentation": "docs.buttondown.email/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/buttondown/openapi.yaml"
  },
  {
    "name": "Buttondown",
    "numberOfMethods": 28,
    "categories": [
      "newsletter",
      "communication",
      "email",
      "marketing"
    ],
    "index": "buttondown/java",
    "language": "Java",
    "link": "/sdk/buttondown/java/",
    "developerDocumentation": "docs.buttondown.email/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/buttondown/openapi.yaml"
  }
];

export default function Buttondown() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Buttondown"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/buttondown/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/buttondown/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/buttondown/favicon.png"
      sdks={sdks}
      homepage="buttondown.email/"
      companyKebabCase="buttondown"
      categories={allCategories}
      metaDescription={`Buttondown is a small, elegant tool for producing newsletters.

The minimalist interface makes it easy for you to write great emails; the automation acts like the editorial assistant you wish you had, by checking for typos, broken links, or malformed images; the portable subscription widget makes it really easy to grow your audience from wherever you host your site.`}
    />
  )
}