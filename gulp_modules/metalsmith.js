var harmonize = require('harmonize')();
var $m = require('load-metalsmith-plugins')();
var assign = require('lodash.assign');
var gulpsmith = require('gulpsmith');
var moment = require('moment');
var _ = require('lodash');
var _s = require('underscore.string');

module.exports = function(gulp, $g) {
  gulp.task('metalsmith', function() {
    return gulp.src('./src/**/*')
      .pipe($g.frontMatter()).on("data", function(file){
        assign(file, file.frontMatter);
        delete file.frontMatter;
      })
      .pipe(gulpsmith()
        .use($m.metadata({
          site: "data/site.json",
          pages: "data/pages.json",
          categories: "data/categories.json"
        }))
        .use($m.markdown())
        .use($m.collections({
          posts: {
            pattern: 'posts/**.html',
            sortBy: 'date',
            reverse: true
          }
        }))
        .use($m.branch('posts/**.html')
          .use($m.permalinks({
            pattern: 'posts/:title',
            relative: false
          }))
        )
        .use($m.branch('!posts/**.html')
          .use($m.branch('!index.md').use($m.permalinks({
            relative: false
          })))
        )
        .use($m.templates({
          engine: "jade",
          moment: moment,
          _: _,
          _s: _s
        }))
        .use($m.beautify())
      )
      .pipe(gulp.dest('./build'));
  });
}
