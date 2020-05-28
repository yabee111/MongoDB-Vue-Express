import $ from '../../../node_modules/jquery'
$(document).ready(function () {
  $('.showMenu').on('click', function (event) {
    event.preventDefault()
    $('body').toggleClass('menu-show')
  })
})
