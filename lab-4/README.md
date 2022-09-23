# INFO 153A/253A - Front-End Web Architecture - Lab 4

September 23rd, 2022

## Javascript - Your best friend and the worst enemy!

Javascript is probably the most popular programming language in the world. Traditionally, it was built to support web pages and is a client side programming language, meaning it only used to work on a browser.

The V8 Javacript engine is used in Chromium, which is the open-source project by Google that powers Google Chrome.

However, in recent times, with the development of `Node.js`, we can use Javascript locally on our devices to as `Node.js` creates a runtime of the V8 engine on our devices.

If you are proficient in Javascript, you are on course to become a Full-Stack Developer as you use Javascript for both Frontend (`React.js`) and Backend(`Node.js`).

Javscript is loosely typed and will allow you to explode things so you need to be very careful with it. More on this and Typescript will be talked about later during this course when we get started with `React.js`.

Javascript uses something called the `ECMAScript` or `ES`x standard where x is the version number. The current version of Javascript and what we will use is based on `ES6` and above versions (which were themselves based upon ES6). To give you a background, ES6 introduced a lot of ground-breaking features such as `arrow function`, `import` statement and `class` declarations.

## JS is Asynchronous (BEWARE)!

Javscript is `single-threaded` and is `asynchronous` (or is made to be). 

This blog covers everything I want to talk about and explains it better than I could. So let's mark it as an essential [read](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif).

Javascript is single-threaded which means that it can only execute one task at a time.

But wait, what do I mean by a `task`? A task is an `Input/Ouput (I/O) Operation`. A button click is an input and a notification popup is an output.

So yes, Javascript can only execute one task at a time unlike other languages such as Java and Python which have multiple threads.

<i>QQ: Why do you think Javascript was created to be single-threaded?</i>

Since JS can only execute one task at a time, the other tasks have to wait. Have you ever wondered why everything in your browser stops unless you click an alert or a popup? This means that Javascript is `blocking`.

Now this is a problem right? I want my computer to do other things in case one I/O call takes too long. For example, what if my video rendering takes too long? Does that mean that the rest of my webpage won't load too? But it does right?

JS can also be non-blocking and behave as if it were multi-threaded. It means that it doesn't wait for the response of an API call, I/O events, etc., and can continue the code execution.

This is done via a `call stack/ event queue`, `event loop` and a `callback queue`. 

Think of a restaurant! A very small one. It only has one cook, one server and 4 tables. Let's talk about a few important details:

- When someone is deciding what to order, the server doesn't stand on their head and look at them weirdly unless asked to.
- When someone places an order with the server, they pass it onto the chef who then works on that order.
- While the food is being cooked, the waiter talks to other guests and takes their orders too.
- Whenever someone's food is ready, the cook informs the waiter, who then comes back to pick and then serve the food. This doesn't necessarily happen in order in which the orders were placed.

Now think about how you can relate this to the concepts in the blog. Still need help? Look at this [video](https://www.youtube.com/watch?v=EI7sN1dDwcY).

Now let's test your skills! What do you think will be the output?

```
console.log("1");

setTimeout(()=> {
    console.log("2");
}, 5000);

setTimeout(()=>{
    console.log("3");
}, 0);

console.log("4");

```

## Running Javascript

<i>Remember: Console is your best friend! </i>

There are multiple ways to run a Javascript code.

1. Remember the optional Node.js installation? You can use Node.js to run a JS code locally.
   Just create a `<fileName>.js` file and run the command `node <fileName.js>` in that path's terminal. You can use the embedded terminal in VS Code for this!

2. Running it via your Browser's developer console.
   Go to the developer console in your browser and go to `Console`. You should be able to type and run JS code there.

3. Running it via an HTML page. You can embed Javascript code into your HTML.

For the first phase of this course, you will probably be using most of the JS embedded into your webpage. However, as we move towards `React.js` you will need to have `Node.js` installed and the ability to run a JS code locally. That is always the best method.

## Embedding Javscript into your HTML

Just like `CSS`, we can embed a JS file either directly in your HTML or create a seperate file.

<i>QQ: What do you think is the best method? Inline JS or an external file?</i>

```
<!DOCTYPE html>
<html>
  <head>
    <script>
      console.log("Inline comment");
    </script>
    <script src="lab4.js"></script>
  </head>
  <body>
    This is my webpage!
    <script>
      console.log("End comment");
    </script>
  </body>
</html>
```

```
console.log("Embedded Comment")
```

<i>QQ: What do you think will be the output of the above file? What will get executed first?</i>

## Variables and data types in JS

After ES6, we use `let` and `const` to declare variable. The followed practice is that each variable is declared as `const` unless its value is bound to change. We will talk in depth about these two later.

As mentioned above, JS is loosely typed and the intepreter by itself detects the data type of the variable. 

```
let x = 5 // x is an integer
let y = "five" // five is a string
```
For people who have no prior coding experience, I would highly recommend that you watch this [video](https://www.youtube.com/watch?v=W6NZfCO5SIk). We will talking more in depth about Javascript in the next class and I will cover the basic and advanced concepts for Javascript.

## HTML manipulation using Javascript

We have already talked about manipulating and reading the HTML DOM using Javascript.

- You can use `getElementById(<id>)` to read an HTML element using its id.
- You can also use `getElementByName(<name>)` to read an HTML element using its name. Will be useful when working with forms.
- You can use `window.alert()` to create an alert!
- You can use `innerHTML` to read the value of an HTML element and to also assign a new value to an HTML element. (`<tagname>Value</tagname>`)

HTML
```
<!DOCTYPE html>
<html>
  <head>
    <script src="lab4.js"></script>
  </head>
  <body>
    <p id="demo">This is my para</p>
  </body>
</html>

```
JS
```
window.onload = () => {
  const paraValue = document.getElementById("demo");
  console.log({
    element: paraValue,
    value: paraValue.innerHTML,
  });
  setTimeout(() => {
    paraValue.innerHTML = "Updated Para";
    window.alert("Yay! I updated the paragraph!");
  }, 10000);
};

```
<i>QQ: Why do we need window.onload()? What can I do to avoid using it?</i>

In the above snippet, we assign an `id` to the `p` tag and then use the `getElementById` to reference that tag.

Now using `innerHTML`, we change that value. But we do that only after 10 seconds (that is what the `setTimeout` does. It sends the compiler to sleep for the specified time) and we use an `alert` to showcase something to the user and again stop processing.

Now let's look at how we can use JS to manipulate forms and add button handlers.

```
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div>
        <form name="contactForm" id="contactForm">
            <input type="text" name="contact"> Enter your contact: </input>
            <input type="submit" value="Call me please">
        </form>
    </div>

    <div>
        <p>Counter: <span id="number"></span></p>
        <button id="counter">+1</button>
    </div>
    <script src="lab4.js"></script>
  </body>
</html>
```

```
let counter = 0;

document.getElementById("number").innerHTML = counter.toString();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  const contactNumber = document.contactForm.contact.value;
  window.alert(`Is this the right contact: ${contactNumber}?`);
  event.preventDefault();
});

document.getElementById("counter").onclick = () => {
  counter += 1;
  document.getElementById("number").innerHTML = counter.toString();
};
```

In the above example, we have two interactions. One is a form that takes in a contact number. When you click on the form button - `Call me please` it triggers an alert asking you to confirm the number.

The other action is the `Counter`. It starts from 0 and is added by 1 everytime you press the `+1` button.