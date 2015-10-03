var del = require('del');
module.exports = function(gulp) {
  gulp.task('clean', function() {
    del(['./build/**/*']).then(function(){
      console.log('build directory deleted');
    });
  });
}
