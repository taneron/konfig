import * as fs from 'fs-extra'
import {vscodeSettingsJsonPath} from './vscode-settings-json-path'

export const vscodeSettingsJson = ({configDir}: {configDir: string}): Record<string, any> => {
  const path = vscodeSettingsJsonPath({configDir})
  if (fs.existsSync(path)) {
    const json = fs.readFileSync(path, 'utf-8')
    return JSON.parse(json)
  }

  return {}
}
