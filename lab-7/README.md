# INFO 153A/253A - Front-End Web Architecture - Lab 7

## Doubling down on React Hooks

October 21st, 2022

We have already talked about two basic React Hooks - `useState` and `useEffect`. We will continue building our understanding for these two hooks and we will also learn about another hook called `useContext`.

However, we do will things a bit differently. We will build a small prototype of a small application that will better help you understand `useState`, `useEffect` and `useContext`.

We will be building a "Very Ugly Amazon"!
![](./Ugly%20Amazon.png)

## Quick Recap

### Props

`Properties` aka `props` are a set of values that are passed unidirectionaly from a parent to a child component.

```
Parent.js

...
<Child name={"Test"} />
```

You pass the data you want as part of the child call in the parent component.

```
Child.js

const Child = (props) => {
    ...
    <h1>{props.name}</h1>
    ...
}
```

The child component recieves `props` as a paramter and can then use it to refer to values that were passed down. In the above example, we are using `props.name` as `name` was passed down as Props when the child component was invoked.

### States

`States` are like small storage boxes which you can use to small or bigger pieces of data. This can be anything from a small number to a chunk of API data.

Moreover, states are monitored by React's Virtual DOM and whenever we use the `setState` function, each component that is using that particular state automatically re-renders.

```
import {useState} from 'react';

const Component = () => {
    const [state, setState] = useState("This is the heading");
    return (
        <h1>{state}</h1>
    )
}
```

We define a state and its setter "function" using the `useState` function. `state` is the getter and can be used within your component render/return. You can update your state by using the `setState` function.

```
setState("This is my new heading)
```

Using the `setState` function automatically re-renders all related components.

### Effects/Side-effects

React components are `pure functions`. A pure function is a determinable function, which when given the same input as a parameter will always return the same value.

Everytime we talk about getting data from outside of our React environment or the Virtual DOM, we are not dealing with pure functions anymore or the execution can take more time which requires special accomodation. This, in React terms, are called `side-effects`.

Some actions/side-effects can be:

- Getting data from an external source
- Updating the original DOM
- Doing actions that might take time - for example using `setTimeout` etc

To tackle all of these situations, we use a function called `useEffect()` which lies outside the `return()` of your component. This is because these are `side-effects` and React can only tackle these when it is not rendering data. So if this functionality is put inside the render, it will hinder the component rendering.

```
const Component = () => {

useEffect(()=>{
    // getData from API
    // setState -> update my state using the new data
}, [])

return(
    ...
)
}

```

useEffect takes in two parameters - a `callback` function and a `dependency array`. The callback function is what is triggered when the useEffect takes place and the dependency array is an array of states which when changed, will trigger the useEffect.

By default, useEffect will always trigger when the component is rendered for the first time.

### Context

<h4 style="color:lightblue">Passing down items via Props</h4>

States are highly useful but they are local/limited to the component they are declared in. This leads to complexity when you want to use the state from one component in another.

Think about any big web application, there are different components whose behavior can also change other parts of the application.

For example:

- When you add something to your cart in Amazon, it shows up in th cart bar on thr right, your icon for total items in your cart changes at top and also the total value of your cart changes.

- When you are booking a flight ticket, your selection on one page affects or even drives the next page content etc

The above two are very common examples of one component affecting the other's behavior.

We have already talked about `props`. One way you achieve this is to pass the state and its setState function to the child as props, which can then use the state value and also change its value via setState.

```
Parent.js

const Parent = () =>{
    const [parentState, setParentState] = useState();

    return (
        <Child parentState={parentState} setParentState={setParentState}>
    )
}
```

In the abive code snippet, we created a state called `parentState` as part of myparent component and I then pass it to my parent using Props.

```
Child.js

const Child = (props) => {
    const {parentState, setParentState} = props;
    // We get the state and setState using destructuring of props.

    useEffect(()=>{
        ... do something
        setParentState(newValue); // Changing a state in parent component
    })
    return (
        <h1>{parentState}</h1> // Using a state in parent component
    )
}
```

Now, in the Child component, we get use the state and the setState function. Once we use the `setParentState` function, every component in the entire DOM that is using the `parentState` will change, _including the Parent component._

<h4 style="color:lightblue">Using useContext hook</h4>

Although the above approach works fine, it can get complex if our components are highly nested. For example, if you are passing down style properties across layers, maintaining this passage of props from one level to another can require a lot of work.

A more efficient way to deal with this is to use the `useContext` hook. Context are like `global states` and can be accessed by any component at any level.

You can define add items to a context at the top-most level of your hierarchy and it can then bew viewed and used by all the parent components.

_It works exactly like passing down props but makes the maintainance easier as you just export context at the top level and not at each level._

Now let's see how to use this hook!

```
Parent.js

import {createContext} from 'react';

export const ItemContext = createContext(); // Context is declared outside our Component
// This is because as we are exporting this to be used by other files

const Parent = () => {
    const [items, setItems] = useState([]);

    return (
        <>
        <ItemContext.Provider
        value={{
          items,
          setItems
        }}
      > 
      { /* We use Context.Provider to specify what values we are putting into context */ }
      <Child /> 
      { /* Notice that we are not passing no props to our child */ }
      <Child />
      </ItemContext.Provider> 
      { /* Everything within these Provider tags will be able to access our context */ }
        </>
    )
}
```

In the topmost component from which you want your data to propagate, we use `createContext` to put our data into the context.
We also export this Context variable so that it can be imported and used by other files/components.

We then wrap all the child components that should have access to these context values within 
```
`<ContextName.Provider value={...items to pass as context}>
...Child Components that should access to the above values
</ContextName.Provider>`.
```

Now, let's import and use these context values within our Child Component.

```
Child.js

import {useContext} from 'react';

import { ItemContext } from "../Parent"; // Importing the Context we created in the Parent

const Child = () => {
    const { items, setItems } = useContext(ItemContext); 
    // useContext to use values in context

    const dummyFunction = () => {
        ... do something
        setItems(newItems) // Updating state of parent, imported as context
    }

    return (
        <>
        <h1>{items}</h1> 
        { /* Using state value from parent, imported as context */ }
        </>
    )
}

```
In the parent, we used the `createContext` and exported the Context variable. In the child component, we use `useContext` and import the context variable.

We can then use the state and setState as we did with Props as if they were a part of the Child Component itself.

## Ugly Amazon

Now, let's put all of these to work together and see how React can allow us to build something real quickly.

Head over to [Ugly Amazon](./Ugly%20Amazon.md) follow the steps in this tutorial.


