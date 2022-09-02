# INFO 153A/253A - Front-End Web Architecture - Lab 1

September 2nd, 2022

## What is HTML?

HTML stands for "Hyper Text Markup Language" and is the standard markup language for creating Web pages. It defines the structure of the webpage, using different elements which help the browser render the webpage into the way you actually see it.

Let's take a look at this [code](https://gist.github.com/rishabhmthakur2/10a51efe83528ef3214c4cb293f17ce4) for example! Can you guess what this is?

<b>Hint:</b>
</br>
This is something that you almost see everyday!

## How does HTML work?

As mentioned above, HTML uses something called <i>Elements</i> where each element has a different use and is treated differently by the browser.

Whenever you see a webpage, you stumble across many elements: Headings, Paragraphs, Images, Videos, Lists, Forms so on and so forth.

So a browser internally knows how a `Heading` is supposed to be used vs how an `Image` is supposed to be displayed. Each of these elements also have inherent properties and functions. For example, you can hover over an image to save it, or you might have a caption. But we don't have these properties for say, a heading or a paragraph.

</br>

### An HTML element

An HTML element is defined by a start tag, some content, and an end tag:

```
<tagname> Content goes here... </tagname>
```

Each tag can also take in some unique properties (and CSS), but more on that later ...

</br>

### Structure of an HTML Document

Like most official documents that you see in real-world, an HTML document also follows a strict structure.

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

</br>

<ul>
<li>The <u>!DOCTYPE html</u> declaration defines that this document is an HTML5 document. It must only appear once, at the top of the page (before any HTML tags) and is not case-sensitive.
<li>The <u>html</u> element is the root element of an HTML page.
<li>The <u>head</u> element contains meta information about the HTML page.
<li>The <u>title</u> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab).
<li>The <u>body</u> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc. <i>This is what you see in a page</i>.
<li>The <u>h1</u> element defines a large heading.
<li>The <u>p</u> element defines a paragraph.
</ul>

</br>

#### But why do we need a fixed structure?

- This structure helps the browser detect that it is an HTML document.
- Segregate parts of the document and deal with them accordingly - header, footer, metadata, body
- Help the browser understand extended items to fetch or linked Javascript and CSS files.

## HTML Attributes

- HTML attributes provide additional information about HTML elements.
- They are always specified in the start tag of an element.
- Usage: name/value pairs like name="value"
- Example: `<a href="www.google.com>Take me to google</a>`

## Some basic HTML tags and attributes

</br>

### 1. Headings

HTML Headings span from `h1` to `h6` where `h1` is the biggest and have the most font-weight and that reduces as we go down.

```
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

</br>

### 2. Pararaphs

The HTML `<p>` element defines a paragraph.

A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.

```
<p>I am the first paragraph</p>
<p>I am the second paragrapg</p>
```

</br>

### 3. Links

The HTML `<a>` tag defines a hyperlink. On mouse hover, your mouse cursor should automatically change to highlight the presence of a link.

```
<a href="www.google.com>Take me to google</a>
```

</br>

### 4. Images

The HTML `<img>` tag is used to embed an image in a web page.
The `<img>` tag is empty, it contains attributes only, and does not have a closing tag.
Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.

The `<img>` tag has two required attributes:

- src - The <i>required</i> src attribute specifies the path (URL) to the image
- alt - The <i>required</i> alt attribute provides an alternate text for an image, if the user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

```
<img src="https://media-exp1.licdn.com/dms/image/C5603AQGEj6jOQq2fqw/profile-displayphoto-shrink_400_400/0/1632361746187?e=1667433600&v=beta&t=B1YrZaLghIKvQJRtaPvSwQlWlIq0deN1lUci7-ndC5A" alt="That's me">

```

## Commenting HTML code

```
<!-- Write your comments here -->


<!--
<p>Multiline comment:</p>
<a href="www.google.com>Take me to google</a>
-->
```
