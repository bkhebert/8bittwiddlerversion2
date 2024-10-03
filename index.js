/*users is an array of strings -- all the usernames that you're following.
streams is an object with two properties, users and home.
streams.home is an array of all tweets from all the users you're following.
streams.users is an object with properties for each user. streams.users.shawndrost has all of shawndrost's tweets.
*/
$(document).ready(() => {
  const $body = $('body');
  $body.html('');
  $logo = $('<h1 id="logo"></h1>')
          .text("Twiddler");
  $section = $('<section id="Tweets Section"></section>')
  $div = $('<div id=Tweets Div></div>')
  createTweets(); //calls the function create tweets
  $body.prepend($logo); //places logo at the top
  $body.append($section) //places section into the body at the bottom
  $section.appendTo($div) //places the section into the div
  $body.append($div) //has the body place the div at the bottom
  

  function createTweets() {
    const $tweets = streams.home.map((tweet) => {
      let timeNow = new Date();
      let hr = timeNow.getHours();
      let min = timeNow.getMinutes();
      const $tweet = $(`<div id=${tweet.user} class="user"></div>`);
      const text = `@${tweet.user}: ${tweet.message} ${hr}:${min}`; //this part will also change, something about being clickable
      //$tweet.prepend($link2Page)
      $tweet.text(text); //we will add a timestamp to this
      //const $link2Page = $(`<a href="raccooncitymassacre.bandcamp.com">@${tweet.user}</a>`)
      //$tweet.prepend($link2Page)
      return $tweet;
    });

    

  $section.append($tweets);
  }
  $('.user').click( function () {
    console.log('clicked')
    $section.remove();
    let theUser = $(this).attr('id')
    console.log(theUser)
    const $clickedTweets = streams.users[theUser].map((tweet) => {
      let timeNow = new Date();
      let hr = timeNow.getHours();
      let min = timeNow.getMinutes();
      const $clickedTweets = $(`<div id=${tweet.user} class="user"></div>`);
      const text = `@${tweet.user}: ${tweet.message} ${hr}:${min}`; //this part will also change, something about being clickable
      //$tweet.prepend($link2Page)
      $clickedTweets.text(text); //we will add a timestamp to this
      //const $link2Page = $(`<a href="raccooncitymassacre.bandcamp.com">@${tweet.user}</a>`)
      //$tweet.prepend($link2Page)
      return $clickedTweets;
    });
    //$userTweetsSection = $(`<section id="userTweets">${streams.users[theUser]}</section>`)
    //.attr('id="userTweets"')
    //.text(`hello World`) 
    //${streams.users[theUser]}
   // console.log($userTweetsSection)
    $div.append($clickedTweets)
 })

//$('.user').append($link2Page)
 // $('.user').click(() => {
  //  console.log('clicked')
//})
});
