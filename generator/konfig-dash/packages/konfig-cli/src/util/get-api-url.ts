import { HomeDirParams } from './ensure-config-setup'

export const TEST_API_PORT = 9999
export const getApiUrl = (params: HomeDirParams): string => {
  // Turns out Node 18+ does not handle "localhost" so use "127.0.0.1" instead
  if (params.mode === 'test') return `http://127.0.0.1:${TEST_API_PORT}`
  if (params.mode === 'dev') return 'http://localhost:8911'
  return 'https://api.konfigthis.com'
}
