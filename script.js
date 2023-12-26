const buttons = document.querySelectorAll(".play-btn");
const winnerBox = document.querySelector(".winner-box");
const scoreBox = document.querySelector(".score");

let playerScore = 0;
let computerScore = 0;

const getRandomNumber = arr => {
  return Math.floor(Math.random() * arr.length)
};

const getComputerChoice = () =>  {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[getRandomNumber(choices)]
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "Draw! Play Again"
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beat Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats Paper";
  }
};

const declareWinner = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    return `You win with a score of ${playerScore} to ${computerScore}.`
  } else {
    return `You lose with a score of ${playerScore} to ${computerScore}.`
  }
};

const displayScore = (playerScore, computerScore) => {
  if (playerScore === 5 || computerScore === 5) {
    scoreBox.innerText = declareWinner(playerScore, computerScore);
  } else {
    scoreBox.innerText = `${playerScore} : ${computerScore}`;
  }
};

const removeListener = () => {
  buttons.forEach((button) => {
    button.removeEventListener("click", playGame);
  })
}

const resetGame = () => {
  const resetBtn = document.createElement("button");
  resetBtn.innerText = "Reset";
  scoreBox.appendChild(resetBtn);
  resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    scoreBox.removeChild(resetBtn);
    winnerBox.innerText = "";
    scoreBox.innerText = "";
    game()
  });
};

const playGame = (event) => {
  const computerSelection = getComputerChoice();
  const playerSelection = event.target.id;

  const winner = playRound(playerSelection, computerSelection);
  winnerBox.innerText = winner;

  if (winner.includes("lose")) {
    computerScore++;
  } else if (winner.includes("win")) {
    playerScore++;
  }

  displayScore(playerScore, computerScore);

  if (playerScore === 5 || computerScore === 5) {
    declareWinner(playerScore, computerScore);
    removeListener()
    resetGame();
  }
};

const game = () => {
  buttons.forEach((button) => {
    button.addEventListener("click", playGame);
  });
}

game();
