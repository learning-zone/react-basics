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
componentWillMount()	  # Avoid using it 
render()	              # Render 
componentDidMount()	      # After rendering (DOM available) 
componentWillUnmount()	  # Before DOM removal 
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

The `useEffect()` Hook can be used as componentDidMount, componentDidUpdate, and componentWillUnmount combined.

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