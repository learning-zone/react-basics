# React Interview Questions and Answers

*Click <img src="assets/star.png" width="18" height="18" align="absmiddle" title="Star" /> if you like the project. Pull Request are highly appreciated.*

<br/>

## Table of Contents

* *[Create React Application](https://create-react-app.dev/docs/getting-started)*
* *[React Quick Reference](quick-reference.md)*
* *[Jest Quick Reference](jest-quick-reference.md)*
* *[React Best Practices](best-practices.md)*

<br/>

## Q. ***What is React.js?***

React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application view layer.

The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM (JavaScript object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM. We can use ReactJS on the client and server-side as well as with other frameworks. It uses component and data patterns that improve readability and helps to maintain larger apps.

**Read More**

* [Intro to React](https://reactjs.org/tutorial/tutorial.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How React works?***

While building client-side apps, a team at Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in Javascript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browsers DOM.

Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it is worth keeping a DOM tree in it to speedup its manipulation.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are Components in React?***

<img src="assets/component-tree.png" alt="Components Tree" width="600px" />

Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

A react application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain internal state – for example, a TabList component may store a variable corresponding to the currently open tab.

*Example*: Class Component
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***List some of the major advantages and limitations of React?***

<img src="assets/react-features.png" alt="React-Features" width="500px" />

**Advantages**  

* It relies on a virtual-dom to know what is really changing in UI and will re-render only what has really changed, hence better performance wise
* JSX makes components/blocks code readable. It displays how components are plugged or combined with.
* React data binding establishes conditions for creation dynamic applications.
* Prompt rendering. Using comprises methods to minimise number of DOM operations helps to optimise updating process and accelerate it.
Testable. React native tools are offered for testing, debugging code.
* SEO-friendly. React presents the first-load experience by server side rendering and connecting event-handlers on the side of the user:
    * React.renderComponentToString is called on the server. 
    * React.renderComponent() is called on the client side. 
    * React preserves markup rendered on the server side, attaches event handlers.  

**Limitations**  

* Learning curve. Being not full-featured framework it is requered in-depth knowledge for integration user interface free library into MVC framework.
* View-orientedness is one of the cons of ReactJS. It should be found 'Model' and 'Controller' to resolve 'View' problem.
* Not using isomorphic approach to exploit application leads to search engines indexing problems.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is JSX and how JSX can help applications in React.js?***

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any `createElement()` or `appendChild()` methods. JSX converts HTML tags into react elements. React uses JSX for templating instead of regular JavaScript. It is not necessary to use it, however, following are some pros that come with it.

* It is faster because it performs optimization while compiling code to JavaScript.
* It is also type-safe and most of the errors can be caught during compilation.
* It makes it easier and faster to write templates.

*Example*:
```js
import React from 'react';

class App extends React.Component {

   render() {
      return (
         <div>
            Hello World!
         </div>
      );
   }
}
export default App;
```

**JSX is a JavaScript Expression**

JSX expressions are JavaScript expressions too. When compiled, they actually become regular JavaScript objects. For instance, the code below:

```js
const hello = <h1 className = "greet"> Hello World </h1>
```

will be compiled to

```js
const hello = React.createElement {
    type: "h1",
    props: {
      className: "greet",  
      children: "Hello World"
    }
}
```

Since they are compiled to objects, JSX can be used wherever a regular JavaScript expression can be used.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is ReactDOM?***

`ReactDOM()` is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing following methods and a few more.

* render()
* findDOMNode()
* unmountComponentAtNode()
* hydrate()
* createPortal()

React DOM is the glue between React and the DOM. When u want to show your react component on DOM u need to use this ReactDOM.render(); from React Dom.

Before **v0.14** React Dom was part of React. The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps.
ReactDOM uses observables thus provides an efficient way of DOM handling. ReactDOM can be used in both client-side and server-side.

*Example*:

```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

To use the ReactDOM in any React web app we must first import ReactDOM from the react-dom package by using the following code snippet:

```js
import ReactDOM from 'react-dom'
```
**a.) ReactDOM.render() Function**  

This function is used to render a single React Component or several Components wrapped together in a Component or a div element. This function uses the efficient methods of React for updating the DOM by being able to change only a subtree, efficient diff methods etc.
This function returns a reference to the component or null if a stateless component was rendered.

`ReactDOM.render()` replaces the child of the given container if any. It uses highly efficient diff algorithm and can modify any subtree of the DOM.

```jsx
ReactDOM.render(element, container, callback)
```

* **element**: This parameter expects a JSX expression or a React Element to be rendered.
* **container**: This parameter expects the container in which the element has to be rendered.
* **callback**: This is an optional parameter that expects a function that is to be executed once the render is complete.

**b.) findDOMNode() Function**  

This function is generally used to get the DOM node where a particular React component was rendered. This method is very less used as the following can be done adding a ref attribute to each component itself.

`findDOMNode()` function can only be implemented upon mounted components thus Functional components can not be used in findDOMNode() method.

```jsx
ReactDOM.findDOMNode(component)
```

This method takes a single parameter component which expects a React Component to be searched in the Browser DOM. This function returns the DOM node where the component was rendered on success otherwise null.

**c.) unmountComponentAtNode() Function**  

This function is used to unmount or remove the React Component that was rendered to a particular container. 

```jsx
ReactDOM.unmountComponentAtNode(container)
```
This method takes a single parameter container which expects the DOM container from which the React component has to be removed. This function returns true on success otherwise false.

**d.) hydrate() Function**  

This method is equivalent to the render() method but is implemented while using server-side rendering.

```jsx
ReactDOM.hydrate(element, container, callback)
```

* **element**: This parameter expects a JSX expression or a React Component to be rendered.
* **container**: This parameter expects the container in which the element has to be rendered.
* **callback**: This is an optional parameter that expects a function that is to be executed once the render is complete.

This function attempts to attach event listeners to the existing markup and returns a reference to the component or null if a stateless component was rendered.

**e.) createPortal() Function**  

Usually, when an element is returned from a component\'s render method, it\'s mounted on the DOM as a child of the nearest parent node which in some cases may not be desired. Portals allow us to render a component into a DOM node that resides outside the current DOM hierarchy of the parent component.

```jsx
ReactDOM.createPortal(child, container)
```

* **child**: This parameter expects a JSX expression or a React Component to be rendered.
* **container**: This parameter expects the container in which the element has to be rendered.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between ReactDOM and React?***

```js
import React from 'react'; /* importing react */
import ReactDOM from 'react-dom'; /* importing react-dom */

class MyComponent extends React.Component {

  render() {
    return <div>Hello World</div>;
  }
});

ReactDOM.render(<MyComponent />, node);

```
**React** package contains: `React.createElement()`, `React.createClass()`, `React.Component()`, `React.PropTypes()`, `React.Children()`

**ReactDOM** package contains: `ReactDOM.render()`, `ReactDOM.unmountComponentAtNode()`, `ReactDOM.findDOMNode()`, and react-dom/server that including: `ReactDOMServer.renderToString()` and `ReactDOMServer.renderToStaticMarkup()`.

The ReactDOM module exposes DOM-specific methods, while React has the core tools intended to be shared by React on different platforms (e.g. React Native).

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the differences between a class component and functional component?***

**Functional Components**  

* Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular  function keyword.
* Sometimes referred to as `stateless` components as they simply accept data and display them in some form; that is they are mainly responsible for rendering UI.
* React lifecycle methods (for example, `componentDidMount()`) cannot be used in functional components.
* There is no render method used in functional components.
* These are mainly responsible for UI and are typically presentational only (For example, a Button component).
* Functional components can accept and use props.
* Functional components should be favored if you do not need to make use of React state.

*Example*:
```js
const ClockUsingHooks = props => {
    const [time, setTime] = useState(new Date())

    const changeTime = () => {
        setTime(new Date())
    }

    useEffect(() => {
        const tick = setInterval(() => {
            changeTime()
        }, 1000)
        return () => clearInterval(tick)
    })
    return (
        <div className="clock">
            <h1>Hello! This is a function component clock.</h1>
            <h2>It is {time.toLocaleTimeString()}.</h2>
        </div>
    )
}

export default ClockUsingHooks
```

**Class Components**  

* Class components make use of ES6 class and extend the Component class in React.
* Sometimes called `stateful` components as they tend to implement logic and state.
* React lifecycle methods can be used inside class components (for example, `componentDidMount()`).
* We pass `props` down to class components and access them with `this.props`.
* Class-based components can have `refs` to underlying DOM nodes.
* Class-based components can use `shouldComponentUpdate()` and `PureComponent()` performance optimisation techniques.

*Example*:
```js
class ClockUsingClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.time = setInterval(() => {
            this.changeTime()
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.time)
    }

    changeTime() {
        this.setState({ date: new Date() })
    }

    render() {
        return (
            <div className="clock">
                <h1>Hello! This is a class component clock.</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

export default ClockUsingClass
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between state and props?***

**State**  

This is data maintained inside a component. It is local or owned by that specific component. The component itself will update the state using the `setState()` function.

*Example*:
```js
class Employee extends React.Component {
    constructor() {
        this.state = {
            id: 1,
            name: "Alex"
        };  
    }

    render() {
        return (
            <div>
              <p>{this.state.id}</p>
              <p>{this.state.name}</p>
            </div>
        );  
    }
}

export default Employee
```

**Props**  

Data passed in from a parent component. `props` are read-only in the child component that receives them. However, callback functions can also be passed, which can be executed inside the child to initiate an update.

*Example*:
```js
class ParentComponent extends Component {
    render() {
        return (
            <ChildComponent name="First Child" />
        );  
    }
}

const ChildComponent = (props) => {
    return <p>{props.name}</p>;
};
```

**Difference between State and Props**  

|Props                             |State                             |
|----------------------------------|----------------------------------|
|Props are read-only.              |State changes can be asynchronous.|
|Props are immutable.              |State is mutable.                 |
|Props allow you to pass data from one component to other components as an argument.|	State holds information about the components.|
|Props can be accessed by the child component.    |State cannot be accessed by child components.|
|Props are used to communicate between components.|States can be used for rendering dynamic changes with the component.|
|Stateless component can have Props.            |Stateless components cannot have State.|
|Props make components reusable.                 |State cannot make components reusable.|
|Props are external and controlled by whatever renders the component.|The State is internal and controlled by the React Component itself.|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How would you create Higher Order Components (HOCs) in React.js?***

<img src="assets/Higher-Order-Components.jpg" alt="Higher Order Components" width="500px" />

A higher-order component is a function that takes a component and returns a new component. A higher-order component (HOC) is the advanced technique in React.js for reusing a component logic. Higher-Order Components are not part of the React API. They are the pattern that emerges from React\'s compositional nature. The component transforms props into UI, and a higher-order component converts a component into another component. The examples of HOCs are Redux\'s connect and Relay\'s createContainer.

```js
// HOC.js

import React, {Component} from 'react';

export default function Hoc(HocComponent){
    return class extends Component{
        render(){
            return (
                <div>
                    <HocComponent></HocComponent>
                </div>

            );
        }
    }
}
```

```js
// App.js

import React, { Component } from 'react';
import Hoc from './HOC';

class App extends Component {
  
  render() {
    return (
      <div>
        Higher-Order Component Example!
      </div>
    )
  }
}
App = Hoc(App);
export default App;
```

*Notes*

* We do not modify or mutate components. We create new ones.
* A HOC is used to compose components for code reuse.
* A HOC is a pure function. It has no side effects, returning only a new component.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is PureComponent?***

**Pure Components** in React are the components which do not re-renders when the value of state and props has been updated with the same values. If the value of the previous state or props and the new state or props is the same, the component is not re-rendered. Pure Components restricts the re-rendering ensuring the higher performance of the Component

**Features of React Pure Components**

* Prevents re-rendering of Component if props or state is the same
* Takes care of `shouldComponentUpdate()` implicitly
* `State()` and `Props` are Shallow Compared
* Pure Components are more performant in certain cases

Similar to Pure Functions in JavaScript, a React component is considered a Pure Component if it renders the same output for the same state and props value. React provides the `PureComponent` base class for these class components. Class components that extend the `React.PureComponent` class are treated as pure components.

It is the same as Component except that Pure Components take care of `shouldComponentUpdate()` by itself, it does the *shallow comparison* on the state and props data. If the previous state and props data is the same as the next props or state, the component is not Re-rendered.

React Components re-renders in the following scenarios:

1. `setState()` is called in Component
1. `props` values are updated
1. `this.forceUpdate()` is called

In the case of Pure Components, the React components do not re-render blindly without considering the updated values of React `props` and `state`. If updated values are the same as previous values, render is not triggered.

**Stateless Component**
```js
import { pure } from 'recompose';

export default pure ( (props) => {

   return 'Stateless Component Example';
})
```

**Stateful Component**
```js
import React, { PureComponent } from 'react';

export default class Test extends PureComponent{
   render() {
      return 'Stateful Component Example';
   }
}
``` 

Example
```js
class Test extends React.PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         taskList: [
            { title: 'Excercise'},
            { title: 'Cooking'},
            { title: 'Reacting'},
         ]
      };
   }
   componentDidMount() {
      setInterval(() => {
         this.setState((oldState) => {
            return { taskList: [...oldState.taskList] }
         });
      }, 1000);
   }
   render() {
      console.log("TaskList render() called");
      return (<div>
         {this.state.taskList.map((task, i) => {
            return (<Task
               key={i}
               title={task.title}
            />);
         })}
      </div>);
   }
}
class Task extends React.Component {
   render() {
      console.log("task added");
      return (<div>
         {this.props.title}
      </div>);
   }
}
ReactDOM.render(<Test />, document.getElementById('app'));
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why to use PureComponent? When to use PureComponent over Component?***

Both functional-based and class-based components have the same downside: they always re-render when their parent component re-renders even if the props do not change.

Also, class-based components always re-render when its state is updated (`this.setState()` is called) even if the new state is equal to the old state. Moreover, when a parent component re-renders, all of its children are also re-rendered, and their children too, and so on.

That behaviour may mean a lot of wasted re-renderings. Indeed, if our component only depends on its props and state, then it shouldn’t re-render if neither of them changed, no matter what happened to its parent component.

That is precisely what PureComponent does - it stops the vicious re-rendering cycle. PureComponent does not re-render unless its props and state change.

**When to use PureComponent**  

* We want to avoid re-rendering cycles of component when its props and state are not changed, and
* The state and props of component are immutable, and
* We do not plan to implement own `shouldComponentUpdate()` lifecycle method.

On the other hand, we should not use `PureComponent()` as a base component if:

* props or state are not immutable, or
* Plan to implement own `shouldComponentUpdate()` lifecycle method.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How Virtual-DOM is more efficient than Dirty checking?***

<img src="assets/virtualdom-vs-realdom.png" alt="Virtual DOM" with="500px" />

**React Virtual DOM**  

In React, Each time the DOM updates or data of page changes, a new Virtual DOM representation of the user interface is made. It is just a lightweight copy or DOM.

Virtual DOM in React has almost same properties like a real DOM, but it can not directly change the content on the page. Working with Virtual DOM is faster as it does not update anything on the screen at the same time. In a simple way, Working with Virtual DOM is like working with a copy of real DOM nothing more than that. 

Updating virtual DOM in ReactJS is faster because ReactJS uses

1. It is efficient diff algorithm.
1. It batched update operations
1. It efficient update of sub tree only
1. It uses observable instead of dirty checking to detect change

**How Virtual DOM works in React**  

When we render a JSX element, each virtual DOM updates. This approach updates everything very quickly. Once the Virtual DOM updates, React matches the virtual DOM with a virtual DOM copy that was taken just before the update. By Matching the new virtual DOM with pre-updated version, React calculates exactly which virtual DOM has changed. This entire process is called **diffing**.

When React knows which virtual DOM has changed, then React updated those objects. and only those object, in the real DOM. React only updates the necessary parts of the DOM. React\'s reputation for performance comes largely from this innovation.

In brief, here is what happens when we update the DOM in React:

1. The entire virtual DOM gets updated.
1. The virtual DOM gets compared to what it looked like before you updated it. React matches out which objects have changed.
1. The changed objects and the changed objects only get updated on the real DOM.
1. Changes on the real DOM cause the screen to change finally.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why is setState() in React async instead of sync?***

Even if state is updated synchronously, props are not, it mens we do not know props until it re-render the parent component. The objects provided by React (`state`, `props`, `refs`) are consistent with each other and if you introduce a synchronous setState you could introduce some bugs.

`setState()` does not immediately mutate `this.state()` but creates a pending state transition. Accessing `this.state()` after calling this method can potentially return the existing value. There is no guarantee of synchronous operation of calls to `setState()` and calls may be batched for performance gains.

This is because setState() alters the state and causes rerendering. This can be an expensive operation and making it synchronous might leave the browser unresponsive. Thus the setState() calls are asynchronous as well as batched for better UI experience and performance.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are controlled and uncontrolled components in React?***

In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.

**Controlled Components**  

In a controlled component, the form data is handled by the state within the component. The state within the component serves as “the single source of truth” for the input elements that are rendered by the component.

*Example*:
```js
import React, { Component } from 'react';

class App extends Component {
    state = {
        message: ''
    }
    updateMessage = (newText) => {
        console.log(newText);
        this.setState(() => ({
            message: newText
        }));
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <input type="text"
                        placeholder="Your message here.."
                        value={this.state.message}
                        onChange={(event) => this.updateMessage(event.target.value)}
                    />
                    <p>the message is: {this.state.message}</p>
                </div>
            </div>
        );
    }
}

export default App;
```
**Uncontrolled Components**  

Uncontrolled components act more like traditional HTML form elements. The data for each input element is stored in the DOM, not in the component. Instead of writing an event handler for all of your state updates, It uses `ref` to retrieve values from the DOM. `Refs` provide a way to access DOM nodes or React elements created in the render method.

```js
import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.input = React.createRef();
    }
    handleChange = (newText) => {
        console.log(newText);
    }
    render() {
        return (
            <div className="App">
                <div className="container">
                    <input type="text"
                        placeholder="Your message here.."
                        ref={this.input}
                        onChange={(event) => this.handleChange(event.target.value)}
                    />
                </div>
            </div>
        );
    }
}
export default App;
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is React.cloneElement?***

The `React.cloneElement()` function returns a copy of a specified element. Additional props and children can be passed on in the function. This function is used when a parent component wants to add or modify the prop(s) of its children.

```js
React.cloneElement(element, [props], [...children])
```
The react.cloneElement() method accepts three arguments.

* element: Element we want to clone.
* props: props we need to pass to the cloned element.
* children: we can also pass children to the cloned element (passing new children replaces the old children).

Example
```js
import React from 'react';

export default class App extends React.Component {

  // rendering the parent and child component
  render() {
    return (
      <ParentComp>
        <MyButton/>
        <br></br>
        <MyButton/>
      </ParentComp>
    )
  }
}
// The parent component
class ParentComp extends React.Component {
  render() {
    // The new prop to the added.
    let newProp = 'red';
      // Looping over the parent's entire children,
      // cloning each child, adding a new prop.
    return (
      <div>
        {React.Children.map(this.props.children,
          child => {
            return React.cloneElement(child,
            {newProp}, null);
        })}
      </div>
    )
  }
}
// The child component
class MyButton extends React.Component {
  render() {
    return <button style =
    {{ color: this.props.newProp }}>
    Hello World!</button>
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When we should use React.cloneElement vs this.props.children?***

The `React.cloneElement()` works if child is a single React element.

For almost everything `{this.props.children}` is used. Cloning is useful in some more advanced scenarios, where a parent sends in an element and the child component needs to change some props on that element or add things like `ref` for accessing the actual DOM element.

**React.Children**  

Since `{this.props.children}` can have one element, multiple elements, or none at all, its value is respectively a single child node, an array of child nodes or undefined. Sometimes, we want to transform our children before rendering them — for example, to add additional props to every child. If we wanted to do that, we\'d have to take the possible types of `this.props.children` into account. For example, if there is only one child, we can not map it.

*Example*:

```js
class Example extends React.Component {

  render() {
    return <div>
      <div>Children ({this.props.children.length}):</div>
      {this.props.children}
    </div>;
  }
}

class Widget extends React.Component {

  render() {
    return <div>
      <div>First <code>Example</code>:</div>
      <Example>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Example>
      <div>Second <code>Example</code> with different children:</div>
      <Example>
        <div>A</div>
        <div>B</div>
      </Example>
    </div>;
  }
}
```
Output
```
First Example:
Children (3):
1
2
3
Second Example with different children:
Children (2):
A
B
```
`children` is a special property of React components which contains any child elements defined within the component, e.g. the `<div>` inside Example above. `{this.props.children}` includes those children in the rendered result.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the second argument that can optionally be passed to setState and what is its purpose?***

A callback function which will be invoked when `setState()` has finished and the component is re-rendered.

The `setState()` is asynchronous, which is why it takes in a second callback function. Typically it\'s best to use another lifecycle method rather than relying on this callback function, but it is good to know it exists.

```js
this.setState(
  { username: 'Alex' },
  () => console.log('setState has finished and the component has re-rendered.')
)
```
The `setState()` will always lead to a re-render unless `shouldComponentUpdate()` returns false. To avoid unnecessary renders, calling `setState()` only when the new state differs from the previous state makes sense and can avoid calling `setState()` in an infinite loop within certain lifecycle methods like `componentDidUpdate()`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is useState() in React?***

The `useState()` is a Hook that allows to have state variables in functional components.

```js
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      Count: {count}
      <hr />
      <div>
        <button type="button" onClick={handleIncrease}>
          Increase
        </button>
        <button type="button" onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </div>
  );
};
```
The useState() function takes as argument a value for the initial state. In this case, the count starts out with 0. In addition, the hook returns an array of two values: **count** and **setCount**. It\'s up to you to name the two values, because they are `destructured from the returned array` where renaming is allowed.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is useReducer() in React?***

It accepts a reducer function with the application initial state, returns the current application state, then dispatches a function.

Although `useState()` is a Basic Hook and `useReducer()` is an Additional Hook, `useState()` is actually implemented with `useReducer()`. This means `useReducer()` is primitive and we can use `useReducer()` for everything can do with useState(). Reducer is so powerful that it can apply for various use cases.

*Example*:

```js
import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment': return state + 1;
    case 'decrement': return state - 1;
    case 'reset': return 0;
    default: throw new Error('Unexpected action');
  }
};

