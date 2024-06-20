# Cypress-Store
[![Tests status](https://github.com/JakubRumpca/Cypress-Store/actions/workflows/pipeline.yml/badge.svg)](https://github.com/JakubRumpca/Cypress-Store/actions/workflows/pipeline.yml)

The repository contains cypress automated tests of the online store available at https://www.saucedemo.com/. The website was created for training purposes, where you can practice testing web applications on it, so using bots such as automatic tests is allowed and does not violate the regulations.

## Technologies

- **JavaScript**
- **Node** - Version used -> 20. (It is required for dependency installation)
- **NPM** - Version used -> 10.

## Repository content

- **/cypress/e2e** - Main location for all E2E tests.
- **/cypress/page_objects** - Contains page definitions (Page Objects) that facilitate test maintenance and enable code reuse.
- **cypress.config.ts** - Cypress configuration file that contains settings for the test environment.
- **cypress.env.json.template** - User data should be hidden, but the application was created for training purposes. Secrets are available on the login page so I do not hide them in this repository, but cypress.env.json file was added to .gitignore file as should. After removing ".template" from the file name, you can run the tests.
- **/.github/workflows/pipeline.yml** - File that contains Continuous Integration/Continuous Deployment (CI/CD) configuration.
- **TEST_CASES.md** - File that contains test cases of the implemented tests.

## How to run tests

To run the tests, follow these steps:

1. Install dependencies:

```bash
npm install
```

2. remove **.template** from the file name **cypress.env.json.template**. It defines the secrets needed to log in.

```bash
cp cypress.env.json.template cypress.env.json
```

3. To runs e2e tests:

```bash
npm run cy:open
```

The command starts the test management tool in which you should select the type of tests (e2e testing) and then the browser. After that click 'Start E2E Testing in (browser name)' button, the tool will open in your selected browser. To run a test, select it from the list.