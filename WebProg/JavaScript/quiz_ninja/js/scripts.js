// welcome the user
alert("Welcome to Quiz Ninja!");

// The first part contains the question, the second part contains the answer of such question
var quiz = [
	["What is Superman's real Name?", "Clark Kent"],
	["What is Wonder Woman's real Name?", "Dianna Prince"],
	["What is Batman's real Name?", "Bruce Wayne"],
	];

var score = 0 // initialize score

play(quiz);

function play(quiz) {
	// Main game loop//
	for (var i = 0, max = quiz.length; i < max; i++) {
		question = quiz[i][0];
		answer = ask(question);
		check(answer);
	}
	// End of Main game loop//
	gameOver();

	function ask(question) {
		return prompt(question); // quiz[i][0] is the ith question//
	}

	function check(answer) {
		if (answer === quiz[i][1]) { // quiz[i][1] is the ith answer//
			alert("Correct!");
			// Increase score by 1//
			score++;
		} else {
			alert("Wrong!");
		}		
	}

	function gameOver() {
		/* 	Informs the player that the game has finished and tell them
			many points they have scored */
		alert("Game Over, you scored " + score + " points!");
	}
}
