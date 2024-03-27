import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Directory",
    "numberOfMethods": 539,
    "categories": [
      "identity_and_access_management",
      "security",
      "authentication",
      "access_management",
      "identity",
      "identity_management"
    ],
    "index": "directory/typescript",
    "language": "TypeScript",
    "link": "/sdk/ping-identity/directory/typescript/",
    "developerDocumentation": "docs.pingidentity.com/r/en-us",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ping-identity/directory/openapi.yaml"
  },
  {
    "name": "Directory",
    "numberOfMethods": 539,
    "categories": [
      "identity_and_access_management",
      "security",
      "authentication",
      "access_management",
      "identity",
      "identity_management"
    ],
    "index": "directory/python",
    "language": "Python",
    "link": "/sdk/ping-identity/directory/python/",
    "developerDocumentation": "docs.pingidentity.com/r/en-us",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ping-identity/directory/openapi.yaml"
  },
  {
    "name": "Directory",
    "numberOfMethods": 539,
    "categories": [
      "identity_and_access_management",
      "security",
      "authentication",
      "access_management",
      "identity",
      "identity_management"
    ],
    "index": "directory/java",
    "language": "Java",
    "link": "/sdk/ping-identity/directory/java/",
    "developerDocumentation": "docs.pingidentity.com/r/en-us",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ping-identity/directory/openapi.yaml"
  }
];

export default function PingIdentity() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Ping Identity"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ping-identity/directory/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ping-identity/directory/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ping-identity/directory/favicon.png"
      sdks={sdks}
      homepage="pingidentity.com"
      companyKebabCase="ping-identity"
      categories={allCategories}
      metaDescription={`Ping Identity delivers unforgettable user experiences and uncompromising security. We are a single company that makes crafting digital experiences simple for any type of user—partners, customers, employees, and beyond. We are anti-lock-in. That means integrations with existing ecosystems, clouds, and on-prem technologies is simple. Out-of-the-box templates let businesses leverage our identity expertise to give their users frictionless experiences. Whether they're building a foundation of modern digital identity, or out-innovating their competitors with cutting-edge services like digital credentials, AI-driven fraud prevention and governance, Ping is the one-stop shop for game-changing digital identity. 

Headquartered in Denver, Colorado, Ping Identity also has offices across the world including Austin, Bangalore, Edinburgh, Grenoble, Israel, London, San Francisco, Singapore, and Vancouver.

*On August 23, 2023, Ping Identity and ForgeRock joined together to deliver more choice, deeper expertise, and a more complete identity solution for customers and partners.`}
    />
  )
}