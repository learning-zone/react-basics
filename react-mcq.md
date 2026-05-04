# React Scenario-Based MCQ

> Scenario-based multiple choice questions covering React, React 19, Redux, and Jest topics.

<br/>

## Table of Contents

* [React Fundamentals](#-1-react-fundamentals)
* [React Hooks](#-2-react-hooks)
* [Component Lifecycle](#-3-component-lifecycle)
* [React 19 Features](#-4-react-19-features)
* [Redux & State Management](#-5-redux--state-management)
* [Redux Toolkit](#-6-redux-toolkit)
* [Performance Optimization](#-7-performance-optimization)
* [Context API](#-8-context-api)
* [Error Boundaries](#-9-error-boundaries)
* [Code Splitting & Lazy Loading](#-10-code-splitting--lazy-loading)
* [Forms & Controlled Components](#-11-forms--controlled-components)
* [Jest Unit Testing](#-12-jest-unit-testing)
* [React Testing Library](#-13-react-testing-library)
* [Miscellaneous](#-14-miscellaneous)
* [Next.js](#-15-nextjs)
* [React Router](#-16-react-router)

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

**Answer: C) Both a and b are correct**

> Both options remove the React unique key warning — React only requires a key prop to be present. Using the array **index** as a key is acceptable for static, non-reordered lists. Using `Math.random()` also removes the warning by supplying a key, but it is an anti-pattern: it generates a new key on every render, causing React to unmount and remount every list item, destroying component state and hurting performance. The question asks what *removes the warning*, not what is best practice — so both are technically correct.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Alex is working on a project where she needs to implement a new feature requiring dynamic component loading. She plans to use React CLI for setting up the project and ensuring the feature integrates seamlessly. Considering her goal to optimize component handling and building times, which React CLI feature should Alex use to improve performance and manage components effectively?

- A) Use the react-scripts to run and build components
- B) Utilize create-react-app for efficient component management
- C) Leverage custom React CLI script for specific component needs
- D) Implement React CLI commands for module bundling and optimization.

**Answer: D) Implement React CLI commands for module bundling and optimization**

> For dynamic component loading, module bundling and optimization (such as code splitting and lazy loading via `React.lazy`) is the right approach. These techniques allow components to be loaded on demand, reducing initial bundle size and improving build and runtime performance.

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

**Answer: A) It will return an error.**

> React components must return JSX (or `null`), not plain JavaScript objects. Returning a plain object causes a runtime error: *"Objects are not valid as a React child."* To render the data, you would need to map it into JSX elements.

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

**Answer: D) Error**

> A React component can only return a single root element. Returning two adjacent `<div>` elements without a wrapper causes a compile-time error: *"Adjacent JSX elements must be wrapped in an enclosing tag."* The fix is to wrap them in a fragment `<>...</>` or a container element.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Suppose you are working on an e-commerce website. You must create a production package. Which command will you use?

- A) npm start
- B) npm run dev
- C) npm run prod
- D) npm run build

**Answer: D) npm run build**

> `npm run build` triggers the production build script (e.g., via Create React App or Vite), which bundles and minifies the application for deployment. `npm start` runs the development server, `npm run dev` is a common dev-server alias, and `npm run prod` is not a standard script.

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

**Answer: C) Hello, World!**

> When `name` prop is not provided it is `undefined`, which is falsy. The `||` operator falls back to `"World"`, so the output is `Hello, World!`.

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

**Answer: C) React cannot efficiently reconcile list items and may produce incorrect UI on re-renders**

> React uses `key` to identify which items changed, were added, or removed. Without keys, React falls back to index-based diffing, which can cause incorrect state association and performance issues.

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

**Answer: B) Both calls read the same `count` snapshot, so `count` only increases by 1**

> State updates in React are batched. Both calls close over the same `count` value. Use the functional updater `setCount(prev => prev + 1)` to guarantee sequential increments.

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

**Answer: C) `UserCard` will always re-render even if wrapped in `React.memo`, because the object reference changes**

> `React.memo` uses shallow comparison. A new object literal `{}` creates a new reference on every render, defeating memoization. Hoist the object outside the component or use `useMemo`.

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

**Answer: B) `React.createElement("button", { className: "btn", onClick: handleClick }, "Submit")`**

> JSX is syntactic sugar. Babel (or the React transform) compiles JSX into `React.createElement(type, props, ...children)` calls that produce React element descriptor objects.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wraps several components with `withAuth(Component)` to enforce authentication. What React pattern does `withAuth` represent?

