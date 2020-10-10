# Redux Quick Reference

## Creating a store

A store is made from a reducer function, which takes the current state, and returns a new state depending on the action it was given.

```js
import { createStore } from 'redux'

// Reducer
function counter (state = { value: 0 }, action) {
  switch (action.type) {
  case 'INCREMENT':
    return { value: state.value + 1 }
  case 'DECREMENT':
    return { value: state.value - 1 }
  default:
    return state
  }
}

let store = createStore(counter)

// Optional - you can pass `initialState` as a second arg
let store = createStore(counter, { value: 0 })
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Using a store

Dispatch actions to change the store\'s state.

```js
let store = createStore(counter)

// Dispatches an action; this changes the state
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })

// Gets the current state
store.getState()

// Listens for changes
store.subscribe(() => { ... })
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Provider

The `<Provider>` component makes the store available in React components. It is used for `connect()`.

```js
import { Provider } from 'react-redux'

React.render(
  <Provider store={store}>
    <App />
  </Provider>, mountNode)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Mapping state

```js
import { connect } from 'react-redux'

// A functional React component
function App ({ message, onMessageClick }) {
  return (
    <div onClick={() => onMessageClick('hello')}>
      {message}
    </div>
  )
}

// Maps `state` to `props`:
// These will be added as props to the component.
function mapState (state) {
  return { message: state.message }
}

// Maps `dispatch` to `props`:
function mapDispatch (dispatch) {
  return {
    onMessageClick (message) {
      dispatch({ type: 'click', message })
    }
  }
}

// Connect them:
export default connect(mapState, mapDispatch)(App)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Combining reducers

Combines multiple reducers into one reducer function.

```js
const reducer = combineReducers({
  counter, user, store
})
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Signature

Middlewares are simply decorators for `dispatch()` to allows to take different kinds of actions, and to perform different tasks when receiving actions.

```js
// noop middleware
const logger = store => dispatch => action { dispatch(action) }

const logger = store => {
  // This function runs on createStore().
  // It returns a decorator for dispatch().

  return dispatch => {
    // Runs on createStore(), too.
    // It returns a new dispatch() function

    return action => {
      // Runs on every dispatch()
    }
  }
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Applying middleware

```js
const enhancer = applyMiddleware(logger, thunk, ...)

const store = createStore(reducer, {}, enhancer)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
