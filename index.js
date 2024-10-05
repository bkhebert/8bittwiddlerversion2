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
$styleRequest1 = $('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Silkscreen"></link>')
  
$(document).ready(() => {

  $('head').attr('id', 'head');
  //import a font
  $styleRequest = $('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Silkscreen"></link>')
  $('#head').append($styleRequest1)
  //declare a variable for the user
  let theUser;
  //initialize variable x to 60 (this will be used for time)
  let x = 60
  //get a snapshot of the current moment in time outside the ready function 
  const frozenMoment1 = moment(now1.toString())
  //create a body
  const $body = $('body');
  //initialize a click variable to false
  let iWasClicked = false;
  //initialize a variable to undefined
  let homePage = undefined;
  $body.html('');
  //create a header for the logo
  $logo = $('<h1 id="logo"></h1>')

  //make its text content say "twiddler"
  .text("8-bit Twiddler")
  .css('color', 'purple')
  .css({ background: "-webkit-gradient(linear, left top, left bottom, from(#3CA125), to(rgb(255, 247, 0)))" })
  
  //initialize a variable to a section for tweets
  $section = $('<section id="Tweets Section"></section>');
  //initialize a variable to a div for tweets
  $div = $('<div id=Tweets Div></div>')
   //places logo at the top
  $body.prepend($logo);
  //give body an id
  $body.attr('id', "body");
  //create backgroudn image
  $('#body').css('background-image', 'url(//f4.bcbits.com/img/0013829762_130.jpg)');
  //places section into the body at the bottom
  $body.append($section) 
  //places the section into the div
  $section.appendTo($div) 
  //has the body place the div at the bottom
  $body.append($div) 
  //call the function to create tweets
  $body.prepend($styleRequest)
  createTweets()
  
    function createTweets(array) {
      //initialize a variable to now
      const now = moment();
      //get a snapshot of time from within the function
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
      const $tweet = $(`<div id=${tweet.user} class="user" style="font-family: Silkscreen; width:800px; margin:0 auto;" ></div>`);
      //set a variable to text content of the username and message
      const $divText = $(`<div id="message&user"><strong>@${tweet.user}:</strong> ${tweet.message}></div>`); //this part will also change, something about being clickable
      //add this text to the tweet div
      $tweet.append($divText); //we will add a timestamp to this
      
      //set up a variable equal to a div containing the time posted
      const $timePosted = $(`<div id="${frozenMoment}" class="time"> ${frozenMoment.format('MMMM Do YYYY, h:mm:ss a')}</div>`) 
      //set up variable equal to div of how long ago its been posted. set id to variable x
      const $timeAgo = $(`<div id=${x} class="timeAgo" style="font-family: Silkscreen;"> ${timeAgo}</div>`)
      //append that div to the tweet div
      $timeAgo.appendTo($tweet);
      //prepend the div time posted to the tweet div
      $tweet.prepend($timePosted);
      //return the tweet value
      //give the tweet style
      $tweet.css("color", "yellow")
      $tweet.css("border-style", 'outset');
      $tweet.css("border-color", "purple")
      $tweet.css("background-color", "blue")
      $timeAgo.css("font-size", "14px")
      $divText.css("font-size", "15px")
      $timePosted.css("font-size", "10")
      $timeAgo.css({"font-style": "italic"})
      $tweet.width(600);
      $tweet.height(100);
    
      //$timePosted.css('float', 'left')
      
      
      return $tweet;
    });

  //append the tweets to the tweet section
  $section.prepend($tweets[Math.floor(Math.random() * $tweets.length)]);
    //create a click event handling function for when a class user is clicked
    $('.user').click( function () {
      //reassign theUser variable to this objects id tag
      theUser = $(this).attr('id')
      //destroy all divs that do not have that users id
      $(`#${theUser}`).siblings().remove();
      //change the clicked variable to true
      iWasClicked = true;
      //remove the ability to create new tweets
      $("#newPostsSection").remove();
      //reassign the homePage to point to the proper array
      homePage = streams.users[theUser];
      //call the create tweets function, passing in the homePage array
      createTweets(homePage);
    })
  };
