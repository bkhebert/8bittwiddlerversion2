
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
