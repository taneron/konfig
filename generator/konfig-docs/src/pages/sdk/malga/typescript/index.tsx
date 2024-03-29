import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function MalgaTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="malga-typescript-sdk"
      metaDescription={`A Plug agora é Malga!
Mais do que uma plataforma de pagamentos, queremos ser uma comunidade que empodera negócios digitais. A única e última plataforma de integração de pagamentos.
Com tecnologia agnóstica, adaptável e resiliente. Desenvolvendo as melhores experiências para empresas, desenvolvedores e consumidores. Simplificando o que é complexo e evoluindo todos os dias.
Somos uma startup apoiada por investidores focados em tecnologia com a missão de ajudar empresas digitais a descobrirem todo o potencial de pagamentos. Fomos acelerados pela Y Combinator, fundada em 2005 no Vale do Silício (EUA) e considerada a maior aceleradora de tecnologia do mundo. Por isso, temos muito orgulho de colocar em nosso nome essa sigla pequena, mas com tanto significado: YC S21.`}
      company="Malga"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/malga/logo.webp"
      companyKebabCase="malga"
      clientNameCamelCase="malga"
      homepage="malga.io"
      lastUpdated={new Date("2024-03-29T19:11:15.684Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/malga/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/malga/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["payments","fintech","payment_services"]}
      methods={[
  {
    "url": "/v1/auth",
    "method": "createPublicKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Client-token",
    "typeScriptTag": "clientToken",
    "description": "Criar nova chave pública para uso no client-side",
    "parameters": [
      {
        "name": "scope",
        "schema": "string",
        "description": ""
      },
      {
        "name": "expires",
        "schema": "number",
        "description": "",
        "default": 0
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/tokens",
    "method": "token",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Tokens",
    "typeScriptTag": "tokens",
    "description": "Criar um novo token",
    "parameters": [
      {
        "name": "tokenização",
        "schema": "undefined",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cards",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Listar cartões",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "número da página"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "quantidade de itens por página"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cards",
    "method": "createNewCardFromToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Criar novo cartão a partir de token",
    "parameters": [
      {
        "name": "tokenId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "TOKENID"
      },
      {
        "name": "merchantId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "cvvCheck",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "424",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/cards/{id}",
    "method": "getCardDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Cards",
    "typeScriptTag": "cards",
    "description": "Recuperar detalhes de cartão",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID do cartão",
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
      },
      {
        "statusCode": "424",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/charges",
    "method": "list",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "Listar cobranças",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "numero da pagina ativa"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "quantidade de registros por página 1-100"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "tipo de ordenação decrescente ou crescente"
      },
      {
        "name": "merchantId",
        "schema": "string",
        "required": false,
        "description": "id do merchant processado na cobrança"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "id da cobrança"
      },
      {
        "name": "originalAmount",
        "schema": "number",
        "required": false,
        "description": "valor em centavos da cobrança"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "status da cobrança"
      },
      {
        "name": "paymentType",
        "schema": "string",
        "required": false,
        "description": "tipo de pagamento"
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": false,
        "description": "id da cobrança gerado pelo cliente"
      },
      {
        "name": "created",
        "schema": "string",
        "required": false,
        "description": "registros criados em uma data específica",
        "example": "2022-03-12T12:43:53"
      },
      {
        "name": "createdGt",
        "schema": "string",
        "required": false,
        "description": "registros com data maior que",
        "example": "2022-03-12T12:43:53"
      },
      {
        "name": "createdLt",
        "schema": "string",
        "required": false,
        "description": "registros com data menor que",
        "example": "2022-03-12T12:43:53"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/charges",
    "method": "createNewCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "Realizar nova cobrança",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "merchantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTID"
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "BRL"
      },
      {
        "name": "statementDescriptor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "capture",
        "schema": "boolean",
        "required": false,
        "description": "",
        "default": false
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerReferenceKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethod",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "paymentSource",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fraudAnalysis",
        "schema": "undefined",
        "required": false,
        "description": ""
      },
      {
        "name": "splitRules",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentFlow",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "threeDSecure2",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "appInfo",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/charges/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "Recuperar detalhes de cobrança",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id da cobrança que deseja recuperar",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/charges/{id}",
    "method": "updateStatusById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "Alterar o status de uma cobrança no ambiente de sandbox",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id da cobrança que deseja alterar no sandbox",
        "example": "ID"
      },
      {
        "name": "status",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/charges/{id}/antifraud",
    "method": "alterAntifraudStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "Alterar o status do antifraude no ambiente de sandbox",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id da cobrança que deseja alterar no sandbox",
        "example": "ID"
      },
      {
        "name": "status",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/charges/{id}/capture",
    "method": "captureCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "Capturar cobrança pre-autorizada",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id da cobrança que deseja capturar",
        "example": "ID"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/charges/{id}/void",
    "method": "voidApprovedCharge",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Charges",
    "typeScriptTag": "charges",
    "description": "Estornar cobrança aprovada",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id da cobrança que deseja estornar",
        "example": "ID"
      },
      {
        "name": "amount",
        "schema": "number",
        "description": ""
      },
      {
        "name": "delayToCompose",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions",
    "method": "createNewSession",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Criar nova sessão",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "orderId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "providerReferenceKey",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "amount",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "currency",
        "schema": "string",
        "required": false,
        "description": "",
        "default": "BRL"
      },
      {
        "name": "isActive",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "capture",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "merchantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTID"
      },
      {
        "name": "dueDate",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "DUEDATE"
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "statementDescriptor",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "createLink",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethods",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "items",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Recuperar detalhes de uma sessão",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identificação da sessão a ser recuperada",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions/{id}",
    "method": "updateStatus",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Atualizar o status de uma sessão",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identificação da sessão a ser alterada",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions/{id}/charge",
    "method": "chargePost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Pagar uma sessão",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identificação da sessão a ser paga",
        "example": "ID"
      },
      {
        "name": "customerId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "paymentMethod",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "paymentSource",
        "schema": "undefined",
        "required": true,
        "description": ""
      },
      {
        "name": "fraudAnalysis",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions/{id}/cancel",
    "method": "cancelarSessao",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Cancelar uma sessão",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identificação da sessão a ser cancelada",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions/{id}/history",
    "method": "getHistory",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Recuperar o histórico da sessão",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identificação da sessão a ser recuperada",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sessions/{id}/link",
    "method": "getLink",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sessions",
    "typeScriptTag": "sessions",
    "description": "Recupera sessão com os dados das configurações da empresa",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identificação da sessão a ser recuperada",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/merchants",
    "method": "listRegisteredMerchants",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Merchants",
    "typeScriptTag": "merchants",
    "description": "Listagem de merchants cadastrados",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "número da página"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "quantidade de itens por página"
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
    "url": "/v1/merchants",
    "method": "createNewMerchant",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Merchants",
    "typeScriptTag": "merchants",
    "description": "Criação de novo merchant para cobrança",
    "parameters": [
      {
        "name": "mcc",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MCC"
      },
      {
        "name": "providers",
        "schema": "undefined",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/merchants/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Merchants",
    "typeScriptTag": "merchants",
    "description": "Deletar merchant pelo id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id do merchant",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/merchants/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Merchants",
    "typeScriptTag": "merchants",
    "description": "Recuperar detalhes de merchant pelo id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id do merchant",
        "example": "ID"
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
    "url": "/v1/merchants/{id}",
    "method": "atualizarConfiguracoes",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Merchants",
    "typeScriptTag": "merchants",
    "description": "Atualizar configurações de merchant",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id do merchant",
        "example": "ID"
      },
      {
        "name": "mcc",
        "schema": "string",
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
    "url": "/v1/customers",
    "method": "listagemCadastrados",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Listagem de customers cadastrados",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "número da página"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "quantidade de itens por página"
      },
      {
        "name": "sort",
        "schema": "string",
        "required": false,
        "description": "ordenação dos itens"
      },
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "identificador de um customer"
      },
      {
        "name": "documentType",
        "schema": "string",
        "required": false,
        "description": "tipo de documento"
      },
      {
        "name": "documentNumber",
        "schema": "string",
        "required": false,
        "description": "numero do documento"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers",
    "method": "createNewCustomer",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Criação de novo customer para cobrança",
    "parameters": [
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "NAME"
      },
      {
        "name": "email",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EMAIL"
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "PHONENUMBER"
      },
      {
        "name": "document",
        "schema": "object",
        "required": true,
        "description": ""
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
        "statusCode": "201",
        "description": "Created."
      }
    ]
  },
  {
    "url": "/v1/customers/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Deletar customer pelo id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id do customers que deseja deletar",
        "example": "ID"
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
    "url": "/v1/customers/{id}",
    "method": "recuperarDetalhes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Recuperar detalhes de customer",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id do customers que deseja recuperar",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/customers/{id}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Atualizar customer pelo id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id do customers que deseja alterar",
        "example": "ID"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "phoneNumber",
        "schema": "string",
        "description": ""
      },
      {
        "name": "address",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The record has been successfully updated."
      }
    ]
  },
  {
    "url": "/v1/customers/{customer_id}/cards",
    "method": "listCards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Listagem dos cartões do customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "id do customers que deseja alterar",
        "example": "CUSTOMER_ID"
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
    "url": "/v1/customers/{customer_id}/cards",
    "method": "addCreditCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Customers",
    "typeScriptTag": "customers",
    "description": "Adicionar cartão de crédito ao customer",
    "parameters": [
      {
        "name": "customerId",
        "schema": "string",
        "required": true,
        "description": "id do customers que deseja alterar",
        "example": "CUSTOMER_ID"
      },
      {
        "name": "cardId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CARDID"
      }
    ],
    "responses": [
      {
        "statusCode": "204",
        "description": "The card has been linked successfully."
      }
    ]
  },
  {
    "url": "/v1/webhooks",
    "method": "listWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Listagem de webhooks cadastrados",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "número da página"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "quantidade de itens por página"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks",
    "method": "createNewNotification",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Criação de novo webhook para notificação",
    "parameters": [
      {
        "name": "version",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": 1.1
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT"
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDPOINT"
      },
      {
        "name": "status",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "409",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks/{id}",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Deletar webhook pelo id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id do webhook que deseja deletar",
        "example": "ID"
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
    "url": "/v1/webhooks/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Recuperar detalhes de webhook",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id do webhook que deseja recuperar",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/webhooks/{id}",
    "method": "atualizarPeloId",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Webhooks",
    "typeScriptTag": "webhooks",
    "description": "Atualizar webhook pelo id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id do webhook que deseja alterar",
        "example": "ID"
      },
      {
        "name": "version",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0,
        "default": 1.1
      },
      {
        "name": "event",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "EVENT"
      },
      {
        "name": "endpoint",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "ENDPOINT"
      },
      {
        "name": "status",
        "schema": "boolean",
        "required": true,
        "description": "",
        "example": true,
        "default": true
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "The record has been successfully updated."
      }
    ]
  },
  {
    "url": "/v1/sellers",
    "method": "createNew",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Sellers",
    "typeScriptTag": "sellers",
    "description": "Criação de um novo recebedor",
    "parameters": [
      {
        "name": "merchantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTID"
      },
      {
        "name": "mcc",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 0
      },
      {
        "name": "owner",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "business",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "bankAccount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transferPolicy",
        "schema": "object",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sellers/{id}",
    "method": "consultById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sellers",
    "typeScriptTag": "sellers",
    "description": "Consultar um recebedor pelo ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identificador do seller",
        "example": "ID"
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
    "url": "/v1/sellers?id&email&status&limit&page",
    "method": "listPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Sellers",
    "typeScriptTag": "sellers",
    "description": "Consultar um recebedor por listagem paginada",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": false,
        "description": "Identificador do seller"
      },
      {
        "name": "email",
        "schema": "string",
        "required": false,
        "description": "E-mail do seller"
      },
      {
        "name": "status",
        "schema": "string",
        "required": false,
        "description": "Status do seller"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "Limite de itens retornados na consulta"
      },
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "Páginas da consulta"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sellers?id",
    "method": "deleteById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Sellers",
    "typeScriptTag": "sellers",
    "description": "Deletar recebedor por ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "ID do seller",
        "example": "ID"
      },
      {
        "name": "merchantId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "MERCHANTID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Delete"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/sellers?id",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PATCH,
    "tag": "Sellers",
    "typeScriptTag": "sellers",
    "description": "Atualização de recebedor pelo ID",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Identificador do seller",
        "example": "ID"
      },
      {
        "name": "providers",
        "schema": "array",
        "required": false,
        "description": ""
      },
      {
        "name": "merchantId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "clientId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "metadata",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "owner",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "business",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "bankAccount",
        "schema": "object",
        "required": true,
        "description": ""
      },
      {
        "name": "transferPolicy",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "mcc",
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/flows",
    "method": "getPaged",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Flows",
    "typeScriptTag": "flows",
    "description": "Recuperar todos os fluxos paginado",
    "parameters": [
      {
        "name": "page",
        "schema": "number",
        "required": false,
        "description": "número da página"
      },
      {
        "name": "limit",
        "schema": "number",
        "required": false,
        "description": "quantidade de itens por página"
      },
      {
        "name": "merchantId",
        "schema": "string",
        "required": false,
        "description": "usado para filtrar os fluxos por merchantId"
      },
      {
        "name": "paymentMethod",
        "schema": "string",
        "required": false,
        "description": "usado para filtrar os fluxos por método de pagamento"
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
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/flows/{id}",
    "method": "consultarPeloId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Flows",
    "typeScriptTag": "flows",
    "description": "Consultar um fluxo pelo id",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "flow id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/reports",
    "method": "exportBaseData",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Exportar dados da base",
    "parameters": [
      {
        "name": "acceptLanguage",
        "schema": "string",
        "required": false,
        "description": "Idioma da exportação",
        "default": "en-US"
      },
      {
        "name": "xUserTimezone",
        "schema": "string",
        "required": false,
        "description": "Timezone local do cliente no formato tz database",
        "default": "America/Sao_Paulo"
      },
      {
        "name": "sendTo",
        "schema": "email",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fields",
        "schema": "array",
        "description": ""
      },
      {
        "name": "filters",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/reports/{id}",
    "method": "getDetailsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Recuperar detalhes de uma exportação",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id da exportação",
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
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  },
  {
    "url": "/v1/reports/{id}/files/{pageNumber}",
    "method": "downloadFile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Reports",
    "typeScriptTag": "reports",
    "description": "Fazer download de um arquivo",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "Id da exportação",
        "example": "ID"
      },
      {
        "name": "pageNumber",
        "schema": "int",
        "required": true,
        "description": "Número da página"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "307",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "410",
        "description": ""
      },
      {
        "statusCode": "500",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Documentação Malga API"
      apiBaseUrl="https://api.malga.io"
      apiVersion="0.5"
      endpoints={31}
      sdkMethods={46}
      schemas={242}
      parameters={150}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/malga/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/malga/openapi.yaml"
      developerDocumentation="docs.malga.io/api"
    />
  );
}
  