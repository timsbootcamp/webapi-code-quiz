// scores.js

// Constants for QuerySelectors for highscores.html
const highscores_ol_id = document.querySelector("#highscores");
const clear_button = document.querySelector("#clear");


clear_button.addEventListener("click", function() {
  clearHighScores();
});


function loadHighScores() { 
  let scoresPlayers = readScoresFromLocalStorage();

  // Parse scoresPlayers array and create li
  for (let i = 0; i < scoresPlayers.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = scoresPlayers[i].name + ' - ' + scoresPlayers[i].score;
    highscores_ol_id.appendChild(listItem);
  }
  
}  

function clearHighScores() {
  // Clear local storage for 'quiz-players'
  localStorage.removeItem(localStorageQuiz_Key);
  window.location.href = 'highscores.html';
}

loadHighScores();


