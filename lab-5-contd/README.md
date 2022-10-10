# INFO 153A/253A - Front-End Web Architecture - Lab 5 - Continued

## Props and State in React.js

October 10th, 2022

We have already talked about fundamentals of React.js [here](../lab-5/README.md) and have a fair understanding of how React works, how projects are structured. We also have learnt about Components and how to use them.

Remember that Components are individual reusable modules (or functions). Hence, just like functions, there should be ways to send data to a component and also recieve data back from it.

Think about your user experience as someone trying to book an airline ticket. You fill information about your trip, you and your payment on seperate pages one step/page at a time. However, we do see information from previous page(s) populating at a different page, something like the checkout page.

This means that there is a flow of data between pages. And since in React, pages are nothing but a collection of documents, there should be a flow of data between these components.

There are multiple ways to handle this flow of data between components in React. Today, we are going to learn about two of the most fundamental methods - `props` and `state`.

## What are Props?

In React, <i><u>the flow of data is uni-directional</u></i> and information can only be passed from <i><u>parent to child only</u></i>.

Thankfully, using `props` within your component hierarchy is very straightforward.

```
<MyComponent name="Front-End">
```

Firstly, we need to define/get some data from the parent component and assign it to a child component’s `prop` attribute. In the above code snippet, `name` is a defined prop here and contains text data which is passed from the current component to `MyComponent`.

Now within the component defintion, we can recieve props as an argument.

```
const MyComponent = (props) => {
    return (
        <>
        <h3> My name is {props.name} </h3>
        </>
    )
}
```

We recieve `props` as an argument to our Component's definition and we can then use the properties within the props directly within our `jsx`. Since this file is nothing but JS, we can directly use variables within `{}` braces.

## What is State?

React has another special built-in object called `state`, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.

### Why do we need states?

Let's think about using an e-commerce store, say Amazon. On the desktop version of Amazon, you have your shopping cart and your cart total. Let's say it is your first time using Amazon, so your cart is empty and that subtotal is currently $0.00.

Now, when you actually like something and want to go ahead and buy it, you click on "Add to cart" for that item and it suddenly pops up on the right side of your screen, in the cart, and the subtotal is updated.

However, what I have in my cart, is only shown to me. It is not shown to other users of Amazon. So somehow, my cart is tied to my account.

All of this is managed with states and similar concepts (we will talk about them later in this course!).

<h4 style="color:grey">Setting initial values of a component</h4>
React components (with state) are rendered based on the data in the state. State holds the initial information.

States can be assigned default values which are shown when the website is rendered for the first time. The $0.00 subtotal for your shopping cart is an example of initial state value.

Similarly, if you are trying to fetch something via an API, you can give a default value to the component via its initial state value.

<h4 style="color:grey">Monitoring component behavior</h4>
We talked about the `declarative` property of React and how it uses a `Virtual DOM` which only updates a single component rather than updating the whole website. This functionality is enabled by states.

The value of the state is what React actively monitors. As soon as a change is made to a state value, React gets informed and immediately re-renders the DOM – <b>not the whole DOM, but only the component with the updated state.</b>

A change in the state happens based on user-input, triggering an event, and so on.

### Using states

Firstly, we need to import the functionality for states from React. So in our `.jsx` file for a component, we use:

```
import { useState } from "react";
```

`{}` function as destructuring operators here and allow us to fetch a function called `useState` from react.

Each state is declared as an array of two values, the first one is a getter and the second one is the setter.

Let's say I want to maintain the name of the user as part of a component. Your state declaration might look something like this:

```
const [firstName, setName] = useState("John Doe");
```

`firstName` is the getter value or what you can use within your code to refer or read or use the name.

`setName` is the setter function that changes the `firstName` from an older value to a newer value.

`useState("John Doe")` is the magic feature here. When the compiler sees the `useState` it assigns the two values within the array its functionality. So it makes the `firstName` as the getter and `setName` as the setter. The `John Doe` is the intial/default value to the state.

```
// Generic definition of a state

const [state, setState] = useState();
```

<h4 style="color:grey">Why do we need the setState?</h4>

A valid question here is, can't I just do `state = newValue`?

The answer is _Yes_. But if you do that, the varible changes the value internally but the component won't get re-rendered.

The re-rendering is tied to the `setState()`. The `setState()` method triggers the re-rendering process for the updated parts. React gets informed, knows which part(s) to change, and does it quickly without re-rendering the whole DOM.

## Working Example for States

Note: Will be updated after class!