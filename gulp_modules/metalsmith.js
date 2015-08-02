var harmonize = require('harmonize')();
var $m = require('load-metalsmith-plugins')();
var assign = require('lodash.assign');
var gulpsmith = require('gulpsmith');
var moment = require('moment');

module.exports = function(gulp, $g) {
  gulp.task('metalsmith', function() {
    return gulp.src('./src/**/*')
      .pipe($g.frontMatter()).on("data", function(file){
        assign(file, file.frontMatter);
        delete file.frontMatter;
      })
      .pipe(gulpsmith()
        .use($m.metadata({
          site: "data/site.json"
        }))
        .use($m.markdown())
        .use($m.inPlace({
          engine: "jade"
        }))
        .use($m.layouts({
          engine: "jade",
          moment: moment
        }))
        .use($m.copy({
          pattern: '**/*.jade',
          extension: '.html',
          move: true
        }))
        .use($m.beautify())
      )
      .pipe(gulp.dest('./build'));
  });
}
