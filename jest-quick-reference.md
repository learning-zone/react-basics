# Jest Quick Reference

- [Test structure](#test-structure)
- [Matchers](#matchers)
  - [Basic matchers](#basic-matchers)
  - [Truthiness](#truthiness)
  - [Numbers](#numbers)
  - [Strings](#strings)
  - [Arrays](#arrays)
  - [Objects](#objects)
  - [Exceptions](#exceptions)
  - [Snapshots](#snapshots)
  - [Mock functions](#mock-functions)
  - [Misc](#misc)
  - [Promise matchers (Jest 20+)](#promise-matchers-jest-20)
- [Async tests](#async-tests)
  - [async/await](#asyncawait)
  - [Promises](#promises)
- [Mocks](#mocks)
  - [Mock functions](#mock-functions-1)
  - [Returning, resolving and rejecting values](#Returning-resolving-and-rejecting-values)
  - [Mock modules using `jest.mock` method](#mock-modules-using-jestmock-method)
  - [Mock modules using a mock file](#mock-modules-using-a-mock-file)
  - [Mock object methods](#mock-object-methods)
  - [Mock getters and setters (Jest 22.1.0+)](#mock-getters-and-setters-jest-2210)
  - [Mock getters and setters](#mock-getters-and-setters)
  - [Clearing and restoring mocks](#clearing-and-restoring-mocks)
  - [Accessing the original module when using mocks](#accessing-the-original-module-when-using-mocks)
  - [Timer mocks](#timer-mocks)
- [Data-driven tests (Jest 23+)](#data-driven-tests-jest-23)
- [Skipping tests](#skipping-tests)
- [Testing modules with side effects](#testing-modules-with-side-effects)
- [mockImplementation vs mockReturnValue](#mockimplementation-vs-mockreturnvalue)
- [Spying on methods](#spying-on-methods)
- [Isolating modules](#isolating-modules)
- [Concurrent tests](#concurrent-tests)
- [Custom matchers (expect.extend)](#custom-matchers-expectextend)
- [Jest configuration](#jest-configuration)
- [CLI flags](#cli-flags)
- [TypeScript with Jest](#typescript-with-jest)
- [Coverage](#coverage)

## Basic Test Structure

```js
describe('Color Picker', () => {
  beforeAll(() => {
    /* Runs before all tests */
  })
  afterAll(() => {
    /* Runs after all tests */
  })
  beforeEach(() => {
    /* Runs before each test */
  })
  afterEach(() => {
    /* Runs after each test */
  })
  
  test('Choose a color', () => {
    const actual = fn(['Alice', 'Bob', 'Eve'])
    expect(actual).toEqual(['Pink Alice', 'Pink Bob', 'Pink Eve'])
  })
})
```

## Matchers

[Using matchers](http://jestjs.io/docs/en/using-matchers), [matchers docs](https://facebook.github.io/jest/docs/expect.html)

### Basic matchers

```js
expect(42).toBe(42) // Strict equality (===)
expect(42).not.toBe(3) // Strict equality (!==)
expect([1, 2]).toEqual([1, 2]) // Deep equality
expect({ a: undefined, b: 2 }).toEqual({ b: 2 }) // Deep equality
expect({ a: undefined, b: 2 }).not.toStrictEqual({ b: 2 }) // Strict equality (Jest 23+)
```

### Truthiness

```js
// Matches anything that an if statement treats as true (not false, 0, '', null, undefined, NaN)
expect('foo').toBeTruthy()
// Matches anything that an if statement treats as false (false, 0, '', null, undefined, NaN)
expect('').toBeFalsy()
// Matches only null
expect(null).toBeNull()
// Matches only undefined
expect(undefined).toBeUndefined()
// The opposite of toBeUndefined
expect(7).toBeDefined()
// Matches true or false
expect(true).toEqual(expect.any(Boolean))
```

### Numbers

```js
expect(2).toBeGreaterThan(1)
expect(1).toBeGreaterThanOrEqual(1)
expect(1).toBeLessThan(2)
expect(1).toBeLessThanOrEqual(1)
expect(0.2 + 0.1).toBeCloseTo(0.3, 5)
expect(NaN).toEqual(expect.any(Number))
```

### Strings

```js
expect('long string').toMatch('str')
expect('string').toEqual(expect.any(String))
expect('coffee').toMatch(/ff/)
expect('pizza').not.toMatch('coffee')
expect(['pizza', 'coffee']).toEqual([expect.stringContaining('zz'), expect.stringMatching(/ff/)])
```

### Arrays

```js
expect([]).toEqual(expect.any(Array))
expect(['Alice', 'Bob', 'Eve']).toHaveLength(3)
expect(['Alice', 'Bob', 'Eve']).toContain('Alice')
expect([{ a: 1 }, { a: 2 }]).toContainEqual({ a: 1 })
expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(['Alice', 'Bob']))
```

### Objects

```js
expect({ a: 1 }).toHaveProperty('a')
expect({ a: 1 }).toHaveProperty('a', 1)
expect({ a: { b: 1 } }).toHaveProperty('a.b')
expect({ a: 1, b: 2 }).toMatchObject({ a: 1 })
expect({ a: 1, b: 2 }).toMatchObject({
  a: expect.any(Number),
  b: expect.any(Number)
})
expect([{ a: 1 }, { b: 2 }]).toEqual([
  expect.objectContaining({ a: expect.any(Number) }),
  expect.anything()
])
```

### Exceptions

```js
// const fn = () => { throw new Error('Out of cheese!') }
expect(fn).toThrow()
expect(fn).toThrow('Out of cheese')
expect(fn).toThrowErrorMatchingSnapshot()
```

### Snapshots

```js
expect(node).toMatchSnapshot()
// Jest 23+
expect(user).toMatchSnapshot({
  date: expect.any(Date)
})
expect(user).toMatchInlineSnapshot()
```

### Mock functions

```js
// const fn = jest.fn()
// const fn = jest.fn().mockName('Unicorn') -- named mock, Jest 22+
expect(fn).toBeCalled() // Function was called
expect(fn).not.toBeCalled() // Function was *not* called
expect(fn).toHaveBeenCalledTimes(1) // Function was called only once
expect(fn).toBeCalledWith(arg1, arg2) // Any of calls was with these arguments
expect(fn).toHaveBeenLastCalledWith(arg1, arg2) // Last call was with these arguments
expect(fn).toHaveBeenNthCalledWith(args) // Nth call was with these arguments (Jest 23+)
expect(fn).toHaveReturnedTimes(2) // Function was returned without throwing an error (Jest 23+)
expect(fn).toHaveReturnedWith(value) // Function returned a value (Jest 23+)
expect(fn).toHaveLastReturnedWith(value) // Last function call returned a value (Jest 23+)
expect(fn).toHaveNthReturnedWith(value) // Nth function call returned a value (Jest 23+)
expect(fn.mock.calls).toEqual([['first', 'call', 'args'], ['second', 'call', 'args']]) // Multiple calls
expect(fn.mock.calls[0][0]).toBe(2) // fn.mock.calls[0][0] — the first argument of the first call
```

<details>
  <summary>Aliases</summary>

- `toBeCalled` → `toHaveBeenCalled`
- `toBeCalledWith` → `toHaveBeenCalledWith`
- `lastCalledWith` → `toHaveBeenLastCalledWith`
- `nthCalledWith` → `toHaveBeenNthCalledWith`
- `toReturnTimes` → `toHaveReturnedTimes`
- `toReturnWith` → `toHaveReturnedWith`
- `lastReturnedWith` → `toHaveLastReturnedWith`
- `nthReturnedWith` → `toHaveNthReturnedWith`
  </details>

### Misc

```js
expect(new A()).toBeInstanceOf(A)
expect(() => {}).toEqual(expect.any(Function))
expect('pizza').toEqual(expect.anything())
```

### Promise matchers (Jest 20+)

```js
test('resolve to lemon', () => {
  expect.assertions(1)
  // Make sure to add a return statement
  return expect(Promise.resolve('lemon')).resolves.toBe('lemon')
  return expect(Promise.reject('octopus')).rejects.toBeDefined()
  return expect(Promise.reject(Error('pizza'))).rejects.toThrow()
})
```

Or with async/await:

```js
test('resolve to lemon', async () => {
  expect.assertions(2)
  await expect(Promise.resolve('lemon')).resolves.toBe('lemon')
  await expect(Promise.resolve('lemon')).resolves.not.toBe('octopus')
})
```

[resolves docs](https://facebook.github.io/jest/docs/en/expect.html#resolves)

## Async tests

See [more examples](https://facebook.github.io/jest/docs/en/tutorial-async.html) in Jest docs.

It\'s a good practice to specify a number of expected assertions in async tests, so the test will fail if your assertions weren\'t called at all.

```js
test('async test', () => {
  expect.assertions(3) // Exactly three assertions are called during a test
  // OR
  expect.hasAssertions() // At least one assertion is called during a test

  // Your async tests
})
```
Note that you can also do this per file, outside any `describe` and `test`:
```js
beforeEach(expect.hasAssertions)
```
This will verify the presense of at least one assertion per test case. It also plays nice with more specific `expect.assertions(3)` declarations.

### async/await

```js
test('async test', async () => {
  expect.assertions(1)
  const result = await runAsyncOperation()
  expect(result).toBe(true)
})
```

### Promises

_Return_ a Promise from your test:

```js
test('async test', () => {
  expect.assertions(1)
  return runAsyncOperation().then(result => {
    expect(result).toBe(true)
  })
})
```


## Mocks

### Mock functions

```js
test('call the callback', () => {
  const callback = jest.fn()
  fn(callback)
  expect(callback).toBeCalled()
  expect(callback.mock.calls[0][1].baz).toBe('pizza') // Second argument of the first call
  // Match the first and the last arguments but ignore the second argument
  expect(callback).toHaveBeenLastCalledWith('meal', expect.anything(), 'margarita');
})
```

You can also use snapshots:

```js
test('call the callback', () => {
  const callback = jest.fn().mockName('Unicorn') // mockName is available in Jest 22+
  fn(callback)
  expect(callback).toMatchSnapshot()
  // ->
  // [MockFunction Unicorn] {
  //   "calls": Array [
  // ...
})
```

And pass an implementation to `jest.fn` function:

```js
const callback = jest.fn(() => true)
```

[Mock functions docs](https://facebook.github.io/jest/docs/mock-function-api.html)

### Returning, resolving and rejecting values

Your mocks can return values:

```js
const callback = jest.fn().mockReturnValue(true);
const callbackOnce = jest.fn().mockReturnValueOnce(true);
```

Or resolve values:

```js
const promise = jest.fn().mockResolvedValue(true);
const promiseOnce = jest.fn().mockResolvedValueOnce(true);
```

They can even reject values:

```js
const failedPromise = jest.fn().mockRejectedValue("Error");
const failedPromiseOnce = jest.fn().mockRejectedValueOnce("Error");
```

You can even combine these:

```js
const callback = jest.fn()
  .mockReturnValueOnce(false)
  .mockReturnValue(true);

// ->
//  call 1: false
//  call 2+: true
```

### Mock modules using `jest.mock` method

```js
jest.mock('lodash/memoize', () => a => a) // The original lodash/memoize should exist
jest.mock('lodash/memoize', () => a => a, { virtual: true }) // The original lodash/memoize isn\'t required
```

[jest.mock docs](https://facebook.github.io/jest/docs/jest-object.html#jestmockmodulename-factory-options)

> Note: When using `babel-jest`, calls to `jest.mock` will automatically be hoisted to the top of the code block. Use `jest.doMock` if you want to explicitly avoid this behavior.

### Mock modules using a mock file

1.  Create a file like `__mocks__/lodash/memoize.js`:

    ```js
    module.exports = a => a
    ```

2.  Add to your test:

    ```js
    jest.mock('lodash/memoize')
    ```

> Note: When using `babel-jest`, calls to `jest.mock` will automatically be hoisted to the top of the code block. Use `jest.doMock` if you want to explicitly avoid this behavior.

[Manual mocks docs](https://facebook.github.io/jest/docs/manual-mocks.html)

### Mock object methods

```js
const spy = jest.spyOn(console, 'log').mockImplementation(() => {})
expect(console.log.mock.calls).toEqual([['dope'], ['nope']])
spy.mockRestore()
```

```js
const spy = jest.spyOn(ajax, 'request').mockImplementation(() => Promise.resolve({ success: true }))
expect(spy).toHaveBeenCalled()
spy.mockRestore()
```

### Mock getters and setters (Jest 22.1.0+)

```js
const location = {}
const getTitle = jest.spyOn(location, 'title', 'get').mockImplementation(() => 'pizza')
const setTitle = jest.spyOn(location, 'title', 'set').mockImplementation(() => {})
```

### Mock getters and setters

```js
const getTitle = jest.fn(() => 'pizza')
const setTitle = jest.fn()
const location = {}
Object.defineProperty(location, 'title', {
  get: getTitle,
  set: setTitle
})
```

### Clearing and restoring mocks

For one mock:

```js
fn.mockClear() // Clears mock usage date (fn.mock.calls, fn.mock.instances)
fn.mockReset() // Clears and removes any mocked return values or implementations
fn.mockRestore() // Resets and restores the initial implementation
```

> Note: `mockRestore` works only with mocks created by `jest.spyOn`.

For all mocks:

```js
jest.clearAllMocks()
jest.resetAllMocks()
jest.restoreAllMocks()
```

### Accessing the original module when using mocks

```js
jest.mock('fs')
const fs = require('fs') // Mocked module
const fs = jest.requireActual('fs') // Original module
```

### Timer mocks

Write synchronous test for code that uses native timer functions (`setTimeout`, `setInterval`, `clearTimeout`, `clearInterval`).

```js
// Enable fake timers
jest.useFakeTimers()

test('kill the time', () => {
  const callback = jest.fn()
  
  // Run some code that uses setTimeout or setInterval
  const actual = someFunctionThatUseTimers(callback)
  
  // Fast-forward until all timers have been executed
  jest.runAllTimers()
  
  // Check the results synchronously
  expect(callback).toHaveBeenCalledTimes(1)
})
```

Or adjust timers by time with [advanceTimersByTime()](https://jestjs.io/docs/en/timer-mocks#advance-timers-by-time):

```js
// Enable fake timers
jest.useFakeTimers()

test('kill the time', () => {
  const callback = jest.fn()
  
  // Run some code that uses setTimeout or setInterval
  const actual = someFunctionThatUseTimers(callback)
  
  // Fast-forward for 250 ms
  jest.advanceTimersByTime(250)
  
  // Check the results synchronously
  expect(callback).toHaveBeenCalledTimes(1)
})
```

Use [jest.runOnlyPendingTimers()](https://jestjs.io/docs/en/timer-mocks#run-pending-timers) for special cases.

**Note:** you should call `jest.useFakeTimers()` in your test case to use other fake timer methods.

## Data-driven tests (Jest 23+)

Run the same test with different data:

```js
test.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])('.add(%s, %s)', (a, b, expected) => {
  expect(a + b).toBe(expected)
})
```

Or the same using template literals:

```js
test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added $b', ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})
```

Or on `describe` level: 

```js
describe.each([['mobile'], ['tablet'], ['desktop']])('checkout flow on %s', (viewport) => {
  test('displays success page', () => {
    // 
  })
})
```

[describe.each() docs](https://jestjs.io/docs/en/api.html#describeeachtablename-fn-timeout), [test.each() docs](https://jestjs.io/docs/en/api.html#testeachtablename-fn-timeout), 

## Skipping tests

Do not run these tests:

```js
describe.skip('makePoniesPink'...
test.skip('make each pony pink'...
```

Run only these tests:

```js
describe.only('makePoniesPink'...
test.only('make each pony pink'...
```

## Testing modules with side effects

Node.js and Jest will cache modules you `require`. To test modules with side effects you\'ll need to reset the module registry between tests:

```js
const modulePath = '../module-to-test'

afterEach(() => {
  jest.resetModules()
})

test('first test', () => {
  // Prepare conditions for the first test
  const result = require(modulePath)
  expect(result).toMatchSnapshot()
})

test('second text', () => {
  // Prepare conditions for the second test
  const fn = () => require(modulePath)
  expect(fn).toThrow()
})
```

## mockImplementation vs mockReturnValue

Use `mockReturnValue` when the mock simply returns a static value. Use `mockImplementation` when the mock needs to execute logic, use arguments, or produce side effects.

```js
// mockReturnValue — static value, no logic needed
const fn = jest.fn().mockReturnValue(42)
fn() // 42
fn() // 42

// mockReturnValueOnce — return a value only on the first call
const fn = jest.fn()
  .mockReturnValueOnce('first')
  .mockReturnValueOnce('second')
  .mockReturnValue('default')
fn() // 'first'
fn() // 'second'
fn() // 'default'

// mockImplementation — full function body
const fn = jest.fn().mockImplementation((a, b) => a + b)
fn(1, 2) // 3

// mockImplementationOnce — implementation only for the next call
const fn = jest.fn()
  .mockImplementationOnce(() => 'temp')
  .mockImplementation(() => 'stable')
fn() // 'temp'
fn() // 'stable'

// mockResolvedValue / mockRejectedValue — async shorthand
const asyncFn = jest.fn().mockResolvedValue({ data: [] })
const failFn  = jest.fn().mockRejectedValue(new Error('network error'))
```

## Spying on methods

Use `jest.spyOn` to observe calls on an existing object method without replacing it, or to temporarily override it.

```js
// Spy without replacing implementation
const spy = jest.spyOn(Math, 'random')
Math.random() // original implementation runs
expect(spy).toHaveBeenCalled()
spy.mockRestore() // restores original Math.random

// Spy and override implementation
const spy = jest.spyOn(console, 'error').mockImplementation(() => {})
componentThatLogsErrors()
expect(spy).toHaveBeenCalledWith(expect.stringContaining('Error:'))
spy.mockRestore()

// Spy on a module method
import * as utils from './utils'
const spy = jest.spyOn(utils, 'formatDate').mockReturnValue('2026-01-01')
expect(utils.formatDate(new Date())).toBe('2026-01-01')
spy.mockRestore()

// Assert call count and arguments
const spy = jest.spyOn(api, 'fetchUser')
await loadUser(1)
expect(spy).toHaveBeenCalledTimes(1)
expect(spy).toHaveBeenCalledWith(1)
```

> Note: `mockRestore()` only works with `jest.spyOn`. For `jest.fn()`, use `mockReset()` or `mockClear()`.

## Isolating modules

Use `jest.isolateModules` to get a fresh module registry for a specific block, without affecting other tests.

```js
test('loads config in production mode', () => {
  jest.isolateModules(() => {
    process.env.NODE_ENV = 'production'
    const config = require('./config')
    expect(config.debug).toBe(false)
  })
})

test('loads config in development mode', () => {
  jest.isolateModules(() => {
    process.env.NODE_ENV = 'development'
    const config = require('./config')
    expect(config.debug).toBe(true)
  })
})
```

Use `jest.resetModules()` inside `beforeEach` for the same effect across many tests:

```js
beforeEach(() => {
  jest.resetModules()
})
```

## Concurrent tests

Run independent async tests in parallel within a `describe` block using `test.concurrent`.

```js
describe('independent async operations', () => {
  test.concurrent('fetches users', async () => {
    const users = await fetchUsers()
    expect(users).toHaveLength(3)
  })

  test.concurrent('fetches products', async () => {
    const products = await fetchProducts()
    expect(products).toHaveLength(10)
  })
})
```

> `test.concurrent` runs tests in the same file in parallel. Use it only for truly independent tests with no shared mutable state.

## Custom matchers (expect.extend)

Add project-specific matchers to make assertions more readable and reusable.

```js
// setupTests.js (referenced in jest.config.js `setupFilesAfterFramework`)
expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling
    if (pass) {
      return {
        message: () => `expected ${received} not to be within [${floor}, ${ceiling}]`,
        pass: true,
      }
    }
    return {
      message: () => `expected ${received} to be within [${floor}, ${ceiling}]`,
      pass: false,
    }
  },

  toBeValidEmail(received) {
    const pass = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(received)
    return {
      message: () => `expected "${received}" ${pass ? 'not ' : ''}to be a valid email`,
      pass,
    }
  },
})

// Usage in tests
expect(100).toBeWithinRange(90, 110)
expect('user@example.com').toBeValidEmail()
```

**TypeScript — declare custom matchers:**

```ts
// jest.d.ts
declare namespace jest {
  interface Matchers<R> {
    toBeWithinRange(floor: number, ceiling: number): R
    toBeValidEmail(): R
  }
}
```

## Jest configuration

Common `jest.config.js` options:

```js
// jest.config.js
export default {
  // Test environment
  testEnvironment: 'jsdom',          // or 'node' for non-browser code

  // File patterns
  testMatch: ['**/__tests__/**/*.{js,ts}', '**/*.{spec,test}.{js,ts}'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Transform — compile files before running
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['@babel/preset-env'] }],
  },

  // Module name mapper — handle static assets and path aliases
  moduleNameMapper: {
    '\\.(css|scss|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Setup files
  setupFilesAfterFramework: ['<rootDir>/src/setupTests.js'],

  // Coverage
  collectCoverageFrom: ['src/**/*.{js,ts,jsx,tsx}', '!src/**/*.d.ts'],
  coverageThreshold: {
    global: { branches: 80, functions: 80, lines: 80, statements: 80 },
  },

  // Display
  verbose: true,
}
```

## CLI flags

```bash
# Run all tests
npx jest

# Run tests matching a file name pattern
npx jest Button
npx jest src/components

# Run a single test by name
npx jest --testNamePattern="renders correctly"

# Watch mode — re-run affected tests on file change
npx jest --watch        # watches only changed files (requires git)
npx jest --watchAll     # watches all files

# Coverage report
npx jest --coverage
npx jest --coverage --coverageReporters=text-summary

# Run tests in band (serially, no workers) — useful for debugging
npx jest --runInBand

# Update snapshots
npx jest --updateSnapshot
npx jest -u

# Show individual test results
npx jest --verbose

# Bail after N failures (default: no bail)
npx jest --bail=1

# Clear the Jest cache
npx jest --clearCache

# Pass extra config inline
npx jest --testEnvironment=node
```

## TypeScript with Jest

**Setup with `ts-jest`:**

```bash
npm install --save-dev jest ts-jest @types/jest
npx ts-jest config:init
```

```js
// jest.config.js
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}
```

**Alternative — Babel + TypeScript:**

```bash
npm install --save-dev @babel/preset-typescript
```

```js
// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
  ],
}
```

**Typed mock helpers:**

```ts
import { fetchUser } from './api'

// Cast to jest.MockedFunction for full TypeScript support
jest.mock('./api')
const mockedFetchUser = jest.mocked(fetchUser)  // jest.mocked() available in Jest 27+

mockedFetchUser.mockResolvedValue({ id: 1, name: 'Alice' })

test('loads user', async () => {
  const user = await fetchUser(1)
  expect(user.name).toBe('Alice')
  expect(mockedFetchUser).toHaveBeenCalledWith(1)
})
```

**Typing mock modules:**

```ts
jest.mock('./utils', () => ({
  formatDate: jest.fn(() => '2026-01-01'),
  parseDate: jest.fn((s: string) => new Date(s)),
}))
```

## Coverage

Jest measures four coverage metrics:

| Metric | Meaning |
|--------|---------|
| **Statements** | Every executable statement executed at least once |
| **Branches** | Every `if`/`else`, ternary, and `&&`/`\|\|` branch taken |
| **Functions** | Every function/method called at least once |
| **Lines** | Every source line executed at least once |

**Generate a coverage report:**

```bash
npx jest --coverage
```

**Output formats:**

```js
// jest.config.js
coverageReporters: ['text', 'text-summary', 'lcov', 'html', 'json'],
```

- `text` — printed in terminal (default)
- `lcov` — required by CI tools (Codecov, Coveralls)
- `html` — opens in browser at `coverage/lcov-report/index.html`

**Enforce thresholds (CI guard):**

```js
// jest.config.js
coverageThreshold: {
  global: {
    branches: 80,
    functions: 80,
    lines: 80,
    statements: 80,
  },
  // Per-file thresholds
  './src/utils/critical.ts': {
    branches: 100,
    functions: 100,
    lines: 100,
    statements: 100,
  },
},
```

**Exclude files from coverage:**

```js
collectCoverageFrom: [
  'src/**/*.{js,ts,jsx,tsx}',
  '!src/**/*.d.ts',
  '!src/**/*.stories.{js,ts,jsx,tsx}',
  '!src/index.{js,ts}',
  '!src/**/types.ts',
],
```
