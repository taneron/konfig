import * as inquirer from 'inquirer'

export async function inquirerConfirm({
  message,
  alwaysYes,
}: {
  message: string
  alwaysYes: boolean
}) {
  if (alwaysYes) return true
  const { confirm } = await inquirer.prompt<{
    confirm: boolean
  }>([
    {
      type: 'confirm',
      name: 'confirm',
      message,
    },
  ])
  return confirm
}
