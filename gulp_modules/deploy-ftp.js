var ftp = require('vinyl-ftp');
module.exports = function(gulp, $g, config) {
  gulp.task('deploy-ftp', function() {
    var conn = ftp.create({
      host: config.ftpHost,
      user: config.ftpUser,
      password: config.ftpPass,
      parallel: 10,
      log: $g.util.log
    });
    return gulp.src('./build/**/*', {base: './build/', buffer: false})
      .pipe(conn.newer(config.ftpBaseDir))
      .pipe(conn.dest(config.ftpBaseDir));
  });
}
