# React Unit Testing Interview Questions

> *Comprehensive guide to React unit testing using Jest and React Testing Library*

<br/>

## Q. Why should we use Test-Driven Development (TDD) for React.js?

Test-driven development is an approach when developers create a product backwards. TDD requires developers to write tests first and only then start to write the code. TDD is a development method that utilizes repetition of a short development cycle called Red-Green-Refactor.

**Process:**

1. Add a test
1. Run all tests and see if the new test fails (red)
1. Write the code to pass the test (green)
1. Run all tests
1. Refactor
1. Repeat

**Pros:**

1. Design before implementation
1. Helps prevent future regressions and bugs
1. Increases confidence that the code works as expected

**Cons:**

1. Takes longer to develop (but it can save time in the long run)
1. Testing edge cases is hard
1. Mocking, faking, and stubbing are all even harder

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain react unit testing using Jest and React Testing Library?

**1. Jest:**

Jest is a JavaScript unit testing framework, used by Facebook to test services and React applications. Jest acts as a **test runner**, **assertion library**, and **mocking library**.

Jest also provides Snapshot testing, the ability to create a rendered *snapshot* of a component and compare it to a previously saved *snapshot*. The test will fail if the two do not match.

**2. React Testing Library (RTL)**

React Testing Library focuses on testing how users interact with your app rather than component internals, making tests more maintainable and reliable.

* Encourages testing user behavior over implementation details
* Queries elements the way users find them (by text, label, role)
* Promotes accessible applications
* Works seamlessly with Jest

**Setup with Create React App:**

```bash
# Create React App includes both by default
npx create-react-app my-app

# Or install manually
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

```js
/**
 * App.js
 */
