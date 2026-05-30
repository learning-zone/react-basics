# React Scenario-Based MCQ

> Scenario-based multiple choice questions covering React, React 19, Redux, and Jest topics.

<br/>

## Table of Contents

## L1: Fundamental (Entry-Level / Junior)
Focus: JSX, component basics, props, and rendering concepts.

* [React Fundamentals](#-1-react-fundamentals): JSX, components, props, keys, and core rendering behavior.
* [Component Lifecycle](#-3-component-lifecycle): Mounting, updating, cleanup, `useLayoutEffect`, and `shouldComponentUpdate` equivalent.

## L2: Intermediate (Junior-Mid / Developer)
Focus: Hooks, state handling, and form patterns.

* [React Hooks](#-2-react-hooks): useState, useEffect, useRef, useCallback, useMemo, useReducer, and custom hooks.
* [Forms & Controlled Components](#-11-forms--controlled-components): Controlled inputs, uncontrolled components, multiple-input state, select elements, and React Hook Form.
* [Context API](#-8-context-api): Sharing state without prop drilling and avoiding unnecessary re-renders.

## L3: Advanced (Mid-Senior / Lead)
Focus: Performance, resilience, and code splitting.

* [Performance Optimization](#-7-performance-optimization): Memoization, debouncing, useTransition, and useDeferredValue.
* [Error Boundaries](#-9-error-boundaries): Catching render errors, fallback UIs, and promise rejection handling.
* [Code Splitting & Lazy Loading](#-10-code-splitting--lazy-loading): React.lazy, Suspense, and dynamic imports.

## L4: Expert (Senior / Architect)
Focus: State management libraries, React 19, and testing.

* [Redux & State Management](#-5-redux--state-management): Reducers, middleware, useSelector, and combineReducers.
* [Redux Toolkit](#-6-redux-toolkit): createSlice, createAsyncThunk, RTK Query, and createSelector.
* [React 19 Features](#-4-react-19-features): use(), useFormStatus, useOptimistic, Server Actions, and ref as prop.
* [Jest Unit Testing](#-12-jest-unit-testing): Mocks, snapshots, async testing, and lifecycle hooks.
* [React Testing Library](#-13-react-testing-library): Queries, userEvent, findBy, and Redux-connected component testing.

## L5: Framework & Ecosystem (Senior / Lead)
Focus: Next.js, routing, and ecosystem integrations.

* [Next.js](#-14-nextjs): SSG, SSR, ISR, App Router, layouts, Server Components, and middleware.
* [React Router](#-15-react-router): v6 routing, nested routes, useParams, useNavigate, and protected routes.
* [Miscellaneous](#-16-miscellaneous): RxJS integration, StrictMode, Fragment, and key-based state reset.

<br/>

## # 1. React Fundamentals

<br>

## Q. While looping over an array of numbers with no unique value, React warns for the unique key. What should be used to remove this warning?

* Use Index as the key
* Use Math.random().toString() as the key

- A) a
- B) b
- C) Both a and b are correct
- D) Both a and b are incorrect

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) Both a and b are correct**

**Explanation:** Both options remove the React unique key warning — React only requires a key prop to be present. Using the array **index** as a key is acceptable for static, non-reordered lists. Using `Math.random()` also removes the warning by supplying a key, but it is an anti-pattern: it generates a new key on every render, causing React to unmount and remount every list item, destroying component state and hurting performance. The question asks what *removes the warning*, not what is best practice — so both are technically correct.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Alex is working on a project where she needs to implement a new feature requiring dynamic component loading. She plans to use React CLI for setting up the project and ensuring the feature integrates seamlessly. Considering her goal to optimize component handling and building times, which React CLI feature should Alex use to improve performance and manage components effectively?

- A) Use the react-scripts to run and build components
- B) Utilize create-react-app for efficient component management
- C) Leverage custom React CLI script for specific component needs
- D) Implement React CLI commands for module bundling and optimization.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: D) Implement React CLI commands for module bundling and optimization**

**Explanation:** For dynamic component loading, module bundling and optimization (such as code splitting and lazy loading via `React.lazy`) is the right approach. These techniques allow components to be loaded on demand, reducing initial bundle size and improving build and runtime performance.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What will be the possible output for the below program?

```jsx
export function App() {
  const data = {
    1: {
      id: 1,
      title: "test"
    },
    2: {
      id: 2,
      title: "qwerty"
    },
    3: {
      id: 3,
      title: "asdf"
    },
  }
  return data
}
```
- A) It will return an error.
- B) It will return an undefined value.
- C) It will return the values in data.
- D) It will return a null value.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) It will return an error.**

**Explanation:** React components must return JSX (or `null`), not plain JavaScript objects. Returning a plain object causes a runtime error: *"Objects are not valid as a React child."* To render the data, you would need to map it into JSX elements.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Which JSX will return by following the App Component?

```jsx
function App() {
  return (
    <div>Hello</div>
    <div>World!</div>
  );
}
```
- A) Hello World!
- B) World! Hello
- C) Nothing will return
- D) Error

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: D) Error**

**Explanation:** A React component can only return a single root element. Returning two adjacent `<div>` elements without a wrapper causes a compile-time error: *"Adjacent JSX elements must be wrapped in an enclosing tag."* The fix is to wrap them in a fragment `<>...</>` or a container element.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Suppose you are working on an e-commerce website. You must create a production package. Which command will you use?

- A) npm start
- B) npm run dev
- C) npm run prod
- D) npm run build

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: D) npm run build**

**Explanation:** `npm run build` triggers the production build script (e.g., via Create React App or Vite), which bundles and minifies the application for deployment. `npm start` runs the development server, `npm run dev` is a common dev-server alias, and `npm run prod` is not a standard script.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer writes the following component. What will be rendered in the browser?

```jsx
function Greet({ name }) {
  return <h1>Hello, {name || "World"}!</h1>;
}

<Greet />
```

- A) Hello, undefined!
- B) Hello, !
- C) Hello, World!
- D) A runtime error is thrown

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) Hello, World!**

**Explanation:** When `name` prop is not provided it is `undefined`, which is falsy. The `||` operator falls back to `"World"`, so the output is `Hello, World!`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer renders a list without a `key` prop. What is the primary risk?

```jsx
const items = ["Apple", "Banana", "Cherry"];
items.map(item => <li>{item}</li>);
```

- A) The browser will throw a SyntaxError
- B) React will silently skip items during updates
- C) React cannot efficiently reconcile list items and may produce incorrect UI on re-renders
- D) Keys are only needed for nested lists

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) React cannot efficiently reconcile list items and may produce incorrect UI on re-renders**

**Explanation:** React uses `key` to identify which items changed, were added, or removed. Without keys, React falls back to index-based diffing, which can cause incorrect state association and performance issues.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer sees stale data after a state update. What is wrong with the following code?

```jsx
const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
  setCount(count + 1);
}
```

- A) `useState` does not allow two updates in one function
- B) Both calls read the same `count` snapshot, so `count` only increases by 1
- C) The second `setCount` resets the state to 0
- D) This pattern throws a React error

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Both calls read the same `count` snapshot, so `count` only increases by 1**

**Explanation:** State updates in React are batched. Both calls close over the same `count` value. Use the functional updater `setCount(prev => prev + 1)` to guarantee sequential increments.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer passes a new object literal as a prop on every render. What is the consequence?

```jsx
<UserCard style={{ color: "blue" }} />
```

- A) No consequence - React compares object values
- B) React skips rendering because the reference is the same
- C) `UserCard` will always re-render even if wrapped in `React.memo`, because the object reference changes
- D) Passing objects as props is not allowed in React

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `UserCard` will always re-render even if wrapped in `React.memo`, because the object reference changes**

**Explanation:** `React.memo` uses shallow comparison. A new object literal `{}` creates a new reference on every render, defeating memoization. Hoist the object outside the component or use `useMemo`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does the following JSX compile to?

```jsx
const el = <button className="btn" onClick={handleClick}>Submit</button>;
```

- A) `document.createElement("button")`
- B) `React.createElement("button", { className: "btn", onClick: handleClick }, "Submit")`
- C) `React.createComponent("button", ...)`
- D) HTML string interpolation

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `React.createElement("button", { className: "btn", onClick: handleClick }, "Submit")`**

**Explanation:** JSX is syntactic sugar. Babel (or the React transform) compiles JSX into `React.createElement(type, props, ...children)` calls that produce React element descriptor objects.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wraps several components with `withAuth(Component)` to enforce authentication. What React pattern does `withAuth` represent?

- A) Render Props
- B) Compound Components
- C) Higher-Order Component (HOC)
- D) Observer Pattern

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) Higher-Order Component (HOC)**

**Explanation:** A Higher-Order Component (HOC) is a function with the signature `(WrappedComponent) => EnhancedComponent`. It adds cross-cutting concerns (auth guards, logging, theming) without modifying the original component. In modern React, custom hooks have largely replaced HOCs for logic reuse, but HOCs remain common in legacy codebases and libraries.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs to render a modal dialog outside the parent DOM node to avoid `overflow: hidden` and z-index stacking issues. Which React API solves this?

