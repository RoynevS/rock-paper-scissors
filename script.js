const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");


const getRandomNumber = arr => {
  return Math.floor(Math.random() * arr.length)
}

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
}

const declareWinner = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    return `You win with a score of ${playerScore} to ${computerScore}.`
  } else {
    return `You lose with a score of ${playerScore} to ${computerScore}.`
  }
}

btnRock.addEventListener("click", () => {
  console.log(playRound("rock", getComputerChoice()));
});

btnPaper.addEventListener("click", () => {
  console.log(playRound("paper", getComputerChoice()));
});

btnScissors.addEventListener("click", () => {
  console.log(playRound("scissors", getComputerChoice()));
});

// const game = () => {
  //   const winner = playRound(playerSelection, computerSelection);
  //   console.log(winner);
// }

// game()
