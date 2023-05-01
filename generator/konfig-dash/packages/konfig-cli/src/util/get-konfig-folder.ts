export const KONFIG_FOLDER_NAME = '.konfig'
export function getKonfigFolder({ dir }: { dir: string }): string {
  return `${dir}/${KONFIG_FOLDER_NAME}`
}