- A) `React.createContext`
- B) `React.createPortal`
- C) `React.lazy`
- D) `React.forwardRef`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `React.createPortal`**

**Explanation:** `ReactDOM.createPortal(children, domNode)` renders children into any DOM node outside the component\'s parent hierarchy. Despite the separate DOM placement, React event bubbling still follows the React component tree — making portals ideal for modals, tooltips, and dropdown menus that must escape CSS overflow or z-index constraints.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer has a component with no state, receiving only primitive props. Which optimization avoids re-rendering it when its parent re-renders with the same props?

- A) Wrap it in `React.lazy()`
- B) Extend `React.PureComponent` (class) or wrap with `React.memo` (function)
- C) Move all logic into `useEffect`
- D) Use `ReactDOM.createPortal`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Extend `React.PureComponent` (class) or wrap with `React.memo` (function)**

**Explanation:** `React.PureComponent` performs a shallow comparison of props and state for class components. `React.memo` does the same for function components. Both prevent re-renders when props are shallowly unchanged — a lightweight optimization for "leaf" display components that receive only primitives or stable references.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 2. React Hooks

<br>

## Q. Suppose you are working on the use registration screen. You must call an input blur event from any other press event. Which React hook will you use?

- A) useMemo
- B) useReducer
- C) useContext
- D) useRef

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: D) useRef**

**Explanation:** `useRef` gives you a direct reference to the underlying DOM element. By attaching the ref to the input (`<input ref={inputRef} />`), you can imperatively call `inputRef.current.blur()` from any other event handler to programmatically trigger the blur event.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. You are working on a food delivery web application. On the restaurant selection, you want to get elements from its stable unique ID. Which React hook will you use?

- A) useRef
- B) useState
- C) useId
- D) useContext

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) useId**

**Explanation:** `useId` is a React hook that generates a stable, unique ID that is consistent between server and client renders. It is ideal for associating form elements with labels or any scenario requiring a guaranteed unique identifier per component instance.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wants to run a side effect only when `userId` changes. Which implementation is correct?

```jsx
// Option A
useEffect(() => { fetchUser(userId); });

// Option B
useEffect(() => { fetchUser(userId); }, []);

// Option C
useEffect(() => { fetchUser(userId); }, [userId]);

// Option D
useEffect(() => { fetchUser(userId); }, [userId, fetchUser]);
```

- A) Option A - runs on every render
- B) Option B - runs once on mount
- C) Option C - runs whenever `userId` changes
- D) Option D - same as C but also re-runs if `fetchUser` reference changes

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) Option C - runs whenever `userId` changes**

**Explanation:** Option C correctly lists `userId` as the only dependency. Option D is also valid if `fetchUser` is unstable, but Option C is the minimal correct answer for this scenario.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wraps an event handler with `useCallback` but still sees child re-renders. What is the likely cause?

```jsx
const handleClick = useCallback(() => {
  setCount(count + 1);
}, [count]);
```

- A) `useCallback` never prevents re-renders
- B) `count` is in the dependency array, so `handleClick` is recreated every time `count` changes, causing the child to re-render
- C) The child component must also use `useCallback`
- D) `useCallback` requires a second argument of `true`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `count` is in the dependency array, so `handleClick` is recreated every time `count` changes, causing the child to re-render**

**Explanation:** Because `count` is a dependency, the callback is recreated on each count change, producing a new reference. Use `setCount(prev => prev + 1)` and remove `count` from the dependency array to keep a stable reference.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What does `useMemo` return?

```jsx
const sortedList = useMemo(() => {
  return [...items].sort((a, b) => a.localeCompare(b));
}, [items]);
```

- A) A memoized function
- B) A memoized value - the sorted array, recomputed only when `items` changes
- C) A ref to the previous render\'s sorted array
- D) A state setter for the sorted list

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) A memoized value - the sorted array, recomputed only when `items` changes**

**Explanation:** `useMemo` caches the result of the computation and only recomputes when a listed dependency changes. This avoids an expensive sort on every render.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `useRef` to hold a mutable value. What is true about this pattern?

```jsx
const timerRef = useRef(null);

function start() {
  timerRef.current = setInterval(() => tick(), 1000);
}
```

- A) Changing `timerRef.current` triggers a re-render
- B) `timerRef.current` is reset to `null` on every render
- C) Mutating `timerRef.current` does not cause a re-render and persists across renders
- D) `useRef` can only hold DOM element references

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) Mutating `timerRef.current` does not cause a re-render and persists across renders**

**Explanation:** `useRef` returns a mutable container whose `.current` property survives re-renders without triggering them - ideal for storing timers, previous values, or DOM nodes.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses the `useReducer` hook. When should it be preferred over `useState`?

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

- A) When the state is a single boolean
- B) When multiple sub-values depend on each other or next state depends on previous state in complex ways
- C) Only when integrating with Redux
- D) `useReducer` is deprecated in React 18+

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) When multiple sub-values depend on each other or next state depends on previous state in complex ways**

**Explanation:** `useReducer` centralizes complex state transitions into a pure reducer function, making state logic easier to test and reason about compared to multiple independent `useState` calls.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What makes `useWindowWidth` a valid custom hook?

```js
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}
```

- A) The function accesses a browser API (`window`)
- B) The function name starts with `use` and calls built-in React hooks internally, following the Rules of Hooks
- C) The function returns exactly one value
- D) The function must be exported from a dedicated file

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) The function name starts with `use` and calls built-in React hooks internally, following the Rules of Hooks**

**Explanation:** Custom hooks are plain JavaScript functions whose name begins with `use`. The `use` prefix signals to React\'s linter (eslint-plugin-react-hooks) that the function must follow the Rules of Hooks. They allow stateful logic to be shared across components without changing the component hierarchy or introducing HOC/render-prop complexity.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer violates the Rules of Hooks. What is wrong with the following code?

```jsx
function UserProfile({ isAdmin }) {
  if (isAdmin) {
    const [role, setRole] = useState("admin");
  }
  return <div />;
}
```

- A) `useState` cannot be used in functional components
- B) Hooks must not be called conditionally — the order of hook calls must be identical on every render
- C) The `if` block should be replaced with `useEffect`
- D) `isAdmin` must be listed in a dependency array

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Hooks must not be called conditionally — the order of hook calls must be identical on every render**

**Explanation:** React tracks each hook\'s state by its call order. Placing a hook inside an `if` block means it may or may not execute depending on the condition, corrupting React\'s internal state tracking. The fix is to call the hook unconditionally and use the condition inside it: `const [role, setRole] = useState(isAdmin ? "admin" : "")`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer calls `useContext(ThemeContext)` inside a component. When does the component re-render?

- A) Every time any state changes anywhere in the application
- B) Only when the component\'s own state changes
- C) Whenever the `value` prop of the nearest `ThemeContext.Provider` above it changes
- D) `useContext` never causes a re-render

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) Whenever the `value` prop of the nearest `ThemeContext.Provider` above it changes**

**Explanation:** `useContext` subscribes the component to context updates. React re-renders the consumer whenever the `value` reference on the matching Provider changes. To prevent unnecessary re-renders, memoize the context value with `useMemo` so it only changes when the underlying data changes.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 3. Component Lifecycle

<br>

## Q. What does the cleanup function returned from `useEffect` do?

```jsx
useEffect(() => {
  const sub = subscribe(userId);
  return () => sub.unsubscribe();
}, [userId]);
```

- A) It runs before the component mounts for the first time
- B) It runs after every re-render before the next effect executes, and on unmount
- C) It runs only when the component unmounts
- D) It cancels the `subscribe` call before it resolves

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It runs after every re-render before the next effect executes, and on unmount**

**Explanation:** React calls the cleanup function before re-running the effect due to a dependency change, and also when the component unmounts. This prevents stale subscriptions and memory leaks.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A class component uses `componentDidUpdate`. What is its hooks-based equivalent?

```jsx
componentDidUpdate(prevProps) {
  if (prevProps.id !== this.props.id) {
    fetchData(this.props.id);
  }
}
```

- A) `useEffect(() => { fetchData(id); }, [])`
- B) `useEffect(() => { fetchData(id); }, [id])`
- C) `useLayoutEffect(() => { fetchData(id); })`
- D) `useMemo(() => fetchData(id), [id])`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `useEffect(() => { fetchData(id); }, [id])`**

**Explanation:** Listing `id` in the dependency array replicates the `prevProps.id !== this.props.id` guard - the effect only re-runs when `id` changes.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer notices a layout flash when reading a DOM node\'s size. Which hook should replace `useEffect`?

- A) `useRef`
- B) `useMemo`
- C) `useLayoutEffect`
- D) `useTransition`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `useLayoutEffect`**

