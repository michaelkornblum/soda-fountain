module.exports = function(gulp, $g) {
  gulp.task('vectors', function() {
    return gulp.src('./vectors/*.svg')
      .pipe($g.svgSymbols({
        templates: ['default-svg']
      }))
      .pipe(gulp.dest('./layouts/templates/partials'));
  });
}
