# React Multiple Choice Questions

<br/>

#### Q. If you want to import just the Component from the React library, what syntax do you use?

- [ ] `import React.Component from 'react'`
- [ ] `import [ Component ] from 'react'`
- [ ] `import Component from 'react'`
- [x] `import { Component } from 'react'`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. If a function component should always render the same way given the same props, what is a simple performance optimization available for it?

- [x] Wrap it in the `React.memo` higher-order component.
- [ ] Implement the `useReducer` Hook.
- [ ] Implement the `useMemo` Hook.
- [ ] Implement the `shouldComponentUpdate` lifecycle method.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you fix the syntax error that results from running this code?

```javascript
const person =(firstName, lastName) =>
{
  first: firstName,
  last: lastName
}
console.log(person("Jill", "Wilson"))
```

- [x] Wrap the object in parentheses.
- [ ] Call the function from another file.
- [ ] Add a return statement before the first curly brace.
- [ ] Replace the object with an array.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. If you see the following import in a file, what is being used for state management in the component?

`import React, {useState} from 'react';`

- [x] React Hooks
- [ ] stateful components
- [ ] math
- [ ] class components

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?

```javascript
const name = 'Rachel';
const age = 31;
const person = { name, age };
console.log(person);
```

- [ ] `{{name: "Rachel", age: 31}}`
- [x] `{name: "Rachel", age: 31}`
- [ ] `{person: "Rachel", person: 31}}`
- [ ] `{person: {name: "Rachel", age: 31}}`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the testing library most often associated with React?

- [ ] Mocha
- [ ] Chai
- [ ] Sinon
- [x] Jest

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. To get the first item from the array ("cooking") using array destructuring, how do you adjust this line?

```javascript
const topics = ['cooking', 'art', 'history'];
```

- [ ] `const first = ["cooking", "art", "history"]`
- [ ] `const [] = ["cooking", "art", "history"]`
- [ ] `const [, first]["cooking", "art", "history"]`
- [x] `const [first] = ["cooking", "art", "history"]`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you handle passing through the component tree without having to pass props down manually at every level?

- [ ] React Send
- [ ] React Pinpoint
- [ ] React Router
- [x] React Context

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What should the console read when the following code is run?

```javascript
const [, , animal] = ['Horse', 'Mouse', 'Cat'];
console.log(animal);
```

- [ ] Horse
- [x] Cat
- [ ] Mouse
- [ ] undefined

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the name of the tool used to take JSX and turn it into createElement calls?

- [ ] JSX Editor
- [ ] ReactDOM
- [ ] Browser Buddy
- [x] Babel

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why might you use useReducer over useState in a React component?

- [ ] when you want to replace Redux
- [x] when you need to manage more complex state in an app
- [ ] when you want to improve performance
- [ ] when you want to break your production app

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which props from the props object is available to the component with the following syntax?

```javascript
<Message {...props} />
```

- [ ] any that have not changed
- [x] all of them
- [ ] child props
- [ ] any that have changed

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Consider the following code from React Router. What do you call :id in the path prop?

```javascript
<Route path="/:id" />
```

- [ ] This is a route modal
- [x] This is a route parameter
- [ ] This is a route splitter
- [ ] This is a route link

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. If you created a component called Dish and rendered it to the DOM, what type of element would be rendered?

```javascript
function Dish() {
  return <h1>Mac and Cheese</h1>;
}

ReactDOM.render(<Dish />, document.getElementById('root'));
```

- [ ] `div`
- [ ] section
- [ ] component
- [x] `h1`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does this React element look like given the following function? (Alternative: Given the following code, what does this React element look like?)

```javascript
React.createElement('h1', null, "What\'s happening?");
```

- [ ] `<h1 props={null}>What\'s happening?</h1>`
- [x] `<h1>What\'s happening?</h1>`
- [ ] `<h1 id="component">What\'s happening?</h1>`
- [ ] `<h1 id="element">What\'s happening?</h1>`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What property do you need to add to the Suspense component in order to display a spinner or loading state?

```javascript
function MyComponent() {
  return (
    <Suspense>
      <div>
        <Message />
      </div>
    </Suspense>
  );
}
```

- [ ] lazy
- [ ] loading
- [x] fallback
- [ ] spinner

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What do you call the message wrapped in curly braces below?

```javascript
const message = 'Hi there';
const element = <p>{message}</p>;
```

- [ ] a JS function
- [ ] a JS element
- [x] a JS expression
- [ ] a JSX wrapper

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What can you use to handle code splitting?

- [ ] `React.memo`
- [ ] `React.split`
- [x] `React.lazy`
- [ ] `React.fallback`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When do you use `useLayoutEffect`?

- [ ] to optimize for all devices
- [ ] to complete the update
- [ ] to change the layout of the screen
- [x] when you need the browser to paint before the effect runs

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

**Explanation:**
`useLayoutEffect` gets executed _before_ the `useEffect` hook without much concern for DOM mutation. Even though the React hook `useLayoutEffect` is set after the `useEffect` Hook, it gets triggered first!

#### Q. What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is bound correctly)?

```javascript
A. <button onClick={this.handleClick}>Click Me</button>
B. <button onClick={event => this.handleClick(event)}>Click Me</button>
```

- [ ] Button A will not have access to the event object on click of the button.
- [ ] Button B will not fire the handler this.handleClick successfully.
- [ ] Button A will not fire the handler this.handleClick successfully.
- [x] There is no difference.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you destructure the properties that are sent to the Dish component?

```javascript
function Dish(props) {
  return (
    <h1>
      {props.name} {props.cookingTime}
    </h1>
  );
}
```

- [ ] `function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }`
- [x] `function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }`
- [ ] `function Dish(props) { return <h1>{name} {cookingTime}</h1>; }`
- [ ] `function Dish(...props) { return <h1>{name} {cookingTime}</h1>; }`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why is it important to avoid copying the values of props into a component\'s state where possible?

- [ ] because you should never mutate state
- [ ] because `getDerivedStateFromProps()` is an unsafe method to use
- [x] because you want to allow a component to update in response to changes in the props
- [ ] because you want to allow data to flow back up to the parent

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the children prop?

- [ ] a property that adds child components to state
- [x] a special property that JSX creates on components that contain both an opening tag and a closing tag, referencing it\'s contents.
- [ ] a property that lets you set an array as a property
- [ ] a property that lets you pass data to child elements

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which attribute is React\'s replacement for using innerHTML in the browser DOM?

- [ ] injectHTML
- [x] dangerouslySetInnerHTML
- [ ] weirdSetInnerHTML
- [ ] strangeHTML

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of these terms commonly describe React applications?

- [x] declarative
- [ ] integrated
- [ ] closed
- [ ] imperative

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When using webpack, why would you need to use a loader?

- [ ] to put together physical file folders
- [x] to preprocess files
- [ ] to load external data
- [ ] to load the website into everyone\'s phone

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. A representation of a user interface that is kept in memory and is synced with the "real" DOM is called what?

- [x] virtual DOM
- [ ] DOM
- [ ] virtual elements
- [ ] shadow DOM

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. You have written the following code but nothing is rendering. How do you fix this problem?

```javascript
const Heading = () => {
  <h1>Hello!</h1>;
};
```

- [ ] Add a render function.
- [x] Change the curly braces to parentheses or add a return statement before the `h1` tag.
- [ ] Move the `h1` to another component.
- [ ] Surround the `h1` in a `div`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. To create a constant in JavaScript, which keyword do you use?

- [x] const
- [ ] let
- [ ] constant
- [ ] var

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What do you call a React component that catches JavaScript errors anywhere in the child component tree?

- [ ] error bosses
- [ ] error catchers
- [ ] error helpers
- [x] error boundaries

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In which lifecycle method do you make requests for data in a class component?

- [ ] constructor
- [x] componentDidMount
- [ ] componentWillReceiveProps
- [ ] componentWillMount

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. React components are composed to create a user interface. How are components composed?

- [ ] by putting them in the same file
- [x] by nesting components
- [ ] with webpack
- [ ] with code splitting

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. All React components must act like **\_** with respect to their props.

- [ ] monads
- [x] pure functions
- [ ] recursive functions
- [ ] higher-order functions

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is `[e.target.id]` called in this code snippet?

```javascript
const handleChange = (e) => {
  setState((prevState) => ({ ...prevState, [e.target.id]: e.target.value }));
};
```

- [ ] a computed property name
- [ ] a set value
- [x] a dynamic key
- [ ] a JSX code string

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the name of this component?

```javascript
class Clock extends React.Component {
  render() {
    return <h1>Look at the time: {time}</h1>;
  }
}
```

- [x] Clock
- [ ] It does not have a name prop.
- [ ] React.Component
- [ ] Component

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is sent to an `Array.map()` function?

- [x] a callback function that is called once for each element in the array
- [ ] the name of another array to iterate over
- [ ] the number of times you want to call the function
- [ ] a string describing what the function should do

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why is it a good idea to pass a function to `setState` instead of an object?

- [ ] It provides better encapsulation.
- [ ] It makes sure that the object is not mutated.
- [ ] It automatically updates a component.
- [x] `setState` is asynchronous and might result in out of sync values.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

**Explanation:** Because `this.props` and `this.state` may be updated asynchronously, you should not rely on their values for calculating the next state.

#### Q. What package contains the render() function that renders a React element tree to the DOM?

- [ ] `React`
- [x] `ReactDOM`
- [ ] `Render`
- [ ] `DOM`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you set a default value for an uncontrolled form field?

- [ ] Use the `value` property.
- [x] Use the `defaultValue` property.
- [ ] Use the `default` property.
- [ ] It assigns one automatically.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What do you need to change about this code to get it to run?

