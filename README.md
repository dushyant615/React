# React topics
`Hooks` <br>
1. useState
2. useEffect
<br>

`Fragment`<br>

`ReactComponent` - SVG as ReactComponent - https://stackoverflow.com/questions/72192810/what-is-reactcomponent-and-where-does-it-come-from-when-importing-an-svg-in-reac

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
