# INFO 153A/253A - Front-End Web Architecture - Lab 8

October 28th, 2022

## Persisting Data in React

When we talk about data storage, we have only touched upon states in React. Although, states are possibly one of the most important React hooks, they just provide temporary storage for data.

Sometimes, web/mobile apps might want to persist data for a longer time or for future reference. There are two ways to do it - `sessionStorage` and `localStorage`.

`localStorage` and `sessionStorage` are almost identical and have the same API. The difference is that with `sessionStorage`, the data is persisted only until the window or tab is closed.

With `localStorage`, the data is persisted until the user manually clears the browser cache or until your web app clears the data.

In this tutorial we will talk about `localStorage`, but the syntax for `sessionStorage` is exactly the same.`

## localStorage

`localStorage` is a web storage object that allows JavaScript sites and apps to keep "key-value pairs" in a web browser with no expiration date.

```
key -> string value
```

This means the data survives page refreshes (sessionStorage) and even browser restarts. This indicates that the data stored in the browser will remain even when the browser window is closed.

In basic terms, local storage enables developers to store and retrieve data in the browser.

Please note: _using localStorage as a database for your project is not a good practice, since data will be lost when the user clears the cache, among other things._

`localStorage` functions usually use state values as data and are triggered within a useEffect().

### Creating, Reading, and Updating Entries

You can create entries for the localStorage object by using the `setItem()` method. The `setItem()` method takes two arguments, the key and corresponding value.

```
const [items, setItems] = useState([]);

useEffect(() => {
  localStorage.setItem('items', JSON.stringify(items));
}, [items]);
```

To read entries, use the `getItem()` method. The getItem() method takes one argument which must be the `key`. This function will return the corresponding value as a string.

```
const [items, setItems] = useState([]);

const setItems = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
}

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
   setItems(items);
  }
}, []);
```

You can update a localStorage key using the `setItem()` again.

### Deleting and Clearing Entries

You can delete an entry with the `removeItem()` method. The `removeItem()` method takes one argument which will be a key of the localStorage object.

```
localStorage.removeItem(items);
```

_You can also clear all items in localStorage_. This can be done with the `clear()` method.

```
localStorage.clear();
```

### Storing Non-String values with JSON to localStorage

`localStorage` can only store string values. If you want to store objects or arrays as values in localStorage, you can use `JSON.stringify()` to convert them into strings. When creating or updating key/value pairs in localStorage, use JSON.stringify() with the object or array as the argument.

```
let myObj = { name: 'Skip', breed: 'Labrador' };
localStorage.setItem(key, JSON.stringify(myObj));
```

To read and return stringified values, use the `JSON.parse()` method. The `JSON.parse()` method takes JSON strings and converts them into JavaScript objects. JSON.parse() takes .getItem() as it’s argument.

```
let item = JSON.parse(localStorage.getItem(key));
```

### Checking and Iterating over localStorage

If `localStorage.length` is greater than 0, then there are items within the localStorage object. Include an else statement in case there are no items in localStorage.

```
if (localStorage.length > 0) {
  // ...
} else {
  // ...
}
```

The localStorage and sessionStorage objects don’t support the `forEach` method. To iterate over the items in localStorage, use a `for` loop.

The `key()` method takes an integer as an argument and returns the corresponding key. With a for loop, pass i in as the integer for key().

```
for (let i = 0; i < localStorage.length; i++){
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  console.log(key, value);
}
```

You can use the exact same functions and syntax for `sessionStorage`. You can see your localStorage and sessionStorage under Developer Console -> Application -> Local Storage/ Session Storage.

## Routing in React

Till now we have worked with web applications/websites with only one path or page. That will not always be the case in the real-world. Your webpages can have multiple routes.

For example, your personal portfolios can have seperate pages for things like `Contact`, `About` and maybe even a `Blog` that you maintain.

React allows us to add "routing" to our web applications. 

In React, routers help create and navigate between the different URLs that make up your web application. They allow your user to move between the components of your app while preserving user state, and can provide unique URLs for these components to make them more shareable. With routers, you can improve your app’s user experience by simplifying site navigation.

### React Router

`React Router` is one of the most popular routing frameworks for React. The library is designed with intuitive components to let you build a declarative routing system for your application. This means that you can declare exactly which of your components has a certain route. With declarative routing, you can create intuitive routes that are human-readable, making it easier to manage your application architecture.

Let's first install `react-router-dom` for our application!

```
npm install react-router-dom
```

We then import all necessary functionality from it.

```
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
```

We will talk in detail about all of them later.

React Router is a declarative routing framework. That means that you will configure the routes using standard React components. There are a few advantages to this approach. First, it follows the standard declaractive nature of React code. You don’t need to add a lot of code in componentDidMount methods or inside a useEffect Hook; your routes are components. Second, you can intuitively place routes inside of a component with other components serving as a template. As you read the code, you’ll find exactly where the dynamic components will fit in relation to the global views such as navigation or footers.

### Working with React Router

Below is a code snippet of a React application with routing enabled.

```
// App.js


import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import './App.css';
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;
```

We are creating three routes for three components -> `Home`, `About`, `Contact Us`.

- `BrowserRouter`: BrowserRouter is a router implementation that uses the HTML5 history API(pushState, replaceState and the popstate event) to keep your UI in sync with the URL. It is the parent component that is used to store all of the other components.
- `Routes`: It’s a new component introduced in the v6 and a upgrade of the component. The main advantages of Routes over `Switch` is: Routes are chosen based on the best match instead of being traversed in order.
- `Route`: Route is the conditionally shown component that renders some UI when its path matches the current URL.
- `Link`: Link component is used to create links to different routes and implement navigation around the application. It works like HTML anchor tag.

#### Let us now try to understand the props associated with the Route component.

Route component will now help us to establish the link between component’s UI and the URL. To include routes to the application, add the code give below to your app.js.

```
<Route exact path='/' element={< Home />}></Route>
<Route exact path='/about' element={< About />}></Route>
<Route exact path='/contact' element={< Contact />}></Route>
```

1. `Exact`: It is used to match the exact value with the URL. For Eg., exact path=’/about’ will only render the component if it exactly matches the path but if we remove exact from the syntax, then UI will still be rendered even if the structure is like `/about/10`.
2. `Path`: Path specifies a pathname we assign to our component.
3. `Element`: It refers to the component which will render on matching the path.

Note that we are still rendering a single component.