- A) Render Props
- B) Compound Components
- C) Higher-Order Component (HOC)
- D) Observer Pattern

**Answer: C) Higher-Order Component (HOC)**

> A Higher-Order Component (HOC) is a function with the signature `(WrappedComponent) => EnhancedComponent`. It adds cross-cutting concerns (auth guards, logging, theming) without modifying the original component. In modern React, custom hooks have largely replaced HOCs for logic reuse, but HOCs remain common in legacy codebases and libraries.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs to render a modal dialog outside the parent DOM node to avoid `overflow: hidden` and z-index stacking issues. Which React API solves this?

- A) `React.createContext`
- B) `React.createPortal`
- C) `React.lazy`
- D) `React.forwardRef`

**Answer: B) `React.createPortal`**

> `ReactDOM.createPortal(children, domNode)` renders children into any DOM node outside the component\'s parent hierarchy. Despite the separate DOM placement, React event bubbling still follows the React component tree — making portals ideal for modals, tooltips, and dropdown menus that must escape CSS overflow or z-index constraints.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer has a component with no state, receiving only primitive props. Which optimization avoids re-rendering it when its parent re-renders with the same props?

- A) Wrap it in `React.lazy()`
- B) Extend `React.PureComponent` (class) or wrap with `React.memo` (function)
- C) Move all logic into `useEffect`
- D) Use `ReactDOM.createPortal`

**Answer: B) Extend `React.PureComponent` (class) or wrap with `React.memo` (function)**

> `React.PureComponent` performs a shallow comparison of props and state for class components. `React.memo` does the same for function components. Both prevent re-renders when props are shallowly unchanged — a lightweight optimization for "leaf" display components that receive only primitives or stable references.

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

**Answer: D) useRef**

> `useRef` gives you a direct reference to the underlying DOM element. By attaching the ref to the input (`<input ref={inputRef} />`), you can imperatively call `inputRef.current.blur()` from any other event handler to programmatically trigger the blur event.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. You are working on a food delivery web application. On the restaurant selection, you want to get elements from its stable unique ID. Which React hook will you use?

- A) useRef
- B) useState
- C) useId
- D) useContext

**Answer: C) useId**

> `useId` is a React hook that generates a stable, unique ID that is consistent between server and client renders. It is ideal for associating form elements with labels or any scenario requiring a guaranteed unique identifier per component instance.

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

**Answer: C) Option C - runs whenever `userId` changes**

> Option C correctly lists `userId` as the only dependency. Option D is also valid if `fetchUser` is unstable, but Option C is the minimal correct answer for this scenario.

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

**Answer: B) `count` is in the dependency array, so `handleClick` is recreated every time `count` changes, causing the child to re-render**

> Because `count` is a dependency, the callback is recreated on each count change, producing a new reference. Use `setCount(prev => prev + 1)` and remove `count` from the dependency array to keep a stable reference.

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

**Answer: B) A memoized value - the sorted array, recomputed only when `items` changes**

> `useMemo` caches the result of the computation and only recomputes when a listed dependency changes. This avoids an expensive sort on every render.

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

**Answer: C) Mutating `timerRef.current` does not cause a re-render and persists across renders**

> `useRef` returns a mutable container whose `.current` property survives re-renders without triggering them - ideal for storing timers, previous values, or DOM nodes.

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

**Answer: B) When multiple sub-values depend on each other or next state depends on previous state in complex ways**

> `useReducer` centralizes complex state transitions into a pure reducer function, making state logic easier to test and reason about compared to multiple independent `useState` calls.

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

**Answer: B) The function name starts with `use` and calls built-in React hooks internally, following the Rules of Hooks**

> Custom hooks are plain JavaScript functions whose name begins with `use`. The `use` prefix signals to React\'s linter (eslint-plugin-react-hooks) that the function must follow the Rules of Hooks. They allow stateful logic to be shared across components without changing the component hierarchy or introducing HOC/render-prop complexity.

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

**Answer: B) Hooks must not be called conditionally — the order of hook calls must be identical on every render**

> React tracks each hook\'s state by its call order. Placing a hook inside an `if` block means it may or may not execute depending on the condition, corrupting React\'s internal state tracking. The fix is to call the hook unconditionally and use the condition inside it: `const [role, setRole] = useState(isAdmin ? "admin" : "")`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer calls `useContext(ThemeContext)` inside a component. When does the component re-render?

- A) Every time any state changes anywhere in the application
- B) Only when the component\'s own state changes
- C) Whenever the `value` prop of the nearest `ThemeContext.Provider` above it changes
- D) `useContext` never causes a re-render

