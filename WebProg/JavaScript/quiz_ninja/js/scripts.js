(function () {
  "use strict";
  var quiz = {
    name: "Super Hero Name Quiz",
    description: "How many super heroes can you name?",
    question: "What is the real name of ",
    questions: [
      { question: "Superman", answer: "Clark Kent", asked: false },
      { question: "Batman", answer: "Bruce Wayne", asked: false },
      { question: "Wonder Woman", answer: "Dianna Prince", asked: false },
      { question: "IronMan", answer: "Tony Stark", asked: false },
      { question: "Captain America", answer: "Steve Rogers", asked: false },
      { question: "Lord Turban", answer: "Federico Turban", asked: false },
    ],
  };
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
  $start.addEventListener(
    "click",
    function () {
      play(quiz);
    },
    false
  );
  // Hide the form at the start of the game //
  hide($form);
  //// Functions Definitions ////
  function random(a, b, callback) {
    if (b === undefined) {
      // If only one argument is supplied, assume the lower limit is 1 //
      (b = a), (a = 1);
    }
    var result = Math.floor((b - a + 1) * Math.random()) + a;
    if (typeof callback === "function") {
      result = callback(result);
    }
    return result;
  }

  function play(quiz) {
    // Initialize Score //
    var score = 0;
    update($score, score);
    // Initialize timer and set up an interval that counts down //
    var time = 20;
    update($timer, time);
    var interval = window.setInterval(countDown, 1000);
    // Hide button and show form //
    hide($start);
    show($form);
    // Add event listener to form when it's submitted //
    $form.addEventListener(
      "click",
      function (event) {
        event.preventDefault();
        check(event.target.value);
      },
      false
    );
    // Current Question //
    var question;

    chooseQuestion();
    // Nested functions //
    function chooseQuestion() {
      console.log("chooseQuestion() invoked");
      var questions = quiz.questions.filter(function (question) {
        return question.asked === false;
      });
      // Set the current question //
      question = questions[random(questions.length) - 1];
      ask(question);
    }

    function ask(question) {
      console.log("ask() invoked");
      // Set the question.asked property to true so it's not asked again //
      question.asked = true;
      update($question, quiz.question + question.question + "?");
      // Clear the previus options //
      $form.innerHTML = "";
      // Create an array to put the different options in and a button variable //
      var options = [],
        button;
      var option1 = chooseOption();
      options.push(option1.answer);
      var option2 = chooseOption();
      options.push(option2.answer);
      // Add the actual answer at a random place in the options array //
      options.splice(random(0, 2), 0, question.answer);
      // Loop through each option and display it as a button //
      options.forEach(function (name) {
        button = document.createElement("button");
        button.value = name;
        button.textContent = name;
        $form.appendChild(button);
      });
      // Choose an option from all the possible answers but without choosing the same option twice //
      function chooseOption() {
        var option = quiz.questions[random(quiz.questions.length) - 1];
        /* Check to see if the option chosen is the current question or already one of the options,
				if it is then recursively call this function until it isn't */
        if (option === question || options.indexOf(option.answer) !== -1) {
          return chooseOption();
        }
        return option;
      }
    }

    function check(answer) {
      console.log("check() invoked");
      if (answer === question.answer) {
        update($feedback, "Correct!", "correct");
        // Increase score by 1 //
        score++;
        update($score, score);
      } else {
        update($feedback, "Wrong!", "wrong");
      }
      chooseQuestion();
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
      console.log("gameOver() invoked");
      /* 	Informs the player that the game has finished and tell them
				many points they have scored */
      update($question, "Game Over, you scored " + score + " points");
      // Stop the countdown interval //
      window.clearInterval(interval);
      hide($form);
      show($start);
    }
  }
})();
