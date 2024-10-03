/*users is an array of strings -- all the usernames that you're following.
streams is an object with two properties, users and home.
streams.home is an array of all tweets from all the users you're following.
streams.users is an object with properties for each user. streams.users.shawndrost has all of shawndrost's tweets.
*/
//set up variables for time
let timeNow = new Date();
let hr = timeNow.getHours();
let min = timeNow.getMinutes();

$(document).ready(() => {
  const $body = $('body');
  $body.html('');
  $logo = $('<h1 id="logo"></h1>')
  .text("Twiddler");
  $section = $('<section id="Tweets Section"></section>')
  $div = $('<div id=Tweets Div></div>')
   //places logo at the top
  $body.prepend($logo);
  //places section into the body at the bottom
  $body.append($section) 
  //places the section into the div
  $section.appendTo($div) 
  //has the body place the div at the bottom
  $body.append($div) 
 function createTweets(array) {
    const $tweets = streams.home.map((tweet) => {
    const $tweet = $(`<div id=${tweet.user} class="user"></div>`);
    const text = `@${tweet.user}: ${tweet.message} ${moment().toString()}`; //this part will also change, something about being clickable
    $tweet.text(text); //we will add a timestamp to this
    return $tweet;
    });
    $section.append($tweets);
    
  };
  createTweets(); ///parameter is needed to determine how the fuunction will map
  ///NOTE: click handler will accept the username version
setInterval(createTweets, 5000); //for now this is cool
///place click handler inside of the createTweets
///replace map for dry code
///set it up with nested if statements
///anonymous function will be needed to handle the updated conditions
  $('.user').click( function () {
    //remove the previous section
    $section.remove();
    //create a new section for the user
    $userSection = $('<section id="userTweetsSection"></section>')
    //assign a variable to the id that was clicked
    let theUser = $(this).attr('id')
    //assign a variable to the return value of the mapped array of objects
    const $clickedTweets = streams.users[theUser].map((tweet) => {
    const $clickedTweets = $(`<div id=${tweet.user} class="user"></div>`);
    const text = `@${tweet.user}: ${tweet.message} moment time: ${moment().toString()}`; //this part will also change, something about being clickable
    $clickedTweets.text(text); //we will add a timestamp to this
    return $clickedTweets;
    });
  $div.append($userSection);
  $userSection.append($clickedTweets)
 })
});
