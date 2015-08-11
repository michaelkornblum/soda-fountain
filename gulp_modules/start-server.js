module.exports = function(gulp, browserSync) {
  gulp.task('start-server', function() {
    browserSync.init({
      server : {
        baseDir : './build'
      }
    });
  });
}
