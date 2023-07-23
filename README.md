# Pattern
`observer` - https://www.patterns.dev/posts

# Javascript Topics
`Debouncing`<br>
`throttling`<br>
`Arrays` <br>
Array Methods:
1. arr.pop()  – extracts an item from the end
2. arr.push() - adds items to the end
3. arr.unshift() – adds items to the beginning.
4. arr.shift() – extracts an item from the beginning
5. arr.splice(start[, deleteCount, elem1, ..., elemN]) - It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
6. arr.slice([start], [end]) - It returns a new array copying to it all items from index start to end (not including end). Both start and end can be negative, in that case position from array end is assumed.
7. arr.concat(arg1, arg2...)

# React topics
`Hooks` <br>
1. useState
2. useEffect
<br>

`Fragment`<br>

`ReactComponent` - SVG as ReactComponent - https://stackoverflow.com/questions/72192810/what-is-reactcomponent-and-where-does-it-come-from-when-importing-an-svg-in-reac

`prop drilling` - passing data to the child/grandchild component from parent (any level).
`React Context API` - https://react.dev/learn/passing-data-deeply-with-context
# React Router
`element vs component`<br>
  In React Router v6 we switched from using v5's <Route component> and <Route render> APIs to <Route element>. Why is that?

  For starters, we see React itself taking the lead here with the <Suspense fallback={<Spinner />}> API. The fallback prop takes a React element, not a component.
  This lets you easily pass whatever props you want to your <Spinner> from the component that renders it.

  Using elements instead of components means we don't have to provide a passProps-style API, so you can get the props you need to your elements. For example, in a
  component-based API there is no good way to pass props to the <Profile> element that is rendered when <Route path=":userId" component={Profile} /> matches. Most
  React libraries who take this approach end up with either an API like <Route component={Profile} passProps={{ animate: true }} /> or use a render prop or higher
  order component.<br>
  Reference: https://reactrouter.com/en/main/start/faq#why-does-route-have-an-element-prop-instead-of-render-or-component
  
`Outlet`<br>
  An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the     parent route matched exactly, it will render a child index route or nothing if there is no index route.<br>
  Reference: https://reactrouter.com/en/main/components/outlet

`Link`<br>
`Routes`<br>
`Route`<br>
  # SCSS Topics

  `@mixin`<br>
  `$variables`<br>
