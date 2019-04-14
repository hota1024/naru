const {Command} = require('@oclif/command')
const {createLayout} = require('../naru')

class CreateLayoutCommand extends Command {
  async run() {
    const {args} = this.parse(CreateLayoutCommand)
    createLayout(args, this)
  }
}

CreateLayoutCommand.description = 'Create a new layout.'

CreateLayoutCommand.args = [
  {
    name: 'name',
    description: 'Name of layout',
    required: true,
  },
]

CreateLayoutCommand.aliases = ['cl']

module.exports = CreateLayoutCommand
