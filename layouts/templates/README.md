#Welcome to the Templates Directory

Here is where the Jade templates are stored. A typical Jade template looks like this:

```
doctype html
html(lang="en")
  include partials/head.jade
  body
    include partials/svg-symbols.svg
    include partials/header.jade
    block content
    include partials/footer.jade
```

As you can see, templates are really nothing more than a bare bones representation of the document object model. Includes pull in the meat of the template from the ```partials``` directory, so components like a site's header, footer and navigation areas can be used in different templates across your site. 
