import type { APIGatewayEvent, Context } from 'aws-lambda'
import { logger } from 'src/lib/logger'
import { snapTradeGettingStarted } from 'konfig-lib'
import { urlForPythonRceApi } from 'src/lib/urlForPythonRceApi'
import axios from 'axios'

const snippets = {
  snaptrade: snapTradeGettingStarted,
} as const

export const handler = async (event: APIGatewayEvent, context: Context) => {
  const body = event.body !== null ? JSON.parse(event.body) : undefined

  if (body === undefined) throw Error('Missing request body')

  const session_id = body['session_id']

  const demo = body['demo']
  if (demo !== 'snaptrade') throw Error(`Unexpected demo "${demo}"`)
  if (body['id'] === undefined) throw Error('Missing id field')
  const id = parseInt(body['id'])
  if (body['session_id'] === undefined) throw Error('Missing session_id field')

  const url = `${urlForPythonRceApi()}/sessions/execute`
  const { python: code } = snippets['snaptrade'][id]

  const { data } = await axios.post(url, {
    session_id,
    code,
    environment_variables: body.environment_variables,
  })

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
}
