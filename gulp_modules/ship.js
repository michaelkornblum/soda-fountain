var fs = require('fs');

module.exports = function(gulp, Ship){
  gulp.task('ship', function(){
    try {
      var config = JSON.parse(fs.readFileSync('gh-pages.json'));
      var project = new Ship({root: './build', deployer: 'gh-pages'});
      project.configure({
        username: config.username,
        password: config.password,
        repo: config.repo,
        branch: config.branch
      });
      return project.deploy()
        .done(function(res){
          console.log('successfully deployed!');
        }, function(err){
          console.log('there was an error : (');
          console.log(err);
        });
    } catch(e) {
      return console.log('Missing config file. Please run \'node gh-pages_config.js\' and try this task again.');
    }
  });
}
