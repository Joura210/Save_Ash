// Set global variables for battle
var wins = "0";
var losses = "0";
var hitPointsSoFar = "";
var pokemon1Hp;
var pokemon2Hp;
var pokemon3Hp;
var pokemon4Hp;
// var battle;

//each pokemon needs a random variable between 1-12
var hitPoints = Math.floor(Math.random() * 11 + 1);
console.log(hitPoints);

//assign a value to "battle", need to be between 19-120

   var battle = Math.floor(Math.random() * 101 + 19) ;
    console.log(battle);
    $("#battleWin").text(battle);


pokemon1Hp = Math.floor(Math.random() * 11 + 1);
console.log(pokemon1Hp);

pokemon2Hp = Math.floor(Math.random() * 11 + 1);

pokemon3Hp = Math.floor(Math.random() * 11 + 1);

pokemon4Hp = Math.floor(Math.random() * 11 + 1);





// $(document).ready(function(){
// })

//clicking pokemon adds to the "battle" counter
// $("#pokemon1").on("click", pokemon1Hp );
// console.log(pokemon1Hp);
// #battleHitCurrent 
//right amount of hit points wins "battle causing a win
//wrong amount of hit points causes Ash to lose
//if either happens, game resets, gets added to wins/losses