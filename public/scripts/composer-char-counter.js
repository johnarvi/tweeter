$(document).ready(function() {
  $("#newTweet").on("input", function() {
    let length = $(this).val().length;
    let counter = $(this).parent().children(".counter");
    counter.text(140 - length);
    (length > 140) ? counter.addClass("over")
      : counter.removeClass("over");
  });
});

