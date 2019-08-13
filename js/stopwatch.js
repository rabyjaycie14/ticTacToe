// Jaycie Raby
//Professor Baugh CIS 435 Project 2
//November 11th, 2018

var dateTime_begin;
var count_time = 0;
var beginTimer;

function setTimer(stop_time){
  if(count_time === 0){ //set interval on first iteratin of function
    dateTime_begin = new Date().getTime(); //get date/time of right now in ms
    beginTimer = setInterval(startTimer, 1000); //call interval every 1s
  }
  if(stop_time === true){ //if setTimer receives a true response
    clearInterval(beginTimer); //clear interval, stop timer
  }
  count_time++;
}

function startTimer(){
  var now = new Date().getTime(); //get date/time now
  var diff_time= now - dateTime_begin; //start incrementing in seconds from current time
  var minutes = Math.floor((diff_time % (1000 * 60 * 60)) / (1000 * 60)); //set minutes
  var seconds = Math.floor((diff_time % (1000 * 60)) / 1000); //set seconds
  document.getElementById("minute").innerHTML = minutes; //display
  document.getElementById("second").innerHTML = seconds; //display
}
