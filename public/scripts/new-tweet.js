$(document).ready(function() {
  $('.new-tweet').slideUp(400);
  const $dwnArrow = $('#downArrow');
  $dwnArrow.on('click', function() {
    $(window).scrollTop(0); 
    $('.new-tweet').slideToggle();
  });
});