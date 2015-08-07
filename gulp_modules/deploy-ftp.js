var ftp = require('vinyl-ftp');
module.exports = function(gulp, $g, config) {
  gulp.task('deploy-ftp', function() {
    var conn = ftp.create({
      host: '198.199.82.77',
      user: 'michael',
      password: 'squirrel71',
      parallel: 10,
      log: $g.util.log
    });
    return gulp.src('./build/**', {base: '.', buffer: false})
      .pipe(conn.newer('/home/michael/'))
      .pipe(conn.dest('/home/michael/'));
  });
}
