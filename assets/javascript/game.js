
var random;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var wins = 0;
var losses = 0;
var turnCounter = 20;
var totalScore = 0;

// function playGame () {
// 	getRandInt();
// }

$("#wins").text(wins);
$("#losses").text(losses);


function getRandInt(min, max) {
	return Math.floor(max - Math.random() * (max - min));
}


function ranNum() {
	crystal1 = getRandInt(1,12);
	crystal2 = getRandInt(1,12);
	crystal3 = getRandInt(1,12);
	crystal4 = getRandInt(1,12);
	random = getRandInt(19,120);
	$("#ranNum").html(random);
}

function youWin() {
	alert("You Win!");
	$('#wins').text(wins);
}

function youLose() {
	alert("You Lose :(");
	$("#losses").text(losses);
}



function clickCrystal () {
	$("#first").on("click", function() {
		totalScore += crystal1;
		turnCounter--;
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
		turnCounter--;
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
		turnCounter--;
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
		turnCounter--;
		console.log("Current score is " + totalScore);
		$("#totalScore").html(totalScore);
			if (totalScore === random) {
				youWin();
			} else if (totalScore > random) {
				youLose();
			}
	})
}

// function winLose () {
// 	if ()
// }

// function reset() {
// 	wins = 0;
// 	winCount.innerHTML = wins;
// 	losses = 0;
// 	lossCount.innerHTML = losses;
// 	blankShow = [];
// 	playGame();
// }

getRandInt();

ranNum();

clickCrystal();


// += on click function for total
// total score += crystal1



