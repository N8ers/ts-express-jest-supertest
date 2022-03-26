# ts-express-jest-supertest

This is a supplamental repo for [this article on dev.to](https://dev.to/nathan_sheryak/how-to-test-a-typescript-express-api-with-jest-for-dummies-like-me-4epd).

## Init project & import imports

- Create directory and inititialize a new project `npm init -y`
- Import dependencies `npm i express`
- import dev-dependencies `npm i --save-dev typescript supertest nodemon jest ts-jest ts-node @types/jest @types/supertest @types/express`

## Init TypeScript

`npx tsc --init`

The above command will generate a `tsconfig.json` file. You'll want to modify it with the below. Not every item is nessessary, feel free to further configure it to match your needs.

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

The above command will generate a `jest.config.js` file. You'' want to modify it with the below.

```js
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

## Create basic Express app With TypeScript

- app.ts

```ts
import express, { Application, Request, Response, NextFunction } from "express";

import { router as userRoutes } from "./routes/user.routes";

const app: Application = express();

app.use("/users", userRoutes);

app.use("/", (req: Request, res: Response, next: NextFunction): void => {
  res.json({ message: "Allo! Catch-all route." });
});

export default app;
```

- server.ts

```ts
import app from "./app";

const PORT: Number = 5050;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
```

- user.routes.ts

```ts
import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response): void => {
  let users = ["Goon", "Tsuki", "Joe"];
  res.status(200).send(users);
});

export { router };
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

## Making sure our API is working

## Writing our tests

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

## Outline

1. init project and imports
1. init typescript and modify config
1. init jest and modify config
1. setup scripts in package.json
1. setup basic ts/express app w/ a route (and run it in browser)
1. write a jest test for all 3 files (explain coverage)
1. gitignore (and why we are ignoreing them)
