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
  "compilerOptions": {
    /* Language and Environment */
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,

    /* Modules */
    // "module": "esnext" /* Specify what module code is generated. */,
    "rootDir": "./src" /* Specify the root folder within your source files. */,
    "moduleResolution": "node" /* Specify how TypeScript looks up a file from a given module specifier. */,

    /* JavaScript Support */
    // "allowJs": true,                                  /* Allow JavaScript files to be a part of your program. Use the `checkJS` option to get errors from these files. */
    "checkJs": true /* Enable error reporting in type-checked JavaScript files. */,

    /* Emit */
    "outDir": "./dist" /* Specify an output folder for all emitted files. */,
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables `allowSyntheticDefaultImports` for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,
    "noImplicitAny": true /* Enable error reporting for expressions and declarations with an implied `any` type.. */,

    /* Completeness */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  }
}
```

## Init Jest

`npx ts-jest config:init`

## Configure `pacakge.json`

## Create basic Express app With TypeScript

- app.ts
- server.ts
