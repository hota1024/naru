const {Command} = require('@oclif/command')
const {createConfig} = require('../naru')

class ConfigCommand extends Command {
  async run() {
    createConfig(this)
  }
}

ConfigCommand.description = 'Create .naru/naru.config.js'

module.exports = ConfigCommand
