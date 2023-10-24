let timer;
let isRunning = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

const display = document.getElementById("display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const restartButton = document.getElementById("restart");
const millisecondsDisplay = document.getElementById("milliseconds");
const secondsDisplay = document.getElementById("seconds");
const minutesDisplay = document.getElementById("minutes");

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 10); // Update every 10 milliseconds
        startButton.disabled = true;
        pauseButton.disabled = false;
        restartButton.disabled = false;
    }
}

function pauseTimer() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
        startButton.disabled = false;
        pauseButton.disabled = true;
        restartButton.disabled = false;
    }
}

function restartTimer() {
    isRunning = false;
    clearInterval(timer);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    updateDisplay();
    startButton.disabled = false;
    pauseButton.disabled = true;
    restartButton.disabled = true;
}

function updateTimer() {
    milliseconds += 10;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }
    updateDisplay();
}

function updateDisplay() {
    millisecondsDisplay.textContent = padZero(milliseconds, 3);
    secondsDisplay.textContent = padZero(seconds, 2);
    minutesDisplay.textContent = padZero(minutes, 2);
}

function padZero(value, length) {
    return value.toString().padStart(length, '0');
}

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
restartButton.addEventListener("click", restartTimer);
pauseButton.disabled = true;
restartButton.disabled = true;
