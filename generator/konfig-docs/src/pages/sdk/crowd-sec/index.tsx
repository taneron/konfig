import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "CrowdSec",
    "numberOfMethods": 15,
    "categories": [
      "security",
      "network_security",
      "cybersecurity"
    ],
    "index": "crowd-sec/typescript",
    "language": "TypeScript",
    "link": "/sdk/crowd-sec/typescript/",
    "developerDocumentation": "crowdsecurity.github.io/api_doc/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crowdsec/openapi.yaml"
  },
  {
    "name": "CrowdSec",
    "numberOfMethods": 15,
    "categories": [
      "security",
      "network_security",
      "cybersecurity"
    ],
    "index": "crowd-sec/python",
    "language": "Python",
    "link": "/sdk/crowd-sec/python/",
    "developerDocumentation": "crowdsecurity.github.io/api_doc/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crowdsec/openapi.yaml"
  },
  {
    "name": "CrowdSec",
    "numberOfMethods": 15,
    "categories": [
      "security",
      "network_security",
      "cybersecurity"
    ],
    "index": "crowd-sec/java",
    "language": "Java",
    "link": "/sdk/crowd-sec/java/",
    "developerDocumentation": "crowdsecurity.github.io/api_doc/",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/crowdsec/openapi.yaml"
  }
];

export default function CrowdSec() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="CrowdSec"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowdsec/imagePreview.jpg"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowdsec/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/crowdsec/favicon.png"
      sdks={sdks}
      homepage="www.crowdsec.net/"
      companyKebabCase="crowd-sec"
      categories={allCategories}
      metaDescription={`CrowdSec is a dual security engine designed to protect Internet-exposed workloads, whatever their type, task, or OS. It detects IP having bad behaviors in the logs and remedies the threat they pose in the most adapted way, using your existing network components. On top of that, when an IP is flagged, it's shared with CrowdSec network and, as long as enough trusted peers keep reporting it, the IP is maintained in our global real-time blocklist. That way everyone in the network is further protected by this network effect.`}
    />
  )
}