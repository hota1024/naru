const {Command} = require('@oclif/command')
const {createComponent} = require('../naru')

class CreateComponentCommand extends Command {
  async run() {
    const {args} = this.parse(CreateComponentCommand)
    createComponent(args, this)
  }
}

CreateComponentCommand.description = 'Create a new component.'

CreateComponentCommand.args = [
  {
    name: 'name',
    description: 'Name of component',
    required: true,
  },
]

CreateComponentCommand.aliases = ['cc']

module.exports = CreateComponentCommand
