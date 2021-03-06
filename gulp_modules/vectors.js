module.exports = function(gulp, $g) {
  gulp.task('vectors', function() {
    return gulp.src('./vectors/*.svg')
      .pipe($g.svgmin())
      .pipe($g.svgSymbols({
        templates: ['default-svg']
      }))
      .pipe(gulp.dest('./layouts/partials'));
  });
}
