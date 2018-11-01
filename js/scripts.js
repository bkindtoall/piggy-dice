//Buisness Logic For Dice Roll -----
var player1= [];
var player2= [];
//var counter = 0;

// var roll = function(){
//   var randomNumber = Math.floor(6*Math.random());
//       //counter++;
//       return randomNumber;
//       console.log(roll);
// }

var diceResult = function(num) {
  var dice = Math.floor(Math.random() * 6 +1);
  return dice;
}


// //Buisness Logic For Player Options----
// function Players (turn){
//   this.playername = " ";
//   this.roll = 0;
//   this.tempscore = 0;
//   this.totalscore = 0;
//   this.turn = turn;
// }
//
// // Rolling a One----
// Players.prototype.rollone = function (){
//   if (this.roll === 1) {
//     this.tempscore = 0
//     alert ("Sorry" + this.playername + "you rolled a One, Next Player turn")
//   } else {
//     this.tempscore += this.roll
//   }
// }
//
// // Player Chooses to Hold --
// Players.prototype.hold = function (){
//   this.tempscore = this.totalscore;
//   this.totalscore = 0;
//   alert (this.playername + "Smart Choice!")
// }
//
// // Score 100 to win --
// Players.prototype.scoreboard = function (){
//   if (this.totalscore >= 100){
//     alert ("Congratulation,"+ this.playername + "Roasted Pig for Dinner!")
//   }
// }
//
// //New Game --
// Players.prototype.newgame= function (){
//   this.playername = " ";
//   this.roll = 0;
//   this.tempscore = 0;
//   this.totalscore = 0;
// }
//

var diceRoll2 = 0;
var diceRoll1 = 0;
var currentTotal1 = 0;
var currentTotal2 = 0;

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
     } else if (diceRoll1 > 1 ){
       currentTotal1 += diceRoll1;
       $("#player1RunningScore").html(currentTotal1);
     }
       if (currentTotal1 >= 10 ){
       $("#player1RunningScore").html("WINNER!")
     }
    });

//Dice Roller 2 ---
    $("#diceRoller2").click(function() {
       diceRoll2= diceResult();
       $("#diceResult2").html("<img src='img/" +diceRoll2 + ".jpg'>");
       $('#round-total2').text("Die 2 total=  " + diceRoll2);
       if (diceRoll2 === 1) {
         currentTotal2 = 0;
         $("#player2RunningScore").html("You rolled a one, your turn is over")
       } else if (diceRoll2 > 1) {
         currentTotal2 = diceRoll2 + currentTotal2;
         $("#player2RunningScore").html(currentTotal2);
       }

       if (currentTotal2 >= 10 ){
       $("#player2RunningScore").html("WINNER!")
     }
    });


//input name --
    $("form#name").submit(function(event) {
        event.preventDefault();
        var inputtedPlayerOne =$("input#name1").val();
        var inputtedPlayerTwo=$("input#name2").val();
        $("#name1").val("");
        $("#name2").val("");
        $(".output1").text(inputtedPlayerOne);
        $(".output2").text(inputtedPlayerTwo);
        $(".playerInfo").show();
        $(".players").hide();
        $(".container").show();
      });

  });

    // var playerNames = new Player (inputtedPlayerOne, inputtedPlayerTwo);
    // console.log(player);