import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <button onClick={incrementCounter}>Click Me</button>
      <h2 data-testid="counter">{counter}</h2>
    </>
  );
}
```

**Writing Test Cases:**

```js
/**
 * App.test.js
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

// Testing App Component
describe("App component", () => {
  it("starts with a count of 0", () => {
    render(<App />);
    expect(screen.getByTestId("counter").textContent).toBe("0");
  });
});

// Testing Button Event
describe("App component", () => {
  it("increments count by 1 when the button is clicked", () => {
    render(<App />);
    const button = screen.getByText("Click Me");
    fireEvent.click(button);
    expect(screen.getByTestId("counter").textContent).toBe("1");
  });
});

```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-test-qz363f?file=/src/App.test.js)**

**Reference:**

* *[https://jestjs.io/docs/en/tutorial-react](https://jestjs.io/docs/en/tutorial-react)*

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Explain unit test structure in React?

```js
describe('Component Description', () => {
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

  test('test case decription', () => {
    const actual = fn(['one', 'Two', 'Three'])
    expect(actual).toEqual(['1 => One', '2 => Two', '3 => Three'])
  })
})
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the matchers available in jest framework?

**1. Basic matchers:**

| Method   |Example                       | Description              |
|----------|------------------------------|--------------------------|
|toBe()    |expect(42).toBe(42)           | Strict equality (===)    |
|not.toBe()|expect(42).not.toBe(3)        | Strict equality (!==)    |
|toEqual() |expect({ a: undefined, b: 2 }).toEqual({ b: 2 }) |Deep equality|
|not.toStrictEqual()|expect({ a: undefined, b: 2 }).not.toStrictEqual({ b: 2 })|Strict equality|


**2. Truthiness:**

| Method   |Example                       | Description              |
|----------|------------------------------|--------------------------|
|toBeTruthy()|expect('foo').toBeTruthy()| Matches anything that an if statement treats as true (not false, 0, '', null, undefined, NaN)|
|toBeFalsy()|expect('').toBeFalsy() |Matches anything that an if statement treats as false (false, 0, '', null, undefined, NaN)|
|toBeNull()|expect(null).toBeNull()|Matches only null|
|toBeUndefined()|expect(undefined).toBeUndefined()|Matches only undefined|
|toBeDefined()|expect(7).toBeDefined()|The opposite of toBeUndefined|
|toEqual()  |expect(true).toEqual(expect.any(Boolean)) |Matches true or false|
|toBeInTheDocument()|expect(getByText(/React/i)).toBeInTheDocument()| Return true/false |


**3. Numbers:**

| Method   |Example                       | Description              |
|----------|------------------------------|--------------------------|
|toBeGreaterThan()|expect(2).toBeGreaterThan(1)| |
|toBeGreaterThanOrEqual()|expect(1).toBeGreaterThanOrEqual(1)| |
|toBeLessThan() | expect(1).toBeLessThan(2)| |
|toBeLessThanOrEqual()|expect(1).toBeLessThanOrEqual(1)| |
|toBeCloseTo()|expect(0.2 + 0.1).toBeCloseTo(0.3, 5) | |
|toEqual()    |expect(NaN).toEqual(expect.any(Number))| |


**4. Strings:**

| Method   |Example                       | Description              |
|----------|------------------------------|--------------------------|
|toMatch() |expect('long string').toMatch('str')| |
|toEqual() |expect('string').toEqual(expect.any(String))| |
|toMatch() |expect('coffee').toMatch(/ff/) | |
|not.toMatch()|expect('pizza').not.toMatch('coffee')| |
|toEqual() | expect(['pizza', 'coffee']).toEqual([expect.stringContaining('zz'), expect.stringMatching(/ff/)])| |


**5. Arrays:**

| Method   |Example                       | Description              |
|----------|------------------------------|--------------------------|
|toEqual() |expect([]).toEqual(expect.any(Array))|  |
|toHaveLength()|expect(['Alice', 'Bob', 'Eve']).toHaveLength(3)| |
|toContain() |expect(['Alice', 'Bob', 'Eve']).toContain('Alice')| |
|toContainEqual()|expect([{ a: 1 }, { a: 2 }]).toContainEqual({ a: 1 })| |
|toEqual() |expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(['Alice', 'Bob']))| |


**6. Objects:**

| Method   |Example                       | Description              |
|----------|------------------------------|--------------------------|
|toHaveProperty()|expect({ a: 1 }).toHaveProperty('a')| |
|toMatchObject()|expect({ a: 1, b: 2 }).toMatchObject({ a: 1 })| |


**7. Exceptions:**

```js
const fn = () => { throw new Error('Throw some custom error!') }
```

| Method   |Example                       | Description              |
|----------|------------------------------|--------------------------|
|toThrow() |expect(fn).toThrow()| |
|toThrow() |expect(fn).toThrow('Out of cheese')| |
|toThrowErrorMatchingSnapshot()|expect(fn).toThrowErrorMatchingSnapshot()| |

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What are the benefits of using data-test selector over className or Id selector in Jest?

HTML structure and css classes tend to change due to design changes. Which will cause to re-write tests quite often. Also, if we are using css-modules we can not rely on class names. Because of that, React provides `data-test` attribute for selecting elements in jsx.

```js
// APP Component
import React from 'react'
import './App.scss'

function App() {
  return (
    <div data-testid='app-header'>
      Hello React
    </div>
  )
}
export default App
```

```js
import React from 'react'
import { cleanup, render, screen } from "@testing-library/react";
import App from './App'
afterEach(cleanup);

describe('APP Component', () => {

  let wrapper
  beforeEach(() => {
    wrapper = render(<Header/>)
  })

  test('should check for the title', () => {
    expect(screen.getByText(/Hello React/i)).toBeInTheDocument();
  })
})
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to write unit test for multiple fetch with Promise.all using jest?

Testing multiple fetch calls with **Promise.all** requires mocking the fetch API and handling multiple promises. Here\'s a comprehensive guide:

**Component to Test:**

```js
// DataFetcher.js
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState({ users: [], posts: [], comments: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      
      const [usersRes, postsRes, commentsRes] = await Promise.all([
        fetch('https://api.example.com/users'),
        fetch('https://api.example.com/posts'),
        fetch('https://api.example.com/comments')
      ]);

      const [users, posts, comments] = await Promise.all([
        usersRes.json(),
        postsRes.json(),
        commentsRes.json()
      ]);

      setData({ users, posts, comments });
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Users: {data.users.length}</h2>
      <h2>Posts: {data.posts.length}</h2>
      <h2>Comments: {data.comments.length}</h2>
    </div>
  );
}

export default DataFetcher;
```

**Test File:**

```js
// DataFetcher.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DataFetcher from './DataFetcher';

// Mock fetch globally
global.fetch = jest.fn();

describe('DataFetcher Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch and display data from multiple endpoints', async () => {
    const mockUsers = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
    const mockPosts = [{ id: 1, title: 'Post 1' }];
    const mockComments = [{ id: 1, text: 'Comment 1' }];

    // Mock fetch responses
    fetch.mockImplementation((url) => {
      if (url.includes('users')) {
        return Promise.resolve({
          json: () => Promise.resolve(mockUsers)
        });
      }
      if (url.includes('posts')) {
        return Promise.resolve({
          json: () => Promise.resolve(mockPosts)
        });
      }
      if (url.includes('comments')) {
        return Promise.resolve({
          json: () => Promise.resolve(mockComments)
        });
      }
    });

    render(<DataFetcher />);

    // Check loading state
    expect(screen.getByText('Loading...')).toBeInTheDocument();

    // Wait for data to load
    await waitFor(() => {
      expect(screen.getByText('Users: 2')).toBeInTheDocument();
    });

    expect(screen.getByText('Posts: 1')).toBeInTheDocument();
    expect(screen.getByText('Comments: 1')).toBeInTheDocument();

    // Verify fetch was called 3 times
    expect(fetch).toHaveBeenCalledTimes(3);
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/users');
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/posts');
    expect(fetch).toHaveBeenCalledWith('https://api.example.com/comments');
  });

  it('should handle errors when fetch calls fail', async () => {
    // Mock fetch to reject
    fetch.mockImplementation(() => 
      Promise.reject(new Error('Network error'))
    );

    render(<DataFetcher />);

    // Wait for error state
    await waitFor(() => {
      expect(screen.getByText('Error: Network error')).toBeInTheDocument();
    });
  });

  it('should handle partial failures in Promise.all', async () => {
    // Mock one successful and one failed request
    fetch
      .mockResolvedValueOnce({
        json: () => Promise.resolve([{ id: 1, name: 'John' }])
      })
      .mockRejectedValueOnce(new Error('Failed to fetch posts'))
      .mockResolvedValueOnce({
        json: () => Promise.resolve([{ id: 1, text: 'Comment' }])
      });

    render(<DataFetcher />);

    await waitFor(() => {
      expect(screen.getByText(/Error:/)).toBeInTheDocument();
    });
  });
});
```

**Alternative: Using jest-fetch-mock:**

```bash
npm install --save-dev jest-fetch-mock
```

```js
// setupTests.js
import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();
```

```js
// DataFetcher.test.js
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DataFetcher from './DataFetcher';

describe('DataFetcher with jest-fetch-mock', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('should handle multiple fetch calls successfully', async () => {
    fetch.mockResponses(
      [JSON.stringify([{ id: 1, name: 'John' }]), { status: 200 }],
      [JSON.stringify([{ id: 1, title: 'Post' }]), { status: 200 }],
      [JSON.stringify([{ id: 1, text: 'Comment' }]), { status: 200 }]
    );

    render(<DataFetcher />);

    await waitFor(() => {
      expect(screen.getByText('Users: 1')).toBeInTheDocument();
    });
  });
});
```

**Testing Utility Function:**

```js
// api.js
export const fetchAllData = async () => {
  const [usersRes, postsRes] = await Promise.all([
    fetch('https://api.example.com/users'),
    fetch('https://api.example.com/posts')
  ]);

  return Promise.all([
    usersRes.json(),
    postsRes.json()
  ]);
};
```

```js
// api.test.js
import { fetchAllData } from './api';

global.fetch = jest.fn();

describe('fetchAllData', () => {
  it('should fetch data from all endpoints', async () => {
    const mockUsers = [{ id: 1, name: 'John' }];
    const mockPosts = [{ id: 1, title: 'Post' }];

    fetch.mockImplementation((url) => {
      if (url.includes('users')) {
        return Promise.resolve({
          json: () => Promise.resolve(mockUsers)
        });
      }
      if (url.includes('posts')) {
        return Promise.resolve({
          json: () => Promise.resolve(mockPosts)
        });
      }
    });

    const [users, posts] = await fetchAllData();

    expect(users).toEqual(mockUsers);
    expect(posts).toEqual(mockPosts);
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it('should throw error if any request fails', async () => {
    fetch.mockRejectedValue(new Error('Network error'));

    await expect(fetchAllData()).rejects.toThrow('Network error');
  });
});
```

**Key Testing Principles:**

1. **Mock fetch globally** or use libraries like jest-fetch-mock
2. **Test success scenarios** - all promises resolve
3. **Test failure scenarios** - one or more promises reject
4. **Verify fetch calls** - correct URLs and number of calls
5. **Use waitFor** for async assertions
6. **Clean up mocks** between tests

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between getBy, queryBy, and findBy queries in React Testing Library?

React Testing Library provides three query families, each suited for different scenarios:

| Query Family | Returns | Throws if not found | Async |
|---|---|---|---|
| `getBy...` | Single element | Yes (immediately) | No |
| `queryBy...` | Single element or `null` | No | No |
| `findBy...` | Promise of single element | Yes (after timeout) | Yes |
| `getAllBy...` | Array of elements | Yes (if none) | No |
| `queryAllBy...` | Array or `[]` | No | No |
| `findAllBy...` | Promise of array | Yes (if none) | Yes |

**When to use each:**

* Use **`getBy`** when the element must exist in the DOM right now.
* Use **`queryBy`** when asserting an element is *not* present.
* Use **`findBy`** when the element appears asynchronously (after data load, etc.).

**Example:**

```js
import { render, screen, waitFor } from '@testing-library/react';

test('query comparison example', async () => {
  render(<MyComponent />);

  // getBy - throws if not found, use when element must be present
  const heading = screen.getByRole('heading', { name: /welcome/i });

  // queryBy - returns null if not found, use to assert absence
  const errorMsg = screen.queryByText(/error/i);
  expect(errorMsg).not.toBeInTheDocument();

  // findBy - returns a promise, use for async elements
  const asyncItem = await screen.findByText(/loaded data/i);
  expect(asyncItem).toBeInTheDocument();
});
```

**Query priority (most to least preferred):**

1. `getByRole` — most accessible, mirrors how assistive technologies see the page
2. `getByLabelText` — for form fields
3. `getByPlaceholderText` — fallback for inputs
4. `getByText` — for non-interactive elements
5. `getByDisplayValue` — for current value of inputs
6. `getByAltText` — for images
7. `getByTitle`
8. `getByTestId` — last resort, requires `data-testid` attribute

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between fireEvent and userEvent in React Testing Library?

`fireEvent` dispatches a single synthetic DOM event, while `userEvent` simulates full, realistic user interactions (including pointer events, focus, keyboard, etc.).

| Feature | `fireEvent` | `userEvent` |
|---|---|---|
| Interaction model | Single DOM event | Full user interaction chain |
| Typing in input | Sets value directly | Types character by character |
| Click | `click` event only | `pointerover`, `focus`, `click`, etc. |
| Speed | Synchronous | Asynchronous (returns a Promise) |
| Recommended for | Simple, low-level event dispatch | Most tests — mirrors real user behavior |

**Example:**

```js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function LoginForm() {
  const [value, setValue] = React.useState('');
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input id="email" value={value} onChange={e => setValue(e.target.value)} />
      <p>Value: {value}</p>
    </div>
  );
}

test('userEvent types into input correctly', async () => {
  const user = userEvent.setup();
  render(<LoginForm />);

  const input = screen.getByLabelText(/email/i);
  await user.type(input, 'test@example.com');

  expect(screen.getByText('Value: test@example.com')).toBeInTheDocument();
});

test('fireEvent sets input value directly', () => {
  render(<LoginForm />);
  const input = screen.getByLabelText(/email/i);
  
  fireEvent.change(input, { target: { value: 'test@example.com' } });
  expect(screen.getByText('Value: test@example.com')).toBeInTheDocument();
});
```

**Best practice:** Prefer `userEvent` from `@testing-library/user-event` v14+ with `userEvent.setup()` for more realistic tests.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to test custom React hooks using renderHook?

`renderHook` from `@testing-library/react` allows testing hooks in isolation without a host component.

**Custom Hook:**

```js
// useCounter.js
import { useState, useCallback } from 'react';

export function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = useCallback(() => setCount(c => c + 1), []);
  const decrement = useCallback(() => setCount(c => c - 1), []);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  return { count, increment, decrement, reset };
}
```

**Test:**

```js
import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

describe('useCounter', () => {
  it('should initialize with default value', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should initialize with provided value', () => {
    const { result } = renderHook(() => useCounter(10));
    expect(result.current.count).toBe(10);
  });

  it('should increment count', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should decrement count', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.count).toBe(4);
  });

  it('should reset count', () => {
    const { result } = renderHook(() => useCounter(5));
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.count).toBe(5);
  });
});
```

**Testing a hook that requires context:**

```js
import { renderHook } from '@testing-library/react';
import { ThemeProvider } from './ThemeContext';
import { useTheme } from './useTheme';

test('useTheme reads from context', () => {
  const wrapper = ({ children }) => (
    <ThemeProvider value="dark">{children}</ThemeProvider>
  );
  const { result } = renderHook(() => useTheme(), { wrapper });
  expect(result.current.theme).toBe('dark');
});
```

> **Note:** In React Testing Library v13+, `renderHook` and `act` are exported directly from `@testing-library/react`. No separate package needed.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to test asynchronous components in React Testing Library?

Async tests require waiting for DOM updates caused by async operations (API calls, timers, etc.).

**Key async utilities:**

| Utility | Use case |
|---|---|
| `findBy*` queries | Wait for element to appear |
| `waitFor()` | Wait for arbitrary assertion to pass |
| `waitForElementToBeRemoved()` | Wait for element to disappear |

**Example — Testing data fetching:**

```js
// UserProfile.js
import React, { useEffect, useState } from 'react';

export function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}
```

```js
// UserProfile.test.js
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { UserProfile } from './UserProfile';

beforeEach(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve({ name: 'Alice' }) })
  );
});

afterEach(() => jest.resetAllMocks());

test('shows loading then user name', async () => {
  render(<UserProfile userId="1" />);

  // Assert loading state
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for loading to disappear
  await waitForElementToBeRemoved(() => screen.queryByText('Loading...'));

  // Assert final state
  expect(screen.getByRole('heading', { name: 'Alice' })).toBeInTheDocument();
});

test('using findBy for async element', async () => {
  render(<UserProfile userId="1" />);

  // findBy waits automatically (default 1000ms timeout)
  const heading = await screen.findByRole('heading', { name: 'Alice' });
  expect(heading).toBeInTheDocument();
});

test('using waitFor for complex assertions', async () => {
  render(<UserProfile userId="1" />);

  await waitFor(() => {
    expect(fetch).toHaveBeenCalledWith('/api/users/1');
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is snapshot testing in React and how to use it?

Snapshot testing captures the rendered output of a component and saves it to a `.snap` file. On subsequent runs, Jest compares the current output against the saved snapshot and fails if they differ.

**When to use:**

* Catching unintended UI regressions
* Documenting expected component output
* Testing components with stable, rarely changing UI

**Example:**

```js
// Button.js
function Button({ label, variant = 'primary' }) {
  return <button className={`btn btn-${variant}`}>{label}</button>;
}
```

```js
// Button.test.js
import { render } from '@testing-library/react';
import Button from './Button';

test('renders Button snapshot', () => {
  const { asFragment } = render(<Button label="Submit" variant="primary" />);
  expect(asFragment()).toMatchSnapshot();
});
```

**First run** creates `__snapshots__/Button.test.js.snap`:

```
exports[`renders Button snapshot 1`] = `
<DocumentFragment>
  <button class="btn btn-primary">
    Submit
  </button>
</DocumentFragment>
`;
```

**Updating snapshots:** When you intentionally change UI, update snapshots with:

```bash
npx jest --updateSnapshot
# or
npx jest -u
```

**Inline snapshots** (stored in the test file itself):

```js
test('renders inline snapshot', () => {
  const { asFragment } = render(<Button label="Cancel" />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <button class="btn btn-primary">
        Cancel
      </button>
    </DocumentFragment>
  `);
});
```

**Best practices:**

* Keep snapshots small and focused
* Review snapshot diffs in code review
* Avoid snapshotting highly dynamic content
* Prefer specific assertions (`getByRole`, `toHaveTextContent`) for critical behavior

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to mock modules and functions in Jest?

Jest provides several mocking strategies for isolating the unit under test.

**1. jest.fn() — Mock a function:**

```js
const mockFn = jest.fn();
mockFn.mockReturnValue(42);
mockFn.mockResolvedValue({ data: 'ok' }); // for async
mockFn.mockImplementation((x) => x * 2);

expect(mockFn).toHaveBeenCalled();
expect(mockFn).toHaveBeenCalledWith('arg1');
expect(mockFn).toHaveBeenCalledTimes(3);
```

**2. jest.mock() — Mock an entire module:**

```js
// Mock axios module
jest.mock('axios');
import axios from 'axios';

axios.get.mockResolvedValue({ data: { name: 'Alice' } });
```

**3. jest.spyOn() — Spy on an existing method:**

```js
import * as api from './api';

test('calls fetchUser', async () => {
  const spy = jest.spyOn(api, 'fetchUser').mockResolvedValue({ name: 'Bob' });

  render(<UserProfile userId="1" />);

  await screen.findByText('Bob');
  expect(spy).toHaveBeenCalledWith('1');

  spy.mockRestore(); // restore original implementation
});
```

**4. Manual mocks — `__mocks__` folder:**

```
src/
  api.js
  __mocks__/
    api.js   ← Jest auto-uses this when jest.mock('./api') is called
```

```js
// __mocks__/api.js
export const fetchUser = jest.fn(() => Promise.resolve({ name: 'Mock User' }));
```

**5. Mocking React modules (e.g., react-router-dom):**

```js
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useParams: () => ({ id: '123' }),
}));
```

**Cleanup:**

```js
afterEach(() => {
  jest.clearAllMocks();   // clears call history
  jest.resetAllMocks();   // resets implementations too
  jest.restoreAllMocks(); // restores spyOn originals
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to test React Context in React Testing Library?

Test Context by either rendering the Provider in the test or creating a custom wrapper.

**Context and Component:**

```js
// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

```js
// ThemedButton.js
import { useTheme } from './ThemeContext';

export function ThemedButton() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      data-testid="themed-btn"
      className={`btn-${theme}`}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Current theme: {theme}
    </button>
  );
}
```

**Test:**

```js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from './ThemeContext';
import { ThemedButton } from './ThemedButton';

// Wrap in provider
function renderWithTheme(ui) {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
}

test('renders with default light theme', () => {
  renderWithTheme(<ThemedButton />);
  expect(screen.getByText('Current theme: light')).toBeInTheDocument();
  expect(screen.getByTestId('themed-btn')).toHaveClass('btn-light');
});

test('toggles theme on click', async () => {
  const user = userEvent.setup();
  renderWithTheme(<ThemedButton />);

  await user.click(screen.getByTestId('themed-btn'));
  expect(screen.getByText('Current theme: dark')).toBeInTheDocument();
});

// Testing with a specific context value override
test('renders with dark theme from custom value', () => {
  render(
    <ThemeContext.Provider value={{ theme: 'dark', setTheme: jest.fn() }}>
      <ThemedButton />
    </ThemeContext.Provider>
  );
  expect(screen.getByText('Current theme: dark')).toBeInTheDocument();
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to test forms with React Testing Library?

Testing forms involves simulating user input and verifying form behavior, validation, and submission.

**Form Component:**

```js
// LoginForm.js
import React, { useState } from 'react';

export function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('All fields are required.');
      return;
    }
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />

      {error && <p role="alert">{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}
```

**Test:**

```js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
  it('renders all form fields', () => {
    render(<LoginForm onSubmit={jest.fn()} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('shows validation error when submitted empty', async () => {
    const user = userEvent.setup();
    render(<LoginForm onSubmit={jest.fn()} />);

    await user.click(screen.getByRole('button', { name: /login/i }));

    expect(screen.getByRole('alert')).toHaveTextContent('All fields are required.');
  });

  it('calls onSubmit with form values when valid', async () => {
    const user = userEvent.setup();
    const mockSubmit = jest.fn();
    render(<LoginForm onSubmit={mockSubmit} />);

    await user.type(screen.getByLabelText(/email/i), 'user@test.com');
    await user.type(screen.getByLabelText(/password/i), 'secret123');
    await user.click(screen.getByRole('button', { name: /login/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      email: 'user@test.com',
      password: 'secret123',
    });
    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to mock timers in Jest?

Jest can replace `setTimeout`, `setInterval`, `Date`, and similar APIs with fake implementations for deterministic testing.

**APIs:**

| Method | Description |
|---|---|
| `jest.useFakeTimers()` | Replace timer functions with Jest fakes |
| `jest.useRealTimers()` | Restore real timer functions |
| `jest.runAllTimers()` | Exhaust all pending timers |
| `jest.runOnlyPendingTimers()` | Run only currently pending timers |
| `jest.advanceTimersByTime(ms)` | Advance fake clock by `ms` milliseconds |
| `jest.clearAllTimers()` | Clear all pending timers |

**Example — Testing a debounced search:**

```js
// SearchBox.js
import React, { useState, useEffect } from 'react';

export function SearchBox({ onSearch }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) onSearch(query);
    }, 500);
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  return (
    <input
      placeholder="Search..."
      value={query}
      onChange={e => setQuery(e.target.value)}
    />
  );
}
```

```js
// SearchBox.test.js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react';
import { SearchBox } from './SearchBox';

describe('SearchBox', () => {
  beforeEach(() => jest.useFakeTimers());
  afterEach(() => jest.useRealTimers());

  it('calls onSearch after debounce delay', async () => {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    const mockSearch = jest.fn();
    render(<SearchBox onSearch={mockSearch} />);

    await user.type(screen.getByPlaceholderText('Search...'), 'react');

    // Should not have been called yet
    expect(mockSearch).not.toHaveBeenCalled();

    // Advance clock past debounce
    act(() => jest.advanceTimersByTime(500));

    expect(mockSearch).toHaveBeenCalledWith('react');
    expect(mockSearch).toHaveBeenCalledTimes(1);
  });
});
```

> **Note:** When using `userEvent` with fake timers, pass `{ advanceTimers: jest.advanceTimersByTime }` to `userEvent.setup()` so `userEvent`\'s internal delays also use the fake clock.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to test error boundaries in React?

Error boundaries are class components that catch JavaScript errors in their child component tree. Testing them requires triggering a render error.

**Error Boundary Component:**

```js
// ErrorBoundary.js
import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Caught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}
```

**Test:**

```js
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

// Component that throws on render
function BrokenComponent() {
  throw new Error('Test render error');
}

// Suppress expected console.error in test output
beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});
afterEach(() => {
  console.error.mockRestore();
});

test('renders fallback UI when child throws', () => {
  render(
    <ErrorBoundary>
      <BrokenComponent />
    </ErrorBoundary>
  );
  expect(screen.getByText('Something went wrong.')).toBeInTheDocument();
});

test('renders custom fallback when provided', () => {
  render(
    <ErrorBoundary fallback={<p>Custom error message</p>}>
      <BrokenComponent />
    </ErrorBoundary>
  );
  expect(screen.getByText('Custom error message')).toBeInTheDocument();
});

test('renders children when no error occurs', () => {
  render(
    <ErrorBoundary>
      <p>Normal content</p>
    </ErrorBoundary>
  );
  expect(screen.getByText('Normal content')).toBeInTheDocument();
});
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to generate and measure code coverage in Jest?

Code coverage measures how much of your source code is exercised by your tests.

**Running coverage:**

```bash
# Run all tests with coverage report
npx jest --coverage

# Coverage for a specific file
npx jest --coverage --collectCoverageFrom="src/components/Button.js"
```

**Coverage metrics:**

| Metric | Description |
|---|---|
| **Statements** | Percentage of executed statements |
| **Branches** | Percentage of code branches (if/else, ternary) executed |
| **Functions** | Percentage of functions called |
| **Lines** | Percentage of code lines executed |

**Configuration in `jest.config.js`:**

```js
// jest.config.js
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.test.{js,jsx}',
    '!src/index.js',
    '!src/reportWebVitals.js',
  ],
  coverageThresholds: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  coverageReporters: ['text', 'lcov', 'html'],
};
```

**Sample coverage output:**

```
----------|---------|----------|---------|---------|
File      | % Stmts | % Branch | % Funcs | % Lines |
----------|---------|----------|---------|---------|
Button.js |     100 |      100 |     100 |     100 |
Form.js   |      85 |       75 |      90 |      85 |
----------|---------|----------|---------|---------|
```

**Tips:**

* Aim for 80%+ coverage as a baseline; 100% is not always practical.
* Branch coverage is the most valuable metric for catching logic bugs.
* High coverage does not guarantee bug-free code — test quality matters too.
* Use `/* istanbul ignore next */` comment to exclude untestable code from coverage.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to test components integrated with React Router?

Components that use React Router hooks (`useNavigate`, `useParams`, `useLocation`) need to be wrapped in a Router during testing.

**Component Under Test:**

```js
// UserPage.js
import { useParams, useNavigate } from 'react-router-dom';

