
1. PropTypes are used to valitade properties passed down to children components. It reduces the bugs that can be developed through passing the wrong type of property a parameter might need. For example, in a situation where the developer is supposed to pass a string and instead passes an interger, if proptypes is available, react will throw an error letting the developer know what type of property is was expecting to be passed into the parameter.

2. Life-cycle event : Life-cycle events are methods you can use on your application state. It can be used to mount, update, unmount and render your state to the DOM.

3. Higher Order Components are components that take in components as paramaters and return that component. High order Components shines in situations where the components that are to be created all have the same structure, so instead of creating multiple components with the same structure, you create one Higher Order Componentt and pass the components to it as parameters and render the high order component to the DOM. 
Higher Order Components is also very useful in situations where components are to be rendered based on a condition. for example in a situation where the app is supposed to render a homepage component if the user is logged in or render a login componenet is the user is not logged in. Instead of writing an if statmenet in your app.js that will have to render a component based on the information, a high order component is created and the logic needed is added there, the components are passed in as parameters it simple and clean.

4. Components can be styled using:
  -> using external css files: Keeps the file clean of any css requiring only classnames to be passed to the html element.

  -> inline styling : This way makes styling a particular html element easy. For example, you have three paragraph elememts in a div and you want to style one particular paragrah element, inline css makes it easy to do so.

  -> using styled-component library : This is like using Javascript to write css. you write the css and save it to a variable and then use the variable to wrap the element you want to style. I like styling my app this way because it helps me to think of how to further break down my components to resuable components so that the style I am applying the component is only for this compomenet and I don't have to worry about it affecting other html elements.

  -> bootstrap in react(reactstrap) : This is basically using bootsrap to style your react components. I don't really know any benefit with this because I prefer to style my app with css. Maybe because I do not know how to use.