$ = require 'jquery'

$('#toggle').on 'click', ->
  $('#page-nav').toggleClass('open')

$('.site-pages a').on 'mouseenter', ->
  $(this).find('svg.icon').addClass('active')

$('.site-pages a').on 'mouseleave', ->
  $(this).find('svg.icon').removeClass('active')
