let clicks = 0;
let timeLeft = 10;
let timer = null;

const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const messageEl = document.getElementById("message");
const clkButton = document.getElementById("clickBtn");
const resetButton = document.getElementById("resetBtn");

// function gamenya
function calculateFinalScore(clicks, timeLeft) {
  if (timeLeft === 0) {
    return `Game Over! Your final score is ${clicks}.`;
  } else {
    return `Keep clicking! Current score: ${clicks}`;
  }
}

// klik tombol game //
clkButton.addEventListener("click", function () {
  if (timeLeft > 0) {
    clicks++;
    scoreEl.textContent = `Score: ${clicks}`;
    messageEl.textContent = calculateFinalScore(clicks, timeLeft);
  }
 });

// reset 
resetButton.addEventListener("click", function () {

  if (timer) {
    clearInterval(timer);
  }

  clicks = 0;
  timeLeft = 10;

    scoreEl.textContent = "Score: 0";
  timerEl.textContent = "Time Left: 10";
  messageEl.textContent = "Game started! Keep clicking!";
  clkButton.disabled = false;

  // mulai timer baru
  timer = setInterval(function () {
    timeLeft--;
    timerEl.textContent = `Time Left: ${timeLeft}`;
    messageEl.textContent = calculateFinalScore(clicks, timeLeft);

    if (timeLeft === 0) {
      clearInterval(timer);
      clkButton.disabled = true;
    }
  }, 1000);
});

resetButton.click();

