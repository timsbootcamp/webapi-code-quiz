// scores.js

const localStorageQuiz_Key = "quiz-players";


// Load from local storage based on key:
function readScoresFromLocalStorage() {
  let scoresPlayers = [];

  var storedData = localStorage.getItem(localStorageQuiz_Key);
  if (storedData) {
      // load data into array : scoresPlayers 
      // after constructing the JavaScript value or object described by the string
      scoresPlayers = JSON.parse(storedData);
  }

  // return array
  return scoresPlayers;
}


// Read from local storage based on key:
function addNewScore(initials, score) {
  let scoresPlayers = readScoresFromLocalStorage();

  // Add new players name and score to array
  scoresPlayers.push({ name: initials, score: score });

  // Sort players in highest to lowest scores ranking
  scoresPlayers.sort((a, b) => b.score - a.score);
  var jsonScoresPlayers = JSON.stringify(scoresPlayers);
  localStorage.setItem(localStorageQuiz_Key, jsonScoresPlayers);
  window.location.href = 'highscores.html';
}


// Clear local storage for 'quiz-players'
function clearHighScores() {
  localStorage.removeItem(localStorageQuiz_Key);
  window.location.href = 'highscores.html';
}






