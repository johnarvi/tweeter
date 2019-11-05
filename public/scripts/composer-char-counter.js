
$(document).ready(function() {
  $("#newTweet").keyup(function() {
    console.log($(this).val().length);
  });
});
