import type { APIGatewayEvent, Context } from 'aws-lambda'
import { Spec, getOperations, parseSpec } from 'konfig-lib'
import {
  CORS_HEADERS_METHOD_HEADERS,
  CORS_HEADERS_ORIGIN,
} from 'src/lib/cors-headers'

/**
 * The handler function is your code that processes http request events.
 * You can use return and throw to send a response or error, respectively.
 *
 * Important: When deployed, a custom serverless function is an open API endpoint and
 * is your responsibility to secure appropriately.
 *
 * @see {@link https://redwoodjs.com/docs/serverless-functions#security-considerations|Serverless Function Considerations}
 * in the RedwoodJS documentation for more information.
 *
 * @typedef { import('aws-lambda').APIGatewayEvent } APIGatewayEvent
 * @typedef { import('aws-lambda').Context } Context
 * @param { APIGatewayEvent } event - an object which contains information from the invoker.
 * @param { Context } context - contains information about the invocation,
 * function, and execution environment.
 */
export const handler = async (event: APIGatewayEvent, context: Context) => {
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: { ...CORS_HEADERS_METHOD_HEADERS, ...CORS_HEADERS_ORIGIN },
    }
  }
  if (event.body === null) throw Error('Missing Request body')

  const { spec } = await parseSpec(event.body)

  const numberOfOperations = computeNumberOfOperations({ spec })
  const numberOfSchemas = computeNumberOfSchemas({ spec })
  const numberOfParameters = computeNumberOfParameters({ spec })

  return {
    statusCode: 200,
    headers: {
      ...CORS_HEADERS_ORIGIN,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      numberOfOperations,
      numberOfSchemas,
      numberOfParameters,
    }),
  }
}

function computeNumberOfOperations({ spec }: { spec: Spec['spec'] }): number {
  const operations = getOperations({ spec })
  return operations.length
}

function computeNumberOfParameters({ spec }: { spec: Spec['spec'] }): number {
  const operations = getOperations({ spec })
  return operations.reduce((acc, { operation }) => {
    const parameters = operation.parameters?.length ?? 0
    const requestBodyParameters = operation.requestBody ? 1 : 0
    return acc + parameters + requestBodyParameters
  }, 0)
}

function computeNumberOfSchemas({ spec }: { spec: Spec['spec'] }): number {
  if (spec.components === undefined) return 0
  if (spec.components.schemas === undefined) return 0
  return Object.keys(spec.components.schemas).length
}
