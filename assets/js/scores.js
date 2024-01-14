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
  
  // Converts the scoresPlayers array to the JSON notation that the value represents
  var jsonScoresPlayers = JSON.stringify(scoresPlayers);
  
  // Write to localstorage on key
  localStorage.setItem(localStorageQuiz_Key, jsonScoresPlayers);

  // Goto webpage: 'highscores.html'
  window.location.href = 'highscores.html';
}


// Clear local storage for 'quiz-players'
function clearHighScores() {
  // Clear storage based on key 
  localStorage.removeItem(localStorageQuiz_Key);

  // Goto webpage: 'highscores.html'
  window.location.href = 'highscores.html';
}






