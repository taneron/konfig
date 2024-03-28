import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function DuckyTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="ducky-typescript-sdk"
      metaDescription={`Hello there! 👋🏼 We're Ducky, climate enthusiasts passionate about steering the world towards data-driven climate action. We empower YOU to seamlessly track, reduce, and report your climate emissions with our intuitive software solutions. 

💪🏼 So far, we've assisted over 300 organisations and 90,000 individuals worldwide in becoming more sustainable – and we'd love to help you, too! 

Would any of our solutions be suitable for you?👇🏽

🌍 Seamless Climate Reporting:
Initiate climate reporting easily, quickly, and at an affordable price! Our platform automates climate reporting according to all requirements, ensuring excellent results with just a few clicks and a user-friendly interface.

🚲 Holistic Mobility Data:
In collaboration with Telia, we provide data to assist mobility planners and property developers in transitioning to a sustainable mobility system in your city. Track travel patterns and measure the climate impact of changes over time.

🌱 Climate Campaign Manager:
Turn climate actions into a fun, team-building, and engaging process. Set up educational climate challenges within your company and foster a culture where climate action feels like a shared responsibility.

🎯 We focus on consumption-based carbon emissions.
🦆 Our team comprises 18 dedicated climate enthusiasts.
📍 We have offices in Trondheim and Oslo.
💬 Get in touch with us via DM or through our website: www.ducky.eco`}
      company="Ducky"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ducky/logo.png"
      companyKebabCase="ducky"
      clientNameCamelCase="ducky"
      homepage="www.ducky.eco/"
      lastUpdated={new Date("2024-03-28T21:43:38.663Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ducky/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ducky/imagePreview.png"
      GettingStarted={GettingStarted}
      FirstRequest={FirstRequest}
      categories={["sustainability","climate_action","climate_reporting","data_driven","environmental_technology","climate_management","climate_solutions","climate_impact_measurement","climate_data_api","climate_software","climate_awareness","climate_data"]}
      methods={[
  {
    "url": "/calculate/finance",
    "method": "financialFootprintForTransactions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "calculate",
    "typeScriptTag": "calculate",
    "description": "Get kgCO2e per monetary transaction",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "categoryMapping",
        "schema": "string",
        "description": "Format output based on a custom mapping",
        "default": "ducky"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "habits",
        "schema": "object",
        "required": false,
        "description": ""
      },
      {
        "name": "transactions",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Consumption for each transaction.\n"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/calculate/food-and-drink",
    "method": "foodAndDrinkMetrics",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "calculate",
    "typeScriptTag": "calculate",
    "description": "Get kgCO2e, weight, waste, and money spent per food category.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "food",
        "schema": "object",
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
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
    "url": "/calculator",
    "method": "annualFootprintByCategories",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "calculate",
    "typeScriptTag": "calculate",
    "description": "Calculate annual footprint by categories",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "categories",
        "schema": "array",
        "description": "Categories to include in response",
        "default": "[\"public\",\"consumption\",\"transport\",\"food\",\"energy\"]"
      },
      {
        "name": "subCategories",
        "schema": "boolean",
        "description": "Include subcategories",
        "default": false
      },
      {
        "name": "scope",
        "schema": "string",
        "description": "Is the footprint for an individual or a household",
        "default": "household"
      },
      {
        "name": "precision",
        "schema": "boolean",
        "description": "Prevent rounding of percentages",
        "default": false
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "consumption",
        "schema": "object",
        "description": ""
      },
      {
        "name": "energy",
        "schema": "object",
        "description": ""
      },
      {
        "name": "food",
        "schema": "object",
        "description": ""
      },
      {
        "name": "household",
        "schema": "object",
        "description": ""
      },
      {
        "name": "transport",
        "schema": "object",
        "description": ""
      },
      {
        "name": "user",
        "schema": "object",
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
    "url": "/change",
    "method": "improveBehaviourTips",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "change",
    "typeScriptTag": "change",
    "description": "Get tips for improving behaviour.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Region of the requested data set",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'.\n\nWe provide historical data only for the values of the returned indicators.\n\n[See detailed user documentation here](https://support.ducky.eco/en/change-general)\nPlease note that some indicators have \"static\" values and do not support historical data.\n"
      },
      {
        "name": "language",
        "schema": "string",
        "description": "Language of the text returned",
        "default": "no"
      },
      {
        "name": "orderBy",
        "schema": "string",
        "description": "Order the results using the specified attribute.\nThe attributes of type \"indicator\" (co2, points, moneySaved) are sorted by descending order.\nThe attributes of type \"investment\" (financialCost, timeRequirement, socialDifficulty) are sorted by ascending order.\n",
        "default": "co2"
      },
      {
        "name": "returnLegacyTipId",
        "schema": "boolean",
        "description": "Choose whether the legacy tipID should be outputted.\n",
        "default": false
      },
      {
        "name": "ignoreZeroOrNegativeTips",
        "schema": "boolean",
        "description": "Choose whether to ignore tips that would produce a zero or negative impact in terms of CO2 footprint.\nSuch cases will happen if a user already has good habits on some area, and the tip concerns improving behaviour exactly on this subject, but to a lesser extent than the user is already doing.\nTips where this is the case are by default removed to avoid crowding the output with tips that are not helpful.\n",
        "default": true
      },
      {
        "name": "filteringCriteria",
        "schema": "object",
        "description": ""
      },
      {
        "name": "habits",
        "schema": "object",
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
    "url": "/compare/food-and-drink",
    "method": "averageFootprintByFilteringCriteria",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "compare",
    "typeScriptTag": "compare",
    "description": "Fetch an average food-and-drink footprint based on filtering criteria.",
    "parameters": [
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/compare/general",
    "method": "averageCategoryFootprint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "compare",
    "typeScriptTag": "compare",
    "description": "Fetch an average category-based footprint based on filtering criteria.",
    "parameters": [
      {
        "name": "filters",
        "schema": "object",
        "required": true,
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
    "url": "/compare/transport",
    "method": "transportFootprint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "compare",
    "typeScriptTag": "compare",
    "description": "Fetch transport footprint for a given area.",
    "parameters": [
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "areaId",
        "schema": "string",
        "required": true,
        "description": "Area code of the area for which transport footprint is requested. [See detailed area ID documentation](https://doc.api.ducky.eco/area-ids-mapping) for mapping between area names and their codes.\n",
        "example": "no-3024"
      },
      {
        "name": "timeRange",
        "schema": "string",
        "description": "Choose which time range you wish to receive data for. Currently the most granular data available is per month, which means that if a monthly range is requested, you will directly receive the data for the requested month. If you choose a yearly range, the values are a sum of all monthly values accross the given year.\n",
        "default": "monthly"
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
    "url": "/convert/energy",
    "method": "kgCo2EPerKwhUsed",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "convert",
    "typeScriptTag": "convert",
    "description": "Get kgCO2e per kWh used.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "categories",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A mapping with the categories provided in the input.\nOther categories are not included.\n\nEach category contains the amount of CO2 equivalent, both in kilograms.\n"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/convert/finance",
    "method": "financialFootprintByCategory",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "convert",
    "typeScriptTag": "convert",
    "description": "Get footprint in kilograms of CO2-equivalents for financial transactions\nby category.\n",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "categories",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A mapping with the categories provided in the input.\nOther categories are not included.\n\nEach category contains the amount of CO2 equivalent, both in kilograms.\n"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/convert/food-and-drink",
    "method": "foodAndDrinkFootprint",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "convert",
    "typeScriptTag": "convert",
    "description": "Get kgCO2e per calory or weight of Food and Drink.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "categories",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A mapping with the categories provided in the input.\nOther categories are not included.\n\nEach category contains the weight and the amount of CO2 equivalent, both in kilograms.\n"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/convert/goods-and-services",
    "method": "itemFootprintAndSavings",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "convert",
    "typeScriptTag": "convert",
    "description": "Get footprint of an item and optionally the avoided emissions obtained by choosing to rent, repair or buy an item used instead of new.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
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
    "url": "/convert/goods-and-services/list-items",
    "method": "goodsAndServicesListItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "convert",
    "typeScriptTag": "convert",
    "description": "Get a list of all valid items for the convert/goods-and-services endpoint.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
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
    "url": "/convert/transport",
    "method": "transportEmissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "convert",
    "typeScriptTag": "convert",
    "description": "Get kgCO2e per distance travelled.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "categories",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A mapping with the categories provided in the input.\nOther categories are not included.\n\nEach category contains the amount of CO2 equivalent, both in kilograms.\n"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/ping",
    "method": "statusCheck",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ping",
    "typeScriptTag": "ping",
    "description": "Check if the API is running",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/ping/protected",
    "method": "checkTokenValidity",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "ping",
    "typeScriptTag": "ping",
    "description": "Check if the API is running and if your authentication token is valid",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/report/scope-1",
    "method": "computeScope1Emissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reporting",
    "typeScriptTag": "reporting",
    "description": "Compute Scope 1 GHG emissions.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "required": false,
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "required": false,
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n",
        "default": "today"
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
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
    "url": "/report/scope-2",
    "method": "computeScope2Emissions",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reporting",
    "typeScriptTag": "reporting",
    "description": "Compute Scope 2 GHG emissions.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "required": false,
        "description": "Data Source to use for calculation",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "required": false,
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n",
        "default": "today"
      },
      {
        "name": "entries",
        "schema": "array",
        "required": true,
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
    "url": "/track/transport",
    "method": "transportIndicators",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "track",
    "typeScriptTag": "track",
    "description": "Get indicators for a certain administrative area.",
    "parameters": [
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "timeRange",
        "schema": "string",
        "description": "Choose which time range you wish to receive data for. Currently the most granular data available is per month, which means that if a monthly range is requested, you will directly receive the data for the requested month. If you choose a yearly range, the values are an average of all monthly values accross the given year\n",
        "default": "monthly"
      },
      {
        "name": "areaId",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "no-5001"
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
      }
    ]
  },
  {
    "url": "/translate/car",
    "method": "co2EToCarDistance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "translate",
    "typeScriptTag": "translate",
    "description": "Translate kilograms CO2 equivalent to distance travelled by car",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Region of the requested data set",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "kgco2e",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of valid translations\n"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/translate/energy",
    "method": "co2EToEnergyUsage",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "translate",
    "typeScriptTag": "translate",
    "description": "Translate kilograms CO2 equivalent to the usage of an electrical appliance.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Region of the requested data set",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "kgco2e",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of valid translations\n"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/translate/plane",
    "method": "co2EToPlaneDistance",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "translate",
    "typeScriptTag": "translate",
    "description": "Translate kilograms CO2 equivalent to distance flown by an airplane.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Region of the requested data set",
        "default": "norway"
      },
      {
        "name": "dataFromDate",
        "schema": "string",
        "description": "You can choose to use data from any date for which we have data\nin our database. If you do not submit a date, the current (and thereby the\nmost updated data) will be used. Must be of format 'yyyy-mm-dd'\n"
      },
      {
        "name": "kgco2e",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "A list of valid translations\n"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  },
  {
    "url": "/translate/tree",
    "method": "co2EToTreeArea",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "translate",
    "typeScriptTag": "translate",
    "description": "Translate kilograms CO2 equivalent to how quickly it can be absorbed by a number of trees.",
    "parameters": [
      {
        "name": "dataSource",
        "schema": "string",
        "description": "Region of the requested data set",
        "default": "norway"
      },
      {
        "name": "kgco2e",
        "schema": "number",
        "required": true,
        "description": "",
        "example": 100
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "An area of trees absorbing the given amount of kg CO2e per year\n"
      },
      {
        "statusCode": "400",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Ducky Data V3 - climate data APIs"
      apiBaseUrl="https://api.ducky.eco/v3"
      apiVersion="3.0.0"
      endpoints={22}
      sdkMethods={22}
      schemas={80}
      parameters={71}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/ducky/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/ducky/openapi.yaml"
      developerDocumentation="doc.api.ducky.eco/"
    />
  );
}
  