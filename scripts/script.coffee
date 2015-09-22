toggleButton = document.getElementById 'toggle'
navigation = document.getElementById 'page-nav'

toggleButton.addEventListener 'click', ->
  navigation.classList.toggle 'open'
