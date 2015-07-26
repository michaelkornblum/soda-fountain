#Welcome to the Partials Directory

This is where the reusable components for templates are stored. A typical partial may look like this:

```
head
  meta(charset="utf-8")
  title=site.title + " | " + title
  meta(name="description" content=description ? description : site.description)
  meta(name="author" content=author? author : site.author)
  meta(name="viewport" content="width=device-width initial-scale=1")
  include stylesheets.jade
```

In a lot of ways the ```head.jade``` partial mirrors the head section of a typical HTML document written in the Jade templating language. Data from this template is pulled from ```src/data/site.json``` or from YAML front matter. Like templates, partials can include other partials for additional modularity.
