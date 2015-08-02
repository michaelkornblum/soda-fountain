module.exports = function(gulp, browserSync) {
  gulp.task('serve', function() {
    browserSync.init({
      server : {
        baseDir : './build'
      }
    });
  });
}