```js
const clock = (props) => {
  return <h1>Look at the time: {props.time}</h1>;
};
```

- [ ] Add quotes around the return value
- [ ] Remove `this`
- [ ] Remove the render method
- [x] Capitalize `clock`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

**Explanation:** In JSX, lower-case tag names are considered to be HTML tags.

#### Q. Which Hook could be used to update the document\'s title?

- [x] `useEffect(function updateTitle() { document.title = name + ' ' + lastname; });`
- [ ] `useEffect(() => { title = name + ' ' + lastname; });`
- [ ] `useEffect(function updateTitle() { name + ' ' + lastname; });`
- [ ] `useEffect(function updateTitle() { title = name + ' ' + lastname; });`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which function from React can you use to wrap Component imports to load them lazily?

- [ ] `fallback`
- [ ] `split`
- [x] `lazy`
- [ ] `memo`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you invoke setDone only when component mounts, using hooks?

```javascript
function MyComponent(props) {
  const [done, setDone] = useState(false);

  return <h1>Done: {done}</h1>;
}
```

- [ ] `useEffect(() => { setDone(true); });`
- [x] `useEffect(() => { setDone(true); }, []);`
- [ ] `useEffect(() => { setDone(true); }, [setDone]);`
- [ ] `useEffect(() => { setDone(true); }, [done, setDone]);`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Currently, `handleClick` is being called instead of passed as a reference. How do you fix this?

```javascript
<button onClick={this.handleClick()}>Click this</button>
```

- [ ] `<button onClick={this.handleClick.bind(handleClick)}>Click this</button>`
- [ ] `<button onClick={handleClick()}>Click this</button>`
- [x] `<button onClick={this.handleClick}>Click this</button>`
- [ ] `<button onclick={this.handleClick}>Click this</button>`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which answer best describes a function component?

- [ ] A function component is the same as a class component.
- [x] A function component accepts a single props object and returns a React element.
- [ ] A function component is the only way to create a component.
- [ ] A function component is required to create a React component.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which library does the `fetch()` function come from?

- [ ] FetchJS
- [ ] ReactDOM
- [x] No library. `fetch()` is supported by most browsers.
- [ ] React

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What will happen when this useEffect Hook is executed, assuming name is not already equal to John?

```javascript
useEffect(() => {
  setName('John');
}, [name]);
```

- [ ] It will cause an error immediately.
- [ ] It will execute the code inside the function, but only after waiting to ensure that no other component is accessing the name variable.
- [x] It will update the value of name once and not run again until name is changed from the outside.
- [ ] It will cause an infinite loop.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which choice will not cause a React component to rerender?

- [ ] if the component calls `this.setState(...)`
- [ ] the value of one of the component\'s props changes
- [ ] if the component calls `this.forceUpdate()`
- [x] one of the component\'s siblings rerenders

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. You have created a new method in a class component called handleClick, but it is not working. Which code is missing?

```javascript
class Button extends React.Component{

  constructor(props) {
    super(props);
    // Missing line
  }

  handleClick() {...}
}
```

- [ ] `this.handleClick.bind(this);`
- [ ] `props.bind(handleClick);`
- [ ] `this.handleClick.bind();`
- [x] `this.handleClick = this.handleClick.bind(this);`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. React does not render two sibling elements unless they are wrapped in a fragment. Below is one way to render a fragment. What is the shorthand for this?

```javascript
<React.Fragment>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
</React.Fragment>
```

- [ ] A

```javascript
<...>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
</...>
```

- [ ] B

```javascript
<//>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
<///>
```

- [x] C

```javascript
<>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
</>
```

- [ ] D

```javascript
<Frag>
  <h1>Our Staff</h1>
  <p>Our staff is available 9-5 to answer your questions</p>
</Frag>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. If you wanted to display the count state value in the component, what do you need to add to the curly braces in the `h1`?

```javascript
class Ticker extends React.component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return <h1>{}</h1>;
  }
}
```

- [x] this.state.count
- [ ] count
- [ ] state
- [ ] state.count

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Per the following code, when is the Hello component assigned to greeting?

```javascript
const greeting = isLoggedIn ? <Hello /> : null;
```

- [ ] never
- [x] when `isLoggedIn` is true
- [ ] when a user logs in
- [ ] when the Hello function is called

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In the following code block, what type is orderNumber?

```javascript
ReactDOM.render(<Message orderNumber="16" />, document.getElementById('root'));
```

- [x] string
- [ ] boolean
- [ ] object
- [ ] number

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. You have added a style property to the `h1` but there is an unexpected token error when it runs. How do you fix this?

```javascript
const element = <h1 style={ backgroundColor: "blue" }>Hi</h1>;
```

- [ ] `const element = <h1 style="backgroundColor: "blue""}>Hi</h1>;`
- [x] `const element = <h1 style={{backgroundColor: "blue"}}>Hi</h1>;`
- [ ] `const element = <h1 style={blue}>Hi</h1>;`
- [ ] `const element = <h1 style="blue">Hi</h1>;`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which function is used to update state variables in a React class component?

- [ ] `replaceState`
- [ ] `refreshState`
- [ ] `updateState`
- [x] `setState`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Consider the following component. What is the default color for the star?

```javascript
const Star = ({ selected = false }) => <Icon color={selected ? 'red' : 'grey'} />;
```

- [ ] black
- [ ] red
- [x] grey
- [ ] white

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the difference between the click behaviors of these two buttons(assuming that this.handleClick is not bound correctly)

```javascript
  A. <button onClick=this.handleClick>Click Me</button>
  B. <button onClick={event => this.handleClick(event)}>Click Me</button>
```

- [ ] `Button A will not have access to the event object on click of the button`
- [x] `Button A will not fire the handler this.handleClick successfully`
- [ ] `There is no difference`
- [ ] `Button B will not fire the handler this.handleClick successfully`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How would you add to this code, from React Router, to display a component called About?

```javascript
<Route path="/:id" />
```

- [x] A

```javascript
<Route path="/:id">
  {' '}
  <About />
</Route>
```

- [ ] B

```javascript
<Route path="/tid" about={Component} />
```

- [ ] C

```javascript
<Route path="/:id" route={About} />
```

- [ ] D

```javascript
<Route>
  <About path="/:id" />
</Route>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which class-based component is equivalent to this function component?

```javascript
const Greeting = ({ name }) => <h1>Hello {name}!</h1>;
```

- [ ] A

```javascript
class Greeting extends React.Component {
  constructor() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
```

- [ ] B

```javascript
class Greeting extends React.Component {
  <h1>Hello {this.props.name}!</h1>;
}
```

