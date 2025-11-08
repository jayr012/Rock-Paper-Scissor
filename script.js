const userChoiceText = document.getElementById("userChoice");
const computerChoiceText = document.getElementById("computerChoice");
const message = document.getElementById("message");
const playAgainButton = document.getElementById("playAgain");

const choices = ["rock", "paper", "scissors"];

function play(userChoice) {
  // Random computer choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  // Display choices
  userChoiceText.textContent = "You chose: " + userChoice;
  computerChoiceText.textContent = "Computer chose: " + computerChoice;

  // Condition to decide winner
  if (userChoice === computerChoice) {
    message.textContent = "🤝 It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    message.textContent = "🎉 You win!";
  } else {
    message.textContent = "💻 Computer wins!";
  }

  // Show Play Again button
  playAgainButton.style.display = "inline-block";
}

function resetGame() {
  userChoiceText.textContent = "";
  computerChoiceText.textContent = "";
  message.textContent = "";
  playAgainButton.style.display = "none";
}
