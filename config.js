var fs = require('fs');
var inquirer = require('inquirer');

var questions = [
  {
    name: 'pubMethod',
    type: 'list',
    message: 'Publication Method',
    choices: ['Git', 'FTP', 'Both']
  },
  {
    type: 'input',
    name: 'gitRepo',
    message: 'Git Repo:',
    when: function(answers) {
      return answers.pubMethod === 'Git' || answers.pubMethod === 'Both';
    }
  },
  {
    type: 'input',
    name: 'ftpHost',
    message: 'FTP Host:',
    when: function(answers) {
      return answers.pubMethod === 'FTP' || answers.pubMethod === 'Both';
    }
  },
  {
    type: 'input',
    name: 'ftpUser',
    message: 'FTP User Name:',
    when: function(answers){
      return answers.pubMethod === 'FTP' || answers.pubMethod === 'Both';
    }
  },
  {
    type: 'password',
    name: 'ftpPass',
    message: 'FTP Password:',
    when: function(answers){
      return answers.pubMethod === 'FTP' || answers.pubMethod === 'Both';
    }
  },
  {
    type: 'input',
    name: 'ftpBaseDir',
    message: 'FTP Base Directory:',
    when: function(answers){
      return answers.pubMethod === 'FTP' || answers.pubMethod === 'Both';
    }
  }
]

inquirer.prompt(questions, function(answers) {
  fs.writeFileSync('./config.json', JSON.stringify(answers, null, " "));
  console.log('Congratulations, your site is ready to be deployed.')
  if(answers.pubMethod == 'Git' || answers.pubMethod === 'Both') {
    console.log('Run \'gulp deploy-git\' to push your site build to the Git repository.');
  }
  if(answers.pubMethod === 'FTP' || answers.pubMethod === 'Both') {
    console.log('Run \'gulp deploy-ftp\' to push your site build to the FTP server.');
  }
});