**Answer: C) Whenever the `value` prop of the nearest `ThemeContext.Provider` above it changes**

> `useContext` subscribes the component to context updates. React re-renders the consumer whenever the `value` reference on the matching Provider changes. To prevent unnecessary re-renders, memoize the context value with `useMemo` so it only changes when the underlying data changes.

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

**Answer: B) It runs after every re-render before the next effect executes, and on unmount**

> React calls the cleanup function before re-running the effect due to a dependency change, and also when the component unmounts. This prevents stale subscriptions and memory leaks.

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

**Answer: B) `useEffect(() => { fetchData(id); }, [id])`**

> Listing `id` in the dependency array replicates the `prevProps.id !== this.props.id` guard - the effect only re-runs when `id` changes.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer notices a layout flash when reading a DOM node\'s size. Which hook should replace `useEffect`?

- A) `useRef`
- B) `useMemo`
- C) `useLayoutEffect`
- D) `useTransition`

**Answer: C) `useLayoutEffect`**

> `useLayoutEffect` fires synchronously after all DOM mutations but before the browser paints, allowing DOM measurements and mutations without a visible flash.

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

**Answer: B) `use()` reads a Promise or Context value, suspending the component until the Promise resolves**

> `use()` is a new React 19 hook that can be called conditionally (unlike other hooks). It integrates with Suspense - the component suspends while the Promise is pending and resumes with the resolved value.

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

**Answer: B) The submission state of the nearest parent `<form>`, including whether a submission is pending**

> `useFormStatus` (react-dom) gives child components access to the form\'s submission state. `pending` is `true` while the form action is executing, enabling progressive-enhancement UX patterns.

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

**Answer: B) To immediately show an optimistic UI update while an async action is in flight, then reconcile with the real result**

> `useOptimistic` lets you speculatively update the UI before the server confirms the action. Once the action settles, React replaces the optimistic state with the real server state.

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

**Answer: C) The async function runs on the server; passing it to `action` enables progressive enhancement without a client-side JS handler**

> React 19 Server Actions allow async functions marked `"use server"` to be passed directly to `<form action>`. The form works even without JavaScript, and React manages serialization automatically.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In React 19, what changed about `ref` handling for function components?

- A) `ref` is no longer supported on function components
- B) Function components can now accept `ref` as a regular prop without `forwardRef`
- C) `ref` must be passed as `innerRef` in React 19
- D) `useRef` was replaced by `createRef` in function components

**Answer: B) Function components can now accept `ref` as a regular prop without `forwardRef`**

> React 19 deprecates `forwardRef`. Function components can receive `ref` directly in their props, simplifying ref forwarding patterns significantly.

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

**Answer: B) The reducer mutates state directly and returns the same reference - React-Redux cannot detect the change**

> Redux reducers must be pure functions that return a new state object. Mutating and returning the same reference means React-Redux\'s shallow equality check sees no change and skips re-rendering. Return `{ ...state, items: [...state.items, action.payload] }` instead.

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

**Answer: B) It allows action creators to return functions (thunks) instead of plain objects, enabling async logic**

> Plain Redux only handles synchronous plain-object actions. `redux-thunk` intercepts function actions and calls them with `dispatch` and `getState`, enabling async workflows.

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

**Answer: B) A new object literal is returned on every call, so the selector\'s reference always changes, triggering a re-render**

> `useSelector` uses reference equality by default. Returning a new object `{}` each time always fails the equality check. Use separate `useSelector` calls, `shallowEqual` as the second argument, or `createSelector` from Reselect.

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

**Answer: B) It splits a single large reducer into slice functions, each managing its own part of the state tree**

> `combineReducers` delegates different parts of the state to separate reducer functions. Each reducer only receives and manages its own slice of the state (`state.auth`, `state.cart`, etc.).

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

**Answer: B) The reducer and corresponding action creators (`counterSlice.actions`)**

> `createSlice` uses Immer under the hood (enabling safe mutation syntax) and auto-generates action creators whose `type` matches `"sliceName/reducerName"` - e.g., `"counter/increment"`.

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

**Answer: B) `posts/fetchAll/pending`, `posts/fetchAll/fulfilled`, `posts/fetchAll/rejected`**

> `createAsyncThunk` automatically dispatches `pending` before the Promise starts, `fulfilled` on resolution, and `rejected` on rejection - matching the FSA lifecycle convention.

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

**Answer: B) An object with `data`, loading/error state, and refetch helpers - auto-fetching when `userId` changes**

