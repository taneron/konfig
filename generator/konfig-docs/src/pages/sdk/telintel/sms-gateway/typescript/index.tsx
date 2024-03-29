import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function TelintelSmsGatewayTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="telintel-sms-gateway-typescript-sdk"
      metaDescription={`With +20 years of experience in the market, Telintel makes the experience of communicating with your clients easier. We are leaders on technological solutions that makes the interaction with any user simpler no matter neither the business size nor the industrial sector at hand. Our products based on SMS and VoIP (SMS 2-Way, Landing Pages, RoboCall, Text2Speech, IVR, SMS2Call & Click2Call) allow us to offer a vast service spectrum for any need including reminders, alerts, promotions and client loyalty, along with commercial presence on any the continents around the world.

Our Go4Clients and TestMySMS platforms will allow you to enhance your user experience, centralize operational processes and improve your response times with the best service quality and 24/7 technical support, 365 days a year. These are smart solutions that will allow you to have infinite possibilities at your hands reach.

We count on our strategic allies and important customers satisfied with our services. Be one of them today and contact us at social@telintel.net or give us a call at +1 786-871-6540.

Con más de 20 años de experiencia en el mercado, Telintel hace más sencilla la manera de comunicarse con sus clientes. Somos líderes en soluciones tecnológicas que hacen más simple la interacción con cualquier usuario sin importar el tamaño de su organización o la industria a la que se dedique. Nuestros productos basados en SMS y VoIP (SMS 2way, Landing Page, Robocall, Text2Speech, IVR, SMS2Call y Click2Call) nos permiten ofrecer una amplia gama de servicios para cualquier necesidad incluyendo recordatorios, alertas, promociones y fidelización de clientes en todo el mundo, con presencia comercial en los 5 continentes. 

Nuestras plataformas Go4Clients y TestmySMS le permitirán mejorar la experiencia de sus usuarios con el mejor servicio y soporte 24/7 los 365 días del año, centralizar procesos operativos y mejorar sus tiempo de respuesta.`}
      company="Telintel"
      serviceName="SMS Gateway"
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/telintel/sms-gateway/logo.png"
      companyKebabCase="telintel"
      clientNameCamelCase="telintelSmsGateway"
      homepage="telintel.com"
      lastUpdated={new Date("2024-03-29T20:34:56.573Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/telintel/sms-gateway/favicon.png"
      contactUrl="https://telintel.com/"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/telintel/sms-gateway/imagePreview.jpg"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["communications","messaging","sms"]}
      methods={[
  {
    "url": "/HttpSmppServiceTypeV2/HttpServiceType",
    "method": "messageDelivery",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Send Single SMS",
    "typeScriptTag": "sendSingleSms",
    "description": "The request will contain a JSON object in the body of the request.",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "description": "",
        "example": "testhttp"
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "passthttp"
      },
      {
        "name": "destinationNumber",
        "schema": "string",
        "description": "",
        "example": "573005555555"
      },
      {
        "name": "message",
        "schema": "string",
        "description": "",
        "example": "testMessage"
      },
      {
        "name": "from",
        "schema": "string",
        "description": "",
        "example": "573121112222"
      },
      {
        "name": "serviceType",
        "schema": "string",
        "description": "",
        "example": "serviceTypeTest"
      },
      {
        "name": "datacoding",
        "schema": "integer",
        "description": "",
        "example": 1
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/HttpMassSmppGatewayV2/HttpMassService",
    "method": "notificationService",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Send Mass SMS",
    "typeScriptTag": "sendMassSms",
    "description": "The request will contain a JSON object in the body of the request.",
    "parameters": [
      {
        "name": "username",
        "schema": "string",
        "description": "",
        "example": "testhttp"
      },
      {
        "name": "password",
        "schema": "string",
        "description": "",
        "example": "passthttp"
      },
      {
        "name": "serviceType",
        "schema": "string",
        "description": "",
        "example": "testhttp"
      },
      {
        "name": "smppUtilsMassInformationRequestItemList",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/Delivery",
    "method": "confirmDeliveryReceipt",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Delivery Receipt",
    "typeScriptTag": "deliveryReceipt",
    "description": "The request parameters are sent via a GET (https://smsapi.telintel.com to your CallBack URL. Telintel will be expecting a response 200 OK response, or it will keep retrying until the Delivery Receipt expires (up to 24 hours).",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "description": "",
        "example": "smsId"
      },
      {
        "name": "submitted",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "delivered",
        "schema": "integer",
        "description": "",
        "example": 1
      },
      {
        "name": "submitDate",
        "schema": "string",
        "description": "",
        "example": "2015-08-04 14:26:57"
      },
      {
        "name": "doneDate",
        "schema": "string",
        "description": "",
        "example": "2015-08-04 14:26:57"
      },
      {
        "name": "finalStatus",
        "schema": "string",
        "description": "",
        "example": "DELIVRD"
      },
      {
        "name": "error",
        "schema": "integer",
        "description": "",
        "example": 0
      },
      {
        "name": "text",
        "schema": "string",
        "description": "",
        "example": "text message"
      },
      {
        "name": "mcc",
        "schema": "integer",
        "description": "",
        "example": 123
      },
      {
        "name": "mnc",
        "schema": "string",
        "description": "",
        "example": "321"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/MO",
    "method": "callbackResponse",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Receive message",
    "typeScriptTag": "receiveMessage",
    "description": "The request parameters are sent via a GET (https://smsapi.telintel.com to your Callback URL and Telintel will be expecting a response 200 OK response, or it will keep retrying for 24 hours.",
    "parameters": [
      {
        "name": "serviceType",
        "schema": "string",
        "description": "",
        "example": ""
      },
      {
        "name": "originTypeOfNumber",
        "schema": "string",
        "description": "",
        "example": "NATIONAL"
      },
      {
        "name": "originNumberingPlanIndicator",
        "schema": "string",
        "description": "",
        "example": "ISDN"
      },
      {
        "name": "sourceAddress",
        "schema": "string",
        "description": "",
        "example": "573005555555"
      },
      {
        "name": "destinationTypeOfNumber",
        "schema": "string",
        "description": "",
        "example": "INTERNATIONAL"
      },
      {
        "name": "destinationNumberingPlanIndicator",
        "schema": "string",
        "description": "",
        "example": "ISDN"
      },
      {
        "name": "destinationAddress",
        "schema": "string",
        "description": "",
        "example": "86865"
      },
      {
        "name": "esmeClass",
        "schema": "string",
        "description": "",
        "example": "0"
      },
      {
        "name": "protocolId",
        "schema": "integer",
        "description": "",
        "example": 0
      },
      {
        "name": "PriorityFlag",
        "schema": "string",
        "description": "",
        "example": "0"
      },
      {
        "name": "shortMessage",
        "schema": "string",
        "description": "",
        "example": "Sae 1234 456"
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
      apiTitle="Telintel SMS Gateway HTTP API"
      apiBaseUrl="http://smsapi.telintel.net:8080/SmppUtilsWeb"
      apiVersion="1.0.0"
      endpoints={4}
      sdkMethods={4}
      schemas={14}
      parameters={32}
      difficulty="Very Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/telintel/sms-gateway/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/telintel/sms-gateway/openapi.yaml"
      developerDocumentation="smsapi.telintel.com"
    />
  );
}
  