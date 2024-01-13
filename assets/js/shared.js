// constants.js - this file has constants shared with other js files

const localStorageQuiz_Key = "quiz-players";


// Load from local storage based on key:
function readScoresFromLocalStorage() {

    let scoresPlayers = [];

    var storedData = localStorage.getItem(localStorageQuiz_Key);
    if (storedData) {
        scoresPlayers = JSON.parse(storedData);
    }

    return scoresPlayers;
}


function addNewScore(initials, score) {

    let scoresPlayers = readScoresFromLocalStorage();
  
    // Add new players name and score to array
    scoresPlayers.push({ name: initials, score: score });
    
    // Sort players in highest to lowest scores ranking
    scoresPlayers.sort((a,b)=>b.score-a.score);
    var jsonScoresPlayers = JSON.stringify(scoresPlayers);
    localStorage.setItem(localStorageQuiz_Key, jsonScoresPlayers);
    window.location.href = 'highscores.html';
}


