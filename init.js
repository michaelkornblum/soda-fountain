#!/usr/bin/env node
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
  },
  {
    type: 'input',
    name: 'gitRepo',
    message: 'Git Repo:'
  },
  {
    type: 'input',
    name: 'ftpHost',
    message: 'FTP Host:'
  },
  {
    type: 'input',
    name: 'ftpUser',
    message: 'FTP User Name:'
  },
  {
    type: 'password',
    name: 'ftpPass',
    message: 'FTP Password:'
  },
  {
    type: 'input',
    name: 'ftpBaseDir',
    message: 'FTP Base Directory:'
  }
]

inquirer.prompt(questions, function(answers) {
  fs.writeFileSync('./src/data/site.json', JSON.stringify(answers, null, " "));
  console.log('You are now ready to use Gulp-Metalsmith-Builder. Run \'gulp\' to get started.')
});
