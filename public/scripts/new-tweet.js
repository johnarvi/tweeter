$(document).ready(function() {
  $('.new-tweet').hide();
  const $dwnArrow = $('#downArrow');
  $dwnArrow.on('click', function() {
    $(window).scrollTop(); 
    $('.new-tweet').slideToggle();
    $('#newTweet').focus();
  });
});