> RTK Query auto-generates hooks that manage fetching, caching, and re-fetching. The hook re-fetches whenever `userId` changes and handles deduplication and cache invalidation automatically.

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

**Answer: B) RTK Query cannot store its cache; queries will always refetch and cache features will not work**

> RTK Query stores its normalized cache in the Redux state tree under `api.reducerPath`. Without the reducer, there is nowhere to persist data and the cache/invalidation system will not function.

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

**Answer: B) Inside `extraReducers` using the builder callback: `builder.addCase(fetchPosts.fulfilled, ...)`**

> `extraReducers` is the correct location to handle actions that were generated outside the slice — such as thunk lifecycle actions from `createAsyncThunk`. The builder API provides type-safe methods (`addCase`, `addMatcher`, `addDefaultCase`) to react to `pending`, `fulfilled`, and `rejected` states.

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

**Answer: B) It memoizes derived data — the result function re-runs only when the input selectors return new values, preventing unnecessary recomputation and re-renders**

> Without memoization, a selector computing derived data (filtered lists, sorted arrays, aggregates) runs on every render. `createSelector` caches the last result and skips recomputation when its input selectors return the same references, improving both CPU usage and render performance when used with `useSelector`.

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

**Answer: A) Implementing a Debounce function to limit the rate at which events are processed**

> Debouncing limits how often a high-frequency event handler fires by delaying execution until a burst of events has stopped. This directly reduces performance bottlenecks for events like scroll, resize, or keypress. A Global Event Bus adds coupling, the Observer pattern addresses subscriptions not rate-limiting, and Redux middleware handles async side effects rather than event frequency.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Suppose you are working on an inventory management portal. When your product list loads, you don\'t have any control over its state but you want to give high priority to UI updates. Which React feature will help you?

- A) useTransition
- B) useEffect
- C) useMemo
- D) useDeferredValue

**Answer: D) useDeferredValue**

> `useDeferredValue` is the right choice when you do not control the state (e.g., it comes from a prop or an external source). It creates a deferred copy of the value so React can prioritize urgent UI updates and render the deferred value when the browser is idle. `useTransition` is similar but requires you to own the state update.

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

**Answer: B) Wrap `Child` in `React.memo()` - it skips re-rendering if props did not shallowly change**

> `React.memo` is a higher-order component that memoizes the rendered output. If the next props shallowly equal the previous props, React reuses the last render and skips the child\'s reconciliation.

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

**Answer: C) `useMemo` - cache the computed `total` and recompute only when `transactions` changes**

> `useMemo(() => transactions.reduce(...), [transactions])` ensures the expensive reduction only runs when `transactions` changes, not on every render.

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

**Answer: B) React is still processing the low-priority transition update**

> `useTransition` marks an update as non-urgent. `isPending` is `true` while React is rendering the deferred update, allowing you to show a loading indicator without blocking the input.

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

**Answer: A) Use the Context API**

> The React Context API is designed exactly for this scenario — passing data through a component tree without having to thread props through every intermediate level (prop drilling). Create a context with `React.createContext`, wrap the tree in a `Provider`, and any descendant can consume the value with `useContext`.

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

**Answer: B) All components that consume the context via `useContext(ThemeContext)` re-render**

> React re-renders every component that called `useContext(ThemeContext)` whenever the `value` reference changes. Components that do not consume the context are not affected.

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

**Answer: B) Use `useMemo` to stabilize the `theme` object reference**

> A new `theme` object is created on every render, causing all consumers to re-render. `const theme = useMemo(() => ({ color: "blue" }), [])` produces a stable reference and prevents unnecessary consumer updates.

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

**Answer: A) Use window.addEventListener to listen for unhandled promise rejections and log them**

> `window.addEventListener('unhandledrejection', handler)` is the standard browser API for globally capturing unhandled promise rejections. The event object provides the rejected `reason`, enabling comprehensive logging. Error Boundaries do not catch async/promise errors, and `try-catch` only works when applied locally around each async call.

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

**Answer: B) Errors thrown during rendering, in lifecycle methods, and in constructors of child components**

> Error Boundaries catch errors during React\'s render phase and lifecycle methods. They do NOT catch errors in event handlers (use `try/catch` there), async code, or server-side rendering.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the difference between `getDerivedStateFromError` and `componentDidCatch`?

- A) They are identical; either can be used
- B) `getDerivedStateFromError` is used to render a fallback UI (render phase); `componentDidCatch` is used to log error information (commit phase)
- C) `componentDidCatch` renders the fallback; `getDerivedStateFromError` only logs
- D) `getDerivedStateFromError` replaces `componentDidCatch` in React 18+

