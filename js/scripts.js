//Buisness Logic For Dice Roll -----
var player1= [];
var player2= [];

var diceResult = function(num) {
  var dice = Math.floor(Math.random() * 6 +1);
  return dice;
}


var diceRoll2 = 0;
var diceRoll1 = 0;
var currentTotal1 = 0;
var currentTotal2 = 0;
var tempHold1 = []

//User Interface Logic --
$(document).ready(function() {
  //Dice Roller 1 ---
  $("#diceRoller1").click(function() {
    diceRoll1 = diceResult();
    $("#diceResult1").html("<img src='img/" +diceRoll1 + ".jpg'>");
    $('#round-total1').text("Die 1 total=  " + diceRoll1);
    if (diceRoll1 === 1) {
      currentTotal1 = 0;
      $("#player1RunningScore").html("You rolled a one, your turn is over")
      $("#player1RunningScore").css("color", "red");
    } else if (diceRoll1 > 1 ){
      currentTotal1 += diceRoll1;
      $("#player1RunningScore").html("Your current total is:" + currentTotal1);
      $("#player1RunningScore").css("color", "blue");
    }
    if (currentTotal1 >= 30 ){
      $("#player1RunningScore").html("WINNER!")
      $("#player1RunningScore").css("color", "black");
      alert("WINNER!");
    }
  });
  $("#player1-hold").click(function() {
    $("#hold1").html("Your hold balance is " + currentTotal1);
  });


  //Dice Roller 2 ---
  $("#diceRoller2").click(function() {
    diceRoll2= diceResult();
    $("#diceResult2").html("<img src='img/" +diceRoll2 + ".jpg'>");
    $('#round-total2').text("Die 2 total=  " + diceRoll2);
    if (diceRoll2 === 1) {
      currentTotal2 = 0;
      $("#player2RunningScore").html("You rolled a one, your turn is over")
      $("#player2RunningScore").css("color", "red");
    } else if (diceRoll2 > 1) {
      currentTotal2 = diceRoll2 + currentTotal2;
      $("#player2RunningScore").html("Your current total is:" + currentTotal2);
      $("#player2RunningScore").css("color", "blue");

    }
    if (currentTotal2 >= 30 ){
      $("#player2RunningScore").html("WINNER!")
      $("#player2RunningScore").css("color", "black");
      alert("WINNER!");
    }
    $("#player2-hold").click(function() {
      $("#hold2").html("Your hold balance is " + currentTotal2);
    });

  });


  //input name --
  $("form#name").submit(function(event) {
    event.preventDefault();
    var inputtedPlayerOne =$("input#name1").val();
    var inputtedPlayerTwo=$("input#name2").val();
    // $("#name1").val("");
    // $("#name2").val("");
    $(".output1").text(inputtedPlayerOne);
    $(".output2").text(inputtedPlayerTwo);
    $(".playerInfo").show();
    $(".players").hide();
    $(".container").show();
  });

});

// var playerNames = new Player (inputtedPlayerOne, inputtedPlayerTwo);
// console.log(player);
