# NgPlayground

This project serves as POC for what ever comes to mind.

It currently features:
- OAuth Code Flow
- Shared library with injectable service

`app1` and `app2` will only build if `common-lib` has been built with `ng build common-lib`.

## Setup and try OAuth Code Flow
1. create a .env file in the project's root folder and set the variable IDP_URL to your identity provider's login endpoint
2. create environment.local.ts in scr/environments:
```
import { environment as DEFAULT } from './environment.default';

export const environment = {
  ...DEFAULT,
  
  oauth_clientId: <CLIENT_ID>,
  oauth_callbackUri: 'http://localhost:4200/oauth/callback/',
  
  oauth_resourceUri: <RESOURCE_URI>,
  oauth_uri: <OAUTH_HOST_URI>,
  oauth_authorize_path: <OAUTH_AUTHORIZATION_PATH>
};
```
3. run the app with `ng serve --configuration=local`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