**Answer: B) `getDerivedStateFromError` is used to render a fallback UI (render phase); `componentDidCatch` is used to log error information (commit phase)**

> `getDerivedStateFromError` runs during rendering so it can update state to show a fallback. `componentDidCatch` runs after the tree has re-rendered and is the right place to call error reporting services.

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

**Answer: B) Split the code into small modules and import it as per the requirements**

> Code splitting with `React.lazy()` and dynamic `import()` allows the dashboard to load only the code needed for the initial view, deferring heavier modules until they are required. This reduces the initial bundle size and improves load time without removing features or limiting data.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Alex, a software developer, is working on an application where she needs to implement a seamless transition between pages. She is considering using the Transition API to enhance the user experience. Which approach should Alex take to achieve smooth transitions in her application?

- A) Use the Transition API\'s startTransition function to update the state that triggers transitions.
- B) Apply the ReactDom.createRoot method to manage the rendering of transition states.
- C) Utilize React.StrictMode to detect potential issues during transitions.
- D) Implement React.lazy for dynamic imports to handle page transitions.

**Answer: A) Use the Transition API\'s startTransition function to update the state that triggers transitions**

> `startTransition` (from `useTransition` or `React.startTransition`) marks a state update as a non-urgent transition, allowing React to keep the current UI responsive while preparing the new page in the background. This is the correct way to achieve smooth page-to-page transitions with the Transition API.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Alex, a software developer, is working on an application where she is utilizing Suspense for handling data fetching. Despite configuring Suspense she observes that her component does not render immediately when waiting for data. She is puzzled about the potential reasons behind this delay in rendering. What could be the reason for this behavior?

- A) The delay in rendering might be due to network latency or slow data fetching, rather than an issue with how Suspense is used or configured in the application.
- B) Alex\'s component could be using an outdated version that does not support the latest features required for Suspense to handle data fetching and rendering efficiently, resulting in the delay.
- C) The Suspense component configuration might be incorrect or incomplete. If Suspense is not properly set up, it could lead to unexpected delays in rendering the component and handling asynchronous operations.
- D) Alex might not have wrapped her component properly with a Suspense component. This is crucial as Suspense manages asynchronous data fetching and ensures that the fallback UI is shown until the data is fully loaded and the component is ready to render.

**Answer: D) Alex might not have wrapped her component properly with a Suspense component**

> Suspense requires components that perform asynchronous data fetching to be wrapped inside a `<Suspense>` boundary with a `fallback` prop. Without proper wrapping, the component will not know to show a fallback UI while data loads, resulting in unexpected rendering behavior.

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

**Answer: B) While the `Chart` chunk is downloading, the component suspends; `Suspense` provides the fallback UI during that pause**

> `React.lazy` throws a Promise while the module is loading. A `Suspense` boundary catches that Promise and renders its `fallback` prop until the Promise resolves and the component is ready.

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

**Answer: A) Option A is correct**

> Dynamic `import()` must be wrapped in `React.lazy()` and the resulting component must be rendered inside a `Suspense` boundary. Option B creates a Promise, not a React component.

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

**Answer: B) An `onChange` handler - without it the input is read-only and cannot be updated**

> In a controlled component, React drives the input value via the `value` prop. Without `onChange` calling `setQuery`, user keystrokes are ignored and the input appears frozen.

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

**Answer: B) It uses uncontrolled inputs with refs by default, reducing re-renders on every keystroke**

> React Hook Form avoids re-rendering on each keystroke by managing values through DOM refs instead of React state, significantly improving performance for complex forms.

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

**Answer: B) `[["hello"], ["world"]]` - an array of arrays, one per call**

> `jest.fn()` creates a mock function. `mock.calls` is an array where each element is an array of arguments from a single invocation. Useful for asserting what arguments the mock received.

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

**Answer: A) The assertion is inside a `.then()` and Jest does not know to wait for it**

> Jest completes the test when the synchronous function returns. The `.then()` callback runs asynchronously after Jest has already marked the test as passed. Use `async/await` or return the Promise to fix this.

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

**Answer: B) On first run it serializes the component output to a `.snap` file; subsequent runs compare output against that saved snapshot**

> Snapshot tests serialize the rendered output. If the output changes unexpectedly, the test fails. Run `jest --updateSnapshot` to intentionally update the saved snapshot after a deliberate change.

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

**Answer: B) `jest.mock("./api")` auto-mocks the module; calling `mockResolvedValue` sets the resolved value for that test**

