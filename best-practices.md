# React Best Practices

## Use JSX ShortHand

Try to use JSX shorthand for passing boolean variables. Let\'s say you want to control the title visibility of a Navbar component.

**Bad:**

```jsx
return (
  <Navbar showTitle={true} />
);
```

**Good:**

```jsx
return(
  <Navbar showTitle />  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Ternary Operators

Let\'s say you want to show a particular user\'s details based on role.

**Bad:**

```jsx
const { role } = user;

if(role === ADMIN) {
  return <AdminUser />
}else{
  return <NormalUser />
} 
```

**Good:**

```jsx
const { role } = user;

return role === ADMIN ? <AdminUser /> : <NormalUser />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Object Literals

Object literals can help make our code more readable. Let\'s say you want to show three types of users based on their role. You can\'t use ternary because the number of options is greater than two.

**Bad:**

```jsx
const {role} = user

switch(role){
  case ADMIN:
    return <AdminUser />
  case EMPLOYEE:
    return <EmployeeUser />
  case USER:
    return <NormalUser />
}
```

**Good:**

```jsx
const {role} = user

const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser
};

const Component = components[role];

return <Componenent />;
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Fragments

Always use Fragment over Div. It keeps the code clean and is also beneficial for performance because one less node is created in the virtual DOM.

**Bad:**

```jsx
return (
  <div>
     <Component1 />
     <Component2 />
     <Component3 />
  </div>  
)
```

**Good:**

```jsx
return (
  <>
     <Component1 />
     <Component2 />
     <Component3 />
  </>  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Do not define a function inside Render

Don\'t define a function inside render. Try to keep the logic inside render to an absolute minimum.

**Bad:**

```jsx
return (
    <button onClick={() => dispatch(ACTION_TO_SEND_DATA)}>    // NOTICE HERE
      This is a bad example 
    </button>  
)
```

**Good:**

```jsx
const submitData = () => dispatch(ACTION_TO_SEND_DATA)

return (
  <button onClick={submitData}>  
    This is a good example 
  </button>  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Memo

React.PureComponent and Memo can significantly improve the performance of your application. They help us to avoid unnecessary rendering.

**Bad:**

```jsx
import React, { useState } from "react";

export const TestMemo = () => {
  const [userName, setUserName] = useState("faisal");
  const [count, setCount] = useState(0);
  
  const increment = () => setCount((count) => count + 1);
  
  return (
    <>
      <ChildrenComponent userName={userName} />
      <button onClick={increment}> Increment </button>
    </>
  );
};

const ChildrenComponent =({ userName }) => {
  console.log("rendered", userName);
  return <div> {userName} </div>;
};
```

Although the child component should render only once because the value of count has nothing to do with the ChildComponent. But, it renders each time you click on the button.
Output

Let\'s edit the ChildrenComponent to this:

**Good:**

```jsx
import React ,{useState} from "react";

const ChildrenComponent = React.memo(({userName}) => {
    console.log('rendered')
    return <div> {userName}</div>
})
```

Now no matter how many times you click on the button, it will render only when necessary.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Put CSS in JavaScript

Try to avoid raw JavaScript when you are writing React applications because organizing CSS is far harder than organizing JS.

**Bad:**

```jsx
// CSS FILE

.body {
  height: 10px;
}

//JSX

return <div className='body'>
   
</div>
```

**Good:**

```jsx
const bodyStyle = {
  height: "10px"
}

return <div style={bodyStyle}>

</div>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Object Destructuring

Use object destructuring to your advantage. Let\'s say you need to show a user\'s details.

**Bad:**

```jsx
return (
  <>
    <div> {user.name} </div>
    <div> {user.age} </div>
    <div> {user.profession} </div>
  </>  
)
```

**Good:**

```jsx
const { name, age, profession } = user;

return (
  <>
    <div> {name} </div>
    <div> {age} </div>
    <div> {profession} </div>
  </>  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## String Props do not need Curly Braces

When passing string props to a children component.

**Bad:**

```jsx
return(
  <Navbar title={"My Special App"} />
)
```

**Good:**

```jsx
return(
  <Navbar title="My Special App" />  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Remove JS Code From JSX

Move any JS code out of JSX if that doesn\'t serve any purpose of rendering or UI functionality.

**Bad:**

```jsx
return (
  <ul>
    {posts.map((post) => (
      <li onClick={event => {
        console.log(event.target, 'clicked!'); // <- THIS IS BAD
        }} key={post.id}>{post.title}
      </li>
    ))}
  </ul>
);
```

**Good:**

```jsx
const onClickHandler = (event) => {
   console.log(event.target, 'clicked!'); 
}

return (
  <ul>
    {posts.map((post) => (
      <li onClick={onClickHandler} key={post.id}> {post.title} </li>
    ))}
  </ul>
);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Template Literals

Use template literals to build large strings. Avoid using string concatenation. It\'s nice and clean.

**Bad:**

```jsx
const userDetails = user.name + "'s profession is" + user.proffession

return (
  <div> {userDetails} </div>  
)
```

**Good:**

```jsx
const userDetails = `${user.name}'s profession is ${user.proffession}`

return (
  <div> {userDetails} </div>  
)
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Import in Order

Always try to import things in a certain order. It improves code readability.

**Bad:**

```jsx
import React from 'react';
import ErrorImg from '../../assets/images/error.png';
import styled from 'styled-components/native';
import colors from '../../styles/colors';
import { PropTypes } from 'prop-types';
```

**Good:**

The rule of thumb is to keep the import order like this:
Built-in
External
Internal
So the example above becomes:

```jsx
import React from 'react';

import { PropTypes } from 'prop-types';
import styled from 'styled-components/native';

import ErrorImg from '../../assets/images/error.png';
import colors from '../../styles/colors';
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Use Implicit return

Use the JavaScript feature of implicit return to write beautiful code. Let\'s say your function does a simple calculation and returns the result.

**Bad:**

```jsx
const add = (a, b) => {
  return a + b;
}
```

**Good:**

```jsx
const add = (a, b) => a + b;
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Component Naming

Always use PascalCase for components and camelCase for instances.

**Bad:**

```jsx
import reservationCard from './ReservationCard';

const ReservationItem = <ReservationCard />;
```

**Good:**

```jsx
import ReservationCard from './ReservationCard';

const reservationItem = <ReservationCard />;
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Reserved Prop Naming

Do not use DOM component prop names for passing props between components because others might not expect these names.

**Bad:**

```jsx
<MyComponent style="dark" />

<MyComponent className="dark" />
```

**Good:**

```jsx
<MyComponent variant="fancy" />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Quotes

Use double quotes for JSX attributes and single quotes for all other JS.

**Bad:**

```jsx
<Foo bar='bar' />

<Foo style={{ left: "20px" }} />
```

**Good:**

```jsx
<Foo bar="bar" />

<Foo style={{ left: '20px' }} />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Prop Naming

Always use camelCase for prop names or PascalCase if the prop value is a React component.

**Bad:**

```jsx
<Component
  UserName="hello"
  phone_number={12345678}
/>
```

**Good:**

```jsx
<MyComponent
  userName="hello"
  phoneNumber={12345678}
  Component={SomeComponent}
/>
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## JSX in Parentheses

If your component spans more than one line, always wrap it in parentheses.

**Bad:**

```jsx
return <MyComponent variant="long">
           <MyChild />
         </MyComponent>;
```

**Good:**

```jsx
return (
    <MyComponent variant="long">
      <MyChild />
    </MyComponent>
);
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Self-Closing Tags

If your component doesn\'t have any children, then use self-closing tags. It improves readability.

**Bad:**

```jsx
<SomeComponent variant="stuff"></SomeComponent>
```

**Good:**

```jsx
<SomeComponent variant="stuff" />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Underscore in Method Name

Do not use underscores in any internal React method.

**Bad:**

```jsx
const _onClickHandler = () => {
  // do stuff
}
```

**Good:**

```jsx
const onClickHandler = () => {
  // do stuff
}
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Alt Prop

Always include an alt prop in your `<img >` tags. And do not use picture or image in your alt property because the screenreaders already announce img elements as images. No need to include that.

**Bad:**

```jsx
<img src="hello.jpg" />

<img src="hello.jpg" alt="Picture of me rowing a boat" />
```

**Good:**

```jsx
<img src="hello.jpg" alt="Me waving hello" />
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>

## Short-Circuit evaluation in JSX

**Bad:**

```jsx
// Avoid
const sampleComponent = () => {
  return isTrue ? <p>True!</p> : null
};
```

**Good:**

```jsx
// Recommended: short-circuit evaluation
const sampleComponent = () => {
  return isTrue && <p>True!</p>
};
```

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
