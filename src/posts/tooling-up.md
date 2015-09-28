---
title: a Look Inside my Toolbox
description: Web Development Tools I Love to Use
author: Michael Kornblum
category: general
date: 2015-09-22
template: single.jade
leadImage: tools.jpg
leadImageAlt: tools
---

A couple of years ago, I wrote an article called *Tooling Up: My Web Design and Development Rig for Ubuntu 14.04.* Not a lot has changed in my current set up. Ubuntu continues to be my OS of choice and I still use GIMP and Inkscape for most of my graphic editing. But my old blog is no longer in existence, and nowadays there are enough changes to my workflow that I felt it was time to revisit this topic.

### My Desktop Environment: Gnome 3.16

Changing desktop environments is never easy. I discovered this a few years ago when the Gnome project decided to toss their entire codebase and rebuild their desktop from the ground up. The change to the Gnome environment was so significantly alien that it sent me running and screaming to the KDE camp.

I was happy with my choice of desktop up until recently, when KDE switched from version four to five. The new version was so buggy that I found it to be unusable. So once again, I was in search of a new desktop. Ironically, after a five year absence I returned to Gnome and found it to be just what I was looking for.

In some ways, I think my choice in desktop environments has been influenced by my increasing use of Mac OSX. One of the main reasons I chose Gnome was because out of all the Linux desktops out there, it seemed to most closely resemble a complete product, but was still customizable enough to fit my needs. Additionally, its design is minimalistic enough to get out of my way when I have coding to do.

### My Text Editor: Atom
Up until a year ago Sublime Text was my text editor of choice. But the idea of using a proprietary application when there are literally tons of open source text editors out there just didn't feel right to me. After trying out numerous alternatives I finally settled on Atom, the open source text editor from the folks at Github.

As far as I'm concerned Atom is the best open source text editor out there. Recent updates to the project has increased its speed and performance, and its feature-set comfortably rivals those of Sublime Text. Additionally, its rich eco-system of plugins covers everything from support for various programming languages, to Emmet preprocessing and much more. As a result, my transition from Sublime Text to Atom was painless and did not result in any substancial loss of productivity.

### My Graphic Editing Suite
For photo editng and scalable vector graphics, GIMP and Inkscape continues to be my tools of choice. However there are times when I have no option but to reach for my Macbook and open up Photoshop or Illustrator. Usually this occurs when I have to use a feature that is not present in GIMP or Inkscape, or if I'm collaborating with others who are still stuck in the Creative Cloud.

Of these applications, I have found my use of GIMP has decreased over time while my use of Inkscape has increased. This is due to the fact that I've been using more scalable vector images in my work, and have confined my use of jpegs and pngs to more photographic content.

The one tool I have yet to mention is Agave, a color scheme generator for the Linux desktop. While I still use the application from time to time, I have recently found myself using online tools like [Palettton](http://colorschemedesigner.com/) for the majority of my color scheming.  One advantage that Paletton has over Agave is that it lets me preview my color schemes on an example website. Additionally, I can export my color schemes to a CSS file.

With this being said, I have no plans to totally banish Agave from my workflow, especially since its color picker comes in very handy. But I think my choice in color schemers shows just how my philosophy towards open source software has changed. No longer do I ask myself if an application just works on Linux. Instead I ask if I can use the same application across multiple operating systems.

### My Build System: Gulp

When I wrote my initial article about my favorite web development tools, I had just switched from the Grunt task-runner to the Gulp streaming build system. Since then, Gulp has continued to be a mainstay of my workflow, even to such an extent that whenever I begin a new project, I start by downloading a custom Gulp configuration file from my Github repository.

One advantage that Gulp has over Grunt is that its possible to write a couple of lines of JavaScript, wrap them in a function and have them run alongside other Gulp tasks. This expands Gulp's functionality to surpass the jobs that build system are normally in charge of. In addition to preprocessing CSS, minifying site assets, and triggering browser reloads, writing simple JavaScript in a Gulp task allows me to perform such miraculous feats as triggering static site generators, and deploying websites via FTP whenever I save a file.

Another major advantage that Gulp has is its awesome community support. With thousands of community created plugins available, and numerous tutorials on how to use this build system, Gulp has quickly become a tool that I'd be hard pressed to live without.

### My CSS Processors: Stylus and PostCSS
Up until a year ago, I had used Sass for CSS preprocessing, but recently I switched over to Stylus with PostCSS. The reason I made the change was because most of my build system was already based on Node.js and installing another programming language for one utility struck me as wasteful.

With this being said, I really like Stylus. Its light syntax helps me to write CSS faster, and while it doesn't have as many plugins as Sass, the ones it does have are truly works of art. Two Stylus plugins I often use are *Rupture* by Jeff Escalante and *Typographic* by Cory Simmons. Rupture serves as an excellent replacement for the Breakpoint Sass plugin, and Typographic has solved two major problems that I often wrestle with, namely web typography and vertical rhythm.

Unlike my adoption of Stylus, PostCSS did not replace any technologies in my toolbox, however it did add a raft load of possibilities to my CSS, and offered me a glimpse into its future. Many of the plugins that are created for PostCSS are based on W3C recommendations which means that its possible to use tommarow's CSS features today.

Currently my favorite PostCSS plugin is *Lost*. Lost is a fractional grid system that handles everything from simple to masonry style grid layouts with incredible ease. One thing I love about Lost, is that it not only makes creating traditional grids easy, but it is also flexbox compatible, which means I can use it for years to come.

### My Static Site Generator: Metalsmith
Content Management Systems like WordPress continue to be the best choice for enterprise level websites. But for smaller sites and blogs they tend to be too much of a solution. About two years ago, I discovered static site generators and have been using them a lot lately.

Like Content Management Systems, Static Site Generators use dynamic content and  templates to build an HTML page that's viewed by the end user. The difference however, is that CMSs use server side scripts and databases to generate their documents on demand. With Static Site Generators, HTML documents are compiled beforehand via the command line.

One big benefit of using Static Site Generators is that all the web server has to do is host HTML, CSS and JavaScript. There is no server side scripting languages or databases to worry about. This results in less security concerns and faster page loads.

At the time of this writing, my static site generator of choice is Metalsmith. While its not as easy to learn as Jekyll or Roots, it does have a few advantages. First, it integrates smoothly with Gulp. Secondly, Metalsmith is modular in design which lets me add and remove components as needed. Finally, Metalsmith seems to have the best selection of plugins that I have seen in many applications of its class.

### My Browsers & Testung Environment
When designing responsive web sites you can never have enough browsers. On my Linux Desktop I have Chrome, Firefox and Opera installed. Addtionally, I use a tool called Browser-sync to test my work on various devices on my home wi-fi network. One thing I love about Browser-sync is that if I change something on my website, all the other devices on the network automatically reload to reflect this change. This frees me from having to constantly have to resize my browser window to check my work.

Another tool I use regularly is Virtualbox, which allows me to run virtualized instances of various operating systems on my Linux desktop, which saves me from having to have more devices than needed. When configured correctly, Virtualbox works flawlessly with Browser-sync creating the perfect desktop testing environment.

### Final Thoughts
Over the past year, my web design toolbox has changed substancially. While a few tools have stayed on as semi-permanent fixtures, some of them have been used with less frequency. Additions to my toolbox, such as Stylus, PostCss and Metalsmith have exapnded my capabilities as a front-end developer, and tools like Gulp have proven themselves to be more useful than I originally thought possible.

I suspect that over the next year there will be more changes to my development workflow. Just as I become comfortable with one tool, a bigger and better replacement takes the stage. If and when this occurs I'll keep you posted.
