// load gulp and standard node.js modules
var fs = require('fs');
var gulp = require('gulp');
var $g = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

// bring in site deployment file
var config = JSON.parse(fs.readFileSync('./config.json'));

// GULP TASKS
// compile HTML with Metalsmith
require('./gulp_modules/metalsmith.js')(gulp, $g);

// compile CSS with Stylus
require('./gulp_modules/styles.js')(gulp, $g);

// compile JS with coffeescript and browswerify
require('./gulp_modules/scripts.js')(gulp, $g);

// minify images with imagemin
require('./gulp_modules/images.js')(gulp, $g);

// compile svgs with svg-symbols
require('./gulp_modules/vectors.js')(gulp, $g);

// utility task to clean out build dir
require('./gulp_modules/clean.js')(gulp);

// utlilty task to start browswer-sync server
require('./gulp_modules/serve.js')(gulp, browserSync);

// utilty task to watch files
require('./gulp_modules/watch.js')(gulp, browserSync);

// utility task to deploy to github pages
require('./gulp_modules/deploy-git.js')(gulp, $g, config);

// utility task to deploy ftp site
require('./gulp_modules/deploy-ftp.js')(gulp, $g, config);

// default gulp task
require('./gulp_modules/default.js')(gulp);
