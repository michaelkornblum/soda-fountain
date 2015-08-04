// load gulp and metalsmith modules
var fs = require('fs');
var gulp = require('gulp');
var $g = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var config = JSON.parse(fs.readFileSync('./src/data/site.json'));
require('./gulp_modules/metalsmith.js')(gulp, $g);
require('./gulp_modules/styles.js')(gulp, $g);
require('./gulp_modules/scripts.js')(gulp, $g);
require('./gulp_modules/images.js')(gulp, $g);
require('./gulp_modules/vectors.js')(gulp, $g);
require('./gulp_modules/clean.js')(gulp);
require('./gulp_modules/serve.js')(gulp, browserSync);
require('./gulp_modules/watch.js')(gulp, browserSync);
require('./gulp_modules/default.js')(gulp);
