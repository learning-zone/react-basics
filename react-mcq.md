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

**Answer: A) Use Index as the key**

> When no unique value exists, using the array index as the key suppresses the warning and is acceptable for static, non-reordered lists. Using `Math.random()` is an anti-pattern — it generates a new key on every render, causing React to unmount and remount every list item, which destroys state and hurts performance.

<div align="right">
    <b><a href="#">? back to top</a></b>
</div>

## Q. Alex is working on a project where she needs to implement a new feature requiring dynamic component loading. She plans to use React CLI for setting up the project and ensuring the feature integrates seamlessly. Considering her goal to optimize component handling and building times, which React CLI feature should Alex use to improve performance and manage components effectively?

- A) Use the react-scripts to run and build components
- B) Utilize create-react-app for efficient component management
- C) Leverage custom React CLI script for specific component needs
- D) Implement React CLI commands for module bundling and optimization.

**Answer: D) Implement React CLI commands for module bundling and optimization**

> For dynamic component loading, module bundling and optimization (such as code splitting and lazy loading via `React.lazy`) is the right approach. These techniques allow components to be loaded on demand, reducing initial bundle size and improving build and runtime performance.

<div align="right">
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
</div>

## Q. Suppose you are working on an e-commerce website. You must create a production package. Which command will you use?

- A) npm start
- B) npm run dev
- C) npm run prod
- D) npm run build

**Answer: D) npm run build**

> `npm run build` triggers the production build script (e.g., via Create React App or Vite), which bundles and minifies the application for deployment. `npm start` runs the development server, `npm run dev` is a common dev-server alias, and `npm run prod` is not a standard script.

<div align="right">
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
</div>

## Q. You are working on a food delivery web application. On the restaurant selection, you want to get elements from its stable unique ID. Which React hook will you use?

- A) useRef
- B) useState
- C) useId
- D) useContext

**Answer: C) useId**

> `useId` is a React hook that generates a stable, unique ID that is consistent between server and client renders. It is ideal for associating form elements with labels or any scenario requiring a guaranteed unique identifier per component instance.

<div align="right">
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
</div>

## Q. A developer notices a layout flash when reading a DOM node\'s size. Which hook should replace `useEffect`?

- A) `useRef`
- B) `useMemo`
- C) `useLayoutEffect`
- D) `useTransition`

**Answer: C) `useLayoutEffect`**

> `useLayoutEffect` fires synchronously after all DOM mutations but before the browser paints, allowing DOM measurements and mutations without a visible flash.

<div align="right">
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
</div>

## Q. In React 19, what changed about `ref` handling for function components?

- A) `ref` is no longer supported on function components
- B) Function components can now accept `ref` as a regular prop without `forwardRef`
- C) `ref` must be passed as `innerRef` in React 19
- D) `useRef` was replaced by `createRef` in function components

**Answer: B) Function components can now accept `ref` as a regular prop without `forwardRef`**

> React 19 deprecates `forwardRef`. Function components can receive `ref` directly in their props, simplifying ref forwarding patterns significantly.

<div align="right">
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
</div>

## Q. Suppose you are working on an inventory management portal. When your product list loads, you don\'t have any control over its state but you want to give high priority to UI updates. Which React feature will help you?

- A) useTransition
- B) useEffect
- C) useMemo
- D) useDeferredValue

**Answer: D) useDeferredValue**

> `useDeferredValue` is the right choice when you do not control the state (e.g., it comes from a prop or an external source). It creates a deferred copy of the value so React can prioritize urgent UI updates and render the deferred value when the browser is idle. `useTransition` is similar but requires you to own the state update.

<div align="right">
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
</div>

## Q. What is the difference between `getDerivedStateFromError` and `componentDidCatch`?

- A) They are identical; either can be used
- B) `getDerivedStateFromError` is used to render a fallback UI (render phase); `componentDidCatch` is used to log error information (commit phase)
- C) `componentDidCatch` renders the fallback; `getDerivedStateFromError` only logs
- D) `getDerivedStateFromError` replaces `componentDidCatch` in React 18+

**Answer: B) `getDerivedStateFromError` is used to render a fallback UI (render phase); `componentDidCatch` is used to log error information (commit phase)**

> `getDerivedStateFromError` runs during rendering so it can update state to show a fallback. `componentDidCatch` runs after the tree has re-rendered and is the right place to call error reporting services.

<div align="right">
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
</div>

## Q. Alex, a software developer, is working on an application where she needs to implement a seamless transition between pages. She is considering using the Transition API to enhance the user experience. Which approach should Alex take to achieve smooth transitions in her application?

- A) Use the Transition API\'s startTransition function to update the state that triggers transitions.
- B) Apply the ReactDom.createRoot method to manage the rendering of transition states.
- C) Utilize React.StrictMode to detect potential issues during transitions.
- D) Implement React.lazy for dynamic imports to handle page transitions.

**Answer: A) Use the Transition API\'s startTransition function to update the state that triggers transitions**

> `startTransition` (from `useTransition` or `React.startTransition`) marks a state update as a non-urgent transition, allowing React to keep the current UI responsive while preparing the new page in the background. This is the correct way to achieve smooth page-to-page transitions with the Transition API.

<div align="right">
    <b><a href="#">? back to top</a></b>
</div>

## Q. Alex, a software developer, is working on an application where she is utilizing Suspense for handling data fetching. Despite configuring Suspense she observes that her component does not render immediately when waiting for data. She is puzzled about the potential reasons behind this delay in rendering. What could be the reason for this behavior?

- A) The delay in rendering might be due to network latency or slow data fetching, rather than an issue with how Suspense is used or configured in the application.
- B) Alex\'s component could be using an outdated version that does not support the latest features required for Suspense to handle data fetching and rendering efficiently, resulting in the delay.
- C) The Suspense component configuration might be incorrect or incomplete. If Suspense is not properly set up, it could lead to unexpected delays in rendering the component and handling asynchronous operations.
- D) Alex might not have wrapped her component properly with a Suspense component. This is crucial as Suspense manages asynchronous data fetching and ensures that the fallback UI is shown until the data is fully loaded and the component is ready to render.

**Answer: D) Alex might not have wrapped her component properly with a Suspense component**

> Suspense requires components that perform asynchronous data fetching to be wrapped inside a `<Suspense>` boundary with a `fallback` prop. Without proper wrapping, the component will not know to show a fallback UI while data loads, resulting in unexpected rendering behavior.

<div align="right">
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
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
    <b><a href="#">? back to top</a></b>
</div>
