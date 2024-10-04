/*users is an array of strings -- all the usernames that you're following.
streams is an object with two properties, users and home.
streams.home is an array of all tweets from all the users you're following.
streams.users is an object with properties for each user. streams.users.shawndrost has all of shawndrost's tweets.
*/
//set up variables for time
let timeNow = new Date();
let hr = timeNow.getHours();
let min = timeNow.getMinutes();
const now1 = moment();

$(document).ready(() => {
  let x = 60
  const frozenMoment1 = moment(now1.toString())
  const $body = $('body');
  //initialize a click variable to false
  let iWasClicked = false;
  //declare a variable for theUser
  let theUser;
  //initialize a variable to undefined
  let homePage = undefined;
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
  //call the function to create tweets
  createTweets()
  
 function createTweets(array) {
  ///replace map for dry code
  //initialize a variable to now
  const now = moment();
  //get a snapshot of time
  let timeAgo1 = frozenMoment1.fromNow()
  const frozenMoment = moment(now.toString());
  //if the array is undefined
  if(array === undefined){
    //set the array parameter to all the users posts
    array = streams.home
  } 
  //if iWasClicked is true (because a username was clicked on)
  if(iWasClicked === true){
    //set the array to equal the homePage for that user (defined when a user is clicked on)
    array = homePage;
  }
    
    //initialize the tweets variable to the value of this mapped arrays tweets
    const $tweets = array.map((tweet) => {
    //freeze a moment in time
    const timeAgo = frozenMoment.fromNow()
    //set the tweet to be a div with class "user"
    const $tweet = $(`<div id=${tweet.user} class="user"></div>`);
    //set a variable to text content of the username and message
    const text = `@${tweet.user}: ${tweet.message}`; //this part will also change, something about being clickable
    //add this text to the tweet div
    $tweet.text(text); //we will add a timestamp to this
    //set up a variable equal to a div containing the time posted
    
    const $timePosted = $(`<div id="${frozenMoment}" class="time"> ${frozenMoment.format('MMMM Do YYYY, h:mm:ss a')}</div>`) 
    const $timeAgo = $(`<div id=${x} class="timeAgo"> ${timeAgo}</div>`)
    //append that div to the tweet div
    $timeAgo.appendTo($tweet);
    $tweet.prepend($timePosted);
    //create a function that compares the time
    
    //return the tweet value
    return $tweet;
    });

  //append the tweets to the tweet section
  $section.prepend($tweets[Math.floor(Math.random() * $tweets.length)]);
  //update how long it has been
    
    ///place click handler inside of the createTweets
    $('.user').click( function () {
      //emptythe previous section
      //$section.empty();
      //create a new section for the user
      //$userSection = $('<section id="userTweetsSection"></section>')
      //assign a variable to the id that was clicked
      theUser = $(this).attr('id')
      $(`#${theUser}`).siblings().empty();
      iWasClicked = true;
      homePage = streams.users[theUser];
      createTweets(homePage);
      //assign a variable to the return value of the mapped array of objects
      //const $clickedTweets = streams.users[theUser].map((tweet) => {
      //const $tweet = $(`<div id=${tweet.user} class="user"></div>`);
      //const text = `@${tweet.user}: ${tweet.message} ${moment().toString()}`; //this part will also change, something about being clickable
      //$tweet.text(text); //we will add a timestamp to this
      //return $tweet;
      //});
    //$div.append($userSection);
    //$section.append($clickedTweets)
   })

  };
 ///parameter is needed to determine how the fuunction will map
  ///NOTE: click handler will accept the username version
setInterval(createTweets, 3000); //for now this is cool

setInterval( function(){
  console.log('fml')
  $('.timeAgo').each( function checkX() {
  if(Number($(this).attr('id')) <= 0){
    $(this).text(frozenMoment1.fromNow())
    $(this).attr('id', '60');
  } else {
    $(this).attr('id', Number($(this).attr('id')) - 1);
  }
  console.log(Number($(this).attr('id')))
}) 
}, 1000)

///set it up with nested if statements
///anonymous function will be needed to handle the updated conditions

});