export function UserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User {id}</h1>
      <button onClick={() => navigate('/')}>Go Home</button>
    </div>
  );
}
```

**Test:**

```js
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { UserPage } from './UserPage';

// Helper to render with router
function renderWithRouter(ui, { initialEntries = ['/'] } = {}) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      {ui}
    </MemoryRouter>
  );
}

test('renders user id from route params', () => {
  render(
    <MemoryRouter initialEntries={['/users/42']}>
      <Routes>
        <Route path="/users/:id" element={<UserPage />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByRole('heading', { name: 'User 42' })).toBeInTheDocument();
});

test('navigates home on button click', async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter initialEntries={['/users/1']}>
      <Routes>
        <Route path="/users/:id" element={<UserPage />} />
        <Route path="/" element={<p>Home Page</p>} />
      </Routes>
    </MemoryRouter>
  );

  await user.click(screen.getByRole('button', { name: 'Go Home' }));
  expect(screen.getByText('Home Page')).toBeInTheDocument();
});
```

**Mocking hooks directly (alternative):**

```js
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: '99' }),
  useNavigate: () => jest.fn(),
}));
```

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. How to set up and configure Jest with React?

For projects **not** using Create React App (CRA), Jest requires manual setup.

**Installation:**

```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event
npm install --save-dev jest-environment-jsdom
```

**`jest.config.js`:**

```js
module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/index.js'],
};
```

**`src/setupTests.js`:**

```js
import '@testing-library/jest-dom';
```

**`babel.config.js`:**

```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
```

**`__mocks__/fileMock.js`:**

```js
module.exports = 'test-file-stub';
```

**`package.json` scripts:**

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

> **Note for Vite projects:** Use `vitest` instead of Jest, as it is natively integrated with the Vite build pipeline and supports the same RTL APIs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>
