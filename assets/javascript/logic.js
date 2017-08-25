$( document ).ready(function() {
        console.log( "document loaded" );
    });


window.onload = function() {
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};

var ansCorrect  = 0
var ansIncorrect = 0
var unAnswered = 0
var numWrong = 0
var numRight = 0
var countDown = setTimeout(funciton(), 30000)
var clockRunning = false;
var timeLeft = setTimeout(function(){alert("GameStart")}, 30000);
var stopwatch = {
  time: 0,
  reset: function(){
      stowatch.time = 0;
      $("display").html("00:00");
  },
  stop: function(){
    clearInterval(intervalID);
    clockRunning = false;
  },
}




    $( window ).on( "load", function() {
        console.log( "window loaded" );
    });

    $("#timeLeft").text("<div>" + timeLeft + "</div>")



//time counter
//timeOut
