import React from 'react';
import { Company } from '../../../components/Company';

const sdks = [
  {
    "name": "TramitApp",
    "numberOfMethods": 33,
    "categories": [
      "hr",
      "hr_management",
      "hr_platform",
      "hr_software",
      "personnel_management",
      "task_management",
      "time_management"
    ],
    "index": "tramit-app/typescript",
    "language": "TypeScript",
    "link": "/sdk/tramit-app/typescript/",
    "developerDocumentation": "rrhh.tramitapp.com/doc",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tramitapp/openapi.yaml"
  },
  {
    "name": "TramitApp",
    "numberOfMethods": 33,
    "categories": [
      "hr",
      "hr_management",
      "hr_platform",
      "hr_software",
      "personnel_management",
      "task_management",
      "time_management"
    ],
    "index": "tramit-app/python",
    "language": "Python",
    "link": "/sdk/tramit-app/python/",
    "developerDocumentation": "rrhh.tramitapp.com/doc",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tramitapp/openapi.yaml"
  },
  {
    "name": "TramitApp",
    "numberOfMethods": 33,
    "categories": [
      "hr",
      "hr_management",
      "hr_platform",
      "hr_software",
      "personnel_management",
      "task_management",
      "time_management"
    ],
    "index": "tramit-app/java",
    "language": "Java",
    "link": "/sdk/tramit-app/java/",
    "developerDocumentation": "rrhh.tramitapp.com/doc",
    "openapiGitHubUi": "https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tramitapp/openapi.yaml"
  }
];

export default function TramitApp() {
  const allCategories: string[] = Array.from(
    new Set(sdks.flatMap((service) => service.categories)),
  )
  return (
    <Company
      company="TramitApp"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tramitapp/imagePreview.png"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tramitapp/logo.png"
      favicon="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tramitapp/favicon.png"
      sdks={sdks}
      homepage="www.tramitapp.com/en/"
      companyKebabCase="tramit-app"
      categories={allCategories}
      metaDescription={`TramitApp es la App de Gestión de Recursos Humanos con la que ahorrarás tiempo y gestionarás fácilmente y en la nube los tediosos papeleos.

Podrás controlar EN TIEMPO REAL y DESDE TU MÓVIL el registro horario de tus empleados, vacaciones del equipo, nóminas, gastos, kilometraje, dietas, ausencias y bajas médicas.

Somos una plataforma centrada en "la experiencia de empleado" y contamos con una APP DE EMPLEADO para eliminar por completo el papel y los errores.

Es segura y cumple estrictamente con los requisitos legales. Incorpora firma electrónica y reconocimiento facial.

Se trata de un sistema flexible para todos los sectores y con una implementación sencilla para grandes, medianas y pequeñas empresas a través de la integración de una API con otros sistemas.

Además:
· Sin costes de mantenimiento.
· Sin papeles.
· Con comunicación con tu gestoría.
· Con posibilidad de integración con sistemas de nóminas.
· Con soporte.`}
    />
  )
}