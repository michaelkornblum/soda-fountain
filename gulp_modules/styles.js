var postcss = require('postcss');
var poststylus = require('poststylus');
var jeet = require('jeet');
var lost = require('lost');

module.exports = function(gulp, $g) {
  gulp.task('styles', function() {
    gulp.src('styles/style.styl')
      .pipe($g.stylus({
        use: [
          jeet()
        ]
      }))
      .pipe($g.postcss([
        lost
      ]))
      .pipe(gulp.dest('./build/styles'));
  });
}
