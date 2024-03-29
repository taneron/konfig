import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "inMobile",
    "numberOfMethods": 36,
    "categories": [
      "messaging",
      "sms"
    ],
    "index": "in-mobile/typescript",
    "language": "TypeScript",
    "link": "/sdk/in-mobile/typescript/",
    "developerDocumentation": "www.inmobile.com/docs/rest-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/inmobile/openapi.yaml"
  },
  {
    "name": "inMobile",
    "numberOfMethods": 36,
    "categories": [
      "messaging",
      "sms"
    ],
    "index": "in-mobile/python",
    "language": "Python",
    "link": "/sdk/in-mobile/python/",
    "developerDocumentation": "www.inmobile.com/docs/rest-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/inmobile/openapi.yaml"
  },
  {
    "name": "inMobile",
    "numberOfMethods": 36,
    "categories": [
      "messaging",
      "sms"
    ],
    "index": "in-mobile/java",
    "language": "Java",
    "link": "/sdk/in-mobile/java/",
    "developerDocumentation": "www.inmobile.com/docs/rest-api",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/inmobile/openapi.yaml"
  }
];

export default function InMobile() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="inMobile"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inmobile/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inmobile/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/inmobile/favicon.jpg"
      sdks={sdks}
      homepage="inmobile.com"
      companyKebabCase="in-mobile"
      categories={allCategories}
      metaDescription={`inMobile er en SMS-Gateway testet af over 8.000 brugere. Vi håndterer over 150 mio. SMS-beskeder årligt og tilstræber en oppetid på 100%, men sandheden er 99,99%.

Uanset, om det drejer sig om at informere dine kunder, medarbejdere eller andre personer, som er vigtige for din virksomhed, gør inMobile det nemt for de rette personer at få besked på det rette tidspunkt.

Du får adgang til en brugervenlig SMS-Gateway og et gennemtestet API, som du nemt kan integrere med dit eget system eller hjemmeside.

Ønsker du at høre mere om vores løsning, er du velkommen til at kontakte os på +45 88 33 66 99 eller på mail salg@inmobile.dk
Vi har åbent alle hverdage mellem kl. 8-17`}
    />
  )
}