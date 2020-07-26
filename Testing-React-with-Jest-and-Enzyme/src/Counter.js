import React from 'react'

export default function Counter() {
  const [counter, setcounter] = React.useState(0);
  
  return (
    <div>
        <h1>React Counter App</h1>
        <div id="counter-value">{counter}</div>
        <button id="increment-btn" onClick={() => setcounter(counter + 1)}>
          Increment
        </button>
        <button id="decrement-btn" onClick={() => setcounter(counter - 1)}>
          Decrement
        </button>
    </div>
  )
}
