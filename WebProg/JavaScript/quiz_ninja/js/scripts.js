var quiz = {
	"name": "Super Hero Name Quiz",
	"description": "How many super heroes can you name?",
	"question": "What is the real name of ",
	"questions": [
		{ "question": "Superman", "answer": "Clark Kent" },
		{ "question": "Batman", "answer": "Bruce Wayne" },
		{ "question": "Wonder Woman", "answer": "Dianna Prince" }
	]
}
//// dom references ////
var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $start = document.getElementById("start");
var $form = document.getElementById("answer");
var $timer = document.getElementById("timer");
/// view functions ///
function update(element, content, klass) {
	var p = element.firstChild || document.createElement("p");
	p.textContent = content;
	element.appendChild(p);
	if (klass) {
		p.className = klass;
	}
}

function hide(element) {
	element.style.display = "none";
}

function show(element) {
	element.style.display = "block";
}
// Event Listeners //
$start.addEventListener('click', function() { play(quiz) }, false);
// Hide the form at the start of the game //
hide($form);
//// Functions Definitions ////
function play(quiz) {
	// Initialize Score //
	var score = 0;

	update($score, score);
	// Hide button and show form //
	hide($start);

	show($form);

	$form.addEventListener('submit', function(event) {
		event.preventDefault();
		check($form[0].value);
	}, false);
	// Initialize timer and set up an interval that counts down
	var time = 20;
	update($timer, time);
	var interval = window.setInterval(countDown, 1000);

	var i = 0;
	
	chooseQuestion();
	// Nested functions //
	function chooseQuestion() {
		var question = quiz.questions[i].question;
		ask(question);
	}

	function ask(question) {
		update($question, quiz.question + question);
		$form[0].value = "";
		$form[0].focus();
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
		i++;
		if (i === quiz.questions.lenght) {
			gameOver();
		} else {
			chooseQuestion();
		}
	}
	// This is called every second and decrease the time //
	function countDown() {
		// Decrease time by 1 //
		time--;
		// Update the time displayed //
		update($timer, time);
		// The game is over if the timer has reached 0 //
		if (time <= 0) {
			gameOver();
		}
	}

	function gameOver() {
		/* 	Informs the player that the game has finished and tell them
			many points they have scored */
		update($question, "Game Over, you scored " + score + " points");
		hide($form);
		show($start);
		// Stop the countdown interval //
		window.clearInterval(interval);
	}
}