**Explanation:** `useLayoutEffect` fires synchronously after all DOM mutations but before the browser paints, allowing DOM measurements and mutations without a visible flash.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the `useEffect` equivalent of `componentDidMount` in a class component?

```jsx
// Class component
componentDidMount() {
  fetchInitialData();
}

// Functional component — which option is the equivalent?
// Option A
useEffect(() => { fetchInitialData(); });

// Option B
useEffect(() => { fetchInitialData(); }, []);

// Option C
useEffect(() => { fetchInitialData(); }, [fetchInitialData]);
```

- A) Option A — runs after every render
- B) Option B — runs once after the initial render only
- C) Option C — runs after mount and when `fetchInitialData` changes
- D) There is no hooks equivalent of `componentDidMount`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Option B — runs once after the initial render only**

**Explanation:** `useEffect` with an empty dependency array `[]` runs exactly once after the component\'s first render, mirroring `componentDidMount`. Option A runs after every render (no equivalent lifecycle); Option C also re-runs if `fetchInitialData` reference changes, which is not the same as `componentDidMount`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer fetches data inside `useEffect` and updates state, but gets a warning: *"Can\'t perform a React state update on an unmounted component."* What is the correct fix?

```jsx
useEffect(() => {
  fetchUser(userId).then(user => setUser(user));
}, [userId]);
```

- A) Move the `fetch` call outside the component
- B) Use a cleanup function with an `isMounted` flag or `AbortController` to cancel the update after unmount
- C) Wrap `setUser` in a `try/catch` block
- D) Replace `useEffect` with `useLayoutEffect`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Use a cleanup function with an `isMounted` flag or `AbortController` to cancel the update after unmount**

**Explanation:** When a component unmounts before an async operation completes, calling `setState` on it causes the warning and a memory leak. The fix is to track whether the component is still mounted or use `AbortController` to cancel the fetch in the cleanup:
```jsx
useEffect(() => {
  const controller = new AbortController();
  fetchUser(userId, { signal: controller.signal }).then(user => setUser(user));
  return () => controller.abort();
}, [userId]);
```

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A class component uses `shouldComponentUpdate` to skip re-renders. What is the functional component equivalent?

```jsx
// Class component
shouldComponentUpdate(nextProps) {
  return nextProps.value !== this.props.value;
}
```

- A) `useEffect` with a comparison inside
- B) `React.memo` with a custom comparator function as the second argument
- C) `useMemo` wrapping the entire JSX return
- D) `useCallback` on the render function

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `React.memo` with a custom comparator function as the second argument**

**Explanation:** `React.memo(Component, arePropsEqual)` accepts an optional second argument — a function that receives previous and next props and returns `true` to skip the re-render (same semantics as `shouldComponentUpdate` returning `false`). Without the second argument, `React.memo` performs a default shallow comparison.
```jsx
const MyComponent = React.memo(({ value }) => <div>{value}</div>,
  (prevProps, nextProps) => prevProps.value === nextProps.value
);
```

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 4. React 19 Features

<br>

## Q. React 19 introduces the `use()` hook. What does the following code do?

```jsx
import { use } from "react";

function UserProfile({ userPromise }) {
  const user = use(userPromise);
  return <h1>{user.name}</h1>;
}
```

- A) `use()` converts a class component to a function component
- B) `use()` reads a Promise or Context value, suspending the component until the Promise resolves
- C) `use()` replaces `useEffect` for data fetching
- D) `use()` is equivalent to `await` inside a component

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `use()` reads a Promise or Context value, suspending the component until the Promise resolves**

**Explanation:** `use()` is a new React 19 hook that can be called conditionally (unlike other hooks). It integrates with Suspense - the component suspends while the Promise is pending and resumes with the resolved value.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses the React 19 `useFormStatus` hook. What data does it expose?

```jsx
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>Submit</button>;
}
```

- A) Validation errors for the parent form fields
- B) The submission state of the nearest parent `<form>`, including whether a submission is pending
- C) The HTTP response status code of the form\'s action
- D) The names and values of all form fields

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) The submission state of the nearest parent `<form>`, including whether a submission is pending**

**Explanation:** `useFormStatus` (react-dom) gives child components access to the form\'s submission state. `pending` is `true` while the form action is executing, enabling progressive-enhancement UX patterns.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the purpose of `useOptimistic` in React 19?

```jsx
const [optimisticMessages, addOptimisticMessage] = useOptimistic(
  messages,
  (state, newMsg) => [...state, { text: newMsg, sending: true }]
);
```

- A) To batch multiple state updates together
- B) To immediately show an optimistic UI update while an async action is in flight, then reconcile with the real result
- C) To cache server responses in memory
- D) To preload assets before the component mounts

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) To immediately show an optimistic UI update while an async action is in flight, then reconcile with the real result**

**Explanation:** `useOptimistic` lets you speculatively update the UI before the server confirms the action. Once the action settles, React replaces the optimistic state with the real server state.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer migrates a form to use React 19 Server Actions. Which statement is correct?

```jsx
// Server component file
async function createPost(formData) {
  "use server";
  await db.posts.create({ title: formData.get("title") });
}

export default function PostForm() {
  return <form action={createPost}><input name="title" /><button>Add</button></form>;
}
```

- A) `"use server"` marks the whole file as a server-only module
- B) The `action` prop on `<form>` only accepts a URL string
- C) The async function runs on the server; passing it to `action` enables progressive enhancement without a client-side JS handler
- D) Server Actions require Redux to manage resulting state

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) The async function runs on the server; passing it to `action` enables progressive enhancement without a client-side JS handler**

**Explanation:** React 19 Server Actions allow async functions marked `"use server"` to be passed directly to `<form action>`. The form works even without JavaScript, and React manages serialization automatically.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In React 19, what changed about `ref` handling for function components?

- A) `ref` is no longer supported on function components
- B) Function components can now accept `ref` as a regular prop without `forwardRef`
- C) `ref` must be passed as `innerRef` in React 19
- D) `useRef` was replaced by `createRef` in function components

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Function components can now accept `ref` as a regular prop without `forwardRef`**

**Explanation:** React 19 deprecates `forwardRef`. Function components can receive `ref` directly in their props, simplifying ref forwarding patterns significantly.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 5. Redux & State Management

<br>

## Q. A developer dispatches an action but the UI does not update. What is the most likely bug?

```js
// reducer
case "ADD_ITEM":
  state.items.push(action.payload); // mutates state directly
  return state;
```

- A) `push` is not a valid JavaScript array method
- B) The reducer mutates state directly and returns the same reference - React-Redux cannot detect the change
- C) Actions must be strings, not objects
- D) The component needs to call `forceUpdate()`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) The reducer mutates state directly and returns the same reference - React-Redux cannot detect the change**

**Explanation:** Redux reducers must be pure functions that return a new state object. Mutating and returning the same reference means React-Redux\'s shallow equality check sees no change and skips re-rendering. Return `{ ...state, items: [...state.items, action.payload] }` instead.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the role of middleware such as `redux-thunk`?

```js
const fetchUser = (id) => async (dispatch) => {
  dispatch({ type: "FETCH_START" });
  const user = await api.getUser(id);
  dispatch({ type: "FETCH_SUCCESS", payload: user });
};
```

- A) It replaces the Redux store entirely for async operations
- B) It allows action creators to return functions (thunks) instead of plain objects, enabling async logic
- C) It validates action types at runtime
- D) It replaces `combineReducers` for large applications

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It allows action creators to return functions (thunks) instead of plain objects, enabling async logic**

**Explanation:** Plain Redux only handles synchronous plain-object actions. `redux-thunk` intercepts function actions and calls them with `dispatch` and `getState`, enabling async workflows.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `useSelector` and notices unnecessary re-renders. What is the cause?

```jsx
const data = useSelector(state => ({
  user: state.user,
  posts: state.posts,
}));
```

- A) `useSelector` does not support object return values
- B) A new object literal is returned on every call, so the selector\'s reference always changes, triggering a re-render
- C) Both `user` and `posts` need separate stores
- D) `useSelector` is not allowed inside function components

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) A new object literal is returned on every call, so the selector\'s reference always changes, triggering a re-render**

**Explanation:** `useSelector` uses reference equality by default. Returning a new object `{}` each time always fails the equality check. Use separate `useSelector` calls, `shallowEqual` as the second argument, or `createSelector` from Reselect.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the purpose of `combineReducers`?

```js
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer,
});
```

- A) It merges multiple Redux stores into one
- B) It splits a single large reducer into slice functions, each managing its own part of the state tree
- C) It enables lazy loading of reducers
- D) It prevents reducers from receiving unknown actions

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It splits a single large reducer into slice functions, each managing its own part of the state tree**

**Explanation:** `combineReducers` delegates different parts of the state to separate reducer functions. Each reducer only receives and manages its own slice of the state (`state.auth`, `state.cart`, etc.).

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 6. Redux Toolkit

<br>

## Q. A developer uses `createSlice`. What does `createSlice` automatically generate?

