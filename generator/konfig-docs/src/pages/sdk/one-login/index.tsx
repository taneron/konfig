import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "OneLogin",
    "numberOfMethods": 47,
    "categories": [
      "identity_and_access_management",
      "password_management",
      "security",
      "authentication",
      "access_management",
      "single_signon",
      "idaas",
      "sso",
      "identity_management",
      "multifactor_authentication",
      "credential_vaulting",
      "iam"
    ],
    "index": "one-login/typescript",
    "language": "TypeScript",
    "link": "/sdk/one-login/typescript/",
    "developerDocumentation": "developers.onelogin.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onelogin/openapi.yaml"
  },
  {
    "name": "OneLogin",
    "numberOfMethods": 47,
    "categories": [
      "identity_and_access_management",
      "password_management",
      "security",
      "authentication",
      "access_management",
      "single_signon",
      "idaas",
      "sso",
      "identity_management",
      "multifactor_authentication",
      "credential_vaulting",
      "iam"
    ],
    "index": "one-login/python",
    "language": "Python",
    "link": "/sdk/one-login/python/",
    "developerDocumentation": "developers.onelogin.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onelogin/openapi.yaml"
  },
  {
    "name": "OneLogin",
    "numberOfMethods": 47,
    "categories": [
      "identity_and_access_management",
      "password_management",
      "security",
      "authentication",
      "access_management",
      "single_signon",
      "idaas",
      "sso",
      "identity_management",
      "multifactor_authentication",
      "credential_vaulting",
      "iam"
    ],
    "index": "one-login/java",
    "language": "Java",
    "link": "/sdk/one-login/java/",
    "developerDocumentation": "developers.onelogin.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/onelogin/openapi.yaml"
  }
];

export default function OneLogin() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="OneLogin"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onelogin/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onelogin/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/onelogin/favicon.png"
      sdks={sdks}
      homepage="onelogin.com"
      companyKebabCase="one-login"
      categories={allCategories}
      metaDescription={`OneLogin provides a comprehensive cloud-based identity and access management platform that enables companies to secure their data and applications. With features like single sign-on, multi-factor authentication, and user provisioning, OneLogin simplifies and strengthens security protocols for businesses of all sizes. Trusted by organizations worldwide, OneLogin helps streamline access management processes and enhance cybersecurity measures.`}
    />
  )
}