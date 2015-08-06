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
    type: 'list',
    name: 'publication',
    message: 'Publication Method:',
    choices: [
      'Github Pages',
      'FTP Server',
      'None'
    ]
  },
  {
    type: 'input',
    name: 'ghRepo',
    message: 'Github Repo:',
    when: function(answers) {
      return answers.publication === 'Github Pages';
    }
  },
  {
    type: 'input',
    name: 'ftpServer',
    message: 'FTP Server',
    when: function(answers) {
      return answers.publication === 'FTP Server';
    }
  }
]

inquirer.prompt(questions, function(answers) {
  fs.writeFileSync('./src/data/site.json', JSON.stringify(answers, null, " "));
  console.log('You are now ready to use Gulp-Metalsmith-Builder. Run \'gulp\' to get started.')
});
