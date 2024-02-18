# AngularBoilerplate17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.0.

## Development server

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
