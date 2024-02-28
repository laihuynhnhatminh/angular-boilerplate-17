# Angular 17 Template

This is a template for an Angular project quickstart
Project structure is based on SCAM pattern (Single Component Angular Module)

## Development server

Installing all library for the app

```bash
yarn
```

Everything is setted up to develop in docker environment to make sure everything will be inside a container.
Hot reload upon code changes.
Hot rebuild upon package file and angular.json file changes.

```bash
docker compose up
docker compose watch
```

## Linter

This project use Eslint and Eslint-Prettier as the base linter. You can run a manual lint with this command

```bash
ng lint
```

## Github Action Workflows

Apply on during main branch push and pull request to main branch. By default your repository will not have sufficient permission to run the actions.
In order to grant these permission yout need to go to Setting -> Actions -> General.
There is a sections where you can grant `Read and write permissions` and `Allow GitHub Actions to create and approve pull requests` permissions.

## Enable auto-deployment on merge

In order to run an auto-deploy on merge feature you can uncomment the commented lines inside `filebase-hosting-merge.yml` file.
Then run these commands:

```bash
yarn build:prod
node_modules/.bin/firebase login
node_modules/.bin/firebase init hosting
```

Notes during firebase init:

- Public directory: dist/project-name/browser
- Single-page application: Yes - unless you want to do ssr and other style of app
- Github action: Can auto-setup here or later by running `node_modules/.bin/firebase init hosting:github`
- Overwrite the index.html file: No

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
