---
title: Static Site Generators - a First Look
description: Introducing static site generators
author: Michael Kornblum
category: front end development
date: 2015-10-04
layout: single.jade
leadImage: power_plant.jpg
leadImageAlt: power plant
shortName: static-site-generators-a-first-look
---

I first heard about static site generators about two years ago while listening to an interview with Anna Debenham on the [East Wing Podcast](http://5by5.tv/eastwing/69). During the show, Anna spoke briefly about her work with [Jekyll](https://jekyllrb.com/), a command-line application that used templates and markdown to build complete websites.

Coming from a PHP background, this idea intrigued me. I had already started working with the [Smarty templating engine](http://www.smarty.net/) and enjoyed the fact that I was no longer polluting my server-side code with fragments of HTML. But the idea of compiling my data and templates into a flat file was something I never really considered.

After trying Jekyll for the first time, I was hooked on the idea of static site generators. While I could not see this way of building websites as a replacement for full Content Management Systems, I was blown away by just how much server-side code could be eliminated by just using templates.

### What is a Static Site Generator?
A Static Site Generator can be described as a Content Management System that does not use a server-side scripting language or a database. Page layouts and site content are stored as files in a project directory. These files are then compiled prior to publication via command-line to create a complete website.

### the Advantages
Most of the advantages of using a static site generator comes from the fact that the websites they build consist of nothing more than HTML, CSS and JavaScript. As a result:

- There is no server-side scripting languages or datatbases to install, or maintain.
- Site content is compiled prior to publication, resulting in faster page load times.
- Site assets remain on the author's local machine, allowing them to retain complete ownership of their work.

### the Disadvantages
The main disadvantages of static site generators comes from the fact that there is a bit of a learning curve associated with them. Since creating websites with this tool consists of editing text files, there is no graphic user interface for a client to work with. Additionally, there is no easy way to add features like ecommerce to a static site in a manner resembles the point and click system that WordPress offers.

But with this being said, services are starting to appear on the web that bridge the gap between static site generators and CMSs. For example [Contentful](https://contentful.com), provides a user friendly web  interface for creating site content. This content is packaged in a JSON object which then can be pulled into your static build system through templates or a simple AJAX request. [Disqus](https://disqus.com) easily adds commenting to a static blog by adding some simple JavaScript to the bottom of a rendered HTML page. And finally for creating online forms, there are service like [Wufoo](http://www.wufoo.com).

### Proof of Concept
After looking at the possible benifits and caveats associated with site generators, I was tempted to put this tool through its paces. As a result, I built this blog using Metalsmith, a static site generator based on Node.js. Thus far, I'm very pleased with the results. Metalsmith is modular, flexible and integrates well with the other tools I use on a regular basis. To see this work in progress, feel free to visit my [github repo](http://github.com/michaelkornblum/soda-fountain/).

### Final Thoughts
At the time of this writing, static site generators are not ready to step in and replace WordPress for creating enterprise level sites. However there are times when a CMS is just too much of a solution and hand-coding HTML, CSS and JavaScript is too much of an undertaking. But if you are willing to learn new ways of creating a website, static site generators may be just the thing you're looking for.
