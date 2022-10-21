# Creating a web app using React in real-time - Follow along

October 21st, 2022

## Overview

![](./Ugly%20Amazon.png)

We are trying to build a small-scale clone of Amazon with very minimal functionality, enough to demonstrate the need and usage of different hooks - `useState`, `useEffect`, `useContext`.

We need a web application with three main components. Given limited time, we will only focus on the functionality and not the styling.

1. We have a top nav which hosts the "Total Value" component.
2. We have the main body which shows a list of all the items in our store. (We will be getting this list from a JSON for now)
3. We have a checkout bar which shows the items in our cart.

We will add all relevant functionality to our components to make all of them work together.

## Step 0 - Thinking about the requirements

Let's start thinking about what we would need to make our app functional in real-time

- We need data for the inventory
- We render these items into our main body towards the left
- Each of our inventory item should have an "Add to cart" button
  - When clicked, we add that item to our cart and render it towards the right.
  - We update the "Total" amount on top right
- Each of our item in the "Checkout Cart" should have a "Delete" button
  - When clicked, we remove the item from our cart
  - We update the "Total" amount on the top right

## Step 1 - Create a new project

Let's create a new project using `create-react-app` and open it in our VS Code

```
create-react-app lab-7-demo
```

## Step 2 - Updating the structure of our project

We will create three different components:

1. TopNav - Will house the Total value of the items in your cart
2. CheckoutCart - Will house all the items in your cart
3. MainBody - A showcase of all the items in your inventory with relevant information

```
-> src
    -> CheckoutCart
    -> MainBody
    -> TopNav
    App.js
    ....
```

We create the three relevant folders in `src`.

We will then use our `App.js` as our entry point and use it to call all our components.

```
// App.js

// Imports for all our components
import TopNav from "./TopNav/TopNav";
import MainBody from "./MainBody/MainBody";
import CheckoutCart from "./CheckoutCart/CheckoutCart";

function App () {
    return (
        <>
            <h1>Ugly Amazon</h1>
            <div>
            <TopNav />
            </div>
            <div>
            <MainBody />
            </div>
            <CheckoutCart />
        </>
    )
}

```

## Step 3 - Creating the foundations for all our components

Now let's just add basic information to our components to make sure they render and we have something on our screen to start running our react app.

```
// src/TopNav/TopNav.js

const TopNav = () => {
  return (
    <>
      <h3
        style={{
          position: "absolute",
          right: "10px",
          top: "5px",
          color: "red",
        }}
      >
        Total: $0
      </h3>
    </>
  );
};

export default TopNav;
```

```
// src/MainBody/MainBody.js

const MainBody = () => {
  return (
    <>
      All Items
    </>
  );
};

export default MainBody;
```

```
// src/CheckoutCart/CheckoutCart.js

const CheckoutCart = () => {
  return (
    <div style={{ position: "absolute", right: "10px", top: "50px" }}>
      <h3> No items in cart</h3>
    </div>
  );
};

export default CheckoutCart;
```

Now, our webpage should look something like:

![](./App%20Foundation.png)

## Step 4 - Translating our requirements to React

- To keep it simple, let's put our inventory data into a `JSON` and use that to fetch values into our main body.

- We would need a state for showcasing the items for the main body on the left

- We would have to render the items from our JSON to our state for the main body

- We would need a state for showing the total value of items in our cart on the top right

- We would need a state to showcase the items added to our inventory towards the right side of the screen

- Actions in one component can affect other components

  - When we click "Add to cart", our checkout cart and total value changes.
  - When we click "Delete", our checkout cart and total value changes

- This means that one state can affect the behavior of another state for another component

- We would need to share the same states across multiple components

## Step 5 - Finalizing component lifecycle flow and initializing states

Since we need to share our states between components or atleast allow one component to have visibility over another, we would use `context` to create our three states as global and then use them in our components.

