const score = document.querySelector('#score-tracker');

const allButtons = document.querySelectorAll('.hole');

const startButton = document.querySelector(".start-button");

const timer = document.querySelector('#time-tracker');

let timeLeft = 60;

let currentScore = 0;

let isPlaying = false;

const holeArray = Array.from(allButtons);
 
score.textContent = currentScore

timer.textContent = formatTime(timeLeft); 
// .textContent updates what is shown in HTML


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (remainingSeconds <=9) {
        return `${minutes}:0${remainingSeconds}`;
    } 
    return `${minutes}:${remainingSeconds}`;
}
//  Learn more about how this function works ^^

allButtons.forEach(hole => {
    hole.addEventListener('click', () => {
        if (!isPlaying) return;

        if(hole.dataset.state === 'active') {
            currentScore = currentScore + 15;
            hole.dataset.state = 'hit';
        } else if (hole.dataset.state === 'idle' 
            && hole.dataset.state === 'hit') {
            currentScore = currentScore - 10;
        }
        score.textContent = currentScore;
    });
});

function spawnMole(){
    const holeArray = Array.from(allButtons);
    // creates an array from all of the values in allButtons which are the ones in the class .hole

    const inactiveHoles = holeArray.filter(hole => hole.dataset.state === `idle`);
    //goes through the array and filters the ones that have a state = idle. takes those values and 
    //ads them to a variable: inactiveHoles

    const randomIndex = Math.floor(Math.random() * inactiveHoles.length);
    //creates a random index number between 0 and inactiveHoles.length

    const randomHole = inactiveHoles[randomIndex];
    //here we are 'grabing' the hole that was randomly selected from the inactiveHoles and adding it
    // to a variable named randomHole. 

    randomHole.dataset.state = `active`; 
    //setting that randomHole to active. So we can identify it for tracking points and in css to show
    // the mole pop up 

    const moleTime = Math.random() * 1000 + 1000; 
    // selects a random number and multiply by 4000ms (4 sec.) and add 1000ms (1 sec.)

    setTimeout(() => {
        randomHole.dataset.state = `idle`;
    }, moleTime);
    //returns the randomHole state back to idle once the moleTime amount runs out. 
}
let spawnIntervalId;

startButton.addEventListener('click', () => {
    if (isPlaying) return;
    isPlaying = true;
    startButton.disabled = true;
    spawnIntervalId = setInterval(spawnMole, 800);
    const countDown = setInterval(() => {
    timeLeft = timeLeft - 1;
    timer.textContent = formatTime(timeLeft);
    if (timeLeft <= 0) {
        clearInterval(spawnIntervalId);
        clearInterval(countDown);
        startButton.disabled = false;
        isPlaying = false;
        timeLeft = 90;
        timer.textContent = formatTime(timeLeft);
    }
}, 1000); 
})
//  Learn more about how this function works ^^

















