
## Conctacts api

[web client](https://github.com/neyderF/contacts_web_app) client here

## Installation

```bash
$ npm install
```


## Before run the app

you must import the database that you will find in the db folder, or create a database contacts and configure the credentials in the app.module.ts

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

for access to app you can use a username `nfs` and a password `nfs` if you imported existing the database or also you can create an account using the endpoint `/auth/signup` and sending an username and a password.

## Test

```bash

# e2e tests
$ npm run test:e2e


## License

Nest is [MIT licensed](LICENSE).
