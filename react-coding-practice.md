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

#### Q. Use React State to Update the DOM
#### Q. Show an Alert Based on an Input
#### Q. Add Two Numbers
#### Q. Fetch and Display from an API
#### Q. Use Context to Pass Data
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
