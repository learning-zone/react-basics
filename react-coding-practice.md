# React Coding Practice

## Q. Create a multilevel dropdown menu in React?

```js
Input: [
  {
    label: "Menu 1",
  },
  {
    label: "Menu 2",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
  {
    label: "Menu 3",
    submenu: [
      { label: "Sub Menu 1" },
      { label: "Sub Menu 2" },
      { label: "Sub Menu 3" },
      { label: "Sub Menu 4" },
    ],
  },
  {
    label: "Menu 4",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
];
```

<details><summary><b>Answer</b></summary>

```js
import React, { useState } from "react";

const menuData = [
  { label: "Menu 1" },
  {
    label: "Menu 2",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
  {
    label: "Menu 3",
    submenu: [
      { label: "Sub Menu 1" },
      {
        label: "Sub Menu 2",
        submenu: [
          { label: "Nested Sub Menu 1" },
          { label: "Nested Sub Menu 2" },
        ],
      },
      { label: "Sub Menu 3" },
    ],
  },
  {
    label: "Menu 4",
    submenu: [{ label: "Sub Menu 1" }, { label: "Sub Menu 2" }],
  },
];

function MenuItem({ item }) {
  const [open, setOpen] = useState(false);
  const hasSubmenu = Array.isArray(item.submenu) && item.submenu.length > 0;

  return (
    <li style={{ marginBottom: "6px" }}>
      <button
        onClick={() => hasSubmenu && setOpen((prev) => !prev)}
        style={{
          border: "1px solid #ccc",
          borderRadius: "6px",
          background: "#fff",
          cursor: hasSubmenu ? "pointer" : "default",
          padding: "6px 10px",
        }}
      >
        {item.label} {hasSubmenu ? (open ? "-" : "+") : ""}
      </button>

      {hasSubmenu && open && (
        <ul
          style={{ listStyle: "none", marginTop: "8px", paddingLeft: "16px" }}
        >
          {item.submenu.map((subItem, index) => (
            <MenuItem key={`${subItem.label}-${index}`} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h2>Multi-Level Dropdown Menu</h2>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {menuData.map((item, index) => (
          <MenuItem key={`${item.label}-${index}`} item={item} />
        ))}
      </ul>
    </div>
  );
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a functional component that displays data from https://reqres.in/api/users?

<details><summary><b>Answer</b></summary>

```js
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState<{ id: number; name: string; email: string }[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-rest-api-hmcx8p?file=/src/App.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Write a program to display searched keyword in React?

<details><summary><b>Answer</b></summary>

```js
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <h2>Update Data from an input</h2>

      <div className="input-display">
        Searched Keyword: <b>{search}</b>
      </div>

      <div className="inputs">
        <input
          className="input"
          type="text"
          value={search}
          placeholder="Search Here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default App;
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-update-dom-vu4il?file=/src/index.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a functional component to show an alert message based on user input?

<details><summary><b>Answer</b></summary>

```js
import { useEffect, useState } from "react";

function App() {
  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    if (phrase === "Hello React") {
      alert("You may pass!");
    }
  }, [phrase]);

  return (
    <div className="App">
      <h2>What is the secret phrase?</h2>

      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="Enter a secret"
      />

      <p>
        Hint: It is <strong>Hello React</strong>
      </p>
    </div>
  );
}

export default App;
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-alert-based-on-input-hk2ip?file=/src/index.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a functional component in react to add two numbers?

<details><summary><b>Answer</b></summary>

```js
import { useState } from "react";

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  return (
    <div className="App">
      <h1>Adding Two Numbers</h1>
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(+e.target.value)}
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(+e.target.value)}
        />
      </div>

      <h2>Total: {number1 + number2}</h2>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-calculator-8ud1d?file=/src/index.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a simple counter in react?

<details><summary><b>Answer</b></summary>

```js
import { useCallback, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => setCounter((c) => c + 1), []);
  const decrement = useCallback(() => setCounter((c) => c - 1), []);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <div className="buttons">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default App;
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-counter-bhp4q?file=/src/App.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Write a program to pass values to child using context in React?

<details><summary><b>Answer</b></summary>

```js
// Counter.js

const { useState, useContext } = React;

const CountContext = React.createContext();

const Counter = () => {
  const { count, increase, decrease } = useContext(CountContext);
  return (
    <h2>
      <button onClick={decrease}>Decrement</button>
      <span className="count">{count}</span>
      <button onClick={increase}>Increment</button>
    </h2>
  );
};
```

