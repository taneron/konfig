import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "Seyna",
    "numberOfMethods": 18,
    "categories": [
      "insurance"
    ],
    "index": "seyna/typescript",
    "language": "TypeScript",
    "link": "/sdk/seyna/typescript/",
    "developerDocumentation": "developers.seyna.eu",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seyna/openapi.yaml"
  },
  {
    "name": "Seyna",
    "numberOfMethods": 18,
    "categories": [
      "insurance"
    ],
    "index": "seyna/python",
    "language": "Python",
    "link": "/sdk/seyna/python/",
    "developerDocumentation": "developers.seyna.eu",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seyna/openapi.yaml"
  },
  {
    "name": "Seyna",
    "numberOfMethods": 18,
    "categories": [
      "insurance"
    ],
    "index": "seyna/java",
    "language": "Java",
    "link": "/sdk/seyna/java/",
    "developerDocumentation": "developers.seyna.eu",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/seyna/openapi.yaml"
  }
];

export default function Seyna() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="Seyna"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seyna/imagePreview.webp"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seyna/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/seyna/favicon.png"
      sdks={sdks}
      homepage="seyna.eu"
      companyKebabCase="seyna"
      categories={allCategories}
      metaDescription={`Seyna est la plateforme pour les courtiers en assurance. En combinant produits d'assurance sur mesure et technologie, la plateforme Seyna permet aux courtiers de focaliser sur l'essentiel : leurs clients. Les courtiers opérant sur Seyna peuvent se concentrer sur l'expérience client en automatisant les tâches administratives et de conformité ainsi qu'en créant des expériences assurantielles sur-mesure. Infrastructure ouverte, les courtiers peuvent adapter Seyna à leurs besoins, brancher leur ecosystème de prestataires et piloter toute leur activité via une seule interface.

Aujourd'hui, plus de 90 courtiers d'assurance et retailers font déjà appel à Seyna pour protéger plus de 1 million de clients. Mais l'histoire ne s'arrête pas là. Seyna nourrit des ambitions mondiales et entend changer la façon dont l'ensemble du secteur protège les clients.`}
    />
  )
}