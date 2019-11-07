$(document).ready(function() {
  // hover over tweet cause the bolding
  $(".tweet").hover(function() {
    $(this).addClass("hover");
  }, function() {
    $(this).removeClass("hover");
  });
});

$(document).ready(function() {
  // $('.new-tweet').hide();
  $('.new-tweet').hide(500);
  const $dwnArrow = $('#downArrow');
  $dwnArrow.on('click', function() {
    $('.new-tweet').slideDown(500);
    // $(this.child()).rotate(180);
    // alert('clicked');
    // $("down").animate("slow");
    // $("down").slideToggle("slow");
    // $("main").toggleClass("down");
  });
});

$(document).ready(function() {
  const $dwnArrow = $('#downArrow');
  $dwnArrow.on('click', function() {
    $('.new-tweet').show(500);
  });
});


//   $(this).addClass("hover");
// } , function() {
//   $(this).removeClass("hover");
