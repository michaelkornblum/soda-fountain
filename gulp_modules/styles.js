var poststylus = require('poststylus');

module.exports = function(gulp, $g) {
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
}
