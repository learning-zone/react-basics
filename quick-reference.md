## React Quick Reference



#### Components

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