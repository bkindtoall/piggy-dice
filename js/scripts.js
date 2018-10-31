//Buisness Logic For Dice Roll -----
var player1= [];
var player2= [];
//var counter = 0;

var roll = function(){
  var randomNumber = Math.floor(6*Math.random());
      //counter++;
      return randomNumber;
      console.log(roll);
}

var button = document.getElementById('start');




//Buisness Logic For Player Options----
function Players (turn){
  this.playername = " ";
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
}

// Rolling a One----
Players.prototype.rollone = function (){
  if (this.roll === 1) {
    this.tempscore = 0
    alert ("Sorry" + this.playername + "you rolled a One, Next Player turn")
  } else {
    this.tempscore += this.roll
  }
}

// Player Chooses to Hold --
Players.prototype.hold = function (){
  this.tempscore = this.totalscore;
  this.totalscore = 0;
  alert (this.playername + "Smart Choice!")
}

// Score 100 to win --
Players.prototype.scoreboard = function (){
  if (this.totalscore >= 100){
    alert ("Congratulation,"+ this.playername + "Roasted Pig for Dinner!")
  }
}

//New Game --
Players.prototype.newgame= function (){
  this.playername = " ";
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
}


//User Interface Logic --
$(document).ready(function() {

  $("#start").click(function() {
    console.log("clicked");
    $("#start").html("<img src='img/face1.jpg'></img>");

    console.log(start);
  });

  $("form#name").submit(function(event) {
    event.preventDefault();
    var inputtedPlayerOne =$("input#name1").val();
  //  console.log(inputtedPlayerOne);
    var inputtedPlayerTwo=$("input#name2").val();
    $("#name1").val("");
    $("#name2").val("");
    $(".output1").text("Player 1: " + (inputtedPlayerOne));
    $(".output2").text("Player 2: " + (inputtedPlayerTwo));
  });
});


    // var playerNames = new Player (inputtedPlayerOne, inputtedPlayerTwo);
    // console.log(player);
