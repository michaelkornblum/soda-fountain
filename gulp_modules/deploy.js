module.exports = function(gulp, $g, config) {
  gulp.task('deploy', function() {
    return gulp.src('./build/**/*')
      .pipe($g.ghPages({
        remoteUrl : config.ghRepo
      }));
  });
}
