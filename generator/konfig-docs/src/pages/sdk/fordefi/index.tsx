import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "FORDEFI",
    "numberOfMethods": 44,
    "categories": [
      "cryptocurrency",
      "web_3",
      "mpc_wallet"
    ],
    "index": "fordefi/typescript",
    "language": "TypeScript",
    "link": "/sdk/fordefi/typescript/",
    "developerDocumentation": "docs.fordefi.com/reference/api-overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fordefi/openapi.yaml"
  },
  {
    "name": "FORDEFI",
    "numberOfMethods": 44,
    "categories": [
      "cryptocurrency",
      "web_3",
      "mpc_wallet"
    ],
    "index": "fordefi/python",
    "language": "Python",
    "link": "/sdk/fordefi/python/",
    "developerDocumentation": "docs.fordefi.com/reference/api-overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fordefi/openapi.yaml"
  },
  {
    "name": "FORDEFI",
    "numberOfMethods": 44,
    "categories": [
      "cryptocurrency",
      "web_3",
      "mpc_wallet"
    ],
    "index": "fordefi/java",
    "language": "Java",
    "link": "/sdk/fordefi/java/",
    "developerDocumentation": "docs.fordefi.com/reference/api-overview",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/fordefi/openapi.yaml"
  }
];

export default function Fordefi() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="FORDEFI"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fordefi/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fordefi/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/fordefi/favicon.png"
      sdks={sdks}
      homepage="fordefi.com"
      companyKebabCase="fordefi"
      categories={allCategories}
      metaDescription={`The future of institutional web3 wallets.

For builders, traders, and operators, Fordefi's comprehensive MPC wallet platform and web3 gateway enables you to securely self-custody your private keys, seamlessly connect to thousands of dApps across any blockchain, protect your workflows with granular policies, and manage your digital asset operations all-in-one place.`}
    />
  )
}