```js
// App.js

const App = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <CountContext.Provider value={{ count, increase, decrease }}>
        <Counter />
      </CountContext.Provider>
    </div>
  );
};
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-context-api-v8syu?file=/src/index.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a simple ToDo list app using React?

<details><summary><b>Answer</b></summary>

```js
import { useCallback, useState } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTodo = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: trimmed, completed: false },
    ]);
    setInput("");
  }, [input]);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") addTodo();
    },
    [addTodo],
  );

  return (
    <div>
      <h1>ToDo List</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add a new task…"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {todos.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
              />
              <span
                style={{
                  flex: 1,
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#aaa" : "inherit",
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete task"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}

      {todos.length > 0 && (
        <p>
          {todos.filter((t) => t.completed).length} / {todos.length} completed
        </p>
      )}
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-todo-list-hw45y?file=/src/App.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a search filter component in react?

```js
Input:

const people = [
  "Shashi Koshy",
  "Dhriti Taneja",
  "Dipa Mishra",
  "Ansh Thakkar",
  "Lakshmi Thaker",
  "Sushila Matthai",
  "Shresth Nigam",
  "Bhavana Biswas",
  "Vasudha Mangat",
  "Priya Saran"
];
```

<details><summary><b>Answer</b></summary>

```js
import { useMemo, useState } from "react";

export default function App() {
  const [searchItem, setSearchItem] = useState("");

  const searchResults = useMemo(
    () =>
      people.filter((person) =>
        person.toLowerCase().includes(searchItem.toLowerCase()),
      ),
    [searchItem],
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <ul>
        {searchResults.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-search-list-u1s8b?file=/src/index.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a Fizz Buzz program in React?

```js
Counting incrementally, replacing any number divisible by three with the word "fizz",
and any number divisible by five with the word "buzz".
```

<details><summary><b>Answer</b></summary>

```js
import { useState } from "react";

function fizzBuzz(n: number): string | number {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}

export default function FizzBuzz() {
  const [count, setCount] = useState(1);

  return (
    <div>
      <h1>React Fizz Buzz Program</h1>
      <i>
        Counting incrementally, replacing any number divisible by three with the
        word &ldquo;fizz&rdquo;, and any number divisible by five with the word
        &ldquo;buzz&rdquo;.
      </i>
      <h2>{fizzBuzz(count)}</h2>
      <button onClick={() => setCount((c) => Math.max(1, c - 1))}>-</button>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-fizz-buzz-qtk36?file=/src/index.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Write a program to call child method from parent in React?

<details><summary><b>Answer</b></summary>

**1. Using React.forwardRef():**

```js
import { forwardRef, useRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getMessage() {
      alert("Message from Child");
    },
  }));

  return <h1>Child Component</h1>;
});

const Parent = () => {
  const childRef = useRef();

  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.getMessage()}>Click</button>
    </div>
  );
};
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-forwardref-3serh?file=/src/index.js)**

**2. Using Class Component:**

```js
class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
  }

  onClick = () => {
    this.child.current.getMessage();
  };

  render() {
    return (
      <div>
        <Child ref={this.child} />
        <button onClick={this.onClick}>Click</button>
      </div>
    );
  }
}

class Child extends React.Component {
  getMessage() {
    alert("Message from Child");
  }

  render() {
    return <h1>Child Component</h1>;
  }
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-createref-t0gud?file=/src/index.js)**

**3. Using callback Ref API:**

```js
class Parent extends React.Component {
  render() {
    return (
      <div>
        <Child
          ref={(instance) => {
            this.child = instance;
          }}
        />
        <button
          onClick={() => {
            this.child.getMessage();
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  getMessage() {
    alert("Message from Child");
  }

  render() {
    return <h2>Child Component</h2>;
  }
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-callback-ref-api-kp30y?file=/src/index.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Write a program to show and hide element in React?

<details><summary><b>Answer</b></summary>

```js
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        Toggle: {show ? "Hide" : "Show"}
      </button>
      {show && <h2>Hello World!</h2>}
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-toggle-gipub?file=/src/App.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to update the parent state in React?

<details><summary><b>Answer</b></summary>

**Using function as a Prop:**

```js
import { useState } from "react";

function Child({ text, onUpdate }: Readonly<{ text: string; onUpdate: (value: string) => void }>) {
  return (
    <button onClick={() => onUpdate("Parent State Changed")}>{text}</button>
  );
}

export default function Parent() {
  const [text, setText] = useState("Click Me!");

  return <Child text={text} onUpdate={setText} />;
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-function-as-a-prop-2unfh?file=/src/App.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How do I reference a local image in React?

<details><summary><b>Answer</b></summary>

```js
import React, { Component } from "react";
import logo from "./react_photo-goose.jpg";

export default class Header extends Component {
  render() {
    return (
      <div className="row">
        <div className="logo">
          <img src={logo} width="100%" alt="Googe Pic" />
        </div>
      </div>
    );
  }
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/image-in-react-ud0ry?file=/src/App.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to access a child state in React?

<details><summary><b>Answer</b></summary>

Accessing child state via ref is an anti-pattern — state should be lifted to the parent.

When you genuinely need to call a method on a child (e.g. focus an input, trigger an animation), use **useImperativeHandle** and **forwardRef**:

```js
import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Child = forwardRef(function Child(_, ref) {
  const [value, setValue] = useState("");
  useImperativeHandle(ref, () => ({
    getValue: () => value,
  }));
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
});

export default function Parent() {
  const childRef = useRef < { getValue: () => string } > null;
  return (
    <>
      <Child ref={childRef} />
      <button onClick={() => alert(childRef.current?.getValue())}>Read</button>
    </>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/access-child-state-p2iip?file=/src/App.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to access custom attributes from event object in React?

<details><summary><b>Answer</b></summary>

**event.target.getAttribute:**

```js
export default function Header() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.getAttribute("name"));
  };

  return (
    <button name="Header" onClick={handleClick}>
      CLICK ME!
    </button>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-custom-attributes-i3mu0?file=/src/index.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to update state on props change in React?

<details><summary><b>Answer</b></summary>

```js
import { useState } from "react";

function Counter({
  onIncrement,
  count,
}: Readonly<{ onIncrement: () => void; count: number }>) {
  return (
    <div>
      <button onClick={onIncrement}>CLICK ME</button>
      <h1>{count}</h1>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(1);

  return <Counter count={count} onIncrement={() => setCount((c) => c + 1)} />;
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-change-state-by-props-phjde?file=/src/index.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Write a program to delete an item from array in React?

<details><summary><b>Answer</b></summary>

```js
import { useState } from "react";

type User = { id: number; name: string };

const initialUsers: User[] = [
  { id: 101, name: "Tanu Kanda" },
  { id: 102, name: "Sathwik Bhatti" },
  { id: 103, name: "Vritika Nath" },
  { id: 104, name: "Chanda Mittal" },
  { id: 105, name: "Sumati Pau" },
];

export default function ListComponent() {
  const [users, setUsers] = useState<User[]>(initialUsers);

  const deleteById = (id: number) =>
    setUsers((prev) => prev.filter((user) => user.id !== id));

  return (
    <div>
      <h2>Delete an item from state array</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <button onClick={() => deleteById(user.id)}>X - </button>
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-delete-an-item-3d9t2?file=/src/index.js)**

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to pass bearer token with axios

**Authorization token in axios:**

```js
import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export default function Page() {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const raw = sessionStorage.getItem("data");
      if (!raw) throw new Error("No session data found.");

      const token: string = JSON.parse(raw).data.id;
      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` }, // Authorization token in axios
      });
      setData(res.data);
    };

    fetchData().catch((err: Error) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading…</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Pass props in Link react-router

**render props:**

```js
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

function IndexPage() {
  return <h2>Home Page</h2>;
}

function PropsPage({ title }: Readonly<{ title: string }>) {
  return <h2>{title}</h2>;
}

export default function App() {
  return (
    <section className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/props-through-component">Props through component</Link> |{" "}
          <Link to="/props-through-render">Props through render</Link>
        </nav>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route
            path="/props-through-component"
            element={<PropsPage title="Props through component" />}
          />
          <Route
            path="/props-through-render"
            element={<PropsPage title="Props through render" />}
          />
        </Routes>
      </Router>
    </section>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/pass-props-in-react-router-xs34i?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to disable a button when an input is empty?

```js
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button disabled={email.length < 1}>Submit</button>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-disable-a-button-yb8gm?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Update style of a component onScroll in React.js

```js
import { useState, useRef, useCallback } from "react";

const ITEMS = Array.from(
  { length: 50 },
  () => "Get the scroll position on scroll in react.",
);
const containerStyle = { height: 300, overflowY: "scroll" } as const;

export default function App() {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const onScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement>) => {
      const currentScrollY = (e.target as HTMLDivElement).scrollTop;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      } else if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
    },
    [goingUp],
  );

  return (
    <div onScroll={onScroll} style={containerStyle}>
      {ITEMS.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-onscroll-event-dst5o?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to generate unique IDs for form labels in React?

**useId Hooks:**

```js
import { useId } from "react";

export default function App() {
  const id = useId();
  return (
    <div>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>label</label>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/generate-unique-id-for-form-e7iqz?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How can one tell the version of React running at runtime in the browser?

**version Hook**

```js
import { version } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>React version: {version}</h1>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-version-hpuy8?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Update React component every second

```js
import { useState, useEffect } from "react";

export default function TimeComponent() {
  const [time, setTime] = useState(String(new Date()));

  useEffect(() => {
    const interval = setInterval(() => setTime(String(new Date())), 1000);
    return () => clearInterval(interval);
  }, []);

  return <h3>Current Time: {time}</h3>;
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/update-component-every-second-i0gk5?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to declare a global variable in React?

**Window Object:**

```js
const name = "Hello React";

export default function App() {
  return (
    <div className="App">
      <h2>Global variable using window object</h2>
      <h3>{name}</h3>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/global-variable-using-window-property-862oe?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Instance vs state variables in React

```js
import { useRef, useState } from "react";

// Instance variable (useRef): changing it does NOT trigger a re-render.
// State variable (useState): changing it DOES trigger a re-render.
export default function Test() {
  const instanceValue = useRef(0);
  const [stateValue, setStateValue] = useState(0);

  function handleIncrementRef() {
    instanceValue.current += 1;
    alert(
      `Ref value is now ${instanceValue.current} (UI still shows old state)`,
    );
  }

  return (
    <div>
      <p>State variable: {stateValue}</p>
      <button onClick={handleIncrementRef}>Increment Ref (no re-render)</button>
      <button onClick={() => setStateValue((v) => v + 1)}>
        Increment State (re-renders)
      </button>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/class-variable-vs-state-variable-gy9bj?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to create dynamic href in react render function?

```js
const posts = [
  { id: 10, title: "Link One" },
  { id: 20, title: "Link Two" },
  { id: 30, title: "Link Three" },
];

export default function App() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <a href={`/posts/${post.id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/dynamic-href-in-react-63ewq?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to toggle boolean state of react component?

```js
import { useState } from "react";

export default function App() {
  const [good, setGood] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setGood((v) => !v)}>
        <p>Do you feel good today?</p>
        <div className="toggle">
          <span role="img" aria-label={good ? "Thumbs Up" : "Thumbs Down"}>
            {good ? "Yes! 👍" : "No! 👎"}
          </span>
        </div>
      </button>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/toggle-boolean-state-in-react-kguly?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Dynamically add child components in React

```js
// Parent.js

export default class Parent extends React.Component {
  render() {
    return (
      <>
        <h1> Parent Component! </h1>
        {this.props.children}
      </>
    );
  }
}
```

```js
// Child.js

export default class Child extends React.Component {
  render() {
    return (
      <>
        <h2> Child Component! </h2>
      </>
    );
  }
}
```

```js
// index.js

import Parent from "./Parent";
import Child from "./Child";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Parent>
      <Child name="Child Component Props" />
    </Parent>
  </StrictMode>,
  rootElement,
);
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/dynamically-add-child-components-nryzl?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Disable back button in react navigation

_ToDo_

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-disable-back-button-1651v?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to restrict access to routes in react-router?

```js
import { useState } from "react";

// useAuth: manages authentication state. Returns current auth status and login/logout actions.
function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return { isAuthenticated, login: () => setIsAuthenticated(true), logout: () => setIsAuthenticated(false) };
}

// LoginPage: shown when the user is not authenticated. Calls onLogin when the user submits.
function LoginPage({ onLogin }: Readonly<{ onLogin: () => void }>) {
  return (
    <div>
      <h2>Login</h2>
      <button onClick={onLogin}>Log in</button>
    </div>
  );
}

// Dashboard: protected page shown only to authenticated users. Calls onLogout to sign out.
function Dashboard({ onLogout }: Readonly<{ onLogout: () => void }>) {
  return (
    <div>
      <h2>Dashboard (protected)</h2>
      <button onClick={onLogout}>Log out</button>
    </div>
  );
}

// App: renders LoginPage or Dashboard based on authentication state.
export default function App() {
  const { isAuthenticated, login, logout } = useAuth();

  if (!isAuthenticated) {
    return <LoginPage onLogin={login} />;
  }

  return <Dashboard onLogout={logout} />;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How do I set multipart in axios with react?

```js
import { useRef } from "react";
import axios from "axios";

const UPLOAD_URL = "FILE_DIRECTORY";

async function uploadImage(file: File) {
  const formData = new FormData();
  formData.append("filename", file);
  formData.append("destination", "images");
  formData.append("create_thumbnail", "true");

  await axios.post(UPLOAD_URL, formData, {
    headers: { "content-type": "multipart/form-data" },
  });
}

export default function App() {
  const fileRef = useRef<File | null>(null);

  async function handleUpload() {
    if (!fileRef.current) return;
    try {
      await uploadImage(fileRef.current);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  }

  return (
    <div className="App">
      <h1>File Upload in React</h1>
      <input
        type="file"
        name="file"
        onChange={(e) => {
          fileRef.current = e.target.files?.[0] ?? null;
        }}
      />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/file-upload-in-react-ubjei?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to start search only when user stops typing?

```js
import { useState, useEffect } from "react";

const DEBOUNCE_MS = 300;

export default function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    const id = setTimeout(() => {
      console.log(`Search called: "${value}"`);
    }, DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [value]);

  return (
    <>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search"
      />
      <h1>{value}</h1>
    </>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-search-using-settimeout-9d8vd?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to implement default or NotFound page?

```js
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";

const IndexPage = () => <h3>Home Page</h3>;
const AboutPage = () => <h3>About Page</h3>;
const NoMatchPage = () => <h3>Page Not Found</h3>;

export default function App() {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/page-not-found">404</Link>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </Router>
    </section>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-page-not-found-route-lnn2y?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to focus an input element on page load?

**autoFocus:**

```js
export default function App() {
  return (
    <>
      <input placeholder="It Won't focus" />
      <input autoFocus placeholder="It will focus" />
    </>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/focus-an-input-element-on-page-load-z1dx6?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Give a simple example of Jest test case?

```js
// Counter.js

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <p data-testid="count">{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
```

```js
// Counter.test.js

import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./page";

describe("Counter", () => {
  it("renders with initial count of 0", () => {
    render(<Counter />);
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  it("increments count when Increment is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByTestId("count")).toHaveTextContent("1");
  });

  it("decrements count when Decrement is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Decrement"));
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });

  it("resets count to 0 when Reset is clicked", () => {
    render(<Counter />);
    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Increment"));
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByTestId("count")).toHaveTextContent("0");
  });
});
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-jest-test-case-5jsf2)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to use font-awesome icons in React?

```js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressBook, faHome } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div className="App">
      <h2>React Font Awesome Icons</h2>
      <nav>
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} /> Home
          </li>
          <li>
            <FontAwesomeIcon icon={faAddressBook} /> Contact Us
          </li>
        </ul>
      </nav>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-font-awesome-x2oq0?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to use SVGs in React?

```js
function App() {
  return (
    <div className="App">
      <h1> SVG in React </h1>
      <div>
        <img
          src={"http://s.cdpn.io/3/kiwi.svg"}
          alt="Kiwi Bird"
          width="200px"
          height="200px"
        />
      </div>
    </div>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/svg-in-react-d1mq4?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to repeat an element n times using JSX?

```js
export default function App() {
  return (
    <>
      <h2>Repeat an element n times using JSX</h2>
      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i}>
            Field {i}: <input type="text" placeholder="Search" />
          </div>
        ))}
      </div>
    </>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/repeat-an-element-n-times-using-jsx-ze1yh?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How can I set a cookie in react?

```js
import { CookiesProvider } from "react-cookie";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
createRoot(rootElement).render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
);
```

```js
import { useState } from "react";
import { useCookies } from "react-cookie";

const App = () => {
  const [name, setName] = useState("");
  const [cookies, setCookie] = useCookies(["name"]);

  const handle = () => {
    setCookie("name", name, { path: "/" });
  };

  return (
    <>
      <h1>Cookies in React</h1>
      <input
        placeholder="Cookie value"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handle}>Set Cookie</button>
      {cookies.name && <div>Cookies Value: {cookies.name}</div>}
    </>
  );
};

export default App;
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/repeat-an-element-n-times-using-jsx-ze1yh?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to Create dependent dropdowns that populates data with each other in React.js?

```js
/**
 * Dependent Dropdown in React
 */
import { useState } from "react";

const data = [
  { name: "Delhi", cities: ["Siri", "Sultanpur", "Tughlqabad", "Jahanpanah", "Firozobad"] },
  { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Jalgaon"] },
  { name: "West Bengal", cities: ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Baharampur"] },
  { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"] },
];

export default function App() {
  const [capital, setCapital] = useState("");
  const [cities, setCities] = useState<string[]>([]);
  const [city, setCity] = useState("");

  function updateSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const selected = e.target.value;
    setCapital(selected);
    setCities(data.find((d) => d.name === selected)?.cities ?? []);
    setCity("");
  }

  return (
    <>
      <select value={capital} onChange={updateSelect}>
        <option value="" disabled>--- SELECT ---</option>
        {data.map((d) => (
          <option key={d.name} value={d.name}>{d.name}</option>
        ))}
      </select>
      <select value={city} onChange={(e) => setCity(e.target.value)}>
        <option value="" disabled>--- SELECT ---</option>
        {cities.map((city) => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>
    </>
  );
}
```

**&#9885; [Try this example on CodeSandbox](https://codesandbox.io/s/react-dependent-dropdowns-qs3e6o?file=/src/App.js)**

#### Q. Create a slide show app

```js
import { useState, useEffect, useCallback } from "react";

type Slide = {
  id: number;
  title: string;
  description: string;
  bg: string;
};

const slides: Slide[] = [
  { id: 1, title: "Mountains", description: "Majestic peaks touching the sky.", bg: "bg-blue-500" },
  { id: 2, title: "Ocean", description: "Endless waves of calm and wonder.", bg: "bg-cyan-500" },
  { id: 3, title: "Forest", description: "A canopy of green silence.", bg: "bg-green-600" },
  { id: 4, title: "Desert", description: "Golden dunes shaped by the wind.", bg: "bg-yellow-500" },
];

const AUTOPLAY_DELAY = 4000;

export default function App() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() =>
    setCurrent((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_DELAY);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 gap-6">
      <section
        aria-label="Slideshow"
        className={`relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl ${slides[current].bg} text-white transition-colors duration-500`}
      >
        <div className="flex flex-col items-center justify-center h-72 px-10 text-center">
          <h2 className="text-4xl font-bold mb-3">{slides[current].title}</h2>
          <p className="text-lg opacity-90">{slides[current].description}</p>
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </section>

      <p className="text-gray-500 text-sm">
        {current + 1} / {slides.length}
      </p>
    </div>
  );
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a custom useFetch hook in React?

<details><summary><b>Answer</b></summary>

```js
import { useEffect, useReducer } from "react";

type State<T> = { data: T | null; loading: boolean; error: string | null };
type Action<T> =
  | { type: "loading" }
  | { type: "success"; payload: T }
  | { type: "error"; payload: string };

function fetchReducer<T>(state: State<T>, action: Action<T>): State<T> {
  switch (action.type) {
    case "loading": return { data: null, loading: true, error: null };
    case "success": return { data: action.payload, loading: false, error: null };
    case "error":   return { data: null, loading: false, error: action.payload };
  }
}

function useFetch<T>(url: string) {
  const [state, dispatch] = useReducer(fetchReducer<T>, {
    data: null, loading: true, error: null,
  });

  useEffect(() => {
    let cancelled = false;
    dispatch({ type: "loading" });

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
        return res.json() as Promise<T>;
      })
      .then((data) => { if (!cancelled) dispatch({ type: "success", payload: data }); })
      .catch((err: Error) => { if (!cancelled) dispatch({ type: "error", payload: err.message }); });

    return () => { cancelled = true; };
  }, [url]);

  return state;
}

// Usage
type User = { id: number; name: string; email: string };

export default function App() {
  const { data, loading, error } = useFetch<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading…</p>;
  if (error)   return <p>Error: {error}</p>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name} — {user.email}</li>
      ))}
    </ul>
  );
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a Pagination component in React?

<details><summary><b>Answer</b></summary>

```js
import { useMemo, useState } from "react";

const TOTAL_ITEMS = 100;
const PAGE_SIZE   = 10;

function usePagination(total: number, pageSize: number) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(total / pageSize);

  const items = useMemo(() => {
    const start = (page - 1) * pageSize + 1;
    const end   = Math.min(page * pageSize, total);
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [page, pageSize, total]);

  return { page, totalPages, items, setPage };
}

export default function App() {
  const { page, totalPages, items, setPage } = usePagination(TOTAL_ITEMS, PAGE_SIZE);

  return (
    <>
      <h2>Pagination</h2>
      <ul>
        {items.map((n) => <li key={n}>Item {n}</li>)}
      </ul>
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Prev</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => setPage(p)}
            style={{ fontWeight: p === page ? "bold" : "normal" }}
          >
            {p}
          </button>
        ))}
        <button disabled={page === totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>
      <p>Page {page} of {totalPages}</p>
    </>
  );
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create a Star Rating component in React?

<details><summary><b>Answer</b></summary>

```js
import { useState } from "react";

type StarRatingProps = Readonly<{
  maxStars?: number;
  onChange?: (rating: number) => void;
}>;

function StarRating({ maxStars = 5, onChange }: StarRatingProps) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleSelect = (value: number) => {
    setRating(value);
    onChange?.(value);
  };

  return (
    <div style={{ display: "flex", gap: 4, fontSize: 32 }}>
      {Array.from({ length: maxStars }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          aria-label={`${star} star${star > 1 ? "s" : ""}`}
          onClick={() => handleSelect(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{
            cursor: "pointer",
            color: star <= (hover || rating) ? "#facc15" : "#d1d5db",
            background: "none",
            border: "none",
            padding: 0,
            fontSize: "inherit",
          }}
        >
          ★
        </button>
      ))}
      <span style={{ fontSize: 16, alignSelf: "center", marginLeft: 8 }}>
        {rating > 0 ? `${rating} / ${maxStars}` : "No rating"}
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ padding: 24 }}>
      <h2>Rate this product</h2>
      <StarRating onChange={(r) => console.log("Rating:", r)} />
    </div>
  );
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to persist state to localStorage using a custom hook?

