import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Conjur",
    "numberOfMethods": 41,
    "categories": [
      "security",
      "identity_and_access_management",
      "cybersecurity",
      "information_security",
      "privileged_account_security",
      "advanced_threat_protection",
      "insider_threat_protection",
      "privileged_identity_management",
      "privileged_session_management",
      "ssh_key_management",
      "highly_sensitive_information_management",
      "information_security_software",
      "devops_security",
      "devsecops",
      "identity_security",
      "privileged_access_management"
    ],
    "index": "conjur/typescript",
    "language": "TypeScript",
    "link": "/sdk/cyber-ark/conjur/typescript/",
    "developerDocumentation": "docs.cyberark.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/cyberark/conjur/openapi.yaml"
  },
  {
    "name": "Conjur",
    "numberOfMethods": 41,
    "categories": [
      "security",
      "identity_and_access_management",
      "cybersecurity",
      "information_security",
      "privileged_account_security",
      "advanced_threat_protection",
      "insider_threat_protection",
      "privileged_identity_management",
      "privileged_session_management",
      "ssh_key_management",
      "highly_sensitive_information_management",
      "information_security_software",
      "devops_security",
      "devsecops",
      "identity_security",
      "privileged_access_management"
    ],
    "index": "conjur/python",
    "language": "Python",
    "link": "/sdk/cyber-ark/conjur/python/",
    "developerDocumentation": "docs.cyberark.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/cyberark/conjur/openapi.yaml"
  },
  {
    "name": "Conjur",
    "numberOfMethods": 41,
    "categories": [
      "security",
      "identity_and_access_management",
      "cybersecurity",
      "information_security",
      "privileged_account_security",
      "advanced_threat_protection",
      "insider_threat_protection",
      "privileged_identity_management",
      "privileged_session_management",
      "ssh_key_management",
      "highly_sensitive_information_management",
      "information_security_software",
      "devops_security",
      "devsecops",
      "identity_security",
      "privileged_access_management"
    ],
    "index": "conjur/java",
    "language": "Java",
    "link": "/sdk/cyber-ark/conjur/java/",
    "developerDocumentation": "docs.cyberark.com",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/cyberark/conjur/openapi.yaml"
  }
];

export default function CyberArk() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="CyberArk"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cyberark/conjur/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cyberark/conjur/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/cyberark/conjur/favicon.png"
      sdks={sdks}
      homepage="cyberark.com"
      companyKebabCase="cyber-ark"
      categories={allCategories}
      metaDescription={`CyberArk is the global leader in Identity Security. Centered on privileged access management, CyberArk provides the most comprehensive security offering for any identity – human or machine – across business applications, distributed workforces, hybrid cloud workloads and throughout the DevOps lifecycle. The world's leading organizations trust CyberArk to help secure their most critical assets.

For over a decade CyberArk has led the market in securing enterprises against cyber attacks that take cover behind insider privileges and attack critical enterprise assets. Today, only CyberArk is delivering a new category of targeted security solutions that help leaders stop reacting to cyber threats and get ahead of them, preventing attack escalation before irreparable business harm is done. At a time when auditors and regulators are recognizing that privileged accounts are the fast track for cyber attacks and demanding stronger protection, CyberArk's security solutions master high-stakes compliance and audit requirements while arming businesses to protect what matters most.

With offices and authorized partners worldwide, CyberArk is a vital security partner to more than 6,770 global businesses, including:

More than 50% of the Fortune 500
More than 35% of the Global 2000

CyberArk has offices in the U.S, Israel, U.K., Singapore, Australia, France, Germany, Italy, Japan, Netherlands and Turkey.`}
    />
  )
}