var postcss = require('postcss');
var poststylus = require('poststylus');
var typographic = require('typographic');
var lost = require('lost');
var rupture = require('rupture');
var verticalRhythm = require('postcss-vertical-rhythm');

module.exports = function(gulp, $g) {
  gulp.task('styles', function() {
    gulp.src('styles/style.styl')
      .pipe($g.stylus({
        use: [
          rupture(), typographic()
        ]
      }))
      .pipe($g.postcss([
        lost(), verticalRhythm({rootsSelector: 'body'})
      ]))
      .pipe(gulp.dest('./build/styles'));
  });
}
