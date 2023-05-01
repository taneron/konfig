import { getKonfigFolder } from './get-konfig-folder'

export const getLastGenerateIdPath = ({
  sdkDir,
}: {
  sdkDir: string
}): string => {
  return `${getKonfigFolder({ dir: sdkDir })}/generate-id.txt`
}
