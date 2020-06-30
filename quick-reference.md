# React Quick Reference



## Components

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render () {
    return <div className='message-box'>
      Hello {this.props.name}
    </div>
  }
}
const el = document.body
ReactDOM.render(<Hello name='Alex' />, el)
```

## Stateless Components

```javascript
// Stateless React Component
const Headline = () => {
  return <h1>React Quick Reference</h1>
}

// Component that receives props
const Greetings = (props) => {
  return <p>You will love it {props.name}.</p>
}

// Component must only return ONE element (eg. DIV)
const Intro = () => {
  return (
    <div>
     <Headline />
     <p>Welcome to the React world!</p>
     <Greetings name="Alex" />
    </div>
  )
}

ReactDOM.render(
 <Intro />,
 document.getElementById('root')
);
```

## Properties

Use `this.props` to access properties passed to the component.

```javascript
<Video fullscreen={true} autoplay={false} />

render () {
  this.props.fullscreen
  const { fullscreen, autoplay } = this.props
  ···
}
```

## States

Use states `this.state` to manage dynamic data.

```javascript
constructor(props) {
  super(props)
  this.state = { username: undefined }
}

this.setState({ username: 'Alex' })

render () {
  this.state.username
  const { username } = this.state
  ···
}
```

## Children

Children are passed as the children property.

```javascript
<AlertBox>
  <h1>You have pending notifications</h1>
</AlertBox>
 
class AlertBox extends Component {
  render () {
    return <div className='alert-box'>
      {this.props.children}
    </div>
  }
}
```

## Nesting

```javascript
import React, {
  Component,
  Fragment
} from 'react'

class Info extends Component {
  render () {
    const { avatar, username } = this.props

    return (
      <Fragment>
        <UserAvatar src={avatar} />
        <UserProfile username={username} />
      </Fragment>
    )
  }
}
```

## Setting default props

```javascript
Hello.defaultProps = {
  color: 'blue'
}
```

## Setting default state

```javascript
class Hello extends Component {
  constructor (props) {
    super(props)
    this.state = { visible: true }
  }
}
```

## Functional components

Functional components have no state. Also, their props are passed as the first parameter to a function.

```javascript
function MyComponent ({ name }) {

  return <div className='message-box'>
    Hello {name}
  </div>
}
```

## Pure components

Performance-optimized version of React.Component.

```javascript
import React, {PureComponent} from 'react'

class MessageBox extends PureComponent {
  ···
}
```

## Component API

These methods and properties are available for Component instances.

```javascript
this.forceUpdate()
this.setState({ ... })
this.setState(state => { ... })
this.state
this.props
```

## Lifecycle

## Mounting

Set initial the state on `constructor()`. Add DOM event handlers, timers etc on `componentDidMount()`, then remove them on `componentWillUnmount()`.

```javascript
constructor (props)	      # Before rendering 
componentWillMount()	      # Avoid using it 
render()	              # Render 
componentDidMount()	      # After rendering (DOM available) 
componentWillUnmount()	      # Before DOM removal 
componentDidCatch()	      # Catch errors (16+) 
```

## Updating

Called when parents change properties and `setState()`. These are not called for initial renders.

```javascript
componentDidUpdate (prevProps, prevState, snapshot)	 # Use setState() here, but remember to compare props
shouldComponentUpdate (newProps, newState)	         # Skips render() if returns false
render()	                                         # Render
componentDidUpdate (prevProps, prevState)	         # Operate on the DOM here
```

## Hooks

## State Hook

```javascript
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Declaring multiple state variables

```javascript
function ExampleWithManyStates() {
 
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

## Effect hook

The `useEffect()` Hook can be used as `componentDidMount()`, `componentDidUpdate()`, and `componentWillUnmount()` combined.

```javascript
import React, { useState, useEffect } from 'react';

