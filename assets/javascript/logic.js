$( document ).ready(function() {
        console.log( "document loaded" );
    });


window.onload = function() {
  // $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};

var qz = "https://opentdb.com/api.php?amount=1&type=multiple";


$.ajax({
  url: qz,
  method: "GET"
}).done(function(response) {
var question = [];
var len = response.results.length;

// var answers =
  // console.log(question);
  for(var i=0;i< len; i++){
    question.push(response.results[i].question);
    console.log(question);
  $(".questions").html(question);
  $(".answers").html( response.results[0].correct_answer);
   $(".answers").html("<br>" + response.results[0].incorrect_answers);

  //  $(".answers").click(function()
  //   $(".answers").html(response.results[0].incorrect_answers[1])
  //     $(".answers").html(response.results[0].incorrect_answers[2])
}
})
var unAnswered = 0
var numWrong = 0

var numRight = 0
// var countDown = setTimeout(funciton(), 30000)
var clockRunning = false;
// var timeLeft = setTimeout(function(){alert("GameStart")}, 30000);
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




    // $( window ).on( "load", function() {
    //     console.log( "window loaded" );
    // });
    //
    // // $("#timeLeft").text("<div>" + timeLeft + "</div>")
    // $("start").html("<div>" + qz +"<div>")


//time counter
//timeOut
