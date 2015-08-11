var runSequence = require('run-sequence');
module.exports = function(gulp) {
  gulp.task('default', function() {
    runSequence('clean', 'vectors', ['metalsmith', 'styles', 'scripts', 'images']);
  });
}
