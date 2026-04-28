# React Best Practices

## Use JSX ShortHand

Try to use JSX shorthand for passing boolean variables. Let\'s say you want to control the title visibility of a Navbar component.

**Bad:**

```jsx
return (
  <Navbar showTitle={true} />
);
```

**Good:**

```jsx
return(
  <Navbar showTitle />  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Ternary Operators

Let\'s say you want to show a particular user\'s details based on role.

**Bad:**

```jsx
const { role } = user;

if(role === ADMIN) {
  return <AdminUser />
}else{
  return <NormalUser />
} 
```

**Good:**

```jsx
const { role } = user;

return role === ADMIN ? <AdminUser /> : <NormalUser />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Object Literals

Object literals can help make our code more readable. Let\'s say you want to show three types of users based on their role. You can\'t use ternary because the number of options is greater than two.

**Bad:**

```jsx
const {role} = user

switch(role){
  case ADMIN:
    return <AdminUser />
  case EMPLOYEE:
    return <EmployeeUser />
  case USER:
    return <NormalUser />
}
```

**Good:**

```jsx
const {role} = user

const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser
};

const Component = components[role];

return <Componenent />;
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Fragments

Always use Fragment over Div. It keeps the code clean and is also beneficial for performance because one less node is created in the virtual DOM.

**Bad:**

```jsx
return (
  <div>
     <Component1 />
     <Component2 />
     <Component3 />
  </div>  
)
```

**Good:**

```jsx
return (
  <>
     <Component1 />
     <Component2 />
     <Component3 />
  </>  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Memo

React.PureComponent and Memo can significantly improve the performance of your application. They help us to avoid unnecessary rendering.

**Bad:**

```jsx
import React, { useState } from "react";

export const TestMemo = () => {
  const [userName, setUserName] = useState("faisal");
  const [count, setCount] = useState(0);
  
  const increment = () => setCount((count) => count + 1);
  
  return (
    <>
      <ChildrenComponent userName={userName} />
      <button onClick={increment}> Increment </button>
    </>
  );
};

const ChildrenComponent =({ userName }) => {
  console.log("rendered", userName);
  return <div> {userName} </div>;
};
```

Although the child component should render only once because the value of count has nothing to do with the ChildComponent. But, it renders each time you click on the button.
Output

Let\'s edit the ChildrenComponent to this:

**Good:**

```jsx
import React ,{useState} from "react";

const ChildrenComponent = React.memo(({userName}) => {
    console.log('rendered')
    return <div> {userName}</div>
})
```

Now no matter how many times you click on the button, it will render only when necessary.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Object Destructuring

Use object destructuring to your advantage. Let\'s say you need to show a user\'s details.

**Bad:**

```jsx
return (
  <>
    <div> {user.name} </div>
    <div> {user.age} </div>
    <div> {user.profession} </div>
  </>  
)
```

**Good:**

```jsx
const { name, age, profession } = user;

return (
  <>
    <div> {name} </div>
    <div> {age} </div>
    <div> {profession} </div>
  </>  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## String Props do not need Curly Braces

When passing string props to a children component.

**Bad:**

```jsx
return(
  <Navbar title={"My Special App"} />
)
```

**Good:**

```jsx
return(
  <Navbar title="My Special App" />  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Remove JS Code From JSX

Move any JS code out of JSX if that doesn\'t serve any purpose of rendering or UI functionality.

**Bad:**

```jsx
return (
  <ul>
    {posts.map((post) => (
      <li onClick={event => {
        console.log(event.target, 'clicked!'); // <- THIS IS BAD
        }} key={post.id}>{post.title}
      </li>
    ))}
  </ul>
);
```

**Good:**

```jsx
const onClickHandler = (event) => {
   console.log(event.target, 'clicked!'); 
}

return (
  <ul>
    {posts.map((post) => (
      <li onClick={onClickHandler} key={post.id}> {post.title} </li>
    ))}
  </ul>
);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Template Literals

Use template literals to build large strings. Avoid using string concatenation. It\'s nice and clean.

**Bad:**

```jsx
const userDetails = user.name + "'s profession is" + user.proffession

return (
  <div> {userDetails} </div>  
)
```

**Good:**

```jsx
const userDetails = `${user.name}'s profession is ${user.proffession}`

return (
  <div> {userDetails} </div>  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Import in Order

Always try to import things in a certain order. It improves code readability.

**Bad:**

```jsx
import React from 'react';
import ErrorImg from '../../assets/images/error.png';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { PropTypes } from 'prop-types';
```

**Good:**

The rule of thumb is to keep the import order like this:
Built-in
External
Internal
So the example above becomes:

```jsx
import React from 'react';

import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';

import ErrorImg from '../../assets/images/error.png';
import colors from '../../styles/colors';
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Implicit return

Use the JavaScript feature of implicit return to write beautiful code. Let\'s say your function does a simple calculation and returns the result.

**Bad:**

```jsx
const add = (a, b) => {
  return a + b;
}
```

**Good:**

```jsx
const add = (a, b) => a + b;
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Component Naming

Always use PascalCase for components and camelCase for instances.

**Bad:**

```jsx
import reservationCard from './ReservationCard';

const ReservationItem = <ReservationCard />;
```

**Good:**

```jsx
import ReservationCard from './ReservationCard';

const reservationItem = <ReservationCard />;
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Reserved Prop Naming

Do not use DOM component prop names for passing props between components because others might not expect these names.

**Bad:**

```jsx
<MyComponent style="dark" />

<MyComponent className="dark" />
```

**Good:**

```jsx
<MyComponent variant="fancy" />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Quotes

Use double quotes for JSX attributes and single quotes for all other JS.

**Bad:**

```jsx
<Foo bar='bar' />

<Foo style={{ left: "20px" }} />
```

**Good:**

```jsx
<Foo bar="bar" />

<Foo style={{ left: '20px' }} />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Prop Naming

Always use camelCase for prop names or PascalCase if the prop value is a React component.

**Bad:**

```jsx
<Component
  UserName="hello"
  phone_number={12345678}
/>
```

**Good:**

```jsx
<MyComponent
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## JSX in Parentheses

If your component spans more than one line, always wrap it in parentheses.

**Bad:**

```jsx
return <MyComponent variant="long">
           <MyChild />
         </MyComponent>;
```

**Good:**

```jsx
return (
    <MyComponent variant="long">
      <MyChild />
    </MyComponent>
);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Self-Closing Tags

If your component doesn\'t have any children, then use self-closing tags. It improves readability.

**Bad:**

```jsx
<SomeComponent variant="stuff"></SomeComponent>
```

**Good:**

```jsx
<SomeComponent variant="stuff" />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Underscore in Method Name

Do not use underscores in any internal React method.

**Bad:**

```jsx
const _onClickHandler = () => {
  // do stuff
}
```

**Good:**

```jsx
const onClickHandler = () => {
  // do stuff
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Alt Prop

Always include an alt prop in your `<img >` tags. And do not use picture or image in your alt property because the screenreaders already announce img elements as images. No need to include that.

**Bad:**

```jsx
<img src="hello.jpg" />

<img src="hello.jpg" alt="Picture of me rowing a boat" />
```

**Good:**

```jsx
<img src="hello.jpg" alt="Me waving hello" />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Extract Logic into Custom Hooks

When a component contains complex stateful logic, extract it into a custom hook. Custom hooks make logic reusable, testable, and keep your components clean.

**Bad:**

```jsx
function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => { setUser(data); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage />;
  return <div>{user.name}</div>;
}
```

**Good:**

```jsx
// useUser.js — reusable, testable hook
function useUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(data => { setUser(data); setLoading(false); })
      .catch(err => { setError(err); setLoading(false); });
  }, []);

  return { user, loading, error };
}

// UserProfile.jsx — clean and focused on rendering
function UserProfile() {
  const { user, loading, error } = useUser();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage />;
  return <div>{user.name}</div>;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Avoid Index as Key in Lists

Avoid using array indexes as `key` props. When items are reordered, added, or removed, index-based keys cause React to incorrectly reuse DOM nodes, leading to subtle UI bugs and broken component state.

**Bad:**

```jsx
const todoList = todos.map((todo, index) => (
  <TodoItem key={index} todo={todo} />
));
```

**Good:**

```jsx
// Use a stable, unique identifier from the data
const todoList = todos.map((todo) => (
  <TodoItem key={todo.id} todo={todo} />
));
```

> Use indexes as keys only for static lists that are never reordered, filtered, or modified.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Never Define Components Inside Other Components

Defining a component inside another component creates a new function reference on every render. React treats it as an entirely new component type, causing it to unmount and remount on every parent render — destroying its state and hurting performance.

**Bad:**

```jsx
function ParentComponent() {
  // ❌ ChildComponent is recreated on every render
  const ChildComponent = () => {
    return <div>I am a child</div>;
  };

  return <ChildComponent />;
}
```

**Good:**

```jsx
// ✅ Define at module level, outside of the parent
const ChildComponent = () => {
  return <div>I am a child</div>;
};

function ParentComponent() {
  return <ChildComponent />;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use useCallback for Stable Handler References

When passing callbacks to memoized child components, wrap them in `useCallback` to prevent unnecessary re-renders caused by a new function reference on every render.

**Bad:**

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  // ❌ New function reference created on every render —
  // defeats React.memo on MemoizedChild
  const handleClick = () => {
    console.log('clicked');
  };

  return <MemoizedChild onClick={handleClick} />;
}
```

**Good:**

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  // ✅ Stable reference — MemoizedChild only re-renders when deps change
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []); // add dependencies if the function uses state/props

  return <MemoizedChild onClick={handleClick} />;
}

const MemoizedChild = React.memo(({ onClick }) => {
  return <button onClick={onClick}>Click me</button>;
});
```

> Only apply `useCallback` when the child is wrapped in `React.memo` or the callback is a `useEffect` dependency. Do not use it everywhere — it adds overhead.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Co-locate State Close to Where It\'s Used

Keep state as close as possible to the component that uses it. Lifting state too high causes unnecessary re-renders in the entire component tree.

**Bad:**

```jsx
// ❌ Modal open state lives in the root, causing full-tree re-renders
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <Header />
      <MainContent />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <button onClick={() => setIsModalOpen(true)}>Open</button>
    </div>
  );
}
```

**Good:**

```jsx
// ✅ State lives in the component that owns and uses it
function ModalButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open</button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ModalButton />
    </div>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Functional Updates for State That Depends on Previous State

When new state depends on the previous state value, always use the functional updater form of `setState`. This prevents stale closure bugs, especially in async operations and batched updates.

**Bad:**

```jsx
const [count, setCount] = useState(0);

// ❌ Reads a potentially stale snapshot of count
const increment = () => {
  setCount(count + 1);
  setCount(count + 1); // Both read the same stale value — result: +1, not +2
};
```

**Good:**

```jsx
const [count, setCount] = useState(0);

// ✅ Always receives the latest state value
const increment = () => {
  setCount(prev => prev + 1);
  setCount(prev => prev + 1); // Correctly chains — result: +2
};
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Handle Loading and Error States Explicitly

Always handle all possible data-fetching states — loading, error, and success. Skipping these leads to broken UIs and a poor user experience.

**Bad:**

```jsx
function UserList() {
  const { data } = useQuery({ queryKey: ['users'], queryFn: fetchUsers });

  // ❌ Crashes if data is undefined while loading
  return <ul>{data.map(u => <li key={u.id}>{u.name}</li>)}</ul>;
}
```

**Good:**

```jsx
function UserList() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Wrap Your App in React.StrictMode

Use `React.StrictMode` in development to surface deprecated APIs, detect unexpected side effects, and identify components with unsafe lifecycles early.

**Bad:**

```jsx
// main.jsx
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

**Good:**

```jsx
// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

> `StrictMode` only activates extra checks in development — it has no effect on the production build.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Absolute Imports with Path Aliases

Configure path aliases to avoid deep relative import paths. This makes imports cleaner and refactoring easier.

**Bad:**

```jsx
import Button from '../../../components/common/Button';
import { useAuth } from '../../../../hooks/useAuth';
import { formatDate } from '../../../../utils/date';
```

**Good:**

```jsx
// vite.config.js (or tsconfig.json for TypeScript)
// resolve: { alias: { '@': path.resolve(__dirname, './src') } }

import Button from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import { formatDate } from '@/utils/date';
```

**Vite configuration:**

```js
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Avoid Prop Drilling — Use Composition or Context

When data needs to pass through many component layers, use the Context API or component composition instead of threading props through every intermediate component.

**Bad (Prop Drilling):**

```jsx
// theme must pass through every layer just to reach Button
function App() {
  const theme = 'dark';
  return <Layout theme={theme} />;
}
function Layout({ theme }) {
  return <Sidebar theme={theme} />;
}
function Sidebar({ theme }) {
  return <Button theme={theme} />;
}
function Button({ theme }) {
  return <button className={theme}>Click</button>;
}
```

**Good (Context API):**

```jsx
const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Layout />
    </ThemeContext.Provider>
  );
}

// Intermediate components do not need to know about theme
function Layout() { return <Sidebar />; }
function Sidebar() { return <Button />; }

function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Error Boundaries to Catch Runtime Errors

Wrap sections of your UI in Error Boundaries to prevent a single component failure from crashing the entire application. This is especially important for third-party widgets, async data displays, and independently deployed features.

**Good:**

```jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Log to your error monitoring service (e.g., Sentry)
    console.error('Caught by ErrorBoundary:', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}

// Usage — isolate risky sections
function App() {
  return (
    <ErrorBoundary fallback={<p>Chart failed to load.</p>}>
      <RevenueChart />
    </ErrorBoundary>
  );
}
```

> In React 19, the new `<ErrorBoundary>` component from `react-error-boundary` package simplifies this pattern significantly.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Prefer Controlled Components for Forms

Controlled components keep form data in React state, giving you full control over validation, submission, and transformation.

**Bad (Uncontrolled):**

```jsx
function LoginForm() {
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // ❌ Must read from DOM at submit time — no way to validate live
    console.log(emailRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" ref={emailRef} />
      <button type="submit">Login</button>
    </form>
  );
}
```

**Good (Controlled):**

```jsx
function LoginForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email.');
      return;
    }
    // ✅ State is the single source of truth
    console.log(email);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error && <span>{error}</span>}
      <button type="submit">Login</button>
    </form>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Lazy Loading for Large Components

Use `React.lazy()` and `Suspense` to split large components into separate bundles, reducing the initial JavaScript payload.

**Bad:**

```jsx
// ❌ Everything is included in the main bundle, even if never visited
import AdminDashboard from './pages/AdminDashboard';
import ReportsPage from './pages/ReportsPage';
import AnalyticsPage from './pages/AnalyticsPage';
```

**Good:**

```jsx
import { lazy, Suspense } from 'react';

// ✅ Each page is loaded only when the route is visited
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const ReportsPage = lazy(() => import('./pages/ReportsPage'));
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'));

function App() {
  return (
    <Suspense fallback={<PageSpinner />}>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </Suspense>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>


