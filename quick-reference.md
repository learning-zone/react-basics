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

#### Properties

Use `this.props` to access properties passed to the component.

```javascript
<Video fullscreen={true} autoplay={false} />

render () {
  this.props.fullscreen
  const { fullscreen, autoplay } = this.props
  ···
}
```

#### States

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

#### Children

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
