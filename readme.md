<p align="center">
  <a href="https://github.com/gcleiton/ts-api-boilerplate">
    <img src="./public/typescript-logo.svg" alt="Typescript logo" width="200" height="165">
  </a>
</p>

<h1 align="center" style="font-weight: 600;">Typescript API Boilerplate</h1>

<p align="center">
  A personal boilerplate that I use in my Node APIs with Typescript.
</p>

## Status

[![Code Scanning](https://github.com/gcleiton/ts-api-boilerplate/actions/workflows/code-scanning.yml/badge.svg)](https://github.com/gcleiton/ts-api-boilerplate/actions/workflows/code-scanning.yml) [![Continuous Integration](https://github.com/gcleiton/ts-api-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/gcleiton/ts-api-boilerplate/actions/workflows/ci.yml)


## How to use

There are a few options for using this template:

- Clone the repository: `git clone https://github.com/gcleiton/ts-api-boilerplate.git`
- Create new repository: click [Use this template](https://github.com/gcleiton/ts-api-boilerplate/generate) button at the top of this repository
- Github CLI: `gh repo create myrepo --template https://github.com/gcleiton/ts-api-boilerplate.git`

## Commands

- `start`: runs the application in the production mode
- `build`: builds the application version for production 
- `build:watch`:  builds the application in the interactive watch mode
- `debug`:  observes changes with nodemon
- `up`:  runs the application with docker
- `down`:  stops the application with docker
- `lint`: runs linter on project 
- `test`: launches the test runner
- `test:unit`: launches the test runner only in unit tests (.spec)
- `test:integration`: launches the test runner only in integration tests (.test)
- `test:staged`: launches the test runner only files on staged area (used in pre-commit hook integration)
- `test:ci`: launches the test runner with coverage

## Libraries and tools

- Typescript
- Express
- Jest
- Nodemon
- Rimraf
- ESLint
- Prettier
- Husky
- Lint Staged
- Git Commit Message Linter
- EditorConfig
- Git
- Github Workflows
- Yarn


## Mentions

I would like to thank the knowledge passed on by the instructor [Rodrigo Manguinho](https://github.com/rmanguinho) where through them I was able to create this boilerplate that I use in my typescript api projects.
