var $ = require('jquery');

$(document).ready(function(){

  $('.site-pages a').mouseenter(function(){
    $(this).find('svg.icon').attr('class', 'icon active');
  });

  $('.site-pages a').mouseleave(function(){
    $(this).find('svg.icon').attr('class', 'icon');
  });
});
