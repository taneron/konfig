import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "JumpCloud",
    "numberOfMethods": 413,
    "categories": [
      "identity_and_access_management",
      "security",
      "device_management",
      "ldap_to_the_cloud",
      "user_management"
    ],
    "index": "jump-cloud/typescript",
    "language": "TypeScript",
    "link": "/sdk/jump-cloud/typescript/",
    "developerDocumentation": "docs.jumpcloud.com/api/2.0/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jumpcloud/openapi.yaml"
  },
  {
    "name": "JumpCloud",
    "numberOfMethods": 413,
    "categories": [
      "identity_and_access_management",
      "security",
      "device_management",
      "ldap_to_the_cloud",
      "user_management"
    ],
    "index": "jump-cloud/python",
    "language": "Python",
    "link": "/sdk/jump-cloud/python/",
    "developerDocumentation": "docs.jumpcloud.com/api/2.0/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jumpcloud/openapi.yaml"
  },
  {
    "name": "JumpCloud",
    "numberOfMethods": 413,
    "categories": [
      "identity_and_access_management",
      "security",
      "device_management",
      "ldap_to_the_cloud",
      "user_management"
    ],
    "index": "jump-cloud/java",
    "language": "Java",
    "link": "/sdk/jump-cloud/java/",
    "developerDocumentation": "docs.jumpcloud.com/api/2.0/index.html",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/jumpcloud/openapi.yaml"
  }
];

export default function JumpCloud() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="JumpCloud"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jumpcloud/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jumpcloud/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/jumpcloud/favicon.png"
      sdks={sdks}
      homepage="jumpcloud.com"
      companyKebabCase="jump-cloud"
      categories={allCategories}
      metaDescription={`JumpCloud is reimagining the on-prem directory as a cloud-based platform that secures identities, manages devices, and provides safe access to all types of IT resources — on-prem, in the cloud, across Windows, Mac, or Linux.

Twitter: @jumpcloud`}
    />
  )
}