We could have done it in many different ways. We could have also passed them down as `Props` or used `Redux` (we haven't talked about that yet) etc.

There is no one right or wrong way to do this! Each methodology comes with its own tradeoffs.

## Step 6 - Generating inventory data

Let's create a list of inventory items with the following properties:

- Name
- Id
- Price
- Image

We can create a `JSON` file within our `src` directory.

```
// src/items.json

[
  {
    "id": 1,
    "name": "Eureka Whirlwind",
    "price": 79.99,
    "img": "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/394429-01.png?$responsive$&cropPathE=desktop&fit=stretch,1&wid=960"
  },
  {
    "id": 2,
    "name": "Shark NV356E",
    "price": 159.99,
    "img": "https://image-us.samsung.com/SamsungUS/home/home-appliances/vacuums/jet-stick/vs20a95923b-aa/VS20A95923B_01_Blue_SCOM.jpg?$product-details-blur-jpg$"
  },
  {
    "id": 3,
    "name": "Hoover WindTunnel",
    "price": 99.99,
    "img": "https://cdn.shopify.com/s/files/1/0082/3666/2902/products/1-tuya.jpg?v=1641969362"
  },
  {
    "id": 4,
    "name": "Dirt Devil Endura",
    "price": 74.99,
    "img": "https://target.scene7.com/is/image/Target/GUEST_93c0ea64-60d9-4bd4-b404-427091605b66?wid=250&hei=250&fmt=webp"
  }
]
```

## Step 7 - Declaring states and adding them to our context

Since we want our states to be used by and visbile to multiple components. We can add them to our context.

We are calling all our components in `App.js` so let's initiate the states for our data here and declare them in the context which can then be passed to the three child components.

```
// App.js

import React, { useState, useEffect, useContext, createContext } from "react";
import TopNav from "./TopNav/TopNav";
import MainBody from "./MainBody/MainBody";
import CheckoutCart from "./CheckoutCart/CheckoutCart";

// Importing our JSON data
const jsonItems = require("./items.json");

// Creating a Context and exporting it
export const ItemContext = createContext();

function App() {
  // Declaring our three states
  const [items, setItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [checkoutItems, setCheckoutItems] = useState([]);

  // Passing Context using Context.Provider
  return (
    <>
      <ItemContext.Provider
        value={{
          items,
          setItems,
          totalValue,
          setTotalValue,
          checkoutItems,
          setCheckoutItems,
        }}
      >
        <h1>Ugly Amazon</h1>
        <div>
          <TopNav />
        </div>
        <div>
          <MainBody />
        </div>
        <CheckoutCart />
      </ItemContext.Provider>
    </>
  );
}

export default App;
```

## Step 8 - Rendering our JSON data into our page

Now that we have our states set up and we are importing our data from the JSON file, let's get that into our state.

We will use the `useEffect()` to update our current state value, which is an empty array.

```
import React, { useState, useEffect, useContext, createContext } from "react";
import TopNav from "./TopNav/TopNav";
import MainBody from "./MainBody/MainBody";
import CheckoutCart from "./CheckoutCart/CheckoutCart";

const jsonItems = require("./items.json");

export const ItemContext = createContext();

function App() {
  const [items, setItems] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [checkoutItems, setCheckoutItems] = useState([]);

  // Adding values from our JSON to our state
  useEffect(() => {
    setItems([...jsonItems]);
  }, []);

  return (
    <>
      {/* Test */}
      <ItemContext.Provider
        value={{
          items,
          setItems,
          totalValue,
          setTotalValue,
          checkoutItems,
          setCheckoutItems,
        }}
      >
        <h1>Ugly Amazon</h1>
        <div>
          <TopNav />
        </div>
        <div>
          <MainBody />
        </div>
        <CheckoutCart />
      </ItemContext.Provider>
    </>
  );
}

export default App;

```

The useEffect will get triggered when the Component mounts or is rendered for the first time. Since, it is not hooked with any other state, it will just execute once.

Since we use the setState function for items, whichever component is using this state will re-render. In our case, the MainBody component should re-render at this stage.

Note: We could have just initialized our state with the JSON values but we are using useEffect() to do add these values to the state instead as in the real-world scenario, this data will most likely come from an API and hence will be a `side-effect`.

## Step 9 - Updating MainBody to use the inventory data

Now that we have updated our `items` state and it houses our inventory data, let's go ahead and use that in our `MainBody` component.

We will import our Context and then use useContext to start using our states.

```
import React, { useContext } from "react";

// Importing our ItemContext being exported from App.js
import { ItemContext } from "../App";

const MainBody = () => {
  // Getting all the states from the ItemContext using useContext
  const { items, checkoutItems, setCheckoutItems, totalValue, setTotalValue } =
    useContext(ItemContext);
  return (
    <>
      {items.length == 0 ? (
        // Checking if our inventory state is empty or full.
        <h2>"No related items found."</h2>
      ) : (
        // If we have data in our state, we render our inventory items into our main body
        items.map((item) => {
          return (
            <div id={item.id} className="flex" style={{ margin: "20px" }}>
              <img
                id={item.id}
                src={item.img}
                height={"100px"}
                width={"100px"}
              />
              <h2>{item.name}</h2>
              <h3>Price: {item.price}</h3>
            </div>
          );
        })
      )}
    </>
  );
};

export default MainBody;
```

Now our MainBody should look something like this:

![](./MainBody%201.png)

## Step 10 - Add To Cart Functionality

Now, let's add the "Add to cart" button.

Once this button is clicked, we should add that value to our `checkoutCart` state so that it can be rendered in our right side div and add its value to the `totalValue` state so that we can update the Total amount on the top right in red.

```
<button
    style={{ margin: "10px" }}
    onClick={() => {
        let updatedCheckoutItems = [...checkoutItems];
        updatedCheckoutItems.push(item);
        setCheckoutItems(updatedCheckoutItems);
        setTotalValue(parseInt(totalValue + item.price));
    }}
    >
    Add to cart
</button>
```
We add the `onClick` functionality to our button and add inline code to define its behavior.

## Step 11 - Updating TopNav to show real-time cart value

Now that our `totalValue` gets updated when items are added to the cart (and later when they are removed), let's use this state in `TopNav` so that we are rendering that state.

```
import { ItemContext } from "../App";
import React, { useContext } from "react";

const TopNav = () => {
  const { totalValue, setTotalValue } = useContext(ItemContext);
  return (
    <>
      <h3
        style={{
          position: "absolute",
          right: "10px",
          top: "5px",
          color: "red",
        }}
      >
        Total: ${totalValue}
      </h3>
    </>
  );
};

export default TopNav;
```

Again, we import our Context from App.js. We then use `useContext` to get the relevant state and then render it as part of our Component.

## Step 12 - Rendering items in cart

Its time to now work on our final component - `CheckoutCart`.

When we use the "Add to Cart" button in our `MainBody`, we push the entire item object into our state. Now let's use this array to render our checkout cart.

```
import React, { useContext } from "react";
import { ItemContext } from "../App";

const CheckoutCart = () => {
  const { checkoutItems, setCheckoutItems, totalValue, setTotalValue } =
    useContext(ItemContext);
  return (
    <>
      <div style={{ position: "absolute", right: "10px", top: "50px" }}>
        <h3>Checkout</h3>
        {checkoutItems.length == 0 ? (
          <h4>No items in cart</h4>
        ) : (
          checkoutItems.map((item) => {
            return (
              <div id={item.id} className="flex" style={{ margin: "20px" }}>
                <img
                  id={item.id}
                  src={item.img}
                  height={"30px"}
                  width={"30px"}
                />
                <h3>{item.name}</h3>
                <h4>Price: {item.price}</h4>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default CheckoutCart;

```

The above code is almost identical to our `MainBody`. We import our context, and all relavant values from it. 

We then use Array.map to render all our checkout items.

## Step 13 - Adding remove from cart functionality

The last step for this demo is to add remove from cart functionality. This functionality again will be very similar to "Add to cart" as we will update our `totalValue` and `checkoutCart` states.

First, let's install a library that will allow us to use fun icons, including the bin icon that we need.

```
npm install react-icons --save
```
We can then use these icons by importing them into our component as follows:

```
import { AiFillDelete } from "react-icons/ai";
```

Now, let's add our button to our `CheckoutCart.js`.

```
<button
    onClick={() => {
    let updatedCheckoutItems = [...checkoutItems];
    updatedCheckoutItems = updatedCheckoutItems.filter((v) => {
        return v.id !== item.id;
    });
    console.log({ updatedCheckoutItems });
    setCheckoutItems(updatedCheckoutItems);
    setTotalValue(parseInt(totalValue - item.price));
    }}
>
    <AiFillDelete />
</button>
```

That's it! Looks like we have a very basic web app on our hands. This is in no way perfect and has a lot of shortcomings, but it is a start!

