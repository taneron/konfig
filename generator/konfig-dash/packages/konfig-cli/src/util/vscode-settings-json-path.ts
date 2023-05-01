
export const vscodeSettingsJsonPath = ({configDir}: {configDir: string}): string => {
  return `${configDir}/.vscode/settings.json`
}
