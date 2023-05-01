import { parseKonfigYaml } from './parse-konfig-yaml'

export function getSpecPath({ konfigDir }: { konfigDir?: string }) {
  const konfigYaml = parseKonfigYaml({ configDir: konfigDir ?? process.cwd() })
  if (konfigYaml.parsedKonfigYaml.specPath)
    return konfigYaml.parsedKonfigYaml.specPath
}
