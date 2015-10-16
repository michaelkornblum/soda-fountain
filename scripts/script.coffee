$ = require 'jquery'

$('.toggle').on 'click', ->
  $('.site-nav').toggleClass('is-opened')

$('.site-pages li a, .category-links li a').on 'mouseenter', ->
  $(this).find('svg').attr('class', 'icon active')

$('.site-pages li a, .category-links li a').on 'mouseleave', ->
  $(this).find('svg').attr('class', 'icon')

$('.categories h3, .latest h3').on 'mouseenter', ->
  $(this).find('svg.list-toggle').attr('class', 'list-toggle highlight')

$('.categories h3, .latest h3').on 'mouseleave', ->
  $(this).find('svg.list-toggle').attr('class', 'list-toggle')

$('.categories').click ->
  $('.latest .open').removeClass('open')
  $(this).find('ul').toggleClass('open')

$('.latest').click ->
  $('.categories .open').removeClass('open')
  $(this).find('ul').toggleClass('open')
