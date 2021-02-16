// welcome the user
alert("Welcome to Quiz Ninja!");

// The first part contains the question, the second part contains the answer of such question
var quiz = [
	["What is Superman's real Name?", "Clark Kent"],
	["What is Wonder Woman's real Name?", "Dianna Prince"],
	["What is Batman's real Name?", "Bruce Wayne"],
	];

var score = 0 // initialize score

for (var i = 0, max = quiz.length; i < max; i++) {

	// get answer from user
	var answer = prompt(quiz[i][0]); // quiz[i][0] is the ith question

	//check if answer is correct
	if (answer === quiz[i][1]){ // quiz[i][1] is the ith answer
		alert("Correct!");
		// increase score by 1
		score++;
	} else {
	  alert("Wrong!");	
	}
}

alert("Game Over, you scored " + score + " points");