const ReducerExample = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      {count}
      <button onClick={() => dispatch('increment')}>+1</button>
      <button onClick={() => dispatch('decrement')}>-1</button>
      <button onClick={() => dispatch('reset')}>reset</button>
    </div>
  );
};

export default ReducerExample;
```
Here, we first define an initialState and a reducer. When a user clicks a button, it will dispatch an action which updates the count and the updated count will be displayed. We could define as many actions as possible in the reducer, but the limitation of this pattern is that actions are finite.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is useContext() in React?***

<img src="assets/context-api.jpg" alt="Context API" width="800px" />

The React Context API allows to easily access data at different levels of the component tree, without having to pass data down through `props`.

```js
import React from "react";
import ReactDOM from "react-dom";

// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={10}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
  const value = useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. ***What is useRef() in React?***

#### Q. ***What is useHooks() in React?***

## Q. ***What is difference between useEffect() vs componentDidMount()?***

In react when we use class based components we get access to lifecycle methods(like componentDidMount, componentDidUpdat, etc). But when we want use a functional component and also we want to use lifecycle methods, then using useEffect() we can implement those lifecycle methods.

The `componentDidMount()` and `useEffect()` run after the mount. However useEffect() runs after the paint has been committed to the screen as opposed to before. This means we would get a flicker if needed to read from the DOM, then synchronously set state to make new UI.

