import type { APIGatewayEvent } from 'aws-lambda'
export const CORS_HEADERS_ORIGIN = {
  'Access-Control-Allow-Origin': 'https://konfigthis.com',
}

export const CORS_HEADERS_ORIGIN_STACKBLITZ = (event: APIGatewayEvent) => ({
  'Access-Control-Allow-Origin': event.headers['origin'],
})

export const CORS_HEADERS_METHOD_HEADERS_STACKBLITZ = {
  'Access-Control-Allow-Method': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export const CORS_HEADERS_METHOD_HEADERS = {
  'Access-Control-Allow-Method': 'POST',
  'Access-Control-Allow-Headers': 'Content-Type',
}
