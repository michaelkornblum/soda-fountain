$ = require 'jquery'

$('#toggle').on 'click', ->
  $('#page-nav').toggleClass('open')

$('.site-pages li a').on 'mouseenter', ->
  $(this).find('svg').attr('class', 'icon active')

$('.site-pages li a').on 'mouseleave', ->
  $(this).find('svg').attr('class', 'icon')

$('.site-categories li a').on 'mouseenter', ->
  $(this).find('svg').attr('class', 'icon active')

$('.site-categories li a').on 'mouseleave', ->
  $(this).find('svg.icon').attr('class', 'icon')
