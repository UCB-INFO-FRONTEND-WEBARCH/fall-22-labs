# INFO 153A/253A - Front-End Web Architecture - Lab 5
## Intro to React.js

October 7th, 2022


## React Fundamentals

React is a Javascript library/framework for building user interfaces. 

### Declarative
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug.

### Component-Based
Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

### Learn Once, Write Anywhere
We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native.

<hr>

## How does React work?

React uses something called a `Virtual DOM`.

The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

## Creating a new React Project

This project source was created using [`create-react-app`](https://create-react-app.dev/). You need to have [`Node.js`](https://nodejs.org/en/) installed on your computer to use this library.

`create-react-app my-app` will create a new React project called `my-app` with the right structure and all essential files. 

It will also publish a default `README.md` file which we have moved to [`REACT.md`](./lab-5/REACT.md) so that we can repurpose this README.

We will talk more about the structure and the files in the upcoming sections.

We can run a react project locally using `npm start` and create sharable files for hosting the project using `npm run build`.

<hr>

## Structure of a React Project

```
-> node_modules
-> public
-> src
-> .gitignore
-> .package-lock.json
-> package.json
-> README.md
```

### Managing Packages

A lot of times, you will be using external packages and functionality that is pre-built by others and the wider react development community. You can use these packages by using `npm` which is the `Node Package Manager` and is installed automatically when you install `node.js`.

All the relevant files for these packages are stored in the folder called `node_modules`. `package.json` is the file that keeps a list of all the packages that you installed in the `dependency` section. `package-lock.json` talks about the specific version of each package that we are or should be using.

We will talk more about these three in the next section (Using React with GitHub).

### Public

The `public` folder hosts all the files that we would want to be public or allow access to other people. Notice that it also has the `index.html` file. This is also the folder where you would put your assets such as images, videos etc.

The `index.html` file is completely empty yet we have data in our web view. How is that?

Notice that we have one single `div` in our HTML with the `id=root`. This is how we are populating data into our HTML.

This `root` element is developed and rendered in React and then pushed to our `index.html` using multiple frameworks like webpack, babel etc. We don't need to know how they work for the scope of this course. 

For most part as a React dev, _you will not touch `index.html`_.

### src

This is the heart and soul of your React project. This is where you will create and store all your different `Components`.

We have `index.js`. 
```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

This is the entry point to your React project. Notice how it fetches `root` using `getElementById` and then renders it? What does it render? Notice how it uses `<App />` as an HTML tag?

We then have `App.js`.

```
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

```

This is where the actual `root` component is defined. Our App function returns an HTML code as part of its return. This is `.jsx` which is HTML returned via a Javascript code.

We use this file as our hierarchy maintainer. We saw how React used components and maintained a hierarchy of these components, this can be managed within the `App.js`. We will be diving more into this in the upcoming sections.

<hr>

## Using React with GitHub

When you create a new React project using `create-react-app` it automatically initializes the project as a git workspace. You can see that whatever changes you made are showing up in your Source Control. You can now create a new GitHub repo and push these changes to that repo by setting an upstream.

We also have the `.gitignore` file. This file is used to specify what should not be uploaded or maintained in GitHub. For example: passwords, config files for environments etc should not be posted to your public GitHub repos.

For React, we never push our `node_modules` as part of the project as these files can be extremely heavy.

Now the question arises, how do we then transfer packages if we are sharing our project with other people or if we are hosting it on a server?

Well, we use `package.json`. We can install all required packages anytime using `npm install`. What this command does is get all required packages from `package.json` and their version from `package-lock.json` and installs them locally.

So everytime you put your project in a new computer or a server, you just run `npm install` and you are ready to go.

<hr>

## Components in React

Why do we need/use functions while coding?

Functions allow you to do a single task again and again without the repitition of the same code. Moreover, when you change the implementation of the function, that changes everywhere in your code.

`Components` in React are very similar. Infact, each component is defined as a function. We then use the `export` command to export that function to files outside the one in which you defined the function and the `import` statement to start using that component in other places. So `import` and `export` go hand-in-hand.

### But again, why the heck do we need Components? Or .... why do we even need React?

So components are small individual components in a page. You can go as tiny as you feel like. Think about the rating bar in an app like Yelp. Each star can be an individual component or the entire bar with 5 stars can be one component.

Using components allows us to take advantage of all the features that React offers.

<p style="color:darkgrey;"><b>1. Instant update without page reload </b></p>

Since React uses the Virtual DOM and each component makes use of the `Declarative` programming, you can update each component seperately, re-render only that component without affecting any other part of your webpage or even the need to re-render the entire page again.

Do you remember using forms in HTML? Do you remember what happened when you clicked on the submit button for a form? By default, it would refresh your entire webpage. That is because HTML needs to re-render to show whatever changed after that button click. We made use of the preventDefault() function to override that behavior.

Now, if we are using the form component and if we click Submit, React has the ability to only make changes to that particular form component. It can clear out the previously filled fields, store that information somewhere or make an API call and then show a prompt etc. All of this, without refreshing the page and only re-rendering the desired components.

Let's think about another example: You can see this in action on Facebook, when people click like or write a comment that appears immediately. There’s no need for excessive loading and this feature makes it possible to update information as it comes in.

<p style="color:darkgrey;"><b>2. Streamlined logic within HTML</b></p>

Since React.js makes use of `.jsx` which is a Javascript code but returns a single HTML element, we can directly put in logic or JS code within that HTML element. Doing that is a lot easier as compared to using JS with HTML where you have to import the JS file, get elements by ids and then change their values.

We will see this first-hand when we move onto `Props` and `State` in react.]

<p style="color:darkgrey;"><b>3. Reuse the same components</b></p>

Think about creating a clone of Yelp as your next assignment. Your page can have multiple restaurants in one screen as cards or list with an option to rate/review each of them.

How would you create that using HTML?

You would essentially have to copy each of your div and paste it, say 10 times for you to see 10 restaurants on your screen. Now you also need to embed data into each of these seperately and get data for each of them seperately.

While all of this is possible by doing some advanced JS coding, that is very cumbersome and the code will be extremely complex and messy.

Now when we use React, we can make each card/list item as one component. Now since each component is nothing but a function, we can call it again and again. Each component can be passed data through `Props` and we can recieve inputs from them using `State`.

That makes our life a whole lot easier, don't you think!

## Creating a Component in React

Within my src folder, I am going to create a new component called `NewComponent`. The best practice is to create a new folder for each component with the same name. This folder can house your `.jsx` file for that component and also all related files like its `.css` etc.

It is also another best practice to name your in `PascalCase`

```
-> src
    -> NewComponent
        -> NewComponent.js
```

```
NewComponent.js

const NewComponent = () => {
  return (
    <>
      <h3>This is my new component</h3>
      <h4>This is a subtitle</h4>
    </>
  );
};

export default NewComponent;
```

Like mentioned earlier, each component is defined using a function in `.jsx` which returns a single HTML element.

Above, we create the `NewComponent` function which returns a `<h3>` and a `<h4>` statement. We use `<> </>` empty HTML fragments to bind anything that we are passing into a single HTML element. Here, we have a dummy HTML element which has two statements/headings.

The `export` statement just opens up your function to be used by any other file in your project.

Now, we need to use this newly created component.

We can do that in `index.js`, which again is the entry point of your React project and also maintains the main hierarchy.

```
index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import NewComponent from "./NewComponent/NewComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <hr />
    <p>
      <NewComponent />
    </p>
    <hr />
    <p>
      Another para{" "}
      <span>
        <NewComponent />
      </span>
    </p>
  </React.StrictMode>
);
```

In the above code snippet, we first import NewComponent from its location. Note that we don't need the `.js` extension after `NewComponent` file name. It automatically knows that it is a JS file.

Within our `root.render`, we now can define our HTML structure by using components.

Here, I create three overall sections in my code using the `<hr>` tag which adds a line. Then i reuse my `NewComponent`. Remember that each component returns an HTML and that HTML is embedded in place of this component in the final product.

Now let's add some CSS to your component. We create a new css file within our folder for that component.

```
newComponent.css

h3 {
    color: blue;
}

h4 {
    color: red;
}
```

To import your css into your component, just use the `import` statement for the css within the jsx file for our component.

```
NewComponent.js

import "./newComponent.css"; // Importing our CSS

const NewComponent = () => {
  return (
    <>
      <h3>This is my new component</h3>
      <h4>This is a subtitle</h4>
    </>
  );
};

export default NewComponent;
```