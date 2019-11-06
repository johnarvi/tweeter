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

// const renderTweets = function(tweets) {
//   tweets.forEach(tweet => {
//     createTweetElement(tweet);
//   });
//   // calls createTweetElement for each tweet
//   // takes return value and appends it to the tweets container
// };

const tweetData = data[0];

const createTweetElement = function(tweet) {
  let $tweet = $('<article>').addClass('tweet');

  return $tweet;
};

const $tweet = createTweetElement(tweetData);
console.log($tweet);
$('#tweets-container').append($tweet);

// Test / driver code (temporary)

// renderTweets(data);

// <article class="tweet">
// <div class="tweet-header"> 
//   <div class="profileGrp">
//       <img src= "${user.avatars}">
//       <span class="profileName">${user.name}</span>
//   </div>
//   <div>
//     <span class="username">${user.handle}</span>
//   </div>                    
// </div>
// <div class="tweet-body">
//   <textarea name="text">${content.text}</textarea>
// </div>
// <div class="tweet-footer"> 
// <div>
//   <span class="date">${created_at}</span>
//   <span class="icon">
//       <img src="/images/flag.png"> 
//       <img src="/images/reload.png"> 
//       <img src="/images/heart.png"> 
//   </span>
// </div>
// </div>
// </article>