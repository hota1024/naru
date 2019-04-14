const {Command} = require('@oclif/command')
const {createMiddleware} = require('../naru')

class CreateMiddlewareCommand extends Command {
  async run() {
    const {args} = this.parse(CreateMiddlewareCommand)
    createMiddleware(args, this)
  }
}

CreateMiddlewareCommand.description = 'Create a new middleware.'

CreateMiddlewareCommand.args = [
  {
    name: 'name',
    description: 'Name of middleware',
    required: true,
  },
]

CreateMiddlewareCommand.aliases = ['cm']

module.exports = CreateMiddlewareCommand