```js
const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; },
  },
});
```

- A) Only the reducer function
- B) The reducer and corresponding action creators (`counterSlice.actions`)
- C) The Redux store and DevTools configuration
- D) Async thunks for each reducer

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) The reducer and corresponding action creators (`counterSlice.actions`)**

**Explanation:** `createSlice` uses Immer under the hood (enabling safe mutation syntax) and auto-generates action creators whose `type` matches `"sliceName/reducerName"` - e.g., `"counter/increment"`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `createAsyncThunk`. What lifecycle actions does it dispatch?

```js
export const fetchPosts = createAsyncThunk("posts/fetchAll", async () => {
  const res = await fetch("/api/posts");
  return res.json();
});
```

- A) Only `posts/fetchAll`
- B) `posts/fetchAll/pending`, `posts/fetchAll/fulfilled`, `posts/fetchAll/rejected`
- C) `REQUEST`, `SUCCESS`, `FAILURE`
- D) `START`, `DONE`, `ERROR`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `posts/fetchAll/pending`, `posts/fetchAll/fulfilled`, `posts/fetchAll/rejected`**

**Explanation:** `createAsyncThunk` automatically dispatches `pending` before the Promise starts, `fulfilled` on resolution, and `rejected` on rejection - matching the FSA lifecycle convention.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses RTK Query\'s `createApi`. What does the following `useGetUserQuery` hook return?

```js
export const { useGetUserQuery } = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: builder => ({
    getUser: builder.query({ query: id => `/users/${id}` }),
  }),
});

// In component
const { data, isLoading, isError } = useGetUserQuery(userId);
```

- A) A Promise that must be awaited manually
- B) An object with `data`, loading/error state, and refetch helpers - auto-fetching when `userId` changes
- C) Only the raw fetch response object
- D) A Redux action creator

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) An object with `data`, loading/error state, and refetch helpers - auto-fetching when `userId` changes**

**Explanation:** RTK Query auto-generates hooks that manage fetching, caching, and re-fetching. The hook re-fetches whenever `userId` changes and handles deduplication and cache invalidation automatically.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer forgets to add the RTK Query API reducer to the store. What happens?

```js
// Missing: [api.reducerPath]: api.reducer
const store = configureStore({
  reducer: { counter: counterReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});
```

- A) RTK Query works fine - the middleware handles everything
- B) RTK Query cannot store its cache; queries will always refetch and cache features will not work
- C) The app crashes immediately on startup
- D) Only mutations will fail; queries work without the reducer

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) RTK Query cannot store its cache; queries will always refetch and cache features will not work**

**Explanation:** RTK Query stores its normalized cache in the Redux state tree under `api.reducerPath`. Without the reducer, there is nowhere to persist data and the cache/invalidation system will not function.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wants to respond to `fetchPosts` (a `createAsyncThunk`) inside a `createSlice`. Where should the thunk lifecycle actions be handled?

```js
const postsSlice = createSlice({
  name: "posts",
  initialState: { items: [], status: "idle" },
  reducers: {},
  // ??? handle fetchPosts here
});
```

- A) Inside the `reducers` field with matching action type strings
- B) Inside `extraReducers` using the builder callback: `builder.addCase(fetchPosts.fulfilled, ...)`
- C) In a separate `createReducer` call outside the slice
- D) Directly inside the component with `useDispatch` and a `useEffect`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Inside `extraReducers` using the builder callback: `builder.addCase(fetchPosts.fulfilled, ...)`**

**Explanation:** `extraReducers` is the correct location to handle actions that were generated outside the slice — such as thunk lifecycle actions from `createAsyncThunk`. The builder API provides type-safe methods (`addCase`, `addMatcher`, `addDefaultCase`) to react to `pending`, `fulfilled`, and `rejected` states.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `createSelector` from Redux Toolkit (Reselect). What problem does it solve?

```js
import { createSelector } from "@reduxjs/toolkit";

const selectFilteredItems = createSelector(
  [(state) => state.items, (state) => state.filter],
  (items, filter) => items.filter((item) => item.category === filter)
);
```

- A) It replaces `useSelector` for all state access
- B) It memoizes derived data — the result function re-runs only when the input selectors return new values, preventing unnecessary recomputation and re-renders
- C) It validates the shape of the Redux state tree
- D) It auto-generates action creators for each selector

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It memoizes derived data — the result function re-runs only when the input selectors return new values, preventing unnecessary recomputation and re-renders**

**Explanation:** Without memoization, a selector computing derived data (filtered lists, sorted arrays, aggregates) runs on every render. `createSelector` caches the last result and skips recomputation when its input selectors return the same references, improving both CPU usage and render performance when used with `useSelector`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 7. Performance Optimization

<br>

## Q. Alex, an experienced engineer, is optimizing an application\'s event-driven architecture to handle high-frequency events more efficiently. She needs a strategy that will minimize performance bottlenecks and ensure scalability. Which approach should Alex adopt to effectively manage and optimize event handling in the application?

- A) Implementing a Debounce function to limit the rate at which events are processed.
- B) Using a Global Event Bus to broadcast events across multiple components.
- C) Applying the Observer pattern to allow components to state changes efficiently.
- D) Integrating a Redux middleware to handle asynchronous events and manage side effects.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) Implementing a Debounce function to limit the rate at which events are processed**

**Explanation:** Debouncing limits how often a high-frequency event handler fires by delaying execution until a burst of events has stopped. This directly reduces performance bottlenecks for events like scroll, resize, or keypress. A Global Event Bus adds coupling, the Observer pattern addresses subscriptions not rate-limiting, and Redux middleware handles async side effects rather than event frequency.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Suppose you are working on an inventory management portal. When your product list loads, you don\'t have any control over its state but you want to give high priority to UI updates. Which React feature will help you?

- A) useTransition
- B) useEffect
- C) useMemo
- D) useDeferredValue

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: D) useDeferredValue**

**Explanation:** `useDeferredValue` is the right choice when you do not control the state (e.g., it comes from a prop or an external source). It creates a deferred copy of the value so React can prioritize urgent UI updates and render the deferred value when the browser is idle. `useTransition` is similar but requires you to own the state update.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A parent re-renders frequently. A child component receives the same props every time. How do you prevent the child from re-rendering?

```jsx
function Child({ label }) {
  return <p>{label}</p>;
}
```

- A) Wrap `Child` in `React.lazy()`
- B) Wrap `Child` in `React.memo()` - it skips re-rendering if props did not shallowly change
- C) Use `useEffect` inside `Child` to guard rendering
- D) Move `Child` into the parent\'s render method

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Wrap `Child` in `React.memo()` - it skips re-rendering if props did not shallowly change**

**Explanation:** `React.memo` is a higher-order component that memoizes the rendered output. If the next props shallowly equal the previous props, React reuses the last render and skips the child\'s reconciliation.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer profiles the app and sees a slow computation running on every render. Which hook should they apply?

```jsx
function Dashboard({ transactions }) {
  const total = transactions.reduce((sum, t) => sum + t.amount, 0); // expensive
  return <div>Total: {total}</div>;
}
```

- A) `useEffect` - run the computation as a side effect
- B) `useCallback` - memoize the reduce function
- C) `useMemo` - cache the computed `total` and recompute only when `transactions` changes
- D) `useRef` - store the total in a ref

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `useMemo` - cache the computed `total` and recompute only when `transactions` changes**

**Explanation:** `useMemo(() => transactions.reduce(...), [transactions])` ensures the expensive reduction only runs when `transactions` changes, not on every render.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `useTransition`. What does `isPending` indicate?

```jsx
const [isPending, startTransition] = useTransition();

function handleSearch(e) {
  startTransition(() => setQuery(e.target.value));
}
```

- A) The network request is in-flight
- B) React is still processing the low-priority transition update
- C) The component is suspended in a Suspense boundary
- D) The input field has unsaved changes

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) React is still processing the low-priority transition update**

**Explanation:** `useTransition` marks an update as non-urgent. `isPending` is `true` while React is rendering the deferred update, allowing you to show a loading indicator without blocking the input.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 8. Context API

<br>

## Q. Suppose you have a three-level component hierarchy and must pass a value from the top component to the leaf component, but using props shall take extra code. How can you achieve this without using props? 

- A) Use the Context API
- B) Use the Event Bus
- C) Use a common file for this type of values
- D) Use the Custom component

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) Use the Context API**

**Explanation:** The React Context API is designed exactly for this scenario — passing data through a component tree without having to thread props through every intermediate level (prop drilling). Create a context with `React.createContext`, wrap the tree in a `Provider`, and any descendant can consume the value with `useContext`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wraps the app in a `ThemeContext.Provider`. A deeply nested component reads the theme. What happens when the theme value changes?