<details><summary><b>Answer</b></summary>

```js
import { useState, useEffect } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch {
      console.error("Failed to save to localStorage");
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

// Usage
export default function App() {
  const [name, setName] = useLocalStorage<string>("username", "");

  return (
    <div>
      <h2>Persisted Input</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Your name (saved to localStorage)"
      />
      <p>Hello, {name || "stranger"}!</p>
    </div>
  );
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to implement infinite scroll in React?

<details><summary><b>Answer</b></summary>

```js
import { useState, useEffect, useRef, useCallback } from "react";

const PAGE_SIZE = 20;

function generateItems(page: number) {
  return Array.from({ length: PAGE_SIZE }, (_, i) => ({
    id: (page - 1) * PAGE_SIZE + i + 1,
    text: `Item ${(page - 1) * PAGE_SIZE + i + 1}`,
  }));
}

export default function App() {
  const [items, setItems] = useState(generateItems(1));
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      setPage((p) => {
        const next = p + 1;
        setItems((prev) => [...prev, ...generateItems(next)]);
        return next;
      });
      setLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting && !loading) loadMore(); },
      { threshold: 1 }
    );
    const el = loaderRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [loadMore, loading]);

  return (
    <div style={{ maxHeight: "80vh", overflowY: "auto", padding: 16 }}>
      <h2>Infinite Scroll (page {page})</h2>
      <ul>
        {items.map((item) => <li key={item.id}>{item.text}</li>)}
      </ul>
      <div ref={loaderRef} style={{ textAlign: "center", padding: 16 }}>
        {loading ? "Loading…" : "Scroll for more"}
      </div>
    </div>
  );
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to use useTransition for non-blocking UI updates in React?

