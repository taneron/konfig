import * as fs from 'fs-extra'
import tar from 'tar'

export const tarDir = async (
  dir: string,
  outputPath: string
): Promise<Buffer> => {
  await tar.c(
    {
      gzip: true,
      file: outputPath,
      cwd: dir,
    },
    ['./']
  )
  return fs.readFileSync(outputPath)
}
