# ts-express-jest-supertest

## Init project & import imports

- create dir and init project `npm init -y`
- import deps `npm i express`
- import dev-deps `npm i --save-dev typescript supertest nodemon jest ts-jest ts-node @types/jest @types/supertest @types/express`

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
    /* Projects */

    /* Language and Environment */
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,

    /* Modules */
    "module": "commonjs" /* Specify what module code is generated. */,
    "rootDir": "./src" /* Specify the root folder within your source files. */,
    "moduleResolution": "node" /* Specify how TypeScript looks up a file from a given module specifier. */,

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    "checkJs": true /* Enable error reporting in type-checked JavaScript files. */,

    /* Emit */
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,

    /* Interop Constraints */
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,
    "noImplicitAny": true /* Enable error reporting for expressions and declarations with an implied `any` type.. */,
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
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

```js
"scripts": {
   "test": "jest --coverage",
   "dev": "nodemon ./src/server.ts",
   "build": "tsc"
}
```

## Create basic Express app With TypeScript

- app.ts
- server.ts

## .gitignore

add the following because you don't wanna muck up git

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
