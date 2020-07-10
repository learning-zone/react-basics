# React Interview Questions 


*Click <img src="assets/star.png" width="18" height="18" align="absmiddle" title="Star" /> if you like the project. Pull Request are highly appreciated.*

<br/>

## Table of Contents 

* *[React Quick Reference](quick-reference.md)*

<br/>

### React Projects

|Sl.No| Project Name                              | Technologies Used                             |
|-----|-------------------------------------------|---------------------------------------------- |
| 01  |	[Poke'Times](poketimes)                   |React                                          |
| 02  |	[React-Express-MSSQL](react-express-mssql)|React, Node.js, Express.js, SQL-Server         |
| 03  |	[Todo-App](todo-app)                      |React                                          |
| 04  |	[React Login (JWT)](react-login)          |React, JWT, MD5, MSSQL, Express.js             |
| 05  |	[React Seed](react-seed)                  |React                                          |


<br/>

#### Q. ***What is React.js? How is it different from other javascript frameworks?*** 
React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application view layer.

The main objective of ReactJS is to develop User Interfaces (UI) that improves the speed of the apps. It uses virtual DOM (JavaScript object), which improves the performance of the app. The JavaScript virtual DOM is faster than the regular DOM. We can use ReactJS on the client and server-side as well as with other frameworks. It uses component and data patterns that improve readability and helps to maintain larger apps.

#### Q. ***How React works? How Virtual-DOM works in React?***
While building client-side apps, a team at Facebook developers realized that the DOM is slow (The Document Object Model (DOM) is an application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated). So, to make it faster, React implements a virtual DOM that is basically a DOM tree representation in Javascript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browsers DOM.

Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements. The reason for this is that JavaScript is very fast and it is worth keeping a DOM tree in it to speedup its manipulation.

#### Q. ***What are Components in React?***
Components are the building blocks of any React app and a typical React app will have many of these. Simply put, a component is a JavaScript class or function that optionally accepts inputs i.e. properties(props) and returns a React element that describes how a section of the UI (User Interface) should appear.

A react application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain internal state – for example, a TabList component may store a variable corresponding to the currently open tab.

*Example*: Class component 
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}
```
#### Q. ***List some of the major advantages and limitations of React?***
**Advantages**  

* It relies on a virtual-dom to know what is really changing in your UI and will re-render only what has really changed, hence better performance wise
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

#### Q. ***What is JSX and how JSX can help applications in React.js?***
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any `createElement()` or `appendChild()` methods. JSX converts HTML tags into react elements. React uses JSX for templating instead of regular JavaScript. It is not necessary to use it, however, following are some pros that come with it.

* It is faster because it performs optimization while compiling code to JavaScript.
* It is also type-safe and most of the errors can be caught during compilation.
* It makes it easier and faster to write templates.

Example:
```jsx
import React from 'react';

class App extends React.Component {

   render() {
      return (
         <div>
            Hello World!!!
         </div>
      );
   }
}
export default App;
```

#### Q. ***What is ReactDOM?***
`ReactDOM()` is a package that provides DOM specific methods that can be used at the top level of a web app to enable an efficient way of managing DOM elements of the web page. ReactDOM provides the developers with an API containing following methods and a few more.

* render()
* findDOMNode()
* unmountComponentAtNode()
* hydrate()
* createPortal()

React DOM is the glue between React and the DOM. When u want to show your react component on DOM u need to use this ReactDOM.render(); from React Dom.

Before **v0.14** React Dom was part of React. The reason React and ReactDOM were split into two libraries was due to the arrival of React Native. React contains functionality utilised in web and mobile apps. ReactDOM functionality is utilised only in web apps.
ReactDOM uses observables thus provides an efficient way of DOM handling. ReactDOM can be used in both client-side and server-side.

Example: 

```jsx
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

```jsx
import ReactDOM from 'react-dom'
```
* **ReactDOM.render() Function**  

This function is used to render a single React Component or several Components wrapped together in a Component or a div element. This function uses the efficient methods of React for updating the DOM by being able to change only a subtree, efficient diff methods etc.
This function returns a reference to the component or null if a stateless component was rendered.