> `jest.mock` is hoisted before imports by Babel, replacing all exports with `jest.fn()`. `mockResolvedValue` configures the mock to resolve with the given value, simulating a successful async API call.

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

**Answer: B) `beforeEach` runs before each individual test; `afterEach` runs after each individual test - ensuring test isolation**

> `beforeEach`/`afterEach` are test lifecycle hooks that set up and tear down state around each individual test, preventing state leakage between tests. Use `beforeAll`/`afterAll` for once-per-suite setup.

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

**Answer: B) `getByRole` queries the DOM the way assistive technologies do, making tests more accessible and resilient to implementation details**

> The Testing Library philosophy is to test from a user\'s perspective. `getByRole` mirrors how screen readers navigate the DOM, and tests that break only when real user-visible behavior changes.

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

**Answer: B) `userEvent.click` simulates a full browser interaction (pointerdown, mousedown, mouseup, click) while `fireEvent.click` dispatches only the click event**

> `@testing-library/user-event` simulates realistic user interactions including all intermediate events, making tests closer to real browser behavior. `fireEvent` dispatches a single synthetic event.

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

**Answer: C) `findByText` returns a Promise that retries the query until the element appears or times out**

> `findBy*` queries combine `waitFor` and `getBy*`. They poll the DOM at intervals until the element appears or the timeout (default 1000 ms) expires, making them ideal for testing async rendering.

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

**Answer: B) Option B - `queryByText` returns `null` when not found (does not throw); suitable for asserting absence**

> `getBy*` throws an error when an element is not found. `queryBy*` returns `null` instead, which is the correct variant when you need to assert the element is absent.

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

**Answer: B) Wrap the component in a real Redux `Provider` with a test store that has a known `preloadedState`**

> Using a real store with `preloadedState` keeps tests realistic and avoids brittle mocks. Redux Toolkit\'s `configureStore` is lightweight enough to spin up per test. This is the pattern recommended by the Redux and RTL maintainers.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 14. MISCELLANEOUS

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

**Answer: A) Use `import { Observable } from 'rxjs'`**

> The code uses `import {Observables} from 'Rxjs'` which has two problems: the named import is misspelled as `Observables` (should be `Observable`), and the package name `'Rxjs'` should be lowercase `'rxjs'`. The correct import is `import { Observable } from 'rxjs'`. The `new` keyword is also required when constructing an Observable, so option B is incorrect.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 15. Next.js

<br>

## Q. Which command scaffolds a new Next.js project with the latest version?

- A) `npx create-react-app --template next`
- B) `npx create-next-app@latest`
- C) `npm init next-app`
- D) `npx next init`

**Answer: B) `npx create-next-app@latest`**

> The official scaffold tool is `create-next-app`. Running `npx create-next-app@latest` interactively prompts for TypeScript, ESLint, Tailwind CSS, the `src/` directory structure, and whether to use the App Router.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In the Next.js Pages Router, a component exported from `pages/blog/index.js` maps to which URL path?

- A) `/pages/blog`
- B) `/blog/index`
- C) `/blog`
- D) `/blog/index.js`

**Answer: C) `/blog`**

> Next.js uses file-based routing. An `index.js` file maps to the root of its directory segment, so `pages/blog/index.js` resolves to `/blog`. This mirrors standard web server conventions for index files.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Which Next.js built-in component should be used for client-side navigation to avoid a full page reload?

- A) `<a href="/about">`
- B) `<Router to="/about">`
- C) `<Link href="/about">` from `next/link`
- D) `<Navigate to="/about">`

**Answer: C) `<Link href="/about">` from `next/link`**

> The `<Link>` component from `next/link` intercepts clicks and performs client-side route transitions using the browser History API. It also prefetches linked pages in the background in production, delivering near-instant navigation — unlike a plain `<a>` tag which triggers a full page reload.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What advantage does `next/image` offer over a plain HTML `<img>` tag?

- A) Support for SVG animations
- B) Automatic image optimization, lazy loading by default, and responsive `srcset` generation
- C) Built-in CSS filter effects
- D) Client-side image cropping and editing

**Answer: B) Automatic image optimization, lazy loading by default, and responsive `srcset` generation**

> `next/image` passes images through Next.js\'s built-in optimization pipeline: it converts to modern formats (WebP/AVIF), resizes on demand, lazy-loads by default, and prevents cumulative layout shift (CLS) by requiring explicit `width` and `height` props. This significantly improves Core Web Vitals scores.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. What is the key difference between `getStaticProps` and `getServerSideProps` in the Next.js Pages Router?

