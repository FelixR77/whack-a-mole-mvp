const score = document.querySelector('#score-tracker');

const allButtons = document.querySelectorAll('#game-container');

const startButton = document.querySelector(".start-button");

const timer = document.querySelector('#time-tracker');
let timeLeft = 90;

timer.textContent = formatTime(timeLeft); 
// .textContent updates what is shown in HTML


function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds}`
}
//  Learn more about how this function works ^^




startButton.addEventListener('click', () => {
    const countDown = setInterval(() => {
    timeLeft = timeLeft - 1;
    timer.textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
        clearInterval(countDown);
    }
}, 1000); 
})













