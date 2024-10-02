/*users is an array of strings -- all the usernames that you're following.
streams is an object with two properties, users and home.
streams.home is an array of all tweets from all the users you're following.
streams.users is an object with properties for each user. streams.users.shawndrost has all of shawndrost's tweets.
*/
$(document).ready(() => {
  const $body = $('body');
  $body.html('');

  function createTweets() {
    const $tweets = streams.home.map((tweet) => {
      const $tweet = $('<div></div>');
      const text = `@${tweet.user}: ${tweet.message}`; //this part will also change, something about being clickable

      $tweet.text(text); //we will add a timestamp to this

      return $tweet;
    });

  $body.append($tweets);
  }
  
});