The `useLayoutEffect()` was designed to have the same timing as componentDidMount(). So `useLayoutEffect(fn, [])` is a much closer match to componentDidMount() than useEffect(fn, []) -- at least from a timing standpoint.

```js
//Using a class based component.
import React, { Component } from 'react';

export default class SampleComponent extends Component {
  componentDidMount() {
    // code to run on component mount
  }
render() {
    return (<div>foo</div>)
  }
}

//Using a functional component
import React, { useEffect } from 'react';

const SampleComponent = () => {
  useEffect(() => {
    // code to run on component mount
  }, [])
return (<div>foo</div>)
}
export SampleComponent
```

**useEffect() Limitations**

When useEffect() is used to get data from server.

* The first argument is a callback that will be fired after browser layout and paint. Therefore it does not block the painting process of the browser.
* The second argument is an array of values (usually props).
* If any of the value in the array changes, the callback will be fired after every render.
* When it is not present, the callback will always be fired after every render.
* When it is an empty list, the callback will only be fired once, similar to componentDidMount.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What do you understand by refs in React?***

`Refs` provide a way to access DOM nodes or React elements created in the render method. React Refs are a useful feature that act as a means to reference a DOM element or a class component from within a parent component.

Refs also provide some flexibility for referencing elements within a child component from a parent component, in the form of ref forwarding.

*Example*:

```javascript
class App extends React.Component {
    constructor(props) {
      super(props)
      // create a ref to store the textInput DOM element
      this.textInput = React.createRef();
      this.state = {
        value: ''
      }
    }
  
  // Set the state for the ref
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: this.textInput.current.value})
  };

  render() {
    return (
      <div>
        <h1>React Ref - createRef</h1>
         {/** This is what will update **/}
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          {/** Call the ref on <input> so we can use it to update the <h3> value **/}
          <input type="text" ref={this.textInput} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
```
**When to Use Refs**  

* Managing focus, text selection, or media playback.
* Triggering imperative animations.
* Integrating with third-party DOM libraries.

**When not to use refs**  

* Should not be used with functional components because they dont have instances.
* Not to be used on things that can be done declaritvely.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What will happen if you use setState() in constructor?***

When we use `setState()`, then apart from assigning to the object state react also rerenders the component and all it\'s children. Which we don\'t need in the constructor, since the component hasn\'t been rendered anyway.

Inside constructor uses `this.state = {}` directly, other places use `this.setState({ })`

*Example*:

```js
import React, { Component } from 'react';

class Food extends Component {

  constructor(props) {
    super(props)

    this.state = {
      fruits: ['apple', 'orange'],
      count: 0
    }
  }
  render() {
    return (
      <div className = "container">
        <h2> Hello!!!</h2>
        <p> I have {this.state.count} fruit(s)</p>
      </div>
    );
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. ***Exlain is useCallback(), useMemo(), useImperativeHandle(), useLayoutEffect(), useDebugValue()  in React?***

## Q. ***What is the difference between DOM and virtual DOM?***

**DOM**

DOM stands for "Document Object Model". The HTML DOM provides an interface (API) to traverse and modify the nodes. It contains methods like `getElementById()` or `removeChild()`.

The DOM is represented as a tree data structure. Because of that, the changes and updates to the DOM are fast. But after the change, the updated element and it\'s children have to be re-rendered to update the application UI. The re-rendering or re-painting of the UI is what makes it slow.

**Virtual DOM**  

The virtual DOM is only a virtual representation of the DOM. Everytime the state of our application changes, the virtual DOM gets updated instead of the real DOM.

The Virtual DOM is an abstraction of the HTML DOM. It is lightweight and detached from the browser-specific implementation details. Since the DOM itself was already an abstraction, the virtual DOM is, in fact, an abstraction of an abstraction.

**Why Virtual DOM is faster**

When new elements are added to the UI, a virtual DOM, which is represented as a tree is created. Each element is a node on this tree. If the state of any of these elements changes, a new virtual DOM tree is created. This tree is then compared or “diffed” with the previous virtual DOM tree.

Once this is done, the virtual DOM calculates the best possible method to make these changes to the real DOM. This ensures that there are minimal operations on the real DOM. Hence, reducing the performance cost of updating the real DOM.

**Pros of Virtual DOM**  

* Updates process is optimized and accelerated.
* JSX makes components/blocks code readable.
* React data binding establishes conditions for creation dynamic applications.
* Virtual DOM is ideal for mobile first applications.
* Prompt rendering. Using comprises methods to minimize number of DOM operations helps to optimize updating process and accelerate it.

<img src="assets/dom.png" alt="Real DOM and Virtual DOM" width="500px" />

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When should we use arrow functions with React?***

**Arrows prevent `this` bugs**

Arrow functions don not redefine the value of `this` within their function body. This makes it a lot easier to predict their behavior when passed as callbacks, and prevents bugs caused by use of this within callbacks. Using inline arrow functions in function components is a good way to achieve some decoupling.

*Example*:

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button onClick={this.handleClick} style={this.state}>
        Set background to red
      </button>
    )
  }

  handleClick = () => {
    this.setState({ backgroundColor: 'red' })
  }
}

ReactDOM.render(
  <Button />,
  document.getElementById('root')
)
```
1. When we use `this` it generates a new function on every render, which will obviously have a new reference.
2. If the component we pass this generated function to is extending `PureComponent()`, it will not be able to bail out on rerendering, even if the actual data has not changed.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Differentiate between stateful and stateless components?***

Stateful and stateless components have many different names. They are also known as:

– Container vs Presentational components  
– Smart vs Dumb components  

The literal difference is that one has state, and the other does not. That means the stateful components are keeping track of changing data, while stateless components print out what is given to them via props, or they always render the same thing.

*Example*: Stateful/Container/Smart component

```js
class Main extends Component {
 constructor() {
   super()
   this.state = {
     books: []
   }
 }
 render() {
   <BooksList books={this.state.books} />
 }
}
```

*Example*: Stateless/Presentational/Dumb component

```js
const BooksList = ({books}) => {
 return (
   <ul>
     {books.map(book => {
       return <li>book</li>
     })}
   </ul>
 )
}
```
**Functional Component or Stateless component**  

* Functional component is like pure function in JavaScript.
* Functional component is also called as a stateless component.
* The functional component only receives props from parent component and return you JSX elements.
* The functional component doesn’t play with any lifecycle methods of React and doesn’t play with the component state.

**Class component or statefull component**  

* React class component is called as a stateful component.
* Stateful component plays with all life cycle methods of React.
* This component will modify state.

**When would you use a stateless component**

* When you just need to present the props
* When you do not need a state, or any internal variables
* When creating element does not need to be interactive
* When you want reusable code

**When would you use a stateful component?**  

* When building element that accepts user input or element that is interactive on page
* When dependent on state for rendering, such as, fetching data before rendering
* When dependent on any data that cannot be passed down as props

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the different phases of React component lifecycle?***

<img src="assets/react-lifecycle.png" alt="React component lifecycle" width="800px" />

React provides several methods that notify us when certain stage of this process occurs. These methods are called the component lifecycle methods and they are invoked in a predictable order. The lifecycle of the component is divided into four phases.

**1. Mounting**  

These methods are called in the following order when an instance of a component is being created and inserted into the DOM:

* `constructor()`
* `getDerivedStateFromProps()`
* `render()`
* `componentDidMount()`

**constructor**  

The `constructor()` method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

The `constructor()` method is called with the `props`, as arguments, and we should always start by calling the `super(props)` before anything else, this will initiate the parent\'s constructor method and allows the component to inherit methods from its parent (`React.Component`).

**getDerivedStateFromProps**

The `getDerivedStateFromProps()` method is called right before rendering the element(s) in the DOM. It takes state as an argument, and returns an object with changes to the state.

*Example*:

```js
class Color extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {color: props.favcol };
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.color}</h1>
    );
  }
}

ReactDOM.render(<Color favcol="yellow"/>, document.getElementById('root'));
```

**render()**

The render() method is required, and is the method that actual outputs HTML to the DOM.

**componentDidMount()**  

The `componentDidMount()` method is called after the component is rendered.

**2. Updating**  

The next phase in the lifecycle is when a component is updated. A component is updated whenever there is a change in the component\'s state or props.

React has five built-in methods that gets called, in this order, when a component is updated:

* `getDerivedStateFromProps()`
* `shouldComponentUpdate()`
* `render()`
* `getSnapshotBeforeUpdate()`
* `componentDidUpdate()`

**getDerivedStateFromProps**  

This is the first method that is called when a component gets updated. This is still the natural place to set the state object based on the initial props.

*Example*:

```js
class Color extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }
  static getDerivedStateFromProps(props, state) {
    return {color: props.favcol };
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.color}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Color favcol="yellow"/>, document.getElementById('root'));
```

**shouldComponentUpdate**

In the `shouldComponentUpdate()` method you can return a Boolean value that specifies whether React should continue with the rendering or not. The default value is `true`.

```js
class Color extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }
  shouldComponentUpdate() {
    return false;
  }
  changeColor = () => {
    this.setState({color: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.color}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Color />, document.getElementById('root'));
```

**render()**

The `render()` method is of course called when a component gets updated, it has to re-render the HTML to the DOM, with the new changes.

**getSnapshotBeforeUpdate**

In the `getSnapshotBeforeUpdate()` method we have access to the `props` and `state` before the update, meaning that even after the update, we can check what the values were before the update.

If the `getSnapshotBeforeUpdate()` method is present, we should also include the `componentDidUpdate()` method, otherwise it will throw an error.

*Example*:

```js
class Color extends React.Component {

  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({color: "yellow"})
    }, 1000)
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.color;
  }
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.color;
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.color}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

ReactDOM.render(<Color />, document.getElementById('root'));
```

**componentDidUpdate**  

The `componentDidUpdate()` method is called after the component is updated in the DOM.

