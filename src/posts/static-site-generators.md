---
title: Static Site Generators - First Look
description: What are static site generators
author: Michael Kornblum
category: front end development
date: 2015-10-04
layout: single.jade
leadImage: tools.jpg
leadImageAlt: tools
shortName: static-site-generators-first-look
---

I first heard about static site generators about two years ago while listening to an interview with Anna Debenham on the [East Wing Podcast](http://5by5.tv/eastwing/69). During the show, Anna spoke briefly about her work with [Jekyll](https://jekyllrb.com/), a command-line application that used templates and markdown to build complete websites.

Coming from a PHP background, this idea intrigued me. I had already started working with the [Smarty templating engine](http://www.smarty.net/) and enjoyed the fact that I was no longer polluting my server-side code with fragments of HTML. But the idea of compiling my data and templates into a flat file was something I never really considered.

After trying Jekyll for the first time, I was hooked. While I could not see this way of building websites as a replacement for full Content Management Systems, I was blown away by just how much server-side code could be eliminated by just using templates.

### What is a Static Site Generator?
A Static Site Generator can be described as a Content Management System that does not use a server-side scripting language or a database. Page layouts and site content are stored as files in a project directory. These files are then compiled prior to publication via command-line to create a complete website.