```jsx
<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

- A) Only the direct children of `Provider` re-render
- B) All components that consume the context via `useContext(ThemeContext)` re-render
- C) The entire component tree re-renders regardless of context consumption
- D) Context changes do not trigger re-renders; components must call `forceUpdate`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) All components that consume the context via `useContext(ThemeContext)` re-render**

**Explanation:** React re-renders every component that called `useContext(ThemeContext)` whenever the `value` reference changes. Components that do not consume the context are not affected.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer notices that changing an unrelated state in the Provider\'s parent causes all consumers to re-render. What is the fix?

```jsx
function App() {
  const [count, setCount] = useState(0);
  const theme = { color: "blue" }; // new reference every render

  return (
    <ThemeContext.Provider value={theme}>
      <Children />
    </ThemeContext.Provider>
  );
}
```

- A) Move context into Redux
- B) Use `useMemo` to stabilize the `theme` object reference
- C) Split the context into two providers
- D) Switch to a class component

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Use `useMemo` to stabilize the `theme` object reference**

**Explanation:** A new `theme` object is created on every render, causing all consumers to re-render. `const theme = useMemo(() => ({ color: "blue" }), [])` produces a stable reference and prevents unnecessary consumer updates.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 9. Error Boundaries

<br>

## Q. Alex, a software engineer, encounters an unhandled promise rejection error in an application. He observes that while the app displays an error message, the error details are not logged effectively for debugging. How can Alex ensure comprehensive error logging for unhandled promise rejections?

- A) Use window.addEventListener to listen for unhandled promise rejections and log them.
- B) Configure the app to catch error in async functions using try-catch blocks. 
- C) Implement a global error boundary component to handle and log all errors
- D) Integrate a logging library that automatically captures unhandled promises rejections.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) Use window.addEventListener to listen for unhandled promise rejections and log them**

**Explanation:** `window.addEventListener('unhandledrejection', handler)` is the standard browser API for globally capturing unhandled promise rejections. The event object provides the rejected `reason`, enabling comprehensive logging. Error Boundaries do not catch async/promise errors, and `try-catch` only works when applied locally around each async call.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wraps a component tree in an Error Boundary. Which types of errors does it catch?

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    return this.state.hasError ? <Fallback /> : this.props.children;
  }
}
```

- A) All JavaScript errors anywhere in the application
- B) Errors thrown during rendering, in lifecycle methods, and in constructors of child components
- C) Errors thrown inside event handlers
- D) Network errors from `fetch` calls

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Errors thrown during rendering, in lifecycle methods, and in constructors of child components**

**Explanation:** Error Boundaries catch errors during React\'s render phase and lifecycle methods. They do NOT catch errors in event handlers (use `try/catch` there), async code, or server-side rendering.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between `getDerivedStateFromError` and `componentDidCatch`?

- A) They are identical; either can be used
- B) `getDerivedStateFromError` is used to render a fallback UI (render phase); `componentDidCatch` is used to log error information (commit phase)
- C) `componentDidCatch` renders the fallback; `getDerivedStateFromError` only logs
- D) `getDerivedStateFromError` replaces `componentDidCatch` in React 18+

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `getDerivedStateFromError` is used to render a fallback UI (render phase); `componentDidCatch` is used to log error information (commit phase)**

**Explanation:** `getDerivedStateFromError` runs during rendering so it can update state to show a fallback. `componentDidCatch` runs after the tree has re-rendered and is the right place to call error reporting services.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 10. Code Splitting & Lazy Loading

<br>

## Q. You are working on a real-time stock market web application. As your dashboard code is too lengthy, it takes excess time to load. How will you resolve this issue?

- A) Remove a few features from the page
- B) Split the code into small modules and import it as per the requirements.
- C) Remove a few data load requests and make it light
- D) Limit data that increases the load on the dashboard.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Split the code into small modules and import it as per the requirements**

**Explanation:** Code splitting with `React.lazy()` and dynamic `import()` allows the dashboard to load only the code needed for the initial view, deferring heavier modules until they are required. This reduces the initial bundle size and improves load time without removing features or limiting data.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Alex, a software developer, is working on an application where she needs to implement a seamless transition between pages. She is considering using the Transition API to enhance the user experience. Which approach should Alex take to achieve smooth transitions in her application?

- A) Use the Transition API\'s startTransition function to update the state that triggers transitions.
- B) Apply the ReactDom.createRoot method to manage the rendering of transition states.
- C) Utilize React.StrictMode to detect potential issues during transitions.
- D) Implement React.lazy for dynamic imports to handle page transitions.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) Use the Transition API\'s startTransition function to update the state that triggers transitions**

**Explanation:** `startTransition` (from `useTransition` or `React.startTransition`) marks a state update as a non-urgent transition, allowing React to keep the current UI responsive while preparing the new page in the background. This is the correct way to achieve smooth page-to-page transitions with the Transition API.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Alex, a software developer, is working on an application where she is utilizing Suspense for handling data fetching. Despite configuring Suspense she observes that her component does not render immediately when waiting for data. She is puzzled about the potential reasons behind this delay in rendering. What could be the reason for this behavior?

- A) The delay in rendering might be due to network latency or slow data fetching, rather than an issue with how Suspense is used or configured in the application.
- B) Alex\'s component could be using an outdated version that does not support the latest features required for Suspense to handle data fetching and rendering efficiently, resulting in the delay.
- C) The Suspense component configuration might be incorrect or incomplete. If Suspense is not properly set up, it could lead to unexpected delays in rendering the component and handling asynchronous operations.
- D) Alex might not have wrapped her component properly with a Suspense component. This is crucial as Suspense manages asynchronous data fetching and ensures that the fallback UI is shown until the data is fully loaded and the component is ready to render.

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: D) Alex might not have wrapped her component properly with a Suspense component**

**Explanation:** Suspense requires components that perform asynchronous data fetching to be wrapped inside a `<Suspense>` boundary with a `fallback` prop. Without proper wrapping, the component will not know to show a fallback UI while data loads, resulting in unexpected rendering behavior.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer lazy-loads a component. Why is `Suspense` required?

```jsx
const LazyChart = React.lazy(() => import("./Chart"));

function Dashboard() {
  return (
    <Suspense fallback={<Spinner />}>
      <LazyChart />
    </Suspense>
  );
}
```

- A) `Suspense` fetches the chunk from the network
- B) While the `Chart` chunk is downloading, the component suspends; `Suspense` provides the fallback UI during that pause
- C) `Suspense` caches the chunk so it is only downloaded once
- D) Without `Suspense`, `React.lazy` defaults to eager loading

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) While the `Chart` chunk is downloading, the component suspends; `Suspense` provides the fallback UI during that pause**

**Explanation:** `React.lazy` throws a Promise while the module is loading. A `Suspense` boundary catches that Promise and renders its `fallback` prop until the Promise resolves and the component is ready.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer code-splits by route. Which approach is correct for React Router v6?

```jsx
// Option A
const Home = React.lazy(() => import("./Home"));
<Route path="/" element={<Suspense fallback={<Spinner />}><Home /></Suspense>} />

// Option B
const Home = import("./Home");
<Route path="/" element={<Home />} />
```

- A) Option A is correct
- B) Option B is correct
- C) Both are equivalent
- D) Neither is valid - React Router handles code splitting automatically

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) Option A is correct**

**Explanation:** Dynamic `import()` must be wrapped in `React.lazy()` and the resulting component must be rendered inside a `Suspense` boundary. Option B creates a Promise, not a React component.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 11. Forms & Controlled Components

<br>

## Q. A developer builds a controlled input. What is missing?

```jsx
function SearchBox() {
  const [query, setQuery] = useState("");
  return <input type="text" value={query} />;
}
```

- A) The `defaultValue` attribute
- B) An `onChange` handler - without it the input is read-only and cannot be updated
- C) A `ref` to read the input value
- D) `name` attribute for the controlled input

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) An `onChange` handler - without it the input is read-only and cannot be updated**

**Explanation:** In a controlled component, React drives the input value via the `value` prop. Without `onChange` calling `setQuery`, user keystrokes are ignored and the input appears frozen.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses React Hook Form. What advantage does it have over fully controlled forms?

```jsx
const { register, handleSubmit } = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("email")} />
</form>
```

- A) It eliminates the need for any validation logic
- B) It uses uncontrolled inputs with refs by default, reducing re-renders on every keystroke
- C) It replaces the native HTML `<form>` element
- D) It is only useful for very large forms

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It uses uncontrolled inputs with refs by default, reducing re-renders on every keystroke**

**Explanation:** React Hook Form avoids re-rendering on each keystroke by managing values through DOM refs instead of React state, significantly improving performance for complex forms.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wants to manage multiple form inputs with a single state object. Which pattern is correct?

```jsx
// Option A
const [form, setForm] = useState({ name: "", email: "" });
function handleChange(e) {
  setForm({ ...form, [e.target.name]: e.target.value });
}

// Option B
const [form, setForm] = useState({ name: "", email: "" });
function handleChange(e) {
  form[e.target.name] = e.target.value;
  setForm(form);
}
```

