const {Command} = require('@oclif/command')
const {createStore} = require('../naru')

class CreateStoreCommand extends Command {
  async run() {
    const {args} = this.parse(CreateStoreCommand)
    createStore(args, this)
  }
}

CreateStoreCommand.description = 'Create a new store.'

CreateStoreCommand.args = [
  {
    name: 'name',
    description: 'Name of store',
    required: true,
  },
]

CreateStoreCommand.aliases = ['cs']

module.exports = CreateStoreCommand
