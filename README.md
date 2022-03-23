# ts-express-jest-supertest

## Init project & import imports

- Create directory and inititialize a new project `npm init -y`
- Import dependencies `npm i express`
- import dev-dependencies `npm i --save-dev typescript supertest nodemon jest ts-jest ts-node @types/jest @types/supertest @types/express`

## Init TypeScript

`npx tsc --init`

## Configure tsconfig.json

```json
{
  "exclude": ["./coverage", "./dist", "__tests__", "jest.config.js"],
  "ts-node": {
    "transpileOnly": true,
    "files": true
  },
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./src",
    "moduleResolution": "node",
    // "allowJs": true,
    "checkJs": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "skipLibCheck": true
  }
}
```

## Init Jest

`npx ts-jest config:init`

```js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

## Configure `pacakge.json`

Make sure your script section includes the following.

```js
"scripts": {
   "test": "jest --coverage",
   "dev": "nodemon ./src/server.ts",
   "build": "tsc"
}
```

## Create basic Express app With TypeScript

- app.ts

```ts
function dontForgetToShowSomethingHere();
```

- server.ts

```ts
function dontForgetToShowSomethingHere();
```

## Add a .gitignore

add the following because you don't wanna muck up git
TODO: explain why we want to ignore coverage, jest.config.js, and dist

```
node_modules
coverage
jest.config.js
todo.txt
dist
```

### OTHER READ ME

1. init project & imports
   `npm init -y`
   `npm i express`
   `npm i --save-dev typescript supertest nodemon jest ts-jest ts-node @types/jest @types/supertest @types/express`

1. configure `package.json`

1. init TS
   `npx tsc --init`

1. init Jest
   `npx ts-jest config:init`

1. Create a basic Express app with TypeScript
   create an app.ts
   create a server.ts
   create a basic app.ts level route

   - test this in the browser

create a routes dir and a user route in there
pull those into app.ts

- test this in the browser

1. Use Jest and Supertest to test your app

- in the root of your project, create a **tests** dir (this is a convension, explain why)
- in that dir, recreate your project setup
- in the server.test.ts file, we will create a quick test to show jest intagration
- then do first route test for the catch all route
- then do the users route

- what is the terminal command to run just one jest test?
- where should i keep the **tests** folder in a TS project?