<details><summary><b>Answer</b></summary>

```js
import { useState, useTransition, useMemo } from "react";

const ALL_ITEMS = Array.from({ length: 10_000 }, (_, i) => `Item ${i + 1}`);

export default function App() {
  const [query, setQuery] = useState("");
  const [filterQuery, setFilterQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const filtered = useMemo(
    () => ALL_ITEMS.filter((item) => item.toLowerCase().includes(filterQuery.toLowerCase())),
    [filterQuery]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // urgent — update input immediately
    startTransition(() => {
      setFilterQuery(e.target.value); // non-urgent — defer expensive filter
    });
  };

  return (
    <div>
      <h2>useTransition Demo</h2>
      <input value={query} onChange={handleChange} placeholder="Filter 10,000 items…" />
      {isPending && <p style={{ color: "gray" }}>Updating list…</p>}
      <ul>
        {filtered.slice(0, 100).map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
```

**Key point:** `startTransition` marks the state update as non-urgent so React can interrupt it to keep the input responsive.

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to create a form with validation in React?

<details><summary><b>Answer</b></summary>

```js
import { useState } from "react";

type FormValues = { name: string; email: string; password: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim())            errors.name     = "Name is required.";
  if (!values.email.includes("@"))    errors.email    = "Enter a valid email.";
  if (values.password.length < 8)     errors.password = "Password must be at least 8 characters.";
  return errors;
}

export default function SignupForm() {
  const [values, setValues]     = useState<FormValues>({ name: "", email: "", password: "" });
  const [errors, setErrors]     = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev)  => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) return <p>Form submitted successfully!</p>;

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 360 }}>
      <h2>Sign Up</h2>
      {(["name", "email", "password"] as const).map((field) => (
        <div key={field}>
          <label>
            {field.charAt(0).toUpperCase() + field.slice(1)}
            <input
              type={field === "password" ? "password" : field === "email" ? "email" : "text"}
              name={field}
              value={values[field]}
              onChange={handleChange}
              style={{ display: "block", width: "100%", marginTop: 4 }}
            />
          </label>
          {errors[field] && <p style={{ color: "red", margin: "4px 0 0" }}>{errors[field]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to implement drag and drop list in React?

<details><summary><b>Answer</b></summary>

```js
import { useState, useRef, type DragEvent } from "react";

