naru
====

Nuxt utility

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/naru.svg)](https://npmjs.org/package/naru)
[![Downloads/week](https://img.shields.io/npm/dw/naru.svg)](https://npmjs.org/package/naru)
[![License](https://img.shields.io/npm/l/naru.svg)](https://github.com/hota1024/naru/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g naru
$ naru COMMAND
running command...
$ naru (-v|--version|version)
naru/0.0.0 darwin-x64 node-v11.12.0
$ naru --help [COMMAND]
USAGE
  $ naru COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`naru config`](#naru-config)
* [`naru create-component NAME`](#naru-create-component-name)
* [`naru create-layout NAME`](#naru-create-layout-name)
* [`naru create-middleware NAME`](#naru-create-middleware-name)
* [`naru create-page NAME`](#naru-create-page-name)
* [`naru create-plugin NAME`](#naru-create-plugin-name)
* [`naru create-store NAME`](#naru-create-store-name)
* [`naru help [COMMAND]`](#naru-help-command)

## `naru config`

Create .naru/naru.config.js

```
USAGE
  $ naru config
```

_See code: [src/commands/config.js](https://github.com/hota1024/naru/blob/v0.0.0/src/commands/config.js)_

## `naru create-component NAME`

Create a new component.

```
USAGE
  $ naru create-component NAME

ARGUMENTS
  NAME  Name of component

ALIASES
  $ naru cc
```

_See code: [src/commands/create-component.js](https://github.com/hota1024/naru/blob/v0.0.0/src/commands/create-component.js)_

## `naru create-layout NAME`

Create a new layout.

```
USAGE
  $ naru create-layout NAME

ARGUMENTS
  NAME  Name of layout

ALIASES
  $ naru cl
```

_See code: [src/commands/create-layout.js](https://github.com/hota1024/naru/blob/v0.0.0/src/commands/create-layout.js)_

## `naru create-middleware NAME`

Create a new middleware.

```
USAGE
  $ naru create-middleware NAME

ARGUMENTS
  NAME  Name of middleware

ALIASES
  $ naru cm
```

_See code: [src/commands/create-middleware.js](https://github.com/hota1024/naru/blob/v0.0.0/src/commands/create-middleware.js)_

## `naru create-page NAME`

Create a new page.

```
USAGE
  $ naru create-page NAME

ARGUMENTS
  NAME  Name(path) of page

ALIASES
  $ naru cp
```

_See code: [src/commands/create-page.js](https://github.com/hota1024/naru/blob/v0.0.0/src/commands/create-page.js)_

## `naru create-plugin NAME`

Create a new plugin.

```
USAGE
  $ naru create-plugin NAME

ARGUMENTS
  NAME  Name of plugin

ALIASES
  $ naru cpl
```

_See code: [src/commands/create-plugin.js](https://github.com/hota1024/naru/blob/v0.0.0/src/commands/create-plugin.js)_

## `naru create-store NAME`

Create a new store.

```
USAGE
  $ naru create-store NAME

ARGUMENTS
  NAME  Name of store

ALIASES
  $ naru cs
```

_See code: [src/commands/create-store.js](https://github.com/hota1024/naru/blob/v0.0.0/src/commands/create-store.js)_

## `naru help [COMMAND]`

display help for naru

```
USAGE
  $ naru help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_
<!-- commandsstop -->
