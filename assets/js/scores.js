// scores.js

// Constants for QuerySelectors for highscores.html
const highscores_ol_id = document.querySelector("#highscores");
const clear_button = document.querySelector("#clear");


// Event Listener for 'Clear Highscores' button click event 
clear_button.addEventListener("click", function() {
  clearHighScores();
});


function loadHighScores() { 

  // Read scores from local storage and store in an array
  let scoresPlayers = readScoresFromLocalStorage();

  // Parse scoresPlayers array and create li
  for (let i = 0; i < scoresPlayers.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = scoresPlayers[i].name + ' - ' + scoresPlayers[i].score;
    highscores_ol_id.appendChild(listItem);
  }
  
}  

  // Clear local storage for 'quiz-players'
  function clearHighScores() {
  localStorage.removeItem(localStorageQuiz_Key);
  window.location.href = 'highscores.html';
}


// Run function to load high scores
loadHighScores();


