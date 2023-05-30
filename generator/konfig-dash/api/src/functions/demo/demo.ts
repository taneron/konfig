import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { DemoGetResponseBody } from 'konfig-openapi-spec'

const data = {
  snaptrade: {
    demos: [
      {
        type: 'header_1',
        header_1: {
          rich_text: [
            {
              type: 'text',
              text: {
                content: '1) Initialize a client with your',
              },
            },
            {
              type: 'text',
              text: {
                content: 'clientId',
              },
              annotations: {
                code: true,
              },
            },
          ],
        },
      },
    ],
  } as DemoGetResponseBody,
} as const

export const handler = async (event: APIGatewayEvent, context: Context) => {
  if (event.httpMethod === 'GET') {
    if (event.queryStringParameters === null)
      throw Error(`Missing query parameter "id"`)
    const { id } = event.queryStringParameters
    if (id === 'snaptrade') {
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data[id]),
      }
    }
    throw Error(`Demo with ID "${id}" not found`)
  }

  throw Error(`${event.httpMethod} not implemented`)
}
