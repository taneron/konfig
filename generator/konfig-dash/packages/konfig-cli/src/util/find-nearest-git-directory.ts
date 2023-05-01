import * as path from 'path'
import findUp from 'find-up'

export const findNearestGitDirectory = async ({
  cwd,
}: {
  cwd: string
}): Promise<string | undefined> => {
  return await findUp(
    (directory) => {
      const exists = findUp.sync.exists(path.join(directory, '.git'))
      return exists ? directory : undefined
    },
    { type: 'directory' }
  )
}
