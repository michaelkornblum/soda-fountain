
message = require('./module.coffee')
$ = require('jquery')
template = require('./templates/test.jade')

console.log(message.sayHello())
$('body').css('background-color', 'yellow')
greeting = template({name: 'Micheal'})
$('body').append(greeting)
