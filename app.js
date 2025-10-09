const startButton = document.querySelector(".start-button");

const timer = document.querySelector('#time-tracker');

const score = document.querySelector('#score-tracker');

const allButtons = document.querySelectorAll('#game-container');

let timeInSeconds = 60; 

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds}`
}
//  Learn more about how this function works ^^

timer.textContent = formatTime(90);
// .textContent updates what is shown in HTML




// function gameStart {
//     timer = 90; 
//     score = 0; 
    
    
// }


// startButton.addEventListener(click, ()) 