*Example*:

```js
class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "red"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({color: "yellow"})
    }, 1000)
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "The updated favorite is " + this.state.color;
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.color}</h1>
      <div id="mydiv"></div>
      </div>
    );
  }
}

ReactDOM.render(<Color />, document.getElementById('root'));
```

**3. Unmounting**  

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

* `componentWillUnmount()`

*Example*: Click the button to delete the header

```js
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

ReactDOM.render(<Container />, document.getElementById('root'));
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the significance of keys in React?***

Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

```js
function NumberList(props) {

  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
```

**Exceptions where it is safe to use index as key**

* If your list is static and will not change.
* The list will never be re-ordered.
* The list will not be filtered (adding/removing items from the list).
* There are no ids for the items in the list.

*Note: Using `index` as a key can lead to potential unexpected behaviour within the component.*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is React Router? Why is switch keyword used in React Router v4?***

React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy loading, dynamic route matching, and location transition handling built right in.

```
npm install react-router-dom
```
```js
import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import Todos from './components/Todos/Todos';
import TodosNew from './components/TodosNew/TodosNew';
import TodoShow from './components/TodoShow/TodoShow';

class Router extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/todos/new' component={ TodosNew } />
                    <Route path='/todos/:id' component={ TodoShow } />
                    <Route exact path='/' component={ Todos } />
                    <Redirect from='*' to='/' />
                </Switch>
            </Router>
        );
    }
};

export default Router;
```

**`< Router />`**  

The `< Router />` component wraps our main application routing. Nested within Router will be all of our `< Route />` components, which will point to all other URLs.

**`<Switch />`**

The Switch component helps us to render the components only when path matches otherwise it fallbacks to the not found component. The `<Switch>` returns only one first matching route.

**exact**

The `exact` returns any number of routes that match exactly.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain the standard JavaScript toolchain, transpilation (via Babel or other compilers), JSX, and these items significance in recent development?***

Typically, we use build tools like Grunt, Watchify/Browserify, Broccoli, or Webpack to watch the filesystem for file events (like when you add or edit a file). After this occurs, the build tool is configured to carry out a group of sequential or parallel tasks.

The rest of the tools belong in that group of sequential or parallel tasks:

* *Style linting* - typically a linter like JSCS is used to ensure the source code is following a certain structure and style
* *Dependency Management* - for JavaScript projects, most people use other packages from npm; some plugins exist for build systems (e.g. Webpack) and compilers (e.g. Babel) that allow automatic installation of packages being imported or require()‘d
* *Transpilation* - a specific sub-genre of compilation, transpilation involves compiling code from one source version to another, only to a similar runtime level (e.g. ES6 to ES5)
* *Compilation* - specifically separate from transpiling ES6 and JSX to ES5, is the act of including assets, processing CSS files as JSON, or other mechanisms that can load and inject external assets and code into a file. In addition, there are all sorts of build steps that can analyze your code and even optimize it for you.
* *Minification and Compression* - typically part of – but not exclusively controlled by – compilation, is the act of minifying and compressing a JS file into fewer and/or smaller files
* *Source-Mapping* - another optional part of compilation is building source maps, which help identify the line in the original source code that corresponds with the line in the output code (i.e. where an error occurred)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How React handle or restrict Props to certain types?***

React `PropTypes` are a good way to help you catching bugs by validating data types of values passed through `props`. They also offer possibilities to flag props as mandatory or set default values.

*Example*:

```js
import React from 'react';
import PropTypes from 'prop-types';

const Person = (props) => <div>
  <h1>{props.firstName} {props.lastName}</h1>
  {props.country ? <p>Country: {props.country}</p> : null}
</div>;

Person.propTypes = {
  firstName:PropTypes.string,
  lastName:PropTypes.string,
  country:PropTypes.string
};

export default Person;
```
`PropTypes` define the type of a prop. So each time, a value is passed through a prop, it gets validated for it\'s type. If you pass a value through a prop with a different data type than it is specified in the PropTypes, an error message will be printed in the console of your browser.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is prop drilling and how can you avoid it?***

React passes data to child components via props from top to bottom. While there are few props or child components, it is easy to manage and pass down data. But when the application grows, and want to pass data from the top level component to a 3rd or 4th level level component but we end up passing these data to components on each level of the tree. This is called **Prop-drilling**.

**Context API**  

The Context API solves some of these prop drilling problems. It let pass data to all of the components in the tree without writing them manually in each of them. Shared data can be anything: state, functions, objects, we name it, and it is accessible to all nested levels that are in the scope of the context.

*Example*:

```js
import React from "react";
import ReactDOM from "react-dom";

// Create a Context
const NumberContext = React.createContext();
// It returns an object with 2 values:
// { Provider, Consumer }

function App() {
  // Use the Provider to make a value available to all
  // children and grandchildren
  return (
    <NumberContext.Provider value={10}>
      <div>
        <Display />
      </div>
    </NumberContext.Provider>
  );
}

