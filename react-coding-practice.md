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

## Q. React Simple Counter

```js
const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (type) => {
    type === "increment" ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <div className="buttons">
        <button onClick={() => handleClick("increment")}>Increment</button>
        <button onClick={() => handleClick("decrement")}>Decrement</button>
      </div>
    </div>
  );
};
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-counter-bhp4q?file=/src/App.js)**

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

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Create ToDo App using React?

```js
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: []
    };
  }

  // Set a user input value
  updateInput(value) {
    this.setState({
      userInput: value
    });
  }

  // Add item if user input in not empty
  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        // Add a random id which is used to delete
        id: Math.random(),

        // Add a user value to list
        value: this.state.userInput
      };

      // Update list
      const list = [...this.state.list];
      list.push(userInput);

      // reset state
      this.setState({
        list,
        userInput: ""
      });
    }
  }

  // Function to delete item from list use id to delete
  deleteItem(key) {
    const list = [...this.state.list];

    // Filter values and leave value which we need to delete
    const updateList = list.filter((item) => item.id !== key);

    // Update list in state
    this.setState({
      list: updateList
    });
  }

  render() {
    return (
      <>
        <h1>TODO LIST</h1>
        <div>
          <input
            type="text"
            placeholder="add item . . . "
            value={this.state.userInput}
            onChange={(item) => this.updateInput(item.target.value)}
          />
          <input type="button" onClick={() => this.addItem()} value="ADD" />
        </div>
        <div>
          <ul>
            {/* map over and print items */}
            {this.state.list.map((item) => {
              return (
                <li key={item.id} onClick={() => this.deleteItem(item.id)}>
                  {item.value}
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-todo-list-hw45y?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Search text based on list

```js
const people = [
  "Shashi Koshy",
  "Dhriti Taneja",
  "Dipa Mishra"
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  React.useEffect(() => {
    const results = people.filter((person) =>
      person.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-search-list-u1s8b?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Fizz Buzz program in React

```js
class FrizzBuzz extends React.Component {
  state = {
    count: 1
  };

  handleDecrement = () => {
    if (this.state.count > 1) {
      this.setState((prevState) => ({ count: prevState.count - 1 }));
    }
  };

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1> React Fizz Buzz </h1>
        <p> Counting incrementally, replacing any number divisible by three with
          the word "fizz", and any number divisible by five with the word
          "buzz". </p>

        <h2>
          {this.state.count % 15 === 0
            ? "FizzBuzz"
            : this.state.count % 3 === 0
            ? "Fizz"
            : this.state.count % 5 === 0
            ? "Buzz"
            : this.state.count}
        </h2>
        <button onClick={this.handleDecrement}> - </button>
        <button onClick={this.handleIncrement}> + </button>
      </div>
    );
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-fizz-buzz-qtk36?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Call child method from parent in React

**React.forwardRef():**

```js
import { forwardRef, useRef, useImperativeHandle } from "react";

const Child = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getMessage() {
      alert("Message from Child");
    }
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

**&#9885; [Run this Code](https://codesandbox.io/s/react-forwardref-3serh?file=/src/index.js)**

**Class Component:**

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

**&#9885; [Run this Code](https://codesandbox.io/s/react-createref-t0gud?file=/src/index.js)**

**Callback Ref API:**

```js
class Parent extends React.Component {
  render() {
    return (
      <div>
        <Child ref={(instance) => { this.child = instance; }} />
        <button onClick={() => { this.child.getMessage(); }} >
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

**&#9885; [Run this Code](https://codesandbox.io/s/react-callback-ref-api-kp30y?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Show or hide element in React

**Using React Class:**

```js
class Toggle extends React.Component {
  state = {
    show: true
  };

  toggle = () =>
    this.setState((currentState) => ({ show: !currentState.show }));

  render() {
    return (
      <div>
        <button onClick={this.toggle}>
          Toggle: {this.state.show ? "Show" : "Hide"}
        </button>
        {this.state.show && <h2>Hello World!</h2>}
      </div>
    );
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-toggle-9h4ui?file=/src/App.js)**

**Using React hooks:**

```js
export default function App() {
  const [show, toggleShow] = React.useState(true);

  return (
    <div>
      <button onClick={() => toggleShow(!show)}>
        Toggle: {show ? "Show" : "Hide"}
      </button>
      {show && <h2>Hello World!</h2>}
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-toggle-gipub?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How can I update the parent state in React?

**Using function as a Prop:**

```js
class Parent extends Component {
  state = {
    text: "Click Me !"
  };

  // Function to update state
  handleUpdate = (newState) => {
    this.setState({ text: newState });
  };

  render() {
    return (
      <div>
        <Child
          text={this.state.text}
          // Passing a function to child
          updateState={this.handleUpdate}
        ></Child>
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return (
      <button
        // Using parent props to update parent state
        onClick={() => this.props.updateState("Parent State Changed")}
      >
        {this.props.text}
      </button>
    );
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-function-as-a-prop-2unfh?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How do I reference a local image in React?

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

**&#9885; [Run this Code](https://codesandbox.io/s/image-in-react-ud0ry?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to access a child state in React?

**Using createRef():**

```js
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.ChildElement = React.createRef();
  }

  handleClick = () => {
    const childelement = this.ChildElement.current;
    alert("Current state of child is: " + childelement.state.name);
  };
  render() {
    return (
      <div>
        <Child ref={this.ChildElement} />
        <h2>Access child state from parent component</h2>
        <button onClick={this.handleClick}> CLICK ME </button>
      </div>
    );
  }
}

class Child extends React.Component {
  state = {
    name: "Hello React"
  };

  render() {
    return <></>;
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/access-child-state-p2iip?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. React prop validation for date objects

**PropTypes.instanceOf(Date):**

```js
import React from "react";
import PropTypes from "prop-types";

const DateDisplay = ({ date }) => <p>{date.toString()}</p>;

DateDisplay.propTypes = {
  date: PropTypes.instanceOf(Date)
};

export default function App() {
  return (
    <h3>
      <DateDisplay date={new Date()} />
    </h3>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-date-validation-z7g6g?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to access custom attributes from event object in React?

**event.target.getAttribute:**

```js
export default class Header extends React.Component {
  handleClick(event) {
    console.log(event.target.getAttribute("name"));
  }

  render() {
    return (
      <h2 name="Header" onClick={this.handleClick}>
        CLICK ME !
      </h2>
    );
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-custom-attributes-i3mu0?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Updating state on props change in React

```js
// Counter.js

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>CLICK ME</button>
      <h1>{props.text}</h1>
    </div>
  );
};
```

```js
// App.js

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  render() {
    return (
      <div>
        <Counter handleClick={this.handleClick} text={this.state.count} />
      </div>
    );
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-change-state-by-props-phjde?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Delete an item from state array in react

```js
const userData = [
  { id: "100", name: "Chanda Mittal" },
  { id: "101", name: "Sumati Pau" }
];

export default class ListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: userData
    };
  }

  onDeleteByIndex(index) {
    this.setState({
      users: this.state.users.filter((item, i) => i !== index)
    });
  }

  render() {
    return (
      <div>
        <h2> Delete an item from state array </h2>
        <ul>
          {this.state.users.map((item, index) => (
            <li key={item.id}>
              <input
                type="button"
                value="Delete"
                onClick={() => this.onDeleteByIndex(index)}
              />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-delete-an-item-3d9t2?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Sending the bearer token with axios

**Autherization token in axios:**

```js
const api = 'your api'; 
const user = JSON.parse(sessionStorage.getItem('data'));
const token = user.data.id; /*take only token and save in token variable*/

axios.get(api , { headers: {"Authorization" : `Bearer ${token}`} })
.then(res => {
  console.log(res.data);
.catch((error) => {
  console.log(error)
});
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Pass props in Link react-router

**render props:**

```js
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

const IndexPage = () => {
  return <h2>Home Page</h2>;
};

const PropsPage = ({ title }) => {
  return <h2>{title}</h2>;
};

const App = () => {
  return (
    <section className="App">
      <Router>
        <Link to="/">Home</Link> |
        <Link to="/props-through-component">Props through component</Link> |
        <Link to="/props-through-render">Props through render</Link> |
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route
            exact
            path="/props-through-component"
            component={() => <PropsPage title={`Props through component`} />}
          />
          <Route
            exact
            path="/props-through-render"
            render={(props) => (
              <PropsPage {...props} title={`Props through render`} />
            )}
          />
        </Switch>
      </Router>
    </section>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/pass-props-in-react-router-xs34i?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to disable a button when an input is empty?

```js
class App extends React.Component {
  state = {
    email: ""
  };

  handleChange = (e) => {
    this.setState({
      email: e.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <button disabled={this.state.email.length < 1}>Submit</button>
      </div>
    );
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-disable-a-button-yb8gm?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Update style of a component onScroll in React.js

```js
import React, { useState, useRef } from "react";

export default function App() {

  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const onScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    if (prevScrollY.current < currentScrollY && goingUp) {
      setGoingUp(false);
    }
    if (prevScrollY.current > currentScrollY && !goingUp) {
      setGoingUp(true);
    }
    prevScrollY.current = currentScrollY;
    console.log(goingUp, currentScrollY);
  };

  return (
    <div onScroll={onScroll} style={{ height: 300, overflowY: "scroll" }}>
      {Array(50)
        .fill("Get the scroll position on scroll in react.")
        .map((f, i) => {
          return <p key={i}>{f}</p>;
        })}
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-onscroll-event-dst5o?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to generate unique IDs for form labels in React?

**Hooks:**

```js
import React, { useState } from "react";
import _uniqueId from "lodash/uniqueId";

export default function App() {
  // id will be set once when the component initially renders, but never again
  // (unless you assigned and called the second argument of the tuple)
  const [id] = useState(_uniqueId("prefix-"));
  return (
    <div>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>label</label>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/generate-unique-id-for-form-e7iqz?file=/src/App.js)**

**Class Component:**

```js
import React from "react";
import _uniqueId from "lodash/uniqueId";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.id = _uniqueId("prefix-");
  }

  render() {
    const id = this.id;
    return (
      <div>
        <input id={id} type="checkbox" />
        <label htmlFor={id}>label</label>
      </div>
    );
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/generate-unique-id-for-form-c86pt?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How can one tell the version of React running at runtime in the browser?

**React.version:**

```js
import React from "react";

const REACT_VERSION = React.version;

export default function App() {
  return (
    <div className="App">
      <h1>React version: {REACT_VERSION}</h1>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/react-version-hpuy8?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Update React component every second

```js
class TimeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { time: Date() };
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: Date() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h3>Current Time: {this.state.time} </h3>;
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/update-component-every-second-i0gk5?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to declare a global variable in React?

**Window Object:**

```js
window.$name = "Hello React"; // global variable

export default function App() {
  // access global variable
  const name = window.$name;

  return (
    <div className="App">
      <h2>Global variable using window object</h2>
      <h3>{name}</h3>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/global-variable-using-window-property-862oe?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. Instance vs state variables in React

```js
/**
* If you use class variable, React will be unaware 
* of it and won't re-render your component.
*
**/
export default class Test extends React.Component {

  constructor() {
    super();
    this.value = 10;  // class variable
    this.state = { value: 20 };  // state variable
  }

  render() {
    return (
      <>
        <h3>Class Variable: {this.value}</h3>
        <h3>State Variable: {this.state.value}</h3>
      </>
    );
  }
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/class-variable-vs-state-variable-gy9bj?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to create dynamic href in react render function?

```js
const posts = [
  { id: 10, title: "Link One" },
  { id: 20, title: "Link Two" },
  { id: 30, title: "Link Three" }
];

export default function App() {
  return (
    <ul>
      {posts.map(function (post) {
        return (
          <li key={post.id}>
            <a href={"/posts/" + post.id}>{post.title}</a>
          </li>
        );
      })}
    </ul>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/dynamic-href-in-react-63ewq?file=/src/App.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. How to toggle boolean state of react component?

```js
function App() {
  const [state, setState] = useState(true);

  function toggle() {
    setState(!state);
  }

  return (
    <div className="App">
      <h2 onClick={toggle}>
        <p>Do you feel good today?</p>
        <div className="toggle">
          {state ? (
            <span role="img" aria-label="Thums Up">
              Yes! 👍
            </span>
          ) : (
            <span role="img" aria-label="Thums Down">
              No! 👎
            </span>
          )}
        </div>
      </h2>
    </div>
  );
}
```

**&#9885; [Run this Code](https://codesandbox.io/s/toggle-boolean-state-in-react-kguly?file=/src/index.js)**

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
  rootElement
);
```

**&#9885; [Run this Code](https://codesandbox.io/s/dynamically-add-child-components-nryzl?file=/src/index.js)**

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

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
#### Q. How to repeat an element n times using JSX
#### Q. Create a chat application

*ToDo*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
