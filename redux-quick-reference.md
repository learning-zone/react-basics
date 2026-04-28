# Redux Quick Reference

<br/>

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

## Action creators

Action creators are functions that return action objects.

```js
// Action type constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

// Action creators
const increment = () => ({ type: INCREMENT })
const decrement = () => ({ type: DECREMENT })
const incrementBy = (amount) => ({ type: 'INCREMENT_BY', payload: amount })

// Dispatching via action creators
store.dispatch(increment())
store.dispatch(incrementBy(5))
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Thunks (async actions)

Thunks let you dispatch functions instead of plain objects for async logic.

```js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk))

// A thunk action creator
function fetchUser(id) {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_USER_REQUEST' })
    try {
      const res = await fetch(`/api/users/${id}`)
      const data = await res.json()
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: data })
    } catch (err) {
      dispatch({ type: 'FETCH_USER_FAILURE', error: err.message })
    }
  }
}

store.dispatch(fetchUser(1))
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## React Hooks

`useSelector` reads from the store; `useDispatch` returns the dispatch function.

```js
import { useSelector, useDispatch } from 'react-redux'

function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  )
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Redux Toolkit – configureStore

`configureStore` wraps `createStore` with good defaults (DevTools, thunk middleware).

```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Redux Toolkit – createSlice

`createSlice` generates action creators and action types automatically.

```js
import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment(state) {
      state.value += 1          // Immer allows direct mutation
    },
    decrement(state) {
      state.value -= 1
    },
    incrementByAmount(state, action) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Redux Toolkit – createAsyncThunk

Handles async lifecycles (`pending`, `fulfilled`, `rejected`) automatically.

```js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUser = createAsyncThunk('users/fetchById', async (userId) => {
  const res = await fetch(`/api/users/${userId}`)
  return res.json()
})

const usersSlice = createSlice({
  name: 'users',
  initialState: { data: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending,   (state) => { state.status = 'loading' })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.data = action.payload
      })
      .addCase(fetchUser.rejected,  (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default usersSlice.reducer
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Selectors

Selectors are functions that extract and derive data from state.

```js
// Basic selector
const selectCount = (state) => state.counter.value

// Derived selector
const selectDoubleCount = (state) => state.counter.value * 2

// Usage with useSelector
const count = useSelector(selectCount)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Memoized selectors with Reselect

`createSelector` memoizes expensive derived state computations.

```js
import { createSelector } from 'reselect'  // or '@reduxjs/toolkit'

const selectItems = (state) => state.cart.items
const selectTax   = (state) => state.cart.taxRate

const selectTotal = createSelector(
  [selectItems, selectTax],
  (items, taxRate) => {
    const subtotal = items.reduce((sum, item) => sum + item.price, 0)
    return subtotal * (1 + taxRate)
  }
)

// Only recomputes when `items` or `taxRate` change
const total = useSelector(selectTotal)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Redux DevTools

Enable browser DevTools support (built into `configureStore` by default).

```js
import { createStore } from 'redux'

// Legacy createStore – enable DevTools manually
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// Redux Toolkit – DevTools are enabled automatically
import { configureStore } from '@reduxjs/toolkit'
const store = configureStore({ reducer })
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
