const {Command} = require('@oclif/command')
const {createPage} = require('../naru')

class CreatePage extends Command {
  async run() {
    const {args} = this.parse(CreatePage)
    createPage(args, this)
  }
}

CreatePage.description = 'Create a new page.'

CreatePage.args = [
  {
    name: 'name',
    description: 'Name(path) of page',
    required: true,
  },
]

CreatePage.aliases = ['cp']

module.exports = CreatePage
