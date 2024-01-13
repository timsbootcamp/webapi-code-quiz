// scores.js

var highscores_ol_id = document.querySelector("#highscores");
var clear_button = document.querySelector("#clear");


clear_button.addEventListener("click", function() {
  clearHighScores();
});


function loadHighScores() {
  let scoresPlayers = [];

  // Load from local storage based on key: 'quiz-players'
  var storedData = localStorage.getItem('quiz-players');
  if (storedData) {
    scoresPlayers = JSON.parse(storedData);
  
    // Parse scoresPlayers array and create li
    for (let i = 0; i < scoresPlayers.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = scoresPlayers[i].name + ' - ' + scoresPlayers[i].score;
      highscores_ol_id.appendChild(listItem);
    }
  }
}  

function clearHighScores() {
  // Clear local storage for 'quiz-players'
  localStorage.removeItem("quiz-players");
  window.location.href = 'highscores.html';
}

loadHighScores();