`ReactDOM.render()` replaces the child of the given container if any. It uses highly efficient diff algorithm and can modify any subtree of the DOM.

```jsx
ReactDOM.render(element, container, callback)
```

* **element**: This parameter expects a JSX expression or a React Element to be rendered.
* **container**: This parameter expects the container in which the element has to be rendered.
* **callback**: This is an optional parameter that expects a function that is to be executed once the render is complete.


* **findDOMNode() Function**  

This function is generally used to get the DOM node where a particular React component was rendered. This method is very less used as the following can be done adding a ref attribute to each component itself.

`findDOMNode()` function can only be implemented upon mounted components thus Functional components can not be used in findDOMNode() method.

```jsx
ReactDOM.findDOMNode(component)
```

This method takes a single parameter component which expects a React Component to be searched in the Browser DOM. This function returns the DOM node where the component was rendered on success otherwise null.

* **unmountComponentAtNode() Function**  

This function is used to unmount or remove the React Component that was rendered to a particular container. 

```jsx
ReactDOM.unmountComponentAtNode(container)
```
This method takes a single parameter container which expects the DOM container from which the React component has to be removed. This function returns true on success otherwise false.

* **hydrate() Function**  

This method is equivalent to the render() method but is implemented while using server-side rendering.

```jsx
ReactDOM.hydrate(element, container, callback)
```

* **element**: This parameter expects a JSX expression or a React Component to be rendered.
* **container**: This parameter expects the container in which the element has to be rendered.
* **callback**: This is an optional parameter that expects a function that is to be executed once the render is complete.

This function attempts to attach event listeners to the existing markup and returns a reference to the component or null if a stateless component was rendered.

* **createPortal() Function**  

Usually, when an element is returned from a component\'s render method, it\'s mounted on the DOM as a child of the nearest parent node which in some cases may not be desired. Portals allow us to render a component into a DOM node that resides outside the current DOM hierarchy of the parent component.

```jsx
ReactDOM.createPortal(child, container)
```

* **child**: This parameter expects a JSX expression or a React Component to be rendered.
* **container**: This parameter expects the container in which the element has to be rendered.

