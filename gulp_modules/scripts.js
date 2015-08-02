var browserify = require('browserify');
var transform = require('vinyl-transform');
var jadeify = require('jadeify');
var coffeeify = require('coffeeify');
var source = require('vinyl-source-stream')

module.exports = function(gulp, $g) {
  gulp.task('scripts', function() {
    return browserify('./scripts/script.coffee')
      .transform(jadeify)
      .transform(coffeeify)
      .bundle()
      .pipe(source('script.js'))
      .pipe($g.streamify($g.uglify()))
      .pipe(gulp.dest('./build/scripts'));
  });
}
