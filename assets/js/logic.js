// logic.js

var start_button = document.querySelector("#start");
var startScreen_div = document.querySelector("#start-screen");
var questions_div = document.querySelector("#questions");
var questionTitle_id = document.querySelector("#question-title");
var choices_div = document.querySelector("#choices");
var answerStatus_div = document.querySelector("#answer-status");


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
    button.addEventListener('click', () => checkAnswer(index));
    choices.appendChild(button);
    });
}
  

function checkAnswer(choiceIndex) {
    var userAnswer = questions[questionNo].choices[choiceIndex];

    if (questions[questionNo].answer === userAnswer) {
        answerStatus_div.textContent = "Correct";
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