- A) Both run on the server and produce identical output
- B) `getStaticProps` runs at build time (SSG); `getServerSideProps` runs on every incoming request (SSR)
- C) `getStaticProps` is only for API routes
- D) `getServerSideProps` permanently caches its result

**Answer: B) `getStaticProps` runs at build time (SSG); `getServerSideProps` runs on every incoming request (SSR)**

> `getStaticProps` pre-renders pages at build time, producing static HTML that can be cached at a CDN edge — ideal for content that rarely changes. `getServerSideProps` generates fresh HTML per request, granting access to real-time data, request cookies, and headers, but at the cost of higher server latency.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs a dynamic route for individual product pages at `/products/[id]`. Which file path in the Pages Router is correct?

- A) `pages/products/:id.js`
- B) `pages/products/{id}.js`
- C) `pages/products/[id].js`
- D) `pages/products/$id.js`

**Answer: C) `pages/products/[id].js`**

> Next.js uses square-bracket notation for dynamic route segments. `pages/products/[id].js` matches `/products/42`, `/products/abc`, etc. The dynamic value is accessible as `router.query.id` or via the `params` argument in `getStaticProps` / `getServerSideProps`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer creates `pages/api/orders.js`. What does this file expose?

- A) A React page component rendered at `/api/orders`
- B) A serverless API endpoint that handles HTTP requests at `/api/orders`
- C) A static JSON file served at `/api/orders`
- D) A WebSocket connection endpoint

**Answer: B) A serverless API endpoint that handles HTTP requests at `/api/orders`**

> Files inside `pages/api/` are API routes that run exclusively on the server. They receive Node.js-style `req` and `res` objects, are never sent to the browser, and keep server-only logic (database queries, secret keys) completely isolated from the client bundle.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A Next.js developer needs an environment variable to be accessible in client-side JavaScript. What naming convention is required?

- A) `REACT_APP_API_KEY`
- B) `NEXT_PUBLIC_API_KEY`
- C) `PUBLIC_API_KEY`
- D) `CLIENT_API_KEY`

**Answer: B) `NEXT_PUBLIC_API_KEY`**

> Next.js only inlines environment variables into the browser bundle when they are prefixed with `NEXT_PUBLIC_`. All other env variables remain server-side only and are never included in client code, protecting secrets like database passwords and API tokens from exposure.

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

**Answer: B) This uses Incremental Static Regeneration (ISR) — after 600 seconds, the next request triggers background regeneration while the stale page is served**

> ISR combines the performance of static pages with the freshness of server rendering. Once the revalidation window expires, the next visitor gets the stale page immediately while Next.js regenerates it in the background. The freshly generated page replaces the old one for subsequent visitors.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In Next.js App Router (`app/` directory), what is the role of a `layout.tsx` file?

- A) It defines page-level `<head>` metadata like `<title>` and Open Graph tags
- B) It is a persistent UI shell that wraps the current segment and all nested segments, preserving state across route changes
- C) It replaces `getServerSideProps` for server-side data fetching
- D) It is used only for CSS-in-JS scope isolation

**Answer: B) It is a persistent UI shell that wraps the current segment and all nested segments, preserving state across route changes**

> `layout.tsx` defines shared UI (nav, sidebar, providers) that persists across navigations within its segment. React preserves the layout component\'s state and DOM — it is not unmounted when a child route changes. Every segment can have its own `layout.tsx`, and they nest automatically for granular control.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In Next.js App Router, what does adding `"use client"` at the top of a file declare?

- A) The file should only be included in the development bundle
- B) The component is a Client Component — it is hydrated in the browser and can use hooks, state, and browser APIs
- C) The file handles client authentication logic only
- D) All exports from the file are server-only utilities

**Answer: B) The component is a Client Component — it is hydrated in the browser and can use hooks, state, and browser APIs**

> By default, all App Router components are React Server Components that render only on the server with zero JavaScript shipped to the client. Adding `"use client"` marks a boundary: that file and its imports become part of the client bundle, enabling interactivity via `useState`, `useEffect`, and event handlers. Server Components cannot use these APIs.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer uses `getStaticPaths` with `fallback: 'blocking'`. What happens when a visitor requests a path that was not pre-generated at build time?

- A) A 404 page is returned immediately
- B) A loading skeleton from `router.isFallback` is shown while the page generates
- C) The page is server-rendered on the first request, the response is cached as static HTML, and subsequent visitors get the static file
- D) The Next.js build is triggered again to include the new path

**Answer: C) The page is server-rendered on the first request, the response is cached as static HTML, and subsequent visitors get the static file**

