const startButton = querySelector(".start-button");

const timer = querySelector('#time-tracker');

const score = querySelector('#score-tracker');

const allButtons = querySelectorAll('#game-container');

let timeInSeconds = 60; 

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
}

function gameStart {
    timer = 0; 
    score = 0; 
    
    
}


startButton.addEventListener(click, ()) 