#### Q. ***What is the difference between ReactDOM and React?***
```jsx
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

#### Q. ***What are the differences between a class component and functional component?***
#### Q. ***What is the difference between state and props?***
#### Q. ***How would you create Higher Order Components (HOCs) in React.js?***
#### Q. ***What is PureComponent? When to use PureComponent over Component?***
#### Q. ***How Virtual-DOM is more efficient than Dirty checking?***
#### Q. ***Is setState() is async? Why is setState() in React Async instead of Sync?***
#### Q. ***What are controlled and uncontrolled components in React?***
#### Q. ***What is React.cloneElement? And the difference with this.props.children?***
#### Q. ***What is the second argument that can optionally be passed to setState and what is its purpose?***
#### Q. ***Differentiate between Real DOM and Virtual DOM?***
#### Q. ***How different is React’s ES6 syntax when compared to ES5?***
#### Q. ***What do you understand from “In React, everything is a component.”?***
#### Q. ***What is arrow function in React? How is it used?***
#### Q. ***Differentiate between stateful and stateless components?***
#### Q. ***What are the different phases of React component’s lifecycle?***
#### Q. ***What is an event in React? How do you create an event in React?***
#### Q. ***What do you understand by Refs in React? List some of the cases when you should use Refs?***
#### Q. ***How do you modularize code in React?***
#### Q. ***What is the significance of keys in React?***
#### Q. ***What were the major problems with MVC framework?***
#### Q. ***What do you understand by “Single source of truth”?***
#### Q. ***What is React Router? Why is switch keyword used in React Router v4?***
#### Q. ***Explain the standard JavaScript toolchain, transpilation (via Babel or other compilers), JSX, and these items’ significance in recent development. What sort of tools might you use in the build steps to optimize the compiled output React code?***
#### Q. ***Compare and contrast incorporating mixins and enforcing modularity in React Components. (extend, createClass and mixins, HOCs) Why would you use these techniques, and what are the drawbacks of each?***
#### Q. ***How might React handle or restrict Props to certain types, or require certain Props to exist?***
#### Q. ***What is prop drilling and how can you avoid it?***
#### Q. ***Explain the positives and negatives of shallow rendering components in tests?***
#### Q. ***If you wanted a component to perform an action only once when the component initially rendered—e.g., make a web analytics call—how would you achieve this with a class component? And how would you achieve it with a function component?***
#### Q. ***What are the most common approaches for styling a React application??***
#### Q. ***How can automated tooling be used to improve the accessibility of a React application?***
#### Q. ***If you were working on a React application that was rendering a page very slowly, how would you go about investigating and fixing the issue?***
#### Q. ***What is the purpose of using super constructor with props argument?***
#### Q. ***Why should not we update the state directly?***
#### Q. ***What do these three dots (...) in React do?***
#### Q. ***What are React Hooks? What are advantages of using React Hooks?***
#### Q. ***What is React Fiber?***
#### Q. ***How to apply validation on Props in React?***
#### Q. ***What is the difference between using constructor vs getInitialState in React?***
#### Q. ***When is it important to pass props to super(), and why?***
#### Q. ***How to conditionally add attributes to React components?***
#### Q. ***Do Hooks replace render props and higher-order components?***
#### Q. ***How would you go about investigating slow React application rendering?***
#### Q. ***When would you use StrictMode component in React?***
#### Q. ***How does React renderer work exactly when we call setState?***
#### Q. ***How to avoid the need for binding in React?***
#### Q. ***Explain major differences between the ES5 and ES6 syntax with relevant examples?***
#### Q. ***Give a code example to demonstrate embedding two or more components into one?***
#### Q. ***How does the state differ from props in React?***
#### Q. ***How would you create a form in React?***
#### Q. ***What do you understand by Props in React?***
#### Q. ***Where would you put AJAX calls in your React code?***
#### Q. ***Write a sample code to update the state of a component in React?***
#### Q. ***What are states in React?***
#### Q. ***Can parent component change value in States and Props?***
#### Q. ***Can changes be made inside the component?***
#### Q. ***Can we make changes inside child components?***
#### Q. ***Why do we need a Router to React?***
#### Q. ***How the parent and child components exchange information?***
#### Q. ***What is the higher-order component?***
#### Q. ***How to embed two components in One component?***
#### Q. ***Give one basic difference between pros and state?***
#### Q. ***How do you tell React to build in Production mode and what will that do?***
#### Q. ***What do you understand with the term polling?***
#### Q. ***What’s the difference between an Element and a Component in React?***
#### Q. ***In which lifecycle event do you make AJAX requests and why?***
#### Q. ***What is meant by event handling?***
#### Q. ***How many outermost elements can be there in a JSX expression?***
#### Q. ***What exactly you can do if the expression contains more than one line?***
#### Q. ***Is it possible to use the word “Class” in JSX. Why or why not?***
#### Q. ***What are the stateless components?***
#### Q. ***What is one of the core types in React?***
#### Q. ***Is it possible to display props on a parent component?***
#### Q. ***Explain DOM diffing?***
#### Q. ***Is it possible to nest JSX elements into other JSX elements?*** 
#### Q. ***What happens when you call setState?***
#### Q. ***What are keys in React and why are they important?***
#### Q. ***What does shouldComponentUpdate do and why is it important?***
#### Q. ***Why would you use React.Children.map(props.children, () => ) instead of props.children.map(() => )?***
#### Q. ***Describe how events are handled in React?***
#### Q. ***How to use Events in React ?***
#### Q. ***What is the purpose of render() function in React?***
#### Q. ***What are React components? Why are components so important to React?***
#### Q. ***What’s the main difference between props and state?***
#### Q. ***How would you debug an issue in React code? What debugging tools have you used?***
#### Q. ***What are some of the major advantages to using React when building uis?***
#### Q. ***Can you bind JavaScript with XML in which front-end applications using which scripting language?***
#### Q. ***Display or Create DOM properties in Reacts ?***
#### Q. ***Which function is used to display a DOM?***
#### Q. ***What are the different types of components?***
#### Q. ***Which component have a Life-time basis in React?***
#### Q. ***How to pass values as input to Component?***
#### Q. ***Which method is used to change the state of an object?***
#### Q. ***How to pass a parameter to an event handler or callback?***
#### Q. ***Which is the return statement in React?***
#### Q. ***How to kept a representation of UI part?***
#### Q. ***Different types of DOM?***
#### Q. ***How to find the area of suitability in React?***
#### Q. ***Which function is used to create UI representation?***
#### Q. ***What is reconciliation?***
#### Q. ***Why React uses class Name over class attribute?***
#### Q. ***What are portals in React?***
#### Q. ***What is the use of react-dom package?***
#### Q. ***What is React DOM Server?***
#### Q. ***What will happen if you use set State() in constructor?***
#### Q. ***What will happen if you use props in initial state?***
#### Q. ***How to re-render the view when the browser is resized?***
#### Q. ***What is the difference between setState() and replaceState() methods?***
#### Q. ***How can find the version of React at runtime in the browser?***
#### Q. ***How to use https instead of http in create-react-app?***
#### Q. ***Why is a component constructor called only once?***
#### Q. ***What are the popular packages for animation?***
#### Q. ***What is the purpose of push() and replace() methods of history?***
#### Q. ***How to pass params to history.push() method in React Router v4?***
#### Q. ***What is the purpose of the ReactTestUtils package?***
#### Q. ***What is Jest?***
#### Q. ***What is the difference between Element and Component?***
#### Q. ***For what reason would it be advisable for us to utilize React, tell its points of interest as well?***
#### Q. ***Enroll React constraints on the off chance that you know any?***
#### Q. ***What is the importance of the announcement ‘In React, everything is part’?***
#### Q. ***What is the best approach to install at least two parts?***
#### Q. ***By what method can the segment state be refreshed?***
#### Q. ***What are the techniques for React segment lifecycle?***
#### Q. ***What is different b/w super() and super(props)?***
#### Q. ***What is the super keyword in React?***
#### Q. ***What is yield catchphrase in JavaScript ?***
#### Q. ***What is Presentational segment?***
#### Q. ***What are the Component uses and features?***
#### Q. ***What are the kinds of information that control a segment in React?***
#### Q. ***Would i be able to dispatch an activity in reducer?***
#### Q. ***What are the drawbacks of MVW pattern?***
#### Q. ***What is the difference between creating Element and clone Element?***
#### Q. ***Characterize State in React and the manner in which it is utilized in React?***
#### Q. ***How React's ES6 syntax is different from ES5 syntax?***
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
#### Q. ***What are the Props?***
#### Q. ***Does React use HTML?***
#### Q. ***What are the popular animation package in React ecosystem?***
#### Q. ***What is dispatcher?***
#### Q. ***What is meant by callback function? What is its purpose?***
#### Q. ***Explain synthetic event in React js?***
#### Q. ***What is React State?***
#### Q. ***How can you update state in React js?***
#### Q. ***What kind of information controls a segment in React?***
#### Q. ***What are children prop?***
#### Q. ***Explain error boundaries?***
#### Q. ***What is the use of empty tags <> </>?***
#### Q. ***What are the major issues of using MVC architecture in React?***
#### Q. ***What is the reduction?***
#### Q. ***When should you use the top-class elements for the function element?***
#### Q. ***How can you share an element in the parsing?***
#### Q. ***Ho can you re-render a component without using setState() function?***
#### Q. ***Can you update props in React?***
#### Q. ***Explain the term "Restructuring"?***
#### Q. ***Can you update the values of props?***
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
#### Q. ***What is MVC and where does React stand in it?***
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
#### Q. ***What do you mean in the state?***
#### Q. ***Can props be found in parenting elements?***
#### Q. ***What do you know about artificial events?***
#### Q. ***Doom variation?***
#### Q. ***When you use the top class elements for the function element?***
#### Q. ***How do we share between elements in the parsing?***
#### Q. ***When can you avoid using setState() after a component has been unmounted ?***
#### Q. ***How can you bind an event handler in JSX call back?***
#### Q. ***Why do we use ‘key’ attribute and when do you use it?***
#### Q. ***What is the use of Context in React?***
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
#### Q. ***Explain about shallow rendering in React testing?***
#### Q. ***What are the Pr-defined keywords in react alternate to html attributes?***
#### Q. ***How to get query parameters in react routing?***
#### Q. ***How do you share code between components using render props?***
#### Q. ***How do you remove an element in the react state?***
#### Q. ***Name the lifecycle method that listen to state changes?***
#### Q. ***What is called Super Props?***
#### Q. ***What is called Destructuring?***
#### Q. ***What is called render() function in react?***
#### Q. ***What is called Stateless function?***
#### Q. ***Write the syntax to create the state and change the value of state?***
#### Q. ***What is the function using in react to list the values?***
#### Q. ***What is the benchmark in react comparing another javascript framework?***
#### Q. ***How Diff Algorithm is implemented in React?***
#### Q. ***How to render the react DOM in browser?***
#### Q. ***What is the DOM?***
#### Q. ***What is the main goal of React Fiber?***
#### Q. ***Why it is a must to capitalize component names?***
#### Q. ***How to set the state in React using the dynamic key name?***
#### Q. ***Real Disadvantages of utilizing React?***
#### Q. ***Can you explain about the standard JavaScript toolchain, transpilation, JSX?***
#### Q. ***Please explain step by step approach on how to setup environment for React?***
#### Q. ***Have you used HTML while working with React.js?***
#### Q. ***How React Router and its techniques differ from more traditional JavaScript routers like Backbone’s Router?***
#### Q. ***What is the difference between setState() and forceUpdate()?***
#### Q. ***Which feature can we use to cause a component to render only when its ID changes?***
#### Q. ***What kind of tools might you use in the build steps to optimize the compiled output of the React code?***
#### Q. ***What is high-level component lifecycle in React.js?***
#### Q. ***What is low-level component lifecycle in React.js?***
#### Q. ***How to use Forms in React? Give an example of using Forms in React by developing a User Registration Form?***
#### Q. ***What is the difference between React Components in ES5 and ES6?***
#### Q. ***What is the difference between React Components extend, createClass and mixins, HOCs?***
#### Q. ***What is Suspense in React?***
#### Q. ***What is the difference between NavLink and Link?***
#### Q. ***What is withRouter for in react-router-dom?***
#### Q. ***How to display API data using Axios in React?***
#### Q. ***What is difference between react hooks and lifecycle methods?***
#### Q. ***How to translate your React app with react-i18next?***
#### Q. ***How RxJS is used in React for state management?***
#### Q. ***What is difference between useEffect vs. componentDidMount?***
#### Q. ***Exmplain functional components and class components in React?***
#### Q. ***What are synthetic events in React js?***
#### Q. ***What is lazy function in React?***
#### Q. ***What does Side effects mean in React?***
#### Q. ***What are the benefits of using Axios() over Fetch() for making http requests?***

<br/>

### Redux Questions 

#### Q. ***What is Redux?***
#### Q. ***What are the features of Workflow in Redux?***
#### Q. ***Explain the components of Redux?***
#### Q. ***What is Redux Thunk used for?***
#### Q. ***What is difference between component and container in react redux?***
#### Q. ***What is Redux in React.js?***
#### Q. ***What is Flux in React.js?***
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
#### Q. ***What's the reason for at image in the Redux associate decorator?***
#### Q. ***What is the contrast between React setting and React Redux?***
#### Q. ***How to make AJAX ask for in Redux?***
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
#### Q. ***What is Flux concept in React? Explain various flux elements including Action, Dispatcher, Store and View. Give a simple practical example of installing and using Flux in an application?***
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