function Display() {
  const value = useContext(NumberContext);
  return <div>The answer is {value}.</div>;
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***If you wanted a component to perform an action only once when the component initially rendered - how would you achieve this in react?***

The `componentDidMount()` lifecycle hook can be used with class components.
```js
class Homepage extends React.Component {
  componentDidMount() {
    trackPageView('Homepage');
  }
  render() {
    return <div>Homepage</div>;
  }
}
```
Any actions defined within a `componentDidMount()` lifecycle hook are called only once when the component is first mounted.

The `useEffect()` hook can be used with function components.
```js
const Homepage = () => {
  useEffect(() => {
    trackPageView('Homepage');
  }, []);
  
  return <div>Homepage</div>;
};
```
The `useEffect()` hook is more flexible than the lifecycle methods used for class components. It receives two parameters:

* The first parameter it takes is a callback function to be executed.
* The optional second parameter it takes is an array containing any variables that are to be tracked.

The value passed as the second argument controls when the callback is executed:

* If the second parameter is undefined, the callback is executed every time that the component is rendered.
* If the second parameter contains an array of variables, then the callback will be executed as part of the first render cycle and will be executed again each time an item in the array is modified.
* If the second parameter contains an empty array, the callback will be executed only once as part of the first render cycle. The  example above shows how passing an empty array can result in similar behaviour to the `componentDidMount()` hook within a function component.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How can automated tooling be used to improve the accessibility of a React application?***

There are two main categories of automated tools that can be used to identify accessibility issues:

**Static Analysis Tools**

Linting tools like `ESLint` can be used with plugins such as `eslint-plugin-jsx-a11y` to analyse React projects at a component level. Static analysis tools run very quickly, so they bring a good benefit at a low cost.

**Browser Tools**  

Browser accessibility tools such as `aXe` and `Google Lighthouse` perform automated accessibility at the app level. This can discover more real-world issues, because a browser is used to simulate the way that a user interacts with a website.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the purpose of using super constructor with props argument?***

The `super()` keyword is used to call the parent constructor. `super(props)` would pass `props` to the parent constructor.

```js
class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
   }

  // React says we have to define render()
  render() {
    return <div>Hello world</div>
  }
}

export default App
```
Here, `super(props)` would call the `React.Component` constructor passing in props as the argument.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why should not we update the state directly?***

The `setState()` does not immediately mutate `this.state()` but creates a pending state transition. Accessing `this.state` after calling this method can potentially return the existing value.

There is no guarantee of synchronous operation of calls to `setState()` and calls may be batched for performance gains.

The `setState()` will always trigger a re-render unless conditional rendering logic is implemented in `shouldComponentUpdate()`. If mutable objects are being used and the logic cannot be implemented in `shouldComponentUpdate()`, calling `setState()` only when the new state differs from the previous state will avoid unnecessary re-renders.

Basically, if we modify `this.state()` directly, we create a situation where those modifications might get overwritten.

*Example*:

```js
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { id: '1', age: 42 },
        { id: '2', age: 33 },
        { id: '3', age: 68 },
      ],
    };
  }

  onRemoveItem = id => {
    this.setState(state => {
      const list = state.list.filter(item => item.id !== id);

      return {
        list,
      };
    });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.list.map(item => (
            <li key={item.id}>
              The person is {item.age} years old.
              <button
                type="button"
                onClick={() => this.onRemoveItem(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What do these three dots (...) in React do?***

The ES6 Spread operator or Rest Parameters is use to pass `props` to a React component. Let us take an example for a component that expects two props:

```js
function App() {
  return <Hello firstName="Alex" lastName="K" />;
}
```
Using the Spread operator, it become like this

```js
function App() {
  const props = {firstName: 'Alex', lastName: 'K'};
  return <Hello {...props} />;
}
```

When we use the `...props` syntax, actaully it expand the props object from the parent component, which means all its attributes are passed down the child component that may not need them all. This will make things like debugging harder.

**Using the Spread Operator with setState() for Setting the Nested State**

let us suppose we have a state with a nested object in our component:

```js
this.state = {
  stateObj: {
    attr1: '',
    attr2: '',
  },
}
```
We can use the Spread syntax to update the nested state object.

```js
this.setState(state => ({
  person: {
    ...state.stateObj,
    attr1: 'value1',
    attr2: 'value2',
  },
}))
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are React Hooks? What are advantages of using React Hooks?***

React Hooks are in-built functions that allow to use **state** and **lifecycle** methods inside functional components, they also work together with existing code, so they can easily be adopted into a codebase.

**Rules of Hooks**

* Make sure to not use Hooks inside loops, conditions, or nested functions
* Only use Hooks from inside React Functions

**Built-in Hooks**

*Basic Hooks*

* useState()
* useEffect()
* useContext()

*Additional Hooks*

* useReducer()
* useCallback()
* useMemo()
* useRef()
* useImperativeHandle()
* useLayoutEffect()
* useDebugValue()

**React Hooks advantages**  

* Hooks are easier to work with and to test (as separated functions from React components*) and make the code look cleaner, easier to read — a related logic can be tightly coupled in a custom hook.
* Hooks allow to do by breaking the logic between components into small functions and using them inside the components.
* Improved code reuse
* Better code composition
* Better defaults
* Sharing non-visual logic with the use of custom hooks
* Flexibility in moving up and down the components tree.

*Example*: using classes

```js
import React, { Component } from 'react';

class App extends Component {
  constuctor(props) {
    super(props);

    this.state = {
      isButtonClicked: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isButtonClicked: !prevState.isButtonClicked,
    }))
  }
}
```

*Example*: using React Hooks

```js
import React, { useState } from 'react'

const App = () => {
  const [isButtonClicked, setIsButtonClickedStatus] = useState(false);
  
  return (
    <button
      onClick={() => setIsButtonClickedStatus(!isButtonClicked)}
    >
      {isButtonClicked ? 'Clicked' : 'Click me, please'}
    </button>
  )
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to apply validation on Props in React?***

Props are an important mechanism for passing the **read-only** attributes to React components. React provides a way to validate the props using `PropTypes`. This is extremely useful to ensure that the components are used correctly.

```bash
npm install prop-types --save-dev
```

*Example*:

```js
import React from 'react'
import PropTypes from 'prop-types'

App.defaultProps = {
   propBool: true,
   propArray: [1, 2, 3, 4, 5],
   propNumber: 100,
   propString: "Hello React!"
}

class App extends React.Component {

   render() {
      return (
         <fragment>
            <h3>Boolean: {this.props.propBool ? "True" : "False"}</h3>
            <h3>Array: {this.props.propArray}</h3>
            <h3>Number: {this.props.propNumber}</h3>
            <h3>String: {this.props.propString}</h3>
         </fragment>
      );
   }
}

App.propTypes = {
   propBool: PropTypes.bool.isRequired,
   propArray: PropTypes.array.isRequired,
   propNumber: PropTypes.number,
   propString: PropTypes.string,
}

export default App
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between using constructor vs getInitialState in React?***

The two approaches are not interchangeable. You should initialize state in the `constructor()` when using ES6 classes, and define the `getInitialState()` method when using React.createClass.

```js
import React from 'react'

class MyComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = { /* initial state */ }
  }
}
```

is equivalent to

```js
var MyComponent = React.createClass({
  getInitialState() {
    return { /* initial state */ }
  },
})
```

The `getInitialState()` is used with `React.createClass` and `constructor()` is used with `React.Component`.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to conditionally add attributes to React components?***

Inline conditionals in attribute props

```js
import React from 'react'

function App() {

  const [mood] = React.useState("happy")

  const greet = () => alert("Hi there! :)")

  return (
    <button onClick={greet} disabled={"happy" === mood ? false : true}>
      Say Hi
    </button>
  )
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Do Hooks replace render props and higher-order components?***

**React Hooks**

Hooks were designed to replace `class` and provide another great alternative to compose behavior into your components. Higher Order Components are also useful for composing behavior. Hooks encapsulate the functionality to easily reusable functions

```js
const [active, setActive] = useState(defaultActive)
```

There are few build-in Hooks

```js
import {
  useState,
  useReducer,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  ...
} from 'react'
```

**Higher Order Components**

A Higher Order Component (HOC) is a component that takes a component and returns a component. HOCs are composable using point-free, declarative function composition.

*Example*: logger API

```js
import React, { useEffect } from 'react'

const withLogging = Component => props => {
  useEffect(() => {
    fetch(`/logger?location=${ window.location}`)
  }, [])
  return <Component {...props } />
}
export default withLogging
```

To use it, you can mix it into an HOC that you\’ll wrap around every page:

```js
import React from 'react'
import withAuth from './with-auth.js'
import withLogging from './with-logging.js'
import withLayout from './with-layout.js'

const page = compose(
  withRedux,
  withAuth,
  withLogging,
  withLayout('default'),
);
export default page
```

To use this for a page

```js
import page from '../hocs/page.js'
import MyPageComponent from './my-page-component.js'

export default page(MyPageComponent)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to optimize React Performance?***

React uses many techniques to minimize the number of DOM operations for us already. For many applications, if you are using the production build, you may already meet or surpass your performance expectations. Nevertheless, there are several ways you can speed up your application.

**1. React DevTools Profiler**

Experience performance problems with a specific component, the React DevTools Profiler is usually the first place to look.

<img src="assets/react-dev-tools.png"  alt="React DevTools" />

**2. Using `shouldComponentUpdate()` method**

By default, React will render the virtual DOM and compare the difference for every component in the tree for any change in its props or state. But that is obviously not reasonable. As our app grows, attempting to re-render and compare the entire virtual DOM at every action will eventually slow the whole thing down.

React provides a simple lifecycle method to indicate if a component needs re-rendering and that is, shouldComponentUpdate which is triggered before the re-rendering process starts. The default implementation of this function returns true.

```js
shouldComponentUpdate(nextProps, nextState) {
  return true
}
```

When this function returns true for any component, it allows the render differentiating process to be triggered. This gives us the power of controlling the render differentiating process. Suppose we need to prevent a component from being re-rendered, we need simply to return false from that function. As we can see from the implementation of the method, we can compare the current and next props and state to determine whether a re-render is necessary:

```js
shouldComponentUpdate(nextProps, nextState) {
  return nextProps.id !== this.props.id
}
```

**3. Using Pure Components**

Pure Components in React are the components which do not re-renders when the value of `state` and `props` has been updated with the same values. If the value of the previous `state` or `props` and the new `state` or `props` is the same, the component is not re-rendered. Pure Components restricts the re-rendering ensuring the higher performance of the Component.

**4. Using React.memo**

React.memo is a higher order component. It\'s similar to `React.PureComponent` but for function components instead of classes.

```js
const MyComponent = React.memo(function MyComponent(props) {
  /* render using props */
})
```

If your function component renders the same result given the same props, you can wrap it in a call to `React.memo` for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

`React.memo` only checks for `prop` changes. If your function component wrapped in `React.memo` has a `useState` or `useContext` Hook in its implementation, it will still rerender when `state` or `context` change.

**5. Virtualizing Long Lists**

In order to address the issue with our long chat feed, the React team recommends a technique called windowing. This technique only renders the portion of the list that is visible to the user (+/- a given offset) in order to reduce the time to render. As the user scrolls, new list items are retrieved and rendered. `react-window` and `react-virtualized` are two libraries that provide components to help with list virtualization.

**Read More**

* [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***When would you use StrictMode component in React?***

`StrictMode` is a tool for highlighting potential problems in an application. Like `Fragment`, `StrictMode` does not render any visible UI. It activates additional checks and warnings for its descendants. Strict mode checks are run in development mode only; they do not impact the production build.

```js
import React from 'react';

export default function App() {
  return (
    <Fragment>
      <Header />
      <React.StrictMode>
        <div>
          <ComponentOne />
          <ComponentTwo />
        </div>
      </React.StrictMode>
      <Footer />
    </Fragment>
  );
}
```

In the above example, strict mode checks will not be run against the `<Header>` and `<Footer>` components. However, `<ComponentOne>` and `<ComponentTwo>`, as well as all of their descendants, will have the checks.

`React.StrictMode`, in order to be efficient and avoid potential problems by any side-effects, needs to trigger some methods and lifecycle hooks twice. These are:

* Class component constructor() method
* The render() method
* setState() updater functions (the first argument)
* The static getDerivedStateFromProps() lifecycle
* React.useState() function

**Benefits of StrictMode**

* Identifying components with unsafe lifecycles
* Warning about legacy string ref API usage
* Warning about deprecated findDOMNode usage
* Detecting unexpected side effects
* Detecting legacy context API

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How does React renderer work exactly when we call setState?***

The `state` allows React components to change their output over time in response to user actions, network responses, and anything else, without violating this rule. Components defined as classes have some additional features. Local state is a feature available only to class Components.

The `setState()` is the API method provided with the library so that the user is able to define and manipulate state over time.
`setState()` is the only legitimate way to update state after the initial state setup.

*Example*:

```js
import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchString: ''
    }
  }
}
```
we are passing an empty string as a value and, to update the state of searchString, we have to call setState().

```js
setState({ searchString: event.target.value })
```

Here, we are passing an object to setState(). The object contains the part of the state we want to update which, in this case, is the value of searchString. This is basically kicking off a process that React calls **reconciliation**. The reconciliation process is the way React updates the DOM, by making changes to the component based on the change in state.

When the request to `setState()` is triggered, React creates a new tree containing the reactive elements in the component (along with the updated state). This tree is used to figure out how the Search component\'s UI should change in response to the state change by comparing it with the elements of the previous tree.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to avoid the need for binding in React?***

**1. Use Arrow Function in Class Property**

Usually when we want to access this inside a class method we would need to bind it to method like so:

```js
class Button extends Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
  }
  handleClick = () => this.setState({ clicked: true })
  render() {
    return <button onClick={this.handleClick}>Click Me</button>
  }
}
```
Binding `this` to `handleClick()` in the `constructor()` allows us to use `this.setState()` from Component inside `handleClick()`.

**2. Bind in Render**

```js
onChange={this.handleChange.bind(this)}
```

This approach is terse and clear, however, there are performance implications since the function is reallocated on every render.

**3. Bind in Constructor**

One way to avoid binding in render is to bind in the constructor

```js
constructor(props) {
  super(props);
  this.handleChange = this.handleChange.bind(this);
}
```

This is the approach currently recommended in the React docs for "better performance in your application".

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How does the state differ from props in React?***

**State**

This is data maintained inside a component. It is local or owned by that specific component. The component itself will update the state using the `setState()` function.

*Example*:

```js
class AppComponent extends React.component {
  state = {
      msg : 'Hello World!';
  }

  render() {
      return <div>Message {this.state.msg}</div>
  }
}
```

**Props**

Data passed in from a parent component. `props` are read-only in the child component that receives them. However, callback functions can also be passed, which can be executed inside the child to initiate an update.

*Example*: The parent can pass a props by using this

```js
<ChildComponent color='red' />
```
Inside the ChildComponent constructor we could access the props

```js
class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log(props.color)
  }
}
```

Props can be used to set the internal state based on a prop value in the constructor, like this

```js
class ChildComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state.colorName = props.color
  }
}
```

Props should never be changed in a child component. Props are also used to allow child components to access methods defined in the parent component. This is a good way to centralize managing the state in the parent component, and avoid children to have the need to have their own state.

**Difference between State and Props**

|  Props                                          | State                            |
|-------------------------------------------------|----------------------------------|
|Props are read-only.                             |State changes can be asynchronous.|
|Props allow to pass data from one component to other components as an argument.| State holds information about the components.|
|Props can be accessed by the child component.    |State cannot be accessed by child components.|
|Props are used to communicate between components.|States can be used for rendering dynamic changes with the component.|
|Stateless component can have Props.              |Stateless components cannot have State.|
|Props are external and controlled by whatever renders the component.| The State is internal and controlled by the React Component itself.|

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How would you create a form in React?***

**App.js**

```js
import React, { Component } from "react";
import countries from "./countries";
import './App.css'

export default function App() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [country, setCountry] = React.useState("");
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  const handleSubmit = (event) => {
    console.log(`
      Email: ${email}
      Password: ${password}
      Country: ${country}
      Accepted Terms: ${acceptedTerms}
    `);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>

      <label>
        Email:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required />
      </label>

      <label>
        Password:
        <input
          name="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required />
      </label>

      <label>
        Country:
        <select
          name="country"
          value={country}
          onChange={e => setCountry(e.target.value)}
          required>
          <option key=""></option>
          {countries.map(country => (
            <option key={country}>{country}</option>
          ))}
        </select>
      </label>

      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
          onChange={e => setAcceptedTerms(e.target.value)}
          required />
        I accept the terms of service
      </label>

      <button>Submit</button>
    </form>
  );
}
```

**App.css**

```css
* {
  box-sizing: border-box;
}

body {
  font-family: Lato;
  height: 97vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #4A4E69;
}

form {
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 100px;
  min-height: 400px;
  padding: 20px 40px 40px 40px;
  border-radius: 6px;
  box-shadow: 0px 8px 36px #222;
  background-color: #fefefe;
}

form > h1 {
  display: flex;
  justify-content: center;
  font-family: "Segoe UI", "Ubuntu", "Roboto", "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 2em;
  font-weight: lighter;
  margin-top: 0.25em;
  color: #222;
  letter-spacing: 2px;
}

.info {
  padding-bottom: 1em;
  padding-left: 0.5em;
  padding-right: 0.5em;
}

label {
  margin-bottom: 0.5em;
  color: #444;
  font-weight: lighter;
}

input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
}
input, select {
  padding: 10px 10px;
  border-radius: 5px;
  border: 1px solid #d6d1d5;
  margin-top: 5px;
}
select {
  display: block;
  width: 100%;
  height: 35px;
}
input[type="checkbox"] {
  display: inline-block;
  width: auto;
  margin-top: 2em;
  margin-right: 10px;
}

button {
  min-width: 100%;
  cursor: pointer;
  margin-right: 0.25em;
  margin-top: 0.5em;
  padding: 	0.938em;
  border: none;
  border-radius: 4px;
  background-color: #22223B;
  color: #fefefe;
}
button:hover {
  background-color: #4A4E69;
  color: #fefefe;
}

.error {
  color:#db2269;
  font-size: 0.5em;
  display: relative;
}

.submit {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
```

**Countries.js**

```js
export default [
  'Austria',
  'Denmark',
  'France',
  'Germany',
  'India',
  'Italy',
  'Poland',
  'Russia',
  'Sweden',
  'United States'
];
```

Output:

<img src='assets/react-form.png' alt='React Form' width='500px' />

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How to change the state of a child component from its parent in React?***

**Using Props**

We will take two components, Parent and Child. And our Parent component will set the value depends on the Child Component. Child component holds the Input field and we are going to send the input field value to the Parent component.

```js
function Parent() {
    const [value, setValue] = React.useState("")

    function handleChange(newValue) {
      setValue(newValue)
    }

    // We pass a callback to Child
    return <Child value={value} onChange={handleChange} />
}
```

As you see that we set the onChange property to the Child component. Next step is to create the Child component.

```js
function Child(props) {
    function handleChange(event) {
        // Here, we invoke the callback with the new value
        props.onChange(event.target.value);
    }
  
    return <input value={props.value} onChange={handleChange} />
}
```

On the above codes, we have created function handleChange that will pass the value through props.onChange to our Parent component.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What do you understand with the term polling in React?***

Using `setInterval()` inside React components allows us to execute a function or some code at specific intervals.

```js
useEffect(() => {
  const interval = setInterval(() => {
    console.log('This will run every second!');
  }, 1000);
  return () => clearInterval(interval);
}, []);
```

The code above schedules a new interval to run every second inside of the useEffect Hook. This will schedule once the React component mounts for the first time. To properly clear the interval, we return `clearInterval()` from the `useEffect()` Hook, passing in the interval.

**Using setInterval in React Components**

To schedule a new interval, we call the setInterval method inside of a React component, like so:

```js
import React, { useState, useEffect } from 'react'

const IntervalExample = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000);
    return () => clearInterval(interval)
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {seconds} seconds have elapsed since mounting.
      </header>
    </div>
  )
}

export default IntervalExample
```

The example above shows a React component, IntervalExample, scheduling a new interval once it mounts to the DOM. The interval increments the seconds state value by one, every second.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the difference between Element, Component and Component instance in React?***

A React Component is a template. A blueprint. A global definition. This can be either a function or a class (with a render function).

A React Element is what gets returned from components. It is an object that virtually describes the DOM nodes that a component represents. With a function component, this element is the object that the function returns. With a class component, the element is the object that the component\'s render function returns. React elements are not what we see in the browser. They are just objects in memory and we can not change anything about them.

*Example*:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    console.log('This is a component instance:', this)
  }

  render() {
    const another_element = <div>Hello, World!</div>
    console.log('This is also an element:', another_element)
    return another_element
  }
}

