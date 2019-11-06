$(document).ready(function() {
  console.log("test");
  $("#newTweet").keyup(function() {
    let length = $(this).val().length;
    let counter = $(this).parent().children(".counter");
    counter.text(140 - length);
    console.log("test");
    (length > 140) ? counter.addClass("over")
      : counter.removeClass("over");
  });
});

