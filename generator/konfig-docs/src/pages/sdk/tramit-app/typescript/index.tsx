import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TramitAppTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="tramit-app-typescript-sdk"
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
      company="TramitApp"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tramitapp/logo.png"
      companyKebabCase="tramit-app"
      clientNameCamelCase="tramitApp"
      homepage="www.tramitapp.com/en/"
      lastUpdated={new Date("2024-03-28T23:15:08.809Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tramitapp/favicon.png"
      contactUrl="https://www.tramitapp.com"
      contactEmail="devs@tramitapp.com"
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tramitapp/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["hr","hr_management","hr_platform","hr_software","personnel_management","task_management","time_management"]}
      methods={[
  {
    "url": "/companies",
    "method": "listadoSociedades",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sociedades",
    "typeScriptTag": "sociedades",
    "description": "Listado de sociedades",
    "parameters": [
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Fecha de última modificación en formato timestamp, para actualizaciones incrementales. El cliente debe soportar que se devuelvan datos aunque no haya habido cambios."
      },
      {
        "name": "columns",
        "schema": "string",
        "required": false,
        "description": "Lista de campos a proyectar (https://rrhh.tramitapp.com/doc en la respuesta. Por ejemplo, el parámetro \"columns=_id&columns=correlation_id\" proyectará el documento y solo recuperará objetos con el siguiente contenido\n```\n{_id:\"someid\", correlation_id:\"some_correlation_id\"}\n```\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/companies/{id}",
    "method": "consultarPorId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sociedades",
    "typeScriptTag": "sociedades",
    "description": "Consultar sociedad por ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/workplaces",
    "method": "addWorkplace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sociedades",
    "typeScriptTag": "sociedades",
    "description": "Crear centro de trabajo",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "correlation_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "address",
        "schema": "object",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/workplaces/{workplace_id}",
    "method": "updateWorkplace",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sociedades",
    "typeScriptTag": "sociedades",
    "description": "Actualizar centro de trabajo",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "workplaceId",
        "schema": "string",
        "required": true,
        "description": "ID del centro de trabajo",
        "example": "WORKPLACE_ID"
      },
      {
        "name": "_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/teams",
    "method": "addTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sociedades",
    "typeScriptTag": "sociedades",
    "description": "Crear equipo",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "correlation_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "is_collective",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/teams/{team_id}",
    "method": "updateTeam",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sociedades",
    "typeScriptTag": "sociedades",
    "description": "Actualizar equipo",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "teamId",
        "schema": "string",
        "required": true,
        "description": "ID del equipo",
        "example": "TEAM_ID"
      },
      {
        "name": "_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/projects",
    "method": "addProject",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sociedades",
    "typeScriptTag": "sociedades",
    "description": "Crear proyecto",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DESCRIPTION"
      },
      {
        "name": "accountProject",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ACCOUNTPROJECT"
      },
      {
        "name": "locations",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "teams",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/projects/{project_id}",
    "method": "updateProjectInfo",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sociedades",
    "typeScriptTag": "sociedades",
    "description": "Actualizar proyecto",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "projectId",
        "schema": "string",
        "required": true,
        "description": "ID del proyecto",
        "example": "PROJECT_ID"
      },
      {
        "name": "_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/locations",
    "method": "updateLocation",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sociedades",
    "typeScriptTag": "sociedades",
    "description": "Actualizar localizacion",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "locationId",
        "schema": "string",
        "required": true,
        "description": "ID de la localización",
        "example": "LOCATION_ID"
      },
      {
        "name": "_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/employees",
    "method": "obtenerListado",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Empleados",
    "typeScriptTag": "empleados",
    "description": "Listado de empleados",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Fecha de última modificación en formato timestamp, para actualizaciones incrementales. El cliente debe soportar que se devuelvan datos aunque no haya habido cambios."
      },
      {
        "name": "columns",
        "schema": "string",
        "required": false,
        "description": "Lista de campos a proyectar (https://rrhh.tramitapp.com/doc en la respuesta. Por ejemplo, el parámetro \"columns=_id&columns=correlation_id\" proyectará el documento y solo recuperará objetos con el siguiente contenido\n```\n{_id:\"someid\", correlation_id:\"some_correlation_id\"}\n```\n"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/employees",
    "method": "contratarEmpleadoEnTramitApp",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Empleados",
    "typeScriptTag": "empleados",
    "description": "Contratar un empleado",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "correlation_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "workplace_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "WORKPLACE_ID"
      },
      {
        "name": "nationalId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NATIONALID"
      },
      {
        "name": "ssn",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "firstName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRSTNAME"
      },
      {
        "name": "lastName",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "LASTNAME"
      },
      {
        "name": "lastName2",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "birthday",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_day_in_company",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "gender",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "nationality",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "civil_status",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "education",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "contract_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_CODE"
      },
      {
        "name": "contract_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_DATE"
      },
      {
        "name": "contract_end_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "gross_salary",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "nationalId_expiration_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "disability",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "degree_disability_detail",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "expiration_disability_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_permanent_disability",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "contribution_account",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "trial_period",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "category",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "province",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "city",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "address",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "zip_code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "iban",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "calendar_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "calendar_correlation_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_clocking_from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "create_user",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "direct_reports_to",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "teams",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "employment_periods",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "workplace_history",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/employees/{id}",
    "method": "consultarPorId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Empleados",
    "typeScriptTag": "empleados",
    "description": "Consultar empleado por ID",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID del empleado",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/employees/{id}",
    "method": "actualizarPorId",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Empleados",
    "typeScriptTag": "empleados",
    "description": "Actualizar empleado por ID",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID del empleado",
        "example": "ID"
      },
      {
        "name": "create_user",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "reset_user",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "delete_user",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "hire_again",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "calendar_name",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "calendar_correlation_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "start_clocking_from",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "employment_periods",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "workplace_history",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/employees/{id}/fire",
    "method": "darDeBaja",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Empleados",
    "typeScriptTag": "empleados",
    "description": "Dar de baja un empleado",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID del empleado",
        "example": "ID"
      },
      {
        "name": "_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "_ID"
      },
      {
        "name": "firing_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRING_TYPE"
      },
      {
        "name": "fire_date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "FIRE_DATE"
      },
      {
        "name": "delete_user",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/employees/{id}/renew",
    "method": "renewContract",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Empleados",
    "typeScriptTag": "empleados",
    "description": "Renovar contrato",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID del empleado",
        "example": "ID"
      },
      {
        "name": "_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "_ID"
      },
      {
        "name": "renewal_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "RENEWAL_TYPE"
      },
      {
        "name": "contract_code",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CONTRACT_CODE"
      },
      {
        "name": "end_date",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "change_date",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/absences",
    "method": "listAbsences",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Listado de ausencias",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Día de inicio, en formato YYYY-MM-DD (por ejemplo 2018-01-01)",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Día de fin, en formato YYYY-MM-DD (por ejemplo 2018-01-01)",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/absences",
    "method": "addAbsences",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Añadir ausencias",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "employees_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subtype",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end_time",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/absences/{id}/cancel",
    "method": "cancelAbsence",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Cancelar Ausencia",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID de la ausencia",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/expenses",
    "method": "listCompanyExpenses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Listado de gastos",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Fecha de inicio, en formato YYYY-MM-DD (por ejemplo 2018-01-31)",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Fecha de fin, en formato YYYY-MM (por ejemplo 2018-02-04)",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/clocking",
    "method": "addAutoClocking",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Añadir fichaje auto",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "employees_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMPLOYEES_ID"
      },
      {
        "name": "date",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DATE"
      },
      {
        "name": "tz",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TZ"
      },
      {
        "name": "in",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true
      },
      {
        "name": "online",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "location",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "device_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "correlation_id",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/batch_clocking",
    "method": "addBatchClocking",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Batch de fichajes automáticos",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/hours",
    "method": "listHours",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Listado de horas",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Mes de inicio, en formato YYYY-MM (por ejemplo 2018-01)",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Mes de fin, en formato YYYY-MM (por ejemplo 2018-01)",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/hours",
    "method": "addManualTimesheets",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Añadir fichajes manuales",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "employees_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "start_time",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end_date",
        "schema": "string",
        "description": ""
      },
      {
        "name": "end_time",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location_in",
        "schema": "string",
        "description": ""
      },
      {
        "name": "location_out",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/hours/{id}/cancel",
    "method": "cancelEmployeeShift",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Cancelar fichaje",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID del fichaje",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/vacations",
    "method": "listEmployeeBalances",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Saldo de Vacaciones",
    "typeScriptTag": "saldoDeVacaciones",
    "description": "Saldo de vacaciones",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/shifts",
    "method": "listEmployeeShifts",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Turnos y horarios",
    "typeScriptTag": "turnosYHorarios",
    "description": "Planificación de jornadas y turnos de empleados",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Mes de inicio, en formato YYYY-MM (por ejemplo 2018-01)",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Mes de fin, en formato YYYY-MM (por ejemplo 2018-01)",
        "example": "END"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/shifts",
    "method": "addShiftsToEmployees",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Turnos y horarios",
    "typeScriptTag": "turnosYHorarios",
    "description": "Añadir listado de jornadas y turnos",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": true,
        "description": "Mes de inicio, en formato YYYY-MM (por ejemplo 2018-01)",
        "example": "START"
      },
      {
        "name": "end",
        "schema": "string",
        "required": true,
        "description": "Mes de fin, en formato YYYY-MM (por ejemplo 2018-01)",
        "example": "END"
      },
      {
        "name": "employees_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "shifts",
        "schema": "array",
        "description": ""
      },
      {
        "name": "sequences",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/schedules",
    "method": "listEmployeeSchedules",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Turnos y horarios",
    "typeScriptTag": "turnosYHorarios",
    "description": "Calendario del empleado",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "start",
        "schema": "string",
        "required": false,
        "description": "Fecha de inicio en formato timestamp (\"2021-01-01\" o \"2021-01-01T00:00:00Z\"). Se inicializa por defecto a \"hoy\"."
      },
      {
        "name": "end",
        "schema": "string",
        "required": false,
        "description": "Fecha de fin en formato timestamp (\"2021-01-01\" o \"2021-01-01T00:00:00Z\"). Se inicializa por defecto a \"hoy+6 días\""
      },
      {
        "name": "modifiedSince",
        "schema": "string",
        "required": false,
        "description": "Fecha de última modificación en formato timestamp, para actualizaciones incrementales. El cliente debe soportar que se devuelvan datos aunque no haya habido cambios."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/{company_id}/documents",
    "method": "consultarFiltrado",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Documentos",
    "typeScriptTag": "documentos",
    "description": "Consulta de documentos",
    "parameters": [
      {
        "name": "companyId",
        "schema": "string",
        "required": true,
        "description": "ID de la sociedad",
        "example": "COMPANY_ID"
      },
      {
        "name": "dates",
        "schema": "object",
        "description": ""
      },
      {
        "name": "nationalId",
        "schema": "array",
        "description": ""
      },
      {
        "name": "type",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/webhooks/employees",
    "method": "notifyChanges",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Empleados",
    "typeScriptTag": "empleados",
    "description": "Notificaciones sobre empleados",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Es obligatorio responder con 200 OK, en caso contrario el evento se encolará. El resto de la respuesta se ignorará."
      }
    ]
  },
  {
    "url": "/webhooks/absences",
    "method": "notifyAbsences",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Notificaciones sobre ausencias",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Es obligatorio responder con 200 OK, en caso contrario el evento se encolará. El resto de la respuesta se ignorará."
      }
    ]
  },
  {
    "url": "/webhooks/hours",
    "method": "notifyWorkHours",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Notificaciones sobre horas de trabajo",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Es obligatorio responder con 200 OK, en caso contrario el evento se encolará. El resto de la respuesta se ignorará."
      }
    ]
  },
  {
    "url": "/webhooks/expenses",
    "method": "notifyExpenses",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Trámites",
    "typeScriptTag": "trámites",
    "description": "Notificaciones sobre gastos, dietas y kilometrajes",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Es obligatorio responder con 200 OK, en caso contrario el evento se encolará. El resto de la respuesta se ignorará."
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="API TramitApp"
      apiBaseUrl="https://rrhh.tramitapp.com/tramitapi"
      apiVersion="1.0.0"
      endpoints={29}
      sdkMethods={34}
      schemas={51}
      parameters={164}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/tramitapp/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/tramitapp/openapi.yaml"
      developerDocumentation="rrhh.tramitapp.com/doc"
    />
  );
}
  