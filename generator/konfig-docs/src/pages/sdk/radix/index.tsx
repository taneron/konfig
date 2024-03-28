import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Radix",
    "numberOfMethods": 25,
    "categories": [
      "ai"
    ],
    "index": "radix/typescript",
    "language": "TypeScript",
    "link": "/sdk/radix/typescript/",
    "developerDocumentation": "api.talentapi.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/radix/openapi.yaml"
  },
  {
    "name": "Radix",
    "numberOfMethods": 25,
    "categories": [
      "ai"
    ],
    "index": "radix/python",
    "language": "Python",
    "link": "/sdk/radix/python/",
    "developerDocumentation": "api.talentapi.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/radix/openapi.yaml"
  },
  {
    "name": "Radix",
    "numberOfMethods": 25,
    "categories": [
      "ai"
    ],
    "index": "radix/java",
    "language": "Java",
    "link": "/sdk/radix/java/",
    "developerDocumentation": "api.talentapi.com/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/radix/openapi.yaml"
  }
];

export default function Radix() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Radix"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/radix/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/radix/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/radix/favicon.png"
      sdks={sdks}
      homepage="radix.ai"
      companyKebabCase="radix"
      categories={allCategories}
      metaDescription={`Radix is a Belgian AI solution provider committed to driving progress through the transformative power of artificial intelligence.

We believe that AI should be viewed as a co-pilot for people, helping them to do more and ultimately allowing us to be more human.

We provide expert guidance and support on every step of the journey towards a tailored portfolio of AI solutions.

As a leading AI consultancy with a presence in Belgium, the Netherlands, Germany, the Nordics, the US, and Italy, we pride ourselves on our rapid growth, exceptional team of over 50 experts, and the ability to collaborate with some of the world's most influential organizations.

Our client portfolio includes GSK, Atlas Copco, Yara International, Brussels Airport Company, Port-of-Antwerp Bruges, United Nations, Carrefour, and more.`}
    />
  )
}