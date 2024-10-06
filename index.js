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
   const $body = $('body');
  $body.html('');
  //give body an id
  $body.attr('id', "body");
  let eotw = 0;
  //creating a colors array for traversal later
  let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
  //setting the color index to 0 for now
  let colorIndex = 0;
  //initialize variable for when [REDACTED] is pushed
  let redactedWasPushed = 0;
  //initialize an array of memes for users to randomly post
  let arrayOfMemes = [
    "memes/meme1.jpeg", 
    "memes/meme2.jpeg", 
    "memes/meme3.jpeg", 
    "memes/meme4.jpg",  
    "memes/meme5.jpg", 
    "memes/meme6.jpeg", 
    "memes/meme7.jpeg",
    "memes/meme8.jpg", 
    "memes/meme9.png", 
    "memes/meme11.png", 
    "memes/meme10.jpeg",
    "memes/meme12.jpeg", 
  ]
  //create a shallow copy of the array 
  let backupArray = arrayOfMemes.slice();
  //give the head an ID
  $('head').attr('id', 'head');
  //import a font using a link tag
  $styleRequest = $('<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Silkscreen"></link>')
  //append this to the head
  $('#head').append($styleRequest1)
  //declare a variable for the user
  let theUser;
  //initialize variable x to 60 (this will be used for time)
  let x = 60
  //get a snapshot of the current moment in time outside the ready function 
  const frozenMoment1 = moment(now1.toString())
  //initialize a click variable to false
  let iWasClicked = false;
  //initialize a homePage variable to undefined, this will be given value if a name is clicked, then passed into the createTweets() function
  let homePage = undefined;
  //create a container for the new section that will take in new posts
  $newPostsSection = ('<section id="newPostsSection"  class="newposts" ></section>');
  //initialize a variable to a section for tweets
  $section = $('<section id="Tweets Section"></section>');
  //initialize a variable to a div for tweets
  $div = $('<div id=Tweets Div></div>')
  //create a header for the logo with the silkscreen font
  $logo = $('<h1 id="logo" style="font-family: Silkscreen;"></h1>')
  //make its text content say "twiddler"
  .text("8-bit Twiddler")
  //add stylings to logo
  .css('color', 'rgb(114, 0, 140)')
  .css({ background: "-webkit-gradient(linear, left top, left bottom, from(#3CA125), to(rgb(255, 247, 0)))" })
  .css("font-size", "60px")
  .css("text-align", "center")
  .css('border-style', 'groove')
  .css('border-color', 'black')
  //places logo at the top
  $body.prepend($logo);
  //create backgroudn image
  $('#body').css('background-image', 'url(//f4.bcbits.com/img/0013829762_130.jpg)');
  //places the section into the div
  $section.appendTo($div) 
  //has the body place the div at the bottom
  $body.append($div) 
  //call the createTWEETS FUNCTION so the page already has at least 1 post when loaded
  createTweets()

    function createTweets(array) {
      //initialize a variable to now
      const now = moment();
      //get a snapshot of time from within the function
      const frozenMoment = moment(now.toString());
    
        //if the array input array is undefined
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
        const $tweet = $(`<div id=${tweet.user} class="user" style="font-family: Silkscreen; width:1000px; margin:0 auto;" ></div>`);
        //set a variable to text content of the username and message
        const $divText = $(`<div id="message&user" class="divTEXT"><strong>@${tweet.user}:</strong> ${tweet.message}></div>`); //this part will also change, something about being clickable
        //add this text to the tweet div
        $tweet.append($divText);
        //set up a variable equal to a div containing the time posted
        const $timePosted = $(`<div id="${frozenMoment}" class="time"> ${frozenMoment.format('MMMM Do YYYY, h:mm:ss a')}</div>`) 
        //set up variable equal to div of how long ago its been posted. set id to variable x
        const $timeAgo = $(`<div id=${x} class="timeAgo" style="font-family: Silkscreen;"> ${timeAgo}</div>`)
        //append that div to the tweet div
        $timeAgo.appendTo($tweet);
        //prepend the div time posted to the tweet div
        $tweet.prepend($timePosted);
        //add stylings to the tweet, and all text for it's children
        $divText.css("font-size", "18px")
        $timePosted.css("font-size", "7")
        $timeAgo.css("font-size", "14px")
        .css({"font-style": "italic"})
        $tweet.height(100);
        $tweet.css("color", "yellow")
        .css("border-style", 'outset')
        .css("border-color", "rgb(114, 0, 140)")
        .css('border-width','8px')
        .css("background-color", "rgb(0, 2, 140)")
        .width(600);
        
        
        
          //this if statement will randomly be triggered if the random number generated is even
          if(Math.floor((Math.random() * arrayOfMemes.length ) % 2 === 0 ) || redactedWasPushed > 4){
            //create a section for the memes, where the source will be randomly generated
            $theMeme = $(`<img id="theImg" src="${arrayOfMemes[Math.floor(Math.random() * arrayOfMemes.length )]}" />`)
            //set a height limit for the meme
            .css("max-height", "300px")
            //the tweet will append the meme
            $tweet.append($theMeme)  
            //adjust height of the tweet to fit the meme
            $tweet.height(400);
            //style the meme image
            $theMeme.css('border-style', 'groove')    
          }
          return $tweet;   
      });
   
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
      });
    
    //append random tweets to the tweet section
    $section.prepend($tweets[Math.floor(Math.random() * $tweets.length)]);

  };

  //set up created tweets to appear every few seconds
  setInterval(createTweets, 5000); //for now this is cool
    //this setInterval function will be how we keep track of time
    setInterval( function(){
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
      })
    //have this setInterval function run every second. 
    }, 1000)
  
  //pass the newPostsSection into the post-maker function
  postMaker($newPostsSection)
    //create the function that will take sections for the posts and add them to the top
    //NOTE: All new posts will be forms prepended to the $div for tweets
    function postMaker(sectionForPosts) {
      //assign a jquery variable to the parameter taken in
      const $container = $(sectionForPosts);
      //create a form tag is used to collect information a user provides
      const $form = $("<form id:'form'>").appendTo($container);
      //use the <input> tag to create an area to put the username, append it to the form
      $inputUserName = $("<input type='text' id='UserInput' name='title' style='font-family: Silkscreen;'>")
      //create a button
      $button = $("<button type='submit' class='twiitit'>Twiit It Baby!</button>")
      //the <textarea> tag creates a multi-line plain text editing area
      $textAreaContent = $("<textarea id='postContent' name='content' style='font-family: Silkscreen;'></textarea>")
      //the label tag is used to label a part of a form, here we label a part twiit
      $labelContent = $("<label for='postContent' style='font-family: Silkscreen;'>8-bit Twidd:</label>")
      //the <label> tag is used to create a label for where the username will go
      $labelUserName = $("<label for='postTitle' style='font-family: Silkscreen;'>8-bit UserName:</label>")
      //append it to the form
      $labelUserName.appendTo($form);
      //append it to form
      $inputUserName.appendTo($form);
      //use the <br> tag for a line break and append it to the form
      $("<br>").appendTo($form);
      //we prepend this container to the top of the $div section for tweets
      $div.prepend($container)
      //add label to the form
      $labelContent.appendTo($form);
      //append text area to form
      $textAreaContent.appendTo($form);
      //append the button to the form
      $button.appendTo($form);
      //style the container and it's children
      $container.css('color', 'yellow')
      .css("border-style", 'outset')
      .css("border-color", "rgb(114, 0, 140)")
      .css("background-color", "rgb(0, 2, 140)")
      .css('border-width','20px')
      .width(300)
      .height(150)
      .css({
      "margin-left": "auto",
      "margin-right": "auto"
      })
      $button.css('background-color', 'rgb(0, 255, 0)')
      $textAreaContent.css('color', 'white')
      .css('background-color', 'black')
      $textAreaContent.parent().css("text-align", "center");
      $inputUserName.css('color', 'white')
      .css('background-color', 'black')
      //create a div
      $divForm = $('<div id="divForm>')
      //append it to the container
      $divForm.appendTo($container)
        
      //this function prevents the form from refreshing the page, when the submit button is pushed
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
          //assign a new users object key of title variable, and value of an array object with 2 key value pairs
          //the key value pairs hold the users key with value of title
          //and a message key with the value of the content
          streams.users[title] = [{ user: title, message: content}]
          //call the create tweets function passing in this value
          createTweets(streams.users[title]);
          //delete the created object
          delete streams.users[title]
        });
    }

 //i want to add music to my page to encourage engagement from the visitor, so i created an audio tag
 $musicPlayer = $(`<audio id="myAudio" style="width:600px; height:18px; margin:0 auto;" controls><source src="8bitjingle2.mp3" type="audio/mpeg"></audio>`);
  //the song will be updated weekly, so i am adding a header to announce that
  $musicOfWeek =  $('<h6 id="SOTW" style="font-family: Silkscreen;"></h6>')
  //adding some styling to this header
  .text("8-bit Song Of The Week: ")
  .css('color', 'rgb(255, 255, 0)')
  .css({ background: "-webkit-gradient(linear, bottom, top, from(#3CA125), to(rgb(255, 247, 0)))" })
  .css("text-align", "left")
  .css('font-size', '20px')
  .css('background-color', 'black')
  //i place this tag on the page anywhere that doesn't move, in this case, the bottom of the logo
  $musicOfWeek.appendTo($logo)
  //and append the musicplayer to it
  $musicOfWeek.append($musicPlayer)
    //and use css to position it
    $musicOfWeek.css({
      //setting position to fixed allows it to stay while scrolling
      "position": "fixed", 
      //setting this key to 0 places it at the bottom
      "bottom": "0"  
    });
  
  //this set interval function will rotate through the colors array
  setInterval(function() {
    //assign the color to the index in the array
    $musicOfWeek.css("color", colors[colorIndex]);
    //reassign the index to equal the remainder of the next index divided by the length of the array
    colorIndex = (colorIndex + 1) % colors.length;
    //every half second it will flash to engage the users interest
    }, 500);
  

  //i want the site to be more entertaining, so we are going to add some buttons that 
  //reflect different themes for the user to interact with. Each button will temporarily
  //change the page's look and style, some may even tell a story.
  $enterTheMatrix = $('<button id="enterTheMatrix" class="extraCredit">Enter The Matrix</button>');
  $vaporWave = $('<button id="vaporWave" class="extraCredit">VaporWave</button>');
  $alien = $('<button id="alien" class="extraCredit">Alien</button>');
  $psychedelic = $('<button id="psychedelic" class="extraCredit">psychedelic</button>');
  $breakThisSite = $('<button id="breakThisSite" class="extraCredit">[REDACTED]</button>');
  $enterTheMatrix.prependTo($body);
  $vaporWave.prependTo($body);
  $alien.prependTo($body);
  $psychedelic.prependTo($body);
  $breakThisSite.prependTo($body);


  //all buttons have the class of extraCredit because this was unnecessary
  $('.extraCredit').click( function () {
    //reassign theUser variable to this objects id tag
    buttonId = $(this).attr('id') 
      if(buttonId === "enterTheMatrix"){
        //add an easter egg for developers
        console.log('Neo, is that you?')
        //restyle the page
        $logo.css('color', '#D1FFD3')
        .css('border-color', 'black')
        $('.user').css('color', '#D1FFD3')
        .css('border-color', '#D1FFD3')
        .css('border-width', '22px')
        .css('background-color', 'black')
        $('.newposts').css('color', '#D1FFD3')
        .css('border-color', 'black')
        .css('background-color', 'black')
        $('.twiitit').css('background-color', '#D1FFD3')
        $('#body').css('background-image', 'url(https://wallpapercave.com/wp/wkNeAp0.jpg)')
        //clean the array and add new memes
        arrayOfMemes.length = 0;
        arrayOfMemes.push(
          "imageFolder/mat1.jpg",
          "imageFolder/mat2.jpg",
          "imageFolder/mat3.jpg",
        )
      }
      //same drill for vaporwave
      if(buttonId === "vaporWave"){
        $logo.css('color', '#FF00CD')
        .css('border-color', '#FFF700')
        $('.user').css('color', '#FF00CD')
        .css('border-color', '#00D5FF')
        .css('border-width', 'px')
        .css('background-color', '#3300FF')
        $('.newposts').css('color', '#CC66FF')
        .css('border-color', '#00FFFF')
        .css('background-color', '#3300FF')
        $('.twiitit').css('background-color', '#FF00FF')
        $('#body').css('background-image', 'url(https://images.squarespace-cdn.com/content/v1/5bd7707c11f7847c45b4b9dd/8317acb7-03da-4943-99b8-7b9ff3bdfa96/c5c24cde-4cf9-4bd3-b56b-84cff46b1276.jpg)')
        arrayOfMemes.length = 0;
        arrayOfMemes.push(
          "imageFolder/vwave1.jpg",
          "imageFolder/vwave2.jpg",
          "imageFolder/vwave3.jpg",
          "imageFolder/vwave4.jpg",
        )
      }
      //same drill for alien
      if(buttonId === "alien"){
        $logo.css('color', '#57A264')
        .css('border-color', '#94913C')
        $('.user').css('color', '#57A264')
        .css('border-color', '#94913C')
        .css('border-width', '22px')
        .css('background-color', 'black')
        $('.newposts').css('color', '#57A264')
        .css('border-color', '#94913C')
        .css('background-color', 'black')
        $('.twiitit').css('background-color', '#57A264')
        $('#body').css('background-image', 'url(https://cdna.artstation.com/p/assets/images/images/067/689/122/large/daniel-garcia-espinoza-aliencommandsroom-main-cameraa-aces-6.jpg)')
        arrayOfMemes.length = 0;
        arrayOfMemes.push(
          "imageFolder/alien1.jpg",
          "imageFolder/alien3.jpg",
          "imageFolder/alien4.jpg",
          "imageFolder/alien5.jpg",
          "imageFolder/alien6.jpg",
          "imageFolder/alien7.jpg",
          "imageFolder/alien8.jpg",
        )
      }
      //same drill for psychedelic
      if(buttonId === "psychedelic"){
        //these extra variables help ensure the page doesnt have random colors flashing
        //to the point of disgust
        let timesRun = 0;
        let interval = setInterval(function() {  
          timesRun = timesRun + 1;
          if(timesRun === 150){
            clearInterval(interval)
          }
          $musicOfWeek.css("color", colors[Math.floor(Math.random() * colors.length)]);
          $logo.css('color', colors[Math.floor(Math.random() * colors.length)])
        .css('border-color', colors[Math.floor(Math.random() * colors.length)])
        $('.user').css('color', colors[Math.floor(Math.random() * colors.length)])
        .css('border-color', colors[Math.floor(Math.random() * colors.length)])
        .css('border-width', `${Math.floor(Math.random() * 30).toString() + 'px'}`)
        .css('background-color', colors[Math.floor(Math.random() * colors.length)])
        $('.newposts').css('color', colors[Math.floor(Math.random() * colors.length)])
        .css('border-color', colors[Math.floor(Math.random() * colors.length)])
        .css('background-color', colors[Math.floor(Math.random() * colors.length)])
        $('.twiitit').css('background-color', colors[Math.floor(Math.random() * colors.length)])
        $('#body').css('background-image', 'url(https://www.tmc.edu/news/wp-content/uploads/sites/2/2020/01/wallpaper-2767134_1280.png)');
        }, 10);
        //add Albert Camus to the meme list
        arrayOfMemes.length = 0;
        backupArray.forEach((meme) => { arrayOfMemes.push(meme) });
        arrayOfMemes.push(
          "imageFolder/broken1.jpg",
        )
      }
      
      //if the user wants to break the site
      if(buttonId === "breakThisSite"){
        //increment the variable
        redactedWasPushed++;
        console.log(redactedWasPushed)
        //first time no biggie
        if(redactedWasPushed > 0){
        streams.users["[REDACTED]"] = [{ user: "[REDACTED]", message: "[REDACTED]"}]
        createTweets(streams.users["[REDACTED]"]);
        arrayOfMemes.push(
          "imageFolder/broken2.jpg",
        )
        }
        //second time gets a warning
        if(redactedWasPushed > 4){
        streams.users["AGENT"] = [{ user: "[REDACTED]", message: "do not push [REDACTED] again"}]
        arrayOfMemes.length = 0;
        arrayOfMemes.push(
          "imageFolder/broken2.jpg",
        )
        createTweets(streams.users.AGENT)
        }
        //third time gets a harsher warning
        if(redactedWasPushed > 15){
          streams.users["SCPAGENT"] = [{ user: "[REDACTED]", message: "If you keep pushing [REDACTED], you will be sorry"}]
          createTweets(streams.users["SCPAGENT"])
        }
        if(redactedWasPushed > 20){
          streams.users["SCPAGENT1"] = [{ user: "[REDACTED]", message: "YOU WILL BREAK OUR UNIVERSE IF U KEEP PUSHING [REDACTED]"}]
          createTweets(streams.users["SCPAGENT1"]);
        }
        if(redactedWasPushed > 30){
          streams.users["SCPAGENT1"] = [{ user: "[REDACTED]", message: "SCP-[REDACTED] is now released. IT is coming to get you"}]
          createTweets(streams.users["SCPAGENT1"]);
          $logo.css('color', 'white')
          .css('border-color', 'white')
          $('.user').css('color', 'white')
          .css('border-color', 'white')
          .css('border-width', '30px')
          .css('background-color', 'black')
          .css('font-size', '23px')
          $('.newposts').css('color', 'white')
          .css('border-color', 'white')
          .css('background-color', 'black')
          $('.twiitit').css('background-color', 'black')
          $('#body').css('background-image', 'url(https://upload.wikimedia.org/wikipedia/commons/4/49/A_black_image.jpg)')
          
          //add SCP 97 TO MEME
          arrayOfMemes.push(
            "imageFolder/broken3.jpg",
          )
        }
        if(redactedWasPushed > 55){
          streams.users["SCPAGENT2"] = [{ user: "[R3DAC73D]", message: "awe[REDACTED]fawefaagehsthrsjr[REDACTED]yjdyjfdgh[REDACTED]6253465451325103[REDACTED]54350000110510510 5610533w54"}]
          createTweets(streams.users["SCPAGENT2"]);
        }
        //break the page
        if(redactedWasPushed > 60){
          streams.users["SCPAGENT2"] = [{ user: "[R3DAC73D]", message: "awesacscscdff[REDACTED]fawefaagehsthrsjr[REDACTED]yjdyjfdgh[REDACTED]6253465451325103[REDACTED]54350000110510510 5610533w54"}]
          createTweets(streams.users["SCPAGENT2"]);
          setInterval(function() {  
            $musicOfWeek.css("color", colors[Math.floor(Math.random() * colors.length)]);
            $logo.css('color', colors[Math.floor(Math.random() * colors.length)])
          .css('border-color', colors[Math.floor(Math.random() * colors.length)])
          $('.user').css('color', colors[Math.floor(Math.random() * colors.length)])
          .css('border-color', colors[Math.floor(Math.random() * colors.length)])
          .css('border-width', `${Math.floor(Math.random() * 10).toString() + 'px'}`)
          .css('background-color', colors[Math.floor(Math.random() * colors.length)])
          .text('[REDACTED]')
          $('.newposts').css('color', colors[Math.floor(Math.random() * colors.length)])
          .css('border-color', colors[Math.floor(Math.random() * colors.length)])
          .css('background-color', colors[Math.floor(Math.random() * colors.length)])
          .css('border-width', `${Math.floor(Math.random() * 50).toString() + 'px'}` )
          $('.twiitit').css('background-color', colors[Math.floor(Math.random() * colors.length)])
          $('#body').css('background-image', 'url(https://i.redd.it/4pr23l3rauz51.jpg)');
          $('.divTEXT').css('font-size', `${Math.floor(Math.random() * 300).toString() + 'px'}`)
          $('.timeAgo').css('font-size', `${Math.floor(Math.random() * 300).toString() + 'px'}`)
          $('.time').css('font-size', `${Math.floor(Math.random() * 300).toString() + 'px'}`)
            eotw++
            if(eotw > 200){
              $body.empty()
            }
        }, 50);
        let arrayOfTags = [ $logo, $div, $('.divTEXT'), $('.timeAgo'), $('.time'), $('.timeAgo') ]
        let scramble = 0;
        let breakThePage = setInterval(function() {  
          scramble = scramble + 1;
          if(scramble === 3){
            clearInterval(breakThePage)
          }
            arrayOfTags[Math.floor(Math.random() * arrayOfTags.length)].prepend(arrayOfTags[Math.floor(Math.random() * arrayOfTags.length)])
          }, 500);
          arrayOfMemes.length = 0;
          backupArray.forEach((meme) => { arrayOfMemes.push(meme) });
        }
      
      //call the create tweets function passing in this value
      
    }
  })

});
