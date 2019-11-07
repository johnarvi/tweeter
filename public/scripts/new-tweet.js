$(document).ready(function() {
  $('.new-tweet').slideUp();
  const $dwnArrow = $('#downArrow');
  $dwnArrow.on('click', function() {
    $('.new-tweet').slideToggle(500);
  });
});