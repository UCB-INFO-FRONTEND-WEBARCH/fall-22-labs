# INFO 153A/253A - Front-End Web Architecture - Lab 3

September 16th, 2022

## Quick Recap

In the past few weeks, we have covered some basic HTML and CSS.

### HTML

Below is the structure of an HTML document:

```
<!DOCTYPE html>
<html>
<head>
<title>Front-End Web Architecture</title>
</head>
<body>

<h1>Hello world</h1>
<p>This is our first webpage.</p>

</body>
</html>
```

HTML uses tags in the following format: `<tagname> Content goes here... </tagname>`.
Each tag has a starting tag and an ending tag where the ending tag uses `/` before the tagname.
Each tag takes in a value and certain attributes which allow us to define how that element might function, look or interact etc.

</br>
### CSS
While the HTML helps us define what a page might have and how it will function, CSS allows us to define how the page will look.

```
selector {
    property-name-1: value,
    property-name-2: value
}
```

Each selector defines the look and feel of an HTML tag. Each CSS selector can have multiple properties.
For example:

```
<head>
    <style>
        body {
            color: white,
            background: black
        }
    </style>
<head>
<body>
    This is my body!
</body>
```

In the example above, `body` is the tag and also the selector in the CSS part of the code. `color` represents the text color for whatever is a child within the body (Child? Remember DOM?). Similarly, `background` is the background for the body, in this case it is a black color fill!

<hr>

</br>

## Going crazy with CSS

Till now, we have only looked at very basic CSS properties and have only learnt on how to use CSS for one specific tag name. For example, a CSS property defined for the `<p>` tag will apply to all paragraphs on our web page.

However, that is not always the intended behavior. For example, I might want to highlight only one paragraph as bold and red to highlight something urgent or important while I want all other paragraphs to be normal!

</br>

<h3 style="color:green">Assigning classes to tags</h3>

CSS allows us to assign a specific name or a unique identifier to each tag that allows us to modify the properties only for that particular tag and not others.

```
<p class="change-me">
This is a unique para
</p>

<p>
I remain unchanged
</p>

<p>
I remain unchanged as well
</p>
```

In the above code snippet, we used the `class` attribute to assign a class name to one `<p>` tag.

Now in our CSS, we can assign properties under this class and they should only reflect to the paragraph with that class name.

```
.change-me {
    color: red
}

body {
    color: blue;
}

p {
    color: green
}
```

So now the paragraph with assigned class should have its content in red while the other two paragrapohs should still be in green.

</br>

<h3 style="color:green">Let's talk about spacing</h3>

Spacing is one of the most prominent properties that define how a webpage looks.

Think about the photo grid on someone's Instagram profile.

The experience of stalking your ex changes considerably when you view it on a larger screen vs when you see it on the mobile app (wink).

There are multiple CSS properties that allow us to add spacing in a webpage or to an element. To understand them, let's talk about the box model.

<img src="./box-model.png" alt="Box Model"/>

</br>

#### Margins and Padding

- Margins: Used to create space around elements aka outside of a defined border.
- Padding: Used to create space around an element's content, inside of any defined borders

Both of them have take in values for top, right, bottom and left - in that order.

```
p {
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    margin-left: 5px;
    padding-top: 10px;
    padding-right: 5px;
    padding-bottom: 10px;
    padding-left: 5px;
}

.change-me {
    margin: 20px 10px 20px 10px;
    padding: 20px 10px;
}
```

In the first instance, we specify the margins/padding using each value seperately. In the second instance, we use something called `shorthand` to define all four values in one line. We then used just two values, where the first one defines the top and bottom and the second value defines right and left.

<i>QQ: What happens if we use only a single value? - `{padding: 20px}`</i>

The values for both can be a length (px, em, pt etc) or % (100%, 50% etc) or inhert where the value is inherited from the parent element.

`Margin` can also take `auto` where the browser calculates the margin based on screen size etc.

</br>

#### Height and Width

Similarly we can also set the height and width for the content. Remember the `<img>` tag? These tags can take the following values:

- auto - This is default. The browser calculates the height and width
- length - Defines the height/width in px, cm, etc.
- % - Defines the height/width in percent of the containing block
- initial - Sets the height/width to its default value
- inherit - The height/width will be inherited from its parent value

<h3 style="color:green">Borders are fun too!</h3>
CSS allows you to specify the style, width and the color of an element's border and also, the radius in case you want to round them etc.

```
div {
    border-style: dashed;
    border-color: blueviolet;
    border-width: 10px;
    border-radius: 0px 10px;
}
```

We can also use a shorthand for borders: `border: 5px solid red;` or specify the value for one particular border: `border-left: 5px solid red;`

<h3 style="color:green">Who doesn't love icons?</h3>
We can use the `link` tag within our document's head.

Let's import Google's Material Icons using the following link: `https://fonts.googleapis.com/icon?family=Material+Icons"`.

We can then use an `<i>` or the `<span>` tag to use those icons.

```
<i class="material-icons">cloud</i>
<i class="material-icons">favorite</i>
<i class="material-icons">attachment</i>
<i class="material-icons">computer</i>
<i class="material-icons">traffic</i>
```

<h3 style="color:green">Let there be order (and position)!</h3>
Each element in a page is aligned and positioned. If nothing is specified, the HTML document assigns them a default positioning and order.

Let's talk about them a bit more.

</br>

#### Position

The `position` property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).

Elements are positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first.

- Static: HTML elements are positioned static by default. Static positioned elements are not affected by the top, bottom, left, and right properties and are always positioned according to the normal flow of the page.

- Relative: An element with `position: relative` is positioned relative to its normal position. Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.

- Fixed: An element with `position: fixed` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.

- An element with `position: absolute` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

```
div.static {
  position: static;
  border: 3px solid #73AD21;
}

div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}

div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}

div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
  border: 3px solid #73AD21;
}
```

</br>

#### Ordering/ Z-Index

When elements are positioned, they can overlap other elements. The `z-index` property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

An element can have a positive or negative stack order. Please note that z-index only works on positioned elements and flex items.

```
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```

The `z-index: -1` shows that the image will be the last item in the stack and will be placed behind everything. 

<hr>

## CSS Grids

CSS provides a offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

A grid layout consists of a `parent` element, with one or more `child` elements.

```
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
  row-gap: 5px;
  column-gap: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
</head>
<body>
<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>
</div>

</body>
</html>
```

An HTML element becomes a grid container when its `display` property is set to `grid` or `inline-grid`.

In the snippet above, the class `grid-container` defines a `display: grid` making the overall div as a parent and everything under it as its children.

Grid follows a `row` and a `column` system and a row and a column can have `gaps`. These can be defined using `column-gap` and `row-gap`.

We just created a 3x3 matrix using the code above where each row and column have 3 children. Think of this as a layout. We can define how much columns and rows a child takes.

Let's add a 10th child.

```
<div class="grid-item-new">10</div>
```

and define its CSS

```
.grid-item-new {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
}
```

We can also use the `grid-template-columns` property to define the number of columns in our grid layout, and it can define the width of each column. The value is a space-separated-list, where each value defines the width of the respective column.

```
.grid-container-2 {
  display: grid;
  grid-template-columns: 10px 10px 10px 20px;
}
```

Similarly, we also have the `grid-template-rows`.