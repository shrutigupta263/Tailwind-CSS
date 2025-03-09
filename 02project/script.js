
const textContainer = document.getElementById("text-container");
const inputArea = document.getElementById("input-area");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const restartButton = document.getElementById("restart-btn");
const startButton = document.getElementById("start-btn");
const stopButton = document.getElementById("stop-btn");

const sampleTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing speed tests measure how fast you can type.",
    "Practice daily to improve your typing skills and accuracy."
];

let timeLeft = 60;
let timerInterval;
let isTyping = false;
let currentText = "";

function startGame() {
    resetGame();
    currentText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    textContainer.textContent = currentText;
    inputArea.disabled = false;
    isTyping = false;
}

function resetGame() {
    clearInterval(timerInterval);
    timeLeft = 60;
    timerElement.textContent = timeLeft;
    wpmElement.textContent = 0;
    inputArea.value = "";
    inputArea.disabled = true;
    isTyping = false;
}

function startTimer() {
    if (!isTyping) {
        isTyping = true;
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                timerElement.textContent = timeLeft;
            } else {
                clearInterval(timerInterval);
                inputArea.disabled = true;
            }
        }, 1000);
    }
}

inputArea.addEventListener("input", () => {
    if (!isTyping) {
        startTimer();
    }
    calculateSpeed();
});

function calculateSpeed() {
    const wordsTyped = inputArea.value.trim().split(" ").length;
    const timeElapsed = 60 - timeLeft;
    const wpm = timeElapsed > 0 ? Math.round((wordsTyped / timeElapsed) * 60) : 0;
    wpmElement.textContent = wpm;
}

startButton.addEventListener("click", () => {
    startGame();
    startTimer();
});

stopButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    inputArea.disabled = true;
});

restartButton.addEventListener("click", startGame);

window.onload = resetGame;