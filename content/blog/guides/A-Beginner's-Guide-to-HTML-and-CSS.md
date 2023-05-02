---
layout: Post
title: A Beginner's Guide to HTML and CSS
description: HTML and CSS are essential languages in web development. HTML structures content on the web, while CSS styles and formats that content. They are the basis of almost every website.
date: '2023-05-01'
tags:
  - guides
images:
  - src: /photos/blog-html.jpeg
    alt: image alt attribute
featured: true
---

## Introduction

HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are the foundation of every website on the internet. HTML is responsible for the structure and content of a webpage, while CSS is used to style and format that content. In this beginner's guide, we will cover the basics of HTML and CSS and how they work together to create beautiful and functional websites.

### HTML

HTML is a markup language used to create the structure and content of a webpage. It uses a series of tags to define elements on a webpage. Each tag has a specific purpose and can be used to define headings, paragraphs, images, links, and more.

The basic structure of an HTML document includes the `<!DOCTYPE html>` declaration, the `<html>` element, the `<head>` element, and the `<body>` element. The `<!DOCTYPE html>` declaration tells the browser which version of HTML to use, and the `<html>`, `<head>`, and `<body>` elements define the structure of the webpage.

HTML elements are nested inside one another, and each element has an opening tag, content, and a closing tag. For example, the `<h1>` element is used to define a heading on a webpage, and it has an opening tag (`<h1>`) and a closing tag (`</h1>`).

Here is an example of HTML code that creates a simple webpage with a heading and a paragraph:
```html  
  <!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
  </head>
  <body>
    <h1>Welcome to my webpage!</h1>
    <p>This is some sample text.</p>
  </body>
</html>
  ```
### CSS

CSS is used to style and format the content defined by HTML. It is a stylesheet language that can be used to set colors, fonts, spacing, and more. CSS can be used to style individual elements, groups of elements, or the entire webpage.

CSS is written in a separate file or within the HTML document itself using the `<style>` tag. CSS rules are made up of a selector and a declaration block. The selector defines which elements the rule applies to, and the declaration block contains one or more declarations that define the styling.

For example, the following CSS rule sets the font color of all headings on a webpage to blue:
```css  
h1{
  color: blue
}
  ```

Here is another example of a CSS rule that sets the background color of a webpage to gray:

```css  
body {
  background-color: gray;
}
  ```  

### HTML and CSS Together

HTML and CSS work together to create a beautiful and functional webpage. HTML defines the structure and content of the webpage, and CSS styles and formats that content. By separating the content from the presentation, changes can be made to the design of the webpage without affecting the content.

To link an HTML document to a CSS stylesheet, the `<link>` element is used in the `<head>` of the HTML document. The `<link>` element has several attributes, including the href attribute, which specifies the location of the CSS stylesheet.

Here is an example of HTML code that links to an external CSS stylesheet:

```html  {5} showLineNumbers
  <!DOCTYPE html>
<html>
  <head>
    <title>My Webpage</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <h1>Welcome to my webpage!</h1>
    <p>This is some sample text.</p>
  </body>
</html>
  ```

---

### Code-Block

