const resultEl = document.getElementById("result");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resetBtn = document.getElementById("resetBtn");

// function random
function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) return "rock✊";
  if (randomNumber === 1) return "paper✋";
  return "scissors✌";
}

// function gamenya
function getResult(player, computer) {
  if (player === computer) return "It's a draw!";

  if (player === "rock✊" && computer === "scissors✌") return "You win!";
  if (player === "paper✋" && computer === "rock✊") return "You win!";
  if (player === "scissors✌" && computer === "paper✋") return "You win!";

  return "You lose 😢";
}

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);

  resultEl.textContent =
    "You chose " + playerChoice +
    ", computer chose " + computerChoice +
    ". " + result;

  rockBtn.disabled = true;
  paperBtn.disabled = true;
  scissorsBtn.disabled = true;
 
  resetBtn.style.display = "inline-block";
}


rockBtn.addEventListener("click", function () {
  playGame("rock✊");
});

paperBtn.addEventListener("click", function () {
  playGame("paper✋");
});

scissorsBtn.addEventListener("click", function () {
  playGame("scissors✌");
});

// reset game
resetBtn.addEventListener("click", function () {
  resultEl.textContent = "Choose your move!";

  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;

  resetBtn.style.display = "none";
});
