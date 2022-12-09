console.log("reply starting");
var Twit = require('twit');
// construct twit obj
var config= require('./config.js');
var T = new Twit (config);
var stream = T.stream('statuses/filter', { track: '@<jeremyr87286257>' });
var recipe = Math.floor(Math.random(10));
var url = "http://www.recipepuppy.com/api/"; // api request
setInterval(gotData ,60*60*1000*24); // interval is set to daily posts

const request = require('request');

request(url, gotData);
var counter = 1;

function gotData(error, response, body){
  var data = JSON.parse(body);
  var tweet ="Daily recipe Motivation, Day "+counter+": "+ data.results[recipe].title+", a recipe can be found here: "+ data.results[recipe].href;
  T.post('statuses/update', {status:tweet}, tweeted);
  function tweeted(error, data){
    if(error){
      console.log(error);

    }else{
      console.log("You're doing great! "+data.text);
      counter++;
    }
  }
}

//replier bot attempt here:
//setInterval(botTweet, 60 * 5*1000);
// Setting up a user stream
//stream.on('tweet', tweetEvent);
//function tweetEvent(tweet) {

  // If we wanted to write a file out
  // to look more closely at the data
  //var fs = require('fs');
  //var json = JSON.stringify(tweet,null,2);
  //fs.writeFile("tweet.json", json, output);
  //console.log("we did it!")
//}


function tweeted(error, data){
  if(error){
    console.log(error);
  }else{
    console.log("You're doing great! "+data.text);
  }
}