> `fallback: 'blocking'` generates unbuilt pages on-demand via SSR (the request blocks until rendering is complete), then stores the result as static HTML. Unlike `fallback: true`, no intermediate loading state is shown. Use it when you want on-demand generation without a loading flash.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. Where does Next.js Middleware execute, and what is it primarily used for?

- A) In the browser after the page loads, to modify the DOM
- B) In the Node.js API runtime to validate request bodies
- C) At the Edge runtime, before a request is matched to a route — for redirects, rewrites, auth checks, and header manipulation
- D) Inside React Server Components as an async data-fetching wrapper

**Answer: C) At the Edge runtime, before a request is matched to a route — for redirects, rewrites, auth checks, and header manipulation**

> Next.js Middleware runs in the lightweight Edge Runtime (V8-based) and executes before route resolution. It is ideal for authentication redirects, A/B testing, geo-targeting, and request/response header manipulation with near-zero added latency since it runs at the network edge close to the user.

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

**Answer: B) It is the App Router equivalent of `getStaticPaths` — it returns param objects to pre-render at build time**

> `generateStaticParams` replaces `getStaticPaths` from the Pages Router. It is exported from a dynamic segment\'s `page.tsx` and returns an array of param objects that Next.js uses to determine which paths to pre-render during `next build`.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. In the Next.js App Router, how do React Server Components (RSC) fetch data differently from client components?

- A) RSC use `useEffect` with `fetch` in the component body
- B) RSC use a special `getData()` hook provided by Next.js
- C) RSC can be declared as `async` functions and `await` data directly in the component body — no hooks required
- D) RSC require Redux Toolkit for all server-side data fetching

**Answer: C) RSC can be declared as `async` functions and `await` data directly in the component body — no hooks required**

> React Server Components run exclusively on the server and are never hydrated in the browser. Because they do not participate in the React hook lifecycle, they can be `async` functions that `await` database queries, file reads, or API calls directly in the component body, eliminating the need for `useEffect`-based data fetching patterns.

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

**Answer: B) It enables HTML streaming — the server sends the outer shell (including the fallback) immediately and streams the component\'s HTML when its data resolves**

> Next.js App Router supports HTTP streaming via React Suspense. The server flushes the page shell and Suspense fallback to the browser immediately (improving TTFB), then streams the resolved component HTML as a small `<script>` injection once the awaited data is ready — without a full page reload or client-side fetch.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## # 16. React Router

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

**Answer: C) `<BrowserRouter>`**

> `<BrowserRouter>` provides the routing context to the component tree using the browser\'s History API. `<Routes>` selects the best-matching `<Route>` for the current URL. `<Switch>` was the v5 equivalent of `<Routes>` and does not exist in v6.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer needs to read the `:id` parameter from the URL `/users/42`. Which React Router v6 hook should they use?

- A) `useQuery()`
- B) `useHistory()`
- C) `useParams()`
- D) `useLocation()`

**Answer: C) `useParams()`**

> `useParams()` returns an object of the matched URL parameters. For a route defined as `/users/:id`, calling `const { id } = useParams()` gives `"42"`. `useHistory` was the v5 API replaced by `useNavigate` in v6. `useLocation` provides the current location object (pathname, search, hash) without URL params.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>

## Q. A developer wants to programmatically redirect to `/dashboard` after a successful form submission. Which React Router v6 hook should they use?

- A) `useHistory()`
- B) `useNavigate()`
- C) `useLocation()`
- D) `useRedirect()`

**Answer: B) `useNavigate()`**

> In React Router v6, `useNavigate()` returns a `navigate` function for imperative navigation: `const navigate = useNavigate(); navigate("/dashboard")`. `useHistory()` was its v5 predecessor and was removed in v6. `useLocation()` only reads the current URL without navigating.

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

**Answer: B) It renders children when authenticated; otherwise it declaratively redirects to `/login` using `<Navigate>`**

> `<Navigate>` is the declarative redirect component in React Router v6. When rendered, it immediately triggers a navigation to the specified route. The `replace` prop replaces the current history entry so the user cannot navigate back to the protected page with the browser back button.

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

**Answer: B) In `<DashboardLayout />`, at the position where the matched child route element should appear**

> `<Outlet>` is a placeholder inside a parent route\'s element component. It renders the matched child route\'s element at that position. Without `<Outlet>`, child routes match in the URL but their elements never appear in the DOM.

<div align="right">
    <b><a href="#table-of-contents">↥ back to top</a></b>
</div>
