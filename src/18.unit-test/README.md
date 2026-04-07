# Unit Test

To run this tutorial:

```bash
bun run --watch src/18.unit-test/index.ts
```

To run test:

### Bun Test (Default)

```bash
bun test src/18.unit-test/bun.test.ts
```

### Vitest

```bash
bun x vitest run src/18.unit-test/vitest.test.ts
```

### Jest

```
bun x jest src/18.unit-test/jest.test.ts
```

> [!TIP]
> In Bun projects, you can use `bun test` to run tests from almost any library (Vitest, Jest, Mocha style) directly. It natively supports TypeScript and ES Modules without needing extra configuration like `jest.config.js` or `babel.config.js`.

run via Bun Test

```bash
bun test src/18.unit-test/jest.test.ts
```
