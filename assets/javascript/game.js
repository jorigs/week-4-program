var random;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var wins = 0;
var losses = 0;
var totalScore = 0;


function getRandInt(min, max) {
    return Math.floor(max - Math.random() * (max - min));
}

$("#wins").text(wins);
$("#losses").text(losses);

//each random number functions
function ranNum() {
    random = getRandInt(19, 120);
    $("#ranNum").html(random);
    crystal1 = getRandInt(1, 12);
    crystal2 = getRandInt(1, 12);
    crystal3 = getRandInt(1, 12);
    crystal4 = getRandInt(1, 12);
}

//reset when player wins or loses
function reset() {
    random = getRandInt(19, 120);
    console.log(random);
    $("#ranNum").html(random);
    crystal1 = getRandInt(1, 12);
    crystal2 = getRandInt(1, 12);
    crystal3 = getRandInt(1, 12);
    crystal4 = getRandInt(1, 12);
    totalScore = 0;
    $('#totalScore').text(totalScore)
}


//alerts to whether player wins or loses
function youWin() {
	document.getElementById('chime').play();
    alert("You Win!");
    wins++;
    $('#wins').text(wins);
    console.log("You have won " + wins + " times!");
    reset();
}

function youLose() {
	document.getElementById('drum').play();
    alert("You Lose :(");
    losses++;
    $("#losses").text(losses);
    console.log("You have lost " + losses + " times.");
    reset();
}

//clicking each crystal makes your score go up
//if score equals random number, you win
//if score goes above, you lose.
function clickCrystal() {
    $("#first").on("click", function() {
        totalScore += crystal1;
        console.log("Current score is " + totalScore);
        $("#totalScore").html(totalScore);
        if (totalScore === random) {
            youWin();
        } else if (totalScore > random) {
            youLose();
        }
    })
    $("#second").on("click", function() {
        totalScore += crystal2;
        console.log("Current score is " + totalScore);
        $("#totalScore").html(totalScore);
        if (totalScore === random) {
            youWin();
        } else if (totalScore > random) {
            youLose();
        }
    })
    $("#third").on("click", function() {
        totalScore += crystal3;
        console.log("Current score is " + totalScore);
        $("#totalScore").html(totalScore);
        if (totalScore === random) {
            youWin();
        } else if (totalScore > random) {
            youLose();
        }
    })
    $("#fourth").on("click", function() {
        totalScore += crystal4;
        console.log("Current score is " + totalScore);
        $("#totalScore").html(totalScore);
        if (totalScore === random) {
            youWin();
        } else if (totalScore > random) {
            youLose();
        }
    })
}

// run functions
getRandInt();

ranNum();

clickCrystal();