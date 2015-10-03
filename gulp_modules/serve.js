
var runSequence = require('run-sequence');
module.exports = function(gulp) {
  gulp.task('serve', function() {
    runSequence('clean', 'vectors', ['metalsmith', 'styles', 'scripts', 'images'], 'start-server', 'watch');
  });
}
