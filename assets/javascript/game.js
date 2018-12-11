$(document).ready(function () {
    // Set global variables for battle
    var wins = 0;
    var losses = 0;
    var hitPointsSoFar = 0;
    var pokemon1Hp;
    var pokemon2Hp;
    var pokemon3Hp;
    var pokemon4Hp;
    var battle;

    //each pokemon needs a random variable between 1-12
    // var hitPoints = Math.floor(Math.random() * 11 + 1);
    // console.log(hitPoints);

    //assign a value to "battle", need to be between 19-120
    function reset() {
        battle = Math.floor(Math.random() * 101 + 19);
        console.log(battle);
        $("#battleWin").text(battle);


        pokemon1Hp = Math.floor(Math.random() * 11 + 1);
        console.log(pokemon1Hp);

        pokemon2Hp = Math.floor(Math.random() * 11 + 1);

        pokemon3Hp = Math.floor(Math.random() * 11 + 1);

        pokemon4Hp = Math.floor(Math.random() * 11 + 1);

        hitPointsSoFar = 0
        $(".battleHitCurrent").text("Hits so far: " + hitPointsSoFar);


    };
    reset()



    // $(document).ready(function(){
    // })
    function attack(hitPoints) {
        hitPointsSoFar += hitPoints;
        $(".battleHitCurrent").text("Hits so far: " + hitPointsSoFar);
        console.log(hitPointsSoFar);
        if (hitPointsSoFar == battle) {
            wins++;
            $("#win").text("Wins: " + wins);
            reset();

        } else if (hitPointsSoFar > battle) {
            losses++;
            $("#loss").text("Losses: " + losses);
            reset();

        };

    };
    //clicking pokemon adds to the "battle" counter
    $("#pokemon1").on("click", function () {
        attack(pokemon1Hp);
        console.log(hitPointsSoFar);

    });
    $("#pokemon2").on("click", function () {
        attack(pokemon2Hp);
        console.log(hitPointsSoFar);

    });
    $("#pokemon3").on("click", function () {
        attack(pokemon3Hp);
        console.log(hitPointsSoFar);
    });

    $("#pokemon4").on("click", function () {
        attack(pokemon4Hp);
        console.log(hitPointsSoFar);
    });

});
// console.log(pokemon1Hp);
// #battleHitCurrent 
//right amount of hit points wins "battle causing a win
//wrong amount of hit points causes Ash to lose
//if either happens, game resets, gets added to wins/losses