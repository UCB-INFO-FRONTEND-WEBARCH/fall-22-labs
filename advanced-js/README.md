# Basic and Advanced Javascript
## INFO 153A/253A - September 26, 2022

<b><u>Note:</b></u> If you don't have any background or understanding of Javscript, please checkout the contents of [lab 4](../lab-4/README.md) first.

## Printing in Javascript
You can either use `console.log` or `alert`/`window.alert` to print or display in Javascript. As the name suggests, `console.log` publishes things onto the console while `alerts` create a popup. For most of the debugging and testing, `console.log` might be the more suitable and non-intrusive method.

<hr>

## Variables

A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

As discussed earlier, we use the `let` or `const` keyword to declare a variable.

Since Javascript is loosely types, it will automatically determine the data type of the variable. Talking about data types ...

<hr>

## Data Types

A value in JavaScript is always of a certain type. For example, a string or a number. Javscript has 8 basic data types.

### 1. Number

Represents both integer and floating point numbers.

### 2. BigInt

Number (integer specifically) covers numbers between (2^53 - 1) to -(2^53 - 1). `BigInt` type was recently added to the language to represent integers of arbitrary length and hence is used for numbers that go beyong this range.

### 3. String

A collection of characters. Has to be surrounded with quotes - can be single, double or backticks (remember strting literals?)

### 4. Boolean

The boolean type has only two values: `true` and `false` and is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

### 5. Null

The special null value does not belong to any of the types described above.

In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

It’s just a special value which represents “nothing”, “empty” or “value unknown”.

```
let age = null;
```

In the above example, the value of `age` is `null`.

### 6. Undefined

The special value `undefined` also stands apart. It makes a type of its own, just like `null`.

The meaning of undefined is `value is not assigned`. If a variable is declared, but not assigned, then its value is undefined.

```
let age;
```

The value of `age` above will be undefined.

### 7. Symbols

A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms".

We will not be diving deeper into symbols during this course. 

Every data type that we have discussed so far is called “primitive” because their values can contain only a single thing (be it a string or a number or whatever).

### 8. Objects

Objects are used to store collections of data and more complex (real-world) entities.

We will talk about objects more later today.


You can use the `typeof` operator to determine the data type of a variable.

```
const firstName = "Rishabh;
console.log(typeof firstName);
```
### Type Conversions

Since JS is loosely-typed, most of the time, operators and functions automatically convert the values given to them to the right type.

But there are types when we might want to convert out variables from one data type to another for various reasons.

1. Convert to string: `String(variableName)`| `variableName.toString()`
2. Convert to number: `Number(variableName` | `parseInt(variableName)`| `parseFloat(variableName)`
3. Convert to boolean: `Boolean(variableName)`

<hr>

## Operators

### Assignment
`=` is the assignment operator. `let x = 1`. Here we assign 1 to x. You can also think of this as `x <- 1`.

### Mathematical

`+`, `-`, `*`, `/` perform the basic four mathematical operations. We also have the `%` `modulo` operator which gives the remainder and the `**` which is the `exponent` operator.

Note: `+` is also used as string concatenation operator aka to join two strings together. `console.log("Hello," + "world!")`.

### Comparison

`=` is also used for comparision. `x == y` checks if the value of x is equal to y. If yes, this statement returns `true`, else `false`. We also have the `===` operator which does the same thing as above but also checks for data types.

```
let x = "1";
console.log(x == 1); // Prints true
console.log(x === 1); // Prints false
```

We also have the `>` and `<` as the greater than and less than operators respectively. When coupled with the assignment operator, `>=`/`<=`, we get the `greater than equal to` or `less than equal to` operators.

All of the result in a Boolean output of either a true or false.

<hr>

## Conditionals

### If, else and ternary operator

Sometimes, we need to perform different actions based on different conditions.

To do that, we can use the `if` statement.

The `if(...)` statement evaluates a condition in parentheses and, if the result is true, executes a block of code.
If that condition is not true, we can use an optional `else` to do something else.

```
if (something is true) {
    do this;
}
else {
    do something else;
}
```

We can also combine multiple conditions or if conditions using `else if`.

