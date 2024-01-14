// logic.js



// Constants for QuerySelectors for index.html
const start_button = document.querySelector("#start");
const startScreen_div = document.querySelector("#start-screen");
const questions_div = document.querySelector("#questions");
const questionTitle_id = document.querySelector("#question-title");
const choices_div = document.querySelector("#choices");
const answerStatus_div = document.querySelector("#answer-status");
const answerLine_div = document.querySelector("#answer-line");

const time_span_id = document.querySelector("#time");
const endScreen_div = document.querySelector("#end-screen");
const finalScore_span_id = document.querySelector("#final-score");

const submit_button = document.querySelector("#submit");
const initials = document.querySelector("#initials");


// Other Constants
const subtractTime = 10;


// Initialise variables
let questionNo = 0;
let secondsLeft = 76;
let score = 0;
let timerInterval;
let hrElement;



// Event Listener for 'Start Quiz' button click event 
start_button.addEventListener("click", function () {
  startQuiz();
});


// Event Listener for 'Submit' button click event
submit_button.addEventListener("click", function () {
  addNewScore(initials.value, score);
});


// Start Quiz ...
function startQuiz() {
  // Hide #start-screen (ie. Hide title and Start Quiz button)
  startScreen_div.classList.add('hide');
  startScreen_div.classList.remove('show');

  // Show #questions
  questions_div.classList.remove('hide');
  questions_div.classList.add('show');

  setTimer();

  // Show first question
  showQuestion();
}



// Display Question x based on questions[x].question
function showQuestion() {
  questionTitle_id.textContent = questions[questionNo].question;

  // Initialise to blank in case there are buttons currently displayed
  choices_div.innerHTML = '';

  // Displays possible answers as buttons
  questions[questionNo].choices.forEach((choice, index) => {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => checkAnswer(index));
    choices.appendChild(button);
  });
}


// Check Answer is correct or incorrect
function checkAnswer(choiceIndex) {
  var userAnswer = questions[questionNo].choices[choiceIndex];

  answerLine_div.classList.remove('hide');

  if (questions[questionNo].answer === userAnswer) {
    // Update display to say "Correct"
    answerStatus_div.textContent = "Correct";

    // Play sound for correct
    var audio = new Audio('assets/sfx/correct.wav');
    audio.play();

    // Increment score variable
    score++;
  }
  else {
    // Update display to say "Incorrect"
    answerStatus_div.textContent = "Incorrect";

    // Play sound for incorrect
    var audio = new Audio('assets/sfx/incorrect.wav');
    audio.play();

    // Because incorrect answer then subtract x time from secondsleft
    // Ensure secondsleft does not go into minus
    if (secondsLeft - subtractTime < 0) {
      secondsLeft = 0;
    }
    else {
      secondsLeft = secondsLeft - subtractTime;
    }
  }

  // displayNext function after 200 milliseconds
  if (secondsLeft > 0) {
    // Make use of timer to wait 200 milliseconds
    setTimeout(displayNext, 200);
  }
}


// Display next question
function displayNext() {
  // Initialise answerStatus
  answerLine_div.classList.add('hide');
  answerStatus_div.textContent = "";

  if (questionNo < questions.length - 1) {
    // Increment questionNo variable
    questionNo++;

    // Display next question to User
    showQuestion();
  }
  else {
    // Since there are no more questions then it goes into timeUp function
    timeUp();
  }
}


// Timer Interval
function setTimer() {
  // Sets interval in variable
  timerInterval = setInterval(function () {

    if (secondsLeft <= 1) {
      // Since no more seconds left, then timeup function is called
      secondsLeft = 0;
      timeUp();
    }
    else {
      // Decrement secondsLeft variable
      secondsLeft--;
    }

    // Display seconds left
    time_span_id.textContent = secondsLeft;
  }, 1000);
}


// Once time is up
function timeUp() {

  // Stops execution of action at set interval
  clearInterval(timerInterval);

  // Initialise title to blank
  questionTitle_id.textContent = "";

  // Initialise to blank in case there are buttons currently displayed
  choices.innerHTML = "";

  // Initialise answerstatus to blank for correct and incorrect
  answerStatus_div.textContent = "";

  // Show #end-screen 
  endScreen_div.classList.remove('hide');
  endScreen_div.classList.add('show');

  // Displays final score
  finalScore_span_id.textContent = score;
}

