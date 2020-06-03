## React Interview Questions 


*Click <img src="https://github.com/learning-zone/react-interview-questions/blob/master/assets/star.png" width="18" height="18" align="absmiddle" title="Star" /> if you like the project. Pull Request are highly appreciated.*

## Table of Contents


### React Basics


|Sl.No|  Questions                                   |
|-----|----------------------------------------------|
| 01. |[How does React work?](#q-how-does-react-work)|
| 02. |[What are the advantages of using React?](#q-what-are-the-advantages-of-using-react)|
| 05. |[What is the difference between state and props?](#q-what-is-the-difference-between-state-and-props)|
| 06. |[Name the different lifecycle methods.](#q-name-the-different-lifecycle-methods)|
| 07. |[React Hooks](#q-react-hooks)
| 10. |[What are refs used for in React?](#q-what-are-refs-used-for-in-react)|
| 12. |[What advantages are there in using arrow functions?](#q-what-advantages-are-there-in-using-arrow-functions)|
| 13. |[Why is it advised to pass a callback function to setState as opposed to an object?](#q-why-is-it-advised-to-pass-a-callback-function-to-setstate-as-opposed-to-an-object)|
| 14. |[What is the alternative of binding `this` in the constructor?](#q-what-is-the-alternative-of-binding-this-in-the-constructor)|
| 16. |[When rendering a list what is a key and what is it's purpose?](#q-when-rendering-a-list-what-is-a-key-and-what-is-it-s-purpose)|
| 17. |[What is the purpose of super(props)?](#q-what-is-the-purpose-of-super-props)||
| 18. |[What is JSX?](#q-what-is-jsx)|
| 19. |[What is equivalent of the following using React.createElement?](#q-what-is-equivalent-of-the-following-using-reactcreateelement)|
| 20. |[What is `Children`?](#q-what-is-children)||
| 21. |[Why would you eject from create-react-app?](#q-why-would-you-eject-from-create-react-app)|
| 22. |[What is redux?](#q-what-is-redux)|
| 23. |[What is a store in redux?](#q-what-is-a-store-in-redux)|
| 24. |[What is an action?](#q-what-is-an-action)|
| 25. |[What is a reducer?](#q-what-is-a-reducer)|
| 26. |[What is Redux Thunk used for?](#q-what-is-redux-thunk-used-for)|
| 27. |[What is a pure function?](#q-what-is-a-pure-function)|
| 28. |[ What is React?](#q-what-is-react)|
| 29. |[What are the major features of React?](#q-what-are-the-major-features-of-react)|
| 30. |[What is JSX?](#q-what-is-jsx-1)
| 35. |[What is state in React?](#q-what-is-state-in-react)|
| 36. |[What are props in React?](#q-what-are-props-in-react)|
| 37. |[What is the difference between state and props?](#q-what-is-the-difference-between-state-and-props-1)
| 38. |[Why should we not update the state directly?](#q-why-should-we-not-update-the-state-directly)|
| 39. |[What is the purpose of callback function as an argument of `setState()`?](#q-what-is-the-purpose-of-callback-function-as-an-argument-of-setstate)|
| 40. |[What is the difference between HTML and React event handling?](#q-what-is-the-difference-between-html-and-react-event-handling)|
| 41. |[How to bind methods or event handlers in JSX callbacks?](#q-how-to-bind-methods-or-event-handlers-in-jsx-callbacks)|
| 42. |[How to pass a parameter to an event handler or callback?](#q-how-to-pass-a-parameter-to-an-event-handler-or-callback)|
| 43. |[What are synthetic events in React?](#q-what-are-synthetic-events-in-react)|
| 44. |[What is inline conditional expressions?](#q-what-is-inline-conditional-expressions)|
| 45. |[What are "key" props and what is the benefit of using them in arrays of elements?](#q-what-are-key-props-and-what-is-the-benefit-of-using-them-in-arrays-of-elements)|
| 46. |[What is the use of refs?](#q-what-is-the-use-of-refs)|
| 47. |[How to create refs?](#q-how-to-create-refs)|
| 48. |[What are forward refs?](#q-what-are-forward-refs)|
| 49. |[Which is preferred option with in callback refs and findDOMNode()?](#q-which-is-preferred-option-with-in-callback-refs-and-finddomnode)|
| 50. |[Why are String Refs legacy?](#q-why-are-string-refs-legacy)|
| 51. |[What is Virtual DOM?](#q-what-is-virtual-dom)|
| 52. |[How Virtual DOM works?](#q-how-virtual-dom-works)|
| 53. |[What is the difference between Shadow DOM and Virtual DOM?](#q-what-is-the-difference-between-shadow-dom-and-virtual-dom)|
| 54. |[What is React Fiber?](#q-what-is-react-fiber)|
| 55. |[What is the main goal of React Fiber?](#q-what-is-the-main-goal-of-react-fiber)|
| 58. |[What is the difference between createElement and cloneElement?](#q-what-is-the-difference-between-createelement-and-cloneelement)|
| 59. |[What is Lifting State Up in React?](#q-what-is-lifting-state-up-in-react)|
| 64. |[What is context?](#q-what-is-context)|
| 65. |[What is children prop?](#q-what-is-children-prop)|
| 66. |[How to write comments in React?](#q-how-to-write-comments-in-react)|
| 67. |[What is the purpose of using super constructor with props argument?](#q-what-is-the-purpose-of-using-super-constructor-with-props-argument)|
| 68. |[What is reconciliation?](#q-what-is-reconciliation)|
| 69. |[How to set state with a dynamic key name?](#q-how-to-set-state-with-a-dynamic-key-name)|
| 71. |[Is lazy function supports named exports?](#q-is-lazy-function-supports-named-exports)|
| 72. |[Why React uses `className` over `class` attribute?](#q-why-react-uses-classname-over-class-attribute)|
| 73. |[What are fragments?](#q-what-are-fragments)|
| 74. |[Why fragments are better than container divs?](#q-why-fragments-are-better-than-container-divs)|
| 75. |[What are portals in React?](#q-what-are-portals-in-react)|
| 78. |[How to apply validation on props in React?](#q-how-to-apply-validation-on-props-in-react)|
| 79. |[What are the advantages of React?](#q-what-are-the-advantages-of-react)|
| 80. |[What are the limitations of React?](#q-what-are-the-limitations-of-react)|
| 81. |[What are error boundaries in React v16?](#q-what-are-error-boundaries-in-react-v16)|
| 82. |[How error boundaries handled in React v15?](#q-how-error-boundaries-handled-in-react-v15)|
| 83. |[What are the recommended ways for static type checking?](#q-what-are-the-recommended-ways-for-static-type-checking)|
| 84. |[What is the use of `react-dom` package?](#q-what-is-the-use-of-react-dom-package)|
| 85. |[What is the purpose of render method of `react-dom`?](#q-what-is-the-purpose-of-render-method-of-react-dom)||
| 86. |[What is ReactDOMServer?](#q-what-is-reactdomserver)|
| 87. |[How to use innerHTML in React?](#q-how-to-use-innerhtml-in-react)|
| 88. |[How to use styles in React?](#q-how-to-use-styles-in-react)|
| 89. |[How events are different in React?](#q-how-events-are-different-in-react)|
| 90. |[What will happen if you use `setState()` in constructor?](#q-what-will-happen-if-you-use-setstate-in-constructor)|
| 91. |[What is the impact of indexes as keys?](#q-what-is-the-impact-of-indexes-as-keys)|
| 93. |[What will happen if you use props in initial state?](#q-what-will-happen-if-you-use-props-in-initial-state)|
| 95. |[Why we need to be careful when spreading props on DOM elements?](#q-why-we-need-to-be-careful-when-spreading-props-on-dom-elements)|
| 96. |[How you use decorators in React?](#q-how-you-use-decorators-in-react)|
| 98. |[How you implement Server Side Rendering or SSR?](#q-how-you-implement-server-side-rendering-or-ssr)|
| 99. |[How to enable production mode in React?](#q-how-to-enable-production-mode-in-react)|
| 100. |[What is CRA and its benefits?](#q-what-is-cra-and-its-benefits)|
| 101. |[What is the lifecycle methods order in mounting?](#q-what-is-the-lifecycle-methods-order-in-mounting)|
| 102. |[What are the lifecycle methods going to be deprecated in React v16?](#q-what-are-the-lifecycle-methods-going-to-be-deprecated-in-react-v16)|
| 103. |[What is the purpose of `getDerivedStateFromProps()` lifecycle method?](#q-what-is-the-purpose-of-getderivedstatefromprops-lifecycle-method)|
| 104. |[What is the purpose of `getSnapshotBeforeUpdate()` lifecycle method?](#q-what-is-the-purpose-of-getsnapshotbeforeupdate-lifecycle-method)|
| 109. |[Why we need to pass a function to setState()?](#q-why-we-need-to-pass-a-function-to-setstate)|
| 110. |[What is strict mode in React?](#q-what-is-strict-mode-in-react)|
| 111. |[What are React Mixins?](#q-what-are-react-mixins)|
| 112. |[Why is `isMounted()` an anti-pattern and what is the proper solution?](#q-why-is-ismounted-an-anti-pattern-and-what-is-the-proper-solution)|
| 113. |[What are the Pointer Events supported in React?](#q-what-are-the-pointer-events-supported-in-react)|
| 115. |[Are custom DOM attributes supported in React v16?](#q-are-custom-dom-attributes-supported-in-react-v16)|
| 116. |[What is the difference between constructor and getInitialState?](#q-what-is-the-difference-between-constructor-and-getinitialstate)|
| 118. |[What is the difference between `super()` and `super(props)` in React using ES6 classes?](#q-what-is-the-difference-between-super-and-super-props-in-react-using-es6-classes)|
| 119. |[How to loop inside JSX?](#q-how-to-loop-inside-jsx)|
| 120. |[How do you access props in attribute quotes?](#q-how-do-you-access-props-in-attribute-quotes)|
| 121. |[What is React proptype array with shape?](#q-what-is-react-proptype-array-with-shape)|
| 122. |[How to conditionally apply class attributes?](#q-how-to-conditionally-apply-class-attributes)|
| 123. |[What is the difference between React and ReactDOM?](#q-what-is-the-difference-between-react-and-reactdom)|
| 124. |[Why ReactDOM is separated from React?](#q-why-reactdom-is-separated-from-react)|
| 125. |[How to use React label element?](#q-how-to-use-react-label-element)|
| 126. |[How to combine multiple inline style objects?](#q-how-to-combine-multiple-inline-style-objects)|
| 127. |[How to re-render the view when the browser is resized?](#how-to-re-render-the-view-when-the-browser-is-resized)|
| 128. |[What is the difference between `setState()` and `replaceState()` methods?](#q-what-is-the-difference-between-setstate-and-replacestate-methods)|
| 129. |[How to listen to state changes?](#q-how-to-listen-to-state-changes)|
| 130. |[What is the recommended approach of removing an array element in React state?](#q-what-is-the-recommended-approach-of-removing-an-array-element-in-react-state)|
| 131. |[Is it possible to use React without rendering HTML?](#q-is-it-possible-to-use-react-without-rendering-html)|
| 132. |[How to pretty print JSON with React?](#q-how-to-pretty-print-json-with-react)|
| 133. |[Why you can't update props in React?](#q-why-you-can-t-update-props-in-react)|
| 134. |[How to focus an input element on page load?](#q-how-to-focus-an-input-element-on-page-load)|
| 135. |[What are the possible ways of updating objects in state?](#q-what-are-the-possible-ways-of-updating-objects-in-state)|
| 136. |[Why function is preferred over object for `setState()`?](#q-why-function-is-preferred-over-object-for-setstate)|
| 137. |[How can we find the version of React at runtime in the browser?](#q-how-can-we-find-the-version-of-react-at-runtime-in-the-browser)|
| 138. |[What are the approaches to include polyfills in your `create-react-app`?](#q-what-are-the-approaches-to-include-polyfills-in-your-create-react-app)||
| 139. |[How to use https instead of http in create-react-app?](#q-how-to-use-https-instead-of-http-in-create-react-app)|
| 140. |[How to avoid using relative path imports in create-react-app?](#q-how-to-avoid-using-relative-path-imports-in-create-react-app)|
| 141. |[How to add Google Analytics for React Router?](#q-how-to-add-google-analytics-for-react-router)|
| 143. |[How do you apply vendor prefixes to inline styles in React?](#q-how-do-you-apply-vendor-prefixes-to-inline-styles-in-react)|
| 147. |[How to define constants in React?](#how-to-define-constants-in-react)|
| 148. |[How to programmatically trigger click event in React?](#q-how-to-programmatically-trigger-click-event-in-react)|
| 149. |[Is it possible to use async/await in plain React?](#q-is-it-possible-to-use-async-await-in-plain-react)|
| 150. |[What are the common folder structures for React?](#q-what-are-the-common-folder-structures-for-react)|
| 151. |[What are the popular packages for animation?](#q-what-are-the-popular-packages-for-animation)|
| 152. |[What is the benefit of styles modules?](#q-what-is-the-benefit-of-styles-modules)|
| 153. |[What are the popular React-specific linters?](#q-what-are-the-popular-react-specific-linters)|
| 155. |[What are render props?](#q-what-are-render-props)|


### React Architecture 
 -


### React Components

|Sl.No|  Questions                                   |
|-----|----------------------------------------------|
| 01. |[What is the difference between a Presentational component and a Container component?](#q-what-is-the-difference-between-a-presentational-component-and-a-container-component)|
| 02. |[What are the differences between a class component and functional component?](#q-what-are-the-differences-between-a-class-component-and-functional-component)|
| 03. |[Where in a React component should you make an AJAX request?](#q-where-in-a-react-component-should-you-make-an-ajax-request)|
| 04. |[What are controlled components?](#q-what-are-controlled-components)|
| 05. |[What is a higher order component?](#q-what-is-a-higher-order-component)|
| 06. |[How would you prevent a component from rendering?](#q-how-would-you-prevent-a-component-from-rendering)|
| 07. |[What is the difference between Element and Component?](#q-what-is-the-difference-between-element-and-component)|
| 08. |[How to create components in React?](#q-how-to-create-components-in-react)|
| 09. |[When to use a Class Component over a Function Component?](#q-when-to-use-a-class-component-over-a-function-component)|
| 10. |[What are Pure Components?](#q-what-are-pure-components)|
| 11. |[What are controlled components?](#q-what-are-controlled-components-1)
| 12. |[What are uncontrolled components?](#q-what-are-uncontrolled-components)|
| 13. |[What are the different phases of component lifecycle?](#q-what-are-the-different-phases-of-component-lifecycle)|
| 14. |[What are the lifecycle methods of React?](#q-what-are-the-lifecycle-methods-of-react)|
| 15. |[What are Higher-Order Components?](#q-what-are-higher-order-components)|
| 16. |[How to create props proxy for HOC component?](#q-how-to-create-props-proxy-for-hoc-component)|
| 17. |[What would be the common mistake of function being called every time the component renders?](#q-what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders)|
| 18. |[What are stateless components?](#q-what-are-stateless-components)|
| 19. |[What are stateful components?](#q-what-are-stateful-components)|
| 20. |[How do you conditionally render components?](#q-how-do-you-conditionally-render-components)|
| 21. |[Is it good to use `setState()` in `componentWillMount()` method?](#q-is-it-good-to-use-setstate-in-componentwillmount-method)|
| 22. |[How do you memoize a component?](#q-how-do-you-memoize-a-component)|
| 23. |[Do Hooks replace render props and higher order components?](#q-do-hooks-replace-render-props-and-higher-order-components)|
| 24. |[What is the recommended way for naming components?](#q-what-is-the-recommended-way-for-naming-components)|
| 25. |[What is the recommended ordering of methods in component class?](#q-what-is-the-recommended-ordering-of-methods-in-component-class)|
| 26. |[What is a switching component?](#q-what-is-a-switching-component)|
| 27. |[Why should component names start with capital letter?](#q-why-should-component-names-start-with-capital-letter)|
| 28. |[Can you force a component to re-render without calling setState?](#q-can-you-force-a-component-to-re-render-without-calling-setstate)|
| 29. |[How to update a component every second?](#q-how-to-update-a-component-every-second)|
| 30. |[How to import and export components using React and ES6?](#q-how-to-import-and-export-components-using-react-and-es6)|
| 31. |[What are the exceptions on React component naming?](#q-what-are-the-exceptions-on-react-component-naming)|
| 32. |[Why is a component constructor called only once?](#q-why-is-a-component-constructor-called-only-once)|
| 33. |[How to make AJAX call and in which component lifecycle methods should I make an AJAX call?](#q-how-to-make-ajax-call-and-in-which-component-lifecycle-methods-should-i-make-an-ajax-call)|


### React Forms

|Sl.No|  Questions                                   |
|-----|----------------------------------------------|
| 01. |[What is the popular choice for form handling?](#q-what-is-the-popular-choice-for-form-handling)|
| 02. |[What are the advantages of formik over redux form library?](#what-are-the-advantages-of-formik-over-redux-form-library)|
| 03. |[What is Redux Form?](#q-what-is-redux-form)|
| 04. |[What are the main features of Redux Form?](#q-what-are-the-main-features-of-redux-form)|
| 05. |[How Redux Form `initialValues` get updated from state?](#q-how-redux-form-initialvalues-get-updated-from-state)|
| 06. |[What is formik?](#q-what-is-formik)|


### React Animations
 - 


### React Router

|Sl.No|  Questions                                   |
|-----|----------------------------------------------|
| 01. |[What is React Router?](#q-what-is-react-router)|
| 02. |[How React Router is different from history library?](#how-react-router-is-different-from-history-library)|
| 03. |[What are the `<Router>` components of React Router v4?](#q-what-are-the-router-components-of-react-router-v4)|
| 04. |[What is the purpose of `push()` and `replace()` methods of `history`?](#q-what-is-the-purpose-of-push-and-replace-methods-of-history)|
| 05. |[How do you programmatically navigate using React Router v4?](#q-how-do-you-programmatically-navigate-using-react-router-v4)|
| 06. |[How to get query parameters in React Router v4?](#q-how-to-get-query-parameters-in-react-router-v4)|
| 07. |[Why you get "Router may have only one child element" warning?](#q-why-you-get-router-may-have-only-one-child-element-warning)|
| 08. |[How to pass params to `history.push` method in React Router v4?](#q-how-to-pass-params-to-historypush-method-in-react-router-v4)|
| 09. |[How to implement *default* or *NotFound* page?](#q-how-to-implement-default-or-notfound-page)|
| 10. |[How to get history on React Router v4?](#q-how-to-get-history-on-react-router-v4)|
| 11. |[How to perform automatic redirect after login?](#q-how-to-perform-automatic-redirect-after-login)|


### React Internationalization

|Sl.No|  Questions                                   |
|-----|----------------------------------------------|
| 01. |[What is React Intl?](#q-what-is-react-intl)|
| 02. |[What are the main features of React Intl?](#q-what-are-the-main-features-of-react-intl)|
| 03. |[What are the two ways of formatting in React Intl?](#q-what-are-the-two-ways-of-formatting-in-react-intl)|
| 04. |[How to use `<FormattedMessage>` as placeholder using React Intl?](#q-how-to-use-formattedmessage-as-placeholder-using-react-intl)|
| 05. |[How to access current locale with React Intl?](#q-how-to-access-current-locale-with-react-intl)|
| 06. |[How to format date using React Intl?](#q-how-to-format-date-using-react-intl)|


### React Testing

|Sl.No|  Questions                                   |
|-----|----------------------------------------------|
| 01. |[What is Shallow Renderer in React testing?](#q-what-is-shallow-renderer-in-react-testing)|
| 02. |[What is `TestRenderer` package in React?](#q-what-is-testrenderer-package-in-react)|
| 03. |[What is the purpose of ReactTestUtils package?](#q-what-is-the-purpose-of-reacttestutils-package)|
| 04. |[What is Jest?](#q-what-is-jest)|
| 05. |[What are the advantages of Jest over Jasmine?](#q-what-are-the-advantages-of-jest-over-jasmine)|
| 06. |[Give a simple example of Jest test case](#q-give-a-simple-example-of-jest-test-case)|


### React Redux

|Sl.No|  Questions                                   |
|-----|----------------------------------------------|
| 01. |[What is flux?](#q-what-is-flux)|
| 02. |[What is Redux?](#q-what-is-redux)|
| 03. |[What are the core principles of Redux?](#q-what-are-the-core-principles-of-redux)|
| 04. |[What are the downsides of Redux compared to Flux?](#q-what-are-the-downsides-of-redux-compared-to-flux)|
| 05. |[What is the difference between `mapStateToProps()` and `mapDispatchToProps()`?](#q-what-is-the-difference-between-mapstatetoprops-and-mapdispatchtoprops)|
| 06. |[Can I dispatch an action in reducer?](#q-can-i-dispatch-an-action-in-reducer)|
| 07. |[How to access Redux store outside a component?](#q-how-to-access-redux-store-outside-a-component)|
| 08. |[What are the drawbacks of MVW pattern?](#q-what-are-the-drawbacks-of-mvw-pattern)|
| 09. |[Are there any similarities between Redux and RxJS?](#are-there-any-similarities-between-redux-and-rxjs)|
| 10. |[How to dispatch an action on load?](#q-how-to-dispatch-an-action-on-load)|
| 11. |[How to use `connect()` from React Redux?](#q-how-to-use-connect-from-react-redux)|
| 12. |[How to reset state in Redux?](#q-how-to-reset-state-in-redux)|
| 13. |[Whats the purpose of `at` symbol in the Redux connect decorator?](#q-whats-the-purpose-of-at-symbol-in-the-redux-connect-decorator)|
| 14. |[What is the difference between React context and React Redux?](#q-what-is-the-difference-between-react-context-and-react-redux)|
| 15. |[Why are Redux state functions called reducers?](#q-why-are-redux-state-functions-called-reducers)|
| 16. |[How to make AJAX request in Redux?](#q-how-to-make-ajax-request-in-redux)|
| 17. |[Should I keep all component's state in Redux store?](#q-should-i-keep-all-component-s-state-in-redux-store)|
| 18. |[What is the proper way to access Redux store?](#q-what-is-the-proper-way-to-access-redux-store)|
| 19. |[What is the difference between component and container in React Redux?](#what-is-the-difference-between-component-and-container-in-react-redux)|
| 20. |[What is the purpose of the constants in Redux?](#q-what-is-the-purpose-of-the-constants-in-redux)|
| 21. |[What are the different ways to write `mapDispatchToProps()`?](#q-what-are-the-different-ways-to-write-mapdispatchtoprops)|
| 22. |[What is the use of the `ownProps` parameter in `mapStateToProps()` and `mapDispatchToProps()`?](#q-what-is-the-use-of-the-ownprops-parameter-in-mapstatetoprops-and-mapdispatchtoprops)|
| 23. |[How to structure Redux top level directories?](#q-how-to-structure-redux-top-level-directories)|
| 24. |[What is redux-saga?](#q-what-is-redux-saga)|
| 25. |[What is the mental model of redux-saga?](#q-what-is-the-mental-model-of-redux-saga)|
| 26. |[What are the differences between `call()` and `put()` in redux-saga?](#q-what-are-the-differences-between-call-and-put-in-redux-saga)|
| 27. |[What is Redux Thunk?](#q-what-is-redux-thunk)|
| 28. |[What are the differences between `redux-saga` and `redux-thunk`?](#q-what-are-the-differences-between-redux-saga-and-redux-thunk)|
| 29. |[What is Redux DevTools?](#what-is-redux-devtools)|
| 30. |[What are the features of Redux DevTools?](#q-what-are-the-features-of-redux-devtools)|
| 31. |[What are Redux selectors and why to use them?](#q-what-are-redux-selectors-and-why-to-use-them)|
| 34. |[How to add multiple middlewares to Redux?](#q-how-to-add-multiple-middlewares-to-redux)|
| 35. |[How to set initial state in Redux?](#q-how-to-set-initial-state-in-redux)|
| 36. |[How Relay is different from Redux?](#q-how-relay-is-different-from-redux)|


### React Native

|Sl.No|  Questions                                   |
|-----|----------------------------------------------|
| 01. |[What is the difference between React Native and React?](#q-what-is-the-difference-between-react-native-and-react)|
| 02. |[How to test React Native apps?](#q-how-to-test-react-native-apps)|
| 03. |[How to do logging in React Native?](#how-to-do-logging-in-react-native)|
| 04. |[How to debug your React Native?](#q-how-to-debug-your-react-native)|



### React supported libraries 

|Sl.No|  Questions                                   |
|-----|----------------------------------------------|
| 01. |[What is reselect and how it works?](#q-what-is-reselect-and-how-it-works)|
| 02. |[What is Flow?](#q-what-is-flow)|
| 03. |[What is the difference between Flow and PropTypes?](#q-what-is-the-difference-between-flow-and-proptypes)|
| 04. |[How to use Font Awesome icons in React?](#q-how-to-use-font-awesome-icons-in-react)|
| 05. |[What is React Dev Tools?](#q-what-is-react-dev-tools)|
| 06. |[Why is DevTools not loading in Chrome for local files?](#q-why-is-devtools-not-loading-in-chrome-for-local-files)|
| 07. |[How to use Polymer in React?](#q-how-to-use-polymer-in-react)|
| 08. |[What are the advantages of React over Vue.js?](#q-what-are-the-advantages-of-react-over-vuejs)|
| 09. |[What is the difference between React and Angular?](#what-is-the-difference-between-react-and-angular)|
| 10. |[Why React tab is not showing up in DevTools?](#q-why-react-tab-is-not-showing-up-in-devtools)|
| 11. |[What are Styled Components?](#q-what-are-styled-components)|
| 12. |[Give an example of Styled Components?](#q-give-an-example-of-styled-components)|
| 13. |[What is Relay?](#q-what-is-relay)|
| 14. |[How to use TypeScript in `create-react-app` application?](#q-how-to-use-typescript-in-create-react-app-application)|
| 15. |[What are the main features of Reselect library?](#q-what-are-the-main-features-of-reselect-library)|
| 16. |[Give an example of Reselect usage?](#q-give-an-example-of-reselect-usage)|
| 17. |[What is an action in Redux?](#q-what-is-an-action-in-redux)|
| 18. |[Does the statics object work with ES6 classes in React?](#q-does-the-statics-object-work-with-es6-classes-in-react)|
| 19. |[Can Redux only be used with React?](#q-can-redux-only-be-used-with-react)|
| 20. |[Do you need to have a particular build tool to use Redux?](#q-do-you-need-to-have-a-particular-build-tool-to-use-redux)|
| 22. |[How React PropTypes allow different types for one prop?](#q-how-react-proptypes-allow-different-types-for-one-prop)|
| 23. |[Can I import an SVG file as react component?](#q-can-i-import-an-svg-file-as-react-component)|
| 24. |[Why are inline ref callbacks or functions not recommended?](#q-why-are-inline-ref-callbacks-or-functions-not-recommended)|
| 25. |[What is render hijacking in react?](#q-what-is-render-hijacking-in-react)|
| 26. |[What are HOC factory implementations?](#q-what-are-hoc-factory-implementations)|
| 27. |[How to pass numbers to React component?](#q-how-to-pass-numbers-to-react-component)|
| 28. |[Do I need to keep all my state into Redux? Should I ever use react internal state?](#q-do-i-need-to-keep-all-my-state-into-redux-should-i-ever-use-react-internal-state)|
| 29. |[What is the purpose of registerServiceWorker in React?](#what-is-the-purpose-of-registerserviceworker-in-react)|
| 30. |[What is React memo function?](#q-what-is-react-memo-function)|
| 31. |[What is React lazy function?](#q-what-is-react-lazy-function)|
| 32. |[How to prevent unnecessary updates using setState?](#q-how-to-prevent-unnecessary-updates-using-setstate)|
| 33. |[How do you render Array, Strings and Numbers in React 16 Version?](#q-how-do-you-render-array-strings-and-numbers-in-react-16-version)|
| 34. |[How to use class field declarations syntax in React classes?](#q-how-to-use-class-field-declarations-syntax-in-react-classes)|
| 35. |[What are hooks?](#q-what-are-hooks)|
| 36. |[What are the rules needs to follow for hooks?](#q-what-are-the-rules-needs-to-follow-for-hooks)|
| 37. |[How to ensure hooks followed the rules in your project?](#q-how-to-ensure-hooks-followed-the-rules-in-your-project)|
| 38. |[What are the differences between Flux and Redux?](#q-what-are-the-differences-between-flux-and-redux)|
| 39. |[What are the benefits of React Router V4?](#what-are-the-benefits-of-react-router-v4)|
| 40. |[Can you describe about componentDidCatch lifecycle method signature?](#q-can-you-describe-about-componentdidcatch-lifecycle-method-signature)|
| 41. |[In which scenarios error boundaries do not catch errors?](#q-in-which-scenarios-error-boundaries-do-not-catch-errors)|
| 42. |[Why do not you need error boundaries for event handlers?](#q-why-do-not-you-need-error-boundaries-for-event-handlers)|
| 43. |[What is the difference between try catch block and error boundaries?](#q-what-is-the-difference-between-try-catch-block-and-error-boundaries)|
| 44. |[What is the behavior of uncaught errors in react 16?](#q-what-is-the-behavior-of-uncaught-errors-in-react-16)|
| 45. |[What is the proper placement for error boundaries?](#q-what-is-the-proper-placement-for-error-boundaries)|
| 46. |[What is the benefit of component stack trace from error boundary?](#q-what-is-the-benefit-of-component-stack-trace-from-error-boundary)|
| 47. |[What is the required method to be defined for a class component?](#q-what-is-the-required-method-to-be-defined-for-a-class-component)|
| 48. |[What are the possible return types of render method?](#q-what-are-the-possible-return-types-of-render-method)|
| 49. |[What is the main purpose of constructor?](#what-is-the-main-purpose-of-constructor)|
| 50. |[Is it mandatory to define constructor for React component?](#q-is-it-mandatory-to-define-constructor-for-react-component)|
| 51. |[What are default props?](#q-what-are-default-props)|
| 52. |[Why should not call setState in componentWillUnmount?](#q-why-should-not-call-setstate-in-componentwillunmount)|
| 53. |[What is the purpose of getDerivedStateFromError?](#q-what-is-the-purpose-of-getderivedstatefromerror)|
| 54. |[What is the methods order when component re-rendered?](#q-what-is-the-methods-order-when-component-re-rendered)|
| 55. |[What are the methods invoked during error handling?](#q-what-are-the-methods-invoked-during-error-handling)|
| 56. |[What is the purpose of displayName class property?](#q-what-is-the-purpose-of-displayname-class-property)|
| 57. |[What is the browser support for react applications?](#q-what-is-the-browser-support-for-react-applications)|
| 58. |[What is the purpose of unmountComponentAtNode method?](#q-what-is-the-purpose-of-unmountcomponentatnode-method)|
| 59. |[What is code-splitting?](#what-is-code-splitting)|
| 60. |[What is the benefit of strict mode?](#q-what-is-the-benefit-of-strict-mode)|
| 61. |[What are Keyed Fragments?](#q-what-are-keyed-fragments)|
| 62. |[Does React support all HTML attributes?](#q-does-react-support-all-html-attributes)|
| 63. |[What are the limitations with HOCs?](#q-what-are-the-limitations-with-hocs)|
| 64. |[How to debug forwardRefs in DevTools?](#q-how-to-debug-forwardrefs-in-devtools)|
| 65. |[When component props defaults to true?](#q-when-component-props-defaults-to-true)|
| 66. |[What is NextJS and major features of it?](#q-what-is-nextjs-and-major-features-of-it)|
| 67. |[How do you pass an event handler to a component?](#q-how-do-you-pass-an-event-handler-to-a-component)|
| 68. |[Is it good to use arrow functions in render methods?](#q-is-it-good-to-use-arrow-functions-in-render-methods)|
| 69. |[How to prevent a function from being called multiple times?](#how-to-prevent-a-function-from-being-called-multiple-times)|
| 70. |[How JSX prevents Injection Attacks?](#q-how-jsx-prevents-injection-attacks)|
| 71. |[How do you update rendered elements?](#q-how-do-you-update-rendered-elements)|
| 72. |[How do you say that props are read only?](#q-how-do-you-say-that-props-are-read-only)|
| 73. |[How do you say that state updates are merged?](#q-how-do-you-say-that-state-updates-are-merged)|
| 74. |[How do you pass arguments to an event handler?](#q-how-do-you-pass-arguments-to-an-event-handler)|
| 75. |[How to prevent component from rendering?](#q-how-to-prevent-component-from-rendering)|
| 76. |[What are the conditions to safely use the index as a key?](#q-what-are-the-conditions-to-safely-use-the-index-as-a-key)|
| 77. |[Is it keys should be globally unique?](#q-is-it-keys-should-be-globally-unique)|
| 80. |[Why do you not required to use inheritance?](#q-why-do-you-not-required-to-use-inheritance)|
| 81. |[Can I use web components in react application?](#q-can-i-use-web-components-in-react-application)|
| 82. |[What is dynamic import?](#q-what-is-dynamic-import)|
| 83. |[What are loadable components?](#q-what-are-loadable-components)|
| 84. |[What is suspense component?](#q-what-is-suspense-component)|
| 85. |[What is route based code splitting?](#q-what-is-route-based-code-splitting)|
| 86. |[Give an example on How to use context?](#q-give-an-example-on-how-to-use-context)|
| 87. |[What is the purpose of default value in context?](#q-what-is-the-purpose-of-default-value-in-context)|
| 88. |[How do you use contextType?](#q-how-do-you-use-contexttype)|
| 89. |[What is a consumer?](#what-is-a-consumer)|
| 90. |[How do you solve performance corner cases while using context?](#q-how-do-you-solve-performance-corner-cases-while-using-context)|
| 91. |[What is the purpose of forward ref in HOCs?](#q-what-is-the-purpose-of-forward-ref-in-hocs)|
| 92. |[Is it ref argument available for all functions or class components?](#q-is-it-ref-argument-available-for-all-functions-or-class-components)|
| 93. |[Why do you need additional care for component libraries while using forward refs?](#q-why-do-you-need-additional-care-for-component-libraries-while-using-forward-refs)|
| 94. |[How to create react class components without ES6?](#q-how-to-create-react-class-components-without-es6)|
| 95. |[Is it possible to use react without JSX?](#q-is-it-possible-to-use-react-without-jsx)|
| 96. |[What is diffing algorithm?](#q-what-is-diffing-algorithm)|
| 97. |[What are the rules covered by diffing algorithm?](#q-what-are-the-rules-covered-by-diffing-algorithm)|
| 98. |[When do you need to use refs?](#q-when-do-you-need-to-use-refs)|
| 99. |[Is it prop must be named as render for render props?](#q-is-it-prop-must-be-named-as-render-for-render-props)|
| 100. |[What are the problems of using render props with pure components?](#q-what-are-the-problems-of-using-render-props-with-pure-components)|
| 101. |[How do you create HOC using render props?](#q-how-do-you-create-hoc-using-render-props)|
| 102. |[What is windowing technique?](#q-what-is-windowing-technique)|
| 103. |[How do you print falsy values in JSX?](#q-how-do-you-print-falsy-values-in-jsx)|
| 104. |[What is the typical use case of portals?](#q-what-is-the-typical-use-case-of-portals)|
| 105. |[How do you set default value for uncontrolled component?](#q-how-do-you-set-default-value-for-uncontrolled-component)|
| 106. |[What is your favorite React stack?](#q-what-is-your-favorite-react-stack)|
| 107. |[What is the difference between Real DOM and Virtual DOM?](#q-what-is-the-difference-between-real-dom-and-virtual-dom)|
| 108. |[How to add Bootstrap to a react application?](#q-how-to-add-bootstrap-to-a-react-application)|
| 109. |[Can you list down top websites or applications using react as front end framework?](#q-can-you-list-down-top-websites-or-applications-using-react-as-front-end-framework)|
| 110. |[Is it recommended to use CSS In JS technique in React?](#q-is-it-recommended-to-use-css-in-js-technique-in-react)|
| 111. |[Do I need to rewrite all my class components with hooks?](#q-do-i-need-to-rewrite-all-my-class-components-with-hooks)|
| 112. |[How to fetch data with React Hooks?](#q-how-to-fetch-data-with-react-hooks)|
| 113. |[Is Hooks cover all use cases for classes?](#q-is-hooks-cover-all-use-cases-for-classes)|
| 114. |[What is the stable release for hooks support?](#q-what-is-the-stable-release-for-hooks-support)|
| 115. |[Why do we use array destructuring (square brackets notation) in `useState`?](#q-why-do-we-use-array-destructuring-square-brackets-notation-in-usestate)|
| 116. |[What are the sources used for introducing hooks?](#q-what-are-the-sources-used-for-introducing-hooks)|
| 117. |[How do you access imperative API of web components?](#q-how-do-you-access-imperative-api-of-web-components)|
| 119. |[What are typical middleware choices for handling asynchronous calls in Redux?](#q-what-are-typical-middleware-choices-for-handling-asynchronous-calls-in-redux)|
| 120. |[Is browsers understand JSX code?](#q-is-browsers-understand-jsx-code)|
| 121. |[Describe about data flow in react?](#q-describe-about-data-flow-in-react)|
| 122. |[What is react scripts?](#q-what-is-react-scripts)|
| 123. |[What are the features of create react app?](#q-what-are-the-features-of-create-react-app)|
| 124. |[What is the purpose of renderToNodeStream method?](#q-what-is-the-purpose-of-rendertonodestream-method)|
| 125. |[What is MobX?](#q-what-is-mobx)|
| 126. |[What are the differences between Redux and MobX?](#q-what-are-the-differences-between-redux-and-mobx)|
| 127. |[Should I learn ES6 before learning ReactJS?](#q-should-i-learn-es6-before-learning-reactjs)|
| 128. |[What is Concurrent Rendering?](#q-what-is-concurrent-rendering)|
| 129. |[What is the difference between async mode and concurrent mode?](#q-what-is-the-difference-between-async-mode-and-concurrent-mode)|
| 130. |[Can I use javascript urls in react16.9?](#q-can-i-use-javascript-urls-in-react169)|
| 131. |[What is the purpose of eslint plugin for hooks?](#q-what-is-the-purpose-of-eslint-plugin-for-hooks)|
| 132. |[What is the difference between Imperative and Declarative in React?](#q-what-is-the-difference-between-imperative-and-declarative-in-react)|
| 133. |[What are the benefits of using typescript with reactjs?](#q-what-are-the-benefits-of-using-typescript-with-reactjs)|
| 134. |[Write an HOC that reverses it’s input?](#q-write-an-hoc-that-reverses-it-s-input)|
| 135. |[Write an HOC that supplies data from an API to it’s Passed Component?](#q-write-an-hoc-that-supplies-data-from-an-api-to-it-s-passed-component)|
| 136. |[Write an HOC that implements shouldComponentUpdate to avoid reconciliation?](#q-write-an-hoc-that-implements-shouldcomponentupdate-to-avoid-reconciliation)|
| 137. |[Write an HOC that uses React.Children.toArray to sort the children passed to it's Passed Component?](#q-write-an-hoc-that-uses-reactchildrentoarray-to-sort-the-children-passed-to-it-s-passed-component)|
