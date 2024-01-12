// logic.js

var start_button = document.querySelector("#start");
var startScreen_div = document.querySelector("#start-screen");
var questions_div = document.querySelector("#questions");
var questionTitle_id = document.querySelector("#question-title");
var choices_div = document.querySelector("#choices");
var answerStatus_div = document.querySelector("#answer-status");

var timee = document.querySelector("#time");
var endScreen_div = document.querySelector("#end-screen");


// Initialise variables
let questionNo = 0;
let secondsLeft = 20;
let score = 0;


start_button.addEventListener("click", function() {
    startQuiz();
});
  
  
function startQuiz() {
    // Hide #start-screen (ie. Hide title and Start Quiz button)
    startScreen_div.classList.remove('show');
    startScreen_div.classList.add('hide');

    // Show #questions
    questions_div.classList.remove('hide');
    questions_div.classList.add('show');  

    setTime();

    // Show first question
    showQuestion();   
}    



function showQuestion() {
    // Display Question
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
  

function checkAnswer(choiceIndex) {
    var userAnswer = questions[questionNo].choices[choiceIndex];

    if (questions[questionNo].answer === userAnswer) {
        answerStatus_div.textContent = "Correct";
        score++;
    }
    else {
        answerStatus_div.textContent = "Incorrect";      
    } 

    // Make use of timer to wait 2 seconds
    setTimeout(displayNext, 1000);
}


function displayNext() {
    // Initialise answerStatus
    answerStatus_div.textContent = "";
        
    if (questionNo < questions.length-1) {
        // Increment questionNo variable
        questionNo++;

        // Display next question to User
        showQuestion();
    }  
 }


 function setTime() {
  // Sets interval in variable
    var timerInterval = setInterval(function() {

    if (secondsLeft<=0) {
      secondsLeft = 0
    }
    else
    {
      secondsLeft--;
    }

    timee.textContent = secondsLeft;

    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // alert("Time up!")
      timeUp();
    }

  }, 1000);
}

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {

    secondsLeft--;
    timee.textContent = secondsLeft;

    if(secondsLeft <= 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // alert("Time up!")
        timeUp();
      }
  
}, 1000);
}
  

function timeUp() {
    // Initialise title to blank
    questionTitle_id.textContent = "";

    // Initialise to blank in case there are buttons currently displayed
    choices.innerHTML = "";

    // Initialise answerstatus to blank for correct and incorrect
    answerStatus_div.textContent = "";

    endScreen_div.classList.remove('hide');
    endScreen_div.classList.add('show'); 
}
