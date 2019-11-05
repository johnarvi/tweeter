$(document).ready(function() {
  $("#newTweet").keyup(function() {
    let length = $(this).val().length;
    $(this).parent().children(".counter").text(length);
  });
});
