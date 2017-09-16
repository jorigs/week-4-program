
var random;
var crystal1;
var crystal2;
var crystal3;
var crystal4;
var wins;
var losses;
var turnCounter = 20;
var totalScore = 0;


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



function clickCrystal () {
	$("#first").on("click", function() {
		totalScore += crystal1;
		turnCounter--;
		$("#totalScore").html(totalScore);
		console.log("Current score is " + totalScore);
	})
	$("#second").on("click", function() {
		totalScore += crystal2;
		turnCounter--;
		$("#totalScore").html(totalScore);
		console.log("Current score is " + totalScore);
	})
	$("#third").on("click", function() {
		totalScore += crystal3;
		turnCounter--;
		$("#totalScore").html(totalScore);
		console.log("Current score is " + totalScore);
	})
	$("#fourth").on("click", function() {
		totalScore += crystal4;
		turnCounter--;
		$("#totalScore").html(totalScore);
		console.log("Current score is " + totalScore);
	})
}

getRandInt();

ranNum();

clickCrystal();


// += on click function for total
// total score += crystal1



