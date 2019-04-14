const path = require('path')
const fs = require('fs')
const cli = require('cli-ux').default

function checkFile(path) {
  let exists = false

  try {
    fs.statSync(path)
    exists = true
  } catch(e) {
    exists = false
  }

  return exists
}

function getTemplate(name) {
  return fs.readFileSync(path.join(__dirname, '/templates/' + name), 'utf-8')
}

function componentsPath(p = '') {
  return path.join(config.componentsPath, p)
}

function pagesPath(p = '') {
  return path.join(config.pagesPath, p)
}

function layoutsPath(p = '') {
  return path.join(config.layoutsPath, p)
}

function middlewarePath(p = '') {
  return path.join(config.middlewarePath, p)
}

function pluginsPath(p = '') {
  return path.join(config.pluginsPath, p)
}

function storePath(p = '') {
  return path.join(config.storePath, p)
}

async function writeFile(targetPath, stream, cmd) {
  const paths = targetPath.split('/')
  const name = paths.pop()

  let filePath = './'
  paths.forEach(p => {
    filePath = path.join(filePath, p)
    if (checkFile(filePath) === false) {
      fs.mkdirSync(filePath)
    }
  })

  filePath = path.join(filePath, name)
  const fileExists = checkFile(filePath)

  if (fileExists) {
    const overwrite = await cli.prompt(`${filePath} is already exists. Do you overwrite? (yes/no)`, {
      default: 'no'
    })

    if (overwrite === 'no' || overwrite !== 'yes') {
      return
    }
  }

  fs.writeFileSync(filePath, stream)
  cli.log(fileExists ? `Updated ${filePath}` : `Created ${filePath}`)
}

function compileTemplate(template, data = {}) {
  Object.keys(data).forEach(item => {
    template = template.replace(new RegExp(`<\!-- ?\{${item}\} ?-->`, 'g'), data[item])
  })

  return template
}

function createComponent(args, cmd) {
  writeFile(componentsPath(args.name + '.vue'), compileTemplate(config.templates.component, args), cmd)
}

function createPage(args, cmd) {
  writeFile(pagesPath(args.name + '.vue'), compileTemplate(config.templates.page, args, cmd))
}

function createLayout(args, cmd) {
  writeFile(layoutsPath(args.name + '.vue'), compileTemplate(config.templates.layout, args), cmd)
}

function createMiddleware(args, cmd) {
  writeFile(middlewarePath(args.name + '.js'), compileTemplate(config.templates.middleware, args), cmd)
}

function createPlugin(args, cmd) {
  writeFile(pluginsPath(args.name + '.js'), compileTemplate(config.templates.plugin, args), cmd)
}

function createStore(args, cmd) {
  writeFile(storePath(args.name + '.js'), compileTemplate(config.templates.store, args), cmd)
}

function createConfig(cmd) {
  writeFile('./.naru/naru.config.js', compileTemplate(config.templates.naruConfig), cmd)
}

const defaultConfig = {
  componentsPath: './components',
  pagesPath: './pages',
  layoutsPath: './layouts',
  middlewarePath: './middleware',
  pluginsPath: './plugins',
  storePath: './store',
  templates: {
    component: getTemplate('component.vue'),
    page: getTemplate('page.vue'),
    layout: getTemplate('layout.vue'),
    middleware: getTemplate('middleware.js'),
    plugin: getTemplate('plugin.js'),
    store: getTemplate('store.js'),
    naruConfig: getTemplate('naru.config.js'),
  }
}

let config = {}

function intConfig(other) {
  config = {
    ...config,
    ...other
  }
}

function initialize() {
  intConfig(defaultConfig)

  if (checkFile('./.naru/naru.config.js')) {
    let naruConfig = require(path.join(process.cwd(), '.naru/naru.config.js'))
    intConfig(naruConfig)
  }

  Object.keys(config.templates).forEach(name => {
    if (checkFile(`./.naru/${name}.vue`)) {
      config.templates[name] = fs.readFileSync(`./.naru/${name}.vue`, 'utf-8')
    }
  })
}
initialize()

exports.createComponent = createComponent
exports.createPage = createPage
exports.createLayout = createLayout
exports.createMiddleware = createMiddleware
exports.createPlugin = createPlugin
exports.createStore = createStore
exports.createConfig = createConfig