```
if (marks > 90) {
    console.log("A");
}
else if (marks > 80) {
    console.log("B");
}
else if (marks > 70) {
    console.log("C");
}
else {
    console.log("Study harder!");
}
```

### Conditional operator - `?`

The conditional operator `?`, also called a `question mark` operator is useful in situations where you assign a variable depending on a condition.

`marks > 90 ? console.log("A) : console.log("Try Again");`

We can also use a single `?` to replace an if.
`(school == "Berkeley") ? "Go Bears";`

We also use the `?` operators for accessing nested operators. More on this later today.

<hr>

## Loops

We often need to repeat actions.

For example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

`Loops` are a way to repeat the same code multiple times.

The following the are the basic loops that we can use in Javascript:

### While

```
while (condition) {
  // code
  // so-called "loop body"
}
```
The loop executes till the time (or `while`) the condition is true. So if your condition never becomes false, your loop will run infinitely and can break things.

```
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
```

A single execution of the loop body is called an `iteration`. The loop in the example above makes three iterations.

The `i++` statement is essential as if it were to be absent, we would have an infinte loop.

### Do While

This is very similar to the while loop.

```
do {
  // loop body
} while (condition);
```

The only distinction is that here we first execute the body of the loop atleast once before checking for the validity of the condition.

### For loop

The for loop is more complex, but it’s also the most commonly used loop.

It combines the different parts of the while loop into a single statement: `begin`, `condition`, `step`

```
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
```

In the above while loop, the `i=0` is the beginning, `i++` is the step and `i<3` is the condition.

```
for (begin; condition; step) {
  // ... loop body ...
}
```

```
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}
```

### Breaking the loop

Normally, a loop exits when its condition becomes falsy.

But we can force the exit at any time using the special `break` directive.

### Continue to the next iteration

The `continue` directive is a `lighter version` of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).

<hr>

## Functions

Quite often we need to perform a similar action in many places of the script.

For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

We’ve already seen examples of built-in functions, like `alert(message)`. But we can create functions of our own as well.

```
function name(parameter1, parameter2, ... parameterN) {
 // body
}
```

For modern JS, we can ignore the `function` keyword and use `arrow` functions.

```
const name = (parameter1, parameter2, ... parameterN) => {
    // body
}
```

### Local variables

A variable declared inside a function is only visible inside that function.

```
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function
```

### Outer variables

A function can access an outer variable as well. The function has full access to the outer variable. It can modify it as well.

```
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function
```

### Parameters and Arguments

We can pass arbitrary data to functions using `parameters`. If you remember our calculator app, the `num1` and `num2` and `add` were all parameters to the function.

```
function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)
```

