import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import {
  LintRequestBody,
  LintResponseBody,
  LintResponseBodyType,
} from 'konfig-openapi-spec'
import ruleset from 'konfig-spectral-ruleset'
import { Spectral } from '@stoplight/spectral-core'
import {
  CORS_HEADERS_METHOD_HEADERS_LINT,
  CORS_HEADERS_ORIGIN_LINT,
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
      headers: {
        ...CORS_HEADERS_METHOD_HEADERS_LINT,
        ...CORS_HEADERS_ORIGIN_LINT,
      },
    }
  }
  if (event.body === null) {
    logger.error(
      'Invalid request to /lint. Expected request body to be non-empty.'
    )
    return {
      statusCode: 400,
    }
  }

  const parsed = LintRequestBody.safeParse(JSON.parse(event.body))
  if (parsed.success === false) {
    logger.error(parsed.error)
    logger.error('Invalid request to /lint')
    return {
      statusCode: 400,
    }
  }

  const spectral = new Spectral()
  spectral.setRuleset(ruleset)
  const diagnosis = await spectral.run(parsed.data.spec)

  const responseBody: LintResponseBodyType = {
    diagnosis,
    passed: diagnosis.length === 0,
  }
  return {
    statusCode: 200,
    headers: {
      ...CORS_HEADERS_ORIGIN_LINT,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(LintResponseBody.parse(responseBody)),
  }
}
