const score = document.querySelector('#score-tracker');

const allButtons = document.querySelectorAll('.holes');

const startButton = document.querySelector(".start-button");

const timer = document.querySelector('#time-tracker');
let timeLeft = 90;

timer.textContent = formatTime(timeLeft); 
// .textContent updates what is shown in HTML


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds}`;
    
}
//  Learn more about how this function works ^^

let isPlaying = false;


startButton.addEventListener('click', () => {
    if (isPlaying) return;
    isPlaying = true;
    startButton.disabled = true;
    const countDown = setInterval(() => {
    timeLeft = timeLeft - 1;
    timer.textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
        clearInterval(countDown);
        startButton.disabled = false;
        isPlaying = false;
        timeLeft = 90;
        timer.textContent = formatTime(timeLeft);
    }
}, 1000); 
})
//  Learn more about how this function works ^^

const holeArray = Array.from(allButtons);
// creates an array from all html values with the class .holes 

const inactiveHoles = holeArray.filter(hole => hole.dataset.state === 'idle');
// this filters the array, and returns a list of the holes that have a state of 'idle' and adds it to
// variable inactiveHoles


const randomIndex = Math.floor(Math.random() * inactiveHoles.length);
// this creates a random index number between 0 and inactiveHoles.length

const randomHole = inactiveHoles[randomIndex]; 
// here we are 'grabing' the randomHole that was selected in line 50

// now that we have the variables we can 'grab' lets put them into a spawnMole function

randomHole.dataset.state = `active`; 


// function spawnMole() {

// }













