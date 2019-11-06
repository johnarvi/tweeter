/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

const tweetCreatedTime = (time) => {
  const days = Math.round(time / (24 * 60 * 60 * 1000));
  const years = Math.round(days / 365);
  const past = (days > 365) ? `${years} year/s ago` : `${days} days/s ago`;
  return past;
};


const renderTweets = function(tweets) {
  tweets.forEach(tweet => {
    $('.tweets').append(createTweetElement(tweet));
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
      <textarea name="text">${tweet.content.text}</textarea>
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

$(document).ready(function() {

  renderTweets(data);
});

$(function() {
  const $input = $('.new-tweet form');
  $input.submit(function(event) {
    console.log($input.serialize());
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $input.serialize(),
    })
      .done(function( msg ) {
        alert( "Data Saved: " + msg);
        console.log($input.children('#newTweet').val());
      });
  });
});
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

