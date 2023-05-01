import * as shell from 'shelljs'

const commands = [
  'git show-branch -a', //  Get git branch
  "grep '*'",
  'grep -v "$(git rev-parse --abbrev-ref HEAD)"',
  'head -n1',
  "sed 's/.*\\[\\(.*\\)\\].*/\\1/'",
  "sed 's/[\\^~].*//'",
]

export const getParentBranch = () => {
  const result = shell.exec(commands.join(' | '), { silent: true })
  return result.stdout
}
