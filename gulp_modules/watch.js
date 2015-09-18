module.exports = function(gulp, browserSync) {
  gulp.task('watch', function() {
    gulp.watch('src/**/*', ['metalsmith']);
    gulp.watch('templates/**/*', ['metalsmith']);
    gulp.watch('src/**/*', ['metalsmith']);
    gulp.watch('styles/**/*', ['styles']);
    gulp.watch('scripts/**/*', ['scripts']);
    gulp.watch('images/**/*', ['images']);
    gulp.watch('vectors/**/*', ['vectors']);
    gulp.watch('build/**/*', browserSync.reload);
  });
}
