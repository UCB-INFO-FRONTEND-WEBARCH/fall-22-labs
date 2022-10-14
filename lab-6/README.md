# INFO 153A/253A - Front-End Web Architecture - Lab 6

## Deep-dive into JS's Array functions and useEffect() for React

October 14th, 2022

## Javascript Array Functions

## React Hooks

Up until recently, React used class components for all its functioning. Using Class components came with a lot of complexities. Understanding classes is difficult for both - the user (developer) and the interpreter.

Moreover, managing event and component lifecycle with class components was tricky and complex.

To mitigate this, React introduced `Hooks`. They basically "hook into" your component and help you access state and lifecycle.

The two most basic and widely used hooks are `useState` and `useEffect`.

## useState()

We have already seen `useState` in our earlier labs and lectures. You can refer to that [here](../lab-5-contd/README.md).

## React Effects

First, let us understand what an `effect` also called as `side effect`is?
Well, to understand that, we will first have to understand what `pure functions` are.

### Pure Functions

In React, most components are intended to be `pure functions`.

A pure function is a function that receives an input and produce a predictable output of JSX.

_QQ: What is an input to a React component?_

A pure function <b>always</b> returns the same output when given the same input. Pure functions have the great benefit of being _predictable, reliable, and easy to test._

### Side Effects

Side effects are not predictable because they are actions which are performed with the "outside world."

We perform a side effect when we need to reach outside of our React components to do something. Performing a side effect, however, will not give us a predictable result.

Think about if we were to request data (like blog posts) from a server that has failed and instead of our post data, gives us a 500 status code response.

Virtually all applications rely on side effects to work in one way or another, aside from the simplest applications.

Common side effects include:

- Making a request to an API for data from a backend server
- To interact with browser APIs (that is, to use document or window directly)
- Using unpredictable timing functions like setTimeout or setInterval

## useEffect()

This is why `useEffect` exists: to provide a way to handle performing these side effects in what are otherwise pure React components.

If we perform a side effect directly in our component body, it gets in the way of our React component's rendering.

Side effects should be separated from the rendering process. If we need to perform a side effect, it should strictly be done after our component renders.

This is what useEffect gives us.

In short, <b>useEffect is a tool that lets us interact with the outside world but not affect the rendering or performance of the component that it's in.</b>

`useEffect` is called once when the page has completed rendering and then can be attached to a particular state to perform a set of tasks everytime that state changes

### How to use useEffect?

Just like `useState` we import `useEffect` from React

```
import {useState, useEffect} from 'react';
```

The `useEffect` is always defined within the components's body and it takes two parameters

- A `callback` function
- `Dependencies` array

```
const NewComponent = () =>{
    useEffect(()=>{
    }, [])
}
```

The function passed to useEffect is a callback function. This will be called after the component renders. In this function, we can perform our side effects or multiple side effects if we want.

The second argument is an array, called the dependencies array. This array should include all of the values that our side effect relies upon.

Whatever states are passed in this array, the callback function will be executed each time that state updates

You can have the `useEffect` with three different types of `dependency array` values:

1. No second parameter/argument

```
useEffect(()=>{
    // Do something here
})
```

In this case, the useEffect is _triggered everytime any state changes._

2. Empty array

```
useEffect(()=>{
    // Do something here
}. [])
```

In this case, the useEffect is _triggered only once, after the page reload._

3. Array with states

```
useEffect(()=>{
    // Do something here
}, [profiles])
```
In this case, the useEffect is _triggered once on page load and then everytime the `profiles` state is updated._

Now let's use it in a [component](./src/ArrayMap/ArrayMap.js)
