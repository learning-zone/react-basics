# React Best Practices

1. Component name must start with capitals letters.

2. All the component must be small and function-specific.

3. All the component must have small description  

```js
/**
*
* Author: {...}
* Description: {...}
* Dependencies: {...}
*
**/
const SampleComponent = () => {

  return (
    <div>
      Sample Component !
    </div>
  );
}

export default SampleComponent;
```

4. All code must follow es6 coding standards.

5. For variables that are NOT constants or constructors, multi-word variables and functions SHOULD be lowerCamelCased.

6. Constants:- Pre-defined constants SHOULD be all-uppercase, and words separated by underscores: UPPER_UNDERSCORED.

7. Typeof:- In type comparisons, the value tested MUST NOT be wrapped in parenthesis and use triple equals to.

```js
if (typeof myVariable === 'string') {
  // ...
}
```

8. In simple condition, Ternary operator should be used instead of if else statement.

```js
// If-else Statement

if(condition) {
    //...
} else {
    //...
}

// Ternary operator

let myVariable = condition ? exprIfTrue : exprIfFalse
```

9. fragments should be used instead of container div.

```js
...

render() {
  return (
    <Fragment>
       Some text.
      <h2>A heading</h2>
        More text.
      <h2>Another heading</h2>
       Even more text.
    </Fragment>
  );
}
```

10. All files related to any one component should be in a single folder

11. Functional components should be favored if we do not need to make use of React state.

12. Anonymous functions should not be used as handlers.

13. Inline styles should not be used inside component.

14. For a component to hide itself return null from render.

15. Higher Order Components should be used for cross-cutting concerns.

16. Prefer state initialization in class member variable declaration over constructor

17. Index should not be used as a key

18. Short-Circuit evaluation in jsx

```js
// Instead of this
const sampleComponent = () => {
  return isTrue ? <p>True!</p> : null
};

// Use short-circuit evaluation
const sampleComponent = () => {
  return isTrue && <p>True!</p>
};
```
