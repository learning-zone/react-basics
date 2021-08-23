# React Coding Practice

## Q. Display Simple Data with JSX

```js
/**
* JSX Example using Functional Component
*
**/
export default function App() {
  return (
    <div className="App">
      <h1>JSX Example!</h1>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/jsx-example-b1hpp?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Loop Over and Display Data with JSX

```js
// App.js

import users from "./users-data";

function App() {
  return (
    <div className="App">
      <div className="page-deets">
        <h2>Loop Over and Display Data with JSX</h2>
      </div>
      {/* Iterate over imported array in userData */}
      <div className="users">
        {users.map((user, index) => (
          <div key={index}>
            <h3>{user.name}</h3>
            <p>{user.location}</p>
            <p>{user.car}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-iterate-array-ej0wm?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Use React State to Update the DOM

```js
function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="App">
      <h2>Update Data from an input</h2>

      <div className="input-display">
        Seached Keyword: <b>{search}</b>
      </div>

      <div className="inputs">
        <input
          className="input"
          type="text"
          value={search}
          placeholder="Seach Here"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-update-dom-vu4il?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Show an Alert Based on an Input

```js
function App() {
  const [phrase, setPhrase] = useState("");

  if (phrase === "Hello React") {
    alert("You may pass!");
  }

  return (
    <div className="App">
      <h2>What's the secret phrase?</h2>

      <input
        type="text"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
        placeholder="Enter a secret"
      />

      <p>
        Hint: It's <strong>Hello React</strong>
      </p>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-alert-based-on-input-hk2ip?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Add Two Numbers

```js
function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const [total, setTotal] = useState(number1 + number2);

  function calculateTotal() {
    setTotal(number1 + number2);
  }

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

      <button onClick={calculateTotal}>Add Them!</button>
      <h2>Total: {total}</h2>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-calculator-8ud1d?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Fetch and Display from an API

```js
const gitHubUrl = "https://api.github.com/users/deekshasharma";

function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const response = await fetch(gitHubUrl);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>GitHub User Data</h2>
      </header>
      <div className="user-container">
        <h5 className="info-item">{userData.name}</h5>
        <h5 className="info-item">{userData.location}</h5>
        <h5 className="info-item">{userData.blog}</h5>
        <h5 className="info-item">{userData.company}</h5>
      </div>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-api-4wrts?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Use Context to Pass Data

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

**&#9885; [Run this Code](https://codesandbox.io/s/react-context-api-v8syu?file=/src/index.js)**

#### Q. React Simple Counter
#### Q. Todo List
#### Q. Search text based on list
#### Q. Fizz Buzz
#### Q. Create a chat application
#### Q. Call child method from parent
#### Q. Show or hide element in React
#### Q. How can I update the parent state in React?
#### Q. How to pass data from child component to its parent in ReactJS?
#### Q. How do I reference a local image in React?
#### Q. How to access a child state in React?
#### Q. React prop validation for date objects
#### Q. How to access custom attributes from event object in React?
#### Q. Updating state on props change in React Form
#### Q. Delete item from state array in react
#### Q. Sending the bearer token with axios
#### Q. Pass props in Link react-router
#### Q. How to disable a button when an input is empty?
#### Q. Update style of a component onScroll in React.js
#### Q. How to generate unique IDs for form labels in React?
#### Q. How can one tell the version of React running at runtime in the browser?
#### Q. Update React component every second
#### Q. How to declare a global variable in React?
#### Q. Instance v state variables in react.js
#### Q. How to create dynamic href in react render function?
#### Q. How to toggle boolean state of react component?
#### Q. How to repeat an element n times using JSX
#### Q. Dynamically add child components in React
#### Q. Disable back button in react navigation
#### Q. How can I set a cookie in react?
#### Q. How to restrict access to routes in react-router?
#### Q. How do I set multipart in axios with react?
#### Q. How to start search only when user stops typing?
#### Q. How to implement default or NotFound page?
#### Q. How to focus an input element on page load?
#### Q. Give a simple example of Jest test case?
#### Q. How to use font-awesome icons in React?
#### Q. How to use SVGs in React?

*ToDo*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
