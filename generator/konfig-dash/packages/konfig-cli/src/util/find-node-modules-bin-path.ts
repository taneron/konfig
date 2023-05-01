import findUp from 'find-up'

export const findNodeModulesBinPath = async ({
  name,
  cwd,
}: {
  name: string
  cwd: string
}): Promise<string> => {
  const path = await findUp(`node_modules/.bin/${name}`, { cwd })
  if (path === undefined) throw Error(`Could not find path to '${name}'`)
  return path
}
