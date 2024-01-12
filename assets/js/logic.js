// logic.js

var start_button = document.querySelector("#start");
var startScreen_div = document.querySelector("#start-screen");
var questions_div = document.querySelector("#questions");
var questionTitle_id = document.querySelector("#question-title");
var choices_div = document.querySelector("#choices");

// Initialise variables
let questionNo = 0;


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
        choices.appendChild(button);
    });
  
  }
  