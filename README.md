# Useful resources
  1. https://dmitripavlutin.com/
  2. https://architecturenotes.co/
  3. https://dev.to/bitovi/how-to-build-a-micro-frontend-with-webpacks-module-federation-plugin-n41
  4. https://webpack.js.org/concepts/module-federation/
  5. https://stackblitz.com/github/webpack/webpack.js.org/tree/main/examples/module-federation?file=README.md&terminal=start&terminal=
  6. https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
  
# Design Pattern
[observer](https://www.patterns.dev/posts)
<br>[Design_patterns_in_typescript](https://github.com/torokmark/design_patterns_in_typescript)

# Javascript Topics
`?? operator`: The nullish coalescing operator is written as two question marks ?? - [Refer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators) <br>
`Promise`<br>
`async await`<br>
`Debouncing & throttling` [Refer](https://www.telerik.com/blogs/debouncing-and-throttling-in-javascript)<br>
`event bubbling`<br>
`what is tree shaking? (js and react both)`<br>
`what is starvation?`<br>
`critical rendering path`<br>
`Higher order functions`<br>
`objects methods`<br>
`Arrays` <br>
Array Methods:
1. arr.pop()  – extracts an item from the end
2. arr.push() - adds items to the end
3. arr.unshift() – adds items to the beginning.
4. arr.shift() – extracts an item from the beginning
5. arr.splice(start[, deleteCount, elem1, ..., elemN]) - It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
6. arr.slice([start], [end]) - It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
7. arr.concat(arg1, arg2...)
8. arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

`Hashtables vs Arrays`- [Refer](https://www.kirupa.com/html5/hashtables_vs_arrays.htm)
<br>`arrow vs regular function` - [Refer](https://dmitripavlutin.com/differences-between-arrow-and-regular-functions/)
# React topics
`MVC vs React Flux architecture`<br>
`Hooks` <br>
1. useState
2. useEffect - [Refer](https://dmitripavlutin.com/react-useeffect-explanation/)
3. useContext & createContext -
   ![image](https://github.com/dushyant615/React/assets/56475253/ff206943-4531-46ad-8e62-c7b93e10203f)
4. useReducer
<br>

<br>`Fragment` - 'key' attribute won't work inside fragment shortcut( <>  </>).
<br>`ReactComponent` - if we are using CRA then to import an svg as a ReactComponent we use this. [Refer](https://www.freecodecamp.org/news/how-to-import-svgs-in-react-and-vite/)
<br>[SVG as ReactComponent](https://stackoverflow.com/questions/72192810/what-is-reactcomponent-and-where-does-it-come-from-when-importing-an-svg-in-reac)

<br>`prop drilling` - passing data to the child/grandchild component from parent (any level).
<br>`React Context API` - [Refer](https://react.dev/learn/passing-data-deeply-with-context)
<br>`Render props` - [Refer](https://engineering.dollarshaveclub.com/learn-render-props-by-example-da3e2524dd2e)
<br>`Error Boundaries`-
<br>`React Lazy` -
<br>`HOC` -
<br>`React Ref` -
<br>`React portal`-


# React Router
`element vs component`<br>
  In React Router v6 we switched from using v5's <Route component> and <Route render> APIs to <Route element>. Why is that?

  For starters, we see React itself taking the lead here with the <Suspense fallback={<Spinner />}> API. The fallback prop takes a React element, not a component.
  This lets you easily pass whatever props you want to your <Spinner> from the component that renders it.

  Using elements instead of components means we don't have to provide a passProps-style API, so you can get the props you need to your elements. For example, in a
  component-based API there is no good way to pass props to the <Profile> element that is rendered when <Route path=":userId" component={Profile} /> matches. Most
  React libraries who take this approach end up with either an API like <Route component={Profile} passProps={{ animate: true }} /> or use a render prop or higher
  order component.<br>
  [Reference](https://reactrouter.com/en/main/start/faq#why-does-route-have-an-element-prop-instead-of-render-or-component)
  
`Outlet`<br>
  An `<Outlet>` should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the     parent route matched exactly, it will render a child index route or nothing if there is no index route.<br>
  [Reference](https://reactrouter.com/en/main/components/outlet)

`Link`<br>
`Routes`<br>
`Route`<br>
`useParams`<br>
`useNavigate` - The useNavigate hook returns a function that lets you navigate programmatically, for example in an effect: <br>
The navigate function has two signatures: 
1. Either pass a To value (same type as <Link to>) with an optional second options argument (similar to the props you can pass to <Link>), or
2. Pass the delta you want to go in the history stack. For example, navigate(-1) is equivalent to hitting the back button

  # Reducers
  `Reducer` - Reducer is a pattern for state management. A Reducer is a pure function that takes the state of an application and action as arguments and returns a new state
  # Redux
  ![image](https://github.com/dushyant615/React/assets/56475253/4799d61a-6a1a-49c5-9eb2-89de8b0a191b)

  `Redux vs Context`-
  <br> 1. Accessibility of data- redux will always wrap the entire application and while context will wrap the appropriate portions of the application and isolate the accessibility to only the children which is wrapped by the context provider.
  <br> 2. Data Flow - with context and useReducer we have separate dispatch method for each context but redux store only have single dispatch and one root reducer

   ![image](https://github.com/dushyant615/React/assets/56475253/be1dc263-f5fc-467e-904c-757998e6af02)
   ![image](https://github.com/dushyant615/React/assets/56475253/02a3a4b1-7d16-4070-9bfa-7311d98c2d5c)
  ## redux
  <br>`compose`
  <br>`legacy_createStore` as `createStore`
  <br>`applyMiddleware`
  <br>`combineReducers`
  ## react-redux
  <br>`Provider`
  <br>`useDispatch`
  <br>`useSelector` - allows a component to interact with redux store
  # SCSS Topics

  `@mixin`<br>
  `$variables`<br>

  # extras
  lecture 160 and 161 middleware of section14(redux) imp
