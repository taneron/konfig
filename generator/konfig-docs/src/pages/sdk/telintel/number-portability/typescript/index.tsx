import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TelintelNumberPortabilityTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="telintel-number-portability-typescript-sdk"
      metaDescription={`With +20 years of experience in the market, Telintel makes the experience of communicating with your clients easier. We are leaders on technological solutions that makes the interaction with any user simpler no matter neither the business size nor the industrial sector at hand. Our products based on SMS and VoIP (SMS 2-Way, Landing Pages, RoboCall, Text2Speech, IVR, SMS2Call & Click2Call) allow us to offer a vast service spectrum for any need including reminders, alerts, promotions and client loyalty, along with commercial presence on any the continents around the world.

Our Go4Clients and TestMySMS platforms will allow you to enhance your user experience, centralize operational processes and improve your response times with the best service quality and 24/7 technical support, 365 days a year. These are smart solutions that will allow you to have infinite possibilities at your hands reach.

We count on our strategic allies and important customers satisfied with our services. Be one of them today and contact us at social@telintel.net or give us a call at +1 786-871-6540.

Con más de 20 años de experiencia en el mercado, Telintel hace más sencilla la manera de comunicarse con sus clientes. Somos líderes en soluciones tecnológicas que hacen más simple la interacción con cualquier usuario sin importar el tamaño de su organización o la industria a la que se dedique. Nuestros productos basados en SMS y VoIP (SMS 2way, Landing Page, Robocall, Text2Speech, IVR, SMS2Call y Click2Call) nos permiten ofrecer una amplia gama de servicios para cualquier necesidad incluyendo recordatorios, alertas, promociones y fidelización de clientes en todo el mundo, con presencia comercial en los 5 continentes.

Nuestras plataformas Go4Clients y TestmySMS le permitirán mejorar la experiencia de sus usuarios con el mejor servicio y soporte 24/7 los 365 días del año, centralizar procesos operativos y mejorar sus tiempo de respuesta.`}
      company="Telintel"
      serviceName="Number Portability"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/telintel/number-portability/logo.png"
      companyKebabCase="telintel"
      clientNameCamelCase="telintelNumberPortability"
      homepage="telintel.com"
      lastUpdated={new Date("2024-03-29T20:34:56.573Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/telintel/number-portability/favicon.png"
      contactUrl="https://telintel.com/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/telintel/number-portability/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["communications","messaging","sms"]}
      methods={[
  {
    "url": "/HlrService",
    "method": "hlrServiceDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Request",
    "typeScriptTag": "request",
    "description": "HTTP Query Procedure",
    "parameters": [
      {
        "name": "login",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "username"
      },
      {
        "name": "pass",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "password"
      },
      {
        "name": "number",
        "schema": "integer",
        "required": true,
        "description": "",
        "example": 573005555555
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Telintel Mobile Number Portability"
      apiBaseUrl="http://hlr.telintel.net:3080/HlrWebService/Hlr2"
      apiVersion="1.0.0"
      endpoints={1}
      sdkMethods={1}
      schemas={3}
      parameters={3}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/telintel/number-portability/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/telintel/number-portability/openapi.yaml"
      developerDocumentation="numberportability.telintel.com"
    />
  );
}
  