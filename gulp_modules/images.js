module.exports = function(gulp, $g) {
  gulp.task('images', function() {
  return gulp.src('./images/*')
    .pipe($g.imagemin({
      optimizationLevel: 3,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('./build/images'));
  });
}
