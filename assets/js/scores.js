// scores.js
let scoresPlayers = [];


function loadHighScores() {


  // Load from local storage based on key: 'quiz-players'
  var storedData = localStorage.getItem('quiz-players');
  if (storedData) {
    scoresPlayers = JSON.parse(storedData);
  
  }
  
  console.log(scoresPlayers.length);
}  


loadHighScores();