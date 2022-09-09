# INFO 153A/253A - Front-End Web Architecture - Lab 2

September 9th, 2022

## What is CSS?

CSS stands for `Cascading Style Sheets` and allows us to describe how HTML elements and properties are rendered on the browser.
It helps you define the layout of a page or a project as well as individual components?

## Why use CSS?

<b>HTML was NEVER intended to contain tags for formatting a web page!</b>

Adding styles within an HTML files makes our code difficult to read, extremely large and complex!

## How do we use CSS?

### Internal CSS

```
<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
  color: red;
  margin-left: 10px;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

### External CSS

We can add properties to each HTML element within the HTML file, then why do we need CSS seperately? Remember [CSS Zen Garden](http://www.csszengarden.com/)?

Using an external `.css` file gives us enhanced control over the way a webpage looks and makes changes and modifications easier and less painful.

We reference the css file for a website/project/page/component within the `<head>` tag of an HTML page.

```
<head>
<link rel="stylesheet" href="styles.css">
</head>
```

### Cascading Order

What style will be used when there is more than one style specified for an HTML element?

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

## Basic CSS Properties

### Background

### Text - Color, Font, Weight

### Alignment

Refer [styles.css](styles.css)