When a value is passed as a function parameter, it’s also called an `argumen`t`.

In other words, to put these terms straight:

- A `parameter` is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
- An `argument` is the value that is passed to the function when it is called (it’s a call time term).

### Default Values

Parameters can also be assigned `default` values which are used when no value is passed to the variable(s). However, if an argument is passed, that value is used instead of the default value.

```
function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given
```

Note: A variable can only have a default value if all the variables to its right have a default value.

### Returning results

A function can return a value back into the calling code as the result.

The result from your calculator's API call into your frontend was nothing but that function's return value.

We can return values using the `return` keyword.

```
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
return result;
```

### Deep dive into arrow functions

Arrow functions allow us to write shorter function syntax:

```
let func = (arg1, arg2, ..., argN) => expression;
```

We can have a single line arrow function if there is only one line in the body.

```
let sum = (num1, num2) => return num1 + num2;
```

If we have no parameters, we can use:

```
let test = () => return "Test Statement";
```

The handling of `this` is also different in arrow functions compared to regular functions. In short, with arrow functions there are no binding of `this`. However, we will not be covering that for now.

The usage of arrow functions also helps make the code for `callbacks` etc much more readable. More on this later.

<hr>

## Objects

Objects are used to store keyed collections of various data and more complex entities. In JavaScript, objects penetrate almost every aspect of the language. 

An object can be created with figure brackets `{…}` with an optional list of properties. A property is a `“key: value”` pair, where `key` is a string (also called a “property name”), and `value` can be anything.

```
// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};
```

Property values are accessible using the `dot` notation:
```
// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30
```

To remove a property, we can use the delete operator:
```
delete user.age;
```

We can also directly access a property's value using its key and the `[]` brackets.

```
console.log(users[name])
```

A lot of the data that you will see in the real-world is `JSON` based and follows this `key-value` pair structure.

Remember the response from the calculator API? It was `{ answer: 30 }`. This is nothing but a JSON object where the `key` is `answer` and the `value` is `30`.

<hr>

## Callbacks, Promises and Async/Await

We talked about the `asynchronous` nature of Javascript on Friday and also what `callbacks` are. Callbacks are basically code blocks that tell the interpreter what to do when a background task is finished executing and the interpreter has got to go back and handle it.

```
setTimeout(()=> {
    console.log("Test");
}, 1000);
```
In the above example, the `setTimeout` function will make the interpeter sleep for `1000` ms. Then what is the all the jiggly coede between it?

That is nothing but the `callback`. That code will be executed when the timer has completed.

We can handle this code in three different ways:

### Callbacks

The above example was a `callback` function.

In JavaScript, functions are objects. So we can pass objects to functions as parameters. We can also pass functions as parameters to other functions and call them inside the outer functions. 

So `callback` is a function that is passed to another function. When the first function is done, it will run the second function.

The problem with callbacks is it creates something called `Callback Hell.` Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code. So in this situation `Promises` came to handle the nested callback in a better way.

### Promises

A `promise` in JavaScript is similar to a promise in real life. When we make a promise in real life, it is a guarantee that we are going to do something in the future. Because promises can only be made for the future.

A promise has two possible outcomes: it will either be kept when the time comes, or it won’t.

This is also the same for promises in JavaScript. When we define a promise in JavaScript, it will be resolved when the time comes, or it will get rejected. It sounds like the IF condition. But there are huge differences between them.

A promise is used to handle the asynchronous result of an operation. JavaScript is designed to not wait for an asynchronous block of code to completely execute before other synchronous parts of the code can run. With Promises, we can defer the execution of a code block until an async request is completed. This way, other operations can keep running without interruption.

#### <u> States of a Promise </u>

First of all, a Promise is an object. There are 3 states of the Promise object:

- Pending: Initial State, before the Promise succeeds or fails.
- Resolved: Completed Promise
- Rejected: Failed Promise, throw an error

For example, when we request data from the server by using a Promise, it will be in pending mode until we receive our data.

If we achieve to get the information from the server, the Promise will be resolved successfully. But if we don’t get the information, then the Promise will be in the rejected state.

#### <u> Creating a Promise</u>

Firstly, we use a constructor to create a Promise object. The promise has two parameters, one for success (resolve) and one for fail (reject):

```
const myPromise = new Promise((resolve, reject) => {  
    // condition
});
```

```
const myFirstPromise = new Promise((resolve, reject) => { 
    const condition = true;   
    if(condition) {
         setTimeout(function(){
             resolve("Promise is resolved!"); // fulfilled
        }, 300);
    } else {    
        reject('Promise is rejected!');  
    }
});
```
In the above Promise If Condition is true, resolve the promise returning the `Promise is resolved `, else return an error `Promise is rejected`. Now we have created our first Promise, Now let's use it.


#### <u> Using a Promise</u>

To use the above create Promise we use `then()` for resolve and catch() for reject.

```
myFirstPromise
.then((successMsg) => {
    console.log(successMsg);
})
.catch((errorMsg) => { 
    console.log(errorMsg);
});
```

We can also `chain` multiple Promises by repeating the `then()` one after the other!

### Async/Await

Await is basically syntactic sugar for Promises. It makes your asynchronous code look more like synchronous/procedural code, which is easier for humans to understand.


```
async function printMyAsync(){
  await printString("one")
  await printString("two")
  await printString("three")
}
```

You can see that we use the `async` keyword for the wrapper function `printMyAsync`. This lets JavaScript know that we are using `async/await` syntax, and is necessary if you want to use `Await`. This means you can’t use `Await` at the global level. It always needs a wrapper function. Or we can say `await` is only used with an `async` function.