- [x] C

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>Hello {this.props.name}!</h1>;
  }
}
```

- [ ] D

```javascript
class Greeting extends React.Component {
  render({ name }) {
    return <h1>Hello {name}!</h1>;
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Give the code below, what does the second argument that is sent to the render function describe?

```javascript
ReactDOM.render(
  <h1>Hi<h1>,
    document.getElementById('root')
)
```

- [x] where the React element should be added to the DOM
- [ ] where to call the function
- [ ] where the root component is
- [ ] where to create a new JavaScript file

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why should you use React Router\'s Link component instead of a basic `<a>` tag in React?

- [ ] The link component allows the user to use the browser\'s `Back` button.
- [ ] There is no difference--the `Link` component is just another name for the `<a>` tag.
- [ ] The `<a>` tag will cause an error when used in React.
- [x] The `<a>` tag triggers a full page reload, while the `Link` component does not.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the first argument, `x`, that is sent to the `createElement` function?

```javascript
React.createElement(x, y, z);
```

- [x] the element that should be created
- [ ] the order in which this element should be placed on the page
- [ ] the properties of the element
- [ ] data that should be displayed in the element

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which class-based lifecycle method would be called at the same time as this effect Hook?

```javascript
useEffect(() => {
  // do things
}, []);
```

- [ ] componentWillUnmount
- [x] componentDidMount
- [ ] render
- [ ] componentDidUpdate

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the name of the base component of this component?

```javascript
class Comp extends React.Component {
  render() {
    return <h1>Look at the time: {time}</h1>;
  }
}
```

- [ ] Comp
- [ ] h1
- [ ] React.Component
- [x] Component

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When using a portal, what is the first argument?

```javascript
ReactDOM.createPortal(x, y);
```

- [ ] the current state
- [x] the element to render
- [ ] the App component
- [ ] the page

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is `setCount`?

```javascript
const [count, setCount] = useState(0);
```

- [ ] the initial state value
- [ ] a variable
- [ ] a state object
- [x] a function to update the state

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the use of map function below?

```javascript
const database = [{ data: 1 }, { data: 2 }, { data: 3 }];
database.map((user) => <h1>{user.data}</h1>);
```

- [ ] gives a map of all the entries in database
- [x] returns a heading tag for every entry in the database containing it\'s data
- [ ] returns one heading tag for all the entries in database
- [ ] checks which entry in the database is suitable for heading tag

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Describe what is happening in this code?

```javascript
const { name: firstName } = props;
```

- [ ] It is creating a new object that contains the same name property as the props object.
- [ ] It is assigning the value of the props object\'s firstName property to a constant called name.
- [ ] It is retrieving the value of props.name.firstName.
- [x] It is assigning the value of the props object\'s name property to a constant called firstName.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is wrong with this code?

```javascript
const MyComponent = ({ names }) => (
  <h1>Hello</h1>
  <p>Hello again</p>
);
```

- [ ] React components cannot be defined using functions.
- [x] React does not allow components to return more than one element.
- [ ] The component needs to use the return keyword.
- [ ] String literals must be surrounded by quotes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When using a portal, what is the second argument?

```javascript
ReactDOM.createPortal(x, y);
```

- [ ] the App component
- [ ] the page
- [ ] the current state
- [x] the DOM element that exists outside of the parent component

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Given this code, what will be printed in the `<div>` tag?

```javascript
const MyComponent = ({ children }) => (
  <div>{children.length}</div>
);
...
<MyComponent>
<p>
  Hello <span>World!</span>
</p>
<p>Goodbye</p>
</MyComponent>
```

- [ ] It will produce an error saying "cannot read property "length" of undefined."
- [ ] 1
- [ ] undefined
- [x] 2

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is this pattern called?

```javascript
const [count, setCount] = useState(0);
```

- [ ] object destructuring
- [x] array destructuring
- [ ] spread operating
- [ ] code pushing

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the first file loaded by the browser in a basic React project?

- [ ] src/App.js
- [ ] src/index.js
- [ ] public/manifest.json
- [x] public/index.html

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. The code below is rendering nothing and generate this error: "ReactDOM is not defined." How do you fix this issue?

```javascript
import React from 'react';
import { createRoot } from 'reactjs-dom';

const element = <h1>Hi</h1>;
// Note: error on the line below
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element);
```

- [x] `createRoot(document.getElementById("root"));`
- [ ] `ReactDOM(element, document.getElementById("root"));`
- [ ] `renderDOM(element, document.getElementById("root"));`
- [ ] `DOM(element, document.getElementById("root"));`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In this component, how do you display whether the user was logged in or not?

```javascript
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      The user is:
    </div>
  );
}
```

- [ ] `The user is loggedIn ? logged in : not logged in.`
- [ ] Write a function to check the login status.
- [ ] `The user is {isLoggedIn = "no"}.`
- [x] `The user is {isLoggedIn ? "logged in." : "not logged in"}.`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. You are rendering a list with React when this warning appears in the console: "Warning: Each child in a list should have a unique 'key' prop." How do you fix this issue?

- [ ] Add a key prop with the same value to each item in the list
- [ ] Clear the console warnings
- [ ] Use the UseId hook to generate a unique key for each element in the list
- [x] When iterating over the list items, add a unique property to each list item.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Add the code that will fire the photon torpedoes when the button is clicked.

```javascript
class StarTrekkin extends React.Component {
  firePhotonTorpedoes(e) {
    console.log('pew pew');
  }
  render() {
    return; // Missing code
  }
}
```

- [ ] `<button onClick={firePhotonTorpedoes()}>Pew Pew</button>`
- [ ] `<button onClick={firePhotonTorpedoes}>Pew Pew</button>`
- [ ] `<button onClick={this.firePhotonTorpedoes()}>Pew Pew</button>`
- [x] `<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the process of deciding whether an update is necessary?

- [ ] shadow DOM
- [ ] fiber
- [x] reconciliation
- [ ] setting state

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the browser extension called that React developers use to debug applications?

- [x] React Developer Tools
- [ ] React Tooling Add-on
- [ ] React Codewatch
- [ ] React Debug

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the JavaScript syntax extension that is commonly used to create React elements?

- [ ] HTML
- [ ] JavaScriptX
- [x] JSX
- [ ] React JavaScript

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How might you check property types without using Flow or TypeScript?

- [ ] Check Manually.
- [ ] Use `prop-helper`.
- [x] use `prop-types`.
- [ ] user `checker-types`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you add an id of heading to the following h1 element?

```javascript
let dish = <h1>Mac and Cheese</h1>;
```

- [ ] `let dish = <h1 id={heading}>Mac and Cheese</h1>;`
- [x] `let dish = <h1 id="heading">Mac and Cheese</h1>;`
- [ ] `let dish = <h1 id:"heading">Mac and Cheese</h1>;`
- [ ] `let dish = <h1 class="heading">Mac and Cheese</h1>;`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What value of button will allow you to pass the name of the person to be hugged?

```javascript
class Huggable extends React.Component {
  hug(id) {
    console.log("hugging " + id);
  }
  render() {
    let name = "kitten";
    let button = // Missing code
    return button;
  }
}
```

- [ ] `<button onClick={(name) => this.hug(name)}>Hug Button</button>;`
- [ ] `<button onClick={this.hug(e, name)}>Hug Button</button>;`
- [ ] `<button onClick={(e) => hug(name, e)}>Hug Button</button>;`
- [x] `<button onClick={(e) => this.hug(name, e)}>Hug Button</button>;`

**Explanation:**
This question test knowledge of react class components. You need to use `this` in order to call methods declared inside class components.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What syntax do you use to create a component in React?

- [ ] a generator
- [x] a function or a class
- [ ] a service worker
- [ ] a tag

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

**Explanation:**
React Components are like functions that return HTML elements. Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components.

#### Q. You want to disable a button so that it does not emit any events onClick. Which prop do you use to acomplish this?

- [ ] onBlur
- [ ] onPress
- [ ] defaultValue
- [x] disabled

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In this function, which is the best way to describe the Dish component?

```javascript
function Dish() {
  return (
    <>
      <Ingredient />
      <Ingredient />
    </>
  );
}
```

- [ ] child component
- [x] parent component
- [ ] nested component
- [ ] sibling component

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When does the componentDidMount function fire?

- [x] right after the component is added to the DOM
- [ ] before the component is added to the DOM
- [ ] right after the component is updated
- [ ] right after an API call

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What might you use webpack for in React development?

- [ ] to fetch remote dependencies used by your app
- [x] to split your app into smaller chunks that can be more easily loaded by the browser
- [ ] to format your code so that it is more readable
- [ ] to ensure your app is not vulnerable to code injection

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When using the React Developer Tools Chrome extension, what does it mean if the React icon is red?

- [x] You are using the development build of React.
- [ ] You are using the production build of React.
- [ ] You are using webpack.
- [ ] You are using Create React App.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How would you modify the constructor to fix this error: "ReferenceError: Must call super constructor in derived class before accessing 'this'..."?

```javascript
class TransIsBeautiful extends React.Component {
  constructor(props){
  // Missing line
  console.log(this) ;
  }
  ...
}
```

- [ ] render(props);
- [x] super(props);
- [ ] super(this);
- [ ] this.super();

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which language can you not use with React?

- [x] Swift.
- [ ] JSX.
- [ ] Javascipt.
- [ ] TypeScript.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. This code is part of an app that collects Pokemon. How would you print the list of the ones collected so far?

```javascript
constructor(props) {
    super(props);
    this.state = {
        pokeDex: []
    };
}
```

- [ ] console.log(props.pokeDex);
- [ ] console.log(this.props.pokeDex);
- [ ] console.log(pokeDex);
- [x] console.log(this.state.pokeDex);

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would be the result of running this code?

```javascript
function add(x = 1, y = 2) {
  return x + y;
}

add();
```

- [ ] null
- [x] 3
- [ ] 0
- [ ] undefined

![image](https://user-images.githubusercontent.com/62549240/160531605-bf8790d5-5eb9-4291-a9bd-4232f2fd7b6e.png?raw=png)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why might you use a React.ref?

- [ ] to refer to another JS file
- [ ] to bind the function
- [ ] to call a function
- [x] to directly access the DOM node

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What pattern is being used in this code block?

```javascript
const { tree, lake } = nature;
```

- [ ] function defaults
- [ ] array destructuring
- [ ] PRPL pattern
- [x] destructuring assignment

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How would you correct this code block to make sure that the sent property is set to the Boolean value false?

```javascript
ReactDom.render(
  <Message sent=false />,
  document.getElementById("root")
);
```

- [x] A

```javascript
<Message sent={false} />,
```

- [ ] B

```javascript
ReactDom.render(<Message sent="false" />, document.getElementById('root'));
```

- [ ] C

```javascript
<Message sent="false" />,
```

- [ ] D

```javascript
ReactDom.render(<Message sent="false" />, document.getElementById('root'));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. This code is part of an app that collects Pokemon. The useState hook below is a piece of state holding onto the names of the Pokemon collected so far. How would you access the collected Pokemon in state?

```javascript
const PokeDex = (props) => {
  const [pokeDex, setPokeDex] = useState([]);
  /// ...
};
```

- [ ] props.pokeDex
- [ ] this.props.pokeDex
- [ ] setPokeDex()
- [x] pokeDex

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What would you pass to the onClick prop that wil allow you to pass the initName prop into the greeet handler?

```javascript
const Greeting = ({ initName }) => {
  const greet = (name) => console.log("Hello, " + name + "!");
  return <button onClick={ ... }>Greeting Button </button>
}
```

- [ ] hug
- [ ] this.hug(initName)
- [ ] (name) => this.hug(name)
- [x] () => hug(initName)

Explanation: Apparently the question misstyped `greet` as `hug`. Putting this aside, we can still learn from this question.

- In a function, the global object is the default binding for `this`. In a browser window the global object is [object Window].
  This is a functional Component, so `this` from `this.hug` actually refers to browser window.
  Since it is a functional component, we can directly refer to hug without using `this`.
- To pass a handler to onClick, we should always pass a function rather than execute a function. So we need to use callback here.
  `initName` is available in Greeting\'s function scope, so we can directly supply as an argument to hug().

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the name of the compiler used to transform JSX into JavaScript?

- [x] Babel
- [ ] JSX Editor
- [ ] Browser Buddy
- [ ] ReactDOM

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which hook is used to prevent a function from being recreated on every component render?

- [x] useCallback
- [ ] useMemo
- [ ] useRef
- [ ] useTransition

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why might you use the `useRef` hook?

- [ ] To bind the function
- [ ] To call a function
- [x] To directly access a DOM
- [ ] To refer to another JS file

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of the following is required to use React?

- [x] JavaScript
- [ ] React Router
- [ ] Redux
- [ ] Prop-Types

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the correct way to get a value from context?

- [ ] const value = useContext(MyContext.Consumer)
- [ ] const value = useContext(MyContext.Provider)
- [x] const value = useContext(MyContext)
- [ ] const value = useContext({value: "intiial value"})

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why is ref used?

- [ ] to bind function
- [ ] to call function
- [x] to directly access DOM node
- [ ] to refer to another JS file

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Choose the method which should be overridden to stop the component from updating?

- [ ] componentDidMount
- [ ] componentDidUpdate
- [ ] willComponentUpdate
- [x] shouldComponentUpdate

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the functionality of a “webpack” command?

- [x] Runs react local development server
- [ ] Transfers all JS files to down into one file
- [ ] A module builder
- [ ] None of the above

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Choose the method which is not a part of ReactDOM?

- [ ] ReactDOM.createPortal()
- [ ] ReactDOM.hydrate()
- [x] ReactDOM.destroy()
- [ ] ReactDOM.findDOMnode()

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In react, the key should be?

- [x] Unique among his siblings
- [ ] Unique in DOM
- [ ] Does not requires to be unique
- [ ] all of the above

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which company developed ReactJS?

- [ ] Google
- [x] Meta (ex Facebook)
- [ ] Apple
- [ ] Twitter

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Choose the library which is most often associated with react?

- [ ] Chai
- [ ] Sinon
- [x] Jest
- [ ] Mocha

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What of the following is used in React.js to increase performance?

- [ ] Original DOM
- [x] Virtual DOM
- [ ] Both of the above
- [ ] None of the above

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Among The following options, choose the one which helps react for keeping their data uni-directional?

- [ ] DOM
- [x] flux
- [ ] JSX
- [ ] Props

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is JSX?

- [ ] A testing library for React.
- [x] An HTML-like language that compiles to JavaScript.
- [ ] An HTML-like language that compiles to CSS.
- [ ] An HTTP API library for React.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is one way that JSX and HTML differ?

- [x] JSX uses className instead of class. 
- [ ] JSX uses `<container>` instead of `<div>`.
- [ ] HTML is for creating a user interface.
- [ ] JSX uses `<textinput>` instead of `<input>`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why does React typically require a build step?

- [ ] To transpile HTML to JSX
- [ ] To transpile JSX to CSS
- [ ] To transpile JSX to HTML
- [x] To transpile JSX to Javascript

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why do you have to worry about version conflicts in React, but not need to with native web components?

- [ ] Native web components have an adapter layer.
- [ ] Native web components don\'t use JavaScript.
- [ ] When a new version of React is released, you can\'t use old versions.
- [x] React has a runtime, web components don\'t.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What pattern does React use for handling data flows?

- [x] One-way binding
- [ ] Auto-binding
- [ ] Three-way binding
- [ ] Two-way binding

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is a benefit of React\'s single file approach?

- [ ] Designers have a separate file to work with.
- [ ] It enhances security.
- [ ] It honors the rule of least power.
- [x] You can read, understand, and work with each autonomous file in isolation.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why is React inherently more flexible than many popular competitors?

- [x] React is an library. 
- [ ] React\'s API is HTML-oriented instead of JavaScript-oriented.
- [ ] React is a comprehensive framework.
- [ ] React embeds HTTP calls, testing, and internationalization.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the benefit of React\'s virtual DOM?

- [ ] It transpiles JSX before converting to DOM nodes.
- [ ] It reduces React\'s bundle size.
- [ ] It fascilitates inter-component communication via JSON.
- [x] It improves performance by minimizing DOM changes.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is a benefit of React\'s library approach mentioned in this module?

- [ ] Clear and comprehensive opinions are built in
- [ ] Enforced consistency
- [x] It\'s light-weight and configurable
- [ ] Less setup overhead

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When do we store variables on the component itself (vs on a component instance)

- [x] When the variable is not related on a component instance
- [ ] When the variable is a fixed constant value
- [ ] When the variable holds a function

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What can we do if components A and B are siblings and they require access to the same state element?

- [ ] Place the state in either A or B
- [x] Place the state in the parent component of A and B
- [ ] Place the state in a third component C that is a sibling to A and B
- [ ] Restructure the application to have A and B be related differently

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What\'s the right syntax to assign the function doSomething as the handler of a click event?

- [ ] onClick={() => doSomething}
- [x] onClick={doSomething}
- [ ] onClick={doSomething()}

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When is not a good idea to introduce a new state element?

- [ ] When that element is itself an array or object
- [ ] When a change on that element should drive a change in the UI
- [ ] When other elements needs to compute their value based on this new element
- [x] When that element can be computed from other elements

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. We have a boolean X. We want to render component A if X is true, and component B if X is false. Which is correct?

- [ ] <{ X ? A : B } />
- [x] { X ? <A /> : <B /> }
- [ ] { if (X) { A } else { B } }
- [ ] { if  X then A else B }

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What function can be used to change the state of a React component?

- [ ] this.state = {}
- [x] this.setState
- [ ] this.changeState

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What instance property can be used to access the properties of a class component?

- [ ] this.properties
- [ ] this.attrs
- [x] this.props
- [ ] this.attributes

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the format of the data returned by the Github API?

- [ ] YAML
- [ ] XML
- [x] JSON

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you get a random number in JavaScript?

- [x] Math.random()
- [ ] Number.random()
- [ ] rand()

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why is JSX used in React applications?

- [ ] Because HTML is xml-like
- [x] To specify the composition of React components
- [ ] To be able to mix markup and code together

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does a JSX expression compile to?

- [ ] HTML
- [ ] JSX byte code
- [x] A call to the React.createElement function
- [ ] A call to the ReactDOM.render function

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the primary technique for passing data out of a React component?

- [ ] Use a JavaScript class component
- [x] Pass the data to a function passed in as a prop
- [ ] Dispatch an action to a state container
- [ ] Return the data from the render method

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the name of React\'s normalized event abstraction?

- [x] SyntheticEvent
- [ ] on*
- [ ] Event

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How can routing be added to a React application?

- [ ] By implementing server-side rendering
- [ ] By using the React.route function
- [ ] By using the <Route /> component
- [x] By adding a HTML5 pushState API based router library

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. The facility that allows a component to have local, mutable data is called?

- [ ] Function components
- [ ] Webpack
- [ ] Props
- [x] State

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. React is...

- [ ] an optimizing compiler for JavaScript.
- [x] a client-side library providing rendering and event handling.
- [ ] a comprehensive client-side application framework.
- [ ] a library that represents asynchronous data streams with observables.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. A Redux 'action' is...

- [x] the same thing as a model-view-intent 'intent'.
- [ ] the same thing as a model-view-intent 'model'.
- [ ] the same thing as a model-view-intent 'view'.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of the following is NOT provided by React?

- [ ] Cross-browser support
- [ ] An event handing system
- [ ] Server-side rendering
- [x] A router

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When working with the useState hook, what is the first parameter passed to useState?

- [ ] useState does not take any parameters
- [ ] The timeout value for how long the state will be set
- [ ] A lambda function whose purpose is to set the value of state
- [x] The initial value of the state

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. If the dependency array that is passed into the useEffect React Hook is an empty array, what is the expected result?

- [ ] The function passed into the useEffect hook will never be executed.
- [x] The function passed into the useEffect hook will be executed one time only.
- [ ] The function passed into the useEffect hook will not be affected.
- [ ] The function passed into the useEffect hook will be executed on every render.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When building a React tree of components, what does "prop drilling" refer to in the React app itself?

- [ ] Referencing a property by reference instead of by value
- [ ] Deleting a property so deep it can never be recovered
- [x] Passing properties through one or more layers of a component hierarchy

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In a reducer function, what is the reason for spreading state (...state) as part of the return of that function?

- [ ] So you can visualize the state in the debugger making it easier to find bugs
- [x] To guarantee that all existing properties of state are copied into the new returned state
- [ ] To make sure that no previously passed in state values return to the caller of the reducer

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the second parameter of the useReducer React hooks best described as?

- [ ] The reducer function
- [x] The initial state
- [ ] A call the parent reducer
- [ ] The cancellation token passed to the reducer

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the default return value for a typical reducer function that you would associate with useReducer?

- [ ] A state array
- [ ] null
- [x] state
- [ ] An empty string

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In a class component, what call would you use if you want to reference a DOM element?

- [ ] React.initRef()
- [ ] React.newRef()
- [x] React.createRef()
- [ ] React.useRef()

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. You have an empty array as the second parameter to your useEffect hook. Which statement is true?

- [ ] in a class component lifecycle, componentDidMount will be called on every component render.
- [ ] in a class component lifeycle, componentDidUpdate will never be called more than once.
- [x] In a class component lifecycle, componentDidMount will get called once.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When you build new React Hooks that contain other combined React Hooks, which statement is true?

- [ ] Combined React Hooks cannot contain useEffect, but they can contain all other React Hooks.
- [ ] Combined React Hooks cannot be nested with other combined React Hooks.
- [x] Combined React Hooks can contain their own useEffect as well as other React Hooks.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When you create new React Custom Hooks, what is true about passing in parameters to these new Custom Hooks?

- [ ] Only parameters from React Hooks that are being combined can be passed into the custom React Hook.
- [ ] Only const objects can be passed into a custom React Hook.
- [x] Any JavaScript object can be passed to a custom React Hook.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is selective hydration in React 18?

- [ ] Hydrating only components that have changed since the last server render
- [x] React 18\'s ability to start hydrating parts of the page before the full HTML has streamed in, and to prioritize hydrating components the user is interacting with
- [ ] A technique for skipping hydration on components wrapped in `React.lazy`
- [ ] A Suspense feature that hydrates child components before their parent

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the purpose of `React.lazy()` and `Suspense` together?

- [ ] To run expensive computations lazily on first access
- [ ] To stream data from the server without blocking the initial render
- [x] To dynamically import a component so it is loaded only when needed, with `Suspense` providing a fallback UI while the chunk loads
- [ ] To debounce re-renders of expensive components until the user stops interacting

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is code splitting in React, and which bundler feature enables it?

- [ ] Splitting CSS and JavaScript into separate bundles at compile time
- [x] Breaking the application bundle into smaller chunks that are loaded on demand; enabled by dynamic `import()` which bundlers like webpack and Vite use to create split points
- [ ] Separating component logic from presentation for better testability
- [ ] Splitting a single large component file into multiple smaller files

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the Context API\'s main performance concern, and how can it be mitigated?

- [ ] Context values are synchronous and block the event loop; use `useTransition` to fix this
- [x] Any component consuming a context re-renders whenever the context value changes, even if it only uses part of the value; mitigations include splitting contexts, memoizing the context value with `useMemo`, or using a state management library with fine-grained subscriptions
- [ ] Context causes memory leaks because consumers are never garbage collected
- [ ] Context doesn\'t work in concurrent mode; use Redux instead

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why does `React.StrictMode` double-invoke render functions and state initializers in development?

- [ ] It is a bug in React that was fixed in React 18
- [ ] React renders each component twice to compare outputs for accessibility validation
- [x] React intentionally double-invokes them to detect side effects that rely on rendering being a pure, idempotent operation — helping surface bugs early; this only occurs in development mode
- [ ] React double-invokes functions to warm up the JIT compiler for better runtime performance

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the significance of returning a cleanup function from `useEffect`?

- [ ] It resets state to its initial value when the dependency changes
- [ ] It prevents the component from unmounting
- [x] It runs before the next effect execution or when the component unmounts, allowing you to cancel subscriptions, clear timers, or abort fetch requests to prevent memory leaks and stale closures
- [ ] It tells React to skip the current render cycle

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is a stale closure problem in React Hooks, and when does it occur?

- [ ] A closure that references a component that has been unmounted
- [x] When a `useEffect`, `useCallback`, or event handler captures a variable (e.g., state or prop) at the time of its creation and later accesses an outdated version of that variable because the function was not re-created when the dependency changed
- [ ] A performance issue caused by creating too many closures inside a render function
- [ ] When `useMemo` returns a memoized value from a previous render instead of recomputing

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the `useImperativeHandle` hook used for?

- [ ] To imperatively update state without triggering a re-render
- [ ] To expose internal component state to a parent via context
- [x] To customize the instance value exposed to parent components when using `forwardRef`, allowing fine-grained control over what imperative methods the parent can call
- [ ] To bypass React\'s synthetic event system for native DOM event handling

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is `forwardRef` in React and why is it needed?

- [ ] To forward props from a parent to a deeply nested component without prop drilling
- [x] To allow a parent component to pass a ref through a functional component down to a DOM element or class component inside it, since refs are not automatically forwarded through functional components
- [ ] To create a reference to a component\'s rendered output for testing
- [ ] To share a single ref object between multiple sibling components

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How does `useLayoutEffect` differ from `useEffect`?

- [ ] `useLayoutEffect` runs asynchronously after the browser paints; `useEffect` runs synchronously before paint
- [x] `useLayoutEffect` fires synchronously after all DOM mutations but before the browser paints, making it suitable for measuring layout or imperatively modifying the DOM; `useEffect` fires asynchronously after paint
- [ ] `useLayoutEffect` replaces `componentDidMount`; `useEffect` replaces `componentDidUpdate`
- [ ] They are identical except `useLayoutEffect` works only in SSR environments

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When rendering very large lists in React, what is the recommended optimization technique?

- [ ] Using `React.memo` on each list item to prevent all re-renders
- [ ] Splitting the list into pages and only rendering the current page
- [x] Virtualization (windowing) — rendering only the items currently visible in the viewport using libraries like `react-window` or `react-virtual`, dramatically reducing the number of DOM nodes
- [ ] Moving the list to a Web Worker thread for off-main-thread rendering

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the purpose of the `scheduler` package used internally by React?

- [ ] To schedule HTTP requests in the correct order during SSR
- [ ] To manage Redux action dispatch timing
- [x] To prioritize and schedule units of work based on urgency, allowing React to interrupt low-priority rendering and handle high-priority user interactions first
- [ ] To debounce React state updates across multiple components

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the problem that React Query (TanStack Query) solves that `useEffect` + `useState` does not handle well?

- [ ] It prevents unnecessary re-renders caused by global state changes
- [ ] It replaces `useEffect` for managing component lifecycle
- [x] React Query handles server-state concerns such as caching, background refetching, deduplication, stale-while-revalidate, and cache invalidation — all of which are complex and error-prone to implement manually
- [ ] It provides type-safe API calls without needing TypeScript

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the purpose of `React.createPortal()`?

- [ ] To teleport state from one component tree to another
- [x] To render a component\'s children into a different DOM node outside of the parent component\'s DOM hierarchy, while preserving React\'s event bubbling through the component tree
- [ ] To create a new React root for micro-frontend integration
- [ ] To render components on the server and inject them into a specific DOM node

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the compound component pattern in React?

- [ ] A pattern where multiple reducers are combined into a single global store
- [ ] A design pattern that wraps third-party components to add additional behaviour
- [x] A pattern where a parent component manages shared state and exposes child components (often via context) that implicitly share that state, allowing flexible composition — similar to how `<select>` and `<option>` work in HTML
- [ ] A pattern for combining multiple custom hooks into a single reusable hook

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the render props pattern and what problem does it solve?

- [ ] A pattern that returns JSX from a callback passed as an event handler prop
- [x] A technique where a component accepts a function as a prop (or as `children`) and calls it to determine what to render, enabling cross-cutting logic reuse across components without HOCs — replaced in many cases by custom hooks but still useful for render-time data injection
- [ ] A pattern for memoizing render output to prevent re-renders
- [ ] A way to pass rendered JSX elements as props to child components

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is a Higher-Order Component (HOC) and what are its modern alternatives?

- [ ] A component that renders at a higher z-index than its siblings
- [x] A function that takes a component and returns a new component with additional behaviour, used historically for cross-cutting concerns (auth, logging, theming); modern alternatives are custom Hooks, which avoid prop collision and wrapper nesting issues
- [ ] A component that uses `React.createContext` to provide data to its subtree
- [ ] A class component that extends `React.PureComponent` for performance

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is `React.PureComponent` and how does it differ from `React.Component`?

- [ ] `PureComponent` uses `useEffect` internally for lifecycle management
- [x] `PureComponent` implements `shouldComponentUpdate` with a shallow comparison of props and state, preventing re-renders when they haven\'t changed; `Component` always re-renders on `setState` calls regardless of whether the value actually changed
- [ ] `PureComponent` supports concurrent mode; `Component` does not
- [ ] `PureComponent` is deprecated in React 18 and replaced by `React.memo`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does "lifting state up" mean and when is it appropriate?

- [ ] Moving state from class components to functional components during refactoring
- [ ] Storing component state in a global Redux store
- [x] Moving state to the closest common ancestor of the components that need to share it, so it can be passed down as props — appropriate when sibling or cousin components need to synchronize their state
- [ ] Extracting derived state calculations to a parent component to reduce child renders

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does `flushSync` do in React 18 and when should it be used?

- [ ] It synchronously cancels all pending state updates in the queue
- [x] It forces React to flush all pending state updates synchronously inside the provided callback instead of batching them — useful when you need the DOM to update immediately before measuring an element or setting focus
- [ ] It synchronously re-renders the entire React tree from the root
- [ ] It disables automatic batching for a specific component subtree

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is streaming SSR in React 18 and what is its advantage over traditional SSR?

- [ ] A technique that streams assets (CSS, JS) before HTML is sent
- [x] React 18 streams HTML to the browser progressively as content is ready; combined with Suspense, non-suspended content is sent first and suspended sections stream in once data resolves — reducing TTFB and improving perceived performance
- [ ] A pattern where server components stream updates to the client via WebSockets
- [ ] Sending component bundles over HTTP/2 streams instead of in a single JS file

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the purpose of the `useId` hook introduced in React 18?

- [ ] To generate globally unique component IDs for Redux state slices
- [ ] To create stable keys for list items during reconciliation
- [x] To generate unique, stable IDs consistent between server and client renders, preventing hydration mismatches when associating form labels with inputs or ARIA attributes
- [ ] To assign deterministic component identifiers for React DevTools profiling

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When does React\'s `useEffect` cleanup function run, and what are the implications for subscriptions?

- [ ] Only when the component unmounts; subscriptions from prior runs are never cleaned up between renders
- [x] Before every re-execution of the effect when dependencies change AND when the component unmounts; this means every subscription created in an effect must be torn down in its cleanup or multiple active subscriptions will stack up on each re-render
- [ ] Only when the component\'s parent re-renders with new props
- [ ] Only once, after the final render of the component\'s lifetime

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the difference between eager and lazy state initialization in `useState`?

- [ ] Eager initialization runs the state on first render and every re-render; lazy runs only on unmount
- [x] Eager initialization passes a value directly — `useState(computeValue())` — so the expression evaluates on every render even though only the first result is used; lazy initialization passes a function — `useState(computeValue)` — so React calls it only once on mount, which is important for expensive computations
- [ ] Lazy initialization is an async pattern where state is set after a `useEffect` runs
- [ ] They are equivalent — React optimizes both internally to run only once

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In Next.js App Router (built on React Server Components), what is the default rendering strategy and how do you opt into client-side interactivity?

- [ ] All components default to SSR with hydration; add `"use server"` to make them static
- [x] All components are Server Components by default — they render on the server with no client JS shipped; add `"use client"` at the top of a file to opt that component and its import subtree into the client bundle for hydration and interactivity
- [ ] Components default to static generation; add `export const dynamic = "force-dynamic"` for any interactivity
- [ ] All components are client components by default; add `"use server"` to server-render them

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the purpose of the `useOptimistic` hook in React 19?

- [ ] To optimistically memoize state values before they are confirmed by the server
- [x] To immediately update the UI with an optimistic state while an async action (e.g., a server mutation) is in progress, then automatically revert or replace with the real state when the action completes
- [ ] To cache server responses optimistically for instant navigation
- [ ] To schedule state updates at the highest React priority level

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is tree shaking in a React application build, and what is a common pitfall that defeats it?

- [ ] Removing unused CSS class names from component stylesheets at build time
- [x] Eliminating dead (unused) JavaScript code from the final bundle during the build; a common pitfall is importing entire libraries (`import _ from 'lodash'`) instead of specific functions or using barrel files (`index.js`) that re-export everything, making dead-code analysis impossible
- [ ] Removing components from the React tree that have never been rendered
- [ ] Stripping PropTypes validations from production builds

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the purpose of `React.memo` with a custom comparator and what are the risks?

- [ ] The comparator runs before the component renders and can abort rendering if it returns `false`
- [x] The second argument to `React.memo` is a custom `areEqual(prevProps, nextProps)` function; returning `true` skips the re-render; the risk is an incorrect comparator that suppresses necessary re-renders — returning `true` when the UI should update — leading to hard-to-debug stale UI bugs
- [ ] The comparator is used to deeply clone props before passing them to the component
- [ ] React validates the comparator against PropTypes definitions automatically

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How does React\'s event delegation model work, and how did it change in React 17?

- [ ] React attaches event listeners directly to each DOM node; in React 17, it moved them to shadow DOM
- [x] React uses event delegation, attaching a single listener at the root container; prior to React 17, listeners were attached to `document`; React 17 changed this to the root DOM container to allow multiple React versions to coexist and improve interoperability with non-React code
- [ ] React 17 introduced native browser event handling instead of synthetic events
- [ ] React 17 moved event delegation to the `window` object for better iframe compatibility

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does it mean for a React component to be "pure" and why does it matter for concurrent mode?

- [ ] A pure component extends `React.PureComponent` and uses shallow comparison for props
- [x] A pure component produces the same output for the same props/state and has no side effects during rendering; this is critical for concurrent mode because React may render a component multiple times or interrupt and restart a render — impure rendering logic (mutating external state during render) causes bugs and inconsistencies
- [ ] A pure component does not use any hooks and contains no state
- [ ] A pure component uses `Object.freeze` on its props to enforce immutability

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the `use` hook introduced in React 19 and what can it accept?

- [ ] A replacement for all existing hooks, accepting any hook as its argument
- [ ] A hook that accepts a component and renders it inline
- [x] A hook that accepts a Promise or a React Context object and unwraps the value; Promises cause the component to Suspend until resolved; Context works like `useContext` but can also be called conditionally
- [ ] A hook for consuming browser Web APIs like `fetch` and `navigator`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is a memory leak in a React component and how do you fix it?

- [ ] A component that renders too many DOM nodes, causing the page to slow down
- [x] A leak occurs when a component\'s async operation (fetch, timer, subscription) attempts to update state after the component has unmounted; fixed by returning a cleanup function from `useEffect` that cancels or ignores the async operation using `AbortController` or a boolean flag
- [ ] A leak caused by reading stale props inside a `useCallback` without proper dependencies
- [ ] A component that holds references to large arrays in `useState`, preventing garbage collection

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the purpose of `React.StrictMode`\'s double-mounting behavior in React 18 development mode?

- [ ] To test that components handle multiple simultaneous renders from different roots
- [x] To simulate concurrent mode behavior where components may be mounted, unmounted, and remounted (as can happen with offscreen/cache features), exposing bugs where effects are not properly cleaned up or state is not correctly initialized on remount
- [ ] To verify that all prop types are correctly validated on both initial and second mount
- [ ] To warm up the component cache for faster subsequent renders in production

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How does React Fiber improve on the previous stack-based reconciler?

- [ ] Fiber compiles JSX directly to native browser APIs, bypassing the virtual DOM
- [x] Fiber is a reimplementation of React\'s core reconciliation algorithm that represents work as a linked list of "fiber" units, allowing React to pause, abort, or reuse work and assign priority to updates — enabling concurrent features like time-slicing and Suspense that were impossible with the synchronous call-stack-based reconciler
- [ ] Fiber eliminates the virtual DOM entirely, using a direct DOM diffing strategy
- [ ] Fiber moves all rendering work to a Web Worker to free the main thread

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the difference between `useTransition` and `useDeferredValue` in React 18?

- [ ] `useTransition` is for server transitions; `useDeferredValue` is for client-side deferred values
- [x] `useTransition` lets you mark a state update as non-urgent (wrapping the setter call), giving React permission to interrupt it for higher-priority updates; `useDeferredValue` accepts a value and returns a deferred version of it, deferring re-renders that depend on it — `useTransition` is used when you control the state update; `useDeferredValue` when you only receive the value (e.g., from a prop)
- [ ] They are identical; React recommends using `useDeferredValue` as the modern replacement
- [ ] `useTransition` works with Suspense; `useDeferredValue` only works with synchronous state

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the "unnecessary re-render" problem with object and function literals in JSX props?

- [ ] Object literals in props are automatically memoized by React\'s renderer
- [x] Every time a parent component renders, object literals (`<Child style={{ color: 'red' }} />`) and inline function definitions (`<Child onClick={() => doSomething()} />`) create new references, causing `React.memo` and `PureComponent` comparisons to always fail and the child to re-render; fixed with `useMemo` and `useCallback` respectively
- [ ] This only affects class components, not functional components
- [ ] React performs deep equality on object props automatically to prevent this

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is Zustand and how does it compare to Redux for state management?

- [ ] Zustand is a React-specific CSS-in-JS library; Redux is for global state
- [ ] Zustand requires reducers and actions like Redux but with a smaller API
- [x] Zustand is a minimal, unopinionated state management library with a simple hook-based API that requires no boilerplate (no reducers, actions, or providers); Redux provides a more structured, predictable unidirectional data flow with a larger ecosystem, middleware support, and devtools
- [ ] Zustand is built on top of Context API internally; Redux uses its own subscription model

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In React, what is the primary purpose of using `key` props when rendering a list of components?

- [x] To help React identify which items have changed, been added, or been removed for efficient DOM updates
- [ ] To improve the visual styling of list items
- [ ] To provide a unique ID for CSS targeting
- [ ] To bind event handlers to each individual list item

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of the following is the primary benefit of using React Fragments?

- [x] They allow grouping multiple elements without adding extra nodes to the DOM
- [ ] They improve component performance by caching render results
- [ ] They enable lazy loading of child components on demand
- [ ] They provide a way to apply shared styles across sibling children

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of the following is the primary purpose of the React Context API?

- [x] To share data between components without having to pass props manually at every level
- [ ] To manage HTTP requests and API calls from a central location
- [ ] To provide access to the browser\'s localStorage and sessionStorage
- [ ] To handle client-side routing between pages of the application

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the primary purpose of `props` in React?

- [x] To pass data from a parent component to a child component
- [ ] To store mutable state locally within a component
- [ ] To define the component\'s lifecycle behavior
- [ ] To subscribe components to global state updates

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of the following is the correct way to update state in a React functional component using `useState`?

- [x] `setCount(count + 1)`
- [ ] `this.setState({ count: count + 1 })`
- [ ] `count = count + 1`
- [ ] `setState(count + 1)`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which lifecycle method is invoked immediately after a class component is mounted into the DOM?

- [x] `componentDidMount`
- [ ] `componentWillMount`
- [ ] `componentDidUpdate`
- [ ] `componentWillUpdate`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of the following statements is most accurate regarding the `useEffect` hook?

- [x] It runs after every render by default and is controlled via a dependency array to limit when it re-executes
- [ ] It runs before the component renders and blocks rendering until it completes
- [ ] It can only be used once per functional component
- [ ] It automatically cleans up subscriptions without needing a cleanup return function

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the primary purpose of `React.memo`?

- [x] To memoize a functional component so it only re-renders when its props change
- [ ] To memoize the result of an expensive calculation within a component
- [ ] To memoize a function definition to prevent it from being recreated on every render
- [ ] To create a cached version of a context value

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the primary use case for the `useRef` hook in React?

- [x] To access and interact with DOM elements directly, and to persist mutable values across renders without triggering re-renders
- [ ] To share state between sibling components without using Context
- [ ] To memoize expensive computation results across renders
- [ ] To subscribe to context value changes in functional components

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the primary purpose of React Error Boundaries?

- [x] To catch JavaScript errors anywhere in the child component tree and display a fallback UI instead of crashing the whole application
- [ ] To validate prop types and throw warnings for incorrect types at runtime
- [ ] To prevent unnecessary re-renders when state updates do not change values
- [ ] To handle network errors from API calls made inside components

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the primary use case for `React.forwardRef`?

- [x] To allow a parent component to pass a `ref` to a DOM element inside a child functional component
- [ ] To forward all props from a parent to many child components at once
- [ ] To enable a component to access its nearest ancestor\'s context value
- [ ] To cache refs across renders for performance optimization

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of the following is the correct way to update state using the `useReducer` hook in React?

- [x] By calling the `dispatch` function with an action object describing the type of update
- [ ] By directly mutating the state object returned from `useReducer`
- [ ] By calling `setState()` with a reducer function as its argument
- [ ] By passing the new state value directly to the reducer returned from `useReducer`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the primary purpose of a Higher-Order Component (HOC) in React?

- [x] To reuse component logic by taking a component as an argument and returning a new enhanced component
- [ ] To render multiple components in parallel and merge their outputs
- [ ] To provide direct DOM access without using refs
- [ ] To handle asynchronous rendering using Suspense boundaries

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the primary use case for React Portals?

- [x] To render children into a DOM node that exists outside the parent component\'s DOM hierarchy
- [ ] To teleport state from one component to another without using props
- [ ] To render components on the server and hydrate them on the client
- [ ] To create reusable UI templates that can be instantiated multiple times

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. In React, what is the primary characteristic of a controlled component?

- [x] Its form element value is controlled by React state and updated through an `onChange` event handler
- [ ] It cannot be unmounted once it has been rendered to the DOM
- [ ] It manages its own internal state without interacting with React\'s state system
- [ ] It renders outside the React fiber tree for improved performance

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the primary purpose of React Strict Mode?

- [x] To highlight potential problems by intentionally double-invoking certain functions and detecting unexpected side effects during development
- [ ] To enforce TypeScript type checking across all components at runtime
- [ ] To prevent child components from accessing parent state directly
- [ ] To restrict the use of deprecated lifecycle methods at runtime and throw errors

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of the following best describes the primary purpose of the `useMemo` hook?

- [x] To memoize the result of an expensive calculation so it is only recomputed when its dependencies change
- [ ] To memoize a function reference so it is not recreated on every render
- [ ] To persist a mutable value across renders without causing a re-render
- [ ] To run a side effect and cache its cleanup function across renders

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which scenario is `useCallback` primarily designed to optimize?

- [x] Preventing unnecessary re-renders of child components that receive a callback function as a prop
- [ ] Avoiding duplicate API calls when a component re-mounts due to strict mode
- [ ] Caching the return value of expensive computations between renders
- [ ] Ensuring event handlers fire exactly once per user interaction

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of the following is the primary benefit of using `React.lazy` and `Suspense`?

- [x] They enable code-splitting so components are loaded lazily on demand, reducing the initial bundle size
- [ ] They allow components to suspend rendering indefinitely until external data is cached
- [ ] They enable concurrent rendering of multiple independent component trees
- [ ] They memoize component output to avoid redundant renders on prop equality

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the primary purpose of the `useImperativeHandle` hook in React?

- [x] To customize the instance value exposed to parent components when a component is wrapped in `forwardRef`
- [ ] To imperatively update a child\'s state from the parent without using props
- [ ] To bypass React\'s reconciliation and directly manipulate the DOM node
- [ ] To attach multiple independent refs to a single DOM element

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does the `children` prop in React represent?

- [x] The JSX elements or components passed between the opening and closing tags of a component
- [ ] The list of direct DOM child nodes of the component\'s container element
- [ ] The default props automatically injected into every React component
- [ ] The return value of the parent component\'s render method passed downward

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does the acronym JSX stand for in React development?

- [x] JavaScript XML
- [ ] JavaScript Extension
- [ ] Java Syntax Extension
- [ ] JSON XML Syntax

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which tool is used internally to transpile JSX code into standard JavaScript that browsers can understand?

- [x] Babel
- [ ] Webpack
- [ ] TypeScript Compiler (tsc)
- [ ] ESLint

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How are event names written differently in React JSX compared to standard HTML?

- [x] React uses camelCase (e.g., `onClick`) while HTML uses lowercase (e.g., `onclick`)
- [ ] React uses SCREAMING_SNAKE_CASE while HTML uses lowercase
- [ ] React uses kebab-case while HTML uses camelCase
- [ ] React event names are identical to HTML attribute names

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which method must be used in a React class component to trigger a state update and re-render?

- [x] `setState()`
- [ ] Directly assigning a new value to `this.state`
- [ ] `updateState()`
- [ ] `forceUpdate()`

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is Redux primarily used for in React applications?

- [x] Managing and centralizing application state predictably across the entire app
- [ ] Handling client-side routing between different pages and views
- [ ] Managing CSS-in-JS styling and theming for components
- [ ] Optimizing bundle size through automatic code splitting

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the difference between a React Node, a React Element, and a React Component?

- [x] A React Node is anything renderable (string, number, element, null); a React Element is a plain object describing what to render; a React Component is a function or class that accepts props and returns React Elements
- [ ] A React Node is a class component; a React Element is a functional component; a React Component is a Higher-Order Component
- [ ] All three terms are fully interchangeable and refer to the same concept in React
- [ ] A React Node represents a DOM node; a React Element represents props; a React Component represents state

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the consequence of using array indices as `key` values when rendering lists in React?

- [x] When items are reordered, added, or removed, React may incorrectly reuse DOM nodes, leading to rendering bugs and corrupted component state
- [ ] It causes a runtime error because indices are not guaranteed to be unique across the application
- [ ] It prevents the list from re-rendering at all when items change
- [ ] It has no negative consequence and is the recommended approach for static lists

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are some pitfalls of using React Context for state management?

- [x] All components consuming a context re-render whenever the context value changes, which can cause performance problems in large component trees
- [ ] Context can only hold primitive values like strings and numbers, not objects or arrays
- [ ] Context does not work with functional components and requires class components
- [ ] Context automatically replaces the need for `useState` and `useReducer` throughout the app

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are the rules of React Hooks?

- [x] Hooks must only be called at the top level of a component (not inside loops, conditions, or nested functions) and only from React function components or custom hooks
- [ ] Hooks can be called conditionally but must always be declared before the return statement
- [ ] Hooks can only be used inside class components that extend `React.PureComponent`
- [ ] Hooks must be imported individually and no more than three hooks can be combined in a single component

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the key difference between `useEffect` and `useLayoutEffect` in React?

- [x] `useEffect` runs asynchronously after the browser has painted the screen; `useLayoutEffect` runs synchronously after DOM mutations but before the browser paints, making it suitable for DOM measurements
- [ ] `useEffect` fires only on component mount; `useLayoutEffect` fires on every render including updates
- [ ] `useEffect` is for data fetching side effects; `useLayoutEffect` is for memoizing layout calculations
- [ ] `useLayoutEffect` is deprecated in React 18 and should be replaced with `useEffect` in all modern code

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the purpose of using the callback function format of `setState()` in React class components?

- [x] To ensure the state update is based on the most recent state value, which is critical when multiple updates may be batched together
- [ ] To schedule the state update to run after all synchronous code in the call stack completes
- [ ] To batch multiple state updates from different components into a single coordinated re-render
- [ ] To prevent the state update from triggering an unnecessary re-render of the component

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does the dependency array of `useEffect` control?

- [x] It specifies which values the effect depends on; the effect re-runs only when those values change, and an empty array causes it to run only once on mount
- [ ] It declares which external modules must be imported for the effect to function correctly
- [ ] It lists the state variables that should be reset to their initial values when the effect runs
- [ ] It controls the priority order in which multiple effects run within the same component

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is `forwardRef()` in React used for?

- [x] To allow a functional component to receive a `ref` from its parent and forward it to a DOM element or another child component
- [ ] To pass a ref from a child component up to its parent component
- [ ] To create a persistent ref that survives component unmounting and remounting
- [ ] To automatically forward all props including refs between two components

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you properly reset a component\'s state in React?

- [x] By changing the component\'s `key` prop, which causes React to unmount the old instance and mount a fresh one with its initial state
- [ ] By calling `setState(null)` which automatically clears all state values to their defaults
- [ ] By invoking `React.reset()` and passing a reference to the component
- [ ] By passing a special `resetState` prop to the component indicating it should reinitialize

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Why does React recommend against mutating state directly?

- [x] React relies on reference equality checks to detect state changes; mutating state in place doesn\'t create a new reference, so React won\'t know a re-render is needed
- [ ] Mutating state synchronously crashes the application with a runtime error
- [ ] All React state is stored in a read-only Proxy object that throws a TypeError when mutated
- [ ] Mutating state bypasses the Redux store and breaks the application\'s unidirectional data flow

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is React hydration?

- [x] The process where React attaches event listeners and makes server-rendered static HTML fully interactive on the client side
- [ ] The process of pre-fetching and caching component data before any component renders
- [ ] A technique for streaming React component markup incrementally from server to browser
- [ ] The act of rendering React components inside a dedicated Web Worker thread for performance

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is code splitting in a React application?

- [x] Dividing the JavaScript bundle into smaller chunks that are loaded on demand, improving initial page load time
- [ ] Separating CSS styles from JavaScript logic inside React component files
- [ ] Breaking a large component file into multiple smaller single-responsibility component files
- [ ] Running React rendering simultaneously on both server and client in concurrent mode

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How would you optimize the performance of React Context to reduce unnecessary re-renders?

- [x] Split contexts by concern so updates to one context don\'t re-render consumers of another, and memoize the context value with `useMemo`
- [ ] Always reset context values to `null` when components that use them are not visible
- [ ] Wrap the `Provider` component in `React.memo` to prevent all child re-renders
- [ ] Replace all Context usage with local component state to avoid propagation overhead

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is React Fiber and how is it an improvement over the previous reconciler?

- [x] React Fiber is a complete rewrite of React\'s reconciliation engine that enables incremental rendering, allowing React to pause, abort, or reuse work and prioritize updates by urgency
- [ ] React Fiber is a lightweight version of React optimized specifically for mobile and low-power devices
- [ ] React Fiber is a built-in hook for managing complex asynchronous data-fetching workflows
- [ ] React Fiber is the internal name for React\'s Server Components architecture introduced in React 18

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is React Suspense and what does it enable?

- [x] A mechanism that lets components "suspend" rendering while waiting for something (such as lazy-loaded code or async data), showing a fallback UI in the meantime
- [ ] A way to run React component rendering in a suspended background thread for better performance
- [ ] A replacement for Error Boundaries that catches asynchronous errors thrown during rendering
- [ ] A hook that defers state updates until the browser is idle to avoid blocking the main thread

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is React reconciliation?

- [x] The process by which React compares the previous and new virtual DOM trees to determine the minimal set of actual DOM changes needed
- [ ] The mechanism React uses to synchronize state between multiple browser tabs
- [ ] The process of merging props from parent and child components into a single flat object
- [ ] Resolving conflicts between concurrent state updates triggered by different user interactions

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are Higher-Order Components (HOCs) in React?

- [x] Functions that accept a component as an argument and return a new enhanced component, enabling logic reuse across multiple components
- [ ] Special React built-in components that render above all other components in the virtual DOM tree
- [ ] Components that can only be rendered at the root level of the application
- [ ] Components that automatically provide accessibility attributes to all their children

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the Flux pattern and what are its primary benefits?

- [x] An application architecture for React that enforces unidirectional data flow through Actions, a Dispatcher, Stores, and Views, making state changes predictable and traceable
- [ ] A CSS architecture pattern for managing styles in React component libraries
- [ ] A data-fetching pattern using WebSockets for real-time updates in React applications
- [ ] A build optimization pattern that reduces bundle size by removing unused React features

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are some common React anti-patterns developers should avoid?

- [x] Directly mutating state, using array index as `key` in dynamic lists, deriving state from props without memoization, and defining components inside other components
- [ ] Using functional components, using multiple `useState` hooks, splitting code across files, and using hooks in custom hook functions
- [ ] Using `React.memo`, splitting contexts by domain, using `useReducer` for complex state, and using TypeScript with React
- [ ] Using `useCallback` to stabilize function references, using `Suspense` for lazy loading, and using portals for modals

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you handle asynchronous data loading in React applications?

- [x] Use `useEffect` with an async function inside it (or a library like React Query or SWR) to fetch data after mount, tracking loading and error states with `useState`
- [ ] Fetch data in the component body directly with `await` since React now supports top-level await in components
- [ ] Use `useMemo` with an async function since it will suspend the component until the promise resolves
- [ ] Make API calls inside the JSX return statement using an immediately invoked async function

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are render props in React and what are they used for?

- [x] A pattern where a component receives a prop whose value is a function that returns JSX, allowing logic (like mouse position tracking) to be shared without HOCs or hooks
- [ ] Props that are automatically rendered as HTML attributes on the underlying DOM element
- [ ] Special built-in props like `key` and `ref` that React processes before passing to the component
- [ ] Props that use lazy evaluation, only computing their value when the component renders them

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you decide between using React local state, Context, and external state managers (like Redux or Zustand)?

- [x] Use local state for UI-specific data, Context for low-frequency global data (theme, auth), and external managers for complex, high-frequency shared state needing middleware or devtools
- [ ] Always use Context because it is built-in and eliminates the need for any external library
- [ ] Always use Redux for all state because external managers are more reliable than built-in options
- [ ] Use external managers only for API data and local state for everything else regardless of sharing needs

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the presentational vs container component pattern in React?

- [x] Presentational components focus purely on how things look (receive data via props, no side effects), while container components handle data fetching, state, and pass data down as props
- [ ] Presentational components are class components and container components are functional components
- [ ] Presentational components contain multiple child components and container components are leaf nodes
- [ ] Presentational components use CSS Modules while container components use styled-components

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the composition pattern in React and why is it preferred over inheritance?

- [x] Composition builds complex UIs by combining smaller, reusable components (often using `children` or render props) and is preferred because it is more flexible and avoids the tight coupling of class inheritance
- [ ] Composition compiles multiple component files into a single optimized output file at build time
- [ ] Composition is a React 18 feature that merges concurrent state updates into a single re-render
- [ ] Composition uses the Prototype chain to share methods between components at runtime

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. When does React re-render a component?

- [x] When the component\'s state changes, when its props change, when its parent re-renders, or when a context it subscribes to updates
- [ ] Only when `setState` is called with a value strictly different from the current state using `===` comparison
- [ ] Only when the component explicitly calls `this.forceUpdate()` or the equivalent hook
- [ ] Only when the browser triggers a repaint due to a CSS or layout change

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the virtual DOM in React?

- [x] A lightweight in-memory JavaScript representation of the actual DOM that React uses to calculate the minimal set of real DOM changes needed after a state update
- [ ] A separate browser API provided by modern browsers to speed up React rendering
- [ ] A version of the DOM that is stored server-side and synced to the client
- [ ] A direct reference to the browser\'s DOM stored in a React ref object

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What does `ReactDOM.createPortal()` do?

- [x] It renders a React child into a different DOM node than the parent component\'s DOM container, useful for modals and tooltips that must visually escape overflow constraints
- [ ] It creates a new isolated React root that is completely disconnected from the main component tree
- [ ] It renders a component outside the browser entirely, in a Web Worker thread
- [ ] It clones an existing DOM node and attaches a React component to the cloned node

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. Which of the following best describes one-way data flow in React?

- [x] Data flows from parent to child components via props; children must call callback functions received as props to communicate changes back up to the parent
- [ ] Data flows bidirectionally between parent and child using two-way binding similar to Angular\'s `[(ngModel)]`
- [ ] Data flows directly between sibling components via shared refs without going through a parent
- [ ] Data flows from the global Redux store directly to DOM nodes, bypassing the component tree

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are some common pitfalls when doing data fetching inside React components?

- [x] Not cleaning up async operations on unmount (memory leaks), missing dependencies in `useEffect`, not handling loading/error states, and triggering fetch in a loop by including a new object in the dependency array each render
- [ ] Using `async/await` instead of `.then()` chains since React doesn\'t support async inside `useEffect`
- [ ] Calling `fetch()` inside the component body because it only executes on the first render
- [ ] Using `useCallback` for fetch functions since it automatically cancels the previous request on re-run

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is server-side rendering (SSR) in React and what are its key benefits?

- [x] SSR renders React components to HTML on the server before sending them to the client, improving SEO and perceived performance since users see content before JavaScript loads
- [ ] SSR runs the entire React application in a Node.js thread while the browser stays idle until rendering is complete
- [ ] SSR replaces client-side React entirely and no JavaScript is shipped to the browser
- [ ] SSR caches the rendered output in a CDN and serves identical HTML to all users regardless of their state

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is the `useId` hook in React and when should it be used?

- [x] It generates a stable unique ID that is consistent between server and client renders, primarily used to associate accessible labels with form inputs
- [ ] It returns a unique identifier for the current component instance useful for debugging and logging
- [ ] It creates a random UUID each render suitable for use as a `key` prop in dynamic lists
- [ ] It provides an ID that increments globally across all component instances in the application

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What is static site generation (SSG) in React and what are its benefits?

- [x] SSG pre-renders pages to static HTML at build time; it delivers the fastest possible load times and is ideal for content that doesn\'t change per user request
- [ ] SSG generates a new static HTML file for each user session at request time
- [ ] SSG is the same as SSR but caches the output in the browser\'s localStorage for faster subsequent visits
- [ ] SSG removes all JavaScript from the output and delivers purely semantic HTML without any interactivity

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What happens internally when the `useState` setter function is called in React?

- [x] React schedules a re-render of the component; during the next render the state variable will hold the new value, and React may batch multiple setter calls together for efficiency
- [ ] The component immediately re-renders synchronously before any other code runs
- [ ] The state is updated in place and React compares old and new values before deciding whether to render
- [ ] React emits a custom DOM event that bubbles up to all ancestor components signaling a state change

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you test React applications?

- [x] Use Jest as the test runner with React Testing Library for component tests (querying by accessible roles), and Cypress or Playwright for end-to-end tests simulating real user flows
- [ ] Use only snapshot tests with `JSON.stringify` because React components are pure functions of props and state
- [ ] Mount every component in a full browser DOM with Selenium since jsdom is not accurate enough for React
- [ ] Write tests using the React DevTools because they expose all component internals for assertion

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. How do you debug React applications?

- [x] Use the React DevTools browser extension to inspect the component tree, state, and props; use `console.log` and browser breakpoints; use the Profiler tab to find performance bottlenecks
- [ ] Add `debug={true}` prop to the root component which enables React\'s built-in debug mode with verbose logging
- [ ] Use only `alert()` statements since React swallows `console.log` output in production mode
- [ ] Disable React StrictMode since it masks the real behavior of components during debugging

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. What are the benefits of using React Hooks over class components?

- [x] Hooks eliminate boilerplate (`this`, `constructor`, `bind`), allow reusing stateful logic via custom hooks, and keep related logic grouped together rather than split across lifecycle methods
- [ ] Hooks are faster at runtime because they bypass the React reconciler entirely
- [ ] Hooks allow components to access the DOM directly without needing refs
- [ ] Hooks remove the need for JSX since logic and rendering are unified in a single function call

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