//set up created tweets to appear every few seconds
setInterval(createTweets, 4000); //for now this is cool
  //this setInterval function will be how we keep track of time
  setInterval( function(){
    //check to see if function is triggering and this will help tell when it resets
    console.log('fml')
      //all tags with class "timeAgo" will be passed into an each function that will check their id(the variable x from earlier) value
      $('.timeAgo').each( function checkX() {

        //if the id for this tag, when converted to a number, is less than or equal to zero
        if(Number($(this).attr('id')) <= 0){
          //it must mean that a minute has passed. so we are going to update the current text element to reflect how long ago it was posted
          $(this).text(frozenMoment1.fromNow())
          //then reset this tags id to 60, which restarts the clock
          $(this).attr('id', '60');
        //if a minute has NOT passed  
        } else {
          //decrease the id variable by 1
          $(this).attr('id', Number($(this).attr('id')) - 1);
        }

        //double check variable to ensure it is decreasing and the reference is correct
        console.log(Number($(this).attr('id')))
      })
  //have this setInterval function run every second. 
  }, 1000)
  //create a container for the new section that will take in posts
  $newPostsSection = ('<section id="newPostsSection"  class="newposts" ></section>');
  $("<br>").appendTo($newPostsSection);
  //pass this section into the post-maker section
  postMaker($newPostsSection)
  //create the function that will take sections for the posts and add them to the top
  //NOTE: All new posts will be forms prepended to the $div for tweets
  function postMaker(sectionForPosts) {
    //assign a jquery variable to the parameter taken in
    const $container = $(sectionForPosts);
    //create a form tag is used to collect information a user provides
    const $form = $("<form>").appendTo($container);
    //the <label> tag is used to create a label for where the username will go
    $labelUserName = $("<label for='postTitle' style='font-family: Silkscreen;'>8-bit UserName:</label>")
    $labelUserName.appendTo($form);
    //use the <input> tag to create an area to put the username, append it to the form
    $inputUserName = $("<input type='text' id='UserInput' name='title' style='font-family: Silkscreen;'>")
    $inputUserName.appendTo($form);
    //use the <br> tag for a line break and append it to the form
    $("<br>").appendTo($form);
    //we prepend this container to the top of the $div section for tweets
    $div.prepend($container)
    $("<br>").appendTo($labelUserName)
    
    //the label tag is used to label a part of a form, here we label a part twiit
    $labelContent = $("<label for='postContent' style='font-family: Silkscreen;'>8-bit Twidd:</label>")
    $labelContent.appendTo($form);
    $("<br>").appendTo($labelContent)
    //the <textarea> tag creates a multi-line plain text editing area
    $textAreaContent = $("<textarea id='postContent' name='content' style='font-family: Silkscreen;'></textarea>")
    $textAreaContent.appendTo($form);
    //the <br> tag is to create a line break without creating a new paragraph
    $("<br>").appendTo($form);

    //create a button
    $button = $("<button type='submit'>Twiit It Baby!</button>")
    //append the button to the form
    $button.appendTo($form);
    //$button.css("text-align", "center")
    $container.css('color', 'yellow')
    $container.css("border-style", 'outset');
    $container.css("border-color", "purple")
    $container.css("background-color", "blue")
    $container.width(300);
    $container.height(150);
    $container.css({
      "margin-left": "auto",
      "margin-right": "auto"
    })
    $button.css('background-color', 'green')
    $textAreaContent.css('color', 'white')
    $textAreaContent.css('background-color', 'black')
    $textAreaContent.parent().css("text-align", "center");
    $inputUserName.css('color', 'white')
    $inputUserName.css('background-color', 'black')
    
    // this function prevents the form from refreshing the page, when the submit button is pushed
    $form.submit(function(event) {
      //it prevents the page from refreshing
      event.preventDefault();
    });

    //whenever the button is clicked
    $button.on('click', () => {
      //initialize a variable to the tag with id UserInput's value
      const title = $("#UserInput").val();
      //initialize a variable to the tag with id postContent's value
      const content = $("#postContent").val();
      //let newArr = [{ user: "", message: ""}] // do we need a new array?
      //check to see if it is registering the clicks 
      console.log("CLICKED")
      //assign a new users object key of title variable, and value of an array object with 2 key value pairs
      //the key value pairs hold the users key with value of title
      //and a message key with the value of the content
      streams.users[title] = [{ user: title, message: content}]
      //call the create tweets function passing in this value
      createTweets(streams.users[title]);
      //delete the created object
      delete streams.users[title]
    })

    //styling the button
    
  }

});
