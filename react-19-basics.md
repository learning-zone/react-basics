# React 19 Interview Questions

> *Comprehensive guide to React 19 features and interview questions*

<br/>

## Table of Contents

* [New Features in React 19](#new-features-in-react-19)
* [Actions](#actions)
* [use API](#use-api)
* [Server Components](#server-components)
* [Server Actions](#server-actions)
* [Form Actions](#form-actions)
* [useOptimistic Hook](#useoptimistic-hook)
* [useFormStatus Hook](#useformstatus-hook)
* [useFormState Hook](#useformstate-hook)
* [Document Metadata](#document-metadata)
* [Asset Loading](#asset-loading)
* [Web Components](#web-components)
* [Ref as Prop](#ref-as-prop)
* [Context as Provider](#context-as-provider)
* [Cleanup Functions](#cleanup-functions)

<br/>

## New Features in React 19

#### Q. What are the major new features introduced in React 19?

React 19 introduces several groundbreaking features:

1. **Actions** - Async transitions for handling pending states, errors, and optimistic updates
2. **use() API** - A new Hook for reading resources like Promises and Context
3. **Server Components** - Components that render on the server before being sent to the client
4. **Server Actions** - Functions that run on the server but can be called from client components
5. **Form Actions** - Native form handling with actions
6. **useOptimistic Hook** - Optimistic UI updates during async operations
7. **useFormStatus Hook** - Access form status in form components
8. **useFormState Hook** - Manage form state with server actions
9. **Document Metadata** - Native support for `<title>`, `<meta>`, etc.
10. **Asset Loading** - Better control over stylesheet and script loading
11. **ref as a prop** - Accessing refs without forwardRef
12. **Context as Provider** - Use `<Context>` instead of `<Context.Provider>`
13. **Cleanup functions for refs** - Return cleanup from ref callbacks

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Actions

#### Q. What are Actions in React 19 and how do they differ from regular state updates?

**Actions** in React 19 are a new pattern for handling asynchronous operations that automatically manage:

- Pending states
- Error handling
- Optimistic updates
- Sequential requests

**Example:**

```javascript
import { useState } from 'react';

function UpdateName() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  // Traditional approach (React 18)
  const handleSubmit = async () => {
    setIsPending(true);
    try {
      const result = await updateName(name);
      setName(result);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
}
```

**React 19 with Actions:**

```javascript
import { useTransition } from 'react';

function UpdateName() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    startTransition(async () => {
      const result = await updateName(name);
      setName(result);
    });
  };

  return (
    <form action={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you use the action prop in forms with React 19?

The `action` prop can be used directly on `<form>` elements to handle submissions:

```javascript
function CommentForm() {
  async function submitComment(formData) {
    const comment = formData.get('comment');
    await postComment(comment);
  }

  return (
    <form action={submitComment}>
      <textarea name="comment" />
      <button type="submit">Post Comment</button>
    </form>
  );
}
```

React 19 automatically:
- Calls the action with FormData
- Manages pending state
- Resets the form on success
- Handles errors

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## use API

#### Q. What is the `use()` API in React 19 and when should you use it?

The `use()` API is a new Hook that lets you read the value of a resource like a Promise or Context. Unlike other Hooks, `use()` can be called conditionally and inside loops.

**Reading Promises:**

```javascript
import { use, Suspense } from 'react';

function Comments({ commentsPromise }) {
  // use() will suspend if the Promise isn\'t resolved
  const comments = use(commentsPromise);
  
  return comments.map(comment => (
    <p key={comment.id}>{comment.text}</p>
  ));
}

function Page({ commentsPromise }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Comments commentsPromise={commentsPromise} />
    </Suspense>
  );
}
```

**Reading Context:**

```javascript
import { use } from 'react';
import { ThemeContext } from './context';

function Button() {
  const theme = use(ThemeContext);
  return <button className={theme}>Click me</button>;
}
```

**Key differences from other Hooks:**
- Can be called conditionally
- Can be called inside loops
- Can be called after early returns
- Must be called during render

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How does `use()` differ from `useContext()` and when would you choose one over the other?

**Key Differences:**

| Feature | `use()` | `useContext()` |
|---------|---------|----------------|
| Conditional calling | ✅ Yes | ❌ No |
| Loop usage | ✅ Yes | ❌ No |
| Early returns | ✅ Can call after | ❌ Cannot |
| Resource types | Promises, Context | Context only |

**Example showing conditional use:**

```javascript
function Component({ condition }) {
  // ✅ Valid with use()
  if (condition) {
    const theme = use(ThemeContext);
    return <div className={theme}>Themed</div>;
  }
  
  // ❌ Invalid with useContext() - can\'t call conditionally
  // if (condition) {
  //   const theme = useContext(ThemeContext);
  // }
  
  return <div>Default</div>;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Server Components

#### Q. What are React Server Components and what problems do they solve?

**React Server Components (RSC)** are components that render exclusively on the server. They solve several problems:

1. **Bundle Size**: Server component code never reaches the client
2. **Data Fetching**: Direct database/API access without client-side fetching
3. **Security**: Keep sensitive data and logic on the server
4. **Performance**: Reduce JavaScript sent to the client

**Example:**

```javascript
// ProductList.server.js
import db from './database';

async function ProductList() {
  // This runs on the server only
  const products = await db.query('SELECT * FROM products');
  
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
```

**Key characteristics:**
- Cannot use state or effects
- Cannot use browser-only APIs
- Can directly access backend resources
- Reduce client bundle size
- Support async/await directly in the component

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are the restrictions on Server Components?

Server Components have several restrictions:

1. **No State**: Cannot use `useState`, `useReducer`
2. **No Effects**: Cannot use `useEffect`, `useLayoutEffect`
3. **No Browser APIs**: No `window`, `document`, `localStorage`
4. **No Event Handlers**: Cannot use `onClick`, `onChange`, etc.
5. **No Context Providers**: Cannot create context (but can read it)

**What Server Components CAN do:**

```javascript
// ✅ Allowed
async function ServerComponent() {
  const data = await fetch('api/data');
  const dbResult = await db.query('SELECT * FROM table');
  
  return (
    <div>
      <ClientComponent data={data} />
    </div>
  );
}
```

**What Server Components CANNOT do:**

```javascript
// ❌ Not allowed
function ServerComponent() {
  const [state, setState] = useState(0); // ❌ No state
  
  useEffect(() => {}); // ❌ No effects
  
  const handleClick = () => {}; // ❌ No event handlers
  
  return <button onClick={handleClick}>Click</button>;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Server Actions

#### Q. What are Server Actions and how do they work?

**Server Actions** are async functions that run on the server but can be called from Client Components. They're defined with the `'use server'` directive.

**Example:**

```javascript
// actions.js
'use server';

export async function createUser(formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  
  // This runs on the server
  const user = await db.users.create({ name, email });
  
  return { success: true, userId: user.id };
}
```

**Using in a Client Component:**

```javascript
'use client';

import { createUser } from './actions';

function SignupForm() {
  return (
    <form action={createUser}>
      <input name="name" required />
      <input name="email" type="email" required />
      <button type="submit">Sign Up</button>
    </form>
  );
}
```

**Benefits:**
- Type-safe RPC (Remote Procedure Call)
- Automatic serialization
- Progressive enhancement
- No manual API endpoints needed

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you handle errors and loading states with Server Actions?

Use `useActionState` (formerly `useFormState`) and `useFormStatus`:

```javascript
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitForm } from './actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

function Form() {
  const [state, formAction] = useActionState(submitForm, null);
  
  return (
    <form action={formAction}>
      <input name="message" />
      <SubmitButton />
      
      {state?.error && (
        <p className="error">{state.error}</p>
      )}
      {state?.success && (
        <p className="success">Submitted successfully!</p>
      )}
    </form>
  );
}
```

**Server Action with error handling:**

```javascript
'use server';

export async function submitForm(prevState, formData) {
  try {
    const message = formData.get('message');
    
    if (!message) {
      return { error: 'Message is required' };
    }
    
    await saveMessage(message);
    return { success: true };
  } catch (error) {
    return { error: error.message };
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Form Actions

#### Q. How does React 19 improve form handling?

React 19 introduces native form action support with automatic:
- Pending states
- Error handling
- Progressive enhancement
- Form resets

**Example:**

```javascript
function CommentForm({ postId }) {
  async function submitComment(formData) {
    'use server';
    
    const comment = formData.get('comment');
    await db.comments.create({
      postId,
      text: comment
    });
  }

  return (
    <form action={submitComment}>
      <textarea name="comment" required />
      <button type="submit">Post Comment</button>
    </form>
  );
}
```

**With validation and error handling:**

```javascript
'use client';

import { useActionState } from 'react';

function ContactForm() {
  async function submitContact(prevState, formData) {
    'use server';
    
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Validation
    if (!email.includes('@')) {
      return { error: 'Invalid email address' };
    }
    
    if (message.length < 10) {
      return { error: 'Message too short' };
    }
    
    // Process
    await sendEmail({ email, message });
    return { success: true };
  }
  
  const [state, formAction] = useActionState(submitContact, null);
  
  return (
    <form action={formAction}>
      <input name="email" type="email" required />
      <textarea name="message" required />
      <button type="submit">Send</button>
      
      {state?.error && <p className="error">{state.error}</p>}
      {state?.success && <p className="success">Sent!</p>}
    </form>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## useOptimistic Hook

#### Q. What is the `useOptimistic` Hook and when should you use it?

`useOptimistic` allows you to show an optimistic state while an async action is pending. The UI updates immediately, then reverts if the action fails.

**Example - Like Button:**

```javascript
'use client';

import { useOptimistic } from 'react';

function Post({ post, likePost }) {
  const [optimisticLikes, addOptimisticLike] = useOptimistic(
    post.likes,
    (currentLikes, amount) => currentLikes + amount
  );

  async function handleLike() {
    // Immediately show +1
    addOptimisticLike(1);
    
    // Actually perform the action
    await likePost(post.id);
  }

  return (
    <div>
      <p>{post.content}</p>
      <button onClick={handleLike}>
        ❤️ {optimisticLikes}
      </button>
    </div>
  );
}
```

**Example - Todo List:**

```javascript
'use client';

import { useOptimistic, useState } from 'react';

function TodoList({ todos, addTodo }) {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, { ...newTodo, sending: true }]
  );

  async function handleSubmit(formData) {
    const title = formData.get('title');
    const newTodo = { id: Date.now(), title, completed: false };
    
    // Show immediately
    addOptimisticTodo(newTodo);
    
    // Send to server
    await addTodo(newTodo);
  }

  return (
    <>
      <form action={handleSubmit}>
        <input name="title" required />
        <button type="submit">Add</button>
      </form>
      
      <ul>
        {optimisticTodos.map(todo => (
          <li key={todo.id} style={{ opacity: todo.sending ? 0.5 : 1 }}>
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## useFormStatus Hook

#### Q. What is `useFormStatus` and how do you use it?

`useFormStatus` provides status information about a parent form, useful for creating reusable form components.

**Example:**

```javascript
'use client';

import { useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </button>
  );
}

function Form() {
  async function submitForm(formData) {
    await saveData(formData);
  }
  
  return (
    <form action={submitForm}>
      <input name="name" />
      <SubmitButton />
    </form>
  );
}
```

**Advanced example with loading indicators:**

```javascript
'use client';

import { useFormStatus } from 'react-dom';

function FormFields() {
  const { pending } = useFormStatus();
  
  return (
    <fieldset disabled={pending}>
      <input name="email" type="email" />
      <input name="password" type="password" />
    </fieldset>
  );
}

function SaveButton() {
  const { pending } = useFormStatus();
  
  return (
    <button type="submit" disabled={pending}>
      {pending && <Spinner />}
      {pending ? 'Saving...' : 'Save'}
    </button>
  );
}

function ProfileForm() {
  return (
    <form action={saveProfile}>
      <FormFields />
      <SaveButton />
    </form>
  );
}
```

**Key points:**
- Must be called from a component inside `<form>`
- Only works with form actions
- Returns pending state and form data

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## useFormState Hook

#### Q. What is `useFormState` (now `useActionState`) and how does it differ from `useState`?

`useActionState` (renamed from `useFormState`) manages state that updates based on a form action result.

**Example:**

```javascript
'use client';

import { useActionState } from 'react';

async function updateProfile(prevState, formData) {
  'use server';
  
  const name = formData.get('name');
  
  if (name.length < 3) {
    return { 
      error: 'Name must be at least 3 characters',
      name: prevState?.name 
    };
  }
  
  await db.updateUser({ name });
  return { 
    success: true, 
    message: 'Profile updated!',
    name 
  };
}

function ProfileForm() {
  const [state, formAction] = useActionState(updateProfile, {
    name: '',
    error: null,
    success: false
  });
  
  return (
    <form action={formAction}>
      <input 
        name="name" 
        defaultValue={state.name}
      />
      <button type="submit">Update</button>
      
      {state.error && (
        <p className="error">{state.error}</p>
      )}
      {state.success && (
        <p className="success">{state.message}</p>
      )}
    </form>
  );
}
```

**Differences from `useState`:**

| Feature | `useActionState` | `useState` |
|---------|------------------|------------|
| Updates | Via form action | Via setter |
| Previous state | Passed to action | Not automatic |
| Server actions | ✅ Designed for | ❌ Client only |
| Progressive enhancement | ✅ Yes | ❌ No |

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Document Metadata

#### Q. How does React 19 handle document metadata like `<title>` and `<meta>` tags?

React 19 allows you to render `<title>`, `<meta>`, and `<link>` tags directly in components without needing third-party libraries.

**Example:**

```javascript
function BlogPost({ post }) {
  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
      <meta property="og:title" content={post.title} />
      <meta property="og:image" content={post.image} />
      
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </>
  );
}
```

**Dynamic metadata:**

```javascript
function ProductPage({ product }) {
  return (
    <>
      <title>{product.name} | My Store</title>
      <meta name="description" content={product.description} />
      <link rel="canonical" href={`https://mystore.com/products/${product.id}`} />
      
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
      </div>
    </>
  );
}
```

**React automatically:**
- Hoists these tags to `<head>`
- Deduplicates tags with the same key
- Updates tags when components unmount
- Works with Server Components

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Asset Loading

#### Q. What improvements does React 19 bring to asset loading?

React 19 introduces better integration with Suspense for loading stylesheets, fonts, and scripts.

**Stylesheet Loading:**

```javascript
function ComponentWithStyles() {
  return (
    <>
      <link rel="stylesheet" href="/styles.css" precedence="default" />
      <p>Content that needs styles.css</p>
    </>
  );
}
```

**Preloading Resources:**

```javascript
import { preload, preinit } from 'react-dom';

function Component() {
  // Preload a script
  preload('/script.js', { as: 'script' });
  
  // Preinit (preload + execute when ready)
  preinit('/critical.js', { as: 'script' });
  
  return <div>Content</div>;
}
```

**Font Loading:**

```javascript
function App() {
  return (
    <>
      <link 
        rel="preload" 
        href="/fonts/custom.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous"
      />
      <div style={{ fontFamily: 'Custom' }}>
        Text in custom font
      </div>
    </>
  );
}
```

**Benefits:**
- Stylesheets block rendering until loaded
- Better deduplication
- Automatic precedence handling
- Works with Suspense

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Web Components

#### Q. How has React 19 improved support for Web Components?

React 19 now fully supports Web Components with proper property passing and event handling.

**Before React 19:**

```javascript
// Had to use refs to set properties
function MyComponent() {
  const ref = useRef();
  
  useEffect(() => {
    ref.current.myProperty = { complex: 'object' };
  }, []);
  
  return <custom-element ref={ref} />;
}
```

**React 19:**

```javascript
// Properties work directly
function MyComponent() {
  return (
    <custom-element 
      myProperty={{ complex: 'object' }}
      onCustomEvent={(e) => console.log(e.detail)}
    />
  );
}
```

**Example with Web Component:**

```javascript
// Define Web Component
class MyCounter extends HTMLElement {
  static get observedAttributes() {
    return ['count'];
  }
  
  set count(value) {
    this._count = value;
    this.render();
  }
  
  get count() {
    return this._count;
  }
  
  render() {
    this.innerHTML = `Count: ${this.count}`;
  }
}

customElements.define('my-counter', MyCounter);

// Use in React 19
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <my-counter 
      count={count}
      onIncrement={() => setCount(c => c + 1)}
    />
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Ref as Prop

#### Q. How does React 19 simplify ref forwarding?

React 19 allows `ref` to be passed as a regular prop, eliminating the need for `forwardRef`.

**Before React 19:**

```javascript
import { forwardRef } from 'react';

const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

// Usage
function Form() {
  const inputRef = useRef();
  return <Input ref={inputRef} />;
}
```

**React 19:**

```javascript
// No forwardRef needed!
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}

// Usage (same)
function Form() {
  const inputRef = useRef();
  return <Input ref={inputRef} />;
}
```

**With TypeScript:**

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
}

function Input({ ref, ...props }: InputProps) {
  return <input ref={ref} {...props} />;
}
```

**Benefits:**
- Simpler component definitions
- Better TypeScript support
- Less boilerplate
- Ref is just another prop

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Context as Provider

#### Q. What changes has React 19 made to Context API?

React 19 allows you to use `<Context>` directly as a provider instead of `<Context.Provider>`.

**Before React 19:**

```javascript
import { createContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}
```

**React 19:**

```javascript
import { createContext } from 'react';

const ThemeContext = createContext('light');

function App() {
  return (
    <ThemeContext value="dark">
      <Child />
    </ThemeContext>
  );
}
```

**Multiple contexts:**

```javascript
// Before
<ThemeContext.Provider value="dark">
  <UserContext.Provider value={user}>
    <SettingsContext.Provider value={settings}>
      <App />
    </SettingsContext.Provider>
  </UserContext.Provider>
</ThemeContext.Provider>

// React 19
<ThemeContext value="dark">
  <UserContext value={user}>
    <SettingsContext value={settings}>
      <App />
    </SettingsContext>
  </UserContext>
</ThemeContext>
```

**Note:** `<Context.Provider>` still works for backward compatibility.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Cleanup Functions

#### Q. How do cleanup functions work for refs in React 19?

React 19 supports returning cleanup functions from ref callbacks, similar to `useEffect`.

**Example:**

```javascript
function VideoPlayer({ src }) {
  return (
    <video
      src={src}
      ref={(node) => {
        if (node) {
          const player = new VideoPlayerAPI(node);
          player.play();
          
          // Cleanup function
          return () => {
            player.stop();
            player.destroy();
          };
        }
      }}
    />
  );
}
```

**With event listeners:**

```javascript
function Component() {
  return (
    <div
      ref={(node) => {
        if (node) {
          const handleClick = (e) => console.log('Clicked', e);
          node.addEventListener('click', handleClick);
          
          // Cleanup
          return () => {
            node.removeEventListener('click', handleClick);
          };
        }
      }}
    >
      Click me
    </div>
  );
}
```

**With ResizeObserver:**

```javascript
function ResponsiveComponent() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  
  return (
    <div
      ref={(node) => {
        if (node) {
          const observer = new ResizeObserver(([entry]) => {
            setSize({
              width: entry.contentRect.width,
              height: entry.contentRect.height
            });
          });
          
          observer.observe(node);
          
          // Cleanup
          return () => {
            observer.disconnect();
          };
        }
      }}
    >
      Size: {size.width} x {size.height}
    </div>
  );
}
```

**Benefits:**
- No need for separate `useEffect`
- Automatic cleanup when ref changes
- Simpler code organization

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Additional React 19 Questions

#### Q. What breaking changes should developers be aware of in React 19?

**Key Breaking Changes:**

1. **Errors in render are not re-thrown** - Use Error Boundaries
2. **Removed deprecated APIs:**
   - `ReactDOM.render` (use `createRoot`)
   - `ReactDOM.hydrate` (use `hydrateRoot`)
   - Legacy context (use `createContext`)
   
3. **Ref cleanup** - Refs with cleanup functions behave differently
4. **useFormState renamed** - Now called `useActionState`
5. **Stricter hydration** - Mismatches cause errors
6. **Automatic batching** - All updates are batched by default

**Migration example:**

```javascript
// ❌ React 18
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('root'));

// ✅ React 19
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you migrate from React 18 to React 19?

**Step-by-step migration:**

1. **Update dependencies:**

```bash
npm install react@19 react-dom@19
```

2. **Update root rendering:**

```javascript
// Before
import ReactDOM from 'react-dom';
ReactDOM.render(<App />, root);

// After
import { createRoot } from 'react-dom/client';
createRoot(root).render(<App />);
```

3. **Replace deprecated APIs:**

```javascript
// Before
import { useFormState } from 'react-dom';

// After
import { useActionState } from 'react';
```

4. **Update forwardRef usage (optional):**

```javascript
// Before
const Input = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));

// After
function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}
```

5. **Update Context providers (optional):**

```javascript
// Before
<Context.Provider value={value}>

// After
<Context value={value}>
```

6. **Test thoroughly** - Especially error boundaries and Suspense

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What performance improvements does React 19 bring?

**Key Performance Improvements:**

1. **Better Hydration** - Faster initial page load
2. **Optimized Server Components** - Reduced client bundle size
3. **Improved Asset Loading** - Smarter stylesheet/script loading
4. **Better Suspense** - More efficient loading states
5. **Compiler Optimizations** - React Compiler (experimental)

**Example - Asset Loading:**

```javascript
// React 19 automatically optimizes this
function Page() {
  return (
    <>
      <link rel="stylesheet" href="/critical.css" precedence="high" />
      <link rel="stylesheet" href="/non-critical.css" precedence="low" />
      <Component />
    </>
  );
}
```

**React Compiler** (experimental):
- Automatic memoization
- No need for `useMemo`/`useCallback` in many cases
- Optimizes re-renders automatically

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do Server Components impact bundle size?

Server Components drastically reduce bundle size by:

1. **Excluding server code** from client bundle
2. **Direct imports** of large libraries
3. **No serialization** of server-only data

**Example:**

```javascript
// server-component.js
import { marked } from 'marked'; // 50kb library
import db from './database'; // Not sent to client

async function BlogPost({ id }) {
  // These never reach the client
  const post = await db.posts.findById(id);
  const html = marked(post.markdown);
  
  return (
    <article dangerouslySetInnerHTML={{ __html: html }} />
  );
}
```

**Bundle comparison:**

| Type | Client Bundle | Server Bundle |
|------|---------------|---------------|
| Client Component with marked | +50kb | - |
| Server Component with marked | 0kb | +50kb |

**Savings Example:**
- Traditional: ~200kb JavaScript for data fetching + rendering
- With RSC: ~20kb JavaScript (just for interactivity)
- **90% reduction** in many cases

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Can you mix Server and Client Components? How?

Yes! You can compose Server and Client Components together.

**Rules:**

1. Server Components can import Client Components
2. Client Components cannot import Server Components
3. Pass Server Components to Client Components as children

**Example - Correct:**

```javascript
// ServerComponent.js (server)
import ClientComponent from './ClientComponent';

async function ServerComponent() {
  const data = await fetchData();
  
  return (
    <ClientComponent data={data}>
      <ServerChild /> {/* ✅ Passed as children */}
    </ClientComponent>
  );
}

// ClientComponent.js (client)
'use client';

export default function ClientComponent({ data, children }) {
  const [state, setState] = useState(data);
  
  return (
    <div>
      <button onClick={() => setState(data)}>
        Update
      </button>
      {children}
    </div>
  );
}
```

**Example - Incorrect:**

```javascript
// ClientComponent.js
'use client';

import ServerComponent from './ServerComponent'; // ❌ Can\'t import

export default function ClientComponent() {
  return <ServerComponent />; // ❌ Error
}
```

**Correct Pattern:**

```javascript
// page.js (server)
import ClientComponent from './ClientComponent';
import ServerComponent from './ServerComponent';

export default function Page() {
  return (
    <ClientComponent>
      <ServerComponent /> {/* ✅ Passed as child */}
    </ClientComponent>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is Progressive Enhancement in React 19 forms?

Progressive Enhancement means forms work even without JavaScript, then enhance when JS loads.

**Example:**

```javascript
// actions.js
'use server';

export async function subscribe(formData) {
  const email = formData.get('email');
  await db.subscribers.create({ email });
  redirect('/thank-you');
}

// SubscribeForm.js
import { subscribe } from './actions';

function SubscribeForm() {
  return (
    <form action={subscribe}>
      <input name="email" type="email" required />
      <button type="submit">Subscribe</button>
    </form>
  );
}
```

**What happens:**

1. **Without JS**: Form submits, server processes, redirects
2. **With JS**: Form submits, React handles transition, updates UI

**Benefits:**
- Works without JavaScript
- Faster perceived performance
- Better accessibility
- Graceful degradation

**Enhanced version:**

```javascript
'use client';

import { useActionState } from 'react';
import { subscribe } from './actions';

function SubscribeForm() {
  const [state, formAction] = useActionState(subscribe, null);
  
  return (
    <form action={formAction}>
      <input name="email" type="email" required />
      <SubscribeButton />
      {state?.success && <p>Thanks for subscribing!</p>}
      {state?.error && <p>Error: {state.error}</p>}
    </form>
  );
}

function SubscribeButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Subscribing...' : 'Subscribe'}
    </button>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How does React 19 improve TypeScript support?

React 19 includes better built-in TypeScript types:

1. **Ref as prop** - Automatically typed
2. **Action props** - Proper FormData typing
3. **Better inference** - Less manual typing needed

**Example:**

```typescript
// React 18 - needed forwardRef
import { forwardRef } from 'react';

interface Props {
  label: string;
}

const Input = forwardRef<HTMLInputElement, Props>(({ label }, ref) => (
  <input ref={ref} aria-label={label} />
));

// React 19 - ref is just a prop
interface Props {
  label: string;
  ref?: React.Ref<HTMLInputElement>;
}

function Input({ label, ref }: Props) {
  return <input ref={ref} aria-label={label} />;
}
```

**Form Actions:**

```typescript
interface FormState {
  error?: string;
  success?: boolean;
}

async function submitForm(
  prevState: FormState | null,
  formData: FormData
): Promise<FormState> {
  const email = formData.get('email') as string;
  
  if (!email) {
    return { error: 'Email required' };
  }
  
  await saveEmail(email);
  return { success: true };
}

function Form() {
  const [state, formAction] = useActionState<FormState>(
    submitForm,
    null
  );
  
  return <form action={formAction}>...</form>;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Practical Scenarios

#### Q. Build a search feature using React 19 Server Actions and useOptimistic

```javascript
// actions.js
'use server';

export async function searchProducts(query) {
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
  const results = await db.products.search(query);
  return results;
}

// SearchPage.js
'use client';

import { useState, useOptimistic } from 'react';
import { searchProducts } from './actions';

function SearchPage() {
  const [results, setResults] = useState([]);
  const [optimisticResults, setOptimisticResults] = useOptimistic(
    results,
    (_, newResults) => newResults
  );

  async function handleSearch(formData) {
    const query = formData.get('query');
    
    // Show immediate feedback
    setOptimisticResults([{ id: 'temp', name: 'Searching...', loading: true }]);
    
    // Perform search
    const searchResults = await searchProducts(query);
    setResults(searchResults);
  }

  return (
    <div>
      <form action={handleSearch}>
        <input name="query" placeholder="Search products..." />
        <button type="submit">Search</button>
      </form>
      
      <ul>
        {optimisticResults.map(product => (
          <li key={product.id} style={{ opacity: product.loading ? 0.5 : 1 }}>
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Implement a multi-step form using React 19 features

```javascript
// actions.js
'use server';

export async function submitStepOne(formData) {
  const email = formData.get('email');
  if (!email.includes('@')) {
    return { error: 'Invalid email', step: 1 };
  }
  return { step: 2, email };
}

export async function submitStepTwo(prevState, formData) {
  const name = formData.get('name');
  if (!name) {
    return { error: 'Name required', step: 2 };
  }
  
  await db.users.create({
    email: prevState.email,
    name
  });
  
  return { success: true, step: 3 };
}

// MultiStepForm.js
'use client';

import { useActionState } from 'react';
import { submitStepOne, submitStepTwo } from './actions';

function MultiStepForm() {
  const [state, formAction] = useActionState(async (prevState, formData) => {
    if (prevState?.step === 1 || !prevState) {
      return submitStepOne(formData);
    }
    return submitStepTwo(prevState, formData);
  }, { step: 1 });

  if (state.success) {
    return <div>Registration complete!</div>;
  }

  return (
    <form action={formAction}>
      {state.step === 1 && (
        <>
          <h2>Step 1: Email</h2>
          <input name="email" type="email" required />
        </>
      )}
      
      {state.step === 2 && (
        <>
          <h2>Step 2: Name</h2>
          <input name="name" required />
        </>
      )}
      
      {state.error && <p className="error">{state.error}</p>}
      
      <button type="submit">
        {state.step === 2 ? 'Complete' : 'Next'}
      </button>
    </form>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
