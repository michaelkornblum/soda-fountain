var fs = require('fs');
var inquirer = require('inquirer');

var questions = [
  {
    type : 'input',
    name : 'title',
    message : 'Site Title:'
  },
  {
    type : 'input',
    name : 'description',
    message : 'Site Description:'
  },
  {
    type : 'input',
    name : 'author',
    message : 'Site Author:'
  },
  {
    type : 'input',
    name : 'email',
    message: 'Author Email:'
  }
]

inquirer.prompt(questions, function(answers) {
  fs.writeFileSync('./src/data/site.json', JSON.stringify(answers, null, " "));
  console.log('You are now ready to use Gulp-Metalsmith-Builder. Run \'gulp\' to get started.')
});
