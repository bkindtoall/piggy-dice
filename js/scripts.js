//Buisness Logic For Dice Roll -----
var player1= " ";
var player2= " ";

var roll = function(){
  return Math.floor(6*Math.random())+1;
}

//Buisness Logic For Player Options----
function Players (turn){
  this.playername;
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
}

// Rolling a One----
player.prototype.rollone = function (){
  if (this.roll === 1) {
    this.tempscore = 0
  }
}















$(document).ready(function() {
  $("#name").submit(function(event) {
    event.preventDefault();
    var player1 = $("input#name1").val();
    var player2 = $("input#name2").val();
    $("input#name1").val("");
   $("input#name2").val("");
 });
});