- A) Option A — uses computed property names to update only the changed field immutably
- B) Option B — directly mutates the state object then sets it
- C) Both are equivalent
- D) Neither is valid; each input requires its own `useState`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) Option A — uses computed property names to update only the changed field immutably**

**Explanation:** `[e.target.name]` is a computed property key that dynamically targets the right field. The spread `...form` ensures the rest of the state is preserved immutably. Option B mutates the existing state object directly and passes the same reference, so React may not detect the change and re-render.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the key difference between a controlled and an uncontrolled component?

```jsx
// Controlled
const [val, setVal] = useState("");
<input value={val} onChange={e => setVal(e.target.value)} />

// Uncontrolled
const inputRef = useRef();
<input defaultValue="" ref={inputRef} />
```

- A) Controlled components are faster because they skip React reconciliation
- B) In a controlled component, React owns the value via state; in an uncontrolled component, the DOM owns the value and it is read via a ref
- C) Uncontrolled components do not support `onChange` events
- D) `defaultValue` is only valid in controlled components

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) In a controlled component, React owns the value via state; in an uncontrolled component, the DOM owns the value and it is read via a ref**

**Explanation:** Controlled components keep the input value in React state, making it the single source of truth. Uncontrolled components let the DOM manage the value — you read it imperatively via `ref.current.value` (e.g., on submit). Controlled inputs are preferred when you need immediate validation or conditional rendering based on input value.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer renders a `<select>` dropdown as a controlled component. What is wrong with the following code?

```jsx
function ColorPicker() {
  const [color, setColor] = useState("red");
  return (
    <select>
      <option value="red">Red</option>
      <option value="blue">Blue</option>
    </select>
  );
}
```

- A) `<select>` cannot be a controlled component in React
- B) The `value` prop is missing on `<select>` and there is no `onChange` handler — the selection is uncontrolled
- C) Each `<option>` needs its own `onChange` handler
- D) `useState` cannot be used with `<select>` elements

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) The `value` prop is missing on `<select>` and there is no `onChange` handler — the selection is uncontrolled**

**Explanation:** In React, a controlled `<select>` requires `value={color}` on the element and `onChange={e => setColor(e.target.value)}` to keep the state in sync with the selected option — the same pattern as a controlled `<input>`. Without `value`, the browser manages the selection independently of React state.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 12. Jest - Unit Testing

<br>

## Q. A developer writes the following test. What does `jest.fn()` return?

```js
const mockFn = jest.fn();
mockFn("hello");
mockFn("world");

console.log(mockFn.mock.calls);
```

- A) `["hello", "world"]`
- B) `[["hello"], ["world"]]` - an array of arrays, one per call
- C) `{ args: ["hello", "world"] }`
- D) The number of times the function was called

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `[["hello"], ["world"]]` - an array of arrays, one per call**

**Explanation:** `jest.fn()` creates a mock function. `mock.calls` is an array where each element is an array of arguments from a single invocation. Useful for asserting what arguments the mock received.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer tests an async function. Why does this test always pass even when it should fail?

```js
test("fetches user", () => {
  fetchUser(1).then(user => {
    expect(user.name).toBe("Alice");
  });
});
```

- A) The assertion is inside a `.then()` and Jest does not know to wait for it
- B) `fetchUser` is synchronous
- C) `.then()` callbacks run before the test ends
- D) `expect` is not supported inside `.then()`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) The assertion is inside a `.then()` and Jest does not know to wait for it**

**Explanation:** Jest completes the test when the synchronous function returns. The `.then()` callback runs asynchronously after Jest has already marked the test as passed. Use `async/await` or return the Promise to fix this.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is a Jest snapshot test doing in the following scenario?

```js
test("renders correctly", () => {
  const tree = renderer.create(<Button label="Click me" />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

- A) It takes a screenshot of the rendered component
- B) On first run it serializes the component output to a `.snap` file; subsequent runs compare output against that saved snapshot
- C) It validates the component against a JSON schema
- D) It renders the component inside a headless browser

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) On first run it serializes the component output to a `.snap` file; subsequent runs compare output against that saved snapshot**

**Explanation:** Snapshot tests serialize the rendered output. If the output changes unexpectedly, the test fails. Run `jest --updateSnapshot` to intentionally update the saved snapshot after a deliberate change.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs to mock a module dependency in Jest. Which approach is correct?

```js
// api.js
export const getUser = () => fetch("/api/user").then(r => r.json());

// user.test.js
jest.mock("./api");
import { getUser } from "./api";
getUser.mockResolvedValue({ name: "Alice" });
```

- A) `jest.mock` must be called after the `import` statement
- B) `jest.mock("./api")` auto-mocks the module; calling `mockResolvedValue` sets the resolved value for that test
- C) `mockResolvedValue` only works for `jest.spyOn`, not `jest.mock`
- D) The mock file must be placed in a `__mocks__` folder

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `jest.mock("./api")` auto-mocks the module; calling `mockResolvedValue` sets the resolved value for that test**

**Explanation:** `jest.mock` is hoisted before imports by Babel, replacing all exports with `jest.fn()`. `mockResolvedValue` configures the mock to resolve with the given value, simulating a successful async API call.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `beforeEach` and `afterEach`. What is their purpose?

```js
describe("Counter", () => {
  let counter;
  beforeEach(() => { counter = new Counter(); });
  afterEach(() => { counter.reset(); });

  test("increments", () => { counter.increment(); expect(counter.value).toBe(1); });
});
```

- A) They run once before and after the entire `describe` block
- B) `beforeEach` runs before each individual test; `afterEach` runs after each individual test - ensuring test isolation
- C) They are only needed when testing async code
- D) They replace the `test()` setup and teardown lifecycle

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `beforeEach` runs before each individual test; `afterEach` runs after each individual test - ensuring test isolation**

**Explanation:** `beforeEach`/`afterEach` are test lifecycle hooks that set up and tear down state around each individual test, preventing state leakage between tests. Use `beforeAll`/`afterAll` for once-per-suite setup.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 13. React Testing Library

<br>

## Q. A developer queries a button using `getByRole`. Why is this preferred over `getByTestId`?

```jsx
const button = screen.getByRole("button", { name: /submit/i });
```

- A) `getByRole` is faster than `getByTestId`
- B) `getByRole` queries the DOM the way assistive technologies do, making tests more accessible and resilient to implementation details
- C) `getByTestId` is not supported in React Testing Library
- D) `getByRole` does not require any HTML attributes

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `getByRole` queries the DOM the way assistive technologies do, making tests more accessible and resilient to implementation details**

**Explanation:** The Testing Library philosophy is to test from a user\'s perspective. `getByRole` mirrors how screen readers navigate the DOM, and tests that break only when real user-visible behavior changes.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer tests a form submission. What does `userEvent.click` do compared to `fireEvent.click`?

```js
await userEvent.click(screen.getByRole("button", { name: /submit/i }));
```

- A) They are identical in behavior
- B) `userEvent.click` simulates a full browser interaction (pointerdown, mousedown, mouseup, click) while `fireEvent.click` dispatches only the click event
- C) `fireEvent.click` is async; `userEvent.click` is synchronous
- D) `userEvent` is only available in Cypress, not React Testing Library

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `userEvent.click` simulates a full browser interaction (pointerdown, mousedown, mouseup, click) while `fireEvent.click` dispatches only the click event**

**Explanation:** `@testing-library/user-event` simulates realistic user interactions including all intermediate events, making tests closer to real browser behavior. `fireEvent` dispatches a single synthetic event.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs to wait for an async update after an action. Which assertion is correct?

```jsx
test("loads users", async () => {
  render(<UserList />);
  const item = await screen.findByText("Alice");
  expect(item).toBeInTheDocument();
});
```

- A) `findByText` will throw immediately if "Alice" is not in the DOM
- B) `findByText` is equivalent to `getByText` and does not wait
- C) `findByText` returns a Promise that retries the query until the element appears or times out
- D) `await` is not needed because React Testing Library is synchronous

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `findByText` returns a Promise that retries the query until the element appears or times out**

**Explanation:** `findBy*` queries combine `waitFor` and `getBy*`. They poll the DOM at intervals until the element appears or the timeout (default 1000 ms) expires, making them ideal for testing async rendering.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs to test that an element is NOT present in the DOM. Which approach is correct?

```js
// Option A
expect(screen.getByText("Error")).not.toBeInTheDocument();

// Option B
expect(screen.queryByText("Error")).not.toBeInTheDocument();
```

- A) Option A - `getByText` returns null when the element is absent
- B) Option B - `queryByText` returns `null` when not found (does not throw); suitable for asserting absence
- C) Both are equivalent
- D) Neither is valid; use `findByText` with `not`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Option B - `queryByText` returns `null` when not found (does not throw); suitable for asserting absence**

**Explanation:** `getBy*` throws an error when an element is not found. `queryBy*` returns `null` instead, which is the correct variant when you need to assert the element is absent.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Redux-connected component needs testing. What is the recommended setup?

```jsx
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