console.log('This is a component:', MyComponent)

const element = <MyComponent/>

console.log('This is an element:', element)

ReactDOM.render(
  element,
  document.getElementById('root')
)
```

**React Elements**

A React Element is just a plain old JavaScript Object without own methods. It has essentially four properties:

* `type`, a String representing an HTML tag or a reference referring to a React Component
* `key`, a String to uniquely identify an React Element
* `ref`, a reference to access either the underlying DOM node or React Component Instance)
* `props` (properties Object)

A React Element is not an instance of a React Component. It is just a simplified "description" of how the React Component Instance (or depending on the type an HTML tag) to be created should look like.

A React Element that describes a React Component doesn't know to which DOM node it is eventually rendered - this association is abstracted and will be resolved while rendering.

React Elements may contain child elements and thus are capable of forming element trees, which represent the Virtual DOM tree.

**React Components and React Component Instances**

A custom React Component is either created by `React.createClass` or by extending `React.Component` (ES2015). If a React Component is instantiated it expects a props Object and returns an instance, which is referred to as a React Component Instance.

A React Component can contain state and has access to the React Lifecycle methods. It must have at least a `render` method, which returns a React Element(-tree) when invoked. Please note that you never construct React Component Instances yourself but let React create it for you.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***In which lifecycle event do you make AJAX requests in React?***

According to official React docs, the recommended place to do Ajax requests is in `componentDidMount()` which is a lifecycle method that runs after the React component has been mounted to the DOM. This is so you can use `setState()` to update your component when the data is retrieved.

*Example*:

```js
import React from 'react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is meant by event handling in React?***

Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences:

* React events are named using camelCase, rather than lowercase.
* With JSX you pass a function as the event handler, rather than a string.

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How many outermost elements can be there in a JSX expression?***

A JSX expression must have only one outer element. For Example:

```js
const headings = (
    <div id = "outermost-element">
       <h1>I am a heading </h1>
       <h2>I am also a heading</h1>
    </div>
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain DOM diffing?***

**Document Object Model**

The DOM (Document Object Model) is an interface that represents an HTML document in a tree-like structure with nodes. This structure allows the document to be traversed and modified by programmers with each node being represented as an object. The DOM is created by the browser when
a web page is loaded.

**React\'s "Virtual DOM"**

The "Virtual DOM" is very similar to the real DOM, in that it is a tree-like structure kept in-memory, where React elements are represented as objects. This tree has many of the same properties as the real DOM without the power to change what is on the screen. It is a javascript object representing components in your application which can be updated quickly and efficiently by React.

When a JSX element is rendered or the state of an element changes, a new Virtual DOM tree is created. The function responsible for the creation of this tree is React\'s render() function. This is a fast process because the virtual DOM tree is just a javascript object and the UI will not be re-painted based on this new tree.

**DOM Diffing**

Once the Virtual DOM is created, React compares this new representation with a snapshot of the previous version of the virtual DOM to see exactly which elements have changed.

Once the difference is known, React updates only those objects that differ on the actual DOM and the browser re-paints the screen. The next time state or props changes for a component in the application, a new virtual DOM tree of React elements will be created and the process will repeat.

The process of checking the difference between the new Virtual DOM tree and the old Virtual DOM tree is called **diffing**. Diffing is accomplished by a **heuristic O(n)** algorithm. During this process, React will deduce the minimum number of steps needed to update the real DOM, eliminating unnecessary costly changes. This process is also referred to as **reconciliation**.

React implements a heuristic O(n) algorithm based on two assumptions:

1. Two elements of different types will produce different trees.
1. The developer can hint at which child elements may be stable across different renders with a key prop."

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What does shouldComponentUpdate do and why is it important?***

The `shouldComponentUpdate()` method allows Component to exit the Update life cycle if there is no reason to apply a new render. React does not deeply compare `props` by default. When `props` or `state` is updated React assumes we need to re-render the content.

The default implementation of this function returns true so to stop the re-render you need to return false here:

```js
shouldComponentUpdate(nextProps, nextState) {
  console.log(nextProps, nextState);
  console.log(this.props, this.state);
  return false;  
}
```

**Preventing unnecessary renders**

The `shouldComponentUpdate()` method is the first real life cycle optimization method that we can leverage in React. It checks the current props and state, compares it to the next props and state and then returns true if they are different, or false if they are the same. This method is not called for the initial render or when `forceUpdate()` is used.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the purpose of render() function in React?***

All React applications start at a root DOM node that marks the portion of the DOM that will be managed by React. When React is called to render the component tree it will first need the JSX in code to be converted into pure JavaScript. `render` function is part of the react component lifecyle where `ReactDOM` is the class object which exposes a method called `render` which is used to render the React JSX content into DOM.

Generally you would use `ReactDOM.render()` once in your App to render the top level component, all other components will be children to the top level component. A react component goes though a number of mounting and updating lifecycle method and decides to render the data in the render function. Any JSX code that you write in `render()` method is converted to `React.createElement(tag, props, children)` before it is rendered into the DOM.

```js
// App.js
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      Hello World !
    </div>
  );
}

export default App
```

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are React components?***

Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(`props`) and returns a React element that describes how a section of the UI (User Interface) should appear.

A React component can be either **stateful** or **stateless**. Stateful components are of the class type, while stateless components are of the function type.

**Stateless Component**

```js
import React from 'react';

const ExampleComponent = (props) => {
    return (<h1>Welcome to React!</h1>);
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ExampleComponent/>
      </div>
    )
  }
}
```

The above example shows a stateless component named ExampleComponent which is inserted in the `<App/>` component. The `ExampleComponent` just comprises of a `<h1>` element.

**Stateful Component**

```js
import React from 'react';

class ExampleComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      heading: "This is an Example Component!"
    }
  }
  render() {
    return (
        <div>
            <h1>{ this.props.welcomeMsg }</h1>
            <h2>{ this.state.heading }</h2>
        </div>
    )
  }
}

export default class App extends React.Component {
  render() {
    const welcomeMsg = "Welcome to React!";
    return (
      <div>
        <ExampleComponent welcomeMsg={welcomeMsg}/>
      </div>
    )
  }
}
```

The above example shows a stateful component named ExampleComponent which is inserted in the `<App/>` component. The `ExampleComponent` contains a `<h1>` and the `<h2>` element wrapped in a `<div>`. The `<h1>` displays data using props while the `<h2>` takes its data from the internal state of the ExampleComponent.

**Props**

Props are an optional input, and can be used to send data to the component. They are immutable properties, which makes them read-only. This also makes them come in handy when you want to display fixed values.

**State**

A React component of class type maintains an internal state which acts as a data store for it. This state can be updated and whenever it is changed, React re-renders that component.

**LifeCycle**

Every component has **lifecycle methods**. They specify the behavior of the component when it undergoes a phase of its lifecycle.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do I bind a function to a component instance?***

There are several ways to make sure functions have access to component attributes like `this.props` and `this.state`, depending on which syntax and build steps you are using.

**Bind in Constructor (ES5)**

```js
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

**Class Properties**

```js
class App extends Component {
  // Note: this syntax is experimental and not standardized yet.
  handleClick = () => {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

**Bind in Render**

```js
class App extends Component {
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={this.handleClick.bind(this)}>Click Me</button>;
  }
}
```

*Note: Using `Function.prototype.bind` in render creates a new function each time the component renders, which may have performance implications*

**Arrow Function in Render**

```js
class App extends Component {
  handleClick() {
    console.log('Click happened');
  }
  render() {
    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}
```

*Note: Using an arrow function in render creates a new function each time the component renders, which may break optimizations based on strict identity comparison.*

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***How do I pass a parameter to an event handler or callback?***

You can use an arrow function to wrap around an event handler and pass parameters:

```js
<button onClick={() => this.handleClick(id)} />
```

This is equivalent to calling `.bind`

```js
<button onClick={this.handleClick.bind(this, id)} />
```

*Example*: Passing params using arrow functions

```js
const A = 65 // ASCII character code

class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
  }
  handleClick(letter) {
    this.setState({ justClicked: letter });
  }
  render() {
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} onClick={() => this.handleClick(letter)}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
```

*Example*: Passing params using data-attributes

Alternately, you can use DOM APIs to store data needed for event handlers. Consider this approach if you need to optimize a large number of elements or have a render tree that relies on React.PureComponent equality checks.

```js
const A = 65 // ASCII character code

