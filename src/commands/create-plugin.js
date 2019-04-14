const {Command} = require('@oclif/command')
const {createPlugin} = require('../naru')

class CreatePluginCommand extends Command {
  async run() {
    const {args} = this.parse(CreatePluginCommand)
    createPlugin(args, this)
  }
}

CreatePluginCommand.description = 'Create a new plugin.'

CreatePluginCommand.args = [
  {
    name: 'name',
    description: 'Name of plugin',
    required: true,
  },
]

CreatePluginCommand.aliases = ['cpl']

module.exports = CreatePluginCommand
