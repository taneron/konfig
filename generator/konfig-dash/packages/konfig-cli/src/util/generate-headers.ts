import { HomeDirParams } from './ensure-config-setup'
import { getSessionToken } from './get-session-token'
import { getUserId } from './get-user-id'

export const generateHeaders = (
  params: HomeDirParams
): Record<string, string | number | boolean> => {
  if (params.mode === 'test') {
    return {
      'Content-Type': 'application/json',
    }
  }
  return {
    'auth-provider': 'dbAuth',
    'Content-Type': 'application/json',
    authorization: `Bearer ${getUserId(params)}`,
    Cookie: `session=${getSessionToken(params)}`,
  }
}
