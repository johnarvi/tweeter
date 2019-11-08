/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetCreatedTime = (time) => {
  const todaysDate = new Date().getTime();
  const day = 24 * 60 * 60 * 1000;
  const minute = Math.round((todaysDate - time) / 60000);
  const days = Math.round((todaysDate - time) / day);
  const years = Math.round((days * 10) / 365) / 10;
  const past = (days > 365) ? `${years} year/s ago`
    : (days > 0) ? `${days} day/s ago`
      : `${Math.round((minute) * 10) / 10} minute/s ago`;
  return past;
};


const renderTweets = function(tweets) {
  $("div.tweets").empty();
  tweets.forEach(tweet => {
    $('.tweets').prepend(createTweetElement(tweet));
  });
};


const createTweetElement = function(tweet) {
  const time = tweet.created_at;

  const $body = `
  <article class="tweet">
    <div class="tweet-header"> 
      <div class="profileGrp">
          <img src= "${tweet.user.avatars}">
          <span class="profileName">${tweet.user.name}</span>
      </div>
      <div>
        <span class="username">${tweet.user.handle}</span>
      </div>                    
    </div>
    <div class="tweet-body">
      <textarea name="text" readonly>${tweet.content.text}</textarea>
    </div>
    <div class="tweet-footer"> 
      <span class="date">${tweetCreatedTime(time)}</span>
      <span class="icon">
          <img src="/images/flag.png"> 
          <img src="/images/reload.png"> 
          <img src="/images/heart.png"> 
      </span>
    </div>
  </article>`;
  return $body;
};

const loadtweets = function() {
  $.ajax({
    method: "GET",
    url: "/tweets",
    dataType: "json",
    contentType: "application/x-www-form-urlencoded",
    success: function(db) {
      renderTweets(db);
    },
    error: function() {
      console.log("failed");
    }
  });
};

$(document).ready(function() {
  $('#error').hide();
  loadtweets();
  $(function() {
    const $input = $('.new-tweet form');
    $input.submit(function(event) {
      event.preventDefault();
      console.log($input.serialize().length);
      if ($input.serialize().length > 145) {
        $('#error').children('#errMsg').text('Unfortunately your message is too long');
        $('#error').slideDown(function() {
          setTimeout(function() {
            $('#error').slideUp();
          }, 2000);
        });
      } else if ($input.serialize().length <= 5) {
        $('#error').children('#errMsg').text('Your message is empty');
        $('#error').slideDown(function() {
          setTimeout(function() {
            $('#error').slideUp();
          }, 2000);
        });
      } else {
        $.ajax({
          method: "POST",
          url: "/tweets",
          data: $input.serialize(),
          contentType: "application/x-www-form-urlencoded",
          success: function() {
            loadtweets();
          },
          error: function() {
            console.log("failed");
          }
        });
      }
    });
  });
});

















// .done(function(msg) {
//   event.preventDefault();
//   loadtweets();
//   alert( "Data Saved: " + msg);
//   console.log($input.children('#newTweet').val());
// });









// $(function() {
//   const $input = $('#sendTweet');
//   $input.submit(function(send) {
//     $.ajax('/tweets', { method: 'POST' })
//     .then(function (tweet) {
//       console.log('Success: ', tweet.serialize());
//       // $button.replaceWith(morePostsHtml);
//     });
//   });
// });



// $(function() {
//   const $input = $('#sendTweet');
//   $input.on('click', function (e) {
//     e.preventDefault();
//     console.log('Tweet clicked, performing ajax call... asdfsdfasdfsdfsdf');
//   });
// });

