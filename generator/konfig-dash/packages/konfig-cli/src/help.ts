import { Help } from '@oclif/core'
import { Command } from '@oclif/core/lib/interfaces'

export default class MyHelpClass extends Help {
  async showCommandHelp(command: Command): Promise<void> {
    if (command.id === 'mock' || command.id === 'lint') {
      this.config.runCommand(command.id, ['help'])
    } else if (command.id === 'diff') {
      this.config.runCommand(command.id, ['--help'])
    } else {
      super.showCommandHelp(command)
    }
  }
}
