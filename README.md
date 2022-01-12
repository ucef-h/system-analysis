## Install

Run `docker-compose build`

Run `docker-compose up -d`

The above will `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Access the container

Run  `docker-compose exec app bash` 

## Access CLI 

Run `npx -p @angular/cli`

## Generate Component 

 Run `npx -p @angular/cli ng g c recipes --skipTests true`

You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.2.

## Lint

Run `npx -p @angular/cli ng lint`

RUN `npx -p @angular/cli ng lint --fix` To fix some issues

## Build for peoducion 

Run `npx -p @angular/cli ng build --prod`

## Test

RUN `docker build -t app-test .`
THEN
RUN `docker run --rm app-test npm run test:ci`

need to build when test change 

### Documentation
- Note that the project use Firebase as backend and the URL should be valid. 
- Please check it if you have an error and make sure to create a new firebase in any case
- Recipe Service contains dummy data that can be uncommented if needed
- Firebase API could have changed and cause the system to break check `AuthService`
- Please make sure to Signup/Login to start
- fetchRecipes contaisn example of nested pipes


### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
