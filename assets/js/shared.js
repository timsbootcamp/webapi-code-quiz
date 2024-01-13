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