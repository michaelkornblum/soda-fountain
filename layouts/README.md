#Welcome to the Layouts Directory

Layouts are templates that are extended with your sites content. This is accomplished through the use of a jade block extend. For example the code below takes the content from an HTML, Jade or Markdown file from your ```src``` directory and wraps it in a template located in the ```templates``` directory named ```default.jade```.

```
extends ./templates/default.jade

block content
  main!=contents  
```
