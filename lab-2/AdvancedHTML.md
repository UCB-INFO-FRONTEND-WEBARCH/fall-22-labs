# INFO 153A/253A - Front-End Web Architecture - Lab 2

September 9th, 2022

## A brief recap

Up until now we have seen how to set up a basic HTML page and its structure in terms of using the `body` and `html` tags.

We are also now familiar with how to use the most widely used tags such as paragraphs, links, images and headings.

```
<!DOCTYPE html>
<html>
  <body>
    <h1>Main Heading</h1>
    <p>
    Let's learn how to use paragraphs!
    </br> <!-- This is a line break-->
    <a href="www.google.com">This is a link that takes you to google</a>
    </p>
    <!-- Using image from local computer directory -->
    <img
        src="../headshot.png"
        alt="That's me"
    />
  </body>
</html>
```

## Learning advanced HTML tags

### Lists

We have two types of widely used lists in HTML.

1. Unordered lists - think of bullets in Presentations and Documents
2. Ordered lists - Follow an order - 1..2..3

We use the tags `<ul>...</ul>` or `<ol>..</ol>` for unordered and ordered lists respectively. Ordered lists can be described as follows to define what kind of order we need: `<ol type="1|a|A|i|I">`
Items within these lists are represented as `list items` and we use the `<li>...</li>` tag for them.

```
<ol>
  <li>This is the first item! </li>
  <li>This is the second item! </li>
</ol>

<ul>
  <li>This is the first item! </li>
  <li>This is the second item! </li>
</ul>
```

### Iframes

An inline frame is used to embed another document within the current HTML document.

We use the `<iframe>` tag to specify an Iframe.

```
<iframe width="1280" height="640" src="https://www.youtube.com/embed/N8M8OOe3SV4" title="Apple Watch Ultra Impressions: Polished Overkill!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

We use the `height` and `width` attributes to specify the size of the iframe.

### Block-level elements

A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.

A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Two commonly used block elements are: `<p>` and `<div>`.

The `<p>` element defines a paragraph in an HTML document.

The `<div>` element defines a division or a section in an HTML document. The `<div>` element is often used as a container for other HTML elements.

```
<p>This is a paragraph</p>
<div>
  <h3>Div heading</h3>
  <p>This is a para inside a div</p>
</div>
```

### Inline elements

As the name suggests, an inline element does not start on a new line and takes only takes up as much width as necessary.

The `<span>` element defines a span element. The `<span>` element is an inline container used to mark up a part of a text, or a part of a document.

```
<p>My mother has <span style="color:blue;font-weight:bold;">blue</span> eyes and my father has <span style="color:darkolivegreen;font-weight:bold;">dark green</span> eyes.</p>

```

### Forms

An HTML form is used to collect user input. The user input is most often sent to a server for processing. We use the `<form>` element to create an HTML form for user input, where the `<form>` element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.

We use the `<input>` element to define fields that allow for a user input.
We can have the inputs of the following types:

- Text fields: `<input type="text">`
- Label: `<label>` - is useful for screen-reader users (accessibility), because the screen-reader will read out loud the label when the user focus on the input element.
- Radio Buttons: `<input type="radio">`
- Checkboxes: `<input type="checkbox">`
- Submit: `<input type="submit">` - is specified in the form's action attribute.

```
<form>
      <label for="fname">Name:</label><br />
      <input type="text" name="name" /><br />
      <label for="fname">Course?</label><br />
      <input type="radio" id="undergrad" name="undergrad" value="Undergrad" />
      <label for="undergrad">Undergra</label><br />
      <input type="radio" id="grad" name="grad" value="Grad" />
      <label for="grad">Grad</label><br />
    </form>
```