class Alphabet extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      justClicked: null,
      letters: Array.from({length: 26}, (_, i) => String.fromCharCode(A + i))
    };
  }

  handleClick(e) {
    this.setState({
      justClicked: e.target.dataset.letter
    });
  }

  render() {
    return (
      <div>
        Just clicked: {this.state.justClicked}
        <ul>
          {this.state.letters.map(letter =>
            <li key={letter} data-letter={letter} onClick={this.handleClick}>
              {letter}
            </li>
          )}
        </ul>
      </div>
    )
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

#### Q. ***Which is the return statement in React?***
#### Q. ***How to kept a representation of UI part?***
#### Q. ***Different types of DOM?***
#### Q. ***How to find the area of suitability in React?***
#### Q. ***Which function is used to create UI representation?***
#### Q. ***What is reconciliation in React?***
#### Q. ***Why React uses class Name over class attribute?***
#### Q. ***What are portals in React?***
#### Q. ***What is the use of react-dom package?***
#### Q. ***What is React DOM Server?***
#### Q. ***What will happen if you use props in initial state?***
#### Q. ***How to re-render the view when the browser is resized?***
#### Q. ***What is the difference between setState() and replaceState() methods?***
#### Q. ***How can find the version of React at runtime in the browser?***
#### Q. ***How to use https instead of http in create-react-app?***
#### Q. ***Why is a component constructor called only once?***
#### Q. ***What are the popular packages for animation?***
#### Q. ***What is the purpose of push() and replace() methods of history?***
#### Q. ***How to pass params to history.push() method in React Router v4?***
#### Q. ***For what reason would it be advisable for us to utilize React, tell its points of interest as well?***
#### Q. ***Enroll React constraints on the off chance that you know any?***
#### Q. ***What is the importance of the announcement ‘In React, everything is part’?***
#### Q. ***What is the best approach to install at least two parts?***
#### Q. ***By what method can the segment state be refreshed?***
#### Q. ***What are the techniques for React segment lifecycle?***
#### Q. ***What is yield catchphrase in JavaScript ?***
#### Q. ***What is Presentational segment?***
#### Q. ***What are the Component uses and features?***
#### Q. ***What are the kinds of information that control a segment in React?***
#### Q. ***Would i be able to dispatch an activity in reducer?***
#### Q. ***What are the drawbacks of MVW pattern?***
#### Q. ***What is the difference between creating Element and clone Element?***
#### Q. ***Explain the Lists in React?***
#### Q. ***How to write comments in React?***
#### Q. ***Why is it necessary to start component names with a capital letter?***
#### Q. ***What are fragments? Why are fragments better than container divs?***
#### Q. ***What are Forward Refs?***
#### Q. ***Which is the preferred option callback refs or findDOMNode()?***
#### Q. ***Why do we need a Router in React? List down the advantages of React Router?***
#### Q. ***How is React Router different from Conventional Routing?***
#### Q. ***Why you get "Router may have only one child element" warning?***
#### Q. ***How to use styles in React?***
#### Q. ***How many ways can we style the React Component?***
#### Q. ***Explain CSS Module styling in React?***
#### Q. ***What are Styled Components?***
#### Q. ***What Are The Advantages Of Using Jsx?***
#### Q. ***What Are Functional Programming Concepts?***
#### Q. ***Does React use HTML?***
#### Q. ***What are the popular animation package in React ecosystem?***
#### Q. ***What is dispatcher?***
#### Q. ***What is meant by callback function? What is its purpose?***
#### Q. ***Explain synthetic event in React js?***
#### Q. ***What kind of information controls a segment in React?***
#### Q. ***What are children prop?***
#### Q. ***What are error boundaries in ReactJS (16)?***
#### Q. ***What is the use of empty tags <> </>?***
#### Q. ***What are the major issues of using MVC architecture in React?***
#### Q. ***What is the reduction?***
#### Q. ***When should you use the top-class elements for the function element?***
#### Q. ***How can you share an element in the parsing?***
#### Q. ***Ho can you re-render a component without using setState() function?***
#### Q. ***Explain the term "Restructuring"?***
#### Q. ***Explain the meaning of Mounting and Demounting?***
#### Q. ***What is the use of ‘prop-types’ library?***
#### Q. ***What is the main difference between createElement and cloneElment?***
#### Q. ***How can we do server-side rendering in React?***
#### Q. ***State the difference between getIntialState() and constructor()?***
#### Q. ***What is ComponentWillMount()?***
#### Q. ***How to dispatch the data in-store?***
#### Q. ***What is the purpose of using bindActionsCreators?***
#### Q. ***Can JSX element be attached to other JSX components?***
#### Q. ***How to start a project in React?***
#### Q. ***How to use a library like jQuery in React, which interacts directly with DOM?***
#### Q. ***Explain the use of Webpack and Babel in React?***
#### Q. ***Explain type-checking with PropTypes in React?***
#### Q. ***What is the difference between this.state.name=”Thomas” and this.setState({name: “Thomas”}) ?***
#### Q. ***Explain the purpose of providing reflection()?***
#### Q. ***What is a situation in response, and how is it used?***
#### Q. ***What is the response rat?***
#### Q. ***How many external elements are there in JSX output?***
#### Q. ***Do you mention the main benefits of Fluoxes?***
#### Q. ***How do the DOM and the Virtual Top Object differ from one person?***
#### Q. ***What can be done if there is more than one line of expression?***
#### Q. ***What do you know about the rounder?***
#### Q. ***What is one of the main types of reflection?***
#### Q. ***Can props be found in parenting elements?***
#### Q. ***What do you know about artificial events?***
#### Q. ***Doom variation?***
#### Q. ***When you use the top class elements for the function element?***
#### Q. ***How do we share between elements in the parsing?***
#### Q. ***When can you avoid using setState() after a component has been unmounted?***
#### Q. ***How can you bind an event handler in JSX call back?***
#### Q. ***Why do we use ‘key’ attribute and when do you use it?***
#### Q. ***How to group list of children without adding extra nodes to the DOM?***
#### Q. ***List out the predefined proptypes?***
#### Q. ***How to catch JavaScript errors anywhere in their child component tree?***
#### Q. ***Can you write an error boundary component?***
#### Q. ***How to apply focus to an input element?***
#### Q. ***How do you set a timer to update every second?***
#### Q. ***How to implement two way data binding in React js?***
#### Q. ***How do you display falsy values in JSX?***
#### Q. ***How to trigger click event programmatically?***
#### Q. ***How to display styles based on props value?***
#### Q. ***Explain strict mode in React with example?***
#### Q. ***How to convert text to uppercase on user input entered?***
#### Q. ***Give an example on how to create props proxy for HOC component?***
#### Q. ***How to set a dynamic key for state?***
#### Q. ***How to render children into a DOM node that exists outside the DOM hierarchy?***
#### Q. ***Can you name the pointer events in React?***
#### Q. ***What is difference between Pure Component Vs Component?***
#### Q. ***How to programmatically redirect to another page using React router?***
#### Q. ***What is the use of {…this.props} ?***
#### Q. ***How to hide a component based on state value?***
#### Q. ***How to pass props in React router?***
#### Q. ***What are the Pr-defined keywords in react alternate to html attributes?***
#### Q. ***How to get query parameters in react routing?***
#### Q. ***How do you share code between components using render props?***
#### Q. ***How do you remove an element in the react state?***
#### Q. ***What is called Destructuring?***
#### Q. ***What is called Stateless function?***
#### Q. ***Write the syntax to create the state and change the value of state?***
#### Q. ***What is the function using in react to list the values?***
#### Q. ***What is the benchmark in react comparing another javascript framework?***
#### Q. ***What is the main goal of React Fiber?***
#### Q. ***Why it is a must to capitalize component names?***
#### Q. ***How to set the state in React using the dynamic key name?***
#### Q. ***Real Disadvantages of utilizing React?***
#### Q. ***Can you explain about the standard JavaScript toolchain, transpilation, JSX?***
#### Q. ***Please explain step by step approach on how to setup environment for React?***
#### Q. ***Have you used HTML while working with React.js?***
#### Q. ***What is the difference between setState() and forceUpdate()?***
#### Q. ***Which feature can we use to cause a component to render only when its ID changes?***
#### Q. ***What kind of tools might you use in the build steps to optimize the compiled output of the React code?***
#### Q. ***What is high-level component lifecycle in React.js?***
#### Q. ***What is low-level component lifecycle in React.js?***
#### Q. ***How to use Forms in React? Give an example of using Forms in React by developing a User Registration Form?***
#### Q. ***What is the difference between React Components extend, createClass and mixins, HOCs?***
#### Q. ***What is Suspense in React?***
#### Q. ***What is the difference between NavLink and Link?***
#### Q. ***What is withRouter for in react-router-dom?***
#### Q. ***How to display API data using Axios in React?***
#### Q. ***What is difference between react hooks and lifecycle methods?***
#### Q. ***How to translate your React app with react-i18next?***
#### Q. ***How RxJS is used in React for state management?***
#### Q. ***Exmplain functional components and class components in React?***
#### Q. ***What are synthetic events in React js?***
#### Q. ***What is lazy function in React?***
#### Q. ***What does Side effects mean in React?***
#### Q. ***What are the benefits of using Axios() over Fetch() for making http requests?***
#### Q. ***What does it mean for a component to be mounted in React?***
#### Q. ***How would you prevent a component from rendering in React?***
#### Q. ***What is Flow in react?***
#### Q. ***What is the difference between a Presentational component and a Container component?***
#### Q. ***What is an alternative way to avoid having to bind to this in event callback methods?***
#### Q. ***Why is it advised to pass a callback function to setState as opposed to an object?***
#### Q. ***What is the alternative of binding `this` in the constructor?***
#### Q. ***What is the typical pattern for rendering a list of components from an array of data?***
#### Q. ***How to bind methods or event handlers in JSX callbacks?***
#### Q. ***What is the difference between ShadowDOM and VirtualDOM?***
#### Q. ***What is Lifting State Up in ReactJS?***
#### Q. ***How to setstate with a dynamic key name?***
#### Q. ***What would be the common mistake of function being called every time the component renders?***
#### Q. ***Why do class methods need to be bound to a class instance?***
#### Q. ***What is the difference between HTML and React event handling?***
#### Q. ***What is "Children" in React?***
#### Q. ***What does Eject do in Create React App?***
#### Q. ***Why are string refs considered legacy in React?***
#### Q. ***How to apply validation on Props in ReactJS***
#### Q. ***What are the recommended ways for static type checking?***
#### Q. ***What is the difference between Flow and PropTypes?***
#### Q. ***What is mapStateToProps and mapDispatchToProps?***
#### Q. ***Does React re-render all components and sub components every time setState is called?***
#### Q. ***What is reselect and how it works?***
#### Q. ***How to prevent components from re-rendering?***
#### Q. ***How to use Component Composition to create a Flexible Compound Component in React?***
#### Q. ***What is React Fiber?***
#### Q. ***Explain Composition vs Inheritance in React?***
#### Q. ***What is a Webhook in React?

<br/>

# React Unit Testing

## Q. ***Explain react unit testing using Jest and Enzyme?***

**Jest**  

Jest is a JavaScript unit testing framework, used by Facebook to test services and React applications. Jest acts as a **test runner**, **assertion library**, and **mocking library**.

Jest also provides Snapshot testing, the ability to create a rendered *snapshot* of a component and compare it to a previously saved *snapshot*. The test will fail if the two do not match.

**Enzyme**

Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components output. Enzyme, created by Airbnb, adds some great additional utility methods for rendering a component (or multiple components), finding elements, and interacting with elements.

**Setup with Create React App**

```bash
# for rendering snapshots
npm install  react-test-renderer --save-dev

# for dom testing
npm install enzyme --save-dev
```

```json
{
  "react": "^16.13.1",
  "@testing-library/jest-dom": "^4.2.4",
  "@testing-library/react": "^9.5.0",
  "@testing-library/user-event": "^7.2.1",
  "enzyme": "3.9",
  "jest": "24.5.0",
  "jest-cli": "24.5.0",
  "babel-jest": "24.5.0"
}
```

**Set up a React application**

```bash
npx create-react-app counter-app
```

```js
// src/App.js

import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  makeIncrementer = amount => () =>
    this.setState(prevState => ({
      count: prevState.count + amount,
    }));
  increment = this.makeIncrementer(1);
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button className="increment" onClick={this.increment}>Increment count</button>
      </div>
    )
  }
}
export default App
```

**Using Enzyme**

```js
 // src/App.test.js

import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />)
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: 0')
  })
})
```

**Testing User Interaction**

```js
// src/App.test.js

describe('App component', () => {

  it('increments count by 1 when the increment button is clicked', () => {
    const wrapper = shallow(<App />)
    const incrementBtn = wrapper.find('button.increment')
    incrementBtn.simulate('click')
    const text = wrapper.find('p').text()
    expect(text).toEqual('Count: 1')
  })
})
```

**Read More**

* [Jest Framework](https://jestjs.io/docs/en/tutorial-react)
* [Enzyme Framework](https://enzymejs.github.io/enzyme/)

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Explain about shallow() method in enzyme?***

The `shallow()` method is used to render the single component that we are testing. It does not render child components. Simple shallow calls the `constructor()`, `render()`, `componentDidMount()` methods.

*Example*:

```js
import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

function Name(props) {
  return <span>Welcome {props.name}</span>;
}

function Welcome(props) {
  return (
    <h1>
      <Name name={props.name} />
    </h1>
  );
}

const wrapper = shallow(<Welcome name="Alex" />);
console.log(wrapper.debug());
```

**When not to use Shallow Rendering**

* Shallow rendering is not useful for testing the end-user experience.
* Shallow rendering is not useful for testing DOM rendering or interactions.
* Shallow rendering is not useful for integration testing.
* Shallow rendering is not useful for browser testing.
* Shallow rendering is not useful for end to end testing.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is mount() method in Enzyme?***

**Full DOM rendering** generates a virtual DOM of the component with the help of a library called `jsdom`. It is useful when we want to test the behavior of a component with its children.

This is more suitable when there are components which directly interfere with DOM API or lifecycle methods of React. Simple mount calls the `constructor()`, `render()`, `componentDidMount()` methods.

*Example*:

```js
...
import ListItem from './ListItem';
...

return (
    <ul className="list-items">
      {items.map(item => <ListItem key={item} item={item} />)}
    </ul>
);
```
```js
import React from 'react';
import { mount } from '../enzyme';
import List from './List';

describe('List tests', () => {

  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];

    const wrapper = mount(<List items={items} />);

    // Let's check what wrong in our instance
    console.log(wrapper.debug());

    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  ...
});
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is render() method in Enzyme?***

**Static rendering** is used to render react components to static HTML. It\'s implemented using a library called **Cheerio**. It renders the children. But this does not have access to React lifecycle methods.

For static rendering, we can not access to Enzyme API methods such as `contains()` and `debug()`. However we can access to the full arsenal of Cheerios manipulation and traversal methods such as `addClass()` and `find()` respectively.

*Example*:

```js
import React from 'react';
import { render } from '../enzyme';

import List from './List';
import { wrap } from 'module';

describe('List tests', () => {

  it('renders list-items', () => {
    const items = ['one', 'two', 'three'];
    const wrapper = render(<List items={items} />);

    wrapper.addClass('foo');
    // Expect the wrapper object to be defined
    expect(wrapper.find('.list-items')).toBeDefined();
    expect(wrapper.find('.item')).toHaveLength(items.length);
  });

  ...
});
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is the purpose of the ReactTestUtils package?***

**ReactTestUtils** is used to test React-based components. It can simulate all the JavaScript-based events, which ReactJS supports. Some of its frequently methods are

* `act()`
* `mockComponent()`
* `isElement()`
* `isElementOfType()`
* `isDOMComponent()`
* `renderIntoDocument()`
* `Simulate()`

**act()**

To prepare a component for assertions, wrap the code rendering it and performing updates inside an act() call. This makes your test run closer to how React works in the browser.

```js
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}
```

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from './Counter';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');

  // Test second render and componentDidUpdate
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(label.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
})
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What is react-test-renderer package in React?***

This package provides a React renderer that can be used to render React components to pure JavaScript objects, without depending on the DOM or a native mobile environment.

Essentially, this package makes it easy to grab a snapshot of the platform view hierarchy (similar to a DOM tree) rendered by a React DOM or React Native component without using a browser or `jsdom`.

*Example*:

```js
import React from 'react'
import renderer from 'react-test-renderer'
import App from './app.js'; // The component being tested

/**
 * Snapshot tests are a useful when UI does not change frequently.
 *
 * A typical snapshot test case for a mobile app renders a UI component, takes a snapshot,
 * then compares it to a reference snapshot file stored alongside the test.
 */
describe('APP Component', () => {

    test('Matches the snapshot', () => {
      const tree = renderer.create(<App />).toJSON()
      expect(tree).toMatchSnapshot()
    })
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***Why should we use Test-Driven Development (TDD) for ReactJS?***

Test-driven development is an approach when developers create a product backwards. TDD requires developers to write tests first and only then start to write the code. TDD is a development method that utilizes repetition of a short development cycle called Red-Green-Refactor.

**Process:**

1. Add a test
1. Run all tests and see if the new test fails (red)
1. Write the code to pass the test (green)
1. Run all tests
1. Refactor
1. Repeat

**Pros:**

1. Design before implementation
1. Helps prevent future regressions and bugs
1. Increases confidence that the code works as expected

**Cons:**

1. Takes longer to develop (but it can save time in the long run)
1. Testing edge cases is hard
1. Mocking, faking, and stubbing are all even harder

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Q. ***What are the benefits of using data-test selector over className or Id selector in Jest?***

HTML structure and css classes tend to change due to design changes. Which will cause to re-write tests quite often. Also, if we are using css-modules we can not rely on class names. Because of that, React provides `data-test` attribute for selecting elements in jsx.

```js
// APP Component
import React from 'react'
import './App.scss'

function App() {
  return (
    <div data-test='app-header'>
      Hello React
    </div>
  );
}
export default App
```
```js
import React from 'react'
import { shallow } from 'enzyme'
import App from './App'


describe('APP Component', () => {

  test('title', () => {
    let wrapper = shallow(<APP />)
    let title = wrapper.find(`[data-test='app-header']`).text()

    expect(title).toMatch('Hello React')
  })

})
```
<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

<br/>

## Redux Questions

#### Q. ***What is Redux?***
#### Q. ***What do you understand by "Single source of truth" in Redux?***
#### Q. ***What are the features of Workflow in Redux?***
#### Q. ***Explain the components of Redux?***
#### Q. ***What is Redux Thunk used for?***
#### Q. ***What is difference between component and container in react redux?***
#### Q. ***What is Redux in React.js?***
#### Q. ***Explain the role of Reducer?***
#### Q. ***Define Reducers in React?***
#### Q. ***What are Pure Functions and how they are used in reducers?***
#### Q. ***How to splitting the reducers?***
#### Q. ***Why do you use Redux and Flux?***
#### Q. ***How to create action creators react with redux?***
#### Q. ***How to set the dataflow using react with redux?***
#### Q. ***What are the three principles that Redux follows?***
#### Q. ***What is Redux Change Of State?***
#### Q. ***Where Can Redux Be Used?***
#### Q. ***What is the typical flow Of data in a React + Redux App?***
#### Q. ***What are Redux workflow features?***
#### Q. ***Explain action’s in Redux?***
#### Q. ***What are the benefits of Redux?***
#### Q. ***How to utilize interface() from React Redux?***
#### Q. ***What is the reason for at image in the Redux associate decorator?***
#### Q. ***What is the contrast between React setting and React Redux?***
#### Q. ***How to get to Redux store outside a part?***
#### Q. ***What are the center standards of Redux?***
#### Q. ***What are the drawbacks of Redux contrasted with Flux?***
#### Q. ***What is the difference between React context and React Redux?***
#### Q. ***What is a store in Redux?***
#### Q. ***Explain usage of react with redux application?***
#### Q. ***What are the advantages of using Redux?***
#### Q. ***How will be you able to handle more action using redux?***
#### Q. ***Exaplin React with redux  archicture flow?***
#### Q. ***How is flux different from redux?***
#### Q. ***How will you distinguish Redux from Flux?***
#### Q. ***Draw a diagram showing how data flows through Redux?***
#### Q. ***How is Redux different from Flux?***
#### Q. ***What are the advantages of Redux?***
#### Q. ***How are Actions defined in Redux?***
#### Q. ***Describe Flux vs MVC?***
#### Q. ***What is Flux concept in React? Explain various flux elements including Action, Dispatcher, Store and View?***
#### Q. ***How to structure Redux top level directories?***
#### Q. ***What are the features of Redux DevTools?***
#### Q. ***How to add multiple middlewares to Redux?***
#### Q. ***How to set initial state in Redux?***
#### Q. ***What are the downsides of Redux over Flux?***
#### Q. ***How to access redux store outside a react component?***
#### Q. ***Are there any similarities between Redux and RxJS?***
#### Q. ***How to use connect from react redux?***
#### Q. ***What is the purpose of the constants in Redux?***
#### Q. ***What are the differences between redux-saga and redux-thunk?***
#### Q. ***Explain Redux form with an example?***
#### Q. ***How to reset state in redux?***
#### Q. ***Whats the purpose of at (@) symbol in the redux connect decorator?***
#### Q. ***Why are Redux state functions called as reducers?***
#### Q. ***How to make Ajax request in Redux?***
#### Q. ***What is the proper way to access Redux store?***
#### Q. ***What are the differences between call and put in redux-saga?***
#### Q. ***What is the mental model of redux-saga?***
#### Q. ***How Relay is different from Redux?***
#### Q. ***What are the important Redux Terminology?***
#### Q. ***Where is the state kept in a React + Redux application?***
#### Q. ***What are typical middleware choices for handling asynchronous calls in Redux?***

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
