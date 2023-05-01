import { parseKonfigYaml } from './parse-konfig-yaml'

export function getSpecInputPath({ konfigDir }: { konfigDir?: string }) {
  const konfigYaml = parseKonfigYaml({ configDir: konfigDir ?? process.cwd() })
  if (konfigYaml.parsedKonfigYaml.specInputPath)
    return konfigYaml.parsedKonfigYaml.specInputPath
}
