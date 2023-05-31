import type { APIGatewayEvent, Context } from 'aws-lambda'
import axios from 'axios'
import { urlForPythonRceApi } from 'src/lib/urlForPythonRceApi'

export const handler = async (event: APIGatewayEvent, context: Context) => {
  const url = `${urlForPythonRceApi()}/sessions/create`

  const { data } = await axios.post(url)

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }
}
