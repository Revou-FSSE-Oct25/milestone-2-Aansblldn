const enterBtn = document.getElementById("enterGame");
const hero = document.getElementById("gameHero");
const info = document.getElementById("gameInfo");
const gameArea = document.getElementById("gameArea");

enterBtn.addEventListener("click", () => {
  hero.style.opacity = "0";
  info.style.opacity = "0";

  hero.style.transition = "opacity 0.6s ease";
  info.style.transition = "opacity 0.6s ease";

  setTimeout(() => {
    hero.style.display = "none";
    info.style.display = "none";

    gameArea.style.display = "block";
    gameArea.style.opacity = "0";

    setTimeout(() => {
      gameArea.style.transition = "opacity 0.6s ease";
      gameArea.style.opacity = "1";
    }, 50);

  }, 600);
});

// -----------------Game Area tebak angka---------------------

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 5;

// function cek tebakan
function checkGuess(secretNumber, playerGuess, attemptsLeft) {
  if (attemptsLeft <= 0) {
    return "No attempts left! Game over.";
  }

  if (playerGuess === secretNumber) {
    return "Congratulations! You guessed the right number!";
  } else if (playerGuess > secretNumber) {
    return "Too high! Try again.";
  } else {
    return "Too low! Try again.";
  }
}

const input = document.getElementById("guessInput");
const button = document.getElementById("guessBtn");
const result = document.getElementById("result");
const attempts = document.getElementById("attempts");
const bandar = document.getElementById("bandar")

button.addEventListener("click", handleGuess);

// function game
function handleGuess() {
  const playerGuess = Number(input.value);

  if (playerGuess) {
    } else {
    result.textContent = "Masukkan angka terlebih dahulu!";
    return;
    }

  const message = checkGuess(secretNumber, playerGuess, attemptsLeft);
  attemptsLeft--;

  result.textContent = message;
  attempts.textContent = `Sisa percobaan: ${attemptsLeft}`;
  

  if (playerGuess === secretNumber || attemptsLeft <= 0) {
    input.disabled = true;
    button.disabled = true;
    bandar.textContent = `Secret Number: ${secretNumber}`
  }

  input.value = "";
}
