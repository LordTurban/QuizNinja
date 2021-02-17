// welcome the user
alert("Welcome to Quiz Ninja!");

/// view functions ///
function update(element, content, klass) {
	var p = element.firstChild || document.createElement("p");
	p.textContent = content;
	element.appendChild(p);
	if (klass) {
		p.className = klass;
	}
}
//// dom references ////
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");

quiz = {
	"name": "Super Hero Name Quiz",
	"description": "How many super heroes can you name?",
	"question": "What is the real name of ",
	"questions": [
		{ "question": "Superman", "answer": "Clark Kent" },
		{ "question": "Batman", "answer": "Bruce Wayne" },
		{ "question": "Wonder Woman", "answer": "Dianna Prince" }
	]
}

play(quiz);

function play(quiz) {
	// Main game loop//
	var score = 0;

	update($score, score);

	for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
		question = quiz.questions[i].question;
		answer = ask(question);
		check(answer);
	}
	// End of Main game loop//
	gameOver();

	function ask(question) {
		update($question, quiz.question + question);
		return prompt("Enter your answer:");
	}

	function check(answer) {
		if (answer === quiz.questions[i].answer) {
			update($feedback, "Correct!", "right");
			// Increase score by 1//
			score++;
			update($score, score);
		} else {
			update($feedback, "Wrong!", "wrong");
		}		
	}

	function gameOver() {
		/* 	Informs the player that the game has finished and tell them
			many points they have scored */
		update($question, "Game Over, you scored " + score + " points");
	}
}
