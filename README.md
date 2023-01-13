# HTML MODULARIZED

This is a template intended for simple pages that will modularize your HTML code, avoiding unecessary boilerplate code in different pages.
This was created using [PostHTML](https://github.com/posthtml/posthtml) and [PostHTML-Modules](https://github.com/posthtml/posthtml-modules). Go show them some love!

# Getting started

## Dependencies

```
Node v18.12.1
```

## Installing

Once you used this repository as a template, go to your root folder and install dependencies:

```
npm install
```

# Usage

## File structure

All of your HTML should be written in the `./html` folder. There are 4 basic folders and HTML files in the root.

`/_layout/`: this will contain a basic layout for your page that can be used in your pages so you don't have to write multiple footers, headers, navbars, heads and scripts with the same content in differente pages. 
- Your `layout.html` is going to use the other files as modules and will contain your content too. Feel free for adding/deleting stuff.
`/components/`: should contain parts of code that you're going to reuse
`/content/`: the content of each page should be here
`/scripts`: you can have bottom scripts for each page here
`*.html in the root`: these are going to be your pages.
- a basic page in the root looks like this:
```
<module href="/_layout/layout.html">
  <module href="/content/home.html"></module>
  <module href="/scripts/home.html"></module>
</module>
```
- First you import your `layout.html` so your page will have the basic layout you defined in that folder.
- We then have our `content` module with the HTML content of our page
- You can add your page specific `script` here

## CSS, JS, Images

All of your other file types should be in the `/public/` directory. Since we're going to build our HTML there, that should be considered as our root page for our imports.

## Configuration

You can change/add some configuration in the `posthtml.json` file. For example, if you want to build your pages from a pages folder, change `"input": "html/*.html"` to `"input": "html/pages/*.html"`. 

## Build

To see how your page will look like, go to `/public/` and open your `index.html` file.
After changing your HTML files, you can run the following command to build your page:

`npm run build:html` 

Then you reload your browser to see your page.

This uses [onchange](https://www.npmjs.com/package/onchange) for auto rebuilding files so you can run instead:

`npm run watch:html`

And after a few seconds you can reload your page to see the changes.

A shout-out to [this blogpost](https://blog.mailpace.com/blog/using-html-modules/) for introducing me with it.