function renderWithStore(ui, { preloadedState } = {}) {
  const store = configureStore({ reducer: rootReducer, preloadedState });
  return render(<Provider store={store}>{ui}</Provider>);
}
```

- A) Always mock the entire Redux store with `jest.mock("react-redux")`
- B) Wrap the component in a real Redux `Provider` with a test store that has a known `preloadedState`
- C) Use `useSelector` directly in test files instead of rendering the component
- D) Testing Redux-connected components requires Enzyme

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Wrap the component in a real Redux `Provider` with a test store that has a known `preloadedState`**

**Explanation:** Using a real store with `preloadedState` keeps tests realistic and avoids brittle mocks. Redux Toolkit\'s `configureStore` is lightweight enough to spin up per test. This is the pattern recommended by the Redux and RTL maintainers.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 16. MISCELLANEOUS

<br>

## Q. Alex created a component, Rxjs.js, and imported an observable from the RxJS library, like this:

```jsx
import {Observables} from 'Rxjs'
function Rxjs() {
  const observable = new Observable((subscribe) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(()=>{
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  }); 
}
export default Rxjs
```

- A) Use import Observable from 'Rxjs'
- B) Use the Observable without adding the new keyword before it: const observable = Observable ((subscriber)=> {...})
- C) Change the Observable name to something else to make it work
- D) Change the file name to something else to make the RxJS work

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: A) Use `import { Observable } from 'rxjs'`**

**Explanation:** The code uses `import {Observables} from 'Rxjs'` which has two problems: the named import is misspelled as `Observables` (should be `Observable`), and the package name `'Rxjs'` should be lowercase `'rxjs'`. The correct import is `import { Observable } from 'rxjs'`. The `new` keyword is also required when constructing an Observable, so option B is incorrect.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the purpose of `React.StrictMode`?

```jsx
<React.StrictMode>
  <App />
</React.StrictMode>
```

- A) It enables server-side rendering for the wrapped components
- B) It renders components twice in development to detect side effects, and warns about deprecated APIs
- C) It prevents any mutations to props or state at runtime
- D) It activates performance optimizations similar to production mode

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It renders components twice in development to detect side effects, and warns about deprecated APIs**

**Explanation:** `React.StrictMode` is a development-only tool with no visible UI. It intentionally double-invokes render functions, state initializers, and `useEffect` cleanup/setup pairs to surface components with impure side effects. It also warns when deprecated lifecycle methods or APIs are used. It has no effect in production.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wraps siblings in `<React.Fragment>` instead of a `<div>`. What is the benefit?

```jsx
return (
  <React.Fragment>
    <dt>Term</dt>
    <dd>Definition</dd>
  </React.Fragment>
);
```

- A) `React.Fragment` improves performance by skipping reconciliation
- B) It groups elements without adding an extra DOM node, preserving valid HTML structure
- C) It is required when returning more than two elements
- D) `React.Fragment` enables CSS Grid layout for its children

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It groups elements without adding an extra DOM node, preserving valid HTML structure**

**Explanation:** `<React.Fragment>` (or the shorthand `<>...</>`) allows a component to return multiple elements without a wrapper `<div>`. This is critical for cases like `<dt>`/`<dd>` pairs inside a `<dl>`, or `<tr>`/`<td>` in a table, where an extra `<div>` would break valid HTML semantics. The fragment itself is not rendered to the DOM.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses the `key` prop on a component outside of a list to reset its state. What does this achieve?

```jsx
<ProfileForm key={userId} userId={userId} />
```

- A) It adds the component to an internal React registry
- B) Changing `key` causes React to unmount the old component instance and mount a fresh one, fully resetting all internal state
- C) The `key` prop only affects performance, not component identity
- D) This is invalid — `key` may only be used on list items

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Changing `key` causes React to unmount the old component instance and mount a fresh one, fully resetting all internal state**

**Explanation:** React uses `key` to identify component instances across renders. When `key` changes, React treats it as a completely different component — it unmounts the old tree and mounts a new one. This is a deliberate pattern to reset a component\'s state when switching context (e.g., navigating between user profiles) without lifting state up or adding `useEffect` reset logic.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 14. Next.js

<br>

## Q. Which command scaffolds a new Next.js project with the latest version?

- A) `npx create-react-app --template next`
- B) `npx create-next-app@latest`
- C) `npm init next-app`
- D) `npx next init`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `npx create-next-app@latest`**

**Explanation:** The official scaffold tool is `create-next-app`. Running `npx create-next-app@latest` interactively prompts for TypeScript, ESLint, Tailwind CSS, the `src/` directory structure, and whether to use the App Router.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In the Next.js Pages Router, a component exported from `pages/blog/index.js` maps to which URL path?

- A) `/pages/blog`
- B) `/blog/index`
- C) `/blog`
- D) `/blog/index.js`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `/blog`**

**Explanation:** Next.js uses file-based routing. An `index.js` file maps to the root of its directory segment, so `pages/blog/index.js` resolves to `/blog`. This mirrors standard web server conventions for index files.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Which Next.js built-in component should be used for client-side navigation to avoid a full page reload?

- A) `<a href="/about">`
- B) `<Router to="/about">`
- C) `<Link href="/about">` from `next/link`
- D) `<Navigate to="/about">`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `<Link href="/about">` from `next/link`**

**Explanation:** The `<Link>` component from `next/link` intercepts clicks and performs client-side route transitions using the browser History API. It also prefetches linked pages in the background in production, delivering near-instant navigation — unlike a plain `<a>` tag which triggers a full page reload.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What advantage does `next/image` offer over a plain HTML `<img>` tag?

- A) Support for SVG animations
- B) Automatic image optimization, lazy loading by default, and responsive `srcset` generation
- C) Built-in CSS filter effects
- D) Client-side image cropping and editing

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) Automatic image optimization, lazy loading by default, and responsive `srcset` generation**

**Explanation:** `next/image` passes images through Next.js\'s built-in optimization pipeline: it converts to modern formats (WebP/AVIF), resizes on demand, lazy-loads by default, and prevents cumulative layout shift (CLS) by requiring explicit `width` and `height` props. This significantly improves Core Web Vitals scores.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the key difference between `getStaticProps` and `getServerSideProps` in the Next.js Pages Router?

- A) Both run on the server and produce identical output
- B) `getStaticProps` runs at build time (SSG); `getServerSideProps` runs on every incoming request (SSR)
- C) `getStaticProps` is only for API routes
- D) `getServerSideProps` permanently caches its result

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `getStaticProps` runs at build time (SSG); `getServerSideProps` runs on every incoming request (SSR)**

**Explanation:** `getStaticProps` pre-renders pages at build time, producing static HTML that can be cached at a CDN edge — ideal for content that rarely changes. `getServerSideProps` generates fresh HTML per request, granting access to real-time data, request cookies, and headers, but at the cost of higher server latency.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs a dynamic route for individual product pages at `/products/[id]`. Which file path in the Pages Router is correct?

- A) `pages/products/:id.js`
- B) `pages/products/{id}.js`
- C) `pages/products/[id].js`
- D) `pages/products/$id.js`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `pages/products/[id].js`**

**Explanation:** Next.js uses square-bracket notation for dynamic route segments. `pages/products/[id].js` matches `/products/42`, `/products/abc`, etc. The dynamic value is accessible as `router.query.id` or via the `params` argument in `getStaticProps` / `getServerSideProps`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer creates `pages/api/orders.js`. What does this file expose?

- A) A React page component rendered at `/api/orders`
- B) A serverless API endpoint that handles HTTP requests at `/api/orders`
- C) A static JSON file served at `/api/orders`
- D) A WebSocket connection endpoint

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) A serverless API endpoint that handles HTTP requests at `/api/orders`**

**Explanation:** Files inside `pages/api/` are API routes that run exclusively on the server. They receive Node.js-style `req` and `res` objects, are never sent to the browser, and keep server-only logic (database queries, secret keys) completely isolated from the client bundle.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Next.js developer needs an environment variable to be accessible in client-side JavaScript. What naming convention is required?

- A) `REACT_APP_API_KEY`
- B) `NEXT_PUBLIC_API_KEY`
- C) `PUBLIC_API_KEY`
- D) `CLIENT_API_KEY`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `NEXT_PUBLIC_API_KEY`**

**Explanation:** Next.js only inlines environment variables into the browser bundle when they are prefixed with `NEXT_PUBLIC_`. All other env variables remain server-side only and are never included in client code, protecting secrets like database passwords and API tokens from exposure.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wants a statically generated page to automatically refresh stale content every 10 minutes without a full rebuild. What is the correct approach?

```js
export async function getStaticProps() {
  const data = await fetchProducts();
  return { props: { data }, revalidate: 600 };
}
```

- A) This is incorrect; use `getServerSideProps` instead for refreshing content
- B) This uses Incremental Static Regeneration (ISR) — after 600 seconds, the next request triggers background regeneration while the stale page is served
- C) The page is rebuilt every 600 seconds automatically regardless of traffic
- D) `revalidate` is not a valid key in the `getStaticProps` return object

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) This uses Incremental Static Regeneration (ISR) — after 600 seconds, the next request triggers background regeneration while the stale page is served**

**Explanation:** ISR combines the performance of static pages with the freshness of server rendering. Once the revalidation window expires, the next visitor gets the stale page immediately while Next.js regenerates it in the background. The freshly generated page replaces the old one for subsequent visitors.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In Next.js App Router (`app/` directory), what is the role of a `layout.tsx` file?

- A) It defines page-level `<head>` metadata like `<title>` and Open Graph tags
- B) It is a persistent UI shell that wraps the current segment and all nested segments, preserving state across route changes
- C) It replaces `getServerSideProps` for server-side data fetching
- D) It is used only for CSS-in-JS scope isolation

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It is a persistent UI shell that wraps the current segment and all nested segments, preserving state across route changes**

**Explanation:** `layout.tsx` defines shared UI (nav, sidebar, providers) that persists across navigations within its segment. React preserves the layout component\'s state and DOM — it is not unmounted when a child route changes. Every segment can have its own `layout.tsx`, and they nest automatically for granular control.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In Next.js App Router, what does adding `"use client"` at the top of a file declare?

- A) The file should only be included in the development bundle
- B) The component is a Client Component — it is hydrated in the browser and can use hooks, state, and browser APIs
- C) The file handles client authentication logic only
- D) All exports from the file are server-only utilities

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) The component is a Client Component — it is hydrated in the browser and can use hooks, state, and browser APIs**

**Explanation:** By default, all App Router components are React Server Components that render only on the server with zero JavaScript shipped to the client. Adding `"use client"` marks a boundary: that file and its imports become part of the client bundle, enabling interactivity via `useState`, `useEffect`, and event handlers. Server Components cannot use these APIs.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `getStaticPaths` with `fallback: 'blocking'`. What happens when a visitor requests a path that was not pre-generated at build time?

- A) A 404 page is returned immediately
- B) A loading skeleton from `router.isFallback` is shown while the page generates
- C) The page is server-rendered on the first request, the response is cached as static HTML, and subsequent visitors get the static file
- D) The Next.js build is triggered again to include the new path

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) The page is server-rendered on the first request, the response is cached as static HTML, and subsequent visitors get the static file**

**Explanation:** `fallback: 'blocking'` generates unbuilt pages on-demand via SSR (the request blocks until rendering is complete), then stores the result as static HTML. Unlike `fallback: true`, no intermediate loading state is shown. Use it when you want on-demand generation without a loading flash.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Where does Next.js Middleware execute, and what is it primarily used for?

- A) In the browser after the page loads, to modify the DOM
- B) In the Node.js API runtime to validate request bodies
- C) At the Edge runtime, before a request is matched to a route — for redirects, rewrites, auth checks, and header manipulation
- D) Inside React Server Components as an async data-fetching wrapper

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) At the Edge runtime, before a request is matched to a route — for redirects, rewrites, auth checks, and header manipulation**

**Explanation:** Next.js Middleware runs in the lightweight Edge Runtime (V8-based) and executes before route resolution. It is ideal for authentication redirects, A/B testing, geo-targeting, and request/response header manipulation with near-zero added latency since it runs at the network edge close to the user.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In the Next.js App Router, what is the purpose of `generateStaticParams`?

```tsx
// app/products/[id]/page.tsx
export async function generateStaticParams() {
  const products = await fetchProducts();
  return products.map((p) => ({ id: String(p.id) }));
}
```

- A) It validates the params passed to a dynamic route at runtime
- B) It is the App Router equivalent of `getStaticPaths` — it returns param objects to pre-render at build time
- C) It generates TypeScript types for dynamic route parameters
- D) It runs on every request to fetch the latest parameters from the database

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It is the App Router equivalent of `getStaticPaths` — it returns param objects to pre-render at build time**

**Explanation:** `generateStaticParams` replaces `getStaticPaths` from the Pages Router. It is exported from a dynamic segment\'s `page.tsx` and returns an array of param objects that Next.js uses to determine which paths to pre-render during `next build`.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In the Next.js App Router, how do React Server Components (RSC) fetch data differently from client components?

- A) RSC use `useEffect` with `fetch` in the component body
- B) RSC use a special `getData()` hook provided by Next.js
- C) RSC can be declared as `async` functions and `await` data directly in the component body — no hooks required
- D) RSC require Redux Toolkit for all server-side data fetching

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) RSC can be declared as `async` functions and `await` data directly in the component body — no hooks required**

**Explanation:** React Server Components run exclusively on the server and are never hydrated in the browser. Because they do not participate in the React hook lifecycle, they can be `async` functions that `await` database queries, file reads, or API calls directly in the component body, eliminating the need for `useEffect`-based data fetching patterns.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wraps a slow data-fetching Server Component with `<Suspense>` in the Next.js App Router. What is the performance benefit?

```tsx
<Suspense fallback={<Skeleton />}>
  <SlowDataComponent />
</Suspense>
```

- A) It moves `SlowDataComponent` to client-side rendering automatically
- B) It enables HTML streaming — the server sends the outer shell (including the fallback) immediately and streams the component\'s HTML when its data resolves
- C) It caches the component\'s output in a Redis store
- D) It prevents `SlowDataComponent` from receiving any props until data is ready

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It enables HTML streaming — the server sends the outer shell (including the fallback) immediately and streams the component\'s HTML when its data resolves**

**Explanation:** Next.js App Router supports HTTP streaming via React Suspense. The server flushes the page shell and Suspense fallback to the browser immediately (improving TTFB), then streams the resolved component HTML as a small `<script>` injection once the awaited data is ready — without a full page reload or client-side fetch.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 15. React Router

<br>

## Q. A developer sets up React Router v6. Which component provides the routing context to the entire application?

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- A) `<Routes>`
- B) `<Route>`
- C) `<BrowserRouter>`
- D) `<Switch>`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `<BrowserRouter>`**

**Explanation:** `<BrowserRouter>` provides the routing context to the component tree using the browser\'s History API. `<Routes>` selects the best-matching `<Route>` for the current URL. `<Switch>` was the v5 equivalent of `<Routes>` and does not exist in v6.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs to read the `:id` parameter from the URL `/users/42`. Which React Router v6 hook should they use?

- A) `useQuery()`
- B) `useHistory()`
- C) `useParams()`
- D) `useLocation()`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: C) `useParams()`**

**Explanation:** `useParams()` returns an object of the matched URL parameters. For a route defined as `/users/:id`, calling `const { id } = useParams()` gives `"42"`. `useHistory` was the v5 API replaced by `useNavigate` in v6. `useLocation` provides the current location object (pathname, search, hash) without URL params.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wants to programmatically redirect to `/dashboard` after a successful form submission. Which React Router v6 hook should they use?

- A) `useHistory()`
- B) `useNavigate()`
- C) `useLocation()`
- D) `useRedirect()`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) `useNavigate()`**

**Explanation:** In React Router v6, `useNavigate()` returns a `navigate` function for imperative navigation: `const navigate = useNavigate(); navigate("/dashboard")`. `useHistory()` was its v5 predecessor and was removed in v6. `useLocation()` only reads the current URL without navigating.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer builds a protected route pattern. What does the following component do?

```jsx
function PrivateRoute({ children }) {
  const isLoggedIn = useAuth();
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}
```

- A) It always renders children and ignores the auth state
- B) It renders children when authenticated; otherwise it declaratively redirects to `/login` using `<Navigate>`
- C) It suspends rendering until authentication resolves
- D) `<Navigate>` is only valid as a direct child of `<Routes>`

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) It renders children when authenticated; otherwise it declaratively redirects to `/login` using `<Navigate>`**

**Explanation:** `<Navigate>` is the declarative redirect component in React Router v6. When rendered, it immediately triggers a navigation to the specified route. The `replace` prop replaces the current history entry so the user cannot navigate back to the protected page with the browser back button.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer defines nested routes in React Router v6. Where must `<Outlet />` be placed for child routes to render?

```jsx
<Route path="/dashboard" element={<DashboardLayout />}>
  <Route path="stats" element={<Stats />} />
  <Route path="settings" element={<Settings />} />
</Route>
```

- A) In each of the child components (`<Stats />`, `<Settings />`)
- B) In `<DashboardLayout />`, at the position where the matched child route element should appear
- C) Immediately inside `<BrowserRouter>`
- D) `<Outlet />` is not needed; child routes render automatically

<details>
<summary><strong>Answer & Explanation</strong></summary>

**Answer: B) In `<DashboardLayout />`, at the position where the matched child route element should appear**

**Explanation:** `<Outlet>` is a placeholder inside a parent route\'s element component. It renders the matched child route\'s element at that position. Without `<Outlet>`, child routes match in the URL but their elements never appear in the DOM.

</details>

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>