function Example() {

  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Hooks API Reference

```javascript
useState(initialState)	 
useEffect(() => { … })	 
useContext(MyContext)	       # value returned from React.createContext

seReducer(reducer, initialArg, init)	 
useCallback(() => { … })	 
useMemo(() => { … })	 
useRef(initialValue)	 
useImperativeHandle(ref, () => { … })	 
useLayoutEffect	            # identical to useEffect, but it fires synchronously after all DOM mutations
useDebugValue(value)	        # display a label for custom hooks in React DevTools
```


## DOM nodes

## References

Allows access to DOM nodes.

```javascript
class MyComponent extends Component {

  render () {
    return <div>
      <input ref={el => this.input = el} />
    </div>
  }

  componentDidMount () {
    this.input.focus()
  }
}
```

## DOM Events

Pass functions to attributes like onChange.

```javascript
class MyComponent extends Component {

  render () {
    <input type="text"
        value={this.state.value}
        onChange={event => this.onChange(event)} />
  }

  onChange (event) {
    this.setState({ value: event.target.value })
  }
}
```

## Transferring props

Propagates `src="..."` down to the sub-component.

```javascript
<VideoPlayer src="video.mp4" />

class VideoPlayer extends Component {
  render () {
    return <VideoEmbed {...this.props} />
  }
}
```

## Top-level API

There are more, but these are most common.

```javascript
React.createClass({ ... })
React.isValidElement(c)
ReactDOM.render(<Component />, domnode, [callback])
ReactDOM.unmountComponentAtNode(domnode)
ReactDOMServer.renderToString(<Component />)
ReactDOMServer.renderToStaticMarkup(<Component />)
```

## JSX patterns

## Style shorthand

Inline styles

```javascript
const style = { height: 10 }
return <div style={style}></div>
return <div style={{ margin: 0, padding: 0 }}></div>
```

## Conditionals

```javascript
<Fragment>
  {showMyComponent
    ? <MyComponent />
    : <OtherComponent />}
</Fragment>
```

## Lists

```javascript
class TodoList extends Component {

  render () {
    const { items } = this.props

    return <ul>
      {items.map(item =>
        <TodoItem item={item} key={item.key} />)}
    </ul>
  }
}
```

## Short-circuit evaluation

```javascript
<Fragment>
  {showPopup && <Popup />}
  ...
</Fragment>
```

##  Fragments and Arrays    

```javascript
// Arrays

render () {
  // Don't forget the keys!
  return [
    <li key="A">First item</li>,
    <li key="B">Second item</li>
  ]
}

// Fragments
render () {
  // Fragments don't require keys!
  return (
    <Fragment>
      <li>First item</li>
      <li>Second item</li>
    </Fragment>
  )
}
```

## Errors

Catch errors via `componentDidCatch()`.

```javascript
class MyComponent extends Component {
  ···
  componentDidCatch (error, info) {
    this.setState({ error })
  }
}
```

## Portals

This renders `this.props.children` into any location in the DOM.

```javascript
render () {
  return React.createPortal(
    this.props.children,
    document.getElementById('menu')
  )
}
```

## Hydration

Use `ReactDOM.hydrate()` instead of using `ReactDOM.render()` if you’re rendering over the output of ReactDOMServer.

```javascript
const el = document.getElementById('app')
ReactDOM.hydrate(<App />, el)
```

## PropTypes

Typechecking with PropTypes

```javascript
import PropTypes from 'prop-types';
```

|Property | Description |
|---------|-------------|
|any      |Anything     |
|string   |             |
|number   |             |
|func     |Function     |
|bool     |True or false|
|oneOf(any)|Enum types  |
|oneOfType(type array)|Union|
|array    |             |
|arrayOf(…)	|           |
|object   |             |
|objectOf(…)| Object with values of a certain type|
|instanceOf(…)|Instance of a class|
|shape(…)   |             |
|element    |React element|
|node       |DOM node     |
|(···).isRequired|Required|

## Basic types

```javascript
MyComponent.propTypes = {
  email:      PropTypes.string,
  seats:      PropTypes.number,
  callback:   PropTypes.func,
  isClosed:   PropTypes.bool,
  any:        PropTypes.any
}
```

## Required types

```javascript
MyCo.propTypes = {
  name:  PropTypes.string.isRequired
}
```

## Elements

```javascript
MyCo.propTypes = {
  // React element
  element: PropTypes.element,

  // num, string, element, or an array of those
  node: PropTypes.node
}
```

## Enumerables (oneOf)

```javascript
MyCo.propTypes = {
  direction: PropTypes.oneOf([
    'left', 'right'
  ])
}
```

## Custom validation

```javascript
MyCo.propTypes = {
 
  customProp: (props, key, componentName) => {
    if (!/matchme/.test(props[key])) {
      return new Error('Validation failed!')
    }
  }
}
```

## Arrays and objects

Use `.arrayOf()`, `.objectOf()`, `.instanceOf()`, `.shape()`.

```javascript
MyCo.propTypes = {
  list: PropTypes.array,
  ages: PropTypes.arrayOf(PropTypes.number),
  user: PropTypes.object,
  user: PropTypes.objectOf(PropTypes.number),
  message: PropTypes.instanceOf(Message)
}
MyCo.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    age:  PropTypes.number
  })
}
```