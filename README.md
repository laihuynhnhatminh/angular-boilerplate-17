## Getting start

This is a template for an Angular project quick start.

It is for my personal use however one, anyone can try and use it if you want it too.

Any issues to improve the template is welcome.

Project structure is based on SCAM pattern (Single Component Angular Module).

### Checklist:

- [ ] Update project name
- [ ] Update package.json author, email and descriptions
- [ ] Update angular.json outputFile angular-boilerplate-17 with the name of your project
- [ ] Update index.html to your project name/web app name
- [ ] Update firebase.json and .firebaserc or re-init through `yarn firebase init hosting` command
- [ ] Update this README.md file
- [ ] Clean up everything you need to

## Development server

Installing all library for the app

```bash
yarn
```

Everything is setted up to develop in docker environment to make sure everything will be inside a container.

- Hot reload upon code changes.
- Hot rebuild upon package file and angular.json file changes.

```bash
docker compose up
docker compose watch
```

## Linter

This project use Eslint and Eslint-Prettier as the base linter. You can run a manual lint with this command

```bash
ng lint
```

## Build

Before deploying or push code to github. Build the app to check for error.

```bash
yarn build:prod
```

## Github Action Workflows

> Apply on during main branch push and pull request to main branch. By default your repository will not have sufficient permission to run the actions.
>
> In order to grant these permission yout need to go to Setting -> Actions -> General.
>
> There is a sections where you can grant `Read and write permissions` and `Allow GitHub Actions to create and approve pull requests` permissions.

## Enable auto-deployment on merge

> In order to run an auto-deploy on merge feature you can uncomment the commented lines inside `filebase-hosting-merge.yml` file.

> Although you can modify the `firebase.json` and `.firebaserc`, I suggest on re-init firebase to let them create a Oauth link between firebase - github for a quick start on auto deployment.

```bash
yarn build:prod
yarn firebase login
yarn firebase init hosting
```

Notes during firebase init:

- Public directory: dist/project-name/browser
- Single-page application: Yes - unless you want to do ssr and other style of app
- Github action: Can auto-setup here or later by running `yarn firebase init hosting:github`
- Overwrite the index.html file: No