const initialItems = ["Task A", "Task B", "Task C", "Task D", "Task E"];

export default function DragDropList() {
  const [items, setItems] = useState(initialItems);
  const dragIndex = useRef<number | null>(null);

  const handleDragStart = (index: number) => { dragIndex.current = index; };

  const handleDrop = (dropIndex: number) => {
    if (dragIndex.current === null || dragIndex.current === dropIndex) return;
    const updated = [...items];
    const [dragged] = updated.splice(dragIndex.current, 1);
    updated.splice(dropIndex, 0, dragged);
    setItems(updated);
    dragIndex.current = null;
  };

  return (
    <div style={{ maxWidth: 300 }}>
      <h2>Drag &amp; Drop List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item, index) => (
          <li
            key={item}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e: DragEvent) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
            style={{
              padding: "10px 14px", marginBottom: 6, background: "#f1f5f9",
              border: "1px solid #cbd5e1", borderRadius: 6, cursor: "grab",
            }}
          >
            ☰ {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

</details>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## [Sorting Articles](https://github.com/hackerrank-test/hackerrank-react-sorting-articles)

<img src="https://hrcdn.net/s3_pub/istreet-assets/YkVzgbGgMj0cfT9P97s8jg/sorting-articles.gif" title="Sorting Articles" alt="Sorting Articles" width="350" height="300"/>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## [Slideshow App](https://github.com/hackerrank-test/hackerrank-react-slideshow-app)

<img src="https://hrcdn.net/s3_pub/istreet-assets/j3Q6jXZ3DOOPRlCs9hFcnQ/slideshow.gif" title="Slideshow App" alt="Slideshow App" width="350" height="300"/>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## [Catalog Viewer](https://github.com/hackerrank-test/hackerrank-react-catalog-viewer)

<img src="https://hrcdn.net/s3_pub/istreet-assets/mllhJWhWckgDu7PqJo6HVw/catalog-viewer-new.gif" title="Catalog Viewer" alt="Catalog Viewer" width="350" height="300"/>

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
