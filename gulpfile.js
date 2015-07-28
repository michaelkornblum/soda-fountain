// load gulp and metalsmith modules
var gulp = require('gulp');
var $g = require('gulp-load-plugins')();
var gulpsmith = require('gulpsmith');
var $m = require('load-metalsmith-plugins')();
// load miscelleneous modules
var harmonize = require('harmonize')();
var assign = require('lodash.assign');
var moment = require('moment');
// load postcss plugins
var poststylus = require('poststylus');
// load coffeescript/vinyl plugins
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var transform = require('vinyl-transform');
var coffeeify = require('coffeeify');

gulp.task('metalsmith', function() {
  return gulp.src('./src/**/*')
    .pipe($g.frontMatter()).on("data", function(file){
      assign(file, file.frontMatter);
      delete file.frontMatter;
    })
    .pipe(gulpsmith()
      .use($m.metadata({
        site: "data/site.json"
      }))
      .use($m.markdown())
      .use($m.inPlace({
        engine: "jade"
      }))
      .use($m.layouts({
        engine: "jade",
        moment: moment
      }))
      .use($m.copy({
        pattern: '**/*.jade',
        extension: '.html',
        move: true
      }))
      .use($m.beautify())
    )
    .pipe(gulp.dest('./build'));
});

gulp.task('styles', function() {
  gulp.src('styles/style.styl')
    .pipe($g.stylus({
      use: [
        poststylus([
          'autoprefixer',
          'postcss-position',
          'postcss-vertical-rhythm',
          'lost'
        ])
      ]
    }))
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('scripts', function() {
  return browserify('./scripts/script.coffee')
    .transform(coffeeify)
    .bundle()
    .pipe(source('script.js'))
    .pipe($g.streamify($g.uglify()))
    .pipe(gulp.dest('./build/scripts'));
});
