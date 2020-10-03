// welcome the user
alert("Welcome to Quiz Ninja!");

var quiz = [
	["What is Fede's full name?","Federico Guillermo Turban Almeida"],
	["What is Tlahui's full name?","Tlahuiltzin Shurabi Raygoza Valle"],
	["What is Bolsas' full name?","Hector Rurawe Sanchez Avelar"],
	["What is Pancho's full name?","Francisco Javier Aceves Lopez"],
	["What is Testicle's full name?","Manuel Isaias Garcia Castro"],
	["What is C4G stands for?","Carry 4 Gold"],
	];

var score = 0 // initialize score

for(var i=0,max=quiz.length;i<max;i++){

	// get answer from user
	var answer = prompt(quiz[i][0]); // quiz[i][0] is the ith question

	//check if answer is correct
	if(answer === quiz[i][1]){ // quiz[i][1] is the ith answer
		alert("Correct!");
		// increase score by 1
		score++;
	} else {
	  alert("Wrong!");	
	}
}

alert("Game Over, you scored " + score + " points");