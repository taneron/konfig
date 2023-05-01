import * as fs from 'node:fs'
import { getLastGenerateIdPath } from './get-last-generate-id-path'
export const getLastGenerateId = ({ sdkDir }: { sdkDir: string }): string => {
  return fs.readFileSync(getLastGenerateIdPath({ sdkDir }), 'utf-8')
}
