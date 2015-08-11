# Soda-Fountain

## Introduction

Thank you for your interest in **Soda-Fountain**, a static site build system that is based on **Gulp**, **Metalsmith** and assorted plugins. Soda-Fountain is built with the following design principals in mind.

- Static build systems should be based on well documented, open source tools and technologies.

- Static build systems should provide you all the necessary tools to create a site from conception to deployment.

- Static build systems should be modular, allowing you to add, remove and configure components as you see fit.

To achieve these goals Soda-Fountain makes ample use of Gulp, the most popular and well documented streaming build system on the web and Metalsmith, a rising star in the world of Static Site Generators. Both tools provide a rich ecosystem of plugins that makes creating the website you want a breeze.

With Soda-Fountain and a little know-how, it's possible to create anything from simple blogs and portfolios to larger, data-driven sites that resemble a more traditional CMS.

## Getting Started
In order to install Soda-Fountain you must have two packages already installed and running on your system:

- Node.js
- Gulp

**Note:** At the time of this writing, Soda-Fountain has not been tested on a PC running Windows. This however will change very soon.

### 1. Install Node.js
For Mac users, installing Node.js is easy. Just go to the [Node.js website](https://nodejs.org/) and download the package that's appropriate to your operating system of choice. For Ubuntu users the latest version of Node.js is available via PPA. See [this article](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server) from Digital Ocean for details.

### 2. Install Gulp
Once Node.js is installed, it's easy to install Gulp. Open your terminal emulator and enter:

```sudo npm install -g gulp```

You will be asked for your administrative password. Once your password is provided Node's package manager (npm) will download and install Gulp.

### 3. Clone or Download Soda-Fountain
From the command-line enter:
 ```git clone https://github.com/michaelkornblum/soda-fountain``` to clone Soda-Fountain to a local repository. Alternately Soda-Fountain can be downloaded as a zip file from [here](https://github.com/michaelkornblum/soda-fountain/archive/master.zip). Use your command-line or graphical front-end tool of choice to unzip the newly downloaded file before proceeding to the next step.

### 4. Install Remaining Dependencies
From the command-line change your current working directory so you inside the newly cloned repository or extracted zip file.

```cd path/to/soda-fountain```

Next use the Node Package Manager to download and intall the remaining dependencies. From the command-line enter:

```sudo npm install```

Once again, you will be asked for your administrative password and npm will download the packages needed to make Soda-Fountain work.

**Note:** Soda-Fountain uses over 35 Node packages in order to do its magic. As a result the downloading and installation of these dependencies may take some time. Please be patient.

### 5. Start init.js
Init.js is a small Node script that is based on [inquirer.js](https://github.com/SBoudrias/Inquirer.js/). Its purpose is to provide soda-fountain with some basic information about your website. This information is saved in the ```site.json``` file located in your ```src/data``` directory. From the command-line, enter:

```node init.js```

Init.js will ask you a series of questions. Once these questions have been answered, init.js will output a brief congratulatory message indicating that the information you entered is ready for use.

### 6. Start Gulp Server
Soda-Fountain is ready for its initial run. From the command-line, enter:

```gulp serve```

Soda-Fountain will use Gulp to run through a series of build and maintenance tasks. Finally it will start an instance of [browser-sync](http://www.browsersync.io/), a live, cross-browser testing environment. Soda-Fountiain is now ready for use. Continue on to the next section to learn how to use it to create the site of your dreams.

## Understanding Static Build Systems
A **static site generator** is a powerful software tool that builds websites without forcing the user to manually create a new HTML document for each webpage. To accomplish this goal, it will often separate a website's structure from its content. This separation of concerns helps the user to quickly add content to a site without worrying about other aspects of website creation. Static site generators often consist of the following components:

- a Templating Engine
- a Markdown Parser
- a Compiler