The Markdown syntax allows you to create code blocks by indenting lines by four spaces or one tab. If you find that inconvenient, try using fenced code blocks. To do that, you’ll use three backticks (```) on the lines before and after the code block. The best part? You don’t have to indent any lines!

  ```js  {4-7} showLineNumbers
  import contact from './contact.js';

  // below 3 lines are highlighted
  const person = {
    name: 'Sara',
    age: 25,
  }

  let name = person.name;
  let age = person.age;

  // returns a promise
  let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected');
  });
  ```

Code blocks can also be used inside the `<Wide />` component.

<Wide>

  ```js  {4-7} showLineNumbers
  import contact from './contact.js';

  // below 3 lines are highlighted
  const person = {
    name: 'Sara',
    age: 25,
  }

  let name = person.name;
  let age = person.age;

  // returns a promise
  let countValue = new Promise(function (resolve, reject) {
    reject('Promise rejected');
  });
  ```

</Wide>

---

### Tip Jar

In order to receive tips (contributions) from your readers, we've developed a fully-functional `<TipJar />` React Component integrated with [ConvertKit](https://convertkit.com?lmref=CeGsMw&utm_campaign=documentation) that you can use anywhere in your blog posts or pages.

```md
<TipJar />
```
This will render the TipJar component:

<TipJar />

---

### Newsletter

The theme is integrated with [ConvertKit](https://convertkit.com?lmref=CeGsMw&utm_campaign=documentation) to grow your email list of subscribers. By creating an email list, you can notify your subscribers when you publish new blog posts or market and sell your digital products to your subscribers. The newsletter component is

```md
<Newsletter className="bg-omega-800 p-10" />
```
This will render the Newsletter component:

<Newsletter className="bg-omega-800 p-10" />
---

### Images

To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path or URL to the image asset in parentheses. You can optionally add a title in quotation marks after the path or URL.

```md
![This is the caption](/photos/blog-performance.jpg "Team meeting")
```
This image is wrapper inside the `<Wide />` component.

<Wide>
  ![This is the caption](/photos/blog-performance.jpg "Team meeting")
</Wide>

### Linked Images

To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```md
[![This is the caption](/photos/blog-performance.jpg "Team meeting")](https://en.wikipedia.org/wiki/Meeting)
```

---

### Youtube Videos

You can embed youtube videos using the `<Youtube />` component and passing the Youtube video ID to it.

```md
<Youtube
  id="W4UhNo3HAMw"
  title="Next.js 13.1 Explained"
/>
```
This will render below embed:

<Wide>
  <Youtube
    id="W4UhNo3HAMw"
    title="Next.js 13.1 Explained"
  />
</Wide>

---

### Tables

To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column. For compatibility, you should also add a pipe on either end of the row.

Tables can look like this:

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |
| Table data   | Text        |

You can align text in the columns to the left, right, or center by adding a colon (:) to the left, right, or on both side of the hyphens within the header row.

|Header 1 |Header 2  | Header 3|
|:--- | ---: | :---:|
|Align left| Align right|center text|
|cell data1|cell data2|cell data3|

---

### Lists

You can organize items into ordered and unordered lists.

##### Ordered Lists

To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to be in numerical order, but the list should start with the number one.

1. First item
2. Second item
3. Third item
4. Fourth item

To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items. Indent one or more items to create a nested list.

##### Unordered Lists

- First item
- Second item
- Third item
- Fourth item

##### Nested Lists

Now a nested list:

 1. First, get these ingredients:

      * carrots
      * celery
      * lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
    this algorithm:

        find wooden spoon
        uncover pot
        stir
        cover pot
        balance wooden spoon precariously on pot handle
        wait 10 minutes
        goto first step (or shut off burner when done)

    Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

---

### Links

To create a link, enclose the link text in brackets (e.g., `[Duck Duck Go]`) and then follow it immediately with the URL in parentheses (e.g., `(https://duckduckgo.com)`).

Here's a link to [a website](http://foo.bar), to a [local
page](services), and to a [code block section in the current
doc](#code-block).

---

### Blockquotes

To create a blockquote, add a > in front of a paragraph. The rendered output looks like this:

> Block quotes are
> written like so.

Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

> ###### Blockquotes with Other Elements
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.

---

### HTML

You can use HTML tags in Markdown-formatted text. This is helpful if you prefer certain HTML tags to Markdown syntax. For example, some people find it easier to use HTML tags for images. Using HTML is also helpful when you need to change the attributes of an element, like specifying the color of text or changing the width of an image.

To use HTML, place the tags in the text of your Markdown-formatted file.

```md
This **word** is bold. This <em>word</em> is italic.
```

The rendered output looks like this:

This **word** is bold. This <em>word</em> is italic.

---

### Task Lists

Task lists (also referred to as checklists and todo lists) allow you to create a list of items with checkboxes. In Markdown applications that support task lists, checkboxes will be displayed next to the content. To create a task list, add dashes (-) and brackets with a space ([ ]) in front of task list items. To select a checkbox, add an x in between the brackets ([x]).

```md
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```

The rendered output looks like this:

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media