//Buisness Logic For Dice Roll -----
var player1= " ";
var player2= " ";

var roll = function(){
  return Math.floor(6*Math.random())+1;
}

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

//User Interface that clears Values --
var reset = function () {
  $("#player1").val("");
  $("#player2").val("");
}


//User Interface Logic --
$(document).ready(function() {
  $("#name").click(function(event) {
    event.preventDefault();

 });
});
